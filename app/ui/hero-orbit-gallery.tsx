"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import styles from "../brand-homepage.module.css";

const orbitItems = [
  { image: "/product-ui/viral-discovery.png", label: "内容机会发现", x: 5, y: 75, tilt: -12, yaw: 30, scaleX: 0.58, skew: -7 },
  { image: "/industries/consumer-electronics.png", label: "行业趋势洞察", x: 11, y: 52, tilt: -8, yaw: 21, scaleX: 0.72, skew: -4 },
  { image: "/service/ai-gold-sales.webp", label: "AI 金牌销售", x: 27.5, y: 34, tilt: -4, yaw: 10, scaleX: 0.9, skew: -2 },
  { image: "/product-ui/ai-content-generation.png", label: "品牌内容生成", x: 50, y: 28, tilt: 0, yaw: 0, scaleX: 1, skew: 0 },
  { image: "/service/ai-business-assistant.webp", label: "全球资讯雷达", x: 72.5, y: 34, tilt: 4, yaw: -10, scaleX: 0.9, skew: 2 },
  { image: "/industries/personal-care.png", label: "多行业内容", x: 89, y: 52, tilt: 8, yaw: -21, scaleX: 0.72, skew: 4 },
  { image: "/service/ai-private-domain.webp", label: "客户持续运营", x: 95, y: 75, tilt: 12, yaw: -30, scaleX: 0.58, skew: 7 },
] as const;

export function HeroOrbitGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateRotation = () => {
      const viewport = track.parentElement;
      const rect = viewport?.getBoundingClientRect();
      const progress = rect
        ? Math.min(1, Math.max(0, (window.innerHeight * 0.82 - rect.top) / (rect.height + window.innerHeight * 0.42)))
        : 0;
      track.style.setProperty("--orbit-turn", `${-7 + progress * 14}deg`);
      frameRef.current = null;
    };

    const onScroll = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updateRotation);
    };

    updateRotation();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className={styles.orbitViewport} aria-label="灵枢 AI 产品能力展示">
      <div className={styles.orbitTrack} ref={trackRef}>
        {orbitItems.map((item, index) => (
          <figure
            className={styles.orbitSlot}
            style={{
              "--orbit-x": `${item.x}%`,
              "--orbit-y": `${item.y}%`,
              "--orbit-tilt": `${item.tilt}deg`,
              "--orbit-yaw": `${item.yaw}deg`,
              "--orbit-scale-x": item.scaleX,
              "--orbit-skew": `${item.skew}deg`,
              "--card-index": index,
            } as CSSProperties}
            key={item.label}
          >
            <div className={styles.orbitCard}>
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
