import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Administrator sign-in required." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");
    const status = searchParams.get("status");
    const query = searchParams.get("q");

    const whereClause: any = {};

    if (jobId && jobId !== "all") {
      whereClause.jobId = jobId;
    }

    if (status && status !== "ALL") {
      whereClause.status = status;
    }

    if (query && query.trim()) {
      whereClause.OR = [
        { fullName: { contains: query.trim(), mode: "insensitive" } },
        { email: { contains: query.trim(), mode: "insensitive" } },
        { phone: { contains: query.trim(), mode: "insensitive" } },
        { fitReason: { contains: query.trim(), mode: "insensitive" } },
      ];
    }

    const applications = await prisma.jobApplication.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        job: {
          select: {
            id: true,
            title: true,
            department: true,
            type: true,
            location: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error: any) {
    console.error("Fetch applications error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch applications." },
      { status: 500 }
    );
  }
}
