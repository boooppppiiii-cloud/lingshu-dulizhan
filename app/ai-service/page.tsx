import type { Metadata } from "next";
import { CapabilityList, CtaBand, MotionSlot, PageHero, SectionHeading } from "../ui/site-components";
import { WhatsappHandoffDemo } from "../ui/product-demos";
import { StructuredData, breadcrumbSchema, faqSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "WhatsApp AI 询盘接待", description: "基于企业知识完成 WhatsApp 询盘首轮接待、BANT 分级和销售交接；报价、折扣、合同与交期承诺等高风险问题强制人工确认。", alternates: { canonical: "/ai-service" } };

const faq = [
  ["AI 会自动报价吗？", "不会默认自动报价。报价、折扣、付款、合同、赔偿和确定交期属于高风险商业动作，即使开启自动模式也会降级为草稿或转人工。"],
  ["可以连接已有 WhatsApp 号码吗？", "产品支持通过 Meta Embedded Signup 优先连接符合条件的 WhatsApp Business App 号码；资格不满足时可使用专用 Cloud API 新号。"],
  ["AI 如何判断询盘质量？", "系统从客户真实表达中提取需求、时间、决策权和预算等 BANT 证据，形成内部优先级；不会把 AI 自己说过的话当成客户证据。"],
  ["AI 不知道答案时怎么办？", "系统会澄清具体产品或问题，记录知识缺口，并在连续缺口、客户要求人工或高风险场景中进入人工处理。"],
];

export default function AiServicePage() { return <main>
  <StructuredData data={[breadcrumbSchema([{name:"首页",path:"/"},{name:"WhatsApp AI 接待",path:"/ai-service"}]), faqSchema(faq.map(([question,answer])=>({question,answer})))]} />
  <PageHero eyebrow="WHATSAPP AI" title="让每一条 WhatsApp 询盘，都能及时得到专业接待" description="AI 根据企业批准的产品资料和业务规则完成首轮沟通，收集采购信息、判断意向；需要报价、承诺或专业核实时，把完整上下文交给销售。" visualTitle="询盘 → 分级 → 安全回复 → 人工接管" visualNote="展示客户语言回复、中文辅助、BANT 证据和转人工摘要" tone="service" />
  <section className="section" id="details"><div className="container split-section"><SectionHeading eyebrow="EXPORT SALES CONTEXT" title="它理解的是外贸询盘，不只是通用 FAQ" description="产品、数量、规格、包装、市场、认证、样品、交期、报价、订单和物流，都进入统一的接待与销售推进逻辑。" /><CapabilityList tone="service" items={[
    {index:"01",title:"基于企业知识回答",text:"产品、FAQ、业务规则和企业资料是事实来源；缺少证据时不编造参数、认证或供应承诺。"},
    {index:"02",title:"收集关键采购信息",text:"围绕国家、用途、规格、数量、MOQ、样品、包装、认证和期望时间逐步澄清。"},
    {index:"03",title:"BANT 与 SPIN 推进",text:"记录客户真实表达的需求、时间、决策链和预算证据，并选择最自然的下一步问题。"},
    {index:"04",title:"把高价值客户交给人",text:"大单、明确下单、OEM、独家、合同及风险问题立即进入人工处理和通知。"},
  ]} /></div></section>
  <section className="section service-section"><div className="container"><SectionHeading eyebrow="CONTROL BY DESIGN" title="三档权限，让自动化始终在企业边界内" align="center" /><div className="role-grid">{[
    ["01","只提醒","识别优先级和风险，不生成对外回复。"],
    ["02","草稿需确认","结合企业知识生成草稿，由销售确认后发送。"],
    ["03","低风险自动回","只对已批准的标准问题自动回复，高风险动作强制降级。"],
  ].map(([i,t,p])=><article className="role-card" data-reveal key={t}><span>{i}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <section className="section product-demo-section"><div className="container"><SectionHeading eyebrow="LIVE PRODUCT LOGIC" title="亲自触发一次询价与人工接管" description="这套演示沿用正式产品的对话、风险识别和交接顺序；所有客户与数据均为 Mock。" align="center" /><div data-reveal><WhatsappHandoffDemo /></div></div></section>
  <section className="handoff-section"><div className="container split-section"><div><span className="eyebrow eyebrow-light">HUMAN HANDOFF</span><h2>销售接管时，不必让客户重新说一遍</h2><p>客户来源、当地时间、对话摘要、采购需求、BANT 证据、风险原因、已发送资料和建议动作会一起进入交接上下文。</p><ul className="dark-checklist"><li>大单、明确下单和 OEM 机会及时提醒</li><li>报价、付款、投诉和交期承诺暂停自动回复</li><li>连续知识缺口和客户要求通话时转人工</li></ul></div><MotionSlot title="销售交接摘要" note="模拟演示：高意向询盘触发负责人通知并保留完整上下文" tone="dark" /></div></section>
  <section className="section faq-section"><div className="container faq-grid"><SectionHeading eyebrow="FAQ" title="关于 WhatsApp AI 接待" /><div className="faq-list">{faq.map(([q,a])=><details data-reveal key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
  <CtaBand title="先用 3 天，看看 AI 如何接住真实询盘" description="联系我们获取试用账号，由顾问协助配置演示企业知识和接待边界。" />
  </main>; }
