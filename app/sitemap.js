import { storageProducts } from "./storage/products";
import { supportServices } from "./support/services";

const SITE_URL = "https://www.einstech.kr";

// 정적 라우트 — 경로와 검색 우선순위
const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/company", priority: 0.9, changeFrequency: "monthly" },
  { path: "/einsguard-ai", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/onpremise-ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/infrastructure", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hp-server", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nvidia-gpu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/storage", priority: 0.8, changeFrequency: "monthly" },
  { path: "/san-switch", priority: 0.8, changeFrequency: "monthly" },
  { path: "/network-switch", priority: 0.8, changeFrequency: "monthly" },
  { path: "/einswall", priority: 0.8, changeFrequency: "monthly" },
  { path: "/e-gate", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ha-cluster", priority: 0.8, changeFrequency: "monthly" },
  { path: "/storage-backup", priority: 0.8, changeFrequency: "monthly" },
  { path: "/backup-modernization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/virbak-abio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/dlp-antivirus", priority: 0.8, changeFrequency: "monthly" },
  { path: "/bcp", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.7, changeFrequency: "monthly" },
  { path: "/downloads/einsguard-ai", priority: 0.8, changeFrequency: "weekly" },
  { path: "/docs/einsguard-ai/install", priority: 0.7, changeFrequency: "monthly" },
  { path: "/docs/einsguard-ai/admin", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();

  const routes = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const storage = storageProducts.map(({ slug }) => ({
    url: `${SITE_URL}/storage/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const support = supportServices.map(({ slug }) => ({
    url: `${SITE_URL}/support/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...storage, ...support];
}
