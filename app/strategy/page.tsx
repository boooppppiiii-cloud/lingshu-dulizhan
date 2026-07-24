import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, MotionSlot, SectionHeading } from "../ui/site-components";

export const metadata: Metadata = {
  title: "AI 智囊",
  description:
    "灵枢 AI 智囊按任务调度多个主流大模型，并结合企业知识、客户上下文与经营目标，给出更懂客户和生意的判断与行动建议。",
};

const models = [
  {
    id: "openai",
    name: "OpenAI",
    role: "复杂推理与结构化生成",
    tag: "REASONING",
  },
  {
    id: "gemini",
    name: "Gemini",
    role: "多模态理解与长上下文",
    tag: "MULTIMODAL",
  },
  {
    id: "claude",
    name: "Claude",
    role: "长文档与细腻表达",
    tag: "LONG CONTEXT",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    role: "深度推理与高效执行",
    tag: "DEEP THINKING",
  },
  {
    id: "qwen",
    name: "Qwen",
    role: "中文商业与任务执行",
    tag: "BUSINESS CN",
  },
  {
    id: "llama",
    name: "Llama",
    role: "灵活部署与定制能力",
    tag: "CUSTOM",
  },
];

const contextLayers = [
  {
    index: "01",
    title: "懂客户",
    text: "读取客户来源、历史对话、采购阶段、关注产品与风险信号，不从一条孤立消息开始判断。",
  },
  {
    index: "02",
    title: "懂产品",
    text: "连接产品资料、参数、认证、FAQ、报价规则和交付能力，让回答建立在企业事实之上。",
  },
  {
    index: "03",
    title: "懂生意",
    text: "结合利润、库存、市场、销售目标与团队规则，判断什么值得做、何时做、交给谁做。",
  },
];

const decisionFlow = [
  ["理解问题", "识别客户真正想解决什么，而不只提取关键词。"],
  ["选择模型", "根据任务、语言、上下文长度和风险选择更合适的模型。"],
  ["结合业务", "把企业知识、客户历史和经营目标加入判断。"],
  ["给出行动", "输出建议、依据、风险与可直接执行的下一步。"],
];

export default function StrategyPage() {
  return (
    <main className="strategy-page">
      <section className="strategy-hero">
        <div className="strategy-hero-grid-lines" aria-hidden="true" />
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <div className="container strategy-hero-grid">
          <div className="strategy-hero-copy" data-reveal>
            <span className="eyebrow">AI BUSINESS COPILOT</span>
            <h1>
              <span className="strategy-title-line">不只是一个模型</span>
              <span className="strategy-title-accent">更是一支懂客户、</span>
              <span className="strategy-title-accent">懂生意的 AI 智囊团</span>
            </h1>
            <p>
              灵枢按任务调度多个主流大模型，再把客户上下文、企业知识和经营目标放进同一次判断里。
              每个回答都更懂客户，也更接近真实生意。
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/demo?source=strategy">
                预约产品演示 <span>↗</span>
              </Link>
              <a className="button button-ghost" href="#models">
                查看多模型能力
              </a>
            </div>
            <div className="strategy-proof">
              <span>多模型动态路由</span>
              <span>企业上下文增强</span>
              <span>判断依据可追溯</span>
            </div>
          </div>

          <div className="model-console" data-reveal>
            <div className="model-console-head">
              <span>MODEL ORCHESTRATION</span>
              <strong>
                <i /> 6 MODELS ONLINE
              </strong>
            </div>
            <div className="model-console-core">
              <div className="strategy-core-pulse" aria-hidden="true" />
              <span>灵枢 AI</span>
              <strong>Business Brain</strong>
              <small>正在选择最合适的模型与企业上下文</small>
            </div>
            <div className="model-rail" aria-label="已接入的大模型">
              {models.map((model) => (
                <div
                  className={`model-node model-node-${model.id}`}
                  key={model.name}
                >
                  <span
                    className={`model-logo model-logo-${model.id}`}
                    aria-label={`${model.name} Logo`}
                    role="img"
                  />
                  <span className="model-node-copy">
                    <strong>{model.name}</strong>
                    <small>{model.tag}</small>
                  </span>
                  <b aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="model-console-log">
              <span>客户意图：大额采购 / 交期确认</span>
              <span>企业知识：已命中 8 条</span>
              <span>建议动作：生成草稿并转销售确认</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section model-section" id="models">
        <div className="container">
          <SectionHeading
            eyebrow="MODEL MATRIX"
            title="一个 AI 入口，调度多种模型能力"
            description="不同模型各有所长。灵枢根据任务类型、语言、上下文、速度与风险动态选择，不让团队为每项工作反复切换工具。"
            align="center"
          />
          <div className="model-matrix">
            {models.map((model, index) => (
              <article className="model-card" data-reveal key={model.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{model.tag}</small>
                <div
                  className={`model-logo model-card-logo model-logo-${model.id}`}
                  aria-label={`${model.name} Logo`}
                  role="img"
                />
                <h3>{model.name}</h3>
                <p>{model.role}</p>
                <i>已接入</i>
              </article>
            ))}
          </div>
          <p className="model-note">
            模型范围可按企业方案、地区合规与实际任务配置，灵枢统一管理调用与输出标准。
          </p>
        </div>
      </section>

      <section className="strategy-context-section">
        <div className="container strategy-context-grid">
          <div>
            <span className="eyebrow eyebrow-light">BUSINESS CONTEXT</span>
            <h2>真正的智能，不止来自模型参数</h2>
            <p className="strategy-context-lead">
              模型负责思考，企业上下文决定它是否真的懂你的客户与生意。
            </p>
            <div className="context-layer-list">
              {contextLayers.map((item) => (
                <article data-reveal key={item.index}>
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="context-demo" data-reveal>
            <div className="context-demo-head">
              <span>LIVE BUSINESS CONTEXT</span>
              <i />
            </div>
            <blockquote>
              “德国客户询问 2,000 件起订、CE 认证和 30 天交付，是否应该直接报价？”
            </blockquote>
            <div className="context-signals">
              <span>
                <small>客户阶段</small>
                高意向采购
              </span>
              <span>
                <small>知识命中</small>
                MOQ / CE / 产能
              </span>
              <span>
                <small>经营判断</small>
                交期存在风险
              </span>
            </div>
            <div className="context-answer">
              <span>AI 建议</span>
              <p>
                先确认包装规格与目的港，再生成区间报价草稿。当前产能下 30
                天交付风险较高，建议由销售确认排产后发送。
              </p>
              <small>依据：客户历史 + 产品知识 + 报价规则 + 产能信息</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section strategy-flow-section">
        <div className="container">
          <SectionHeading
            eyebrow="FROM QUESTION TO ACTION"
            title="不只回答问题，还要推动下一步"
            description="灵枢把模型能力收进一条可解释的经营工作流，让建议最终落到内容、客户、销售和经营动作。"
          />
          <div className="strategy-flow">
            {decisionFlow.map(([title, text], index) => (
              <article data-reveal key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container split-section">
          <div data-reveal>
            <MotionSlot
              title="AI 智囊经营推演动图"
              note="建议动图：客户问题进入灵枢，多个模型节点依次亮起；企业知识、客户历史和经营目标汇入，最后输出建议、依据与行动卡。"
              tone="neutral"
              ratio="landscape"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="LEARN YOUR BUSINESS"
              title="越用越懂，但知识始终由企业掌控"
              description="把团队确认过的产品事实、客户规则和优秀处理方式沉淀下来，形成可复用的企业智能。"
            />
            <ul className="feature-checklist">
              <li>产品、FAQ、案例与报价规则统一接入</li>
              <li>人工修订可沉淀为待审批知识</li>
              <li>不同角色使用不同数据与操作权限</li>
              <li>模型输出、引用依据与人工动作可追溯</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section strategy-outcomes-section">
        <div className="container">
          <SectionHeading
            eyebrow="ONE BRAIN, MANY TEAMS"
            title="让每个团队，都有一位懂业务的 AI 搭档"
            align="center"
          />
          <div className="strategy-outcomes">
            {[
              ["给运营", "从市场变化中找到值得做的内容与主题。"],
              ["给客服", "理解客户、命中知识并识别需要人工介入的风险。"],
              ["给销售", "总结客户意向，准备下一步跟进与报价草稿。"],
              ["给管理者", "从内容、客户与销售动作中发现经营问题。"],
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
        title="把多个模型，变成真正懂你生意的 AI 智囊"
        description="带上你的产品资料、客户场景与经营目标，看看灵枢如何给出有依据、能执行的建议。"
      />
    </main>
  );
}
