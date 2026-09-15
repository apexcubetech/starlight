import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionCookieValue,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import { sanitizeString } from "@/lib/sanitize";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const username = sanitizeString(body.username, 120);
    const password = sanitizeString(body.password, 200);

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required." },
        { status: 400 },
      );
    }

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionCookieValue(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to sign in. Please try again." },
      { status: 500 },
    );
  }
}
