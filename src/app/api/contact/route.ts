import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/contact
// Saves a general website contact form submission to the database
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        service: service?.trim() || null,
        message: message.trim(),
        status: "NEW",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. We will get back to you shortly.",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit. Please email us directly at info@act.com.et",
      },
      { status: 500 }
    );
  }
}

// GET /api/contact — admin use only, returns all submissions
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const submissions = await prisma.contactSubmission.findMany({
      where: status ? { status: status.toUpperCase() } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions." },
      { status: 500 }
    );
  }
}
