import type { Metadata } from "next";
import { StructuredData, breadcrumbSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "服务条款", description: "了解灵枢 AI 网站、产品演示、3 天试用、AI 输出、第三方平台和模拟案例的使用规则。", alternates: { canonical: "/terms" } };

const sections = [
  {title:"网站与产品介绍",content:<p>本网站用于介绍灵枢 AI 的产品能力、使用场景、平台接入方式和服务流程。网站内容不构成对特定曝光、询盘数量、销售机会或成交金额的保证。</p>},
  {title:"3 天试用",content:<p>试用账号需要向团队申请并由顾问协助开通，试用期为 3 天。具体功能、额度、起止时间和到期处理以开通时的说明为准。我们可以基于安全、合规、系统容量或服务适配情况决定是否提供试用。</p>},
  {title:"用户责任",content:<><p>你应提供真实、准确且有权使用的企业和产品资料，妥善管理账号与授权，并对发布内容、报价、承诺和对外沟通进行必要审核。</p><p>你应遵守目标市场法律、知识产权规则和第三方平台政策，不得利用服务发送垃圾信息、虚假宣传、侵权或违法内容。</p></>},
  {title:"企业资料与知识产权",content:<p>你保留对合法提供的企业资料、商标和素材享有的权利，并允许我们仅在提供演示、试用和双方约定服务所需范围内处理。灵枢 AI 网站、软件、界面、品牌与相关技术的权利归相应权利人所有。</p>},
  {title:"AI 输出与人工审核",content:<p>AI 输出可能不完整、不准确或不适用于特定市场。产品参数、认证、医疗功效、法规、报价、折扣、合同、付款、交期和其他重要承诺必须由有权限的人员核实。企业应根据风险选择只提醒、草稿确认或低风险自动回复。</p>},
  {title:"模拟案例与示例数据",content:<p>网站中标记为 Mock、模拟演示或示例数据的企业、客户、对话、播放量、意向分和结果仅用于说明产品流程，不是真实客户案例、客户评价或业绩承诺。</p>},
  {title:"第三方平台",content:<p>第三方平台能力可能受到账号类型、地区、开发者审核、接口变化、配额、费用和平台政策影响。平台名称或 Logo 仅用于说明兼容场景，不代表其与灵枢存在官方合作、认可或背书关系。</p>},
  {title:"价格与付款",content:<p>网站暂不公开套餐价格。正式服务的功能范围、使用额度、第三方费用、付款方式和退款规则，以双方最终确认的合同、订单或报价单为准。</p>},
  {title:"禁止使用",content:<p>不得利用灵枢 AI 从事违法、欺诈、侵权、垃圾营销、虚构产品事实、绕过平台与安全限制、干扰服务，或未经授权处理个人信息和客户数据的活动。</p>},
  {title:"服务变更与责任边界",content:<p>我们可能因产品迭代、安全、平台规则或法律要求调整服务。免费演示和试用按当前可用状态提供；我们不保证社媒曝光、询盘或成交结果，也不对第三方平台自身的中断或规则变化作出保证。正式服务责任以双方商业文件及适用法律为准。</p>},
];

export default function TermsPage() { return <main className="legal-page"><StructuredData data={breadcrumbSchema([{name:"首页",path:"/"},{name:"服务条款",path:"/terms"}])} /><div className="container legal-shell"><span className="eyebrow">LEGAL</span><h1>服务条款</h1><p className="legal-updated">更新日期：2026 年 8 月 9 日</p><p className="legal-lead">本条款适用于访问灵枢 AI 网站、申请产品演示和使用试用服务。正式商业条款以双方最终确认的文件为准。</p>{sections.map(({title,content})=><section key={title}><h2>{title}</h2>{content}</section>)}<section><h2>联系我们</h2><p>如对这些条款有疑问，请发送邮件至 <a href="mailto:hello@lingshu.ai">hello@lingshu.ai</a>。</p></section></div></main>; }
