import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading } from "../ui/site-components";
import { StructuredData, breadcrumbSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "社媒与 WhatsApp 平台集成", description: "查看灵枢当前支持的 TikTok、Facebook、Instagram、YouTube、WhatsApp 与 Shopify 等连接能力、开通条件和功能边界。", alternates: { canonical: "/integrations" } };

const groups = [
  { title:"内容发布", tag:"PUBLISH", items:[
    ["TikTok","OAuth、账号与视频数据读取、视频上传发布；评论读取暂未开放。","已实现 · 需平台审核与授权"],
    ["Facebook Page","OAuth、Page 与视频数据、评论读取和视频发布。","已实现 · 需 Page 权限"],
    ["Instagram Reels","通过已绑定的 Meta Page 连接专业账号，读取媒体与评论并发布 Reels。","已实现 · 需专业账号与公网视频"],
    ["YouTube","OAuth、频道连接和视频上传发布。","已实现 · 需 Google OAuth 配置"],
  ]},
  { title:"客户接待", tag:"CONVERSATION", items:[
    ["WhatsApp","Meta Cloud API、Embedded Signup、共存模式、Webhook、历史导入和消息发送。","已实现 · 需 Meta 资格与有效凭证"],
    ["Instagram / Facebook 评论","读取已授权账号内容互动，进入账号动态与评论工作流。","已实现 · 受平台权限限制"],
  ]},
  { title:"业务与数据", tag:"BUSINESS", items:[
    ["Shopify","项目已包含 Shopify 连接和数据同步能力，可用于商品与转化场景。","可配置"],
    ["通知通道","支持钉钉、飞书、企业微信／微信与 Telegram 等负责人通知适配。","按企业配置"],
    ["LinkedIn","当前官网可用于内容建议与人工运营场景，但尚无直接发布实现。","暂未开放直接发布"],
  ]},
];

export default function IntegrationsPage(){return <main>
  <StructuredData data={breadcrumbSchema([{name:"首页",path:"/"},{name:"平台集成",path:"/integrations"}])} />
  <PageHero eyebrow="INTEGRATIONS" title="连接客户所在的平台，也连接你的销售流程" description="我们不把一排 Logo 当成能力。每个集成都明确说明能读取什么、能执行什么、需要什么权限，以及当前是否已经开放。" visualTitle="账号 → 内容 → 对话 → 客户数据" visualNote="租户级授权、token 状态、同步时间与发布结果进入统一工作台" />
  <section className="section integrations-detail" id="details"><div className="container"><SectionHeading eyebrow="CURRENT CAPABILITIES" title="当前平台能力与开通边界" description="平台 API、应用审核、账号类型与地区资格可能影响最终可用能力。试用开通时由顾问协助核对。" />
    <div className="integration-groups">{groups.map(group=><section className="integration-group" data-reveal key={group.title}><header><span>{group.tag}</span><h2>{group.title}</h2></header><div>{group.items.map(([name,text,status])=><article key={name}><div><h3>{name}</h3><p>{text}</p></div><strong>{status}</strong></article>)}</div></section>)}</div>
    <p className="integration-disclaimer">平台名称仅用于说明技术兼容和业务场景，不代表平台对灵枢 AI 的官方合作、认可或背书。实际能力以账号类型、地区、平台审核和授权结果为准。</p>
  </div></section>
  <CtaBand title="先确认你的账号条件，再开通真实链路" description="联系我们获取 3 天试用账号，由顾问协助检查平台账号、授权权限和 WhatsApp 接入方式。" />
  </main>}
