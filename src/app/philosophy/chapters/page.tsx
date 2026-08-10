import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Chapters",
  description: "Redirect to the full N. Sathaiah's Note manuscript.",
};

export default function ChaptersPage() {
  redirect("/philosophy");
}
