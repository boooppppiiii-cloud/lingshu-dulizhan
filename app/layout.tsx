import type { Metadata } from "next";
import { Geist, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { PageChrome } from "./ui/page-chrome";
import "./globals.css";
import "./styles/tokens.css";
import "./styles/typography.css";
import "./styles/motion.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
  fallback: ["PingFang SC", "Microsoft YaHei", "sans-serif"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: "variable",
  display: "swap",
  preload: false,
  fallback: ["Songti SC", "SimSun", "serif"],
});

const geist = Geist({
  variable: "--font-geist",
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://official.lingshu.site"),
  title: {
    default: "灵枢 AI｜企业出海社媒增长 Agent",
    template: "%s｜灵枢 AI",
  },
  description:
    "面向品牌、工厂及各类出海企业，以企业专属知识库与 Agent 工作流贯通市场洞察、内容策划、规模化创作、多平台分发与增长复盘。",
  icons: {
    icon: "/brand-logo-v2.png",
    shortcut: "/brand-logo-v2.png",
    apple: "/brand-logo-v2.png",
  },
  openGraph: {
    title: "从追逐流量，到自带引力｜灵枢 AI",
    description:
      "企业出海社媒增长 Agent，贯通市场洞察、内容创作、多平台分发与增长复盘。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "灵枢 AI 企业出海社媒增长 Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "从追逐流量，到自带引力｜灵枢 AI",
    description: "企业出海社媒增长 Agent，贯通市场洞察、内容创作、多平台分发与增长复盘。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} ${notoSerifSC.variable} ${geist.variable}`}
    >
      <body className={notoSansSC.className}>
        <PageChrome>{children}</PageChrome>
      </body>
    </html>
  );
}
