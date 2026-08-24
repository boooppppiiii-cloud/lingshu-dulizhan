import type { MetadataRoute } from "next";

const baseUrl = "https://official.lingshu.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/demo", "/legal", "/privacy", "/terms", "/cookies", "/acceptable-use"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/demo" ? 0.9 : 0.7,
    }),
  );
}
