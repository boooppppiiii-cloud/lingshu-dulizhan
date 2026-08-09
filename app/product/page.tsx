import type { Metadata } from "next";
import { ProductTour } from "../ui/product-tour";
import { SeoLanding } from "../ui/seo-landing";

export const metadata: Metadata = { title: "产品平台｜内容、发布、WhatsApp AI 与销售跟进", description: "了解灵枢 AI 如何把外贸厂家的内容生产、多平台发布、WhatsApp 询盘接待和销售跟进连接成一条完整链路。", alternates:{canonical:"/product"} };

export default function ProductPage() {
  const data = {
    eyebrow: "THE LINGSHU PLATFORM",
    title: "从内容到询盘，一套工作台",
    definition: "灵枢 AI 是面向外贸厂家的海外社媒获客工作台。它连接企业知识、内容生产、多平台发布、WhatsApp AI 接待、询盘分级与销售接管，让每条内容都能继续走向真实客户对话。",
    audience: "需要持续经营海外社媒，并通过 WhatsApp 承接询盘的外贸厂家和跨境团队",
    outcomes: [["内容生产", "把产品资料转成适合不同市场和平台的脚本、分镜与成片。"], ["多平台发布", "统一管理账号、内容计划、排期和发布状态。"], ["询盘与销售", "记录客户来源，由 AI 首轮接待并在关键节点交给销售。"]] as Array<[string, string]>,
    questions: [["灵枢 AI 和普通社媒发布工具有什么不同？", "普通工具通常止于内容发布；灵枢继续记录内容来源、承接 WhatsApp 询盘，并把客户上下文交给销售。"], ["是否必须一次启用全部功能？", "不需要。企业可以先从内容生产或 WhatsApp 接待开始，再逐步连接账号与销售流程。"], ["AI 会自动对客户做出承诺吗？", "不会默认越权。报价、议价、交期、付款和投诉等高风险问题可以强制进入草稿确认或人工接管。"]] as Array<[string, string]>,
    next: { href: "/product/content-studio", label: "查看内容工作台" },
  };
  return <SeoLanding data={data} media={<ProductTour />} />;
}
