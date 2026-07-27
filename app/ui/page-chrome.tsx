"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="灵枢 AI 首页">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="brand-logo" src="/brand-logo-v2.png" alt="" width="42" height="42" />
      <span>灵枢 AI</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <div className="nav-actions">
          <Link className="button button-primary button-compact" href="/demo">
            预约演示
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
          <p>面向出海企业的社媒获客与智能客服一体化工作台。</p>
          <span className="footer-status">
            <i /> 产品持续迭代中
          </span>
        </div>
        <div>
          <strong>开始使用</strong>
          <Link href="/demo">预约产品演示</Link>
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
      <Header />
      <div className="page-transition" key={pathname}>
        {children}
      </div>
      <Footer />
    </>
  );
}
