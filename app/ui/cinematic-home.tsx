"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";

const journey = [
  { index: "01", title: "发现机会", copy: "从趋势、内容与客户问题里，找到值得讲的产品。" },
  { index: "02", title: "生成内容", copy: "把产品知识变成适合不同平台的脚本、素材与成片。" },
  { index: "03", title: "接住客户", copy: "保留内容来源与采购意图，再把机会交给销售。" },
] as const;

const demoScenes = [
  {
    id: "discover",
    index: "01",
    label: "发现内容机会",
    title: "先知道该讲什么。",
    copy: "从公开趋势、产品资料与企业素材中形成选题依据。",
    image: "/product-real/materials-library-crop.png",
    alt: "灵枢 AI 内容机会与素材库产品界面",
    chips: ["趋势信号", "产品知识", "可用素材"],
  },
  {
    id: "create",
    index: "02",
    label: "生成并发布内容",
    title: "让内容真正流动起来。",
    copy: "脚本、分镜、素材和发布排期进入同一条生产链路。",
    image: "/product-real/content-studio-crop.png",
    alt: "灵枢 AI 内容生成工作台产品界面",
    chips: ["AI 分镜", "企业素材", "多平台适配"],
  },
  {
    id: "convert",
    index: "03",
    label: "接住并推进询盘",
    title: "让每条内容都有下文。",
    copy: "内容进入发布日历，客户来源、采购信号和跟进动作保持连续。",
    image: "/product-real/publishing-calendar-crop.png",
    alt: "灵枢 AI 多平台发布日历产品界面",
    chips: ["来源保留", "WhatsApp 接待", "人工接管"],
  },
] as const;

export function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty("--hero-bg-x", `${x * -14}px`);
        hero.style.setProperty("--hero-bg-y", `${y * -10}px`);
        hero.style.setProperty("--hero-copy-x", `${x * 6}px`);
        hero.style.setProperty("--hero-copy-y", `${y * 4}px`);
      });
    };
    const resetPointer = () => {
      hero.style.setProperty("--hero-bg-x", "0px");
      hero.style.setProperty("--hero-bg-y", "0px");
      hero.style.setProperty("--hero-copy-x", "0px");
      hero.style.setProperty("--hero-copy-y", "0px");
    };

    hero.addEventListener("pointermove", updatePointer, { passive: true });
    hero.addEventListener("pointerleave", resetPointer);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <section className="cinematic-hero" ref={heroRef} aria-labelledby="cinematic-title">
      <div className="cinematic-hero-image" aria-hidden="true" />
      <div className="cinematic-hero-shade" aria-hidden="true" />
      <div className="signal-dust" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <i
            key={index}
            style={
              {
                "--dust-x": `${(index * 37) % 101}%`,
                "--dust-y": `${(index * 61) % 93}%`,
                "--dust-delay": `${-(index % 9) * 0.8}s`,
                "--dust-size": `${2 + (index % 3)}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="cinematic-hero-content">
        <span>LINGSHU AI · GROWTH INTELLIGENCE</span>
        <h1 id="cinematic-title">从一条内容，<br /><em>到一笔生意。</em></h1>
        <p>让 AI 懂产品、懂客户，也懂增长的下一步。</p>
      </div>
      <span className="cinematic-scroll-cue"><i /> SCROLL TO DISCOVER</span>
    </section>
  );
}

export function SignalJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      const nextStep = Math.min(journey.length - 1, Math.floor(progress * journey.length));
      section.style.setProperty("--journey-copy-y", `${progress * -42}px`);
      section.style.setProperty("--journey-window-y", `${(1 - progress) * 260}px`);
      section.style.setProperty("--journey-rotation", `${progress * 100}deg`);
      setActiveStep((current) => current === nextStep ? current : nextStep);
      frameRef.current = null;
    };
    const requestUpdate = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section className="signal-journey" aria-label="从内容机会到客户询盘" ref={sectionRef}>
      <div className="signal-journey-stage">
        <div className="signal-journey-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="signal-journey-copy">
          <span>ONE CONTINUOUS GROWTH LOOP</span>
          <h2>内容不是终点。<br /><em>客户才是。</em></h2>
          <p>灵枢把分散的内容动作，接成一条连续的增长路径。</p>
        </div>
        <div className="signal-journey-steps">
          {journey.map((item, index) => (
            <article className={activeStep === index ? "is-active" : ""} key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="signal-journey-window" aria-hidden="true">
          <span /><span /><span />
          <b>LINGSHU PRODUCT</b>
        </div>
      </div>
    </section>
  );
}

export function ImmersiveProductDemo() {
  const [active, setActive] = useState(0);
  const current = demoScenes[active];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % demoScenes.length);
    }, 7600);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section className="immersive-demo" id="product-demo" aria-labelledby="demo-title">
      <div className="container immersive-demo-heading">
        <span>SEE THE PRODUCT IN ACTION</span>
        <h2 id="demo-title">不是讲产品。<br />直接让你看见产品。</h2>
        <p>三个真实工作场景，一条连续链路。</p>
      </div>
      <div className="container immersive-demo-shell">
        <div className="immersive-demo-tabs" role="tablist" aria-label="产品演示场景">
          {demoScenes.map((scene, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              key={scene.id}
            >
              <span>{scene.index}</span><strong>{scene.label}</strong><i />
            </button>
          ))}
        </div>
        <div className="immersive-demo-stage" key={current.id}>
          <div className="immersive-demo-copy">
            <span>SCENE {current.index}</span>
            <h3>{current.title}</h3>
            <p>{current.copy}</p>
            <div>{current.chips.map((chip) => <b key={chip}>{chip}</b>)}</div>
            <Link href="/product">查看完整产品 <i>↗</i></Link>
          </div>
          <div className="immersive-demo-screen">
            <div className="immersive-demo-chrome"><i /><i /><i /><span>LINGSHU AI · LIVE PRODUCT</span></div>
            <div className="immersive-demo-image">
              <Image unoptimized src={current.image} width={1526} height={851} alt={current.alt} priority={active === 0} />
              <span className="demo-cursor" aria-hidden="true"><i /></span>
              <span className="demo-focus" aria-hidden="true" />
            </div>
          </div>
        </div>
        <p className="immersive-demo-note">演示画面来自灵枢正式产品界面，不含客户资料与虚构经营数据。</p>
      </div>
    </section>
  );
}
