import type { Metadata } from "next";
import { SiteShell } from "./layout";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Official website of N. Sathaiah. Starlight Reels: Tamil cinema critic, story listener, and discoverer of storytellers.",
};

export default function HomePage() {
  return (
    <SiteShell headerVariant="overlay">
      <HomePageContent />
    </SiteShell>
  );
}
