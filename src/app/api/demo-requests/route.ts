import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/demo-requests
// Creates a new enterprise solution demo or proposal request
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, organization, email, phone, intent, product, preferredDate, notes } = body;

    // Basic validation
    if (!fullName || !organization || !email || !phone || !product) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Full name, organization, email, phone, and solution product are required." 
        },
        { status: 400 }
      );
    }

    const demoRequest = await prisma.demoRequest.create({
      data: {
        fullName: fullName.trim(),
        organization: organization.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        intent: intent || "demo",
        product: product.trim(),
        preferredDate: preferredDate || null,
        notes: notes ? notes.trim() : null,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your demo request has been received. Our solutions team will contact you shortly.",
        data: demoRequest,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating demo request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to record demo request. Please try again or reach us at info@act.com.et.",
      },
      { status: 500 }
    );
  }
}

// GET /api/demo-requests
// Retrieves demo requests for administration (with optional status filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const whereClause: any = {};
    if (status) {
      whereClause.status = status.toUpperCase();
    }

    const requests = await prisma.demoRequest.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error: any) {
    console.error("Error fetching demo requests:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch demo requests" },
      { status: 500 }
    );
  }
}
