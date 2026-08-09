type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export function StructuredData({ data }: { data: JsonLd }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const siteUrl = "https://official.lingshu.site";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "灵枢 AI",
  url: siteUrl,
  inLanguage: "zh-CN",
  description: "面向外贸厂家的 AI 海外社媒获客系统，连接多语言内容、多平台发布、WhatsApp 询盘接待与销售跟进。",
};

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "灵枢 AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    inLanguage: "zh-CN",
    description: "帮助外贸厂家将产品资料转化为多语言海外社媒内容，并通过 WhatsApp AI 接待、分级询盘和销售交接。",
    audience: { "@type": "BusinessAudience", audienceType: "外贸厂家与海外销售团队" },
    featureList: ["企业知识驱动的内容生成", "多平台内容排期与发布", "WhatsApp AI 询盘接待", "询盘来源记录", "BANT 证据与人工接管"],
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })),
  };
}
