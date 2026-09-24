import { Schema, models, model } from "mongoose";
import {
  SUBMISSION_STATUSES,
  type SubmissionStatus,
} from "@/lib/submission-status";

export { SUBMISSION_STATUSES, type SubmissionStatus };

export interface IStorySubmission {
  serialNumber: string;
  name: string;
  email: string;
  phone: string;
  normalizedPhone: string;
  genre: string;
  workExperience: string;
  consultReason: string;
  referralSource: string;
  additionalInfo?: string;
  consent: boolean;
  status: SubmissionStatus;
  createdAt: Date;
}

const StorySubmissionSchema = new Schema<IStorySubmission>(
  {
    serialNumber: { type: String, required: true, unique: true, maxlength: 16 },
    name: { type: String, required: true, maxlength: 120 },
    email: { type: String, required: true, maxlength: 254 },
    phone: { type: String, required: true, maxlength: 20 },
    normalizedPhone: { type: String, required: true, maxlength: 20, index: true },
    genre: { type: String, required: true, maxlength: 300 },
    workExperience: { type: String, required: true, maxlength: 5000 },
    consultReason: { type: String, required: true, maxlength: 5000 },
    referralSource: { type: String, required: true, maxlength: 100 },
    additionalInfo: { type: String, maxlength: 5000 },
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: SUBMISSION_STATUSES,
      default: "pending review",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

// Next.js hot reload keeps a stale Mongoose model; re-register when the schema changes.
if (models.StorySubmission) {
  delete models.StorySubmission;
}

export const StorySubmission = model<IStorySubmission>(
  "StorySubmission",
  StorySubmissionSchema,
);
