import Link from "next/link";
import { CtaBand } from "./ui/site-components";
import { HeroSystemDemo, ProductEvidence } from "./ui/product-evidence";
import { StructuredData, faqSchema, productSchema, websiteSchema } from "./ui/structured-data";

const faq = [
  { question: "灵枢 AI 具体解决什么问题？", answer: "它把外贸厂家的产品资料、海外社媒内容、发布排期、WhatsApp 询盘接待和销售跟进放进同一条工作链路。" },
  { question: "AI 会直接替销售报价吗？", answer: "不会默认越权。企业可以把 AI 设置为只提醒、生成待确认草稿，或只对低风险标准问题自动回复；报价、议价与条款问题可强制转人工。" },
  { question: "支持哪些平台？", answer: "当前产品已实现 TikTok、Facebook、Instagram Reels 与 YouTube 的账号连接和视频发布，并通过 WhatsApp 承接和追踪询盘来源。" },
  { question: "可以先试用吗？", answer: "可以。联系我们获取 3 天试用账号，由顾问协助完成产品资料、内容生成和询盘接待体验。套餐价格暂不公开。" },
];

const loop = [
  ["01", "理解你的产品", "把产品资料、卖点、市场与企业规则沉淀为 AI 可调用的业务上下文。", "/product"],
  ["02", "持续生产内容", "从素材、脚本、分镜到配音与成片，不再从空白页面开始。", "/product/content-studio"],
  ["03", "发布到海外社媒", "多账号统一排期，把每条内容变成可追踪的客户入口。", "/product/social-publishing"],
  ["04", "接住 WhatsApp 询盘", "AI 识别语言、产品与采购信号，补齐销售真正需要的信息。", "/product/whatsapp-ai"],
  ["05", "把机会交给销售", "高价值或高风险对话带着摘要、证据和建议动作转交人工。", "/product/lead-management"],
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
            <h1>从追逐流量，<br /><em>到自带引力。</em></h1>
            <p>让产品知识持续变成海外内容，让每条内容自然连接询盘与销售。灵枢 AI 把内容生产、社媒发布、WhatsApp 接待和人工跟进接成一条增长链路。</p>
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
            <h2>先看产品，<br />再做决定。</h2>
            <p>下面使用正式灵枢工作台界面，并标明真实能力与使用边界。没有客户资料，也不再用虚构后台代替产品。</p>
          </div>
          <ProductEvidence />
        </div>
      </section>

      <section className="editorial-section loop-section" id="how-it-works">
        <div className="container">
          <div className="editorial-heading is-light">
            <span>ONE CONTINUOUS GROWTH LOOP</span>
            <h2>一条链路，<br />跑通海外获客。</h2>
          </div>
          <div className="loop-list">
            {loop.map(([index, title, text, href]) => (
              <Link className="loop-link" href={href} key={index} aria-label={`${title}：查看对应功能`}>
                <span>{index}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section control-story">
        <div className="container control-story-grid">
          <div className="editorial-heading">
            <span>HUMAN IN CONTROL</span>
            <h2>企业敢用，<br />团队接得上。</h2>
            <p>以合规与 AI 鉴权守住业务边界，同时兼容企业现有的审批、销售和客户管理流程。</p>
          </div>
          <div className="control-levels">
            <article><span>01</span><div><h3>只提醒</h3><p>判断优先级与风险，不写、不发。</p></div></article>
            <article><span>02</span><div><h3>草稿需确认</h3><p>AI 基于企业知识拟回复，销售确认后发送。</p></div></article>
            <article><span>03</span><div><h3>低风险自动回复</h3><p>仅处理已审批知识；价格、条款和大单立即转人工。</p></div></article>
            <div className="security-facts">
              <span>合规 + AI 鉴权</span>
              <ul>
                <li>回答优先引用已审批的企业知识</li>
                <li>关键操作保留状态与人工确认节点</li>
                <li>社媒账号按授权连接，不展示登录凭证</li>
                <li>演示环境不使用客户名称、产品或联系人</li>
              </ul>
            </div>
            <div className="workflow-facts">
              <span>兼容现有工作流</span>
              <p>不要求企业推倒重来。灵枢可以接在现有素材、内容审批、WhatsApp 接待、销售接管与 CRM 记录之间。</p>
              <div><b>企业资料</b><i>→</i><b>灵枢 AI</b><i>→</i><b>人工审批</b><i>→</i><b>销售 / CRM</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section industry-story">
        <div className="container">
          <div className="editorial-heading">
            <span>BUILT AROUND REAL EXPORT QUESTIONS</span>
            <h2>先懂行业，<br />再做增长。</h2>
            <p>美妆、医药和建材是当前重点展示的方案，不是服务边界。只要企业需要用内容解释产品、承接海外询盘，灵枢都可以按业务知识配置。</p>
          </div>
          <div className="industry-editorial-grid">
            {[
              ["美妆个护", "成分、肤感、私标包装、MOQ、标签语言与打样"],
              ["医药健康", "产品教育、质量流程、认证、法规与功效边界"],
              ["建材", "规格、标准、工程场景、数量、目的港与交期"],
            ].map(([title, text], index) => {
              const href = ["/solutions/beauty", "/solutions/healthcare", "/solutions/building-materials"][index];
              return <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href={href}>查看行业方案 →</Link></article>;
            })}
          </div>
          <p className="mock-disclaimer">行业示例中的企业、客户与经营数据均为 Mock，不代表真实客户结果。</p>
          <div className="industry-more"><span>同样适用于</span><b>机械设备</b><b>家居用品</b><b>消费电子</b><b>汽车配件</b><b>纺织服装</b><b>食品原料</b><Link href="/demo?intent=industry">咨询你的行业 →</Link></div>
        </div>
      </section>

      <section className="editorial-section editorial-faq" id="faq">
        <div className="container editorial-faq-grid">
          <div className="editorial-heading"><span>FAQ</span><h2>常见问题</h2></div>
          <div>{faq.map((item) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <CtaBand title="用 3 天，跑一遍真实的海外获客链路" description="联系我们获取试用账号。用你的产品资料体验内容生成、发布排期、WhatsApp 接待与销售交接。" />
    </main>
  );
}
