import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ubuntu, notoSansTamil } from "@/lib/fonts";
import { siteConfig } from "@/lib/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBackground } from "@/components/ui/PageBackground";
import GoogleAnalytics, {
  AnalyticsScripts,
} from "@/components/GoogleAnalytics";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LANGUAGE_COOKIE_KEY, parseSiteLanguage } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.personName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLanguage = parseSiteLanguage(
    cookieStore.get(LANGUAGE_COOKIE_KEY)?.value,
  );

  return (
    <html
      lang={initialLanguage === "ta" ? "ta" : "en"}
      className={`${ubuntu.variable} ${notoSansTamil.variable} h-full`}
    >
      <head>
        <AnalyticsScripts />
      </head>
      <body className="relative min-h-full flex flex-col antialiased">
        <LanguageProvider initialLanguage={initialLanguage}>
          <PageBackground variant="hero" />
          {children}
          <ScrollToTop />
          <GoogleAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}

export function SiteShell({
  children,
  headerVariant = "solid",
}: {
  children: React.ReactNode;
  headerVariant?: "overlay" | "solid";
}) {
  return (
    <>
      <Header variant={headerVariant} />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </>
  );
}
