import { Schema, models, model } from "mongoose";

export interface IStorySubmission {
  name: string;
  email: string;
  phone?: string;
  storyTitle: string;
  synopsis: string;
  genre: string;
  additionalInfo?: string;
  consent: boolean;
  createdAt: Date;
}

const StorySubmissionSchema = new Schema<IStorySubmission>(
  {
    name: { type: String, required: true, maxlength: 120 },
    email: { type: String, required: true, maxlength: 254 },
    phone: { type: String, maxlength: 20 },
    storyTitle: { type: String, required: true, maxlength: 200 },
    synopsis: { type: String, required: true, maxlength: 10000 },
    genre: { type: String, required: true, maxlength: 100 },
    additionalInfo: { type: String, maxlength: 5000 },
    consent: { type: Boolean, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export const StorySubmission =
  models.StorySubmission ||
  model<IStorySubmission>("StorySubmission", StorySubmissionSchema);
