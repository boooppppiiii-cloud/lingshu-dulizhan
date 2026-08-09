import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading } from "../ui/site-components";
import { StructuredData, breadcrumbSchema } from "../ui/structured-data";

export const metadata: Metadata = { title: "外贸厂家行业解决方案", description: "面向美妆个护、医药健康和建材厂家的海外社媒内容、WhatsApp AI 询盘接待与销售跟进演示方案。", alternates: { canonical: "/service" } };

const industries = [
  {tag:"BEAUTY & PERSONAL CARE",title:"美妆个护",text:"围绕成分、肤感、使用场景、私标包装和快速打样生成内容；询盘中确认目标市场、渠道、MOQ、包装、标签语言、认证和样品需求。",topics:["私标与 OEM/ODM","多语言包装","样品与 MOQ","功效表达边界"]},
  {tag:"PHARMA & HEALTHCARE",title:"医药健康",text:"围绕产品教育、生产与质量流程建立专业表达；产品分类、认证、法规和医疗功效问题进入严格的事实核实与人工接管。",topics:["专业产品教育","文件与认证核验","目标国家规则","高风险人工确认"]},
  {tag:"BUILDING MATERIALS",title:"建材",text:"用工程场景、性能对比、安装过程与供应能力获得采购关注；询盘中确认工程类型、规格、标准、数量、包装、港口和交期。",topics:["工程应用场景","规格与性能","安装过程","供应与交付"]},
];

export default function ServicePage(){return <main>
  <StructuredData data={breadcrumbSchema([{name:"首页",path:"/"},{name:"行业解决方案",path:"/service"}])} />
  <PageHero eyebrow="INDUSTRY SOLUTIONS" title="先理解行业，再把内容、询盘和销售连起来" description="灵枢第一阶段重点打磨美妆个护、医药健康和建材三类外贸场景。以下内容为模拟演示，用于展示产品适配方式，不代表真实客户结果。" visualTitle="行业知识 → 内容 → 询盘规则" visualNote="三个可切换的 Mock 企业、产品、内容和客户接待场景" />
  <section className="section" id="details"><div className="container"><SectionHeading eyebrow="3 INDUSTRY PLAYBOOKS" title="同一套产品能力，不复制同一套行业话术" description="每个行业使用不同的采购角色、内容主题、询盘字段和风险边界。" />
    <div className="industry-detail-grid">{industries.map((item,index)=><article className="industry-detail-card" data-reveal key={item.title}><span>{String(index+1).padStart(2,"0")} / {item.tag}</span><h2>{item.title}</h2><p>{item.text}</p><ul>{item.topics.map(topic=><li key={topic}>{topic}</li>)}</ul><small>模拟演示场景 · 非真实客户结果</small></article>)}</div>
  </div></section>
  <section className="section control-section"><div className="container"><SectionHeading eyebrow="WHAT CHANGES BY INDUSTRY" title="真正变化的是企业知识、采购问题与 AI 边界" align="center" /><div className="process-numbers">{[["01","目标采购角色"],["02","内容主题矩阵"],["03","询盘分级字段"],["04","人工核实规则"]].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></div></section>
  <section className="section mock-proof-section"><div className="container"><SectionHeading eyebrow="MOCK JOURNEYS" title="三个行业，一套可验证的演示结构" description="以下输入、客户和结果均为模拟数据，只用于展示产品如何根据行业切换问题和风险边界。" align="center" /><div className="mock-journey-grid">{[
    ["美妆个护","OEM 护肤品 · 东南亚","成分教育 → 私标包装 → WhatsApp","询问渠道、MOQ、标签语言与样品","功效承诺、配方确认与正式报价"],
    ["医药健康","健康产品 · 中东","产品教育 → 文件能力 → WhatsApp","询问企业身份、目标国家与注册需求","医疗功效、法规、认证与专业建议"],
    ["建材","建筑饰面材料 · 东南亚","工程案例 → 安装过程 → WhatsApp","询问项目、规格、标准、港口与时间","非标参数、工程承诺与付款条款"],
  ].map(([industry,background,content,inquiry,handoff])=><article key={industry} data-reveal><span>模拟企业</span><h3>{industry}</h3><strong>{background}</strong><dl><div><dt>内容链路</dt><dd>{content}</dd></div><div><dt>AI 收集</dt><dd>{inquiry}</dd></div><div><dt>转人工</dt><dd>{handoff}</dd></div></dl><small>Mock 企业、客户与流程 · 非真实客户结果</small></article>)}</div></div></section>
  <CtaBand title="选择你的行业，获取 3 天试用账号" description="联系我们说明产品、目标市场和当前平台，我们会协助准备对应的演示企业与试用环境。" />
  </main>}
