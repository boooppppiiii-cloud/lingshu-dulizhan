"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const productLinks = [
  {
    index: "01",
    href: "/social",
    title: "社媒增长",
    note: "洞察、创作、发布与归因",
  },
  {
    index: "02",
    href: "/ai-service",
    title: "智能客服",
    note: "接待、分级、交接与跟进",
  },
  {
    index: "03",
    href: "/strategy",
    title: "AI 智囊",
    note: "多模型协同与经营决策",
  },
];

const navLinks = [
  { href: "/integrations", label: "集成" },
  { href: "/#scenarios", label: "解决方案" },
  { href: "/#resources", label: "资源" },
];

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="灵枢 AI 首页">
      <img className="brand-logo" src="/brand-logo-v2.png" alt="" />
      <span>灵枢 AI</span>
    </Link>
  );
}

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="主导航">
          <div
            className="nav-dropdown"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((value) => !value)}
            >
              产品 <span aria-hidden="true">⌄</span>
            </button>
            <div className={`product-menu ${productOpen ? "is-open" : ""}`}>
              {productLinks.map((item) => (
                <Link
                  className={`product-link ${pathname === item.href ? "is-active" : ""}`}
                  href={item.href}
                  key={item.href}
                >
                  <span className="product-link-index">{item.index}</span>
                  <span className="product-link-copy">
                    <strong>{item.title}</strong>
                    <small>{item.note}</small>
                  </span>
                  <span className="product-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((item) => (
            <Link
              className={pathname === item.href ? "is-active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#login">
            登录
          </a>
          <Link className="button button-primary button-compact" href="/demo">
            预约演示
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <p className="eyebrow">产品</p>
        {productLinks.map((item) => (
          <Link className="mobile-link" href={item.href} key={item.href}>
            {item.title} <span>↗</span>
          </Link>
        ))}
        <div className="mobile-divider" />
        {navLinks.map((item) => (
          <Link className="mobile-link" href={item.href} key={item.href}>
            {item.label} <span>↗</span>
          </Link>
        ))}
        <Link className="button button-primary mobile-cta" href="/demo">
          预约产品演示
        </Link>
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
          <strong>产品</strong>
          <Link href="/social">社媒增长</Link>
          <Link href="/ai-service">智能客服</Link>
          <Link href="/strategy">AI 智囊</Link>
          <Link href="/integrations">平台集成</Link>
        </div>
        <div>
          <strong>开始使用</strong>
          <Link href="/demo">预约演示</Link>
          <Link href="/#scenarios">解决方案</Link>
          <Link href="/#faq">常见问题</Link>
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
      <Header key={pathname} />
      <div className="page-transition" key={pathname}>
        {children}
      </div>
      <Footer />
    </>
  );
}
