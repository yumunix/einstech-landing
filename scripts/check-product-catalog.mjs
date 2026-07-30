import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const modeArg = process.argv.find((arg) => arg.startsWith("--mode="));
const mode = modeArg?.split("=")[1] || "weekly";
const writeBaseline = process.argv.includes("--write-baseline");
const catalogPath = path.join(root, "data/product-catalog/catalog.json");
const statePath = path.join(root, "data/product-catalog/source-baselines.json");
const reportDir = path.join(root, "reports");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
let state = { generatedAt: null, fingerprints: {} };
try { state = JSON.parse(await readFile(statePath, "utf8")); } catch {}

const now = new Date();
const today = now.toISOString().slice(0, 10);
const checkContent = ["monthly", "quarterly", "annual"].includes(mode);
const checkDue = ["quarterly", "annual"].includes(mode);
const results = [];

function meaningfulText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--([\s\S]*?)-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500000);
}

async function inspectUrl(url, content = false) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(url, { redirect: "follow", signal: controller.signal, headers: { "user-agent": "Mozilla/5.0 (compatible; EINSTECH-Catalog-Monitor/1.0; +https://www.einstech.kr)" } });
    const html = await response.text();
    return { ok: response.ok, status: response.status, finalUrl: response.url, fingerprint: content && response.ok ? createHash("sha256").update(meaningfulText(html)).digest("hex") : null };
  } catch (error) {
    return { ok: false, status: 0, error: error.name === "AbortError" ? "20초 시간 초과" : error.message, fingerprint: null };
  } finally { clearTimeout(timer); }
}

for (let index = 0; index < catalog.products.length; index += 6) {
  const batch = catalog.products.slice(index, index + 6);
  const inspected = await Promise.all(batch.map(async (product) => {
    const [site, source] = await Promise.all([inspectUrl(product.siteUrl), inspectUrl(product.sourceUrl, checkContent || writeBaseline)]);
    const baseline = state.fingerprints[product.id];
    const sourceChanged = Boolean(checkContent && baseline && source.fingerprint && baseline !== source.fingerprint);
    const baselineMissing = Boolean(checkContent && source.fingerprint && !baseline);
    const reviewDue = Boolean(checkDue && product.nextReview <= today);
    if (writeBaseline && source.fingerprint) state.fingerprints[product.id] = source.fingerprint;
    return { ...product, site, source, sourceChanged, baselineMissing, reviewDue, annualReview: mode === "annual" };
  }));
  results.push(...inspected);
}

if (writeBaseline) {
  state.generatedAt = now.toISOString();
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`);
}

const definitiveSourceError = (item) => [404, 410].includes(item.source.status);
const attention = results.filter((item) => !item.site.ok || definitiveSourceError(item) || item.sourceChanged || item.reviewDue || item.annualReview);
const counts = {
  total: results.length,
  siteErrors: results.filter((item) => !item.site.ok).length,
  sourceErrors: results.filter((item) => !item.source.ok).length,
  sourceChanges: results.filter((item) => item.sourceChanged).length,
  missingBaselines: results.filter((item) => item.baselineMissing).length,
  reviewDue: results.filter((item) => item.reviewDue).length,
  annualReview: results.filter((item) => item.annualReview).length,
};
const issue = (item) => [
  !item.site.ok && `홈페이지 ${item.site.status || item.site.error}`,
  definitiveSourceError(item) && `공식자료 ${item.source.status}`,
  item.sourceChanged && "공식 페이지 내용 변경 감지",
  item.baselineMissing && "공식 페이지 기준 해시 미등록",
  item.reviewDue && `검토기한 도래(${item.nextReview})`,
  item.annualReview && "연간 전체 검토 대상",
].filter(Boolean).join(" · ");

const lines = [
  `# EINSTECH 제품 카탈로그 ${mode} 점검`, "",
  `- 실행일: ${now.toISOString()}`,
  `- 대상: ${counts.total}개 제품군`,
  `- 확인 필요: ${attention.length}개`,
  `- 홈페이지 오류 ${counts.siteErrors} · 공식자료 오류 ${counts.sourceErrors} · 내용 변경 ${counts.sourceChanges} · 검토기한 ${counts.reviewDue}`,
  "",
];
if (attention.length) {
  lines.push("## 확인 필요", "", "| 구분 | 제조사 | 제품 | 사유 |", "|---|---|---|---|");
  for (const item of attention) lines.push(`| ${item.category} | ${item.vendor} | [${item.name}](${item.siteUrl}) | ${issue(item)} |`);
} else lines.push("## 결과", "", "변경이나 오류가 발견되지 않았습니다.");
lines.push("", "## 운영 원칙", "", catalog.policy.reviewRule, "");

await mkdir(reportDir, { recursive: true });
const summary = { generatedAt: now.toISOString(), mode, requiresAttention: attention.length > 0, counts, attention: attention.map((item) => ({ id: item.id, name: item.name, vendor: item.vendor, category: item.category, siteUrl: item.siteUrl, sourceUrl: item.sourceUrl, reason: issue(item) })) };
await writeFile(path.join(reportDir, "product-catalog-review.md"), `${lines.join("\n")}\n`);
await writeFile(path.join(reportDir, "product-catalog-review.json"), `${JSON.stringify(summary, null, 2)}\n`);
console.log(JSON.stringify(summary, null, 2));
