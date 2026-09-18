import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/support-tickets/[id]
// Updates ticket status, internal notes, priority, or resolvedAt
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { status, internalNotes, priority } = body;

    const data: any = {};
    if (status) {
      data.status = status;
      if (status === "RESOLVED" || status === "CLOSED") {
        data.resolvedAt = new Date();
      } else {
        data.resolvedAt = null;
      }
    }
    if (priority) data.priority = priority;
    if (internalNotes !== undefined) data.internalNotes = internalNotes;

    const updated = await prisma.supportTicket.update({
      where: { id },
      data,
    });

    return NextResponse.json({
      success: true,
      message: `Support ticket #${updated.ticketNumber} updated`,
      data: updated,
    });
  } catch (error: any) {
    console.error("Error updating support ticket:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update support ticket" },
      { status: 500 }
    );
  }
}

// DELETE /api/support-tickets/[id]
// Deletes a support ticket
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await prisma.supportTicket.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Support ticket deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting support ticket:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete support ticket" },
      { status: 500 }
    );
  }
}
