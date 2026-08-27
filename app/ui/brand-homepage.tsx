import styles from "../brand-homepage.module.css";
import { AiSalesWorkspace } from "./ai-sales-workspace";
import { ViralGrowthEngine } from "./viral-growth-engine";

function FinalCallToAction() {
  return (
    <section className={styles.finalCta} id="contact">
      <div data-reveal><span>开始体验</span><h2 className={styles.finalCtaTitle}>灵枢 AI，<br />助力四海生意</h2><p>从爆款内容增长到询盘承接，体验灵枢 AI 如何连接整条海外获客链路。</p><div><a href="mailto:19653282176@163.com?subject=预约灵枢 AI 产品演示">预约产品演示</a><a href="#growth">查看 Agent 工作流</a></div></div>
      <aside data-reveal><span>体验内容</span><ul><li>梳理当前内容与获客流程</li><li>确认适用能力与接入范围</li><li>使用演示数据体验完整链路</li></ul><small>提交后由灵枢 AI 团队统一联系</small></aside>
    </section>
  );
}

export function BrandHomepage() {
  return (
    <main className={styles.page}>
      <section className={styles.productHero} aria-labelledby="brand-hero-title">
        <div className={styles.productHeroArcs} aria-hidden="true">
          <span className={styles.productHeroBeam} />
          <span className={styles.productHeroFloor} />
          <i data-arc="1" />
          <i data-arc="2" />
          <i data-arc="3" />
        </div>
        <div className={styles.productHeroIntro}>
          <span className={styles.productHeroEyebrow}>企业出海 · 社媒增长 Agent</span>
          <h1 id="brand-hero-title">从追逐流量，<span>到自带引力</span></h1>
          <p>基于企业专属知识库与 Agent 工作流，贯通市场洞察、内容策划、规模化创作、多平台分发与增长复盘，帮助品牌、工厂及各类出海企业建立可持续的海外社媒增长系统。</p>
          <div className={styles.productHeroActions}>
            <a className={styles.productHeroPrimary} href="mailto:19653282176@163.com?subject=预约灵枢 AI 产品演示">预约产品演示 <b aria-hidden="true">↗</b></a>
            <a className={styles.productHeroSecondary} href="#growth">查看 Agent 工作流 <b aria-hidden="true">↓</b></a>
          </div>
        </div>
      </section>

      <ViralGrowthEngine />
      <AiSalesWorkspace />
      <FinalCallToAction />
    </main>
  );
}
