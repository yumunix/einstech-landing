import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

const products = [
  { family: "HOPPER · AI & HPC", name: "NVIDIA H200 NVL", image: "h200-nvl.jpg", description: "대용량 생성형 AI 추론과 HPC를 위한 141GB HBM3e 기반 듀얼 슬롯 PCIe 데이터센터 GPU입니다.", specs: [["아키텍처", "NVIDIA Hopper"], ["GPU 메모리", "141GB HBM3e"], ["메모리 대역폭", "4.8TB/s"], ["AI 성능", "FP8 Tensor Core 최대 3,341 TFLOPS"], ["폼팩터", "PCIe Gen5 · 듀얼 슬롯 · 패시브 냉각"], ["전력·확장", "최대 600W · 2/4-way NVLink · 최대 7 MIG"]], official: "https://www.nvidia.com/en-us/data-center/h200/" },
  { family: "BLACKWELL · UNIVERSAL AI", name: "NVIDIA RTX PRO 6000 Blackwell Server Edition", image: "rtx-pro-6000-blackwell-server.jpg", description: "엔터프라이즈 AI, 과학 연산, 렌더링과 가상 워크스테이션을 하나의 서버 GPU로 가속합니다.", specs: [["아키텍처", "NVIDIA Blackwell"], ["GPU 메모리", "96GB GDDR7 ECC"], ["메모리 대역폭", "1,597GB/s"], ["AI 성능", "FP4 4 PFLOPS · FP8 2 PFLOPS"], ["폼팩터", "PCIe Gen5 x16 · 듀얼 슬롯 FHFL"], ["전력·냉각", "400~600W 구성 · 패시브 냉각"]], official: "https://www.nvidia.com/en-us/products/workstations/professional-desktop-gpus/rtx-pro-6000-family/" },
  { family: "ADA · AI & VISUAL COMPUTING", name: "NVIDIA L40S", image: "l40s.jpg", description: "생성형 AI 학습·추론과 실시간 렌더링, Omniverse 및 vGPU 환경을 위한 범용 데이터센터 GPU입니다.", specs: [["아키텍처", "NVIDIA Ada Lovelace"], ["GPU 메모리", "48GB GDDR6 ECC"], ["메모리 대역폭", "864GB/s"], ["AI 성능", "FP8 Tensor Core 최대 1,466 TFLOPS"], ["폼팩터", "PCIe Gen4 x16 · 듀얼 슬롯"], ["전력·기능", "최대 350W · 패시브 냉각 · vGPU 지원"]], official: "https://www.nvidia.com/en-us/data-center/l40s/" },
  { family: "ADA · EFFICIENT INFERENCE", name: "NVIDIA L4", image: "l4.jpg", description: "저전력·로우프로파일 서버에서 AI 추론, 영상 처리, 그래픽과 가상화를 가속하는 효율형 GPU입니다.", specs: [["아키텍처", "NVIDIA Ada Lovelace"], ["GPU 메모리", "24GB GDDR6"], ["메모리 대역폭", "300GB/s"], ["AI 성능", "FP8 Tensor Core 최대 485 TFLOPS"], ["폼팩터", "PCIe Gen4 x16 · 싱글 슬롯 로우프로파일"], ["전력·미디어", "72W · 2 NVENC · 4 NVDEC"]], official: "https://www.nvidia.com/en-us/data-center/l4/" },
];

function ProductCard({ product }) {
  return <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"><div className="grid lg:grid-cols-[0.9fr_1.1fr]">
    <div className="flex min-h-[320px] items-center justify-center border-b border-slate-100 bg-white p-8 lg:border-b-0 lg:border-r"><img src={`/products/nvidia-gpu/${product.image}`} alt={`${product.name} 공식 제품 이미지`} className="max-h-[340px] w-full object-contain" /></div>
    <div className="flex flex-col p-7 sm:p-9"><div className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald">{product.family}</div><h3 className="mt-3 font-display text-2xl font-black text-slate-900 sm:text-3xl">{product.name}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
      <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100">{product.specs.map(([label, value]) => <div key={label} className="grid grid-cols-[104px_1fr] gap-3 py-3 text-xs sm:grid-cols-[124px_1fr] sm:text-sm"><dt className="font-bold text-slate-900">{label}</dt><dd className="leading-5 text-slate-600">{value}</dd></div>)}</dl>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={`/contact?subject=${encodeURIComponent(`${product.name} 공급 견적`)}`} className="rounded-xl bg-navy px-5 py-3 text-center text-xs font-bold text-white transition-colors hover:bg-emerald">호환성 상담 · 공급 견적</a><a href={product.official} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 px-5 py-3 text-center text-xs font-bold text-slate-700 transition-colors hover:border-navy hover:text-navy">NVIDIA 공식 사양</a></div>
    </div>
  </div></article>;
}

export default function NvidiaGpuPage() {
  return <><Header /><main className="pt-16">
    <section className="py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><Badge color="cyan">NVIDIA_GPU</Badge><h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">NVIDIA GPU</h1><p className="mt-4 font-display text-xl font-bold text-navy sm:text-3xl">AI · Training · Inference · HPC</p><p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">GPU만 판매하는 것이 아니라 서버 호환성, 슬롯과 전원, 냉각, 시스템 메모리, 고속 네트워크와 AI Enterprise 소프트웨어까지 검토해 기업용 AI 인프라를 구성합니다.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="#lineup">대표 GPU 보기</PrimaryButton><SecondaryButton href="/contact?subject=NVIDIA%20GPU%20구성%20상담">구성 상담</SecondaryButton></div></div></section>
    <section id="lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">PRODUCT_LINEUP</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">대표 GPU 및 핵심 사양</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">표기 성능은 NVIDIA 공식 자료의 최대값이며 일부 Tensor Core 수치는 희소성 적용 기준입니다. 실제 공급 구성은 서버 인증, GPU 수량, 전력과 냉각 조건에 따라 확정합니다.</p><div className="mt-10 space-y-8">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div></div></section>
  </main><Footer /></>;
}
