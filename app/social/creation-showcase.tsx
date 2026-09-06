"use client";

import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { CreationStudio } from "./creation-studio";
import styles from "./creation-showcase.module.css";

const features = [
  ["短视频脚本", "开头钩子、场景结构、字幕与镜头建议"],
  ["智能配音与 BGM", "多语言语音、情绪与平台风格预设"],
  ["封面与图文", "B2B 海报、产品卡与社媒图文"],
  ["平台文案", "按渠道长度、语气与标签规则差异化生成"],
] as const;

const workflows = [
  { label: "趋势洞察", name: "DISCOVER", title: ["看趋势，也看", "为什么会火"], description: "不做泛化的数据大屏，只聚焦能转成下一条内容的机会。", features: [
    ["趋势与竞品洞察", "关注市场正在发生什么，也解释内容为什么会火：受众、钩子、结构和卖点一目了然。"],
    ["一键转为创作任务", "把值得跟进的内容机会直接送入创作队列，减少从研究到执行之间的断层。"],
    ["下一步动作建议", "围绕产品和目标市场给出同主题脚本、平台适配和发布时间建议。"],
  ] },
  { label: "内容生成", name: "CREATE", title: ["生成能发布的内容，", "而不只是文案"], description: "围绕真实产品资料，完成短视频、图文和平台文案的连续生产。", features },
  { label: "多平台发布", name: "PUBLISH", title: ["一次配置，多平台、", "多账号差异化发布"], description: "统一排期，但不强行复用同一份标题和文案。每个平台都保留自己的发布逻辑。", features: [
    ["平台适配", "分平台标题、文案与画幅适配"], ["内容日历", "最佳发布时间建议与内容日历"], ["账号管理", "多视频发布队列与账号状态"], ["发布检查", "发布前检查与异常提示"],
  ] },
  { label: "询盘归因", name: "CONTENT ATTRIBUTION", title: ["不只看播放量，", "更知道客户从哪条内容来"], description: "每条发布自动附加独立 WhatsApp 追踪入口。客户发来消息后，平台、账号、视频标题与发布时间一起进入客户档案。", features: [
    ["TikTok 视频", "定位客户看到的内容"], ["WhatsApp CTA", "每条内容对应独立追踪入口"], ["新询盘", "接收客户发来的消息"], ["客户详情", "平台、账号、视频标题与发布时间"],
  ] },
] as const;

function Arrow({ back = false }: { back?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={back ? { transform: "rotate(180deg)" } : undefined}><path d="M4 12h15m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function DiscoveryDemo({ visible }: { visible: boolean }) {
  const [detail, setDetail] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update(); preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .25 });
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); preference.removeEventListener("change", update); };
  }, []);
  const running = playing && visible && inView && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setDetail(value => (value + 1) % 3), 4500);
    return () => clearTimeout(timer);
  }, [running, detail]);
  const shots = [
    { label: "场景开场", title: "先让观众，进入场景", note: "开场钩子 · 生活场景引入" },
    { label: "产品特写", title: "把注意力，交给产品", note: "卖点表达 · 用细节承接兴趣" },
    { label: "人物讲解", title: "从看见产品，到听懂介绍", note: "内容结构 · 场景 → 产品 → 讲解" },
  ];
  return <div ref={root} className={styles.motionDiscovery} data-running={running}>
    <div className={styles.discoveryFilm}>
      <div className={styles.discoveryShot} key={detail}>
        {detail === 1 ? <Image src="/creation-studio/product.png" alt="粉底液产品特写分镜" fill sizes="(max-width:900px) 90vw, 600px" /> : <div className={`${styles.scene} ${styles.lifestyle} ${styles.active}`} role="img" aria-label="女士手持产品的静态素材动态分镜" />}
      </div>
      <span className={styles.filmLabel}>动态分镜 · 非口播视频</span>
      <div className={styles.filmCaption} key={`caption-${detail}`}><small>{shots[detail].note}</small><strong>{shots[detail].title}</strong></div>
      <div className={styles.filmTransport}><div role="group" aria-label="选择洞察分镜">{shots.map((shot,index)=><button type="button" key={shot.label} aria-label={shot.label} aria-pressed={detail===index} onClick={()=>{setDetail(index);}}><span>{shot.label}</span><i className={detail===index ? styles.filmProgress : undefined} key={`${detail}-${index}-${running}`} /></button>)}</div><button type="button" className={styles.filmPlay} aria-label={playing ? "暂停分镜" : "播放分镜"} disabled={reduced} onClick={()=>setPlaying(value=>!value)}>{playing ? "Ⅱ" : "▷"}</button></div>
    </div>
  </div>;
}const platforms = [
  { name: "TikTok", icon: "/platform-color-tiktok.svg", format: "9:16 · 短视频", title: "把使用场景放在开头", body: "从日常上妆切入，展示粉底液的使用过程。" },
  { name: "Instagram", icon: "/platform-color-instagram.svg", format: "4:5 · 图文", title: "一张图，讲清产品与场景", body: "产品特写与使用场景组合，搭配简洁图文。" },
  { name: "YouTube", icon: "/platform-color-youtube.svg", format: "9:16 · Shorts", title: "用短片呈现完整过程", body: "开场、产品展示、使用演示，组织成连续内容。" },
  { name: "Facebook", icon: "/platform-color-facebook.svg", format: "1:1 · 动态", title: "让产品介绍自然进入动态", body: "结合商品图片与场景说明，适配平台文案。" },
] as const;

function PublishDemo() {
  const [platform,setPlatform] = useState(0);
  const current = platforms[platform];
  return <div className={styles.demo}>
    <div className={styles.publishCanvas}>
      <header className={styles.canvasLabel}><span>多平台内容适配</span><small>示例预览</small></header>
      <div className={styles.postPreview} key={platform}>
        <div className={styles.postHeader}><Image src={current.icon} alt="" width="22" height="22" /><strong>{current.name}</strong><span>{current.format}</span></div>
        <div className={styles.postVisual}><div className={`${styles.scene} ${styles.lifestyle} ${styles.active}`} /><span>美妆行业 · 示例内容</span></div>
        <div className={styles.postCopy}><strong>{current.title}</strong><p>{current.body}</p></div>
        <footer><i />待发布<span>文案与画幅已适配</span></footer>
      </div>
    </div>
    <div className={styles.platformButtons} role="group" aria-label="选择发布平台">{platforms.map((item,index)=><button type="button" key={item.name} aria-pressed={platform===index} onClick={()=>setPlatform(index)}><Image src={item.icon} alt="" width="18" height="18" /><span>{item.name}</span></button>)}</div>
  </div>;
}

function AttributionDemo() {
  const [expanded,setExpanded] = useState(false);
  return <div className={styles.demo}>
    <div className={styles.attributionCanvas}>
      <header className={styles.canvasLabel}><span>从一条内容，到一次对话</span><small>流程示意</small></header>
      <div className={styles.sourcePost}><div className={styles.sourceThumb} /><div><small>TikTok · 内容来源</small><strong>粉底液 · 使用场景展示</strong><span>品牌账号 / 示例内容</span></div><Image src="/platform-color-tiktok.svg" width="24" height="24" alt="TikTok" /></div>
      <div className={styles.connection}><i /><span>独立 WhatsApp 追踪入口</span><i /></div>
      <div className={styles.inquiry}><Image src="/platform-whatsapp.svg" width="24" height="24" alt="WhatsApp" /><div><small>新询盘 · 示例消息</small><p>你好，想了解这款产品的批发合作。</p></div></div>
      <button type="button" className={styles.sourceToggle} aria-expanded={expanded} onClick={()=>setExpanded(value=>!value)}>{expanded ? "收起来源详情" : "查看来源详情"}<Arrow /></button>
      {expanded && <dl className={styles.sourceDetails}><div><dt>平台</dt><dd>TikTok</dd></div><div><dt>账号</dt><dd>品牌账号（示例）</dd></div><div><dt>内容</dt><dd>粉底液 · 使用场景展示</dd></div><div><dt>发布时间</dt><dd>随来源内容记录</dd></div></dl>}
    </div>
  </div>;
}

export function CreationShowcase() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const activeRef = useRef(0);

  const goTo = (index: number) => {
    const element = rail.current;
    if (!element) return;
    const next = Math.max(0, Math.min(workflows.length - 1, index));
    const card = element.children[next] as HTMLElement;
    element.scrollTo({ left: card.offsetLeft - (element.children[0] as HTMLElement).offsetLeft, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const first = (element.children[0] as HTMLElement).offsetLeft;
        let closest = 0;
        let distance = Infinity;
        Array.from(element.children).forEach((child,index)=> {
          const delta = Math.abs((child as HTMLElement).offsetLeft-first-element.scrollLeft);
          if (delta < distance) { closest=index; distance=delta; }
        });
        activeRef.current = closest;
        setActive(closest);
      });
    };
    const resize = new ResizeObserver(() => {
      const first = (element.children[0] as HTMLElement).offsetLeft;
      element.scrollTo({left:(element.children[activeRef.current] as HTMLElement).offsetLeft-first,behavior:"instant"});
    });
    resize.observe(element);
    element.addEventListener("scroll",update,{passive:true});
    return ()=>{ cancelAnimationFrame(frame); resize.disconnect(); element.removeEventListener("scroll",update); };
  }, []);

  const pointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0 || (event.target as HTMLElement).closest("button,a")) return;
    drag.current = {x:event.clientX,left:event.currentTarget.scrollLeft,moved:false};
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const delta=event.clientX-drag.current.x;
    if (Math.abs(delta)>6) {drag.current.moved=true; setDragging(true); event.currentTarget.scrollLeft=drag.current.left-delta;}
  };
  const pointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const wasMoved=drag.current.moved;
    drag.current=null;
    if(event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
    if(wasMoved) requestAnimationFrame(()=>goTo(activeRef.current));
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    const next = event.key === "ArrowRight" ? active+1 : event.key === "ArrowLeft" ? active-1 : event.key === "Home" ? 0 : event.key === "End" ? 3 : null;
    if(next!==null) {event.preventDefault();goTo(next);}
  };

  return <section className={styles.section} id="growth" aria-labelledby="growth-title">
    <header className={styles.intro}><span className={styles.eyebrow}>SOCIAL GROWTH · 01—04</span><h2 id="growth-title">把一个产品，变成<br /><em>持续增长</em>的内容系统</h2><p>从趋势与竞品中找到机会，用 AI 生成能发布的内容，统一管理多个平台与账号，并知道每一条询盘从哪里来。</p></header>
    <div className={styles.navigation}>
      <div className={styles.stepButtons} role="group" aria-label="选择增长步骤">{workflows.map((step,index)=><button key={step.name} type="button" aria-pressed={active===index} aria-controls={`growth-card-${index}`} onClick={()=>goTo(index)}><span>0{index+1}</span>{step.label}</button>)}</div>
      <div className={styles.arrows}><button type="button" aria-label="上一张卡片" disabled={active===0} onClick={()=>goTo(active-1)}><Arrow back /></button><button type="button" aria-label="下一张卡片" disabled={active===3} onClick={()=>goTo(active+1)}><Arrow /></button></div>
    </div>
    <div ref={rail} className={`${styles.rail} ${dragging ? styles.dragging : ""}`} role="region" aria-roledescription="轮播" aria-label="四步社媒增长工作流" tabIndex={0} onKeyDown={onKeyDown} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerEnd} onPointerCancel={pointerEnd}>
      {workflows.map((step,index)=><article id={`growth-card-${index}`} key={step.name} className={`${styles.card} ${active===index ? styles.currentCard : ""}`} aria-labelledby={`growth-heading-${index}`} aria-roledescription="幻灯片" aria-label={`${index+1} / 4`} inert={active!==index}>
        <div className={styles.copy}><span className={styles.step}><b>0{index+1}</b>{step.name}</span><h3 id={`growth-heading-${index}`}>{step.title[0]}<br />{step.title[1]}</h3><p>{step.description}</p><dl className={`${styles.features} ${index===0 ? styles.longFeatures : ""}`}>{step.features.map(([title,description],featureIndex)=><div key={title}><FeatureIcon index={featureIndex} /><dt>{title}</dt><dd>{description}</dd></div>)}</dl></div>
        {index===0 ? <DiscoveryDemo visible={active===0} /> : index===1 ? <CreationStudio visible={active===1} /> : index===2 ? <PublishDemo /> : <AttributionDemo />}
      </article>)}
    </div>
    <footer className={styles.railFooter}><span aria-live="polite">0{active+1}<i>/ 04</i> · {workflows[active].label}</span><div aria-hidden="true">{workflows.map((step,index)=><i key={step.name} className={active===index ? styles.currentProgress : ""} />)}</div><small>拖动或左右滑动，查看完整流程</small></footer>
  </section>;
}

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M7 5l3 5m4-5 3 5m-7 3 5 3-5 3z" /></>,
    <><rect x="9" y="2" width="6" height="13" rx="3" /><path d="M5 10v2a7 7 0 0014 0v-2M12 19v3m-4 0h8" /></>,
    <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1.5" /><path d="m3 17 5-5 4 4 4-6 5 7" /></>,
    <><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index]}</svg>;
}

