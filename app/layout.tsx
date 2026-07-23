import type { Metadata } from "next";
import { PageChrome } from "./ui/page-chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lingshu-ai-official.early-tetra-7678.chatgpt.site"),
  title: {
    default: "灵枢 AI｜出海企业的社媒获客与智能客服工作台",
    template: "%s｜灵枢 AI",
  },
  description:
    "灵枢 AI 帮助外贸与跨境团队发现社媒机会、生成并多平台发布内容、追踪 WhatsApp 询盘来源，并通过可控的 AI 客服完成接待、筛选与跟进。",
  openGraph: {
    title: "灵枢 AI｜从一条内容，到一笔生意",
    description:
      "把社媒获客、询盘归因、AI 接待与销售跟进连成一条增长链路。",
    type: "website",
    locale: "zh_CN",
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
