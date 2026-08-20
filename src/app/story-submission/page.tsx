import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { SubmitDetailsPageContent } from "@/components/SubmitDetailsPageContent";

export const metadata: Metadata = {
  title: "Submit Your Details",
  description:
    "Submit your details to Starlight Reels: your filmmaking journey and why you would like to consult.",
};

export default function StorySubmissionPage() {
  return (
    <SiteShell>
      <SubmitDetailsPageContent />
    </SiteShell>
  );
}
