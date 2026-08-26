import styles from "../brand-homepage.module.css";
import { AiSalesWorkspace } from "./ai-sales-workspace";
import { ViralGrowthEngine } from "./viral-growth-engine";

function LearningWorkflow() {
  return (
    <section className={styles.learningSection} id="product">
      <div className={styles.sectionIntro} data-reveal>
        <span>企业长期记忆</span>
        <h2>不是每次重新认识客户，<br />AI 会接着上一次继续聊</h2>
        <p>客户换了平台、隔了一个月，或开始二期项目，灵枢依然记得关键需求和暂停原因。下一次沟通不再重复盘问，而是直接从变化处继续推进。</p>
      </div>

      <div className={styles.memoryJourney} data-reveal>
        <section className={styles.memorySource}>
          <span>客户曾经说过</span>
          <strong>散落在不同时间与渠道的关键信息</strong>
          <ul>
            <li><i />一期 SAT 已完成，最终参数已确认</li>
            <li><i />偏好英文界面与本地集成服务</li>
            <li><i />因仓库改造暂停，暂时不催决策</li>
          </ul>
        </section>

        <div className={styles.memoryBridge} aria-label="灵枢长期记忆">
          <span>持续记住</span>
          <div><i /><i /><i /></div>
          <strong>长期上下文</strong>
          <small>不是一段聊天记录<br />而是可调用的客户认知</small>
        </div>

        <section className={styles.memoryUse}>
          <span>下一次直接接着聊</span>
          <div className={styles.memoryMessage}>
            <small>AI 回复 · 已调用一期项目记忆</small>
            <p>我们会沿用一期 SAT 基线，只确认新增箱型、输送线变化和二期启动日期。</p>
          </div>
          <div className={styles.memoryMessage}>
            <small>沉默 33 天 · 自然唤醒</small>
            <p>新版布局可多释放 600 毫米通道。我可以先发给你留档，现在无需做决定。</p>
          </div>
        </section>

        <footer className={styles.memoryResults}>
          <div><b>客户感受到</b><span>不用反复解释，沟通始终接得上</span></div>
          <div><b>销售获得</b><span>不用翻聊天记录，接管就知道重点</span></div>
          <div><b>业务留下</b><span>经验持续沉淀，不跟着人员流失</span></div>
        </footer>
      </div>
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
          <span className={styles.productHeroEyebrow}>灵枢 AI 社媒内容获客平台</span>
          <h1 id="brand-hero-title">让内容持续触达，<span>让高价值商机不再掉线</span></h1>
          <p>从内容机会到询盘承接，让海外获客成为一条持续运转的增长链路。</p>
          <a href="#discovery">了解灵枢 AI <b aria-hidden="true">↓</b></a>
        </div>

        <div className={styles.heroVideoWrap}>
          <div className={styles.heroVideoFrame}>
            <div className={styles.heroVideoTopbar}>
              <span><i /> 产品演示</span>
              <small>LINGSHU AI / PRODUCT TOUR</small>
              <b>01:26</b>
            </div>
            <div className={styles.heroVideoStage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product-ui/viral-discovery.png" alt="灵枢 AI 内容机会发现界面" />
              <div className={styles.heroVideoShade} aria-hidden="true" />
              <div className={styles.heroVideoControls} aria-hidden="true">
                <i className={styles.heroVideoPlay} />
                <span><b /></span>
                <small>00:00 / 01:26</small>
              </div>
              <div className={styles.heroVideoScan} aria-hidden="true" />
            </div>
            <i className={styles.frameCorner} data-corner="tl" aria-hidden="true" />
            <i className={styles.frameCorner} data-corner="tr" aria-hidden="true" />
            <i className={styles.frameCorner} data-corner="bl" aria-hidden="true" />
            <i className={styles.frameCorner} data-corner="br" aria-hidden="true" />
          </div>
        </div>
      </section>

      <ViralGrowthEngine />
      <AiSalesWorkspace />
    </main>
  );
}
