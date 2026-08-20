import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About N. Sathaiah, Tamil film critic, story listener, and talent scout at Starlight Reels.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
