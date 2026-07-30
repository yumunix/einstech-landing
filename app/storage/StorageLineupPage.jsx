import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

const hitachi = [
  { name: "VSP One Block 20", image: "hitachi-vsp-one-block.webp", tag: "MIDRANGE · ALL-FLASH", desc: "중견·엔터프라이즈 업무를 위한 2U NVMe All-Flash 블록 스토리지입니다.", specs: ["모델: VSP One Block 24 · 26 · 28", "FC / iSCSI / NVMe over TCP", "최대 32개 호스트 포트 · 최대 1.8PBe", "Immutable Snapshot · GAD · 원격 복제"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/vsp-one-block" },
  { name: "VSP One Block 85", image: "hitachi-vsp-one-block-high-end.webp", tag: "HIGH-END · MISSION CRITICAL", desc: "대규모 기간계와 메인프레임까지 통합하는 고성능 High-End 블록 스토리지입니다.", specs: ["Open Systems · Mainframe 통합", "NVMe 기반 초저지연 아키텍처", "Global-Active Device · 무중단 운영", "VSP 360 통합 관리 · DR 구성"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/vsp-one-block/high-end" },
  { name: "VSP One File", image: "hitachi-vsp-one-file.webp", tag: "FILE · SCALE-UP / SCALE-OUT", desc: "기업 파일서비스와 AI 데이터 파이프라인을 위한 사이버 복원력 기반 NAS 플랫폼입니다.", specs: ["NFS · SMB 파일 서비스", "Scale-up · Scale-out 확장", "엔터프라이즈 NAS · 비정형 데이터", "하이브리드 클라우드 · 데이터 보호 연계"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/file-storage/network-attached-storage" },
  { name: "VSP One Object · HCP", image: "hitachi-vsp-one-object.webp", tag: "OBJECT · WORM", desc: "S3 기반 데이터레이크와 규제 보존, 불변 백업을 위한 오브젝트 스토리지입니다.", specs: ["S3 Object Storage · 대규모 확장", "Immutability · Retention · Legal Hold", "HCP 규제 준수 WORM 보관", "Acronis · NetBackup 백업 연계"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/object-storage" },
];

const infortrend = [
  { name: "EonStor GS", image: "infortrend-gs.jpg", tag: "UNIFIED · DUAL CONTROLLER", desc: "SAN·NAS·Object·Cloud Gateway를 통합한 고가용성 듀얼 컨트롤러 스토리지입니다.", specs: ["대표: GS 4000 G3 · GS 3000 G3 · GS 2000", "GS 4000 G3 최대 읽기 16GB/s · 쓰기 12GB/s", "2U 12-bay부터 4U 90-bay", "FC 32G · iSCSI 25G · SAS 호스트 옵션"], link: "https://www.infortrend.com/global/products/GS" },
  { name: "EonStor GSe", image: "infortrend-gse.jpg", tag: "UNIFIED · VALUE", desc: "예산 효율적인 단일 컨트롤러 기반 통합 스토리지로 중소기업과 지사 환경에 적합합니다.", specs: ["대표: GSe 4000 G3 · GSe 3000 G3", "SAN · NAS · Object · Cloud Gateway", "2U 12-bay부터 4U 90-bay", "Scale-out 및 확장 인클로저 지원"], link: "https://www.infortrend.com/global/Products/gse" },
  { name: "EonStor DS", image: "infortrend-ds.jpg", tag: "SAN · HIGH AVAILABILITY", desc: "데이터베이스와 가상화를 위한 고가용성 전용 SAN 스토리지 제품군입니다.", specs: ["대표: DS 4000U · DS 4000 · DS 3000E", "DS 4000U 최대 11GB/s 읽기 · 1M IOPS", "32G FC · 25GbE iSCSI · 12G SAS", "최대 448 드라이브 · PB급 확장"], link: "https://www.infortrend.com/global/products/DS" },
  { name: "EonStor CS", image: "infortrend-cs.jpg", tag: "SCALE-OUT NAS", desc: "미디어·HPC·영상·백업의 대용량 비정형 데이터를 위한 Scale-out NAS입니다.", specs: ["대표: CS 4000U · CS 4000 · CS 3000 · CS 2000", "최대 144노드 Scale-out", "최대 100GB/s · 100PB급 확장", "단일 Namespace · Erasure Code · Replica"], link: "https://www.infortrend.com/global/products/cs" },
];

const wormOptions = [
  { vendor: "Hitachi", product: "VSP One Object · HCP", type: "S3 Object WORM", fit: "백업 불변 보관·규제 보존·대규모 오브젝트" },
  { vendor: "NetApp", product: "ONTAP SnapLock", type: "File WORM", fit: "SMB/NFS 파일 단위 Compliance·Enterprise 보존" },
  { vendor: "Dell", product: "ECS S3 Object Lock", type: "S3 Object WORM", fit: "백업 저장소·오브젝트 데이터·Retention" },
  { vendor: "IBM", product: "Cloud Object Storage", type: "Object WORM", fit: "온프레미스/클라우드 PB~EB급 Immutable Object" },
  { vendor: "Quantum", product: "LTO WORM", type: "Tape WORM", fit: "장기 오프라인 보존·Air Gap·규제 아카이브" },
];

function FamilyCard({ product }) {
  return <article className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm"><div className="flex aspect-[16/9] items-center justify-center border-b border-slate-100 bg-white p-6"><img src={`/products/storage/${product.image}`} alt={`${product.name} 공식 제품군 이미지`} className="max-h-full max-w-full object-contain" /></div><div className="p-6"><div className="font-mono text-[9px] font-bold tracking-[0.18em] text-emerald">{product.tag}</div><h3 className="mt-2 font-display text-2xl font-black text-slate-900">{product.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{product.desc}</p><ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">{product.specs.map((spec) => <li key={spec} className="text-xs leading-5 text-slate-600">▸ {spec}</li>)}</ul><div className="mt-6 grid gap-2 sm:grid-cols-2"><a href={`/contact?subject=${encodeURIComponent(`${product.name} 구성 견적`)}`} className="rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald">구성 상담 · 견적</a><a href={product.link} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 px-4 py-3 text-center text-xs font-bold text-slate-700 hover:border-navy">공식 제품 정보</a></div></div></article>;
}

function ProductSection({ code, title, description, products }) {
  return <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">{code}</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">{title}</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{description}</p><div className="mt-10 grid gap-6 lg:grid-cols-2">{products.map((product) => <FamilyCard key={product.name} product={product} />)}</div></div></section>;
}

export default function StorageLineupPage() {
  return <><Header /><main className="pt-16"><section className="py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><Badge color="cyan">ENTERPRISE_STORAGE</Badge><h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">Storage</h1><p className="mt-4 font-display text-xl font-bold text-navy sm:text-3xl">Hitachi Vantara · Infortrend</p><p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">High-End·DR은 Hitachi VSP One, 비용 효율적인 SAN·NAS·통합 스토리지는 Infortrend EonStor를 기준으로 설계합니다. 용량만 비교하지 않고 성능, 프로토콜, 이중화, 복제와 백업 보존정책까지 함께 구성합니다.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="#hitachi">제품군 보기</PrimaryButton><SecondaryButton href="/contact?subject=Storage%20구성%20상담">구성 상담</SecondaryButton></div></div></section>
  <div id="hitachi" className="scroll-mt-20 bg-slate-50"><ProductSection code="HITACHI_VANTARA" title="Hitachi VSP One 제품군" description="Block·File·Object를 VSP One 데이터 플랫폼으로 구성하며, 미션크리티컬 환경에는 고가용성과 원격 DR을 결합합니다." products={hitachi} /></div>
  <ProductSection code="INFORTREND_EONSTOR" title="Infortrend EonStor 제품군" description="GS·GSe·DS·CS의 역할을 구분해 예산, 프로토콜, 컨트롤러 이중화와 확장 방식에 맞는 모델을 선정합니다." products={infortrend} />
  <section className="bg-navy py-20 text-white lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald-300">WORM_STORAGE_OPTIONS</div><h2 className="mt-3 font-display text-4xl font-black">Hitachi 외 WORM Storage 대안</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">WORM은 브랜드보다 접근 프로토콜과 규제 수준이 중요합니다. 파일 WORM, S3 Object Lock, 테이프 WORM을 보존 대상과 복구 방식에 맞춰 선택합니다.</p><div className="mt-10 overflow-hidden rounded-2xl border border-white/15"><div className="hidden grid-cols-[0.7fr_1fr_0.8fr_1.6fr] gap-4 bg-white/10 px-5 py-3 text-xs font-bold md:grid"><span>브랜드</span><span>제품</span><span>방식</span><span>적합 용도</span></div>{wormOptions.map((item) => <div key={item.product} className="grid gap-2 border-t border-white/10 px-5 py-5 text-sm first:border-t-0 md:grid-cols-[0.7fr_1fr_0.8fr_1.6fr] md:gap-4"><strong className="text-emerald-300">{item.vendor}</strong><span className="font-bold">{item.product}</span><span className="text-white/70">{item.type}</span><span className="text-white/70">{item.fit}</span></div>)}</div><p className="mt-6 text-xs leading-6 text-white/60">규제 준수 목적이면 제품명만으로 판단하지 않고 Compliance Mode, 관리자 우회 가능 여부, Legal Hold, 보존시계와 인증 범위를 확인해야 합니다.</p></div></section>
  </main><Footer /></>;
}
