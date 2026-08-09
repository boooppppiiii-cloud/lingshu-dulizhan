import Link from "next/link";
import { CtaBand } from "./ui/site-components";
import { HeroSystemDemo, ProductEvidence } from "./ui/product-evidence";
import { ProductTour } from "./ui/product-tour";
import { StructuredData, faqSchema, productSchema, websiteSchema } from "./ui/structured-data";

const faq = [
  { question: "灵枢 AI 具体解决什么问题？", answer: "它把外贸厂家的产品资料、海外社媒内容、发布排期、WhatsApp 询盘接待和销售跟进放进同一条工作链路。" },
  { question: "AI 会直接替销售报价吗？", answer: "不会默认越权。企业可以把 AI 设置为只提醒、生成待确认草稿，或只对低风险标准问题自动回复；报价、议价与条款问题可强制转人工。" },
  { question: "支持哪些平台？", answer: "当前产品已实现 TikTok、Facebook、Instagram Reels 与 YouTube 的账号连接和视频发布，并通过 WhatsApp 承接和追踪询盘来源。" },
  { question: "可以先试用吗？", answer: "可以。联系我们获取 3 天试用账号，由顾问协助完成产品资料、内容生成和询盘接待体验。套餐价格暂不公开。" },
];

const loop = [
  ["01", "理解你的产品", "把产品资料、卖点、市场与企业规则沉淀为 AI 可调用的业务上下文。"],
  ["02", "持续生产内容", "从素材、脚本、分镜到配音与成片，不再从空白页面开始。"],
  ["03", "发布到海外社媒", "多账号统一排期，把每条内容变成可追踪的客户入口。"],
  ["04", "接住 WhatsApp 询盘", "AI 识别语言、产品与采购信号，补齐销售真正需要的信息。"],
  ["05", "把机会交给销售", "高价值或高风险对话带着摘要、证据和建议动作转交人工。"],
];

export default function HomePage() {
  return (
    <main className="editorial-home">
      <StructuredData data={[websiteSchema, productSchema(), faqSchema(faq)]} />

      <section className="editorial-hero">
        <div className="editorial-hero-glow" />
        <div className="container editorial-hero-inner">
          <div className="editorial-hero-copy">
            <span className="editorial-kicker"><i /> FOR EXPORT MANUFACTURERS</span>
            <h1>让海外客户<br /><em>看见你的产品，</em><br />也被及时接住。</h1>
            <p>灵枢 AI 把外贸厂家的产品资料变成海外社媒内容，持续发布到客户所在的平台；再把评论、私信和 WhatsApp 询盘交给 AI 首轮接待与销售跟进。</p>
            <div className="editorial-actions">
              <Link href="/demo?intent=trial" className="editorial-button is-primary">获取 3 天试用 <span>↗</span></Link>
              <a href="#product" className="editorial-button">看真实产品 <span>↓</span></a>
            </div>
            <small className="editorial-trial-note">联系我们开通 · 套餐价格暂不公开 · 顾问协助体验</small>
            <div className="editorial-proofline">
              <span>内容生产</span><i /> <span>多平台发布</span><i /> <span>WhatsApp AI</span><i /> <span>销售接管</span>
            </div>
          </div>
          <div className="editorial-hero-product">
            <div className="hero-video-frame"><HeroSystemDemo /></div>
            <p><strong>只展示系统。</strong> 功能演示依据灵枢正式产品逻辑制作，不包含客户资料。</p>
          </div>
        </div>
      </section>

      <section className="truth-strip" aria-label="产品事实">
        <div className="container">
          <strong>一套工作台，贯通海外获客的前后两端</strong>
          <span>TikTok</span><span>Facebook</span><span>Instagram</span><span>YouTube</span><span>WhatsApp</span>
        </div>
      </section>

      <section className="editorial-section product-intro">
        <div className="container">
          <div className="editorial-heading">
            <span>THE PRODUCT, NOT A PROMISE</span>
            <h2>先看产品怎么工作，<br />再决定它是否适合你。</h2>
            <p>我们不再用抽象卡片代替产品。下面的界面、成片和流程均来自正式 lingshu-AI 项目。</p>
          </div>
          <ProductEvidence />
          <div className="home-guided-tour"><ProductTour /></div>
        </div>
      </section>

      <section className="editorial-section loop-section" id="how-it-works">
        <div className="container">
          <div className="editorial-heading is-light">
            <span>ONE CONTINUOUS GROWTH LOOP</span>
            <h2>不是五个孤立工具，<br />是一条不断档的增长链路。</h2>
          </div>
          <div className="loop-list">
            {loop.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section control-story">
        <div className="container control-story-grid">
          <div className="editorial-heading">
            <span>HUMAN IN CONTROL</span>
            <h2>AI 可以快，<br />但不能越过你的业务边界。</h2>
          </div>
          <div className="control-levels">
            <article><span>01</span><div><h3>只提醒</h3><p>判断优先级与风险，不写、不发。</p></div></article>
            <article><span>02</span><div><h3>草稿需确认</h3><p>AI 基于企业知识拟回复，销售确认后发送。</p></div></article>
            <article><span>03</span><div><h3>低风险自动回复</h3><p>仅处理已审批知识；价格、条款和大单立即转人工。</p></div></article>
          </div>
        </div>
      </section>

      <section className="editorial-section industry-story">
        <div className="container">
          <div className="editorial-heading">
            <span>BUILT AROUND REAL EXPORT QUESTIONS</span>
            <h2>行业不同，客户真正想确认的事也不同。</h2>
          </div>
          <div className="industry-editorial-grid">
            {[
              ["美妆个护", "成分、肤感、私标包装、MOQ、标签语言与打样"],
              ["医药健康", "产品教育、质量流程、认证、法规与功效边界"],
              ["建材", "规格、标准、工程场景、数量、目的港与交期"],
            ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href="/service">查看行业方案 →</Link></article>)}
          </div>
          <p className="mock-disclaimer">行业示例中的企业、客户与经营数据均为 Mock，不代表真实客户结果。</p>
        </div>
      </section>

      <section className="editorial-section editorial-faq" id="faq">
        <div className="container editorial-faq-grid">
          <div className="editorial-heading"><span>FAQ</span><h2>先把关键问题说清楚。</h2></div>
          <div>{faq.map((item) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <CtaBand title="用 3 天，跑一遍真实的海外获客链路" description="联系我们获取试用账号。用你的产品资料体验内容生成、发布排期、WhatsApp 接待与销售交接。" />
    </main>
  );
}
