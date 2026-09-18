import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "better-auth/crypto";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please sign in first." },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword, confirmPassword, name } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, error: "Both current password and new password are required." },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: "New password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    if (confirmPassword && newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: "New password and confirmation do not match." },
        { status: 400 }
      );
    }

    // Find the user's credential account
    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        providerId: "credential",
      },
    });

    if (!account || !account.password) {
      return NextResponse.json(
        { success: false, error: "Credential account not found for this user." },
        { status: 404 }
      );
    }

    // Verify current password
    const isCurrentValid = await verifyPassword({
      password: currentPassword,
      hash: account.password,
    });

    if (!isCurrentValid) {
      return NextResponse.json(
        { success: false, error: "Current password is incorrect. Please verify and try again." },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedNewPassword = await hashPassword(newPassword);

    // Update account with new password
    await prisma.account.update({
      where: { id: account.id },
      data: {
        password: hashedNewPassword,
        updatedAt: new Date(),
      },
    });

    // Optionally update user display name if provided
    if (name && name.trim() && name.trim() !== session.user.name) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { name: name.trim() },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Administrator password updated successfully.",
    });
  } catch (error: any) {
    console.error("Change password error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to change password." },
      { status: 500 }
    );
  }
}
