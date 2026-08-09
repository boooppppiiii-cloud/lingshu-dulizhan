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

const megaGroups = [
  { title: "产品", items: [["/product", "产品总览"], ["/product/content-studio", "AI 内容工作台"], ["/product/social-publishing", "多平台发布"], ["/product/whatsapp-ai", "WhatsApp AI"], ["/product/lead-management", "客户与跟进"]] },
  { title: "行业方案", items: [["/solutions/beauty", "美妆个护"], ["/solutions/healthcare", "医药健康"], ["/solutions/building-materials", "建材"]] },
  { title: "平台", items: [["/platforms/tiktok", "TikTok"], ["/platforms/facebook", "Facebook"], ["/platforms/instagram", "Instagram"], ["/platforms/youtube", "YouTube"], ["/platforms/whatsapp", "WhatsApp"]] },
] as const;

function Header({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
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
          <div className={`nav-product-menu ${productOpen ? "is-open" : ""}`} onMouseLeave={() => setProductOpen(false)}>
            <button type="button" aria-expanded={productOpen} onClick={() => setProductOpen((value) => !value)} onMouseEnter={() => setProductOpen(true)}>
              产品 <span>⌄</span>
            </button>
            <div className="nav-product-panel">
              <div><small>一条连续链路</small><strong>从内容被看见，<br />到客户被接住。</strong><Link href="/product">进入产品 Tour →</Link></div>
              <div className="nav-mega-groups">{megaGroups.map(group=><section key={group.title}><strong>{group.title}</strong>{group.items.map(([href,label])=><Link key={href} href={href} onClick={()=>{setOpen(false);setProductOpen(false)}}>{label}<i>↗</i></Link>)}</section>)}</div>
            </div>
          </div>
          <Link href="/service" aria-current={pathname === "/service" ? "page" : undefined} onClick={() => setOpen(false)}>解决方案</Link>
          <Link href="/integrations" aria-current={pathname === "/integrations" ? "page" : undefined} onClick={() => setOpen(false)}>集成</Link>
          <Link href="/resources" aria-current={pathname === "/resources" ? "page" : undefined} onClick={() => setOpen(false)}>资源</Link>
          <Link href="/#faq" onClick={() => setOpen(false)}>常见问题</Link>
        </nav>
        <div className="nav-actions">
          <Link className="nav-demo-link" href="/#product">看产品</Link>
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

const productJourney = [
  { href: "/social", index: "01", label: "内容与发布" },
  { href: "/ai-service", index: "02", label: "WhatsApp AI" },
  { href: "/strategy", index: "03", label: "客户与跟进" },
] as const;

function NextChapter({ pathname }: { pathname: string }) {
  const current = productJourney.findIndex((item) => item.href === pathname);
  if (current < 0) return null;
  const next = productJourney[current + 1] ?? { href: "/demo?intent=trial", index: "04", label: "获取试用账号" };
  return (
    <aside className="next-chapter" aria-label="继续了解产品">
      <div className="container">
        <span>NEXT / {next.index}</span>
        <Link href={next.href}><small>继续下一步</small><strong>{next.label}</strong><i>→</i></Link>
      </div>
    </aside>
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
      <NextChapter pathname={pathname} />
      <Footer />
    </>
  );
}
