const SITE_URL = "https://www.einstech.kr";

export function createPageMetadata({
  path,
  title,
  description,
  keywords = [],
  image = "/einstech-logo.png",
}) {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      siteName: "EINSTECH",
      title,
      description,
      images: [{ url: image, alt: `${title} 대표 이미지` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "아인스테크",
  legalName: "EINSTECH Co., Ltd.",
  alternateName: ["EINSTECH", "아인스테크", "einstech", "아인스 테크"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/einstech-logo.png`,
    caption: "아인스테크 EINSTECH 로고",
  },
  image: `${SITE_URL}/einstech-logo.png`,
  foundingDate: "2014-05-01",
  founder: { "@type": "Person", name: "염성일" },
  slogan: "Non Stop System, Lossless Data",
  vatID: "142-81-71526",
  taxID: "142-81-71526",
  description:
    "아인스테크(EINSTECH)는 기업용 AI 보안(EINSGUARD AI), HPE 서버, NVIDIA GPU, Hitachi·Infortrend 스토리지, Brocade SAN, TP-Link Omada·VIGI 네트워크·영상보안, Acronis·NetBackup 백업, HA Cluster, DLP·방화벽과 재해복구를 설계·공급·유지보수하는 인프라 전문기업입니다.",
  telephone: "+82-31-893-0015",
  email: "sungil.yum@einstech.kr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "문인로54번길 2, 수지하우비 409호",
    addressLocality: "용인시 수지구",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  areaServed: [
    { "@type": "Country", name: "대한민국" },
    { "@type": "Country", name: "말레이시아" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+82-31-893-0015",
      email: "sungil.yum@einstech.kr",
      areaServed: "KR",
      availableLanguage: ["Korean", "English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      telephone: "+82-31-893-0015",
      email: "sungil.yum@einstech.kr",
      areaServed: ["KR", "MY"],
      availableLanguage: ["Korean", "English"],
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  knowsAbout: ["기업용 AI 보안", "EINSGUARD AI", "AI 거버넌스", "Shadow AI 탐지", "HPE ProLiant Server", "NVIDIA GPU Server", "Hitachi VSP One", "Infortrend EonStor", "Brocade SAN Switch", "TP-Link Omada", "TP-Link VIGI", "Acronis Cyber Protect", "Veritas NetBackup", "HA Cluster", "Rose HA", "MCCS", "DLP", "Firewall", "BCP and Disaster Recovery"],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "EINSTECH",
  alternateName: "아인스테크",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
