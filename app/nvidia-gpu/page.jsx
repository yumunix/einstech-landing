import NvidiaGpuPage from "./NvidiaGpuPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/nvidia-gpu",
  title: "NVIDIA GPU 제품군",
  description: "NVIDIA H200 NVL, RTX PRO 6000 Blackwell Server Edition, L40S와 L4 GPU를 서버 호환성 검증과 함께 설계·공급합니다.",
  keywords: ["NVIDIA GPU", "H200 NVL", "RTX PRO 6000 Blackwell Server Edition", "NVIDIA L40S", "NVIDIA L4", "GPU 서버", "AI 서버", "LLM 인프라", "HPC"],
});

export default function Page() {
  return <NvidiaGpuPage />;
}
