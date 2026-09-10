import type { Metadata } from "next";
import { AiServiceExperience } from "./ai-service-experience";

export const metadata: Metadata = {
  title: "智能客服",
  description:
    "以企业知识与审批规则驱动 WhatsApp AI 接待，在常见问题、草稿确认和人工接管之间建立可控边界。",
};

export default function AiServicePage() {
  return <AiServiceExperience />;
}
