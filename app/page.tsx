import Link from "next/link";
import {
  CtaBand,
  MotionSlot,
  SectionHeading,
} from "./ui/site-components";

const loopSteps = ["趋势", "创作", "发布", "询盘", "接待", "跟进", "洞察"];

const socialScenes = [
  {
    index: "01",
    title: "发现机会",
    text: "从趋势和竞品中识别值得跟进的主题，把“为什么会火”拆成可执行的创作任务。",
    meta: "趋势视频 · 竞品监测 · 爆款拆解",
  },
  {
    index: "02",
    title: "生成内容",
    text: "以产品资料为起点，生成脚本、分镜、配音、封面、图文与不同平台的发布文案。",
    meta: "短视频 · B2B 图文 · 多语言",
  },
  {
    index: "03",
    title: "多平台发布",
    text: "一次配置，多平台、多账号差异化发布；在发布前完成适配检查与排期。",
    meta: "YouTube · TikTok · Instagram · Facebook",
  },
  {
    index: "04",
    title: "内容级归因",
    text: "为每条内容附加独立 WhatsApp 入口，让客户来源精确回到内容、账号和平台。",
    meta: "追踪码 · 客户来源 · 询盘上下文",
  },
];

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
      <section className="home-hero">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">出海企业的 AI 增长工作台</span>
            <h1>
              从一条内容，
              <br />
              <span>到一笔生意</span>
            </h1>
            <p>
              发现海外社媒机会，AI
              生成并发布内容，精准追踪每一条询盘；再由懂你产品与规则的 AI
              客服，完成接待、筛选和持续跟进。
            </p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href="/demo?source=hero"
                data-event="hero_cta_click"
              >
                预约产品演示 <span>↗</span>
              </Link>
              <a className="button button-ghost" href="#growth-loop">
                观看 90 秒演示
              </a>
            </div>
            <div className="hero-trust">
              <span>支持接入</span>
              <strong>YouTube</strong>
              <strong>TikTok</strong>
              <strong>Instagram</strong>
              <strong>Facebook</strong>
              <strong>WhatsApp</strong>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <MotionSlot
              title="首屏产品闭环动图"
              note="建议内容：左侧社媒卡 → 中央工作台 → 右侧客户对话；用数据流串联“发布成功、新询盘、AI 已接待、人工接管”。"
              tone="neutral"
              ratio="landscape"
            />
            <div className="hero-status hero-status-a">
              <i className="dot-social" />
              内容已发布
            </div>
            <div className="hero-status hero-status-b">
              <i className="dot-service" />
              高意向询盘
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="platform-band">
        <div className="container platform-band-inner">
          <p>一套工作台，连接内容与客户</p>
          <div className="platform-marquee" aria-label="支持接入的平台">
            {["YouTube", "TikTok", "Instagram", "Facebook", "WhatsApp", "Shopify"].map(
              (platform) => (
                <span key={platform}>{platform}</span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section value-section" id="growth-loop">
        <div className="container">
          <SectionHeading
            eyebrow="THE GROWTH LOOP"
            title="流量不是终点。能被接住的流量，才是增长。"
            description="灵枢把分散在运营、平台与销售之间的动作，收进一条可追踪、可控制、可复盘的增长链路。"
          />
          <div className="growth-loop" data-reveal>
            <div className="loop-track">
              {loopSteps.map((step, index) => (
                <div className="loop-node" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className="loop-pulse" aria-hidden="true" />
          </div>
          <div className="contrast-grid">
            <article className="contrast-card is-muted" data-reveal>
              <span className="eyebrow">BEFORE</span>
              <h3>传统出海获客</h3>
              <ul>
                <li>灵感、内容、发布各自分散</li>
                <li>客户消息散落在多个窗口</li>
                <li>不知道询盘来自哪条内容</li>
                <li>AI 与销售各自为战</li>
              </ul>
            </article>
            <article className="contrast-card is-active" data-reveal>
              <span className="eyebrow">WITH LINGSHU</span>
              <h3>可闭环的增长链路</h3>
              <ul>
                <li>趋势直接转为创作任务</li>
                <li>多平台统一发布并附追踪入口</li>
                <li>AI 识别来源、意图和优先级</li>
                <li>销售带着完整上下文接手</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section social-section">
        <div className="container">
          <SectionHeading
            eyebrow="SOCIAL GROWTH"
            title="从“今天发什么”，到“内容正在带来谁”"
            description="不只生成内容，更把洞察、生产、发布和客户归因连成一个可持续的内容系统。"
          />
          <div className="story-grid">
            <div className="story-steps">
              {socialScenes.map((scene) => (
                <article className="story-step" data-reveal key={scene.index}>
                  <span>{scene.index}</span>
                  <div>
                    <h3>{scene.title}</h3>
                    <p>{scene.text}</p>
                    <small>{scene.meta}</small>
                  </div>
                </article>
              ))}
            </div>
            <div className="story-sticky" data-reveal>
              <MotionSlot
                title="社媒四场景滚动动图"
                note="建议随页面滚动依次展示：趋势洞察、内容生成、多平台发布、WhatsApp 内容级归因。"
                tone="social"
                ratio="portrait"
              />
            </div>
          </div>
          <Link className="text-link" href="/social">
            查看社媒增长完整能力 <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="bridge-section">
        <div className="bridge-glow" aria-hidden="true" />
        <div className="container">
          <SectionHeading
            eyebrow="CONTENT → CONVERSATION"
            title="内容负责打开对话，AI 负责不错过机会"
            description="当客户点击内容里的 WhatsApp 入口，灵枢会把来源、意图与完整上下文带进客户工作台。"
          />
          <div data-reveal>
            <MotionSlot
              title="Content-to-Conversation Morph"
              note="标志性动效：社媒内容卡 CTA 形变为 WhatsApp 消息气泡，再展开成带来源信息的客户详情。"
              tone="dark"
              ratio="wide"
            />
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
              <MotionSlot
                title="Human Handoff 人工接管"
                note="建议展示：AI 命中企业知识 → 检测报价风险 → 草稿停发 → 销售接管并看到来源、摘要与建议动作。"
                tone="service"
                ratio="portrait"
              />
            </div>
          </div>
          <Link className="text-link" href="/ai-service">
            查看智能客服完整能力 <span>↗</span>
          </Link>
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
            title="为真实的出海增长团队而设计"
            align="center"
          />
          <div className="scenario-grid">
            {[
              {
                title: "外贸工厂",
                tag: "B2B EXPORT",
                text: "把工厂、产品和认证素材变成专业内容；让 AI 接住 MOQ、样品和交期问题，复杂报价及时交给业务员。",
              },
              {
                title: "跨境品牌",
                tag: "GLOBAL BRAND",
                text: "高频生成社媒内容并统一排期；接住评论、私信与 WhatsApp 线索，再用客户问题反哺内容。",
              },
              {
                title: "海外营销团队",
                tag: "MARKETING TEAM",
                text: "管理多个平台与账号，统一内容队列、审批与复盘，让运营数据与销售线索不再断裂。",
              },
            ].map((item) => (
              <article className="scenario-card" data-reveal key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/demo">查看适用方案 ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section demo-preview-section">
        <div className="container demo-preview-grid">
          <div>
            <SectionHeading
              eyebrow="INTERACTIVE DEMO"
              title="亲手走完一次“内容到客户”"
              description="无需登录，用固定演示数据体验生成内容、选择平台、收到询盘、AI 判断和人工接管。"
            />
            <ol className="mini-steps">
              {["选择产品", "生成内容", "选择平台", "收到询盘", "AI 识别", "转交销售"].map(
                (step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    {step}
                  </li>
                ),
              )}
            </ol>
            <Link className="button button-primary" href="/demo#sandbox">
              开始 45 秒演示 <span>↗</span>
            </Link>
          </div>
          <div data-reveal>
            <MotionSlot
              title="交互沙盒展示位"
              note="后续可放 30–45 秒产品演示视频；当前页面保留完整的六步交互入口。"
              tone="neutral"
              ratio="landscape"
            />
          </div>
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
