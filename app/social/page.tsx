import type { Metadata } from "next";
import {
  CapabilityList,
  CtaBand,
  MotionSlot,
  PageHero,
  SectionHeading,
} from "../ui/site-components";

export const metadata: Metadata = {
  title: "社媒增长",
  description:
    "从趋势洞察、AI 内容生成、多平台发布到 WhatsApp 询盘归因，把一个产品变成持续增长的内容系统。",
};

const insightItems = [
  {
    index: "01",
    title: "趋势与竞品洞察",
    text: "关注市场正在发生什么，也解释内容为什么会火：受众、钩子、结构和卖点一目了然。",
  },
  {
    index: "02",
    title: "一键转为创作任务",
    text: "把值得跟进的内容机会直接送入创作队列，减少从研究到执行之间的断层。",
  },
  {
    index: "03",
    title: "下一步动作建议",
    text: "围绕产品和目标市场给出同主题脚本、平台适配和发布时间建议。",
  },
];

const creationItems = [
  ["短视频脚本", "开头钩子、场景结构、字幕与镜头建议"],
  ["智能配音与 BGM", "多语言语音、情绪与平台风格预设"],
  ["封面与图文", "B2B 海报、产品卡与社媒图文"],
  ["平台文案", "按渠道长度、语气与标签规则差异化生成"],
];

export default function SocialPage() {
  return (
    <main>
      <PageHero
        eyebrow="SOCIAL GROWTH"
        title="把一个产品，变成持续增长的内容系统"
        description="从趋势与竞品中找到机会，用 AI 生成能发布的内容，统一管理多个平台与账号，并知道每一条询盘从哪里来。"
        visualTitle="产品 → 内容 → 多平台 → 询盘"
        visualNote="建议动图：左侧产品素材进入，中间生成脚本、视频与海报，右侧流入四个平台，底部回流播放与询盘信号。"
        tone="social"
      />

      <section className="section" id="details">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="DISCOVER"
              title="看趋势，也看为什么会火"
              description="不做泛化的数据大屏，只聚焦能转成下一条内容的机会。"
            />
            <CapabilityList items={insightItems} tone="social" />
          </div>
          <div data-reveal>
            <MotionSlot
              title="趋势与爆款拆解动图"
              note="展示热门内容进入分析台，依次标注开头钩子、内容结构、目标受众和可执行创作建议。"
              tone="social"
              ratio="landscape"
            />
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <SectionHeading
            eyebrow="CREATE"
            title="生成能发布的内容，而不只是文案"
            description="围绕真实产品资料，完成短视频、图文和平台文案的连续生产。"
            align="center"
          />
          <div className="creation-grid">
            {creationItems.map(([title, text], index) => (
              <article className="creation-card" data-reveal key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div data-reveal>
            <MotionSlot
              title="AI 内容生成工作流"
              note="建议动图：一个产品素材被拖入画布，脚本、分镜、封面和平台文案按节奏依次生成。"
              tone="social"
              ratio="wide"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section reverse-on-mobile">
          <div data-reveal>
            <MotionSlot
              title="多平台发布队列"
              note="展示一条内容分裂为 YouTube、TikTok、Instagram、Facebook 四种画幅与不同发布状态。"
              tone="social"
              ratio="landscape"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="PUBLISH"
              title="一次配置，多平台、多账号差异化发布"
              description="统一排期，但不强行复用同一份标题和文案。每个平台都保留自己的发布逻辑。"
            />
            <ul className="feature-checklist">
              <li>分平台标题、文案与画幅适配</li>
              <li>最佳发布时间建议与内容日历</li>
              <li>多视频发布队列与账号状态</li>
              <li>发布前检查与异常提示</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="attribution-section">
        <div className="container attribution-grid">
          <div data-reveal>
            <span className="eyebrow eyebrow-light">CONTENT ATTRIBUTION</span>
            <h2>不只看播放量，更知道客户从哪条内容来</h2>
            <p>
              每条发布自动附加独立 WhatsApp
              追踪入口。客户发来消息后，平台、账号、视频标题与发布时间一起进入客户档案。
            </p>
            <div className="attribution-path">
              {["TikTok 视频", "WhatsApp CTA", "新询盘", "客户详情"].map(
                (item, index) => (
                  <span key={item}>
                    <i>{index + 1}</i>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          <div data-reveal>
            <MotionSlot
              title="内容级 WhatsApp 归因"
              note="全站重点动图：从具体社媒内容发起 WhatsApp 对话，客户资料自动显示来源平台、标题与发布账号。"
              tone="dark"
              ratio="landscape"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="LEARN"
            title="让客户问题，反哺下一轮内容"
            description="把播放、互动、询盘来源和客户质量放到一起复盘，下一轮内容不再只追求流量。"
            align="center"
          />
          <div className="metric-grid">
            {[
              ["内容机会", "哪些主题正在增长"],
              ["询盘来源", "哪些内容真正带来对话"],
              ["客户质量", "哪些平台产生高意向客户"],
              ["下一步建议", "继续做什么、停止做什么"],
            ].map(([title, text]) => (
              <article data-reveal key={title}>
                <span />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="让每一条内容，都有机会走向客户"
        description="用你的产品资料，看看灵枢如何完成洞察、生成、发布与询盘归因。"
      />
    </main>
  );
}
