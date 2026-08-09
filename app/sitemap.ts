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
  "/product",
  "/product/content-studio",
  "/product/social-publishing",
  "/product/whatsapp-ai",
  "/product/lead-management",
  "/solutions/beauty",
  "/solutions/healthcare",
  "/solutions/building-materials",
  "/platforms/tiktok",
  "/platforms/facebook",
  "/platforms/instagram",
  "/platforms/youtube",
  "/platforms/whatsapp",
  "/resources",
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
