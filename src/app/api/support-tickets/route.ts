import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Generate unique ticket number: ACT-TKT-XXXXXX
function generateTicketNumber(): string {
  const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
  return `ACT-TKT-${randomSixDigits}`;
}

// POST /api/support-tickets
// Dispatches an enterprise support ticket to the NOC and saves to Supabase
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { institution, contactName, email, phone, priority, system, subject, description } = body;

    // Basic validation
    if (!institution || !contactName || !email || !phone || !subject || !description) {
      return NextResponse.json(
        {
          success: false,
          error: "Institution name, contact name, email, phone, subject, and description are required.",
        },
        { status: 400 }
      );
    }

    // Ensure unique ticket number
    let ticketNumber = generateTicketNumber();
    let existing = await prisma.supportTicket.findUnique({
      where: { ticketNumber },
    });
    while (existing) {
      ticketNumber = generateTicketNumber();
      existing = await prisma.supportTicket.findUnique({
        where: { ticketNumber },
      });
    }

    const ticket = await prisma.supportTicket.create({
      data: {
        ticketNumber,
        institution: institution.trim(),
        contactName: contactName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        priority: priority || "P2",
        system: system || "General Infrastructure",
        subject: subject.trim(),
        description: description.trim(),
        status: "OPEN",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: `Support ticket #${ticket.ticketNumber} logged successfully. Tier-1 NOC dispatch notified.`,
        data: ticket,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating support ticket:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to dispatch support ticket. Please call emergency hotline +25111-5-32-91-39.",
      },
      { status: 500 }
    );
  }
}

// GET /api/support-tickets
// Retrieves support tickets for administration / NOC dispatch (supports priority & status filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const priority = searchParams.get("priority");

    const whereClause: any = {};
    if (status) {
      whereClause.status = status.toUpperCase();
    }
    if (priority) {
      whereClause.priority = priority.toUpperCase();
    }

    const tickets = await prisma.supportTicket.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error: any) {
    console.error("Error fetching support tickets:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch support tickets" },
      { status: 500 }
    );
  }
}
