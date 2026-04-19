import "./globals.css";

export const metadata = {
  title: "EINSTECH | Non Stop System, Lossless Data",
  description:
    "30년 기술경험 기반 HA Cluster · 스토리지 · 백업 · DLP 통합 인프라 파트너. 멈추지 않는 시스템과 사라지지 않는 데이터를 설계합니다.",
  keywords: [
    "HA 클러스터",
    "Rose HA",
    "Hitachi 스토리지",
    "Acronis 백업",
    "Netwrix DLP",
    "재해복구",
    "EINSTECH",
    "아인스테크",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030508",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
