import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ivqlibyldbbrvdhjrqhg.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const BUCKET_NAME = "resumes";

/**
 * Ensures the 'resumes' bucket exists in Supabase Storage.
 */
export async function ensureResumesBucket(): Promise<void> {
  try {
    await prisma.$executeRawUnsafe(`
      INSERT INTO storage.buckets (id, name, public)
      VALUES ('${BUCKET_NAME}', '${BUCKET_NAME}', true)
      ON CONFLICT (id) DO UPDATE SET public = true;
    `);
  } catch (error) {
    console.error("Failed to ensure storage bucket:", error);
  }
}

/**
 * Uploads a candidate resume document to Supabase Storage.
 * Falls back to local public uploads if Supabase REST key is not configured.
 */
export async function uploadResumeDocument(
  fileBuffer: Buffer,
  originalFilename: string,
  contentType: string
): Promise<{ url: string; fileName: string }> {
  // Ensure the bucket exists
  await ensureResumesBucket();

  // Create clean, sanitized unique filename
  const timestamp = Date.now();
  const safeBaseName = originalFilename
    .replace(/[^a-zA-Z0-9.-]/g, "_")
    .replace(/_{2,}/g, "_");
  const uniqueFileName = `${timestamp}_${safeBaseName}`;

  const apiKey = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY;

  // Option A: Upload via Supabase Storage REST API if an API key is present
  if (apiKey) {
    try {
      const uploadUrl = `${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${uniqueFileName}`;
      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          apikey: apiKey,
          "Content-Type": contentType || "application/octet-stream",
          "x-upsert": "true",
        },
        body: new Uint8Array(fileBuffer),
      });

      if (response.ok) {
        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${uniqueFileName}`;
        return { url: publicUrl, fileName: uniqueFileName };
      }

      console.warn("Supabase Storage REST upload failed, using file fallback:", await response.text());
    } catch (restError) {
      console.warn("Supabase Storage REST exception:", restError);
    }
  }

  // Option B: High-reliability file storage fallback inside public/uploads/resumes
  const uploadsDir = path.join(process.cwd(), "public", "uploads", "resumes");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const filePath = path.join(uploadsDir, uniqueFileName);
  fs.writeFileSync(filePath, fileBuffer);

  const localPublicUrl = `/uploads/resumes/${uniqueFileName}`;
  return { url: localPublicUrl, fileName: uniqueFileName };
}
