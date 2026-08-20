import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { PhilosophyManuscript } from "@/components/PhilosophyManuscript";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "N. Sathaiah's Note - My Philosophy of Cinema. Full manuscript in Tamil and English.",
};

export default function PhilosophyPage() {
  return (
    <SiteShell>
      <PhilosophyManuscript />
    </SiteShell>
  );
}
