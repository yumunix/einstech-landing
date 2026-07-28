import ProductCategoryPage from "@/app/products/ProductCategoryPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/nvidia-gpu",
  title: "NVIDIA GPU 제품군",
  description: "기업용 AI 학습·추론과 HPC를 위한 NVIDIA GPU 컴퓨팅 인프라를 설계하고 공급합니다.",
  keywords: ["NVIDIA GPU", "GPU 서버", "AI 서버", "LLM 인프라", "HPC"],
});

export default function NvidiaGpuPage() {
  return <ProductCategoryPage badge="NVIDIA_GPU" title="NVIDIA GPU" subtitle="AI · Training · Inference · HPC" description="GPU만 판매하는 것이 아니라 서버 호환성, 전원, 냉각, 메모리와 고속 네트워크까지 포함해 기업용 AI 인프라를 구성합니다." groups={[
    { tier: "INFERENCE", name: "AI 추론", desc: "서비스형 AI와 사내 생성형 AI 추론 구성", specs: ["워크로드별 GPU 선정", "서버 호환성 검증", "확장 용량 설계"] },
    { tier: "TRAINING", name: "AI 학습", desc: "대규모 모델 학습을 위한 멀티 GPU 구성", specs: ["멀티 GPU", "고속 인터커넥트", "스토리지 처리량 설계"] },
    { tier: "HPC", name: "GPU Computing", desc: "과학기술·시뮬레이션·병렬 연산 환경", specs: ["고밀도 컴퓨팅", "전원·냉각 검토", "클러스터 확장"] },
  ]} />;
}
