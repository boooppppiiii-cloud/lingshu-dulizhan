import type { Metadata } from "next";
import { DemoExperience } from "./demo-experience";

export const metadata: Metadata = {
  title: "申请 3 天试用 / 预约演示",
  description:
    "申请灵枢 AI 3 天试用账号或预约产品演示，了解社媒获客、AI 接待与销售跟进如何适配你的出海业务。",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string | string[]; intent?: string | string[] }>;
}) {
  const query = await searchParams;
  const intent = query.intent === "trial" ? "trial" : "demo";
  return <DemoExperience submitted={query.submitted === "1"} intent={intent} />;
}
