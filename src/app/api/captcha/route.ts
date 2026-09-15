import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CAPTCHA_COOKIE, createCaptchaCookieValue } from "@/lib/captcha";

export async function GET() {
  try {
    const svgCaptcha = (await import("svg-captcha")).default;
    const captcha = svgCaptcha.create({
      size: 5,
      ignoreChars: "0oO1ilI",
      noise: 2,
      inverse: true,
      color: false,
      width: 150,
      height: 50,
      fontSize: 56,
    });

    const cookieStore = await cookies();

    cookieStore.set(CAPTCHA_COOKIE, createCaptchaCookieValue(captcha.text), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 600,
      path: "/",
    });

    return NextResponse.json({ svg: captcha.data });
  } catch (error) {
    console.error("Captcha generation error:", error);
    return NextResponse.json(
      { message: "Unable to generate CAPTCHA." },
      { status: 500 },
    );
  }
}
