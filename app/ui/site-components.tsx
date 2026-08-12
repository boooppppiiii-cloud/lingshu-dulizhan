import Link from "next/link";

type MotionSlotProps = {
  title: string;
  note: string;
  tone?: "neutral" | "social" | "service" | "dark";
  ratio?: "wide" | "landscape" | "portrait";
  compact?: boolean;
};

export function MotionSlot({
  title,
  note,
  tone = "neutral",
  ratio = "landscape",
  compact = false,
}: MotionSlotProps) {
  return (
    <div className={`workflow-visual workflow-${tone} ratio-${ratio} ${compact ? "is-compact" : ""}`} aria-label={`${title}，工作流示意`}>
      <div className="workflow-visual-top"><span><i /> LINGSHU WORKFLOW</span><small>产品逻辑</small></div>
      <div className="workflow-visual-body"><span>01</span><span>02</span><span>03</span><i /><i /></div>
      <strong>{title}</strong><p>{note}</p>
      <small className="workflow-visual-note">实际产品界面与能力边界见下方产品区</small>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading align-${align}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  visualTitle,
  visualNote,
  tone = "neutral",
}: {
  eyebrow: string;
  title: string;
  description: string;
  visualTitle: string;
  visualNote: string;
  tone?: "neutral" | "social" | "service";
}) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="container page-hero-grid">
        <div className="page-hero-copy" data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/demo?intent=trial">
              获取 3 天试用账号 <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="#details">
              查看完整能力
            </Link>
          </div>
        </div>
        <div className="page-hero-visual" data-reveal>
          <MotionSlot title={visualTitle} note={visualNote} tone={tone} ratio="landscape" />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "用 3 天，看清一条内容如何走向询盘",
  description = "联系我们获取试用账号，用真实产品体验内容生成、排期发布、WhatsApp 接待与销售交接。",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cta-band" data-reveal>
      <div className="cta-noise" />
      <div className="container cta-content">
        <span className="eyebrow eyebrow-light">READY WHEN YOU ARE</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-light" href="/demo?intent=trial">
            获取 3 天试用账号 <span>↗</span>
          </Link>
          <a className="button button-dark-ghost" href="mailto:hello@lingshu.ai">
            联系增长顾问
          </a>
        </div>
      </div>
    </section>
  );
}

export function CapabilityList({
  items,
  tone = "neutral",
}: {
  items: Array<{ index: string; title: string; text: string }>;
  tone?: "neutral" | "social" | "service";
}) {
  return (
    <div className={`capability-list tone-${tone}`}>
      {items.map((item) => (
        <article className="capability-item" data-reveal key={item.index}>
          <span>{item.index}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
