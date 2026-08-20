import type { Metadata } from "next";
import { PageChrome } from "./ui/page-chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lingshu-ai-official.early-tetra-7678.chatgpt.site"),
  title: {
    default: "灵枢 AI｜让海外内容持续变成高价值商机",
    template: "%s｜灵枢 AI",
  },
  description:
    "面向有海外获客需求的企业，连接内容机会、智能创作、全球分发、询盘承接与高价值商机识别。",
  icons: {
    icon: "/brand-logo-v2.png",
    shortcut: "/brand-logo-v2.png",
    apple: "/brand-logo-v2.png",
  },
  openGraph: {
    title: "灵枢 AI｜让海外内容持续变成高价值商机",
    description:
      "连接内容机会、智能创作、全球分发、询盘承接与高价值商机识别。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "灵枢 AI：让海外内容持续变成高价值商机",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "灵枢 AI｜让海外内容持续变成高价值商机",
    description: "连接内容机会、全球分发、询盘承接与高价值商机识别。",
    images: ["/og.png"],
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
