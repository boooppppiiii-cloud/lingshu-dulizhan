"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { id: "brief", label: "导入产品资料", title: "告诉灵枢你卖什么、卖给谁", copy: "上传产品信息并补充目标市场、内容目标和企业规则，形成后续创作与接待共同使用的业务上下文。", metric: "企业知识已就绪", action: "生成内容策略" },
  { id: "create", label: "生成海外内容", title: "从素材与卖点生成脚本、分镜和成片", copy: "选择素材库智能生成、爆款裂变或产品信息生成，再确认声音、配乐、封面和多语言表达。", metric: "3 个内容方向", action: "进入发布排期" },
  { id: "publish", label: "多平台发布", title: "一份内容计划，适配多个海外平台", copy: "统一管理 TikTok、Facebook、Instagram Reels 与 YouTube 的账号、排期和发布状态。", metric: "4 个发布渠道", action: "查看询盘来源" },
  { id: "qualify", label: "AI 接待询盘", title: "客户来时，AI 已经知道他从哪里来", copy: "来源内容、产品、语言与历史对话进入同一上下文。AI 补齐市场、数量、规格和时间等采购信号。", metric: "首轮信息已补齐", action: "转交销售" },
  { id: "handoff", label: "销售接管", title: "带着摘要、证据和建议动作交给人", copy: "高价值、高风险或明确要求人工的客户立即转交，销售无需让客户重新解释一遍。", metric: "人工边界已触发", action: "获取试用账号" },
] as const;

export function ProductTour() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="guided-tour" aria-label="灵枢 AI 产品交互体验">
      <div className="guided-tour-top">
        <div><span><i /> INTERACTIVE PRODUCT TOUR</span><strong>无需登录，先走一遍完整链路</strong></div>
        <small>{active + 1} / {steps.length}</small>
      </div>
      <div className="guided-tour-body">
        <nav aria-label="产品体验步骤">
          {steps.map((item, index) => <button key={item.id} type="button" aria-current={index === active ? "step" : undefined} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.label}</button>)}
        </nav>
        <div className="tour-product-window">
          <div className="tour-window-sidebar"><b>灵枢 AI</b><span>经营总览</span><span className={active < 3 ? "is-active" : ""}>我的社媒</span><span className={active >= 3 ? "is-active" : ""}>我的客户</span><span>企业中心</span></div>
          <div className="tour-window-main">
            <div className="tour-window-bar"><span>{step.label}</span><small>DEMO WORKSPACE</small></div>
            <div className={`tour-scene scene-${step.id}`}>
              <div className="tour-scene-copy"><span>STEP 0{active + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
              <div className="tour-scene-proof"><div className="tour-data-card"><small>系统状态</small><strong>{step.metric}</strong><div><i /><i /><i /></div><ul><li>任务上下文已关联</li><li>操作记录可追溯</li><li>客户资料未载入演示</li></ul></div></div>
            </div>
          </div>
        </div>
        <div className="guided-tour-footer">
          <button type="button" disabled={active === 0} onClick={() => setActive((value) => Math.max(0, value - 1))}>← 上一步</button>
          {active < steps.length - 1 ? <button className="is-next" type="button" onClick={() => setActive((value) => Math.min(steps.length - 1, value + 1))}>{step.action} →</button> : <Link href="/demo?intent=trial">{step.action} ↗</Link>}
        </div>
      </div>
    </section>
  );
}
