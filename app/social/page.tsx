import type { Metadata } from "next";
import { SocialGrowthExperience } from "./social-growth-experience";

export const metadata: Metadata = {
  title: "社媒增长",
  description:
    "从趋势洞察、AI 内容生成、多平台发布到 WhatsApp 询盘归因，把一个产品变成持续增长的内容系统。",
};

export default function SocialPage() {
  return <SocialGrowthExperience />;
}
