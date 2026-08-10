import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { mainNavigation, siteConfig } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/80 backdrop-blur-sm">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-between">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Starlight Reels"
                width={52}
                height={52}
                className="h-13 w-13"
              />
              <span className="text-sm font-bold tracking-[0.2em] text-gold-text uppercase">
                Starlight Reels
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <p className="font-tamil mt-3 text-sm text-gold-text/90">
              {siteConfig.taglineTamil}
            </p>
          </div>
          <div className="w-full md:text-center">
            <h2 className="kicker">Navigation</h2>
            <ul className="mt-5 space-y-2.5">
              {mainNavigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden">
            <h2 className="kicker">More</h2>
            <ul className="mt-5 space-y-2.5">
              {mainNavigation.slice(6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:text-center">
            <h2 className="kicker">Connect</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                >
                  <FaFacebook className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                >
                  <HiOutlineMail
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-14" />

        <div className="mt-8 flex flex-col gap-2 text-sm font-medium text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. {siteConfig.personName}.
          </p>
          <p className="font-tamil text-gold-text/85">
            {siteConfig.personNameTamil}
          </p>
        </div>
      </div>
    </footer>
  );
}
