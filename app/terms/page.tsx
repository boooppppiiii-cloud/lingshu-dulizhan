import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <span className="eyebrow">LEGAL</span>
        <h1>服务条款</h1>
        <p className="legal-updated">更新日期：2026 年 7 月 23 日</p>
        <section>
          <h2>网站用途</h2>
          <p>
            本网站用于介绍灵枢 AI
            的产品能力、平台接入范围与服务方式。具体能力、交付范围和商业条款以双方正式确认的文件为准。
          </p>
        </section>
        <section>
          <h2>演示内容</h2>
          <p>
            网站中的交互演示使用固定示例数据，不代表真实客户、业务成绩或未经确认的产品承诺。
          </p>
        </section>
        <section>
          <h2>平台接入</h2>
          <p>
            第三方平台的能力可能受账号类型、地区、开发者审核与平台规则影响，接入前需完成实际评估。
          </p>
        </section>
        <section>
          <h2>联系我们</h2>
          <p>如对这些条款有疑问，请通过 hello@lingshu.ai 联系我们。</p>
        </section>
      </div>
    </main>
  );
}
