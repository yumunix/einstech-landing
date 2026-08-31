const SITE_URL = "https://www.einstech.kr";

export default function robots() {
  return {
    rules: [
      // 검색 색인 봇 전체 허용 (Googlebot, Bingbot, 네이버 Yeti, 다음 등)
      { userAgent: "*", allow: "/" },
      { userAgent: "Yeti", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Daumoa", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
