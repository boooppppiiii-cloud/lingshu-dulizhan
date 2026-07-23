import type { Metadata } from "next";
import { StitchScreen } from "../stitch-screen";

export const metadata: Metadata = {
  title: "预约演示",
  description: "预约灵枢 AI 产品演示，了解面向跨境企业的智能增长方案。",
};

export default function DemoPage() {
  return <StitchScreen src="/stitch/demo.html" title="预约演示 - 灵枢 AI" />;
}
