import ProductCategoryPage from "@/app/products/ProductCategoryPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/storage",
  title: "Enterprise Storage 제품군",
  description: "High-End Hitachi VSP와 Midrange Infortrend EonStor 스토리지를 업무 중요도와 DR 요구사항에 맞춰 구성합니다.",
  keywords: ["Hitachi VSP", "EonStor", "엔터프라이즈 스토리지", "All Flash", "DR 스토리지"],
});

export default function StoragePage() {
  return <ProductCategoryPage badge="STORAGE" title="Storage" subtitle="High-End · Midrange" description="제품을 SAN Switch와 묶어 표시하지 않고 Storage 자체 제품군으로 소개합니다. High-End는 Hitachi, Midrange는 EonStor를 기준으로 구성합니다." groups={[
    { tier: "HIGH-END", name: "Hitachi VSP", desc: "미션크리티컬 업무와 High-End DR 구성", specs: ["All-Flash·Hybrid", "고가용성", "복제·DR 솔루션"] },
    { tier: "MIDRANGE", name: "Infortrend EonStor", desc: "성능과 예산을 균형 있게 구성하는 Midrange", specs: ["SAN·NAS 모델", "확장형 디스크 구성", "백업·가상화 연계"] },
    { tier: "DATA PROTECTION", name: "WORM · Backup Storage", desc: "보존과 복구 목적의 데이터 보호 스토리지", specs: ["불변 보관", "Object Lock", "백업 소프트웨어 연계"] },
  ]} />;
}
