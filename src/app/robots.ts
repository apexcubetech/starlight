import type { MetadataRoute } from "next";
import { disallowedRoutes } from "@/lib/site-routes";
import { siteConfig } from "@/lib/navigation";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowedRoutes,
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
