export const SUBMISSION_STATUSES = ["pending review", "reviewed"] as const;
export type SubmissionStatus = (typeof SUBMISSION_STATUSES)[number];
