import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "better-auth/crypto";

export async function GET() {
  try {
    const adminEmail = "admin@act.com.et";
    const defaultPassword = "Admin@Act2026!";

    // Check if admin user already exists
    let user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    const hashedPassword = await hashPassword(defaultPassword);

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: "Atlas Administrator",
          email: adminEmail,
          emailVerified: true,
          role: "admin",
        },
      });
    }

    await prisma.account.upsert({
      where: { id: "admin-credential-account" },
      update: {
        password: hashedPassword,
        userId: user.id,
        accountId: user.id,
        providerId: "credential",
      },
      create: {
        id: "admin-credential-account",
        userId: user.id,
        accountId: user.id,
        providerId: "credential",
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Default admin user seeded and verified successfully.",
      email: adminEmail,
      userId: user.id,
    });
  } catch (error: any) {
    console.error("Error seeding admin:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to seed admin" },
      { status: 500 }
    );
  }
}
