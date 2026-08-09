"use client";

import { useState } from "react";

const views = [
  { id: "create", label: "内容工作台", eyebrow: "正式功能演示", title: "从产品知识到脚本、分镜与成片任务", text: "演示正式产品中的生成模式、素材、声音、配乐、封面与预览步骤，不包含任何客户资料。" },
  { id: "publish", label: "发布排期", eyebrow: "正式功能演示", title: "统一查看平台、账号与发布状态", text: "演示多平台内容排期、审核和发布状态。平台与数据均为界面演示信息。" },
  { id: "inbox", label: "询盘接待", eyebrow: "正式功能演示", title: "在同一上下文里判断意向与接管边界", text: "演示来源、AI 判断、草稿确认与人工接管逻辑。人物、公司和对话均不使用客户资料。" },
] as const;

function CreateDemo() {
  return <div className="system-demo system-create-demo"><div className="system-demo-sidebar"><b>AI 创作工作台</b>{["选模式","分镜与声音","选素材","配乐","封面","成片预览"].map((x,i)=><span className={i===1?"active":""} key={x}><i>0{i+1}</i>{x}</span>)}</div><div className="system-demo-content"><div className="system-demo-bar"><strong>分镜与声音</strong><small>项目：海外产品介绍</small></div><div className="storyboard-grid">{["开场：产品使用场景","细节：结构与材质","证明：生产与质检","结尾：联系获取资料"].map((x,i)=><article key={x}><span>SHOT 0{i+1}</span><div className="shot-placeholder"/><strong>{x}</strong><small>{i%2?"英文旁白 · 4 秒":"环境音 · 3 秒"}</small></article>)}</div></div></div>;
}

function PublishDemo() {
  return <div className="system-demo"><div className="system-demo-content full"><div className="system-demo-bar"><strong>内容发布日历</strong><small>本周 · 4 个平台</small></div><div className="publish-board"><div className="publish-days">{["MON","TUE","WED","THU","FRI"].map(x=><span key={x}>{x}</span>)}</div><div className="publish-cards"><article><span>TikTok · 10:30</span><strong>产品使用演示</strong><small>等待审核</small></article><article><span>Instagram · 16:00</span><strong>结构细节拆解</strong><small>已排期</small></article><article><span>YouTube · 18:30</span><strong>工厂质量流程</strong><small>已发布</small></article></div></div></div></div>;
}

function InboxDemo({handedOff,onHandoff}:{handedOff:boolean;onHandoff:()=>void}) {
  return <div className="system-demo"><div className="system-demo-content full"><div className="system-demo-bar"><strong>客户工作台</strong><small>{handedOff?"销售已接管":"AI 辅助 · 草稿需确认"}</small></div><div className="inbox-demo"><aside><span className={handedOff?"":"active"}>新询盘 · 示例 A</span><span>待跟进 · 示例 B</span><span className={handedOff?"active":""}>人工接管 · 示例 C</span></aside><div className="inbox-conversation"><small>来源：Instagram · 产品演示内容</small><p className="incoming">Can you share MOQ and lead time?</p><p className="draft">{handedOff?"交接摘要已生成：客户询问 MOQ 与交期，市场、规格和数量待补齐。":"建议草稿：可以。为确认适用信息，请先告诉我目标市场、规格和预计数量。"}</p><div><span>意向：待补齐数量</span><span>风险：涉及交期，需确认</span></div></div><section><small>AI 判断依据</small><strong>{handedOff?"已通知销售负责人":"采购信息未完整"}</strong><p>已知：产品兴趣、询问 MOQ<br/>未知：市场、规格、数量</p><button type="button" onClick={onHandoff} disabled={handedOff}>{handedOff?"已转交销售":"转交销售"}</button></section></div></div></div>;
}

export function HeroSystemDemo(){return <div className="hero-system-demo"><div className="hero-system-top"><span><i/> LINGSHU WORKSPACE</span><strong>内容 → 发布 → 询盘</strong></div><PublishDemo/><div className="hero-system-status"><span>内容计划 12</span><span>本周已发布 7</span><span>待接管询盘 3</span></div></div>}

export function ProductEvidence() {
  const [active, setActive] = useState<(typeof views)[number]["id"]>("create");
  const [handedOff,setHandedOff]=useState(false);
  const current = views.find((view) => view.id === active) ?? views[0];
  return <section className="product-evidence" id="product"><div className="product-evidence-nav" role="tablist" aria-label="产品功能演示">{views.map((view,index)=><button key={view.id} type="button" role="tab" aria-selected={active===view.id} onClick={()=>setActive(view.id)}><span>0{index+1}</span>{view.label}</button>)}</div><div className="product-evidence-stage"><div className="product-evidence-copy"><span>{current.eyebrow}</span><h3>{current.title}</h3><p>{current.text}</p><small>界面演示依据 lingshu-AI 正式产品功能制作；不包含客户名称、客户产品、联系人或经营数据。</small></div><div className={`product-evidence-media is-${active}`}>{active==="create"?<CreateDemo/>:active==="publish"?<PublishDemo/>:<InboxDemo handedOff={handedOff} onHandoff={()=>setHandedOff(true)}/>}<div className="product-live-mark"><i/> SYSTEM DEMO</div></div></div></section>;
}
