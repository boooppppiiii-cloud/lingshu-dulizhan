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
    shortTitle: "24h 秒回",
    result: "智能识别语种",
    person: "Fatima Al-Mansouri",
    company: "Noura Retail",
    initials: "F",
    region: "阿联酋 · 迪拜",
    language: "阿语",
    channel: "WhatsApp",
    channelTone: "whatsapp",
    lastSeen: "刚刚",
    node: "节点 1 · 24 小时秒回与客户语种识别",
    status: "新询盘",
    intent: 74,
    stage: "阿语已识别 · 秒级接待",
    diagnosis: "客户在北京时间凌晨发来阿语询盘，AI 已自动识别语种，并在 2 秒内以阿语回应。",
    nextAction: "继续用阿语确认采购数量、交付城市和目标时间，完成首轮资格判断。",
    guardrail: "仅回答已验证的产品信息；价格、库存与交期需确认后给出。",
    evidence: ["2 秒内响应", "已识别阿语", "WhatsApp 新询盘", "咨询 MOQ"],
    memory: ["首选语言：阿语", "所在市场：阿联酋", "关注信息：MOQ 与交期"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "02:13",
        text: "مرحبًا، هل يمكنني الحصول على الكتالوج؟ وما هو الحد الأدنى للطلب والتوصيل إلى دبي؟",
        translation: "你好，可以发我产品目录吗？最低起订量是多少，能否配送到迪拜？",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "02:13",
        text: "مرحبًا بك! بالتأكيد. سأرسل لك الكتالوج المناسب. ما المنتج والكمية التقريبية التي تحتاجها؟",
        translation: "欢迎！当然可以。我会为你发送合适的目录。请问你需要哪类产品，预计采购多少？",
        state: "已识别阿语 · 2 秒回复",
      },
      {
        speaker: "customer",
        label: "客户补充",
        time: "02:15",
        text: "نبحث عن 200 وحدة للمتجر الجديد ونحتاج التسليم قبل نهاية الشهر.",
        translation: "我们为新门店寻找 200 件产品，希望月底前交付。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "02:15",
        text: "تم تسجيل الكمية وموعد التسليم. سأتحقق من المخزون والمدة مع الفريق قبل تأكيد العرض.",
        translation: "已记录数量和交付时间。我会先与团队核实库存与周期，再确认方案。",
        state: "已持续用阿语承接",
      },
    ],
  },
  {
    shortTitle: "千人千面",
    result: "进度一目了然",
    person: "Anna Keller",
    company: "VoltWerk GmbH",
    initials: "A",
    region: "德国 · 斯图加特",
    language: "英语",
    channel: "Email",
    channelTone: "email",
    lastSeen: "4 分钟前",
    node: "节点 2 · 个性化跟进与销售进度可视",
    status: "方案评估",
    intent: 82,
    stage: "技术已确认 · 等待财务复核",
    diagnosis: "Anna 关注系统集成，采购关注报价范围，财务关注回报周期；AI 已按角色生成不同信息，并定位当前销售阶段。",
    nextAction: "向 Anna 发送 OPC UA 技术清单，向采购补齐报价范围，并安排周五的 ROI 评审。",
    guardrail: "仅根据明确的业务角色和已知偏好做个性化，不推断敏感属性。",
    evidence: ["技术评估已通过", "采购已阅报价", "财务待复核", "周五 ROI 评审"],
    memory: ["角色：工程经理", "偏好：先看技术清单", "关注：OPC UA 与换型"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "09:08",
        text: "The technical fit looks good. I need the OPC UA checklist, while purchasing needs the exact scope and finance wants the payback period.",
        translation: "技术匹配度不错。我需要 OPC UA 清单，采购需要明确报价范围，财务则关注回报周期。",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "09:08",
        text: "I will prepare three focused views: an integration checklist for you, a scope comparison for purchasing, and a payback summary for finance.",
        translation: "我会分别准备三份重点内容：给你的集成清单、给采购的范围对照，以及给财务的回报摘要。",
        state: "已按角色个性化",
      },
      {
        speaker: "ai",
        label: "进度同步",
        time: "09:09",
        text: "Technical review is complete, purchasing has opened the proposal, and finance review is the next milestone. A Friday review is recommended.",
        translation: "技术评估已完成，采购已查看方案，下一节点是财务复核。建议安排周五评审。",
        state: "销售阶段已更新",
      },
    ],
  },
  {
    shortTitle: "一键建档",
    result: "不错过潜客",
    person: "Lucas Pereira",
    company: "Atlas Distribuição",
    initials: "L",
    region: "巴西 · 圣保罗",
    language: "葡语",
    channel: "Instagram",
    channelTone: "instagram",
    lastSeen: "1 分钟前",
    node: "节点 3 · 跨平台潜客识别与一键建档",
    status: "待跟进",
    intent: 68,
    stage: "新线索已建档 · 待销售认领",
    diagnosis: "客户通过 Instagram 私信留下公司、邮箱和合作意向；AI 已完成信息提取、去重并生成潜客档案。",
    nextAction: "分配给拉美区域销售，15 分钟内继续跟进，并补充应用场景与年度采购量。",
    guardrail: "建档仅保存业务必要信息；营销触达前检查授权状态与退订选择。",
    evidence: ["Instagram 私信", "公司邮箱已提取", "已完成去重", "潜客编号 LEAD-2841"],
    memory: ["地区：巴西圣保罗", "沟通语言：葡语", "需求：渠道合作"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "16:41",
        text: "Olá, representamos distribuidores no Brasil. Pode enviar informações sobre parceria para lucas@atlas.example?",
        translation: "你好，我们在巴西代理多个分销渠道。可以把合作资料发到 lucas@atlas.example 吗？",
      },
      {
        speaker: "ai",
        label: "AI 回复",
        time: "16:41",
        text: "Obrigado, Lucas. Registrei sua empresa, região e interesse em parceria. Qual categoria e volume anual vocês atendem hoje?",
        translation: "谢谢你，Lucas。已记录公司、所在区域和合作意向。请问你们目前覆盖哪些品类，年度业务量大约是多少？",
        state: "信息已结构化",
      },
      {
        speaker: "ai",
        label: "建档完成",
        time: "16:42",
        text: "O contato LEAD-2841 foi criado, verificado contra duplicados e encaminhado à equipe da América Latina.",
        translation: "潜客 LEAD-2841 已创建，完成重复检查，并分配给拉美区域团队。",
        state: "一键建档成功",
      },
    ],
  },
  {
    shortTitle: "数据安全",
    result: "守护隐私边界",
    person: "Sofia Ramirez",
    company: "MedNova Systems",
    initials: "S",
    region: "西班牙 · 巴塞罗那",
    language: "英语",
    channel: "Email",
    channelTone: "email",
    lastSeen: "8 分钟前",
    node: "节点 4 · 敏感信息识别与隐私边界守护",
    status: "安全校验",
    intent: 86,
    stage: "敏感字段已拦截 · 可安全回复",
    diagnosis: "客户准备上传包含患者姓名与病例编号的测试文件；AI 已识别敏感信息并阻止其进入普通对话和长期记忆。",
    nextAction: "引导客户使用脱敏样本和获批的安全通道，仅收集验证所需的最小数据。",
    guardrail: "普通对话不接收患者身份信息、账号凭据或机密文件；严格执行最小权限与最少留存。",
    evidence: ["检测到患者标识", "附件未入库", "已提示脱敏", "需使用安全通道"],
    memory: ["仅保留：医疗行业", "敏感字段：不写入记忆", "访问：质量负责人可见"],
    messages: [
      {
        speaker: "customer",
        label: "客户消息",
        time: "10:16",
        text: "I will upload a spreadsheet with patient names and case IDs for the test. Can you load it here?",
        translation: "我准备上传一份包含患者姓名和病例编号的表格用于测试，可以直接放在这里吗？",
      },
      {
        speaker: "ai",
        label: "安全拦截",
        time: "10:16",
        text: "Please do not upload patient names or other identifying data here. We can complete the test with de-identified samples through the approved secure channel.",
        translation: "请不要在这里上传患者姓名或其他身份信息。我们可以通过获批的安全通道，使用脱敏样本完成测试。",
        state: "敏感数据已拦截",
      },
      {
        speaker: "ai",
        label: "安全方案",
        time: "10:17",
        text: "For validation, we only need anonymous sample IDs, required fields and acceptance criteria. Sensitive columns should be removed before transfer.",
        translation: "验证仅需要匿名样本编号、必要字段和验收标准，传输前应删除敏感列。",
        state: "隐私边界已生效",
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
          <div className={styles.leadCopy}>
            <span className={styles.eyebrow}>灵枢 AI 智能客服</span>
            <h2 id="ai-sales-title">打通社媒获客的<span>最后一公里</span></h2>
            <p>不用守着多个平台等消息。灵枢 AI 能以客户的语言秒级回应，记住每一次沟通，并把询盘持续推进到真正需要销售出场的时刻。</p>
          </div>

          <div className={styles.leadBenefits} aria-label="智能客服带来的结果">
            <div><i>01</i><p><strong>金牌销售</strong><span>百万行业销售语料，订单轻松成交</span></p></div>
            <div><i>02</i><p><strong>经营助手</strong><span>海外热点/资讯推荐，助力对话破冰</span></p></div>
            <div><i>03</i><p><strong>私域专家</strong><span>客户生命周期管理，老客批量唤醒</span></p></div>
          </div>

          <div className={styles.leadAction}>
            <a className={styles.leadCta} href="#sales-workspace">看看 AI 如何接住一条询盘 <b aria-hidden="true">↓</b></a>
          </div>
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
        <p>选择四个功能场景，查看灵枢如何识别语种、个性化推进、自动建档，并在敏感数据出现时守住隐私边界。</p>
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
        <span><i /> {scenarios.length} 个场景均为交互式产品能力演示</span>
        <div>
          <button type="button" onClick={() => selectScenario((activeIndex + scenarios.length - 1) % scenarios.length)} aria-label="上一个场景">←</button>
          <b>{String(activeIndex + 1).padStart(2, "0")} / {String(scenarios.length).padStart(2, "0")}</b>
          <button type="button" onClick={() => selectScenario((activeIndex + 1) % scenarios.length)} aria-label="下一个场景">→</button>
        </div>
      </div>
    </section>
  );
}
