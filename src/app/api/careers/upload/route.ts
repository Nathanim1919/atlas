import { NextRequest, NextResponse } from "next/server";
import { uploadResumeDocument } from "@/lib/supabase-storage";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No document provided. Please upload a resume file." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { success: false, error: "File size exceeds 10MB limit. Please upload a smaller document." },
        { status: 400 }
      );
    }

    // Validate file extension / mime
    const name = file.name || "resume.pdf";
    const extension = name.split(".").pop()?.toLowerCase();
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (!extension || !allowedExtensions.includes(extension)) {
      return NextResponse.json(
        { success: false, error: "Invalid file format. Only PDF, DOC, and DOCX documents are accepted." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await uploadResumeDocument(buffer, name, file.type);

    return NextResponse.json({
      success: true,
      url: result.url,
      fileName: result.fileName,
      originalName: name,
      size: file.size,
    });
  } catch (error: any) {
    console.error("Resume upload error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to upload document." },
      { status: 500 }
    );
  }
}
