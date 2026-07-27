"use client";

import { FormEvent, useState } from "react";

export function DemoExperience() {
  const [submitted, setSubmitted] = useState(false);

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
      <section className="section booking-section booking-section-primary" id="booking">
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
