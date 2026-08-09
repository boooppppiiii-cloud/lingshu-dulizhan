import type { MetadataRoute } from "next";

const baseUrl = "https://official.lingshu.site";

const routes = [
  "",
  "/social",
  "/ai-service",
  "/strategy",
  "/service",
  "/integrations",
  "/demo",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date("2026-08-09"),
      changeFrequency:
        path === "" || path === "/social" ? "weekly" : "monthly",
      priority:
        path === ""
          ? 1
          : path === "/demo"
            ? 0.9
            : path === "/privacy" || path === "/terms"
              ? 0.4
              : 0.8,
    }),
  );
}
