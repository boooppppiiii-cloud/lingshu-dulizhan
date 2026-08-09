"use client";

import { useState } from "react";

const videoModes = [
  ["material", "素材库智能生成", "从企业现有素材中匹配可执行镜头"],
  ["clone", "爆款裂变", "借鉴结构与节奏，不复制竞品事实"],
  ["product", "产品信息生成", "从企业中心的产品资料生成画面 brief"],
] as const;

const studioSteps = ["选模式", "分镜与声音", "选素材", "配乐", "封面", "成片预览"];

export function ProductStudioDemo() {
  const [mode, setMode] = useState<(typeof videoModes)[number][0]>("material");
  const [step, setStep] = useState(0);
  const [approved, setApproved] = useState(false);

  return (
    <div className="product-demo studio-demo" aria-label="AI 内容生产模拟演示">
      <DemoHeader label="我的社媒 / AI 创作" status="模拟演示 · 不会真实发布" />
      <div className="demo-mode-tabs" role="tablist" aria-label="创作模式">
        {videoModes.map(([id, title]) => (
          <button key={id} type="button" role="tab" aria-selected={mode === id} onClick={() => { setMode(id); setStep(0); setApproved(false); }}>
            {title}
          </button>
        ))}
      </div>
      <div className="studio-workspace">
        <ol className="studio-step-list" aria-label="内容生产步骤">
          {studioSteps.map((item, index) => (
            <li key={item} className={index === step ? "is-active" : index < step ? "is-done" : ""}>
              <button type="button" onClick={() => setStep(index)} aria-current={index === step ? "step" : undefined}>
                <span>{index < step ? "✓" : String(index + 1).padStart(2, "0")}</span>{item}
              </button>
            </li>
          ))}
        </ol>
        <div className="studio-panel" role="tabpanel">
          <span className="demo-overline">{videoModes.find(([id]) => id === mode)?.[1]}</span>
          <h3>{studioSteps[step]}</h3>
          {step === 0 && <ModePanel mode={mode} />}
          {step === 1 && <StoryboardPanel />}
          {step === 2 && <MaterialPanel />}
          {step === 3 && <MusicPanel />}
          {step === 4 && <CoverPanel />}
          {step === 5 && <PreviewPanel approved={approved} onApprove={() => setApproved(true)} />}
          <div className="demo-panel-actions">
            <button type="button" className="demo-secondary" disabled={step === 0} onClick={() => setStep((value) => Math.max(0, value - 1))}>上一步</button>
            {step < studioSteps.length - 1 ? (
              <button type="button" className="demo-primary" onClick={() => setStep((value) => Math.min(studioSteps.length - 1, value + 1))}>继续：{studioSteps[step + 1]}</button>
            ) : null}
          </div>
        </div>
      </div>
      <p className="demo-disclaimer">Mock 产品与素材，仅用于展示正式产品的交互逻辑，不代表真实客户内容或发布结果。</p>
    </div>
  );
}

function ModePanel({ mode }: { mode: string }) {
  const description = videoModes.find(([id]) => id === mode)?.[2];
  return <div className="demo-form-grid">
    <label>产品<span>水凝胶眼膜 · Mock</span></label>
    <label>内容主题<span>供应能力</span></label>
    <label>目标平台<span>TikTok</span></label>
    <label>画幅<span>9:16</span></label>
    <label>语言<span>English · 英语</span></label>
    <p className="demo-tip">{description}</p>
  </div>;
}

function StoryboardPanel() {
  return <div className="storyboard-list">
    {[
      ["0–3s", "买家痛点", "采购商如何判断工厂能否稳定交付？"],
      ["3–7s", "工厂证据", "质检与产线实拍 · 真实素材优先"],
      ["7–12s", "产品细节", "包装与产品特写 · 参数待审核"],
      ["12–17s", "供应能力", "从样品到批量订单的流程"],
      ["17–20s", "采购 CTA", "Message us on WhatsApp for verified details."],
    ].map(([time, role, text]) => <article key={time}><span>{time}</span><div><strong>{role}</strong><p>{text}</p></div></article>)}
  </div>;
}

function MaterialPanel() {
  const [selected, setSelected] = useState(["产品实拍", "工厂产线", "质检过程"]);
  return <div className="material-grid">
    {["产品实拍", "工厂产线", "质检过程", "包装打样", "证书资料"].map((item) => {const active=selected.includes(item);return <button type="button" aria-pressed={active} onClick={()=>setSelected(items=>active?items.filter(x=>x!==item):[...items,item])} className={active ? "is-selected" : ""} key={item}><span>{active ? "已选择" : "可选择"}</span><strong>{item}</strong></button>})}
  </div>;
}

function MusicPanel() {
  return <div className="music-panel"><span>企业上传音乐</span><strong>Factory_forward_v2.mp3</strong><div><i style={{ width: "36%" }} /></div><small>音量 36% · 不使用未授权内置曲库</small></div>;
}

function CoverPanel() {
  const [selected,setSelected]=useState("From sample to scale");
  return <div className="cover-grid">{["Built for repeat orders", "From sample to scale", "See the factory proof"].map((title) => <button type="button" aria-pressed={selected===title} onClick={()=>setSelected(title)} className={selected === title ? "is-selected" : ""} key={title}><span>OEM FACTORY</span><strong>{title}</strong></button>)}</div>;
}

function PreviewPanel({ approved, onApprove }: { approved: boolean; onApprove: () => void }) {
  return <div className="preview-panel"><div className="preview-phone"><span>9:16 PREVIEW</span><strong>From sample<br />to scale.</strong><small>20 秒 · English</small></div><div className="preview-status"><span className={approved ? "is-approved" : ""}>{approved ? "✓ 已人工批准" : "待人工确认"}</span><p>{approved ? "内容可进入排期；仍未真实发布。" : "核对产品事实、字幕和 WhatsApp CTA 后再进入排期。"}</p><button type="button" onClick={onApprove} disabled={approved}>{approved ? "已确认" : "确认内容"}</button></div></div>;
}

export function PublishingCalendarDemo() {
  const [scheduled, setScheduled] = useState(false);
  const [state, setState] = useState<"scheduled" | "publishing" | "published" | "failed">("scheduled");
  return <div className="product-demo calendar-demo" aria-label="内容排期模拟演示">
    <DemoHeader label="内容排期" status="Mock 发布队列" />
    <div className="calendar-layout">
      <div className="queue-column"><span className="demo-overline">内容队列</span><button type="button" className={scheduled ? "queue-card is-muted" : "queue-card"} onClick={() => setScheduled(true)} disabled={scheduled}><b>TikTok · English</b><strong>From sample to scale</strong><small>{scheduled ? "已加入日历" : "点击加入周四排期"}</small></button></div>
      <div className="week-calendar">
        {["周一", "周二", "周三", "周四", "周五"].map((day, index) => <div key={day} className={index === 3 ? "is-target" : ""}><span>{day}</span>{scheduled && index === 3 ? <button type="button" onClick={() => setState(state === "scheduled" ? "publishing" : state === "publishing" ? "published" : state === "published" ? "failed" : "scheduled")}><b>18:30</b><strong>From sample to scale</strong><small>{({scheduled:"已排期",publishing:"发布中",published:"已发布",failed:"发布失败"} as const)[state]}</small></button> : <i />}</div>)}
      </div>
    </div>
    <p className="demo-disclaimer">点击队列卡加入日历，再点击日历卡查看真实发布状态变化；演示不会连接平台账号。</p>
  </div>;
}

export function WhatsappHandoffDemo() {
  const [phase, setPhase] = useState<"auto" | "risk" | "human">("auto");
  return <div className="product-demo whatsapp-demo" aria-label="WhatsApp AI 接待模拟演示">
    <DemoHeader label="我的客户 / WhatsApp" status="Alex Morgan · 当地时间 10:42" />
    <div className="chat-source"><span>来源内容</span><strong>Instagram · OEM packaging guide</strong><small>Mock 来源 · 已归因</small></div>
    <div className="chat-thread" aria-live="polite">
      <div className="chat-bubble buyer"><strong>Alex</strong><p>Hi, can you customize our logo? We need 300 units first.</p><small>中文翻译：可以定制我们的 Logo 吗？首批需要 300 件。</small></div>
      <div className="chat-bubble ai"><strong>AI · 草稿需确认</strong><p>Yes. Which market and packaging format are you preparing for?</p><small>企业知识命中：私标包装流程</small></div>
      {phase !== "auto" && <div className="chat-bubble buyer"><strong>Alex</strong><p>Can you offer another 10% discount and confirm the final price?</p><small>中文翻译：可以再优惠 10% 并确认最终价格吗？</small></div>}
      {phase !== "auto" && <div className="risk-card"><span>高风险动作已识别</span><strong>正式报价与额外折扣超出 AI 权限</strong><p>自动发送已暂停，等待销售接管。</p></div>}
      {phase === "human" && <div className="handoff-card"><span>交接摘要</span><strong>印尼采购商 · 300 件 · 私标包装</strong><p>待确认：目标市场、包装形式、正式报价与折扣权限。</p><small>建议动作：销售核对 MOQ 与报价后回复</small></div>}
    </div>
    <div className="chat-actions">
      {phase === "auto" ? <button type="button" className="demo-primary" onClick={() => setPhase("risk")}>模拟客户询价</button> : phase === "risk" ? <button type="button" className="demo-primary" onClick={() => setPhase("human")}>转我接手</button> : <button type="button" className="demo-secondary" onClick={() => setPhase("auto")}>重新演示</button>}
      <span>{phase === "auto" ? "AI 正在按企业知识接待" : phase === "risk" ? "AI 已暂停回复" : "已切换为人工接手"}</span>
    </div>
    <p className="demo-disclaimer">模拟客户、对话与意向信息，仅用于说明权限和交接流程。</p>
  </div>;
}

export function CustomerTimelineDemo() {
  const [active, setActive] = useState("timeline");
  const [drafted,setDrafted]=useState(false);
  const tabs = [["timeline","客户时间线"],["evidence","AI 判断依据"],["next","下一步动作"]];
  return <div className="product-demo customer-demo" aria-label="客户跟进模拟演示">
    <DemoHeader label="客户详情 / Alex Morgan" status="高意向 92 · Mock 分值" />
    <div className="customer-tabs" role="tablist">{tabs.map(([id,label])=><button key={id} type="button" role="tab" aria-selected={active===id} onClick={()=>setActive(id)}>{label}</button>)}</div>
    <div className="customer-tab-panel">
      {active === "timeline" && <ol><li><span>10:36</span><strong>来自 Instagram 内容</strong><p>OEM packaging guide · 来源已记录</p></li><li><span>10:42</span><strong>客户提出定制与首批采购</strong><p>300 件 · Logo 定制</p></li><li><span>10:44</span><strong>AI 暂停报价并转人工</strong><p>折扣与正式价格需销售确认</p></li></ol>}
      {active === "evidence" && <div className="evidence-grid"><article><span>需求 Need</span><strong>Logo 定制</strong><small>客户原话</small></article><article><span>数量 Quantity</span><strong>300 件</strong><small>客户原话</small></article><article><span>时间 Timeline</span><strong>尚未确认</strong><small>不由 AI 推测</small></article><article><span>预算 Budget</span><strong>尚未确认</strong><small>不由 AI 推测</small></article></div>}
      {active === "next" && <div className="next-action"><span>建议由销售执行</span><strong>{drafted?"跟进草稿：请确认目标市场、包装形式和预计数量，我们核对 MOQ 后提供正式报价。":"确认目标市场、包装形式和 MOQ 后提供正式报价"}</strong><button type="button" onClick={()=>setDrafted(true)} disabled={drafted}>{drafted?"草稿已生成":"生成跟进草稿"}</button><small>{drafted?"草稿已进入待确认状态，不会自动发送。":"点击生成草稿；仍不会发送消息。"}</small></div>}
    </div>
    <p className="demo-disclaimer">Mock 客户、分值与时间线，不代表真实客户或销售结果。</p>
  </div>;
}

function DemoHeader({ label, status }: { label: string; status: string }) {
  return <div className="demo-window-bar"><span><i /><i /><i /></span><strong>{label}</strong><small>{status}</small></div>;
}
