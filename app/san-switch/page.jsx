import ProductCategoryPage from "@/app/products/ProductCategoryPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/san-switch",
  title: "Brocade SAN Switch 제품군",
  description: "Brocade 32G·64G Fibre Channel SAN Switch와 이중 패브릭을 설계하고 공급합니다.",
  keywords: ["Brocade SAN Switch", "Fibre Channel", "32G FC", "64G FC", "SAN 패브릭"],
});

export default function SanSwitchPage() {
  return <ProductCategoryPage badge="SAN_SWITCH" title="Brocade SAN Switch" subtitle="Fibre Channel Fabric" description="Storage와 별도의 독립 제품군으로 구성하며 서버·스토리지 포트 수, 이중화와 확장 계획에 맞춰 SAN 패브릭을 설계합니다." groups={[
    { tier: "ENTRY FABRIC", name: "32G FC", desc: "표준 SAN과 가상화 환경을 위한 Gen 6 제품군", specs: ["32G Fibre Channel", "이중 패브릭", "ISL 확장"] },
    { tier: "PERFORMANCE FABRIC", name: "64G FC", desc: "고성능 스토리지와 대규모 가상화용 Gen 7", specs: ["64G Fibre Channel", "고성능 ISL", "패브릭 가시성"] },
    { tier: "SAN DESIGN", name: "Fabric 구성", desc: "스위치 공급과 함께 SAN 토폴로지 설계", specs: ["포트 산정", "Zoning", "이중화·확장 설계"] },
  ]} />;
}
