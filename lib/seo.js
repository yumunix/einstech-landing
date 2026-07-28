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
    "HA Cluster, 스토리지, 백업, 데이터 보안, 방화벽과 재해복구 인프라를 설계·구축하는 기업",
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
