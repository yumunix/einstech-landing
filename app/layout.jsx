import "./globals.css";
import "./page.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { organizationStructuredData, websiteStructuredData } from "@/lib/seo";

const siteUrl = "https://www.einstech.kr";
const siteName = "EINSTECH";
const siteTitle =
  "아인스테크(EINSTECH) | 기업용 AI보안·서버·스토리지·백업·HA 전문기업";
const siteDescription =
  "아인스테크(EINSTECH)는 2014년 설립된 인프라 전문기업입니다. EINSGUARD AI 보안, HPE 서버, NVIDIA GPU, Hitachi·Infortrend 스토리지, Brocade SAN, TP-Link Omada·VIGI 네트워크, Acronis·NetBackup 백업, HA Cluster, DLP·방화벽·재해복구를 설계·공급·유지보수합니다.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | 아인스테크(EINSTECH)",
  },
  description: siteDescription,
  keywords: [
    "아인스테크",
    "EINSTECH",
    "아인스테크 회사",
    "용인 IT 인프라 기업",
    "인프라 SI 전문기업",
    "기업 IT 인프라 구축",
    "HA 클러스터",
    "Rose HA",
    "MCCS",
    "Hitachi 스토리지",
    "Acronis 백업",
    "Veritas NetBackup",
    "Netwrix DLP",
    "Kaspersky",
    "재해복구",
    "EINSTECH",
    "아인스테크",
    "EINSGUARD AI",
    "아인스가드 AI",
    "기업용 AI 거버넌스",
    "AI 보안 솔루션",
    "생성형 AI 보안",
    "Shadow AI 탐지",
    "AI DLP",
    "AI 사용 모니터링",
    "HPE 서버",
    "NVIDIA GPU 서버",
    "Hitachi VSP One",
    "Infortrend EonStor",
    "Brocade SAN Switch",
    "TP-Link Omada",
    "Acronis 백업",
    "NetBackup",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  verification: {
    google: "eTMfjn8ahJns387AiDUpDMDuISVoPqqd16t-vibzajc",
    other: {
      "naver-site-verification": "d3ffc152f4e205bf983ed1e6c89f27741a563c29",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="einstech-white-body">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400;700&family=Noto+Sans+KR:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="einstech-white-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationStructuredData, websiteStructuredData]) }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
