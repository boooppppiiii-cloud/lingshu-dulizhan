import type { Metadata } from "next";
import { StitchScreen } from "../stitch-screen";

export const metadata: Metadata = {
  title: "社媒增长",
  description: "灵枢 AI 社媒增长，让内容生产、渠道分发与客户转化形成增长闭环。",
};

export default function SocialPage() {
  return <StitchScreen src="/stitch/social.html" title="社媒增长 - 灵枢 AI" />;
}
