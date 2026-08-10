"use client";

import Link from "next/link";
import { trackEvent } from "@/components/GoogleAnalytics";

type ContactCTAProps = {
  label: string;
  href?: string;
  eventName?: string;
};

export function ContactCTA({
  label,
  href = "/contact",
  eventName = "contact_cta_clicked",
}: ContactCTAProps) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent(eventName)}
      className="btn-outline"
    >
      {label}
    </Link>
  );
}
