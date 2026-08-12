"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const modules = [
  {
    id: "create", number: "01", label: "内容生产", title: "从企业资料开始创作",
    summary: "选择产品和市场后，进入脚本、分镜、素材、配乐、封面与成片预览流程。",
    steps: ["选择生成模式", "生成并审核分镜", "匹配企业素材", "完成封面与成片"],
    proof: ["AiCreateStudio", "企业产品与素材库", "脚本事实清洗与人工审核"],
    boundary: "生成结果需要人工核对产品事实；高风险表述不会被当作企业事实自动采用。", image: "/product-real/content-studio.png",
    href: "/product/content-studio",
  },
  {
    id: "publish", number: "02", label: "社媒发布", title: "让成片直接进入发布计划",
    summary: "内容队列、日历排期和平台账号在同一流程中衔接，并保留发布状态。",
    steps: ["成片进入内容队列", "选择平台与账号", "设置排期策略", "查看发布结果"],
    proof: ["ScheduledPage", "CalendarPlanner", "TikTok / Meta / YouTube 发布接口"],
    boundary: "真实发布依赖客户账号授权、平台应用审核和相应发布权限。未授权时只保存草稿。", image: "/product-real/publishing-calendar.png",
    href: "/product/social-publishing",
  },
  {
    id: "inquiry", number: "03", label: "询盘接待", title: "把对话交给正确的人",
    summary: "WhatsApp 消息进入客户工作台后，AI 基于企业知识辅助回复、补齐采购信息并识别转人工条件。",
    steps: ["识别语言与产品", "检索企业知识", "补齐采购信息", "触发人工交接"],
    proof: ["AgentWorkspace", "客户优先级与意向信号", "报价与高风险动作保护"],
    boundary: "正式报价、折扣、合同条款和知识缺口默认不由 AI 自主承诺。", image: null,
    href: "/product/whatsapp-ai",
  },
] as const;

export function HeroSystemDemo() {
  return <div className="growth-orbit" aria-label="灵枢内容到询盘增长链路动画">
    <div className="orbit-core"><span>灵枢 AI</span><strong>企业知识</strong></div>
    <div className="orbit-track"><i /><i /><i /></div>
    <div className="orbit-node node-content"><small>01</small><strong>内容</strong><span>脚本 · 分镜 · 成片</span></div>
    <div className="orbit-node node-social"><small>02</small><strong>社媒</strong><span>排期 · 发布 · 来源</span></div>
    <div className="orbit-node node-inquiry"><small>03</small><strong>询盘</strong><span>接待 · 分级 · 交接</span></div>
    <div className="orbit-signal signal-a"/><div className="orbit-signal signal-b"/><div className="orbit-signal signal-c"/>
  </div>;
}

export function ProductEvidence() {
  const [active, setActive] = useState<(typeof modules)[number]["id"]>("create");
  const current = modules.find(item => item.id === active) ?? modules[0];
  useEffect(() => {
    const timer = window.setTimeout(() => setActive(value => value === "create" ? "publish" : value === "publish" ? "inquiry" : "create"), 7000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return <section className="real-product" id="product">
    <div className="real-product-tabs" role="tablist" aria-label="真实产品模块">
      {modules.map(item => <button key={item.id} type="button" role="tab" aria-selected={item.id === active} onClick={() => setActive(item.id)}>
        <span>{item.number}</span><strong>{item.label}</strong><i />
      </button>)}
    </div>
    <div className="real-product-stage" key={current.id}>
      <div className="real-product-copy">
        <span className="verified-mark"><i /> 已从正式项目验证</span>
        <h3>{current.title}</h3><p>{current.summary}</p>
        <ol>{current.steps.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span>{step}</li>)}</ol>
        <Link href={current.href}>查看该模块的工作方式 <span>↗</span></Link>
      </div>
      <div className={`real-flow flow-${current.id}`}>
        <div className="flow-top"><span>LINGSHU PRODUCT · REAL INTERFACE</span><small>模块 {current.number}</small></div>
        {current.image ? <div className="real-shot"><Image unoptimized src={current.image} width={1526} height={851} alt={`${current.label}真实产品界面`} /></div> : <div className="flow-path is-inquiry">
          {current.steps.map((step,index)=><div className="flow-step" style={{animationDelay:`${index*.55}s`}} key={step}><span>{index+1}</span><strong>{step}</strong>{index<current.steps.length-1?<i>→</i>:null}</div>)}
        </div>}
        <div className="flow-meta"><div className="flow-proof"><small>正式项目依据</small>{current.proof.map(item=><span key={item}>✓ {item}</span>)}</div><div className="flow-boundary"><strong>能力边界</strong><p>{current.boundary}</p></div></div>
      </div>
    </div>
    <p className="evidence-note">这里不展示客户资料，也不使用虚构经营数据。功能说明来自正式 lingshu-AI 项目的页面、组件、接口与测试规则。</p>
  </section>;
}
