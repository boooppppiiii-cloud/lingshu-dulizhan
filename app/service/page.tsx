import type { Metadata } from "next";
import { StitchScreen } from "../stitch-screen";

export const metadata: Metadata = {
  title: "智能客服",
  description: "灵枢 AI 智能客服，提供全天候、多语言、高质量的客户服务体验。",
};

export default function ServicePage() {
  return <StitchScreen src="/stitch/service.html" title="智能客服 - 灵枢 AI" />;
}
