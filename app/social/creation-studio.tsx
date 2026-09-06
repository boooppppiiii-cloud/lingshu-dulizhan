"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./creation-studio.module.css";

const steps = ["产品展示", "内容展开", "数字人口播"];

export function CreationStudio({ visible }: { visible: boolean }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches);
    change(); media.addEventListener("change", change);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .2 });
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); media.removeEventListener("change", change); };
  }, []);
  const running = visible && inView && playing && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setStep(value => (value + 1) % 3), 5200);
    return () => clearTimeout(timer);
  }, [running, step]);
  return <div ref={root} className={styles.studio}>
    <div className={styles.stage} data-step={step} data-running={running} onPointerMove={event => {
      if (event.pointerType !== "mouse" || reduced) return;
      const rect = event.currentTarget.getBoundingClientRect();
      setTilt({ x: (event.clientX - rect.left) / rect.width - .5, y: (event.clientY - rect.top) / rect.height - .5 });
    }} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className={styles.light} />
      <div className={styles.world} style={{ "--rx": `${-tilt.y * 5}deg`, "--ry": `${tilt.x * 7}deg` } as CSSProperties}>
        <span className={styles.word} aria-hidden="true">CREATE</span>
        <div className={styles.floor} />
        <div className={styles.bottle}><Image src="/creation-studio/bottle.png" alt="黑色泵头、磨砂玻璃瓶身的粉底液立体视觉示意" fill sizes="320px" draggable={false} /></div>
        <div className={`${styles.editorial} ${styles.product}`}><div className={styles.photo}><Image src="/creation-studio/product.png" alt="用户提供的粉底液产品摄影" fill sizes="220px" draggable={false} /></div><div className={styles.caption}><small>PRODUCT STORY</small><strong>一张图，呈现产品</strong><span>产品图文</span></div></div>
        <div className={`${styles.editorial} ${styles.presenter}`}><div className={styles.portrait}><Image src="/creation-studio/presenter.png" alt="AI 生成的女性数字人形象示意，非口播视频" fill sizes="320px" draggable={false} /><span className={styles.aiLabel}>AI 形象示意</span></div><div className={styles.caption}><small>DIGITAL PRESENTER</small><strong>让产品，有人讲述</strong><div className={styles.voice} aria-hidden="true">{[1,2,3,4,5,6,7,8,9,10,11,12].map(i=><i key={i} style={{ "--i": i } as CSSProperties} />)}</div></div></div>
        <div className={styles.script}><span>01 — 开场脚本</span><p>从产品细节，<br />到自然表达。</p><i /><i /><i /></div>
      </div>
      <div className={styles.stageFooter}><span>美妆行业 · 创作流程示意</span><span>0{step + 1} / 03</span></div>
    </div>
    <div className={styles.controls}><div role="group" aria-label="选择创作展示画面">{steps.map((label,index)=><button key={label} type="button" aria-pressed={step===index} onClick={()=>{setStep(index);}}>{label}</button>)}</div><button className={styles.play} type="button" aria-label={playing ? "暂停创作演示" : "播放创作演示"} onClick={()=>setPlaying(value=>!value)} disabled={reduced}>{playing ? "Ⅱ" : "▷"}</button></div>
  </div>;
}
