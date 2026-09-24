/** Public pages to include in sitemap.xml */
export const publicSiteRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/philosophy", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/philosophy/chapters", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/philosophy/articles", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/book", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/story-submission", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/script-evaluation", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/projects", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/videos", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

/** Paths crawlers should not index */
export const disallowedRoutes = ["/adm", "/admin", "/api/"];
