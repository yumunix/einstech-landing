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
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "EINSTECH",
  alternateName: "아인스테크",
  url: SITE_URL,
  logo: `${SITE_URL}/einstech-logo.png`,
  foundingDate: "2014-05-01",
  description:
    "기업용 AI 보안, HPE 서버, NVIDIA GPU, Hitachi·Infortrend 스토리지, Brocade SAN, TP-Link 네트워크, Acronis·NetBackup 백업, HA Cluster, DLP·방화벽과 재해복구를 설계·공급·유지보수하는 기업",
  knowsAbout: ["기업용 AI 보안", "EINSGUARD AI", "HPE ProLiant Server", "NVIDIA GPU Server", "Hitachi VSP One", "Infortrend EonStor", "Brocade SAN Switch", "TP-Link Omada", "Acronis Cyber Protect", "Veritas NetBackup", "HA Cluster", "DLP", "Firewall", "BCP and Disaster Recovery"],
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
