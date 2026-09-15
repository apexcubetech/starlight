import { NextRequest, NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-api";
import { connectDB } from "@/lib/mongodb";
import {
  SUBMISSION_STATUSES,
  type SubmissionStatus,
} from "@/lib/submission-status";
import { StorySubmission } from "@/models/StorySubmission";
import { sanitizeString } from "@/lib/sanitize";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: NextRequest, context: RouteContext) {
  const authError = await requireAdminSession();
  if (authError) return authError;

  try {
    const { id } = await context.params;
    const body = (await request.json()) as Record<string, unknown>;
    const status = sanitizeString(body.status, 32) as SubmissionStatus;

    if (!SUBMISSION_STATUSES.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status value." },
        { status: 400 },
      );
    }

    await connectDB();

    const updated = await StorySubmission.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    ).lean();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Submission not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      submission: {
        id: String(updated._id),
        status: updated.status,
      },
    });
  } catch (error) {
    console.error("Admin submission update error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to update submission." },
      { status: 500 },
    );
  }
}
