import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      jobId,
      fullName,
      email,
      phone,
      resumeUrl,
      resumeFileName,
      fitReason,
    } = body;

    // Validation
    if (!jobId || !fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all personal contact details." },
        { status: 400 }
      );
    }

    if (!resumeUrl) {
      return NextResponse.json(
        { success: false, error: "Please upload your resume document before submitting." },
        { status: 400 }
      );
    }

    if (!fitReason || fitReason.trim().length < 15) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed response for why you fit this role (minimum 15 characters)." },
        { status: 400 }
      );
    }

    // Verify job exists
    const job = await prisma.jobPosting.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      return NextResponse.json(
        { success: false, error: "The requested job opening could not be found or has expired." },
        { status: 404 }
      );
    }

    // Create job application record
    const application = await prisma.jobApplication.create({
      data: {
        jobId,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        resumeUrl: resumeUrl.trim(),
        resumeFileName: resumeFileName?.trim() || "resume.pdf",
        fitReason: fitReason.trim(),
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      application,
      message: "Application submitted successfully! Our HR and engineering teams will review your profile.",
    });
  } catch (error: any) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit job application." },
      { status: 500 }
    );
  }
}
