import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "灵枢 AI｜跨境生意增长智能体",
    template: "%s｜灵枢 AI",
  },
  description:
    "灵枢 AI 将社媒增长、智能客服与客户管理连成一体，帮助跨境企业获得可持续增长。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
