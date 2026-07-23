"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

const hoverItems = [
  {
    x: 8,
    y: 24,
    face: 0,
    message: "你好，我是灵小枢",
    side: "left",
  },
  {
    x: 29,
    y: 15,
    face: 1,
    message: "客户意图已识别",
    side: "left",
  },
  {
    x: 17,
    y: 72,
    face: 2,
    message: "这条询盘要优先",
    side: "left",
  },
  {
    x: 74,
    y: 18,
    face: 3,
    message: "首轮接待已完成",
    side: "right",
  },
  {
    x: 91,
    y: 43,
    face: 1,
    message: "报价问题，转人工",
    side: "right",
  },
  {
    x: 79,
    y: 76,
    face: 2,
    message: "我会继续跟进",
    side: "right",
  },
] as const;

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

export function InteractiveHeroField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const touchTimerRef = useRef<number | null>(null);
  const [pointer, setPointer] = useState<PointerState>({
    x: 0.5,
    y: 0.46,
    active: false,
  });

  useEffect(() => {
    const field = fieldRef.current;
    const hero = field?.closest<HTMLElement>(".home-hero");

    if (!hero) return;

    const updatePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const next = {
        x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
        active: true,
      };

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        setPointer(next);
      });

      if (event.pointerType === "touch") {
        if (touchTimerRef.current !== null) {
          window.clearTimeout(touchTimerRef.current);
        }
        touchTimerRef.current = window.setTimeout(() => {
          setPointer((current) => ({ ...current, active: false }));
        }, 1600);
      }
    };

    const hidePointer = (event: PointerEvent) => {
      if (event.pointerType !== "touch") {
        setPointer((current) => ({ ...current, active: false }));
      }
    };

    hero.addEventListener("pointermove", updatePointer, { passive: true });
    hero.addEventListener("pointerenter", updatePointer, { passive: true });
    hero.addEventListener("pointerdown", updatePointer, { passive: true });
    hero.addEventListener("pointerleave", hidePointer, { passive: true });

    return () => {
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerenter", updatePointer);
      hero.removeEventListener("pointerdown", updatePointer);
      hero.removeEventListener("pointerleave", hidePointer);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (touchTimerRef.current !== null) {
        window.clearTimeout(touchTimerRef.current);
      }
    };
  }, []);

  const fieldStyle = {
    "--pointer-x": `${pointer.x * 100}%`,
    "--pointer-y": `${pointer.y * 100}%`,
    "--field-active": pointer.active ? 1 : 0,
  } as CSSProperties;

  return (
    <div
      className={`interactive-hero-field ${pointer.active ? "is-active" : ""}`}
      ref={fieldRef}
      style={fieldStyle}
      aria-hidden="true"
    >
      <div className="hover-light hover-light-soft" />
      <div className="hover-light hover-light-core" />
      <div className="hover-raster" />
      <div className="hover-orbit hover-orbit-a" />
      <div className="hover-orbit hover-orbit-b" />

      {hoverItems.map((item, index) => {
        const distance = Math.hypot(
          pointer.x * 100 - item.x,
          (pointer.y * 100 - item.y) * 0.92,
        );
        const proximity = pointer.active
          ? Math.max(0.045, Math.min(1, 1 - distance / 42))
          : 0;
        const driftX = (pointer.x - item.x / 100) * -24;
        const driftY = (pointer.y - item.y / 100) * -18;

        const itemStyle = {
          left: `${item.x}%`,
          top: `${item.y}%`,
          opacity: proximity,
          filter: `blur(${(1 - proximity) * 5}px) drop-shadow(0 22px 34px rgba(7, 17, 12, ${0.04 + proximity * 0.12}))`,
          transform: `translate(-50%, -50%) translate3d(${driftX}px, ${driftY}px, 0) scale(${0.76 + proximity * 0.24})`,
          transitionDelay: `${index * 18}ms`,
        } as CSSProperties;

        return (
          <div
            className={`ai-hover-item side-${item.side}`}
            style={itemStyle}
            key={`${item.x}-${item.y}`}
          >
            <div className={`ling-emotion face-${item.face}`} />
            <span className="ai-hover-bubble">
              <i>AI</i>
              {item.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}
