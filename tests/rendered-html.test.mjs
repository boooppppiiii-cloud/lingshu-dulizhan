import assert from "node:assert/strict";
import test from "node:test";

const productionTitle = "灵枢 AI｜外贸厂家的 AI 海外社媒获客系统";
const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])[^>]*>/i;

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${encodeURIComponent(path)}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the production homepage metadata and positioning", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, new RegExp(`<title>${productionTitle}</title>`));
  assert.match(html, /外贸厂家的 AI 海外社媒获客系统/);
  assert.match(html, /把产品资料变成多语言海外内容/);
  assert.match(html, /https:\/\/official\.lingshu\.site/);
  assert.match(html, /SoftwareApplication/);
  assert.match(html, /FAQPage/);
  assert.match(html, /获取 3 天试用账号/);
  assert.match(html, /套餐价格暂不公开|暂不公开价格/);
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

const routeExpectations = [
  ["/social", "把工厂产品资料，变成持续获客的海外社媒内容"],
  ["/ai-service", "让每一条 WhatsApp 询盘，都能及时得到专业接待"],
  ["/strategy", "从询盘来源到销售跟进，不再依赖业务员自己记"],
  ["/service", "先理解行业，再把内容、询盘和销售连起来"],
  ["/integrations", "连接客户所在的平台，也连接你的销售流程"],
  ["/demo", "想用你的产品试一次？"],
  ["/privacy", "隐私政策"],
  ["/terms", "服务条款"],
];

for (const [path, expectedContent] of routeExpectations) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(expectedContent));
    assert.doesNotMatch(html, developmentPreviewMeta);
  });
}

test("publishes verified product evidence and explicit case-study labels", async () => {
  const [social, service, strategy] = await Promise.all([
    render("/social").then((response) => response.text()),
    render("/service").then((response) => response.text()),
    render("/strategy").then((response) => response.text()),
  ]);
  assert.match(social, /素材库智能生成/);
  assert.match(social, /已从正式项目验证/);
  assert.match(social, /真实产品界面/);
  assert.match(service, /美妆个护/);
  assert.match(service, /医药健康/);
  assert.match(service, /建材/);
  assert.match(service, /Mock 企业、客户与流程 · 非真实客户结果/);
  assert.match(strategy, /客户判断必须有依据/);
  assert.match(strategy, /意向信号、客户优先级和人工交接规则/);
});

test("requires explicit privacy consent on the trial form", async () => {
  const response = await render("/demo?intent=trial");
  const html = await response.text();
  assert.match(html, /先用 3 天，再决定是否合适/);
  assert.match(html, /<input(?=[^>]*name="隐私同意")(?=[^>]*required)[^>]*>/);
  assert.match(html, /套餐价格暂不公开/);
  assert.match(html, /请勿提交密码、支付信息或不必要的敏感信息/);
});

test("legal pages disclose AI, mock, pricing and platform boundaries", async () => {
  const [privacy, terms] = await Promise.all([
    render("/privacy").then((response) => response.text()),
    render("/terms").then((response) => response.text()),
  ]);
  assert.match(privacy, /我们不会仅因你提交预约表单，就将联系方式出售给第三方/);
  assert.match(privacy, /请勿通过公开表单提交密码/);
  assert.match(terms, /网站暂不公开套餐价格/);
  assert.match(terms, /模拟案例与示例数据/);
  assert.match(terms, /不代表其与灵枢存在官方合作/);
});

test("publishes the production sitemap and robots directives", async () => {
  const [sitemapResponse, robotsResponse] = await Promise.all([
    render("/sitemap.xml"),
    render("/robots.txt"),
  ]);
  assert.equal(sitemapResponse.status, 200);
  assert.equal(robotsResponse.status, 200);

  const sitemap = await sitemapResponse.text();
  const robots = await robotsResponse.text();
  for (const [path] of routeExpectations) {
    assert.match(sitemap, new RegExp(`https://official\\.lingshu\\.site${path}`));
  }
  assert.match(sitemap, /https:\/\/official\.lingshu\.site<\/loc>/);
  assert.match(robots, /Sitemap: https:\/\/official\.lingshu\.site\/sitemap\.xml/);
  assert.match(robots, /Host: https:\/\/official\.lingshu\.site/);
});
