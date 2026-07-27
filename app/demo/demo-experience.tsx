"use client";

import { FormEvent, useState } from "react";

const bookingEndpoint = "https://formsubmit.co/1463432441@qq.com";
const bookingReturnUrl = "https://official.lingshu.site/demo?submitted=1";

export function DemoExperience({ initialSubmitted = false }: { initialSubmitted?: boolean }) {
  const [submitted, setSubmitted] = useState(initialSubmitted);
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState("");

  const beginSubmission = (event: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    window.dispatchEvent(
      new CustomEvent("lingshu:analytics", {
        detail: { event: "demo_form_submit", page: "/demo", section: "booking" },
      }),
    );

    if (!event.currentTarget.checkValidity()) {
      setSubmitting(false);
    }
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
              <h3>预约信息已发送</h3>
              <p>我们会在 1 个工作日内与你确认演示时间与业务背景。</p>
              <button className="button button-ghost" type="button" onClick={() => setSubmitted(false)}>
                再提交一条
              </button>
            </div>
          ) : (
            <form
              className="booking-form"
              data-reveal
              action={bookingEndpoint}
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={beginSubmission}
              aria-busy={submitting}
            >
              <input type="hidden" name="_subject" value="灵枢 AI 官网新预约" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={bookingReturnUrl} />
              <input type="hidden" name="_url" value="https://official.lingshu.site/demo" />
              <input type="hidden" name="_replyto" value={replyTo} />
              <input
                className="form-honey"
                name="_honey"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <label>
                姓名
                <input name="姓名" required placeholder="如何称呼你" autoComplete="name" />
              </label>
              <label>
                公司
                <input name="公司或品牌" required placeholder="公司或品牌名称" autoComplete="organization" />
              </label>
              <label>
                联系邮箱
                <input
                  name="联系邮箱"
                  type="email"
                  required
                  placeholder="name@company.com"
                  autoComplete="email"
                  value={replyTo}
                  onChange={(event) => setReplyTo(event.target.value)}
                />
              </label>
              <label>
                手机 / WhatsApp
                <input name="手机或 WhatsApp" required placeholder="+86 / +1 ..." autoComplete="tel" />
              </label>
              <fieldset>
                <legend>当前主要平台</legend>
                <div className="choice-grid">
                  {["TikTok", "Instagram", "YouTube", "Facebook", "WhatsApp"].map((item) => (
                    <label key={item}>
                      <input type="checkbox" name="当前主要平台" value={item} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label>
                最想解决的问题
                <select name="最想解决的问题" required defaultValue="">
                  <option value="" disabled>
                    请选择
                  </option>
                  <option>社媒内容</option>
                  <option>多平台发布</option>
                  <option>智能客服</option>
                  <option>客户跟进</option>
                </select>
              </label>
              <button className="button button-primary form-submit" type="submit" disabled={submitting}>
                {submitting ? "正在安全发送…" : "提交预约"} <span>↗</span>
              </button>
              <p className="form-note">提交即表示你同意我们根据隐私政策处理这些信息。</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
