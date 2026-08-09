import Link from "next/link";
import {
  CtaBand,
  SectionHeading,
} from "./ui/site-components";
import {
  GrowthScrollStory,
  HeroBrandConstellation,
  IntegratedBrandRail,
  ProductFlowShowcase,
} from "./ui/home-motion-experience";
import {
  ContentConversationFlow,
  HumanHandoffFlow,
} from "./ui/content-conversation-flow";
import { InteractiveHeroField } from "./ui/interactive-hero-field";
import { StructuredData, faqSchema, productSchema, websiteSchema } from "./ui/structured-data";

const serviceLevels = [
  {
    level: "LEVEL 01",
    title: "只提醒",
    text: "AI 判断优先级和风险，不写、不发，把值得先处理的客户排到前面。",
  },
  {
    level: "LEVEL 02",
    title: "草稿需确认",
    text: "AI 结合企业知识生成回复，销售确认后发送，适合采购、样品与初步报价。",
  },
  {
    level: "LEVEL 03",
    title: "低风险自动回",
    text: "仅对已审批知识和标准问题自动回复；议价、大单和条款问题立即转人工。",
  },
];

const faq = [
  {
    question: "支持哪些海外社媒平台？",
    answer:
      "当前产品已实现 TikTok、Facebook、Instagram Reels 与 YouTube 的账号连接和视频发布。具体开通仍取决于客户平台账号、应用审核与授权权限；LinkedIn 直接发布暂未开放。",
  },
  {
    question: "灵枢 AI 适合哪些企业？",
    answer:
      "适合有海外获客需求的外贸工厂、跨境品牌、多账号营销团队，以及依赖 WhatsApp 接待询盘的销售团队。",
  },
  {
    question: "如何追踪询盘来自哪条内容？",
    answer:
      "灵枢为发布内容生成独立的 WhatsApp 追踪入口。客户发起对话后，来源平台、账号与具体内容会进入客户上下文。",
  },
  {
    question: "智能客服会不会自动报价？",
    answer:
      "是否自动回复由企业配置。报价、议价、订单条款、大单等高风险场景可以固定为草稿确认或直接转人工。",
  },
  {
    question: "AI 与销售如何交接？",
    answer:
      "人工接管时会保留客户来源、意向信号、历史对话、AI 摘要和建议动作，避免销售重新了解上下文。",
  },
];

export default function HomePage() {
  return (
    <main>
      <StructuredData data={[websiteSchema, productSchema(), faqSchema(faq)]} />
      <section className="home-hero">
        <InteractiveHeroField />
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="hero-copy hero-copy-kinetic">
            <span className="hero-kicker">
              <i /> AI GROWTH OPERATING SYSTEM
            </span>
            <h1 className="kinetic-title" aria-label="外贸厂家的 AI 海外社媒获客系统">
              <span className="kinetic-line kinetic-line-one">
                <b>外贸厂家</b>
                <b className="kinetic-outline">AI 海外</b>
              </span>
              <span className="kinetic-line kinetic-line-two">
                <b className="kinetic-accent">社媒获客系统</b>
              </span>
            </h1>
            <p className="hero-positioning-copy">
              把产品资料变成多语言海外内容，持续发布到客户所在的平台；再由 AI 接住 WhatsApp 询盘、判断采购意向并交给销售跟进。
            </p>
            <div className="hero-motion-caption" aria-hidden="true">
              <span>理解产品</span>
              <i>→</i>
              <span>多平台发布</span>
              <i>→</i>
              <span>接待询盘</span>
            </div>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href="/demo?source=hero&intent=trial"
                data-event="hero_cta_click"
              >
                获取 3 天试用账号 <span>↗</span>
              </Link>
              <Link className="button button-ghost" href="/demo?source=hero&intent=demo">
                预约产品演示
              </Link>
            </div>
            <small className="hero-trial-note">联系我们开通 · 无需先接入账号 · 套餐价格暂不公开 · 由顾问协助体验</small>
          </div>
          <div className="hero-visual hero-visual-constellation">
            <HeroBrandConstellation />
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <IntegratedBrandRail />

      <section className="section pain-section" id="problems">
        <div className="container">
          <SectionHeading eyebrow="WHY GROWTH STALLS" title="工厂有产品、有资料，也有业务员，却很难持续做好海外社媒" description="问题往往不在某一个工具，而在内容、询盘和销售之间没有形成连续的业务上下文。" />
          <div className="pain-grid">
            {[
              ["01","不知道海外客户愿意看什么","目录、参数和样本很多，却很难转成适合不同市场和平台的内容。"],
              ["02","内容生产难以持续","拍摄、剪辑、翻译和发布依赖多人协作，每个平台又需要不同表达。"],
              ["03","内容与询盘彼此分离","有播放、有评论，但销售不知道客户从哪条内容来、关注什么产品。"],
              ["04","首响和跟进依赖个人","时差、语言与信息不完整，让高价值客户容易在第一轮沟通中流失。"],
            ].map(([index,title,text])=><article key={index} data-reveal><span>{index}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <div id="growth-loop">
        <GrowthScrollStory />
      </div>

      <ProductFlowShowcase />

      <section className="bridge-section">
        <div className="bridge-glow" aria-hidden="true" />
        <div className="container">
          <SectionHeading
            eyebrow="CONTENT → CONVERSATION"
            title="内容负责打开对话，AI 负责不错过机会"
            description="当客户点击内容里的 WhatsApp 入口，灵枢会把来源、意图与完整上下文带进客户工作台。"
          />
          <div data-reveal>
            <ContentConversationFlow />
          </div>
          <div className="process-numbers" data-reveal>
            {[
              ["01", "一条内容"],
              ["04", "四个平台"],
              ["01", "可追踪入口"],
              ["∞", "完整客户上下文"],
            ].map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-section">
        <div className="container">
          <SectionHeading
            eyebrow="AI CUSTOMER SERVICE"
            title="AI 先接待，销售只在关键时刻出现"
            description="灵枢不是把业务交给黑箱，而是让企业决定 AI 能做多少、何时停下、如何交给人。"
          />
          <div className="service-grid">
            <div className="service-copy">
              {serviceLevels.map((item) => (
                <article className="level-card" data-reveal key={item.level}>
                  <span>{item.level}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div data-reveal>
              <HumanHandoffFlow />
            </div>
          </div>
        </div>
      </section>

      <section className="section intelligence-section">
        <div className="container">
          <SectionHeading
            eyebrow="OPERATING INTELLIGENCE"
            title="不只是执行工具，更是随时在线的经营智囊"
            description="把经营总览、社媒动作和客户跟进放到同一份企业上下文里，让建议更接近真实业务。"
            align="center"
          />
          <div className="role-grid">
            {[
              ["经营总览", "策略编排、关键动作拆解与进度回顾", "01"],
              ["我的社媒", "趋势、创作、发布与内容复盘", "02"],
              ["我的客户", "筛选、回复、跟进与沉默唤醒", "03"],
            ].map(([title, text, index]) => (
              <article className="role-card" data-reveal key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section control-section">
        <div className="container control-grid">
          <SectionHeading
            eyebrow="CONTROL BY DESIGN"
            title="AI 能做多少，由你决定"
            description="企业知识、审批规则、风险边界和操作记录共同构成可控的人机协作基础。"
          />
          <div className="control-list">
            {[
              ["企业知识驱动", "产品、FAQ、报价和服务规则统一维护。"],
              ["回复有边界", "高风险场景固定触发人工接管。"],
              ["操作可追溯", "自动回复、草稿与人工动作保留记录。"],
              ["企业数据隔离", "不同企业的数据与授权独立管理。"],
            ].map(([title, text], index) => (
              <article data-reveal key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section scenario-section" id="scenarios">
        <div className="container">
          <SectionHeading
            eyebrow="BUILT FOR GLOBAL GROWTH"
            title="先从三个外贸行业，把获客链路做深"
            description="以下均为模拟演示场景，用于展示产品流程与行业适配方式，不代表真实客户结果。"
            align="center"
          />
          <div className="scenario-grid">
            {[
              {
                title: "美妆个护",
                tag: "BEAUTY & PERSONAL CARE",
                text: "围绕成分、肤感、私标包装和快速打样生成内容；询盘中确认市场、渠道、MOQ、包装、标签语言和认证需求。",
              },
              {
                title: "医药健康",
                tag: "PHARMA & HEALTHCARE",
                text: "围绕产品教育、生产与质量流程建立专业内容；医疗功效、认证和法规问题固定进入人工核实。",
              },
              {
                title: "建材",
                tag: "BUILDING MATERIALS",
                text: "用工程场景、性能对比、安装过程与供应能力获得询盘；确认规格、标准、数量、包装、港口和交期。",
              },
            ].map((item) => (
              <article className="scenario-card" data-reveal key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/service">查看行业演示 ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mock-results-section" id="cases">
        <div className="container">
          <SectionHeading eyebrow="PRODUCT SCENARIOS" title="先用模拟场景证明流程，再用真实数据证明结果" description="现阶段不把 Mock 包装成客户成功故事。以下卡片只展示产品如何处理不同行业的内容和询盘。" align="center" />
          <div className="mock-result-grid">
            {[
              ["美妆个护","私标护肤品 · 东南亚","内容侧生成成分教育、包装定制与打样流程；客户侧补齐渠道、MOQ、标签语言和样品需求。"],
              ["医药健康","健康产品 · 中东","内容侧严格基于已审核资料；认证、法规与医疗功效问题自动进入人工核实。"],
              ["建材","饰面材料 · 东南亚","工程案例关联 WhatsApp 来源；AI 补齐规格、标准、数量、目的港和期望时间。"],
            ].map(([industry,scenario,text])=><article key={industry} data-reveal><span>MOCK SCENARIO</span><h3>{industry}</h3><strong>{scenario}</strong><p>{text}</p><small>模拟企业、客户与过程 · 非真实客户案例或经营结果</small></article>)}
          </div>
          <p className="case-roadmap">获得客户书面授权并统一统计口径后，才会公开真实内容产量、有效询盘、首响时间、报价、样品和可归因销售机会。</p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="FAQ"
            title="常见问题"
            description="关于平台支持、内容归因、AI 权限与人工接管。"
          />
          <div className="faq-list">
            {faq.map((item) => (
              <details data-reveal key={item.question}>
                <summary>
                  {item.question}
                  <span>＋</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
