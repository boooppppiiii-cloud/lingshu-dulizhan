"use client";

import { FormEvent, useState } from "react";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const bookingEndpoint = "https://formsubmit.co/ajax/1463432441@qq.com";

export function DemoExperience() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);

    if (fields.get("_honey")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const company = String(fields.get("company") ?? "未填写公司");
    const payload = {
      _subject: `灵枢 AI 官网新预约｜${company}`,
      _template: "table",
      _captcha: "false",
      _replyto: String(fields.get("email") ?? ""),
      姓名: String(fields.get("name") ?? ""),
      公司或品牌: company,
      联系邮箱: String(fields.get("email") ?? ""),
      手机或WhatsApp: String(fields.get("contact") ?? ""),
      当前主要平台: fields.getAll("platform").map(String).join("、") || "未选择",
      最想解决的问题: String(fields.get("challenge") ?? ""),
      提交页面: window.location.href,
      提交时间: new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }),
    };

    try {
      const response = await fetch(bookingEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean | string }
        | null;
      const accepted =
        response.ok &&
        (result?.success === true || result?.success === "true" || result?.success === undefined);

      if (!accepted) {
        throw new Error("Booking delivery was not accepted");
      }

      form.reset();
      setStatus("success");
      window.dispatchEvent(
        new CustomEvent("lingshu:analytics", {
          detail: { event: "demo_form_submit", page: "/demo", section: "booking" },
        }),
      );
    } catch {
      setStatus("error");
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
          {status === "success" ? (
            <div className="success-panel" data-reveal role="status">
              <span>✓</span>
              <h3>预约信息已发送</h3>
              <p>我们会在 1 个工作日内与你确认演示时间与业务背景。</p>
              <button className="button button-ghost" type="button" onClick={() => setStatus("idle")}>
                再提交一条
              </button>
            </div>
          ) : (
            <form className="booking-form" data-reveal onSubmit={submit} aria-busy={status === "submitting"}>
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
                <input name="name" required placeholder="如何称呼你" autoComplete="name" />
              </label>
              <label>
                公司
                <input name="company" required placeholder="公司或品牌名称" autoComplete="organization" />
              </label>
              <label>
                联系邮箱
                <input name="email" type="email" required placeholder="name@company.com" autoComplete="email" />
              </label>
              <label>
                手机 / WhatsApp
                <input name="contact" required placeholder="+86 / +1 ..." autoComplete="tel" />
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
              {status === "error" ? (
                <p className="form-error" role="alert">
                  发送失败，请检查网络后重试；你填写的内容仍保留在表单中。
                </p>
              ) : null}
              <button
                className="button button-primary form-submit"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "正在发送…" : "提交预约"} <span>↗</span>
              </button>
              <p className="form-note">提交即表示你同意我们根据隐私政策处理这些信息。</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
