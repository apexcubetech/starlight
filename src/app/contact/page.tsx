import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { ConnectPageContent } from "@/components/ConnectPageContent";

export const metadata: Metadata = {
  title: "Connect",
  description: "Connect with Starlight Reels via WhatsApp or email.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ConnectPageContent />
    </SiteShell>
  );
}
