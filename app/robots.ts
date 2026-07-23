import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lingshu-ai-official.early-tetra-7678.chatgpt.site/sitemap.xml",
  };
}
