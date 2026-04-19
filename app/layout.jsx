import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://www.einstech.kr";
const siteName = "EINSTECH";
const siteTitle = "EINSTECH | Non Stop System, Lossless Data";
const siteDescription =
  "30년 기술경험 기반 HA Cluster · 스토리지 · 백업 · DLP 통합 인프라 파트너. 멈추지 않는 시스템과 사라지지 않는 데이터를 설계합니다.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | EINSTECH",
  },
  description: siteDescription,
  keywords: [
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
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030508",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
