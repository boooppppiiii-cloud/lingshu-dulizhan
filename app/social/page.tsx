import type { Metadata } from "next";
import { CapabilityList, CtaBand, MotionSlot, PageHero, SectionHeading } from "../ui/site-components";
import { ProductEvidence } from "../ui/product-evidence";
import { StructuredData, breadcrumbSchema, faqSchema } from "../ui/structured-data";

export const metadata: Metadata = {
  title: "外贸社媒内容生成与多平台发布",
  description: "灵枢读取外贸企业的产品、市场与素材，生成适合 TikTok、Facebook、Instagram Reels 和 YouTube 的多语言内容，并完成审核、排期与发布。",
  alternates: { canonical: "/social" },
};

const capabilities = [
  { index: "01", title: "先理解产品，再开始写内容", text: "读取官网、产品目录、参数、认证、图片、视频与企业规则，避免只凭一句提示词生成泛化内容。" },
  { index: "02", title: "围绕采购问题规划主题", text: "从买家痛点、产品实证、使用场景、供应能力、定制能力、选型对比、客户案例与趋势热点中建立内容矩阵。" },
  { index: "03", title: "一份资料，适配不同平台", text: "分别生成短视频分镜、标题、口播、字幕、发布配文和标签，而不是把同一段文案机械复制到所有平台。" },
  { index: "04", title: "从生成走到排期发布", text: "内容经过人工确认后进入队列和营销日历，结合最佳发布时间策略发布到已授权账号。" },
];

const faq = [
  ["当前支持哪些平台？", "现有产品已实现 TikTok、Facebook、Instagram Reels 和 YouTube 的账号连接与视频发布。平台应用审核、账号类型和授权范围会影响实际开通；LinkedIn 直接发布暂未开放。"],
  ["AI 会不会写错技术参数？", "内容生成以企业资料为事实来源。参数、认证、功效和供应承诺仍应由企业审核；系统不会把规划中的能力自动写成事实。"],
  ["可以只生成内容、不自动发布吗？", "可以。企业可以先生成脚本或成片，再选择保存草稿、人工确认、进入排期或发布到已连接账号。"],
  ["支持哪些创作方式？", "当前包含素材库智能生成、爆款裂变和产品信息生成，并支持素材匹配、多语字幕与口播、配乐、封面和成片。"],
];

export default function SocialPage() {
  return <main>
    <StructuredData data={[breadcrumbSchema([{name:"首页",path:"/"},{name:"社媒内容与发布",path:"/social"}]), faqSchema(faq.map(([question,answer])=>({question,answer})))]} />
    <PageHero eyebrow="AI SOCIAL CONTENT" title="把工厂产品资料，变成持续获客的海外社媒内容" description="灵枢根据产品、目标市场和采购角色规划主题，生成多语言短视频与发布文案，再经过审核进入排期和多平台发布。" visualTitle="产品资料 → 分镜 → 成片 → 发布" visualNote="展示内容策略、素材匹配、多语版本与发布队列的真实工作流" tone="social" />
    <section className="section detail-intro" id="details"><div className="container split-section">
      <SectionHeading eyebrow="FROM PRODUCT TO CONTENT" title="不是替你多写几段文案，而是建立一套内容生产流程" description="外贸内容必须同时理解产品事实、目标客户、平台表达和销售下一步。灵枢把这些信息放在同一企业上下文中。" />
      <CapabilityList items={capabilities} tone="social" />
    </div></section>
    <section className="section social-section"><div className="container">
      <SectionHeading eyebrow="3 CREATION MODES" title="根据现有素材和目标，选择合适的创作入口" align="center" />
      <div className="creation-grid">
        {[
          ["01", "素材库智能生成", "从企业已有图片与视频中寻找可用片段，生成可执行分镜并完成素材匹配。"],
          ["02", "爆款裂变", "拆解高表现内容的结构与节奏，结合企业产品事实生成新的表达，而不是直接复制。"],
          ["03", "产品信息生成", "从产品参数、卖点、市场和采购问题出发，生成适合海外平台的内容。"],
          ["04", "多语版本", "围绕同一产品生成不同语言的口播、字幕与发布文案，并保留人工审核。"],
        ].map(([index,title,text]) => <article className="creation-card" data-reveal key={title}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="demo-section-stack" data-reveal><ProductEvidence /></div>
    </div></section>
    <section className="attribution-section"><div className="container attribution-grid">
      <div><span className="eyebrow eyebrow-light">CONTENT → INQUIRY</span><h2>发布不是终点，客户来源要跟着进入 WhatsApp</h2><p>发布时可为内容附加带追踪参数的 WhatsApp 入口。客户发起对话后，平台和具体内容来源进入客户上下文，帮助销售理解客户为什么而来。</p><div className="attribution-path"><span>已发布内容</span><span>追踪入口</span><span>WhatsApp 对话</span><span>客户工作台</span></div></div>
      <MotionSlot title="内容来源归因" note="模拟演示：Instagram 内容触发 WhatsApp 询盘并保存来源" tone="dark" />
    </div></section>
    <section className="section faq-section"><div className="container faq-grid"><SectionHeading eyebrow="FAQ" title="关于内容生成与发布" /><div className="faq-list">{faq.map(([q,a]) => <details data-reveal key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
    <CtaBand title="用你的产品，体验一次完整内容生产流程" description="联系我们获取 3 天试用账号，体验产品资料、脚本、成片、排期与发布。" />
  </main>;
}
