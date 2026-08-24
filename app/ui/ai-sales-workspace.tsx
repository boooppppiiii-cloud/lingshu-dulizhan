"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../ai-sales-workspace.module.css";

type Message = {
  speaker: "customer" | "ai";
  label: string;
  time: string;
  text: string;
  translation: string;
  state?: string;
};

type Scenario = {
  shortTitle: string;
  result: string;
  person: string;
  company: string;
  initials: string;
  region: string;
  language: string;
  channel: string;
  channelTone: string;
  lastSeen: string;
  node: string;
  status: string;
  intent: number;
  stage: string;
  diagnosis: string;
  nextAction: string;
  guardrail: string;
  evidence: string[];
  memory: string[];
  messages: Message[];
};

const scenarios: Scenario[] = [
  {
    shortTitle: "首次询盘",
    result: "秒级首响",
    person: "Omar Hassan",
    company: "Gulf Precision",
    initials: "O",
    region: "阿联酋 · 迪拜",
    language: "英语",
    channel: "TikTok",
    channelTone: "tiktok",
    lastSeen: "刚刚",
    node: "节点 1 · 海外首次询盘与场景澄清",
    status: "询盘中",
    intent: 63,
    stage: "澄清检测场景",
    diagnosis: "先确认缺陷类型与检测边界，不在信息不足时直接推销设备。",
    nextAction: "继续收集工件尺寸、节拍和样品信息，形成可验证的检测需求。",
    guardrail: "不承诺未验证的检测精度，不提前进入报价。",
    evidence: ["反光铝件", "划伤 / 凹痕 / 污渍", "英文界面", "迪拜本地集成"],
    memory: ["界面语言：英文", "交付地区：迪拜", "集成偏好：本地服务商"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "14:32",
        text: "Hi, I saw your inspection system on TikTok. Can it detect scratches on reflective aluminum parts?",
        translation: "你好，我在 TikTok 上看到了你们的检测设备。它能检测反光铝件上的划伤吗？",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "14:32",
        text: "Yes, reflective aluminum parts can be evaluated. Besides scratches, which defects do you need to detect - dents, stains, edge damage or dimensional issues?",
        translation: "可以评估反光铝件。除了划伤，还需要检测凹痕、污渍、边缘破损，还是尺寸问题？",
        state: "已自动回复",
      },
      {
        speaker: "customer",
        label: "客户补充",
        time: "14:36",
        text: "Dents and stains too. We need an English interface and a local integrator in Dubai.",
        translation: "还需要检测凹痕和污渍。我们需要英文界面，以及迪拜当地的集成服务。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "14:36",
        text: "Got it. I have saved those requirements. Could you share the part size and target cycle time next?",
        translation: "已记录反光表面、三类缺陷、英文界面和迪拜集成要求。接下来请提供工件尺寸和目标节拍。",
        state: "已学习记忆",
      },
    ],
  },
  {
    shortTitle: "需求诊断",
    result: "持续推进",
    person: "Anna Keller",
    company: "VoltWerk GmbH",
    initials: "A",
    region: "德国 · 斯图加特",
    language: "英语",
    channel: "WhatsApp",
    channelTone: "whatsapp",
    lastSeen: "4 分钟前",
    node: "节点 2 · 海外需求诊断与资格判断",
    status: "询盘中",
    intent: 79,
    stage: "确认影响并定义试点",
    diagnosis: "55 分钟换型同时损失产能；三套系统分散数据，增加审计工作量。",
    nextAction: "锁定单线试点，补齐 OPC UA、产品配方和验收指标。",
    guardrail: "先验证一条产线，不放大未经确认的全厂改造范围。",
    evidence: ["换型约 55 分钟", "数据分散在 3 套系统", "影响产能", "影响审计"],
    memory: ["接口：OPC UA", "需要产品配方", "需共同定义验收指标"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "03:08",
        text: "Changeover takes around 55 minutes and torque data sits in three systems.",
        translation: "换型大约需要 55 分钟，扭矩数据分散在三套系统里。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "03:08",
        text: "That is enough to hurt both output and audit work. Would you prefer to start with one pilot line before touching the other lines?",
        translation: "这会同时影响产能和审计。是否先从一条试点线开始，再考虑其他产线？",
        state: "已自动回复",
      },
      {
        speaker: "customer",
        label: "客户补充",
        time: "03:12",
        text: "Yes, one pilot line first. It must connect through OPC UA, with product recipes and clear acceptance criteria.",
        translation: "是的，先做一条试点线。必须通过 OPC UA 连接，并具备产品配方和明确的验收指标。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "03:12",
        text: "I have scoped the pilot around OPC UA, recipe management and acceptance criteria. Which line changes products most often?",
        translation: "已将 OPC UA、配方管理和验收指标纳入试点范围。哪条产线的产品换型最频繁？",
        state: "需求已结构化",
      },
    ],
  },
  {
    shortTitle: "方案验证",
    result: "推动关键人",
    person: "Sofia Ramirez",
    company: "MedNova Systems",
    initials: "S",
    region: "西班牙 · 巴塞罗那",
    language: "英语",
    channel: "Email",
    channelTone: "email",
    lastSeen: "8 分钟前",
    node: "节点 3 · 医疗 URS 方案验证与风险控制",
    status: "验证中",
    intent: 86,
    stage: "锁定 FAT 字段与负责人",
    diagnosis: "URS 已收到，当前关键动作是确认验收字段和质量负责人，而非继续介绍产品。",
    nextAction: "发起 30 分钟评审，邀请客户质量经理共同锁定 FAT 清单。",
    guardrail: "已删除“保证通过 FAT”等高风险承诺，仅承诺共同定义和验证。",
    evidence: ["已发送 URS", "医疗质量场景", "FAT 字段待锁定", "质量负责人未进入"],
    memory: ["质量体系：医疗", "文件：URS v3", "评审语言：英语"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "10:16",
        text: "I have sent our URS. Can you confirm the system will pass FAT as written?",
        translation: "我已经发送了 URS。你们能确认系统会按当前内容通过 FAT 吗？",
      },
      {
        speaker: "ai",
        label: "风险校验",
        time: "10:16",
        text: "The draft promise was removed. FAT results cannot be guaranteed before both sides confirm the fields, samples and acceptance method.",
        translation: "已删除直接保证通过 FAT 的表述。双方确认字段、样品和验收方法前，不作结果承诺。",
        state: "高风险承诺已拦截",
      },
      {
        speaker: "ai",
        label: "AI 建议回复",
        time: "10:17",
        text: "We can map your URS to a FAT checklist. Could we schedule a 30-minute review with your quality manager to lock the fields and acceptance method?",
        translation: "我们可以把 URS 映射成 FAT 清单。能否安排 30 分钟，由贵司质量经理一起确认字段和验收方法？",
        state: "待人工确认发送",
      },
    ],
  },
  {
    shortTitle: "报价异议",
    result: "自动转人工",
    person: "Piotr Nowak",
    company: "AutoForm Polska",
    initials: "P",
    region: "波兰 · 弗罗茨瓦夫",
    language: "英语",
    channel: "Facebook",
    channelTone: "facebook",
    lastSeen: "7 分钟前",
    node: "节点 4 · 国际报价异议与人工接管",
    status: "已报价",
    intent: 89,
    stage: "处理最终价格异议",
    diagnosis: "客户明确进入最终商务比较，价格与交期均触及 AI 权限红线。",
    nextAction: "由销售接管价格与交期；AI 先生成配置对齐问题，避免错误比价。",
    guardrail: "禁止 AI 自行降价、承诺最终价格或锁定交期。",
    evidence: ["竞品低 7%", "技术方案已接受", "最终商务比较", "采购时限：本周"],
    memory: ["预算：已进入终审", "决策人：采购总监", "交期要求：保持不变"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "17:25",
        text: "Another supplier is 7% lower. Can you match it and keep the same delivery date?",
        translation: "另一家供应商便宜 7%。你们能匹配价格并保持相同交期吗？",
      },
      {
        speaker: "ai",
        label: "AI 判断",
        time: "17:25",
        text: "Final price and delivery are outside the AI approval boundary. The commercial context has been handed to the sales owner.",
        translation: "最终价格和交期已超出 AI 审批边界，完整商务上下文已交给销售负责人。",
        state: "已切换人工",
      },
      {
        speaker: "ai",
        label: "建议澄清",
        time: "17:26",
        text: "Before our sales lead reviews the terms, does the competing offer include force-displacement closed loop, all changeover tooling, OPC UA and the same delivery scope?",
        translation: "销售负责人评估前，请确认竞品是否包含力位移闭环、全部换型工装、OPC UA 和相同交付范围？",
        state: "待销售发送",
      },
    ],
  },
  {
    shortTitle: "集团大单",
    result: "负责人预警",
    person: "Faisal Al-Harbi",
    company: "Najd Foods Group",
    initials: "F",
    region: "沙特阿拉伯 · 利雅得",
    language: "阿语",
    channel: "WhatsApp",
    channelTone: "whatsapp",
    lastSeen: "2 分钟前",
    node: "节点 5 · 海外大单识别与高层接管",
    status: "询盘中",
    intent: 98,
    stage: "推进集团采购决策",
    diagnosis: "12 条产线、预算已批准、COO 参会和集团采购共同构成高价值大单信号。",
    nextAction: "负责人 10 分钟内接管；AI 继续阿语承接并整理会议上下文。",
    guardrail: "AI 不独立报价，不替代负责人确认最终商务条件。",
    evidence: ["12 条产线", "预算已批准", "COO 参会", "集团采购"],
    memory: ["沟通语言：阿语", "地点：利雅得", "项目边界：集团级部署"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "17:32",
        text: "تم اعتماد الميزانية لاثني عشر خطًا، وسيحضر مدير العمليات اجتماع المجموعة.",
        translation: "12 条产线的预算已经批准，COO 将参加集团会议。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "17:32",
        text: "وصلت. سأجهز ملخصًا لنطاق الخطوط الاثني عشر والمتطلبات المحلية لفريق المشروع.",
        translation: "收到。我会为项目团队整理 12 条产线的范围和本地化要求。",
        state: "阿语自动承接",
      },
      {
        speaker: "ai",
        label: "内部动作",
        time: "17:33",
        text: "Account owner alerted. AI will preserve Arabic continuity and context, while final pricing stays with the owner.",
        translation: "已预警客户负责人。AI 仅负责阿语承接和上下文整理，最终报价由负责人完成。",
        state: "建议 10 分钟内接管",
      },
    ],
  },
  {
    shortTitle: "老客复购",
    result: "长期记忆",
    person: "Rina Prasetyo",
    company: "Nusantara Fulfilment",
    initials: "R",
    region: "印度尼西亚 · 雅加达",
    language: "英语",
    channel: "Instagram",
    channelTone: "instagram",
    lastSeen: "21 分钟前",
    node: "节点 6 · 老客户复购与长期记忆",
    status: "已成交",
    intent: 93,
    stage: "沿用一期基线",
    diagnosis: "系统已记住一期 SAT、最终参数与客户偏好，二期无需重新收集全部信息。",
    nextAction: "只确认新增箱型、输送线变化与二期启动日期。",
    guardrail: "沿用已验收基线，但不假设新增范围自动满足一期参数。",
    evidence: ["一期 SAT 已完成", "二期新增 3 套", "新增 2 种箱型", "移动 1 条输送线"],
    memory: ["最终参数：已归档", "客户偏好：先给变更清单", "一期节拍：已验收"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "17:21",
        text: "Phase two is approved for three more cells. We only add two box sizes and move one conveyor.",
        translation: "二期已批准增加三套设备，只新增两种箱型并移动一段输送线。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "17:21",
        text: "Great - we will keep the phase-one SAT baseline and only reconfirm the two new box sizes, the moved conveyor and your phase-two start date.",
        translation: "很好，我们会沿用一期 SAT 基线，只重新确认两种新增箱型、移动后的输送线和二期启动日期。",
        state: "已调用长期记忆",
      },
    ],
  },
  {
    shortTitle: "沉默唤醒",
    result: "自然重启",
    person: "Camila Torres",
    company: "Andes Homecare",
    initials: "C",
    region: "智利 · 圣地亚哥",
    language: "西语",
    channel: "Facebook",
    channelTone: "facebook",
    lastSeen: "沉默 33 天",
    node: "节点 7 · 跨时区沉默客户自然唤醒",
    status: "待唤醒",
    intent: 65,
    stage: "用新价值重新开口",
    diagnosis: "客户因仓库改造暂停，并非拒绝项目；机械催单会破坏关系。",
    nextAction: "发送能多释放 600 毫米通道的新版布局，不要求客户立即决策。",
    guardrail: "不制造紧迫感，不发送重复的“是否有进展”。",
    evidence: ["仓库改造延期", "已沉默 33 天", "旧方案通道不足", "新版释放 600 mm"],
    memory: ["暂停原因：仓库改造", "客户偏好：先看布局", "沟通语言：西语"],
    messages: [
      {
        speaker: "customer",
        label: "上次消息",
        time: "33 天前",
        text: "We need to pause while the warehouse layout is being rebuilt. Please do not chase a decision yet.",
        translation: "仓库布局还在改造，我们需要先暂停，请暂时不要催促做决定。",
      },
      {
        speaker: "ai",
        label: "AI 唤醒草稿",
        time: "今天 17:46",
        text: "Preparamos una version mas compacta que libera 600 mm de pasillo. Te la puedo enviar para que la guardes; no hace falta decidir nada ahora.",
        translation: "我们准备了一版更紧凑的布局，可多释放 600 毫米通道。我可以发给你留档，现在无需做决定。",
        state: "待人工确认发送",
      },
    ],
  },
];

export function AiSalesWorkspace() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showEvidence, setShowEvidence] = useState(true);
  const [replyGenerated, setReplyGenerated] = useState(false);
  const scenario = scenarios[activeIndex];

  const selectScenario = (index: number) => {
    setActiveIndex(index);
    setShowEvidence(true);
    setReplyGenerated(false);
  };

  return (
    <section className={styles.section} id="service" aria-labelledby="ai-sales-title">
      <div className={styles.serviceLead}>
        <div className={styles.intro} data-reveal>
          <span className={styles.eyebrow}>灵枢 AI 智能客服</span>
          <h2 id="ai-sales-title">客户随时来，<span>商机始终有人接</span></h2>
          <p>不用守着多个平台等消息。灵枢 AI 能以客户的语言秒级回应，记住每一次沟通，并把询盘持续推进到真正需要销售出场的时刻。</p>

          <div className={styles.leadBenefits} aria-label="智能客服带来的结果">
            <div><i>01</i><p><strong>客户不必等</strong><span>跨时区、跨平台，询盘进来就有回应</span></p></div>
            <div><i>02</i><p><strong>沟通不用重来</strong><span>自动记住需求、偏好与历史项目上下文</span></p></div>
            <div><i>03</i><p><strong>关键商机不掉线</strong><span>识别高意向与风险节点，及时交给销售</span></p></div>
          </div>

          <a className={styles.leadCta} href="#sales-workspace">看看 AI 如何接住一条询盘 <b aria-hidden="true">↓</b></a>
        </div>

        <div className={styles.characterVisual} data-reveal aria-label="灵小枢智能客服场景演示">
          <span className={styles.visualGrid} aria-hidden="true" />
          <span className={styles.visualShape} aria-hidden="true" />
          <Image className={styles.robot} src="/lingxiaoshu-hero-v2.png" alt="灵枢 AI 品牌机器人灵小枢" width={1280} height={1280} />

          <div className={styles.inquiryPrompt}>
            <span><i /> 新询盘 · 刚刚</span>
            <strong>反光铝件可以检测划伤吗？</strong>
            <small>TikTok · English · Dubai</small>
          </div>

          <div className={styles.memoryPrompt}>
            <span>已记住客户偏好</span>
            <strong>英文界面 · 本地集成</strong>
          </div>

          <div className={styles.handoffPrompt}>
            <span>高价值商机</span>
            <strong>98</strong>
            <small>建议销售接管</small>
          </div>

          <div className={styles.replyPrompt}><i /> 已秒级回应</div>
        </div>
      </div>

      <div className={styles.workspaceIntro} data-reveal>
        <span>从回应到推进</span>
        <h3>AI 不只回复消息，还知道下一步该做什么</h3>
        <p>选择不同场景，查看灵枢如何判断客户状态、生成回复，并在报价、承诺与大单节点切换人工。</p>
      </div>

      <div className={styles.workspace} id="sales-workspace" data-reveal>
        <aside className={styles.inbox} aria-label="智能销售演示场景">
          <div className={styles.inboxHeader}>
            <div><span>智能销售工作台</span><strong>演示收件箱</strong></div>
            <b>{scenarios.length}</b>
          </div>
          <div className={styles.inboxTabs} aria-hidden="true"><span className={styles.tabActive}>待处理</span><span>跟进中</span><span>已成交</span></div>
          <div className={styles.scenarioList}>
            {scenarios.map((item, index) => (
              <button
                className={index === activeIndex ? styles.scenarioActive : ""}
                key={item.shortTitle}
                onClick={() => selectScenario(index)}
                type="button"
                aria-pressed={index === activeIndex}
              >
                <span className={styles.avatar}>{item.initials}</span>
                <span className={styles.scenarioCopy}>
                  <strong>{item.shortTitle}<em>{item.result}</em></strong>
                  <small>{item.person} · {item.company}</small>
                </span>
                <span className={styles.scenarioMeta}><i className={styles[item.channelTone]} />{item.lastSeen}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.conversation}>
          <header className={styles.conversationHeader}>
            <div>
              <span>{scenario.person} · {scenario.company}</span>
              <small>{scenario.region} · {scenario.channel}</small>
            </div>
            <b>{scenario.node}</b>
            <span className={styles.localTime}>当地时间 11:58</span>
          </header>

          <div className={styles.contextStrip}>
            <span><i /> AI 正在持续理解这段对话</span>
            <div>{scenario.evidence.slice(0, 3).map((item) => <b key={item}>{item}</b>)}</div>
          </div>

          <div className={styles.messageStream} key={scenario.shortTitle}>
            {scenario.messages.map((message, index) => (
              <article className={message.speaker === "ai" ? styles.aiBubble : styles.customerBubble} key={`${message.time}-${index}`}>
                <header><strong>{message.label}</strong><time>{message.time}</time></header>
                <p>{message.text}</p>
                <footer><span>中文释义：{message.translation}</span>{message.state && <b>{message.state}</b>}</footer>
              </article>
            ))}
          </div>

          <div className={styles.composer}>
            <div>
              <span>{replyGenerated ? "当前场景的建议回复已生成" : "输入中文，AI 将按客户语言生成回复..."}</span>
              <small>{replyGenerated ? `已按${scenario.language}生成，并保留风险边界` : "已加载客户上下文与企业边界"}</small>
            </div>
            <button type="button" onClick={() => setReplyGenerated(true)} disabled={replyGenerated} aria-label="生成演示回复" title="生成演示回复">{replyGenerated ? "已生成" : "生成"}</button>
          </div>
        </div>

        <aside className={styles.insight}>
          <div className={styles.summaryHeader}>
            <div><span>客户判断摘要</span><small>{scenario.status}</small></div>
            <strong><b>{scenario.intent}</b><span>意向</span></strong>
          </div>

          <section className={styles.signalCard}>
            <header><span>AI 意向信号</span><b>{scenario.stage}</b></header>
            <p>{scenario.diagnosis}</p>
            <div className={styles.scoreTrack}><i style={{ width: `${scenario.intent}%` }} /></div>
          </section>

          <section className={styles.actionCard}>
            <span>下一步推进建议</span>
            <strong>{scenario.nextAction}</strong>
            <div>{scenario.evidence.slice(0, 3).map((item) => <b key={item}>{item}</b>)}</div>
          </section>

          <section className={styles.guardrailCard}>
            <span>AI 行为边界</span>
            <p>{scenario.guardrail}</p>
          </section>

          <section className={styles.memoryCard}>
            <button type="button" onClick={() => setShowEvidence((current) => !current)} aria-expanded={showEvidence}>
              <span>长期上下文记忆</span><b aria-hidden="true">{showEvidence ? "−" : "+"}</b>
            </button>
            {showEvidence && <ul>{scenario.memory.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        </aside>
      </div>

      <div className={styles.workspaceFooter} data-reveal>
        <span><i /> 7 个场景均为交互式产品能力演示</span>
        <div>
          <button type="button" onClick={() => selectScenario((activeIndex + scenarios.length - 1) % scenarios.length)} aria-label="上一个场景">←</button>
          <b>{String(activeIndex + 1).padStart(2, "0")} / {String(scenarios.length).padStart(2, "0")}</b>
          <button type="button" onClick={() => selectScenario((activeIndex + 1) % scenarios.length)} aria-label="下一个场景">→</button>
        </div>
      </div>
    </section>
  );
}
