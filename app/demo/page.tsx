import type { Metadata } from "next";
import { DemoExperience } from "./demo-experience";

export const metadata: Metadata = {
  title: "预约演示",
  description:
    "亲手走完一次从产品内容到客户对话的灵枢 AI 演示，并预约针对你业务的产品沟通。",
};

export default function DemoPage() {
  return <DemoExperience />;
}
