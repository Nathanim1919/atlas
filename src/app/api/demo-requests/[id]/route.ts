import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/demo-requests/[id]
// Updates demo request status or admin notes
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { status, adminNotes } = body;

    const data: any = {};
    if (status) data.status = status;
    if (adminNotes !== undefined) data.adminNotes = adminNotes;

    const updated = await prisma.demoRequest.update({
      where: { id },
      data,
    });

    return NextResponse.json({
      success: true,
      message: "Demo request updated successfully",
      data: updated,
    });
  } catch (error: any) {
    console.error("Error updating demo request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update demo request" },
      { status: 500 }
    );
  }
}

// DELETE /api/demo-requests/[id]
// Deletes a demo request
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await prisma.demoRequest.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Demo request deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting demo request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete demo request" },
      { status: 500 }
    );
  }
}
