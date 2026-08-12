import type { Metadata } from "next";
import { CapabilityList, CtaBand, MotionSlot, PageHero, SectionHeading } from "../ui/site-components";
import { ProductEvidence } from "../ui/product-evidence";
import { StructuredData, breadcrumbSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "外贸询盘分级与销售跟进", description: "记录询盘来源、客户对话、BANT 证据和销售动作，把高意向 WhatsApp 询盘及时交给业务员并持续跟进。", alternates: { canonical: "/strategy" } };

export default function StrategyPage() { return <main>
  <StructuredData data={breadcrumbSchema([{name:"首页",path:"/"},{name:"询盘管理与销售跟进",path:"/strategy"}])} />
  <PageHero eyebrow="LEAD MANAGEMENT" title="从询盘来源到销售跟进，不再依赖业务员自己记" description="灵枢把客户来自哪条内容、问过什么、意向如何、谁在跟进和下一步做什么整理进同一客户时间线。" visualTitle="来源 → 客户档案 → BANT → 跟进" visualNote="展示客户分组、当地时间、对话摘要、订单和待办" />
  <section className="section" id="details"><div className="container split-section"><SectionHeading eyebrow="ONE CUSTOMER CONTEXT" title="内容、对话、客户和订单，进入同一份上下文" description="销售看到的不只是一个 WhatsApp 号码，而是客户从哪里来、真正关心什么、处于什么阶段。" /><CapabilityList items={[
    {index:"01",title:"保留内容来源",text:"发布内容附加可追踪入口，保存平台、内容、账号和客户对话之间的关联。"},
    {index:"02",title:"形成客户时间线",text:"集中展示消息、语言、国家、当地时间、标签、已发送资料与历史动作。"},
    {index:"03",title:"按真实证据分级",text:"BANT 评分只采用客户说过的需求、时间、决策链和预算信息，帮助团队安排优先级。"},
    {index:"04",title:"推进跟进与订单",text:"高意向客户触发交接与提醒；客户、订单状态、GMV、履约和退款数据进入经营视图。"},
  ]} /></div></section>
  <section className="attribution-section"><div className="container attribution-grid"><div><span className="eyebrow eyebrow-light">TRACEABLE JOURNEY</span><h2>知道客户为什么来，才能决定下一步怎么跟</h2><p>系统已有从发布内容到 WhatsApp 的追踪基础，并将平台内容 ID、项目、语言和账号等信息写入发布记录。订单归因仍需结合企业实际流程完成配置与验收。</p><div className="attribution-path"><span>平台内容</span><span>WhatsApp 入口</span><span>客户对话</span><span>BANT 分级</span><span>销售动作</span></div></div><MotionSlot title="客户增长时间线" note="工作流说明：内容来源、询盘摘要、跟进任务与订单状态" tone="dark" /></div></section>
  <section className="section product-demo-section"><div className="container"><SectionHeading eyebrow="CUSTOMER CONTEXT" title="客户判断必须有依据" description="不展示客户资料，不虚构分数。这里只说明正式项目中已经实现的意向信号、客户优先级和人工交接规则。" align="center" /><div data-reveal><ProductEvidence /></div></div></section>
  <section className="section intelligence-section"><div className="container"><SectionHeading eyebrow="SALES OPERATING SYSTEM" title="把下一步动作交给系统提醒，把关键判断留给销售" align="center" /><div className="role-grid">{[
    ["01","高意向优先","大单、明确下单、OEM、独家与复购机会优先进入负责人视线。"],
    ["02","风险单独处理","报价、付款、投诉、赔偿和确定交期停止自动推进。"],
    ["03","沉默客户再跟进","结合客户阶段、历史对话和当地时间生成触达草稿与跟进提醒。"],
  ].map(([i,t,p])=><article className="role-card" data-reveal key={t}><span>{i}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <CtaBand title="让每条询盘都有来源、判断和下一步" description="联系我们获取 3 天试用账号，体验客户分组、BANT 证据、交接摘要和跟进工作台。" />
  </main>; }
