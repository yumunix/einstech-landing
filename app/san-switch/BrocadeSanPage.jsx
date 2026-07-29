import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

const families = [
  {
    id: "gen6",
    eyebrow: "GEN 6 · 32G FC",
    title: "Brocade Gen 6",
    desc: "32Gbps SAN 환경과 기존 패브릭 확장을 위한 제품군",
    products: [
      { model: "G610", image: "g610.png", status: "공급 문의", specs: ["16/32Gbps", "8·16·24포트 구성", "조달 등록 모델"] },
      { model: "G620", image: "g620.png", status: "EOL · 전환 상담", specs: ["16/32Gbps", "기존 패브릭 유지보수", "후속 모델 전환 검토"] },
      { model: "G630", image: "g630.png", status: "공급 문의", specs: ["고밀도 Gen 6", "대규모 가상화", "플래시 스토리지 패브릭"] },
    ],
  },
  {
    id: "gen7",
    eyebrow: "GEN 7 · 64G FC",
    title: "Brocade Gen 7",
    desc: "64Gbps 링크와 고성능 플래시 스토리지 워크로드를 위한 제품군",
    products: [
      { model: "G710", image: "g710.png", status: "출시·조달 확인", specs: ["32G 8포트 표기 모델", "소규모 SAN", "Gen 7 운영 체계"] },
      { model: "G720", image: "g720.png", status: "조달 등록", specs: ["32G 24포트 구성", "조달 물품식별번호 25509113", "확장형 SAN"] },
      { model: "G730", image: "g730.png", status: "공급 문의", specs: ["고밀도 Gen 7", "대규모 서버 가상화", "플래시 기반 스토리지"] },
    ],
  },
  {
    id: "director",
    eyebrow: "DIRECTOR",
    title: "Brocade Director",
    desc: "미션크리티컬 데이터센터의 고밀도·고가용성 코어 SAN",
    products: [
      { model: "X6 Director", image: "x6.png", status: "구성 설계", specs: ["32Gbps 세대", "모듈형 확장", "엔터프라이즈 코어"] },
      { model: "X7 Director", image: "x7.png", status: "구성 설계", specs: ["64Gbps 세대", "고가용성 코어", "대규모 패브릭 확장"] },
    ],
  },
  {
    id: "extension",
    eyebrow: "SAN EXTENSION",
    title: "Brocade SAN Extension",
    desc: "원격 복제·DR·다중 사이트 SAN 연결을 위한 Extension 제품군",
    products: [
      { model: "Brocade 7810", image: "7810.png", status: "DR 설계", specs: ["SAN Extension", "원격 복제 네트워크", "지점·DR 연결"] },
      { model: "Brocade 7850", image: "7850.png", status: "DR 설계", specs: ["고성능 SAN Extension", "다중 사이트 연결", "대규모 DR 전송"] },
    ],
  },
];

export default function BrocadeSanPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <Badge color="cyan">BROCADE SAN SWITCH</Badge>
            <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">
              Fibre Channel
              <span className="mt-2 block text-navy">SAN Fabric</span>
            </h1>
            <p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
              Gen 6·Gen 7 스위치부터 X6·X7 Director와 SAN Extension까지,
              서버·스토리지 포트 수와 이중화·DR 요구사항에 맞춰 Brocade 패브릭을 설계하고 공급합니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#gen6">제품군 보기</PrimaryButton>
              <SecondaryButton href="/contact">SAN 구성 문의</SecondaryButton>
            </div>
          </div>
        </section>
        <section className="bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page space-y-20 px-6 lg:px-12">
            {families.map((family) => (
              <section id={family.id} key={family.id} className="scroll-mt-24 border-t border-slate-200 pt-8 first:border-0 first:pt-0">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">{family.eyebrow}</div><h2 className="mt-2 font-display text-3xl font-black text-slate-900">{family.title}</h2></div>
                  <p className="max-w-xl text-sm text-slate-500">{family.desc}</p>
                </div>
                <div className={`grid gap-6 md:grid-cols-2 ${family.products.length === 3 ? "xl:grid-cols-3" : ""}`}>
                  {family.products.map((product) => (
                    <article key={product.model} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                      <div className="flex aspect-[4/3] items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8">
                        <img src={`/products/san-switch/${product.image}`} alt={`Brocade ${product.model} SAN Switch`} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="p-6">
                        <div className="font-mono text-[9px] font-bold tracking-widest text-emerald">{product.status}</div>
                        <h3 className="mt-2 font-display text-2xl font-black text-slate-900">{product.model}</h3>
                        <ul className="mt-5 space-y-2">{product.specs.map((spec) => <li key={spec} className="text-xs text-slate-600">▸ {spec}</li>)}</ul>
                        <a href={`/contact?subject=${encodeURIComponent(`Brocade ${product.model} SAN Switch 공급 및 구성 문의`)}`} className="mt-6 block rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald">상세 사양 · 아인스테크 공급 견적</a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
            <p className="text-[10px] leading-5 text-slate-400">제품 분류·이미지는 파트너사 HKPIF 공개 Brocade SAN Switch 자료를 참고했습니다. 실제 공급 시 Broadcom Brocade 최신 지원 상태, 포트 라이선스, 광모듈, Fabric OS 호환성과 국내 재고를 확인해 최종 견적합니다.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
