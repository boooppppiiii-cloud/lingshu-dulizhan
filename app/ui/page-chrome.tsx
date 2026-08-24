"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Logo({ english = false }: { english?: boolean }) {
  return (
    <Link className="brand" href={english ? "/en" : "/"} aria-label={english ? "LingShu AI Home" : "灵枢 AI 首页"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="brand-logo" src="/brand-logo-v2.png" alt="" width="42" height="42" />
      <span>灵枢 AI</span>
    </Link>
  );
}

function Header({ english = false }: { english?: boolean }) {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo english={english} />
        <nav className="desktop-nav" aria-label={english ? "Main navigation" : "主页导航"}>
          <Link href={english ? "/en#creative" : "/#growth"}>{english ? "Creative workflow" : "创意分析"}</Link>
          <Link href={english ? "/en#service" : "/#service"}>{english ? "Lead handling" : "询盘承接"}</Link>
          <Link href={english ? "/en/demo" : "/demo"}>{english ? "Book a demo" : "申请体验"}</Link>
          <Link href={english ? "/" : "/en"}>{english ? "中文" : "EN"}</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer({ english = false }: { english?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Logo english={english} />
          <p>{english ? "Turn global content into qualified business opportunities." : "让海外内容持续变成高价值商机。"}</p>
          <span className="footer-status"><i /> {english ? "Product in active development" : "产品持续迭代中"}</span>
        </div>
        <div>
          <strong>{english ? "Product" : "产品"}</strong>
          <Link href={english ? "/en#creative" : "/#growth"}>{english ? "Creative workflow" : "创意分析"}</Link>
          <Link href={english ? "/en#service" : "/#service"}>{english ? "AI lead assistant" : "AI 客服"}</Link>
          <Link href={english ? "/en/demo" : "/demo"}>{english ? "Book a demo" : "申请体验"}</Link>
        </div>
        <div>
          <strong>{english ? "Legal" : "法律"}</strong>
          <Link href={english ? "/en/legal" : "/legal"}>{english ? "Trust center" : "法律与信任中心"}</Link>
          <Link href={english ? "/en/privacy" : "/privacy"}>{english ? "Privacy policy" : "隐私政策"}</Link>
          <Link href={english ? "/en/terms" : "/terms"}>{english ? "Terms of service" : "服务条款"}</Link>
          <Link href={english ? "/en/cookies" : "/cookies"}>{english ? "Cookie notice" : "Cookie 说明"}</Link>
          <Link href={english ? "/en/acceptable-use" : "/acceptable-use"}>{english ? "Acceptable use" : "内容安全政策"}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 灵小枢（杭州）科技有限公司 · 19653282176@163.com</span>
        <span>{english ? "Creative intelligence · Global distribution · Lead handling" : "内容机会 · 全球分发 · 询盘承接 · 商机识别"}</span>
      </div>
    </footer>
  );
}

export function PageChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Header english={english} />
      <div className={"page-transition" + (pathname === "/" || pathname === "/en" ? " home-page-transition" : "")} key={pathname}>
        {children}
      </div>
      <Footer english={english} />
    </>
  );
}
