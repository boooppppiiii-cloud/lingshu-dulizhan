import type { Metadata } from "next";
import { PageChrome } from "./ui/page-chrome";
import "./globals.css";
import "./final-overrides.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://official.lingshu.site"),
  title: {
    default: "灵枢 AI｜外贸厂家的 AI 海外社媒获客系统",
    template: "%s｜灵枢 AI",
  },
  description:
    "灵枢 AI 帮助外贸厂家把产品资料变成多语言海外社媒内容，发布到 TikTok、Facebook、Instagram 和 YouTube，并通过 WhatsApp AI 接待、筛选和跟进询盘。",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/brand-logo-v2.png",
  },
  openGraph: {
    title: "灵枢 AI｜外贸厂家的 AI 海外社媒获客系统",
    description:
      "把产品资料变成多语言海外内容，连接多平台发布、WhatsApp 询盘接待与销售跟进。",
    siteName: "灵枢 AI",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og-v2.png",
        width: 1200,
        height: 630,
        alt: "灵枢 AI：外贸厂家的 AI 海外社媒获客系统",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "灵枢 AI｜外贸厂家的 AI 海外社媒获客系统",
    description: "连接多语言内容、多平台发布、WhatsApp 询盘接待与销售跟进。",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <PageChrome>{children}</PageChrome>
      </body>
    </html>
  );
}
