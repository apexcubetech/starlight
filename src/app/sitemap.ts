import type { MetadataRoute } from "next";
import { publicSiteRoutes } from "@/lib/site-routes";
import { siteConfig } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return publicSiteRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
