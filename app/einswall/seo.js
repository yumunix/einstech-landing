import { createPageMetadata } from "@/lib/seo";

export const einswallMetadata = createPageMetadata({
  path: "/einswall",
  title: "TP-Link Switch + EINSWALL Firewall",
  description:
    "TP-Link Omada 관리형 스위치와 EINSWALL 미니PC·1U·2U 방화벽 서버를 VLAN, VPN, IDS/IPS 요구사항에 맞춰 구성하고 예상 공급가를 확인합니다.",
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
  name: "TP-Link Switch + EINSWALL Firewall",
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
