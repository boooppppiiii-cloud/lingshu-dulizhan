import type { MetadataRoute } from "next";

const baseUrl = "https://lingshu-ai-official.early-tetra-7678.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/demo", "/privacy", "/terms"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/demo" ? 0.9 : 0.7,
    }),
  );
}
