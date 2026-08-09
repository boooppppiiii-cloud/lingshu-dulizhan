"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="灵枢 AI 首页">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="brand-logo" src="/brand-logo-v3.webp" alt="" width="42" height="42" />
      <span>灵枢 AI</span>
    </Link>
  );
}

const navItems = [
  ["/social", "社媒内容"],
  ["/ai-service", "WhatsApp AI"],
  ["/strategy", "询盘管理"],
  ["/service", "行业方案"],
  ["/integrations", "平台集成"],
] as const;

function Header({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <button className="nav-menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
          <span>{open ? "关闭" : "菜单"}</span><i aria-hidden="true" />
        </button>
        <nav id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="主要导航">
          {navItems.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="button button-primary button-compact" href="/demo?intent=trial">
            获取 3 天试用
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p>面向外贸厂家的海外社媒获客、WhatsApp AI 接待与销售跟进工作台。</p>
          <span className="footer-status">
            <i /> 产品持续迭代中
          </span>
        </div>
        <div>
          <strong>产品</strong>
          <Link href="/social">社媒内容与发布</Link>
          <Link href="/ai-service">WhatsApp AI 接待</Link>
          <Link href="/strategy">询盘与销售跟进</Link>
        </div>
        <div>
          <strong>开始使用</strong>
          <Link href="/demo?intent=trial">获取 3 天试用账号</Link>
          <Link href="/integrations">平台集成</Link>
          <Link href="/service">行业方案</Link>
        </div>
        <div>
          <strong>法律</strong>
          <Link href="/privacy">隐私政策</Link>
          <Link href="/terms">服务条款</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 灵枢 AI</span>
        <span>让内容带来客户，让对话走向成交。</span>
      </div>
    </footer>
  );
}

export function PageChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
      <a className="skip-link" href="#main-content">跳至主要内容</a>
      <Header pathname={pathname} />
      <div id="main-content" className="page-transition" key={pathname} tabIndex={-1}>
        {children}
      </div>
      <Footer />
    </>
  );
}
