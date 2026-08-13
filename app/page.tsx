import Link from "next/link";
import { CinematicHero, ImmersiveProductDemo, SignalJourney } from "./ui/cinematic-home";
import { CtaBand } from "./ui/site-components";
import { StructuredData, faqSchema, productSchema, websiteSchema } from "./ui/structured-data";

const faq = [
  { question: "灵枢 AI 具体解决什么问题？", answer: "它把外贸厂家的产品资料、海外社媒内容、发布排期、WhatsApp 询盘接待和销售跟进放进同一条工作链路。" },
  { question: "AI 会直接替销售报价吗？", answer: "不会默认越权。企业可以把 AI 设置为只提醒、生成待确认草稿，或只对低风险标准问题自动回复；报价、议价与条款问题可强制转人工。" },
  { question: "支持哪些平台？", answer: "当前产品已实现 TikTok、Facebook、Instagram Reels 与 YouTube 的账号连接和视频发布，并通过 WhatsApp 承接和追踪询盘来源。" },
  { question: "可以先试用吗？", answer: "可以。联系我们获取 3 天试用账号，由顾问协助完成产品资料、内容生成和询盘接待体验。套餐价格暂不公开。" },
];

export default function HomePage() {
  return (
    <main className="cinematic-home">
      <StructuredData data={[websiteSchema, productSchema(), faqSchema(faq)]} />

      <CinematicHero />
      <SignalJourney />
      <ImmersiveProductDemo />

      <section className="cinematic-capabilities" aria-labelledby="capabilities-title">
        <div className="container">
          <div className="cinematic-section-heading">
            <span>ONE SYSTEM · THREE MOMENTS</span>
            <h2 id="capabilities-title">只保留增长需要的<br />三个关键动作。</h2>
          </div>
          <div className="cinematic-capability-grid">
            {[
              ["01", "内容找到机会", "用趋势和产品知识确定值得表达的主题。", "/product/content-studio"],
              ["02", "内容进入市场", "完成创作、适配和多平台发布。", "/product/social-publishing"],
              ["03", "机会进入销售", "保留来源、理解意图，并在关键节点交给人工。", "/product/whatsapp-ai"],
            ].map(([index, title, text, href]) => (
              <Link href={href} key={index}>
                <span>{index}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-industries" aria-labelledby="industries-title">
        <div className="container">
          <div className="cinematic-section-heading">
            <span>BUILT AROUND REAL EXPORT QUESTIONS</span>
            <h2 id="industries-title">先懂行业，<br />再做增长。</h2>
            <p>从产品规格、认证与供应条件出发，让每次内容表达和客户回答都有企业依据。</p>
          </div>
          <div className="cinematic-industry-grid">
            {[
              ["美妆个护", "成分 · 肤感 · 私标包装 · MOQ", "/solutions/beauty"],
              ["医药健康", "产品教育 · 质量流程 · 法规边界", "/solutions/healthcare"],
              ["建材", "规格 · 标准 · 工程场景 · 交期", "/solutions/building-materials"],
            ].map(([title, text, href], index) => (
              <Link href={href} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>查看方案 ↗</i></Link>
            ))}
          </div>
          <p className="cinematic-disclaimer">行业示例用于说明知识配置方式，不代表真实客户经营结果。</p>
        </div>
      </section>

      <section className="cinematic-faq" id="faq" aria-labelledby="faq-title">
        <div className="container cinematic-faq-grid">
          <div className="cinematic-section-heading"><span>FAQ</span><h2 id="faq-title">常见问题</h2></div>
          <div>{faq.map((item) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <CtaBand title="用 3 天，跑一遍真实的海外获客链路" description="用你的产品资料体验内容生成、发布排期、WhatsApp 接待与销售交接。" />
    </main>
  );
}
