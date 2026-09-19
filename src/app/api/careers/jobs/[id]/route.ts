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
    if (body.title !== undefined) updateData.title = body.title.trim();
    if (body.department !== undefined) updateData.department = body.department.trim();
    if (body.location !== undefined) updateData.location = body.location.trim();
    if (body.type !== undefined) updateData.type = body.type.trim();
    if (body.level !== undefined) updateData.level = body.level.trim();
    if (body.description !== undefined) updateData.description = body.description.trim();
    if (body.requirements !== undefined) updateData.requirements = body.requirements.trim();
    if (body.status !== undefined) updateData.status = body.status;
    if (body.tags !== undefined) {
      updateData.tags = Array.isArray(body.tags)
        ? JSON.stringify(body.tags)
        : typeof body.tags === "string"
        ? body.tags
        : "[]";
    }

    const updatedJob = await prisma.jobPosting.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      job: updatedJob,
      message: "Job position updated successfully.",
    });
  } catch (error: any) {
    console.error("Update job error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update job posting." },
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

    await prisma.jobPosting.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Job position removed successfully.",
    });
  } catch (error: any) {
    console.error("Delete job error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete job posting." },
      { status: 500 }
    );
  }
}
