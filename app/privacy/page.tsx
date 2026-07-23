import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <span className="eyebrow">LEGAL</span>
        <h1>隐私政策</h1>
        <p className="legal-updated">更新日期：2026 年 7 月 23 日</p>
        <section>
          <h2>我们收集的信息</h2>
          <p>
            当你预约产品演示时，我们可能收集姓名、公司、联系方式、使用的平台和业务需求，用于安排沟通与提供相关服务。
          </p>
        </section>
        <section>
          <h2>信息的使用</h2>
          <p>
            我们仅将这些信息用于响应咨询、准备产品演示、改善网站体验及履行双方约定的服务。
          </p>
        </section>
        <section>
          <h2>平台授权与客户数据</h2>
          <p>
            具体平台权限和客户数据处理方式将在接入前单独说明，并按照双方确认的范围执行。
          </p>
        </section>
        <section>
          <h2>联系我们</h2>
          <p>
            如需查询、更正或删除你提交的信息，请通过网站预约页面或
            hello@lingshu.ai 联系我们。
          </p>
        </section>
      </div>
    </main>
  );
}
