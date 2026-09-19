import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";
    const department = searchParams.get("department");

    const whereClause: any = {};

    if (!showAll) {
      whereClause.status = "ACTIVE";
    }

    if (department && department !== "All") {
      whereClause.department = department;
    }

    const jobs = await prisma.jobPosting.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    });

    return NextResponse.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    console.error("Fetch jobs error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch job postings." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Administrator sign-in required." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      title,
      department,
      location,
      type,
      level,
      description,
      requirements,
      tags,
      status,
    } = body;

    if (!title || !department || !description) {
      return NextResponse.json(
        { success: false, error: "Title, department, and job description are required." },
        { status: 400 }
      );
    }

    const formattedTags = Array.isArray(tags)
      ? JSON.stringify(tags)
      : typeof tags === "string"
      ? tags
      : "[]";

    const job = await prisma.jobPosting.create({
      data: {
        title: title.trim(),
        department: department.trim(),
        location: location?.trim() || "Addis Ababa, Ethiopia",
        type: type?.trim() || "Full-time",
        level: level?.trim() || "Mid-Senior",
        description: description.trim(),
        requirements: requirements?.trim() || "",
        tags: formattedTags,
        status: status || "ACTIVE",
      },
    });

    return NextResponse.json({
      success: true,
      job,
      message: "Career position posted successfully.",
    });
  } catch (error: any) {
    console.error("Create job error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create job posting." },
      { status: 500 }
    );
  }
}
