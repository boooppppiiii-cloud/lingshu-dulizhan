"use client";

import { FormEvent, useState } from "react";

const demoSteps = [
  {
    title: "选择一个产品",
    description: "从固定演示产品中选择“便携式储能电源”。",
    action: "选择产品",
    result: "产品资料已载入",
  },
  {
    title: "生成一条社媒内容",
    description: "AI 根据产品卖点与目标市场生成短视频脚本和平台文案。",
    action: "生成内容",
    result: "脚本、封面与平台文案已生成",
  },
  {
    title: "选择发布平台",
    description: "为 TikTok、Instagram 与 YouTube 生成差异化标题和画幅。",
    action: "确认发布",
    result: "3 个平台已进入发布队列",
  },
  {
    title: "模拟收到 WhatsApp 询盘",
    description: "客户从 TikTok 视频里的追踪入口发起产品咨询。",
    action: "接收询盘",
    result: "新询盘 · 来源已识别",
  },
  {
    title: "查看 AI 如何判断",
    description: "AI 识别语言、采购数量、MOQ 问题与报价风险。",
    action: "分析对话",
    result: "意向 92 · 报价需人工确认",
  },
  {
    title: "转交销售",
    description: "销售接手后获得来源、摘要、客户标签和建议动作。",
    action: "完成交接",
    result: "完整上下文已转交销售",
  },
];

export function DemoExperience() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const current = demoSteps[step];

  const next = () => {
    if (step === demoSteps.length - 1) {
      setCompleted(true);
      document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("lingshu:analytics", {
          detail: { event: "handoff_demo_complete", page: "/demo", section: "sandbox" },
        }),
      );
      return;
    }
    setStep((value) => value + 1);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.dispatchEvent(
      new CustomEvent("lingshu:analytics", {
        detail: { event: "demo_form_submit", page: "/demo", section: "booking" },
      }),
    );
  };

  return (
    <main className="demo-page">
      <section className="demo-hero">
        <div className="container demo-hero-grid">
          <div data-reveal>
            <span className="eyebrow">LIVE PRODUCT WALKTHROUGH</span>
            <h1>亲手走完一次“内容到客户”</h1>
            <p>
              用固定演示数据体验内容生成、发布、询盘归因、AI 判断和人工接管。无需登录，不连接真实平台。
            </p>
          </div>
          <div className="demo-summary" data-reveal>
            <strong>45 秒</strong>
            <span>6 个步骤</span>
            <span>无需登录</span>
          </div>
        </div>
      </section>

      <section className="section" id="sandbox">
        <div className="container sandbox-shell">
          <div className="sandbox-progress">
            {demoSteps.map((item, index) => (
              <button
                className={index === step ? "is-active" : index < step ? "is-done" : ""}
                type="button"
                key={item.title}
                onClick={() => setStep(index)}
                aria-label={`第 ${index + 1} 步：${item.title}`}
              >
                <span>{index + 1}</span>
                <small>{item.title}</small>
              </button>
            ))}
          </div>
          <div className="sandbox-content">
            <div className="sandbox-copy">
              <span className="eyebrow">STEP {String(step + 1).padStart(2, "0")}</span>
              <h2>{current.title}</h2>
              <p>{current.description}</p>
              <div className="sandbox-result">
                <i />
                {current.result}
              </div>
              <div className="sandbox-actions">
                <button
                  className="button button-ghost"
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                >
                  上一步
                </button>
                <button className="button button-primary" type="button" onClick={next}>
                  {step === demoSteps.length - 1 ? "完成演示" : current.action} <span>↗</span>
                </button>
              </div>
            </div>
            <div className="sandbox-visual" aria-live="polite">
              <div className="slot-grid" />
              <span>DEMO VISUAL · STEP {step + 1}</span>
              <strong>{current.title}</strong>
              <p>此区域预留给对应步骤的产品动图或 WebM。</p>
              <div className="sandbox-pulse" />
            </div>
          </div>
          {completed ? (
            <div className="sandbox-complete" role="status">
              <strong>演示完成</strong>
              <span>从内容到客户的完整上下文已经连通。</span>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section booking-section" id="booking">
        <div className="container booking-grid">
          <div data-reveal>
            <span className="eyebrow">BOOK A DEMO</span>
            <h2>想用你的产品试一次？</h2>
            <p>
              告诉我们当前的社媒平台、客户接待方式和最想解决的问题。我们会围绕你的真实业务准备演示。
            </p>
            <div className="booking-points">
              <span>01 · 根据你的产品准备演示</span>
              <span>02 · 明确平台接入条件</span>
              <span>03 · 共同确认 AI 权限边界</span>
            </div>
          </div>
          {submitted ? (
            <div className="success-panel" data-reveal role="status">
              <span>✓</span>
              <h3>预约信息已记录</h3>
              <p>我们会在 1 个工作日内与你确认演示时间与业务背景。</p>
              <button className="button button-ghost" type="button" onClick={() => setSubmitted(false)}>
                修改信息
              </button>
            </div>
          ) : (
            <form className="booking-form" data-reveal onSubmit={submit}>
              <label>
                姓名
                <input name="name" required placeholder="如何称呼你" />
              </label>
              <label>
                公司
                <input name="company" required placeholder="公司或品牌名称" />
              </label>
              <label>
                手机 / WhatsApp
                <input name="contact" required placeholder="+86 / +1 ..." />
              </label>
              <fieldset>
                <legend>当前主要平台</legend>
                <div className="choice-grid">
                  {["TikTok", "Instagram", "YouTube", "Facebook", "WhatsApp"].map((item) => (
                    <label key={item}>
                      <input type="checkbox" name="platform" value={item} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label>
                最想解决的问题
                <select name="challenge" required defaultValue="">
                  <option value="" disabled>
                    请选择
                  </option>
                  <option>社媒内容</option>
                  <option>多平台发布</option>
                  <option>智能客服</option>
                  <option>客户跟进</option>
                </select>
              </label>
              <button className="button button-primary form-submit" type="submit">
                提交预约 <span>↗</span>
              </button>
              <p className="form-note">提交即表示你同意我们根据隐私政策处理这些信息。</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
