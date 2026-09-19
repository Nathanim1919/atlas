import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Administrator sign-in required." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await req.json();

    const updateData: any = {};
    if (body.status !== undefined) updateData.status = body.status;
    if (body.adminNotes !== undefined) updateData.adminNotes = body.adminNotes;

    const application = await prisma.jobApplication.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      application,
      message: "Application status updated successfully.",
    });
  } catch (error: any) {
    console.error("Update application error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update application." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Administrator sign-in required." },
        { status: 401 }
      );
    }

    const { id } = await params;

    await prisma.jobApplication.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Application deleted successfully.",
    });
  } catch (error: any) {
    console.error("Delete application error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete application." },
      { status: 500 }
    );
  }
}
