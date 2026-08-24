import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

const products = [
  { family: "PROLIANT DL · RACK SERVER", name: "HPE ProLiant Compute DL380 Gen12", image: "dl380-gen12.jpg", description: "가상화, 데이터베이스, ERP와 AI 추론까지 폭넓게 구성할 수 있는 2U 듀얼 소켓 랙 서버입니다.", specs: [["폼팩터", "2U 랙 서버"], ["프로세서", "Intel Xeon 6, 최대 2소켓"], ["코어", "CPU당 최대 144 E-core 또는 86 P-core"], ["메모리", "32 DIMM, DDR5 최대 8TB"], ["스토리지", "최대 36 EDSFF 또는 24 SFF 구성"], ["확장·관리", "PCIe Gen5 · GPU 지원 · HPE iLO 7"]], official: "https://www.hpe.com/psnow/doc/a00073551enw" },
  { family: "PROLIANT ML · TOWER SERVER", name: "HPE ProLiant Compute ML350 Gen12", image: "ml350-gen12.jpg", description: "지사·중견기업 환경부터 데이터센터까지 확장 가능한 고성능 듀얼 소켓 타워 서버입니다.", specs: [["폼팩터", "4U 타워 · 랙 전환 지원"], ["프로세서", "Intel Xeon 6500P/6700P, 최대 2소켓"], ["코어", "CPU당 최대 86 P-core"], ["메모리", "32 DIMM, DDR5 최대 8TB"], ["스토리지", "최대 24 NVMe · SFF/LFF 혼합 구성"], ["확장·관리", "PCIe Gen5 · GPU 지원 · HPE iLO 7"]], official: "https://www.hpe.com/psnow/doc/a50006995enw" },
  { family: "SYNERGY · COMPOSABLE", name: "HPE Synergy 480 Gen12", image: "synergy480-gen12.jpg", description: "HPE OneView 기반 컴포저블 인프라에서 유연한 컴퓨팅 풀을 제공하는 하프하이트 모듈입니다.", specs: [["폼팩터", "하프하이트 2소켓 컴퓨트 모듈"], ["프로세서", "Intel Xeon 6, 최대 2소켓"], ["코어", "CPU당 최대 86코어"], ["메모리", "32 DIMM, DDR5 최대 8TB"], ["스토리지", "4 SFF 또는 8 EDSFF NVMe E3.S"], ["확장·관리", "PCIe Gen5 · HPE OneView · HPE iLO 7"]], official: "https://www.hpe.com/psnow/doc/a50009201enw.html" },
  { family: "APOLLO · DENSE HPC", name: "HPE Apollo 2000 Gen10 Plus", image: "apollo2000-gen10plus.jpg", description: "2U 공유 섀시에 최대 4개 독립 서버 노드를 수용하는 스케일아웃·HPC용 고밀도 플랫폼입니다.", specs: [["폼팩터", "2U 고밀도 멀티노드 섀시"], ["노드", "최대 4개 1U 하프와이드 서버 노드"], ["프로세서", "3세대 Intel Xeon 또는 AMD EPYC 7002/7003"], ["메모리", "노드별 8채널 DDR4-3200"], ["스토리지", "8 SFF 또는 24 SFF SAS/SATA/NVMe"], ["확장·관리", "PCIe Gen4 · HPE iLO 5 · APM 옵션"]], official: "https://www.hpe.com/us/en/collaterals/collateral.a00056110enw.html", lifecycle: "Apollo 고밀도 플랫폼은 Gen10 Plus 세대명으로 공급·지원 범위를 확인 후 구성합니다." },
];

function ProductCard({ product }) {
  return <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"><div className="grid lg:grid-cols-[0.9fr_1.1fr]">
    <div className="flex min-h-[320px] items-center justify-center border-b border-slate-100 bg-white p-8 lg:border-b-0 lg:border-r"><img src={`/products/hp-server/${product.image}`} alt={`${product.name} 대표 제품 이미지`} className="max-h-[340px] w-full object-contain" /></div>
    <div className="flex flex-col p-7 sm:p-9"><div className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald">{product.family}</div><h3 className="mt-3 font-display text-2xl font-black text-slate-900 sm:text-3xl">{product.name}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
      <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100">{product.specs.map(([label, value]) => <div key={label} className="grid grid-cols-[92px_1fr] gap-3 py-3 text-xs sm:grid-cols-[112px_1fr] sm:text-sm"><dt className="font-bold text-slate-900">{label}</dt><dd className="leading-5 text-slate-600">{value}</dd></div>)}</dl>
      {product.lifecycle && <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">{product.lifecycle}</p>}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={`/contact?subject=${encodeURIComponent(`${product.name} 공급 견적`)}`} className="rounded-xl bg-navy px-5 py-3 text-center text-xs font-bold text-white transition-colors hover:bg-emerald">구성 상담 · 공급 견적</a><a href={product.official} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 px-5 py-3 text-center text-xs font-bold text-slate-700 transition-colors hover:border-navy hover:text-navy">HPE 공식 QuickSpecs</a></div>
    </div>
  </div></article>;
}

export default function HpServerPage() {
  return <><Header /><main className="pt-16">
    <section className="py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><Badge color="cyan">HPE_SERVER</Badge><h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">HPE Server</h1><p className="mt-4 font-display text-xl font-bold text-navy sm:text-3xl">Enterprise Compute</p><p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">최신 HPE ProLiant Compute Gen12와 Synergy, 고밀도 Apollo 플랫폼을 워크로드에 맞춰 설계합니다. CPU·메모리·스토리지·네트워크·이중화 구성을 검토해 검증된 BOM과 공급 견적을 제공합니다. 판매 종료된 기존 HPE 서버도 유지보수 대상으로 지원합니다.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="#lineup">판매 제품 보기</PrimaryButton><SecondaryButton href="/support/maintenance">기존 서버 유지보수</SecondaryButton><SecondaryButton href="/contact?subject=HPE%20Server%20구성%20상담">구성 상담</SecondaryButton></div></div></section>
    <section id="lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">PRODUCT_LINEUP</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">대표 제품 및 핵심 사양</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">표기 사양은 HPE 공식 QuickSpecs의 최대 지원 범위이며, 실제 구성 가능 범위는 선택한 CPU·섀시·백플레인과 지역별 공급 SKU에 따라 달라집니다.</p><div className="mt-10 space-y-8">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div></div></section>
  </main><Footer /></>;
}
