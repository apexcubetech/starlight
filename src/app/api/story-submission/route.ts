import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  CAPTCHA_COOKIE,
  verifyCaptchaCookie,
} from "@/lib/captcha";
import { connectDB } from "@/lib/mongodb";
import { checkRateLimit } from "@/lib/rate-limit";
import { normalizeEmail, sanitizeString } from "@/lib/sanitize";
import { StorySubmission } from "@/models/StorySubmission";

const MAX_BODY_SIZE = 50_000;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false, message: "Request payload too large." },
        { status: 413 },
      );
    }

    const body = JSON.parse(rawBody) as Record<string, unknown>;

    const name = sanitizeString(body.name, 120);
    const email = normalizeEmail(sanitizeString(body.email, 254));
    const phone = sanitizeString(body.phone, 20) || undefined;
    const storyTitle = sanitizeString(body.storyTitle, 200);
    const synopsis = sanitizeString(body.synopsis, 10000);
    const genre = sanitizeString(body.genre, 100);
    const additionalInfo =
      sanitizeString(body.additionalInfo, 5000) || undefined;
    const consent = body.consent === true;
    const captchaAnswer = sanitizeString(body.captchaAnswer, 10);

    if (!name || !email || !storyTitle || !synopsis || !genre) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, message: "Consent is required to submit." },
        { status: 400 },
      );
    }

    if (!captchaAnswer) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA verification is required." },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();
    const captchaCookie = cookieStore.get(CAPTCHA_COOKIE)?.value;
    const captchaValid = verifyCaptchaCookie(captchaAnswer, captchaCookie);

    if (!captchaValid) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    cookieStore.delete(CAPTCHA_COOKIE);

    await connectDB();

    await StorySubmission.create({
      name,
      email,
      phone,
      storyTitle,
      synopsis,
      genre,
      additionalInfo,
      consent,
    });

    return NextResponse.json({
      success: true,
      message: "Story submitted successfully.",
    });
  } catch (error) {
    console.error("Story submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process submission. Please try again." },
      { status: 500 },
    );
  }
}
