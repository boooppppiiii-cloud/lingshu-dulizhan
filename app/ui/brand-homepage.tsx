"use client";

import { useEffect, useState } from "react";
import styles from "../brand-homepage.module.css";

const contentSamples = [
  {
    src: "/industries/industrial-automation.png",
    industry: "工业制造",
    signal: "演示型内容持续增长",
  },
  {
    src: "/industries/home-furniture.png",
    industry: "家居建材",
    signal: "工艺细节引发询问",
  },
  {
    src: "/industries/consumer-electronics.png",
    industry: "消费电子",
    signal: "功能讲解高互动",
  },
  {
    src: "/industries/personal-care.png",
    industry: "消费品牌",
    signal: "真人口播快速起量",
  },
];

function ViralReplication() {
  const [activeAnalysis, setActiveAnalysis] = useState(0);
  const analyses = [
    { label: "爆款核心原因", title: "为什么它能留住观众", copy: "问题前置制造信息缺口，用专业身份快速建立信任，再以清晰步骤降低理解成本。", chips: ["信息缺口", "专业背书", "结果预期"] },
    { label: "分镜匹配", title: "画面与表达逐段对齐", copy: "将脚本句子匹配到开场、产品特写、使用动作与结果画面，明确每个镜头承担的传播任务。", chips: ["开场 3 秒", "卖点证明", "行动镜头"] },
    { label: "脚本详析", title: "看见每一句的作用", copy: "逐句标记钩子、痛点、利益点、可信证据与行动引导，让有效结构可以被直接调用。", chips: ["情绪钩子", "利益表达", "转化动作"] },
    { label: "改编建议", title: "把结构转成你的产品脚本", copy: "保留原内容的表达节奏，替换为企业产品信息、目标人群与场景，生成可继续编辑的新脚本。", chips: ["产品替换", "人群适配", "脚本生成"] },
  ];
  useEffect(() => { const timer = window.setInterval(() => setActiveAnalysis(v => (v + 1) % analyses.length), 4200); return () => window.clearInterval(timer); }, [analyses.length]);
  const active = analyses[activeAnalysis];
  return (
    <section className={styles.replicationSection} id="growth">
      <div className={styles.sectionIntro} data-reveal>
        <span>AI 爆款拆解</span>
        <h2>把爆款表达，拆成可复用的增长方法</h2>
        <p>从脚本出发，理解内容为什么有效、画面如何配合、每句话承担什么作用，并给出面向企业产品的改编方向。</p>
      </div>
      <div className={`${styles.analysisShowcase} ${styles.analysisTheater}`} data-reveal>
        <nav>{analyses.map((item,index)=><button className={activeAnalysis===index?styles.activeAnalysis:""} onClick={()=>setActiveAnalysis(index)} key={item.label} type="button"><i>0{index+1}</i><span>{item.label}</span></button>)}</nav>
        <div className={`${styles.creativeCanvas} ${styles.analysisScanner}`} key={activeAnalysis}>
          <header><span>《5 个人人都该知道的护肤产品》</span><b>AI 分析完成</b></header>
          <div className={styles.canvasVideo}><div /><span>00:0{activeAnalysis * 4 + 2}</span><i /></div>
          <div className={styles.canvasAura} />
          <article className={styles.canvasCard} data-card="1"><span>{["爆款潜力","镜头任务","脚本作用","改编入口"][activeAnalysis]}</span><strong>{["良 · 76%","问题前置","制造信息缺口","目标人群替换"][activeAnalysis]}</strong><i /></article>
          <article className={styles.canvasCard} data-card="2"><span>{["可复制性","画面匹配","表达证据","产品信息"][activeAnalysis]}</span><strong>{["高 · 88%","人物口播 → 产品特写","反问 → 观点 → 证明","卖点与场景重组"][activeAnalysis]}</strong><i /></article>
          <article className={styles.canvasCard} data-card="3"><span>{["关键原因","运镜节奏","转化动作","生成结果"][activeAnalysis]}</span><strong>{["前三秒悬念","固定 → 推近 → 快切","总结后给出下一步","可编辑产品脚本"][activeAnalysis]}</strong><i /></article>
          <div className={styles.canvasRail}><b>00:00</b><i /><i /><i /><i /><span>00:18</span></div>
          <aside><i /><span>正在连接脚本、画面与可复用爆点</span></aside>
          <div className={styles.scannerBeam} />
          <div className={styles.liveTranscript} aria-hidden="true">
            <span>正在读取画面语义 · 人物口播 / 产品近景 / 使用动作</span>
            <span>正在对齐脚本结构 · 钩子 → 痛点 → 证据 → 行动引导</span>
            <span>正在计算传播信号 · 前 3 秒停留 / 信息密度 / 节奏变化</span>
            <span>正在生成结论 · 保留表达结构，替换企业产品信息</span>
          </div>
        </div>
        <div className={styles.analysisResult} key={active.label}>
          <span>{active.label}</span><h3>{active.title}</h3><p>{active.copy}</p>
          <div>{active.chips.map(chip=><b key={chip}>{chip}</b>)}</div>
          <aside><i /><span>正在生成面向企业产品的改编策略</span></aside>
        </div>
      </div>
    </section>
  );
}

function VariantExplosion() {
  const [activeVariation, setActiveVariation] = useState(0);
  const variationTypes = [
    ["产品裂变", "替换口红、粉底、面霜与眼影", "0% 0%", ["口红","粉底","面霜","眼影"]], ["语言裂变", "选择语种与对应音色", "100% 0%", ["英语","阿拉伯语","西班牙语","法语"]],
    ["人物裂变", "选择不同角色与表达气质", "100% 100%", ["品牌主理人","专业顾问","真实用户","达人口播"]], ["场景裂变", "车内、房间、客厅等真实环境", "0% 100%", ["车内","客厅","化妆间","工作室"]],
  ];
  const variation = variationTypes[activeVariation];
  useEffect(() => { const timer = window.setInterval(() => setActiveVariation(value => (value + 1) % variationTypes.length), 3000); return () => window.clearInterval(timer); }, [variationTypes.length]);
  return (
    <section className={styles.variantSection}>
      <div className={styles.sectionIntro} data-reveal>
        <span>爆款裂变</span>
        <h2>同一种爆款表达，长出不同的内容</h2>
        <p>保留已经验证有效的表达结构，灵活替换产品、场景、人物与语言，让同一个爆点适配更多市场和受众。</p>
      </div>
      <div className={styles.variationGallery} data-reveal>
        <div className={styles.variantStage}>
          <div className={styles.sourceScript}><i /><span>爆款表达结构</span><strong>钩子 · 卖点 · 证据 · 行动引导</strong><em>结构已锁定</em></div>
          <div className={styles.variantFlow}><i /><i /><i /></div>
          <div className={styles.variantWall}>
            {variationTypes.map((item,index)=><button className={activeVariation===index?styles.activeVariantFilm:""} onClick={()=>setActiveVariation(index)} key={item[0] as string} type="button"><div style={{backgroundPosition:item[2] as string}} /><span>0{index+1}</span><strong>{item[0] as string}</strong><small>{item[1] as string}</small></button>)}
          </div>
          <div className={styles.variantTicker} key={activeVariation}><b>AI 正在裂变</b><span>{(variation[3] as string[]).join("  ·  ")}</span><i>01 → 02 → 04 → 08</i></div>
        </div>
      </div>
    </section>
  );
}

function DistributionBurst() {
  const platforms = ["tiktok", "instagram", "youtube", "facebook", "whatsapp"];
  return (
    <section className={styles.distributionSection}>
      <div className={styles.distributionCopy} data-reveal><span>全球社媒分发</span><h2>一次确认，多平台同步触达</h2><p>成片从创作工作台进入发布流程，在已连接的账号中选择目标平台、补充发布信息并统一确认。</p></div>
      <div className={styles.platformBurst} data-reveal>
        <div className={styles.publishCore}><div className={styles.publishThumb} /><strong>发布内容已就绪</strong><span>9:16 · 双语字幕</span><button type="button">确认发布</button></div>
        <svg viewBox="0 0 640 420" aria-hidden="true"><path d="M320 210C244 128 156 92 70 76M320 210C401 123 480 93 570 69M320 210C206 218 126 235 50 280M320 210C433 218 507 240 590 292M320 210V374" /></svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {platforms.map((name, index) => <div className={styles.platformNode} data-platform={index + 1} key={name}><em><img src={`/platform-${name}.svg?v=2`} alt={name} /></em><span>{["TikTok","Instagram","YouTube","Facebook","WhatsApp"][index]}</span><b>{index<4?"账号已选":"消息触达"}</b><i /></div>)}
      </div>
    </section>
  );
}

function AiServiceWorkspace() {
  const [activeTask, setActiveTask] = useState(1);
  const tasks = ["新询盘承接", "需求澄清", "高价值识别", "人工接管"];
  const taskViews = [
    { customer:"Hi, I came from your TikTok post. Do you ship to Dubai?", thought:"来源 TikTok · 英语 · UAE · 首次入站", reply:"可以，我们支持 UAE 询盘。你关注的是多肽安瓶还是维生素 C 精华？", score:"42", need:"产品待确认", risk:"低风险即时承接", next:"锁定客户感兴趣的具体产品。" },
    { customer:"We need 500 bottles with our logo before Oct 1. Can you send the price?", thought:"数量 500 · 私标 · 明确时间 · 首次问价", reply:"在准确报价前，请确认你需要阿拉伯语和英语双语包装吗？", score:"88", need:"500 瓶 · 私标", risk:"补齐报价所需信息", next:"确认双语包装与交付国家。" },
    { customer:"Own label, Arabic and English. We need it before Oct 1.", thought:"Need +18 · Timing +22 · 决策信息持续完整", reply:"已识别为高价值机会，我会为你整理规格，并优先通知销售确认方案。", score:"91", need:"双语私标 · 明确日期", risk:"高价值机会优先", next:"生成客户摘要与待确认清单。" },
    { customer:"Which documents do you have for UAE registration? Can you send the final price?", thought:"认证知识缺口 · 报价权限 · L4 高风险节点", reply:"我会先核实准确的文件范围与报价条件，确认后由销售继续回复。", score:"91", need:"认证 · 正式报价", risk:"禁止无依据承诺", next:"人工确认报价、交期与认证范围。" },
  ];
  const view = taskViews[activeTask];
  useEffect(() => {
    const timer = window.setInterval(() => setActiveTask((current) => (current + 1) % tasks.length), 3600);
    return () => window.clearInterval(timer);
  }, [tasks.length]);
  return (
    <section className={styles.serviceSection} id="service">
      <div className={styles.sectionIntro} data-reveal><span>AI 智能客服</span><h2>每一条询盘，都进入一项可推进的任务</h2><p>灵小枢理解客户从哪里来、正在问什么、还缺什么信息，并在需要报价、认证或商务承诺时把完整上下文交给人工。</p></div>
      <div className={styles.serviceWorkspace} data-reveal>
        <nav className={styles.taskRail} aria-label="客服任务">
          <strong>今日任务 <b>12</b></strong>
          {tasks.map((task, index) => <button className={activeTask === index ? styles.activeTask : ""} key={task} onClick={() => setActiveTask(index)} type="button"><i>0{index + 1}</i><span>{task}<small>{["识别来源与语言", "每轮只推进一步", "BANT 与真实性", "高风险动作确认"][index]}</small></span></button>)}
        </nav>
        <div className={styles.chatCanvas}>
          <header><div><span>Ahmed A. · UAE</span><strong>30ml Peptide Ampoule</strong></div><b>来自 TikTok 内容</b></header>
          <div className={styles.chatStream} key={activeTask}>
            <p className={styles.customerMessage}>{view.customer}</p>
            <div className={styles.aiThought}><span>AI 正在理解</span><b>{view.thought}</b></div>
            <p className={styles.aiMessage}>{view.reply}</p>
          </div>
          <footer><span>AI 建议回复</span><button type="button">人工确认后发送</button></footer>
        </div>
        <aside className={styles.signalPanel}>
          <div><span>客户信号</span><b>仿真演示</b></div>
          <dl><div><dt>采购意图</dt><dd><strong>{view.score}</strong>/100</dd></div><div><dt>需求</dt><dd>{view.need}</dd></div><div><dt>市场</dt><dd>UAE</dd></div><div><dt>阶段</dt><dd>{tasks[activeTask]}</dd></div></dl>
          <div className={styles.riskCard}><span>当前处理策略</span><strong>{view.risk}</strong></div>
          <div className={styles.nextAction}><span>下一步</span><p>{view.next}</p></div>
        </aside>
      </div>
      <small className={styles.simulationNote}>界面内容基于你提供的 2026 Q3 仿真客服数据抽象，所有客户信息与经营数字仅用于功能演示。</small>
    </section>
  );
}

function LearningWorkflow() {
  return (
    <section className={styles.learningSection} id="product">
      <div className={styles.sectionIntro} data-reveal><span>持续学习的增长链路</span><h2>每一次触达，都让下一次增长更聪明</h2><p>内容表现帮助下一轮创作，触达结果回到询盘上下文，人工确认与成交结果再沉淀为更可靠的企业经验。</p></div>
      <div className={styles.learningOrbit} data-reveal><div className={styles.memoryCore}><i /><strong>企业增长记忆</strong><span>内容 × 客户 × 结果</span></div>{["内容机会", "爆款裂变", "多平台触达", "询盘承接", "价值识别", "人工推进"].map((item,index)=><div data-orbit={index+1} key={item}><i>0{index+1}</i><span>{item}</span></div>)}<svg viewBox="0 0 1000 460" aria-hidden="true"><ellipse cx="500" cy="230" rx="420" ry="175"/><ellipse cx="500" cy="230" rx="300" ry="118"/></svg></div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className={styles.finalCta} id="contact">
      <div data-reveal><span>开始体验</span><h2>让内容，带回商机</h2><p>从爆款复刻到询盘承接，体验灵枢 AI 如何连接整条海外获客链路。</p><div><a href="mailto:19653282176@163.com?subject=申请体验灵枢 AI">申请产品体验</a><a href="#growth">查看增长链路</a></div></div>
      <aside data-reveal><span>体验内容</span><ul><li>梳理当前内容与获客流程</li><li>确认适用能力与接入范围</li><li>使用演示数据体验完整链路</li></ul><small>提交后由灵枢 AI 团队统一联系</small></aside>
    </section>
  );
}

export function BrandHomepage() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const reducedTimer = window.setTimeout(() => setActiveHero(1), 0);
      return () => window.clearTimeout(reducedTimer);
    }
    const timer = window.setTimeout(() => setActiveHero(1), 3800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={styles.page}>
      <section
        className={styles.hero}
        data-scene={activeHero + 1}
      >
        <div className={styles.heroSlides} aria-live="polite">
          <div className={`${styles.heroSlide} ${styles.heroOpeningSlide} ${activeHero === 0 ? styles.activeHeroSlide : ""}`} aria-hidden={activeHero !== 0}>
            <div className={styles.storyOpening}>
              <div className={styles.storyLogo} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand-logo-v2.png" alt="" />
              </div>
              <div className={styles.storyCopy}>
                <h1>从追逐流量到自带引力</h1>
                <strong>灵枢 AI 海外内容获客平台</strong>
                <p>连接内容增长、全球分发、询盘承接与高价值商机识别</p>
              </div>
            </div>
          </div>

          <div className={`${styles.heroSlide} ${styles.heroDiscoverySlide} ${activeHero === 1 ? styles.activeHeroSlide : ""}`} aria-hidden={activeHero !== 1}>
            <div className={styles.discoveryCopy}>
              <span>智能发现</span>
              <h2>发现正在增长的内容机会</h2>
              <p>平台、类型、时间趋势实时汇聚</p>
            </div>
            <div className={styles.discoveryField} aria-hidden="true">
              <svg className={styles.trendLine} viewBox="0 0 720 300" role="img" aria-label="内容增长趋势">
                <defs>
                  <linearGradient id="homepage-trend-line" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8fd7b1" stopOpacity=".16" />
                    <stop offset="58%" stopColor="#18a85f" stopOpacity=".62" />
                    <stop offset="100%" stopColor="#d9f878" stopOpacity=".9" />
                  </linearGradient>
                  <linearGradient id="homepage-trend-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9be6bf" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#9be6bf" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className={styles.trendGrid}>
                  <path d="M30 70H690 M30 145H690 M30 220H690" />
                  <path d="M140 36V258 M270 36V258 M400 36V258 M530 36V258 M660 36V258" />
                </g>
                <path className={styles.trendArea} d="M30 238 C112 224 143 188 205 196 C278 205 310 137 377 148 C452 159 486 92 552 104 C620 116 654 55 690 42 L690 258 L30 258Z" />
                <path className={styles.trendPath} pathLength="1" d="M30 238 C112 224 143 188 205 196 C278 205 310 137 377 148 C452 159 486 92 552 104 C620 116 654 55 690 42" />
                <g className={styles.trendNodes}><circle cx="205" cy="196" r="5" /><circle cx="377" cy="148" r="5" /><circle cx="552" cy="104" r="5" /><circle cx="690" cy="42" r="6" /></g>
              </svg>
              {contentSamples.map((item, index) => (
                <article className={styles.discoveryCard} data-card={index + 1} key={item.industry}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt="" />
                  <div><span>{item.industry}</span><strong>{item.signal}</strong></div>
                  <i>{index === 1 ? "+186%" : `+${64 + index * 23}%`}</i>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.heroOverlay} ${activeHero === 1 ? styles.heroOverlayVisible : ""}`}>
          <a className={styles.heroCta} href="#growth">查看完整链路 <span>↗</span></a>
        </div>
      </section>

      <ViralReplication />
      <VariantExplosion />
      <DistributionBurst />
      <AiServiceWorkspace />
      <LearningWorkflow />
      <FinalCallToAction />
    </main>
  );
}
