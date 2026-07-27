import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const marketPath = path.join(root, "app/einswall/pricing-market.json");
const historyDir = path.join(root, "data/einswall-pricing-history");
const maxChange = 0.3;

const products = {
  memory16: [
    { brand: "Samsung", pcode: "17666249", min: 100000, max: 1000000 },
  ],
  memory32: [
    { brand: "Samsung", pcode: "17666252", min: 200000, max: 1500000 },
  ],
  storage512: [
    { brand: "Samsung", pcode: "13562693", min: 100000, max: 1000000 },
    { brand: "SK hynix", pcode: "17001083", min: 100000, max: 1000000 },
  ],
  storage1tb: [
    { brand: "Samsung", pcode: "69869543", min: 150000, max: 1500000 },
    { brand: "SK hynix", pcode: "17001050", min: 150000, max: 1500000 },
  ],
};

function monthInfo(now = new Date()) {
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const next = new Date(Date.UTC(year, now.getUTCMonth() + 1, 1));
  return {
    effectiveMonth: `${year}.${month}`,
    nextReviewDate: next.toISOString().slice(0, 10),
  };
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function parsePrices(html, product) {
  const text = html
    .replaceAll(/<script[\s\S]*?<\/script>/gi, " ")
    .replaceAll(/<style[\s\S]*?<\/style>/gi, " ")
    .replaceAll(/<[^>]+>/g, " ")
    .replaceAll("&nbsp;", " ");
  const candidates = [...text.matchAll(/([0-9]{1,3}(?:,[0-9]{3})+)(?:\s*원)?/g)]
    .map((match) => Number(match[1].replaceAll(",", "")))
    .filter((price) => price >= product.min && price <= product.max);
  const unique = [...new Set(candidates)].sort((a, b) => a - b).slice(0, 3);

  if (unique.length < 2) {
    throw new Error(`${product.brand} ${product.pcode}: 유효 가격을 2개 이상 찾지 못했습니다.`);
  }
  return { price: median(unique), sellerCount: unique.length, samples: unique };
}

async function fetchProduct(product) {
  const url =
    `https://prod.danawa.com/list/popup/simpleProduct/` +
    `simpleProductInfo.php?pcode=${product.pcode}&pview_method=2`;
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; EINSTECH-Monthly-Pricing/1.0)",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return { ...parsePrices(await response.text(), product), brand: product.brand, url };
}

const previous = JSON.parse(await readFile(marketPath, "utf8"));
const next = { ...previous, ...monthInfo() };
const evidence = {};

for (const [key, sources] of Object.entries(products)) {
  const results = [];
  for (const source of sources) {
    try {
      results.push(await fetchProduct(source));
    } catch (error) {
      results.push({ brand: source.brand, error: error.message });
    }
  }
  const valid = results.filter((result) => result.price);
  if (valid.length === 0) {
    throw new Error(`${key}: 사용 가능한 가격 출처가 없습니다. ${JSON.stringify(results)}`);
  }

  const selected = Math.max(...valid.map((result) => result.price));
  const change = Math.abs(selected - previous[key]) / previous[key];
  if (change > maxChange) {
    throw new Error(
      `${key}: 전월 대비 ${(change * 100).toFixed(1)}% 변동하여 자동 배포를 중단합니다.`,
    );
  }
  next[key] = Math.ceil(selected / 1000) * 1000;
  evidence[key] = { selected: next[key], results };
}

const history = {
  generatedAt: new Date().toISOString(),
  policy: {
    schedule: "매월 1일 09:15 KST",
    maximumAutomaticChange: "30%",
    fixedUsdKrw: 1600,
    importTaxRate: 0.18,
  },
  previous,
  next,
  evidence,
};

await mkdir(historyDir, { recursive: true });
await writeFile(marketPath, `${JSON.stringify(next, null, 2)}\n`);
await writeFile(
  path.join(historyDir, `${next.effectiveMonth.replace(".", "-")}.json`),
  `${JSON.stringify(history, null, 2)}\n`,
);

console.log(JSON.stringify(history, null, 2));
