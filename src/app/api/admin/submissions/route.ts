import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-api";
import { connectDB } from "@/lib/mongodb";
import { StorySubmission } from "@/models/StorySubmission";

export async function GET() {
  const authError = await requireAdminSession();
  if (authError) return authError;

  try {
    await connectDB();

    const submissions = await StorySubmission.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      submissions: submissions.map((submission) => ({
        id: String(submission._id),
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        genre: submission.genre,
        workExperience: submission.workExperience,
        consultReason: submission.consultReason,
        referralSource: submission.referralSource,
        additionalInfo: submission.additionalInfo ?? "",
        consent: submission.consent,
        status: submission.status ?? "pending review",
        createdAt: submission.createdAt,
      })),
    });
  } catch (error) {
    console.error("Admin submissions list error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to load submissions." },
      { status: 500 },
    );
  }
}
