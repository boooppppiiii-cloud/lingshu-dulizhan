"use client";

import { useState } from "react";

const views = [
  {
    id: "workspace",
    label: "经营工作台",
    eyebrow: "真实产品界面",
    title: "同一处查看策略、内容与客户上下文",
    text: "来自灵枢 AI 正式产品。左侧按经营、社媒、客户和系统能力组织；右侧由 AI 助手承接具体任务。",
  },
  {
    id: "video",
    label: "素材成片",
    eyebrow: "真实生成结果",
    title: "从产品素材到可发布的短视频",
    text: "选择生成模式、素材、声音、配乐与封面，再进入预览和发布排期。这里展示的是产品实际生成的演示成片。",
  },
  {
    id: "publish",
    label: "发布预览",
    eyebrow: "真实产品流程",
    title: "内容不是导出即结束，而是进入发布与获客链路",
    text: "成片继续进入多平台排期，并为 WhatsApp 询盘保留内容来源，让销售知道客户为什么而来。",
  },
] as const;

export function ProductEvidence() {
  const [active, setActive] = useState<(typeof views)[number]["id"]>("workspace");
  const current = views.find((view) => view.id === active) ?? views[0];

  return (
    <section className="product-evidence" id="product">
      <div className="product-evidence-nav" role="tablist" aria-label="产品实景">
        {views.map((view, index) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={active === view.id}
            onClick={() => setActive(view.id)}
          >
            <span>0{index + 1}</span>{view.label}
          </button>
        ))}
      </div>

      <div className="product-evidence-stage">
        <div className="product-evidence-copy">
          <span>{current.eyebrow}</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <small>界面与演示素材来自 lingshu-AI 产品项目；演示客户与经营数据为 Mock。</small>
        </div>
        <div className={`product-evidence-media is-${active}`}>
          {active === "workspace" ? (
            <div className="workspace-crop">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product/workspace-real.png" alt="灵枢 AI 经营工作台真实产品界面" />
            </div>
          ) : (
            <video
              key={active}
              src={active === "video" ? "/product/img2video.mp4" : "/product/publish-preview.mp4"}
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label={current.title}
            />
          )}
          <div className="product-live-mark"><i /> PRODUCT VIEW</div>
        </div>
      </div>
    </section>
  );
}
