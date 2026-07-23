import type { Metadata } from "next";
import {
  CapabilityList,
  CtaBand,
  MotionSlot,
  PageHero,
  SectionHeading,
} from "../ui/site-components";

export const metadata: Metadata = {
  title: "智能客服",
  description:
    "以企业知识与审批规则驱动 WhatsApp AI 接待，在常见问题、草稿确认和人工接管之间建立可控边界。",
};

const knowledgeItems = [
  {
    index: "01",
    title: "理解客户",
    text: "识别语言、产品、采购意图与上下文，避免只按关键词机械回复。",
  },
  {
    index: "02",
    title: "命中已审批知识",
    text: "从产品、FAQ、交期和服务规则中生成有依据的回答。",
  },
  {
    index: "03",
    title: "判断风险",
    text: "报价、议价、大单和订单条款按配置停在草稿或直接转人工。",
  },
];

export default function AiServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="AI CUSTOMER SERVICE"
        title="不错过客户，也不把业务交给黑箱"
        description="AI 先理解客户、命中企业知识并判断风险。常见问题及时回复，关键业务由销售带着完整上下文接手。"
        visualTitle="对话理解 → 知识命中 → 风险判断 → 人工交接"
        visualNote="建议动图：模拟海外客户询问 MOQ 和交期；右侧同步展示语言、知识依据、风险级别与处理方式。"
        tone="service"
      />

      <section className="section" id="details">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="UNDERSTAND"
              title="全天候接待，但不扩大 AI 权限"
              description="夜间也能及时理解客户和处理标准问题；是否发送、何时转人工由企业规则决定。"
            />
            <CapabilityList items={knowledgeItems} tone="service" />
          </div>
          <div data-reveal>
            <MotionSlot
              title="多语言 WhatsApp 接待"
              note="展示客户提问、语言识别、知识命中与 AI 回复过程；报价问题在发送前停下。"
              tone="service"
              ratio="portrait"
            />
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <SectionHeading
            eyebrow="PRIORITIZE"
            title="自动判断谁最值得先回"
            description="让高意向、未读和需人工的客户从普通咨询中浮现，并清楚展示判断依据。"
            align="center"
          />
          <div className="priority-layout">
            <div className="priority-list" data-reveal>
              {[
                ["Maya · Brazil", "高意向", "询问 2,000 件采购与交期", "92"],
                ["Oliver · UK", "需人工", "要求正式报价和付款条款", "86"],
                ["Amira · UAE", "样品", "希望本周寄出样品", "74"],
                ["Leo · Chile", "标准咨询", "咨询 MOQ 与包装", "51"],
              ].map(([name, tag, reason, score]) => (
                <article key={name}>
                  <strong>{name}</strong>
                  <span>{tag}</span>
                  <p>{reason}</p>
                  <i>{score}</i>
                </article>
              ))}
            </div>
            <div data-reveal>
              <MotionSlot
                title="客户优先级重排"
                note="展示客户列表自动排序，高意向客户轻微上浮，并同步呈现 AI 判断依据。"
                tone="service"
                ratio="landscape"
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section permission-section">
        <div className="container">
          <SectionHeading
            eyebrow="CONTROL"
            title="分级放权，不越边界"
            description="不同类型的对话可以使用不同自动化级别，不把所有问题交给同一套规则。"
          />
          <div className="permission-grid">
            {[
              {
                tag: "只提醒",
                title: "AI 判断，不写不发",
                text: "适合刚开始使用或高风险客户。AI 只负责优先级、意图和风险提示。",
              },
              {
                tag: "草稿需确认",
                title: "AI 先写，销售确认",
                text: "适合样品、采购与初步报价。销售保持控制，同时减少重复输入。",
              },
              {
                tag: "低风险自动回",
                title: "只回答已审批问题",
                text: "适合标准 FAQ、产品参数与服务流程；超出边界自动升级。",
              },
            ].map((item, index) => (
              <article className={`permission-card level-${index + 1}`} data-reveal key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="permission-meter">
                  <i />
                  <i />
                  <i />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="handoff-section">
        <div className="container split-section">
          <div data-reveal>
            <span className="eyebrow eyebrow-light">HUMAN HANDOFF</span>
            <h2>关键时刻交给人，上下文不丢失</h2>
            <p>
              风险状态从绿色变为琥珀色，回复停在草稿。销售接管后可以直接看到客户来源、意向评分、对话摘要与建议动作。
            </p>
            <ul className="dark-checklist">
              <li>内容来源与发布账号</li>
              <li>完整对话与 AI 摘要</li>
              <li>采购信号与风险判断</li>
              <li>下一步跟进建议</li>
            </ul>
          </div>
          <div data-reveal>
            <MotionSlot
              title="Human Handoff 标志性动效"
              note="风险状态变为琥珀色，“人工接管”卡片覆盖输入区，同时保留摘要、客户标签与建议动作。"
              tone="dark"
              ratio="landscape"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FOLLOW UP & LEARN"
            title="每次人工接手，都让下一次 AI 接待更懂你的业务"
            description="从报价推进到沉默客户唤醒，再到未覆盖问题沉淀，客户服务不断形成新的企业知识。"
            align="center"
          />
          <div className="learning-track">
            {[
              ["报价推进", "基于客户阶段提示下一步动作"],
              ["跟单建议", "保留历史上下文与回复节奏"],
              ["沉默唤醒", "识别 30 / 60 天未跟进客户"],
              ["FAQ 学习", "把未覆盖问题变成待审批知识"],
            ].map(([title, text], index) => (
              <article data-reveal key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="让 AI 接住常见问题，让销售专注关键客户"
        description="带上你的产品资料和回复规则，看看灵枢如何建立可控的客户接待流程。"
      />
    </main>
  );
}
