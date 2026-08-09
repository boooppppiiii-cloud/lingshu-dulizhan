const bookingEndpoint = "https://formsubmit.co/1463432441@qq.com";
const bookingReturnUrl = "https://official.lingshu.site/demo?submitted=1";

export function DemoExperience({
  submitted = false,
  intent = "demo",
}: {
  submitted?: boolean;
  intent?: "trial" | "demo";
}) {
  const isTrial = intent === "trial";

  return (
    <main className="demo-page">
      <section className="section booking-section booking-section-primary" id="booking">
        <div className="container booking-grid">
          <div data-reveal>
            <span className="eyebrow">TRY LINGSHU AI</span>
            <h1>{isTrial ? "先用 3 天，再决定是否合适" : "想用你的产品试一次？"}</h1>
            <p>
              {isTrial
                ? "提交业务信息后，我们会联系你开通 3 天试用账号，并协助完成基础配置。"
                : "告诉我们当前的社媒平台、客户接待方式和最想解决的问题。我们会围绕你的真实业务准备演示。"}
            </p>
            <div className="demo-intent-actions" aria-label="选择申请方式">
              <a className={`button ${isTrial ? "button-primary" : "button-ghost"}`} href="/demo?intent=trial">
                获取 3 天试用账号
              </a>
              <a className={`button ${isTrial ? "button-ghost" : "button-primary"}`} href="/demo?intent=demo">
                预约产品演示
              </a>
            </div>
            <div className="booking-points">
              <span>01 · 3 天试用，根据你的产品辅助配置</span>
              <span>02 · 提交后由顾问联系开通</span>
              <span>03 · 当前暂不公开价格，我们会根据需求说明方案</span>
            </div>
          </div>
          {submitted ? (
            <div className="success-panel" data-reveal role="status">
              <span>✓</span>
              <h3>预约信息已发送</h3>
              <p>灵枢团队会根据你提交的联系方式，尽快确认试用或演示安排。</p>
              <a className="button button-ghost" href="/demo">
                再提交一条
              </a>
            </div>
          ) : (
            <form
              className="booking-form"
              data-reveal
              action={bookingEndpoint}
              method="POST"
              acceptCharset="UTF-8"
            >
              <input type="hidden" name="_subject" value="灵枢 AI 官网新预约" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={bookingReturnUrl} />
              <input type="hidden" name="_url" value="https://official.lingshu.site/demo" />
              <input type="hidden" name="申请意向" value={isTrial ? "3 天试用账号" : "预约产品演示"} />
              <input type="hidden" name="页面来源" value={isTrial ? "官网试用入口" : "官网演示入口"} />
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
                  name="_replyto"
                  type="email"
                  required
                  placeholder="name@company.com"
                  autoComplete="email"
                />
              </label>
              <label>
                手机 / WhatsApp
                <input name="手机或 WhatsApp" required placeholder="+86 / +1 ..." autoComplete="tel" />
              </label>
              <label>
                产品类别
                <select name="产品类别" required defaultValue="">
                  <option value="" disabled>请选择</option>
                  <option>美妆个护</option>
                  <option>医药健康</option>
                  <option>建材</option>
                  <option>其他</option>
                </select>
              </label>
              <label>
                目标市场
                <input name="目标市场" required placeholder="例如：美国、中东、东南亚" />
              </label>
              <label className="form-wide">
                官网或产品链接
                <input name="官网或产品链接" type="url" placeholder="https://" inputMode="url" />
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
              <label className="form-consent form-wide">
                <input name="隐私同意" type="checkbox" required value="已同意" />
                <span>我已阅读并同意<a href="/privacy" target="_blank" rel="noreferrer">《隐私政策》</a>，并同意灵枢团队就本次试用或演示申请与我联系。</span>
              </label>
              <button className="button button-primary form-submit" type="submit">
                {isTrial ? "申请 3 天试用" : "提交预约"} <span>↗</span>
              </button>
              <p className="form-note">请勿提交密码、支付信息或不必要的敏感信息。套餐价格暂不公开。</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
