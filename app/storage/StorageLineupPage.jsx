import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { storageProducts } from "./products";

const storageSlugByName = Object.fromEntries(storageProducts.map((product) => [product.name, product.slug]));

const hitachiFlash = [
  { name: "VSP One Block 20 Series", image: "hitachi-vsp-one-block.webp", tag: "ALL-FLASH · NVME", desc: "기업 규모와 워크로드에 맞춰 확장하는 2U All-NVMe 블록 스토리지 제품군입니다.", specs: ["모델: VSP One Block 24 · 26 · 28 · 26 QLC", "NVMe/FC · NVMe/TCP · 25G iSCSI · 64G FC", "모델별 최대 14.1PBe 유효용량 · 최대 32개 호스트 포트", "100% 데이터 가용성 · GAD · Immutable Snapshot"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/vsp_one_block_20_series.do" },
  { name: "VSP One Block High End", image: "hitachi-vsp-one-block-high-end.webp", tag: "HIGH-END · ALL-NVME", desc: "VSP 5000 Series를 계승해 오픈시스템과 메인프레임 핵심 업무를 통합하는 차세대 High-End 스토리지입니다.", specs: ["모델: VSP One Block 85", "최대 5,000만 IOPS · 최대 18.6PB 유효용량", "2 · 4 · 6노드 아키텍처", "8-Nines 가용성 · GAD · FIPS 140-3"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/vsp-one-block/high-end" },
];

const hitachiNetwork = [
  { name: "VSP One File", image: "hitachi-vsp-one-file.webp", tag: "FILE · SCALE-OUT", desc: "클라우드와 컨테이너 환경의 비정형 데이터를 위한 고성능 네트워크 스토리지입니다.", specs: ["모델: VSP One File 32 · 34 · 38", "NFS v2/v3/v4/v4.1 · SMB2/SMB3 · iSCSI · FTP", "10/25/100GbE 네트워크", "모델별 최대 2 · 4 · 8노드 확장"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/vsp_one_file.do" },
  { name: "VSP One Object", image: "hitachi-vsp-one-object.webp", tag: "OBJECT · S3 NATIVE", desc: "AI·분석·데이터 레이크하우스를 위한 확장형 S3 네이티브 오브젝트 스토리지입니다.", specs: ["Amazon S3 Tables · Apache Iceberg 연계", "수십억 오브젝트 Scale-out", "불변 데이터 · 대규모 클린 복구", "Appliance · SDS · As-a-Service"], link: "https://www.hitachivantara.com/en-us/products/storage-platforms/object-storage" },
  { name: "VSP One Unified", image: "hitachi-vsp-one-unified.jpg", tag: "UNIFIED · BLOCK + FILE", desc: "All-NVMe 또는 Hybrid 기반에서 Block과 File 서비스를 통합 제공하는 플랫폼입니다.", specs: ["모델: VSP One Unified F34 · F38", "10/25/100GbE 네트워크 옵션", "CIFS · NFS 동시 서비스 · NFS 4.1", "100% 데이터 가용성 · Snapshot · 복제 · WORM"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/vsp_one_unified.do" },
  { name: "Hitachi NAS Platform", image: "hitachi-nas-platform.jpg", tag: "ENTERPRISE NAS", desc: "엔터프라이즈와 데이터센터의 분산 파일 워크로드를 위한 고가용성 NAS 플랫폼입니다.", specs: ["NFS · CIFS · iSCSI 파일/블록 서비스", "Active-Active 원격 클러스터링", "100% 데이터 가용성 · WORM 지원", "하드웨어 가속 파일시스템 · Cloud Tiering"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/hitachi_nas_platform.do" },
  { name: "HIS NAS H-Scaleway SG5000", image: "his-nas-sg5000.jpg", tag: "SCALE-OUT NAS", desc: "대용량 비정형 데이터와 멀티 워크로드 환경을 위한 HIS Scale-out NAS 제품군입니다.", specs: ["H-Scaleway SG5000 제품군", "Scale-out 확장 아키텍처", "대용량 파일 · 멀티 워크로드", "용량 · 노드 · 네트워크 맞춤 구성"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/his_nas_h-scaleway_sg5000.do" },
  { name: "HIS NAS GNAS 9000E Series", image: "his-nas-gnas-9000e.jpg", tag: "ENTERPRISE NAS", desc: "기업 파일 서비스와 데이터센터 애플리케이션을 위한 HIS 엔터프라이즈 NAS 제품군입니다.", specs: ["GNAS 9000E Series", "엔터프라이즈 파일 공유", "고가용성 · 대용량 확장 구성", "워크로드 기준 맞춤 사양 선정"], link: "https://www.his21.co.kr/his/product/digital_enterprise/storage/his_nas_gnas_9000e_series.do" },
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
  return <article className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm"><div className="flex aspect-[16/9] items-center justify-center border-b border-slate-100 bg-white p-6"><img src={`/products/storage/${product.image}`} alt={`${product.name} 공식 제품군 이미지`} className="max-h-full max-w-full object-contain" /></div><div className="p-6"><div className="font-mono text-[9px] font-bold tracking-[0.18em] text-emerald">{product.tag}</div><h3 className="mt-2 font-display text-2xl font-black text-slate-900">{product.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{product.desc}</p><ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">{product.specs.map((spec) => <li key={spec} className="text-xs leading-5 text-slate-600">▸ {spec}</li>)}</ul><div className="mt-6 grid gap-2 sm:grid-cols-2"><a href={`/contact?subject=${encodeURIComponent(`${product.name} 구성 견적`)}`} className="rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald">구성 상담 · 견적</a><a href={`/storage/${storageSlugByName[product.name]}`} className="rounded-xl border border-slate-200 px-4 py-3 text-center text-xs font-bold text-slate-700 hover:border-navy">제품 상세 보기</a></div></div></article>;
}

function ProductSection({ code, title, description, products }) {
  return <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">{code}</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">{title}</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{description}</p><div className="mt-10 grid gap-6 lg:grid-cols-2">{products.map((product) => <FamilyCard key={product.name} product={product} />)}</div></div></section>;
}

export default function StorageLineupPage() {
  return <><Header /><main className="pt-16"><section className="py-24 lg:py-32"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><Badge color="cyan">ENTERPRISE_STORAGE</Badge><h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">Storage</h1><p className="mt-4 font-display text-xl font-bold text-navy sm:text-3xl">Hitachi Vantara · Infortrend · WORM Storage</p><p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">High-End·DR은 Hitachi VSP One, 비용 효율적인 SAN·NAS·통합 스토리지는 Infortrend EonStor를 기준으로 설계합니다. 용량만 비교하지 않고 성능, 프로토콜, 이중화, 복제와 백업 보존정책까지 함께 구성하며, WORM Storage를 독립 제품군으로 제공합니다.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="#hitachi">Hitachi 제품군</PrimaryButton><SecondaryButton href="#worm">WORM Storage</SecondaryButton><SecondaryButton href="/contact?subject=Storage%20구성%20상담">구성 상담</SecondaryButton></div></div></section>
  <div id="hitachi" className="scroll-mt-20 bg-slate-50"><ProductSection code="HITACHI_ALL_FLASH_HYBRID" title="올플래시 & 하이브리드 스토리지" description="기업 규모, 업무 형태, 다양한 사용자 환경과 요구 수준에 따라 최적의 맞춤 인프라를 구성합니다. Hitachi Vantara의 고가용성 데이터 플랫폼으로 비즈니스 전략 실행을 뒷받침합니다." products={hitachiFlash} /></div>
  <div className="bg-white"><ProductSection code="HITACHI_NETWORK_STORAGE" title="네트워크 스토리지" description="클라우드 통합과 Docker·Kubernetes 등 컨테이너 플랫폼 연동을 지원하고, 멀티 워크로드 환경을 위한 고성능 네트워크 스토리지 플랫폼을 구성합니다." products={hitachiNetwork} /></div>
  <ProductSection code="INFORTREND_EONSTOR" title="Infortrend EonStor 제품군" description="GS·GSe·DS·CS의 역할을 구분해 예산, 프로토콜, 컨트롤러 이중화와 확장 방식에 맞는 모델을 선정합니다." products={infortrend} />
  <section id="worm" className="scroll-mt-20 bg-navy py-20 text-white lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald-300">WORM_STORAGE_LINEUP</div><h2 className="mt-3 font-display text-4xl font-black">WORM Storage 제품군</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">WORM은 브랜드보다 접근 프로토콜과 규제 수준이 중요합니다. 파일 WORM, S3 Object Lock, 테이프 WORM을 보존 대상과 복구 방식에 맞춰 선택합니다.</p><div className="mt-10 overflow-hidden rounded-2xl border border-white/15"><div className="hidden grid-cols-[0.7fr_1fr_0.8fr_1.6fr] gap-4 bg-white/10 px-5 py-3 text-xs font-bold md:grid"><span>브랜드</span><span>제품</span><span>방식</span><span>적합 용도</span></div>{wormOptions.map((item) => <div key={item.product} className="grid gap-2 border-t border-white/10 px-5 py-5 text-sm first:border-t-0 md:grid-cols-[0.7fr_1fr_0.8fr_1.6fr] md:gap-4"><strong className="text-emerald-300">{item.vendor}</strong><span className="font-bold">{item.product}</span><span className="text-white/70">{item.type}</span><span className="text-white/70">{item.fit}</span></div>)}</div><p className="mt-6 text-xs leading-6 text-white/60">규제 준수 목적이면 제품명만으로 판단하지 않고 Compliance Mode, 관리자 우회 가능 여부, Legal Hold, 보존시계와 인증 범위를 확인해야 합니다.</p></div></section>
  </main><Footer /></>;
}
