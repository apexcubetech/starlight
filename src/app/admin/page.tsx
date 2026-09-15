import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

type AdminPageProps = {
  searchParams: Promise<{ admin?: string }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;

  if (params.admin !== "1") {
    notFound();
  }

  return <AdminDashboard />;
}
