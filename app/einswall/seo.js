import { createPageMetadata } from "@/lib/seo";

export const einswallMetadata = createPageMetadata({
  path: "/einswall",
  title: "EINSWALL Enterprise Firewall",
  description:
    "공장·중소기업 인원수에 맞춰 EINSWALL 방화벽과 Omada 관리형 스위치를 구성하고 일시불·구독·분할 구매 가격을 비교합니다.",
  keywords: [
    "EINSWALL",
    "방화벽 서버",
    "랙마운트 방화벽",
    "미니PC 방화벽",
    "OPNsense",
    "pfSense",
    "TP-Link Omada",
    "VLAN 네트워크 분할",
    "10G 방화벽",
    "VPN 게이트웨이",
    "구독형 방화벽",
    "방화벽 렌탈",
    "방화벽 분할 구매",
    "중소기업 네트워크 패키지",
    "공장 네트워크 구축",
  ],
  image: "/products/e-gate/rack-advanced-i7.webp",
});

const products = [
  ["EINSWALL MINI 1G", "/products/e-gate/einswall-mini-1g-v2.webp"],
  ["EINSWALL MINI 10G2", "/products/e-gate/einswall-mini-10g2-v2.webp"],
  ["EINSWALL MINI 10G4", "/products/e-gate/einswall-mini-10g4-v2.webp"],
  ["EINSWALL RACK ENTRY C3758", "/products/e-gate/rack-entry-c3758.webp"],
  ["EINSWALL RACK ENTRY C3808", "/products/e-gate/rack-entry-c3808.webp"],
  ["EINSWALL RACK ENTRY C3958", "/products/e-gate/rack-entry-c3958.webp"],
  ["EINSWALL RACK ADVANCED i5", "/products/e-gate/rack-advanced-i5.webp"],
  ["EINSWALL RACK ADVANCED i7", "/products/e-gate/rack-advanced-i7.webp"],
  ["EINSWALL RACK ADVANCED i9", "/products/e-gate/rack-advanced-i9.webp"],
  ["EINSWALL RACK FLAGSHIP 12G", "/products/e-gate/rack-flagship-12g.webp"],
  ["EINSWALL RACK FLAGSHIP 13G", "/products/e-gate/rack-flagship-13g.webp"],
  ["EINSWALL RACK FLAGSHIP 14G", "/products/e-gate/rack-flagship-14g.webp"],
];

export const einswallStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "EINSWALL Enterprise Firewall",
  url: "https://www.einstech.kr/einswall",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map(([name, image], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name,
        image: `https://www.einstech.kr${image}`,
        brand: { "@type": "Brand", name: "EINSWALL" },
        url: "https://www.einstech.kr/einswall#pricing",
      },
    })),
  },
};
