import Link from "next/link";
import type { ReactNode } from "react";
import { CtaBand } from "./site-components";
import { StructuredData, faqSchema } from "./structured-data";

export type SeoLandingData = {
  eyebrow: string; title: string; definition: string; audience: string;
  outcomes: Array<[string, string]>; questions: Array<[string, string]>;
  next?: { href: string; label: string };
};

export function SeoLanding({ data, media }: { data: SeoLandingData; media?: ReactNode }) {
  return <main className="seo-landing">
    <StructuredData data={faqSchema(data.questions.map(([question,answer])=>({question,answer})))} />
    <section className="seo-hero"><div className="container seo-hero-grid"><div><span>{data.eyebrow}</span><h1>{data.title}</h1><p>{data.definition}</p><div className="seo-hero-actions"><Link href="/demo?intent=trial">获取 3 天试用 ↗</Link><a href="#answers">查看工作方式 ↓</a></div></div><div className="seo-fact-card"><small>适合谁</small><strong>{data.audience}</strong><span>产品事实 · 更新于 2026-08-09</span></div></div></section>
    <section className="seo-outcomes"><div className="container">{data.outcomes.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    {media ? <section className="seo-media"><div className="container">{media}</div></section> : null}
    <section className="seo-answers" id="answers"><div className="container seo-answers-grid"><div><span>DIRECT ANSWERS</span><h2>客户常问</h2></div><div>{data.questions.map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div></section>
    {data.next ? <div className="seo-next"><div className="container"><span>继续了解</span><Link href={data.next.href}>{data.next.label} →</Link></div></div> : null}
    <CtaBand />
  </main>;
}
