import type { Metadata } from "next";
import { StructuredData, breadcrumbSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "隐私政策", description: "了解灵枢 AI 官网、产品演示与 3 天试用申请过程中收集的信息、使用目的和你的选择。", alternates: { canonical: "/privacy" } };

const sections = [
  {title:"我们收集的信息", content:<><p>当你申请 3 天试用、预约演示或联系我们时，我们可能收集姓名、公司或品牌、工作邮箱、手机或 WhatsApp、产品类别、目标市场、官网链接、当前平台和你主动填写的业务需求。</p><p>请勿通过公开表单提交密码、支付信息、身份证件、患者信息、医疗记录或其他不必要的敏感信息。</p></>},
  {title:"信息的使用", content:<><p>这些信息用于联系你、了解业务需求、准备产品演示、审核和开通试用账号、提供售前支持，以及保障网站和表单安全。</p><p>我们不会仅因你提交预约表单，就将联系方式出售给第三方。</p></>},
  {title:"表单与服务商", content:<p>网站表单可能通过第三方表单和邮件服务发送给灵枢团队。我们仅允许服务商在提供相关技术服务所需的范围内处理信息，并会根据实际服务配置更新本政策。</p>},
  {title:"平台授权与企业资料", content:<><p>如果你后续选择接入 Facebook、Instagram、TikTok、YouTube、WhatsApp、Shopify 或其他第三方平台，我们会在接入前说明所需权限、可执行动作和撤回方式。</p><p>演示或试用中提供的产品资料、FAQ、图片、视频和业务规则仅应用于准备和提供相关服务。请确保你有权提供这些资料，并在上传客户信息前完成必要授权或脱敏。</p></>},
  {title:"Cookies 与访问统计", content:<p>网站仅应启用维持功能、安全和了解页面使用情况所需的技术。如果后续启用新的分析、广告或归因工具，我们会根据实际使用情况提供相应说明和选择方式。</p>},
  {title:"共享、保存与安全", content:<><p>我们只会在提供托管、表单、邮件、安全或客户支持服务所必需，或法律要求的情况下共享必要信息。信息会在完成咨询、演示、试用及履行相关义务所需的期限内保存。</p><p>我们会采取与风险相适应的管理和技术措施，但任何互联网系统都不能保证绝对安全。</p></>},
  {title:"你的选择与权利", content:<p>你可以联系我们请求查询、更正或删除通过网站提交的信息，也可以撤回后续联系许可。为保护信息安全，我们可能需要验证请求者身份。</p>},
  {title:"未成年人", content:<p>灵枢 AI 面向企业用户，不以未成年人为目标用户。如果你认为未成年人向我们提交了个人信息，请联系我们处理。</p>},
  {title:"政策更新", content:<p>我们可能根据服务和法律要求更新本政策。重要变化会通过网站或其他适当方式提示，并更新本页面日期。</p>},
];

export default function PrivacyPage() { return <main className="legal-page"><StructuredData data={breadcrumbSchema([{name:"首页",path:"/"},{name:"隐私政策",path:"/privacy"}])} /><div className="container legal-shell"><span className="eyebrow">LEGAL</span><h1>隐私政策</h1><p className="legal-updated">更新日期：2026 年 8 月 9 日</p><p className="legal-lead">本政策说明灵枢 AI 团队在运营网站、安排产品演示和提供试用服务时，如何处理你主动提交的信息。</p>{sections.map(({title,content})=><section key={title}><h2>{title}</h2>{content}</section>)}<section><h2>联系我们</h2><p>如需查询、更正或删除你提交的信息，请发送邮件至 <a href="mailto:hello@lingshu.ai">hello@lingshu.ai</a>。</p></section></div></main>; }
