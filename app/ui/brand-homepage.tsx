import styles from "../brand-homepage.module.css";
import { AiSalesWorkspace } from "./ai-sales-workspace";
import { HeroOrbitGallery } from "./hero-orbit-gallery";
import { ViralGrowthEngine } from "./viral-growth-engine";

const platformMarks = [
  ["TikTok", "/platform-color-tiktok.svg"],
  ["Instagram", "/platform-color-instagram.svg"],
  ["YouTube", "/platform-color-youtube.svg"],
  ["Facebook", "/platform-color-facebook.svg"],
  ["WhatsApp", "/platform-whatsapp.svg"],
  ["Shopify", "/platform-shopify.svg"],
] as const;

export function BrandHomepage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroStage} aria-labelledby="brand-hero-title">
        <div className={styles.cinemaFrame}>
          <video
            className={styles.backgroundVideo}
            width="1470"
            height="630"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/home-opening-poster.png"
            aria-hidden="true"
          >
            <source src="/home-opening.mp4" type="video/mp4" />
          </video>

          <div className={styles.videoTreatment} aria-hidden="true" />

          <header className={styles.brandBar}>
            <a className={styles.brand} href="/" aria-label="灵枢 AI 首页">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand-logo-v2.png" alt="" width="38" height="38" />
              <span>灵枢 AI</span>
            </a>
            <nav className={styles.heroNav} aria-label="首页导航">
              <a href="#overview">首页</a>
              <a href="#growth">Agent 工作流</a>
              <a href="#service">智能客服</a>
              <a href="#product">增长链路</a>
              <a className={styles.navAction} href="mailto:19653282176@163.com?subject=预约灵枢 AI 产品演示">
                预约演示
              </a>
            </nav>
          </header>

          <div className={styles.hero}>
            <p className={styles.eyebrow}>企业出海 · 社媒增长 Agent</p>
            <h1 id="brand-hero-title">
              从追逐流量，
              <span>到自带引力</span>
            </h1>
            <p className={styles.summary}>
              基于企业专属知识库与 Agent 工作流，贯通市场洞察、内容策划、规模化创作、多平台分发与增长复盘。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.heroAction} href="mailto:19653282176@163.com?subject=预约灵枢 AI 产品演示">
                预约产品演示 <b aria-hidden="true">↗</b>
              </a>
              <a className={styles.heroSecondaryAction} href="#growth">
                查看 Agent 工作流
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.orbitSection} id="content-ecosystem" aria-labelledby="orbit-title">
        <header className={styles.orbitSectionHeader} data-reveal>
          <span>CONTENT ECOSYSTEM</span>
          <h2 id="orbit-title">一条内容，连接每一个增长触点</h2>
          <p>从机会发现、品牌内容生成到客户持续运营，让每一个环节自然接续。</p>
        </header>
        <HeroOrbitGallery />
      </section>

      <section className={styles.ecosystemBar} aria-label="支持的平台生态">
        <div>
          {platformMarks.map(([name, image]) => (
            <span key={name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" />
              <b>{name}</b>
            </span>
          ))}
        </div>
      </section>

      <section className={styles.overviewSection} id="overview" aria-labelledby="overview-title">
        <header className={styles.overviewHeader} data-reveal>
          <span>ABOUT LINGSHU AI</span>
          <h2 id="overview-title">
            把市场验证过的内容方法，
            <strong>变成持续运转的海外增长系统</strong>
          </h2>
          <p>从行业机会、内容生产到询盘承接，让每一次表达都更接近真实增长。</p>
        </header>

        <div className={styles.overviewGrid} data-reveal>
          <article className={styles.overviewImageCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/industries/industrial-automation.png" alt="工业自动化行业内容场景" />
            <span>多行业增长经验</span>
            <div>
              <strong>120+</strong>
              <p>覆盖产品内容、平台分发与询盘服务场景</p>
            </div>
          </article>

          <article className={styles.overviewCommitmentCard}>
            <span>从发现到承接</span>
            <strong>100%</strong>
            <div className={styles.avatarStack} aria-hidden="true">
              <i style={{ backgroundImage: 'url("/service/ai-gold-sales.webp")' }} />
              <i style={{ backgroundImage: 'url("/service/ai-business-assistant.webp")' }} />
              <i style={{ backgroundImage: 'url("/service/ai-private-domain.webp")' }} />
            </div>
            <p>让内容、客户和销售动作持续接得上，而不是停在一次生成。</p>
          </article>

          <div className={styles.overviewStatStack}>
            <article>
              <span>持续分析的内容信号</span>
              <strong>520K+</strong>
              <p>从真实市场反馈中寻找下一次增长机会。</p>
            </article>
            <article>
              <span>已适配行业</span>
              <strong>20+</strong>
            </article>
          </div>
        </div>
      </section>

      <ViralGrowthEngine />
      <AiSalesWorkspace />

      <section className={styles.closingCover} id="contact" aria-labelledby="closing-title">
        <header className={styles.closingBrand}>
          <a href="/" aria-label="灵枢 AI 首页">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand-logo-v2.png" alt="" width="38" height="38" />
            <span>灵枢 AI</span>
          </a>
          <span>LINGSHU AI · 2026</span>
        </header>

        <div className={styles.closingContent} data-reveal>
          <span>开始体验</span>
          <h2 id="closing-title">
            灵枢 AI，
            <strong>助力四海生意</strong>
          </h2>
          <p>从爆款内容增长到询盘承接，体验灵枢 AI 如何连接整条海外获客链路。</p>
          <div>
            <a className={styles.closingAction} href="mailto:19653282176@163.com?subject=预约灵枢 AI 产品演示">
              预约产品演示 <b aria-hidden="true">↗</b>
            </a>
            <a className={styles.closingMail} href="#growth">
              查看 Agent 工作流
            </a>
          </div>
        </div>

        <footer className={styles.closingFooter}>
          <span>© 2026 灵小枢（杭州）科技有限公司</span>
          <nav aria-label="页尾导航">
            <a href="/legal">法律与信任</a>
            <a href="/privacy">隐私政策</a>
            <a href="/terms">服务条款</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
