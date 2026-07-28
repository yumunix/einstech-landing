import ProductCategoryPage from "@/app/products/ProductCategoryPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/hp-server",
  title: "HP Server 제품군",
  description: "HPE ProLiant DL·ML 서버와 Synergy·Apollo 제품군을 워크로드에 맞춰 설계하고 공급합니다.",
  keywords: ["HP 서버", "HPE ProLiant", "DL 서버", "ML 서버", "Synergy", "Apollo"],
});

export default function HpServerPage() {
  return <ProductCategoryPage badge="HP_SERVER" title="HP Server" subtitle="Enterprise Compute" description="가상화·DB·ERP·HA Cluster를 위한 HPE 서버를 CPU·메모리·스토리지·이중화 요구사항에 맞춰 구성합니다." groups={[
    { tier: "RACK SERVER", name: "ProLiant DL", desc: "데이터센터 표준 랙 서버 제품군", specs: ["1U·2U 폼팩터", "가상화·DB·ERP", "iLO 원격 관리"] },
    { tier: "TOWER SERVER", name: "ProLiant ML", desc: "지사와 중소 규모 환경을 위한 타워 서버", specs: ["유연한 확장", "저소음 설치 환경", "원격 관리"] },
    { tier: "COMPOSABLE · HPC", name: "Synergy · Apollo", desc: "컴포저블 인프라와 고밀도 HPC 제품군", specs: ["대규모 확장", "고밀도 컴퓨팅", "AI·HPC 연계"] },
  ]} />;
}
