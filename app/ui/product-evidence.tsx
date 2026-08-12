"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const modules = [
  {
    id: "insight", number: "01", label: "找到获客选题", pain: "解决：不知道发什么",
    title: "先找到买家关心的问题",
    summary: "从公开对标内容、企业产品资料和已有素材中寻找选题证据，不再靠团队每天临时想主题。",
    steps: ["查看公开内容趋势", "结合产品与目标市场", "筛选可用企业素材", "形成内容切入点"],
    proof: ["InspirationDashboard", "企业产品资料", "分行业素材标签"],
    boundary: "公开内容只用于理解结构与趋势，不会把竞品数据、承诺或案例迁移成企业事实。", image: "/product-real/materials-library-crop.png",
    href: "/product/content-studio",
  },
  {
    id: "create", number: "02", label: "稳定生产内容", pain: "解决：内容产能跟不上",
    title: "把选题推进到可发布成片",
    summary: "把脚本、分镜、企业素材、配音、配乐和封面放进连续工作流，减少营销、设计与剪辑反复交接。",
    steps: ["选择产品与生成模式", "生成并审核分镜", "匹配企业素材", "确认封面与成片"],
    proof: ["AiCreateStudio", "六步视频创作", "脚本事实清洗与人工审核"],
    boundary: "生成结果需要人工核对产品事实；参数、认证、功效和供应承诺必须有企业资料依据。", image: "/product-real/content-studio-crop.png",
    href: "/product/content-studio",
  },
  {
    id: "convert", number: "03", label: "接住并推进询盘", pain: "解决：发了内容却接不住客户",
    title: "发布之后，客户继续进入销售流程",
    summary: "成片进入多平台排期；客户通过 WhatsApp 发起咨询后，由企业知识辅助首轮接待，并在关键节点交给销售。",
    steps: ["多平台账号排期", "保留内容来源", "补齐采购信息", "高风险转人工"],
    proof: ["CalendarPlanner", "平台发布接口", "AgentWorkspace 与人工交接"],
    boundary: "发布依赖账号授权和平台审核；正式报价、折扣、合同条款和知识缺口默认转人工。", image: "/product-real/publishing-calendar-crop.png",
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
  const [active, setActive] = useState<(typeof modules)[number]["id"]>("insight");
  const current = modules.find(item => item.id === active) ?? modules[0];
  useEffect(() => {
    const timer = window.setTimeout(() => setActive(value => value === "insight" ? "create" : value === "create" ? "convert" : "insight"), 7000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return <section className="real-product" id="product">
    <div className="real-product-tabs" role="tablist" aria-label="真实产品模块">
      {modules.map(item => <button key={item.id} type="button" role="tab" aria-selected={item.id === active} onClick={() => setActive(item.id)}>
        <span>{item.number}</span><div><strong>{item.label}</strong><small>{item.pain}</small></div><i />
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
