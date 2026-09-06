"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import styles from "../brand-homepage.module.css";

const orbitItems = [
  { image: "/product-ui/viral-discovery.png", label: "内容机会发现" },
  { image: "/industries/consumer-electronics.png", label: "行业趋势洞察" },
  { image: "/service/ai-gold-sales.webp", label: "AI 金牌销售" },
  { image: "/product-ui/ai-content-generation.png", label: "品牌内容生成" },
  { image: "/service/ai-business-assistant.webp", label: "全球资讯雷达" },
  { image: "/industries/personal-care.png", label: "多行业内容" },
  { image: "/service/ai-private-domain.webp", label: "客户持续运营" },
] as const;

export function HeroOrbitGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      track.classList.add(styles.orbitRevealed);
      observer.disconnect();
    }, { threshold: .2 });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.orbitViewport} aria-label="灵枢 AI 产品能力展示">
      <div className={styles.orbitTrack} ref={trackRef}>
        {orbitItems.map((item, index) => (
          <figure
            className={styles.orbitSlot}
            style={{
              "--card-index": index, "--arc-offset": `${Math.abs(index - 3) * 7}px`,
            } as CSSProperties}
            key={item.label}
          >
            <div className={styles.orbitCard} onPointerMove={event => { if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return; const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--image-x", `${((event.clientX - rect.left) / rect.width - .5) * 5}deg`); event.currentTarget.style.setProperty("--image-y", `${-((event.clientY - rect.top) / rect.height - .5) * 5}deg`); }} onPointerLeave={event => { event.currentTarget.style.setProperty("--image-x", "0deg"); event.currentTarget.style.setProperty("--image-y", "0deg"); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" />
              <figcaption>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
