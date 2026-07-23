import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, SectionHeading } from "../ui/site-components";

export const metadata: Metadata = {
  title: "平台集成",
  description:
    "了解灵枢 AI 对 YouTube、TikTok、Instagram、Facebook、WhatsApp 与 Shopify 的支持能力和接入条件。",
};

const integrations = [
  {
    name: "YouTube",
    code: "YT",
    tone: "red",
    status: "正式支持",
    capabilities: ["内容发布", "账号管理", "数据读取", "发布状态"],
    requirement: "客户授权 YouTube 频道与所需权限。",
    use: "长短视频发布、内容日历与账号数据复盘。",
  },
  {
    name: "TikTok",
    code: "TK",
    tone: "ink",
    status: "正式支持",
    capabilities: ["内容发布", "账号管理", "数据读取", "追踪入口"],
    requirement: "符合 TikTok 开发者与账号接入条件。",
    use: "短视频发布、趋势复盘与 WhatsApp 询盘追踪。",
  },
  {
    name: "Instagram",
    code: "IG",
    tone: "pink",
    status: "正式支持",
    capabilities: ["内容发布", "账号管理", "数据读取", "追踪入口"],
    requirement: "需要专业账号及关联的 Meta 资产授权。",
    use: "Reels、图文发布与内容级客户来源归因。",
  },
  {
    name: "Facebook",
    code: "FB",
    tone: "blue",
    status: "正式支持",
    capabilities: ["内容发布", "主页管理", "数据读取", "追踪入口"],
    requirement: "需要主页及 Meta 商业资产的对应权限。",
    use: "主页内容发布、排期与 WhatsApp 线索入口。",
  },
  {
    name: "WhatsApp",
    code: "WA",
    tone: "green",
    status: "灰度开放",
    capabilities: ["消息接入", "AI 回复", "人工接管", "来源归因"],
    requirement: "根据客户现有账号情况评估接入方式。",
    use: "客户接待、意图识别、回复草稿与销售协作。",
  },
  {
    name: "Shopify",
    code: "SH",
    tone: "lime",
    status: "规划中",
    capabilities: ["商品资料", "客户上下文", "订单信息"],
    requirement: "能力范围与开放时间以后续说明为准。",
    use: "计划用于商品知识同步与客户服务上下文。",
  },
];

export default function IntegrationsPage() {
  return (
    <main>
      <section className="simple-hero">
        <div className="container" data-reveal>
          <span className="eyebrow">INTEGRATIONS</span>
          <h1>连接你正在使用的平台，而不只是展示 Logo</h1>
          <p>
            每个集成都说明能做什么、需要什么条件，以及它如何进入“内容到客户”的增长链路。
          </p>
        </div>
      </section>

      <section className="section integrations-section">
        <div className="container">
          <div className="integration-filter" data-reveal>
            <button className="is-active" type="button">
              全部
            </button>
            <button type="button">社媒平台</button>
            <button type="button">客户沟通</button>
            <button type="button">电商与数据</button>
          </div>
          <div className="integration-grid">
            {integrations.map((item) => (
              <article className="integration-card" data-reveal key={item.name}>
                <div className="integration-top">
                  <span className={`integration-logo tone-${item.tone}`}>{item.code}</span>
                  <span className={`integration-status status-${item.status}`}>{item.status}</span>
                </div>
                <h2>{item.name}</h2>
                <div className="capability-tags">
                  {item.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
                <dl>
                  <div>
                    <dt>接入条件</dt>
                    <dd>{item.requirement}</dd>
                  </div>
                  <div>
                    <dt>典型用途</dt>
                    <dd>{item.use}</dd>
                  </div>
                </dl>
                <Link href="/demo">
                  预约接入协助 <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section integration-note">
        <div className="container note-grid">
          <SectionHeading
            eyebrow="ACCESS NOTES"
            title="平台能力与接入条件，以实际授权为准"
            description="部分平台能力取决于账号类型、所在地区、开发者审核和客户自备应用。正式接入前，我们会共同确认权限范围与可用状态。"
          />
          <div className="note-list">
            <article data-reveal>
              <span>01</span>
              <h3>权限最小化</h3>
              <p>仅申请完成约定能力所需的权限。</p>
            </article>
            <article data-reveal>
              <span>02</span>
              <h3>状态透明</h3>
              <p>正式支持、灰度与规划能力明确区分。</p>
            </article>
            <article data-reveal>
              <span>03</span>
              <h3>按平台规则接入</h3>
              <p>不以绝对化表述替代具体接入条件。</p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="想确认你的账号是否可以接入？"
        description="告诉我们你正在使用的平台与账号情况，我们会给出清晰的接入范围和下一步。"
      />
    </main>
  );
}
