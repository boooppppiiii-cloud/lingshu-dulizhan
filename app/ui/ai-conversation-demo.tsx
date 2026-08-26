"use client";

import { useState } from "react";
import styles from "../ai-conversation-demo.module.css";

const scenarios = [
  {
    id: "first-inquiry",
    number: "01",
    tab: "首次询盘",
    label: "秒级首响",
    customer: "Can your system inspect scratches on reflective aluminum parts? We need an English interface and local integration in Dubai.",
    reply: "可以。除了划伤，您还需要同时检测凹坑、毛刺或色差吗？我已记录英文界面与迪拜本地集成要求，接下来可以按实际缺陷组合确认检测方案。",
    insight: "先诊断，再推荐",
    evidence: ["识别语言：English", "记住地区：Dubai", "补全缺陷类型"],
    action: "建立首轮需求档案",
  },
  {
    id: "diagnosis",
    number: "02",
    tab: "需求诊断",
    label: "持续跟进",
    customer: "Changeover takes around 55 minutes, and our production data is split across three systems.",
    reply: "这会同时影响产能利用与审计追溯。建议先用一条产线试点，我们一起确认 OPC UA、产品配方同步和验收指标，再评估复制到其他产线。",
    insight: "从泛需求推进到试点",
    evidence: ["识别瓶颈：换型 55 分钟", "识别风险：数据分散", "建议动作：单线试点"],
    action: "推进技术信息确认",
  },
  {
    id: "validation",
    number: "03",
    tab: "方案验证",
    label: "关键人推进",
    customer: "We have sent the URS. Can you guarantee that the system will pass FAT?",
    reply: "我已根据 URS 整理 FAT 待确认字段。为了让验收标准一次对齐，建议邀请贵司质量负责人参加评审，我们会逐项确认范围与判定方式。",
    insight: "主动规避高风险承诺",
    evidence: ["已读取：URS", "删除：保证通过 FAT", "关键人：质量经理"],
    action: "预约质量评审",
  },
  {
    id: "pricing",
    number: "04",
    tab: "报价异议",
    label: "自动转人工",
    customer: "Another supplier is 7% lower. Can you match their final price and delivery date?",
    reply: "我先帮您对齐两边的检测范围、节拍、质保与交付条件。最终价格和交期需要由销售负责人确认，我已把预算、决策人和采购时限完整同步给他。",
    insight: "触及价格与交期红线",
    evidence: ["禁止 AI 自行降价", "配置需要重新对齐", "上下文完整交接"],
    action: "销售负责人已接管",
  },
  {
    id: "group-deal",
    number: "05",
    tab: "集团大单",
    label: "负责人预警",
    customer: "The budget for 12 lines is approved. Our COO and group procurement will join the next meeting. Please send the quotation in Arabic.",
    reply: "أهلاً وسهلاً. 已为您保留阿语沟通，并整理 12 条产线、预算批准、COO 参会与集团采购信息。销售负责人将在 10 分钟内接管并确认正式报价。",
    insight: "高价值商机 98",
    evidence: ["规模：12 条产线", "预算：已批准", "决策信号：COO 参会"],
    action: "10 分钟内负责人接管",
  },
  {
    id: "repurchase",
    number: "06",
    tab: "老客复购",
    label: "长期上下文",
    customer: "We are ready to discuss phase two. Do we need to repeat all the specifications from phase one?",
    reply: "不需要。我还记得一期 SAT 基线、最终参数和您的验收偏好。这次只需确认新增箱型、输送线变化和计划启动日期，就可以继续推进二期方案。",
    insight: "不是每次重新认识客户",
    evidence: ["记得一期 SAT", "保留最终参数", "延续客户偏好"],
    action: "复购需求快速建档",
  },
  {
    id: "reactivation",
    number: "07",
    tab: "沉默唤醒",
    label: "自然触达",
    customer: "Conversation paused · Warehouse renovation delayed · 33 days ago",
    reply: "上次您因为仓库改造暂停了项目。我们刚完成一版新布局，在不改变主设备位置的情况下可多释放 600 毫米通道，想请您看看是否更适合现在的现场规划？",
    insight: "带着新价值重新开口",
    evidence: ["暂停原因：仓库改造", "沉默时长：33 天", "新价值：+600mm 通道"],
    action: "已生成自然唤醒话术",
  },
] as const;

export function AiConversationDemo() {
  const [activeId, setActiveId] = useState<(typeof scenarios)[number]["id"]>("pricing");
  const active = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  return (
    <section className={styles.demo} aria-labelledby="conversation-demo-title">
      <header className={styles.demoHeading}>
        <div>
          <span>真实工作演示</span>
          <h3 id="conversation-demo-title">不只会聊天，更知道下一步该做什么</h3>
        </div>
        <p>选择一个典型询盘，看看 AI 如何理解上下文、控制风险并把机会推进给销售。</p>
      </header>

      <div className={styles.workspace}>
        <aside className={styles.scenarioRail} aria-label="询盘场景">
          <div className={styles.railTitle}>
            <span>场景演示</span>
            <small>7 个成交节点</small>
          </div>
          <div className={styles.tabs}>
            {scenarios.map((scenario) => (
              <button
                type="button"
                key={scenario.id}
                className={scenario.id === active.id ? styles.activeTab : styles.tab}
                onClick={() => setActiveId(scenario.id)}
                aria-pressed={scenario.id === active.id}
              >
                <span className={styles.tabNumber}>{scenario.number}</span>
                <span><strong>{scenario.tab}</strong><small>{scenario.label}</small></span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.conversation}>
          <div className={styles.conversationBar}>
            <div className={styles.contact}>
              <span className={styles.avatar}>{active.tab.slice(0, 1)}</span>
              <span><strong>{active.tab}</strong><small>海外客户 · 在线</small></span>
            </div>
            <span className={styles.liveStatus}><i />AI 正在接待</span>
          </div>

          <div className={styles.messages} key={active.id}>
            <div className={styles.time}>Today · 10:24</div>
            <div className={styles.customerMessage}>
              <span className={styles.messageMeta}>客户</span>
              <p>{active.customer}</p>
            </div>
            <div className={styles.aiMessage}>
              <div className={styles.aiMeta}><span className={styles.aiMark}>AI</span>灵枢智能客服</div>
              <p>{active.reply}</p>
              <div className={styles.translation}>已结合客户档案与当前成交阶段生成</div>
            </div>
          </div>

          <div className={styles.composer} aria-hidden="true">
            <span>输入回复，或让 AI 继续处理…</span>
            <button type="button" tabIndex={-1}>发送</button>
          </div>
        </div>

        <aside className={styles.insightPanel}>
          <div className={styles.insightTop}>
            <span>AI 实时判断</span>
            <i>LIVE</i>
          </div>
          <div className={styles.scoreRing}><strong>{active.id === "group-deal" ? "98" : active.id === "pricing" ? "86" : "92"}</strong><span>机会评分</span></div>
          <h4>{active.insight}</h4>
          <ul>
            {active.evidence.map((item) => <li key={item}><span />{item}</li>)}
          </ul>
          <div className={styles.nextAction}><small>下一步动作</small><strong>{active.action}</strong><span>→</span></div>
        </aside>
      </div>
    </section>
  );
}
