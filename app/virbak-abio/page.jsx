import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/virbak-abio",
  title: "VIRBAK ABIO 백업 소프트웨어·어플라이언스 | EINSTECH",
  description: "국산 엔터프라이즈 백업 VIRBAK ABIO Version 5.0과 VIRBAK Backup Appliance를 환경에 맞게 설계·구축·유지보수합니다.",
  keywords: ["VIRBAK ABIO", "VIRBAK Backup Appliance", "국산 백업 소프트웨어", "백업 어플라이언스", "중복제거", "재해복구"],
});

const softwareFeatures = [
  ["통합 관리", "하나의 콘솔에서 다수 백업 서버와 스토리지 도메인을 모니터링하고 REST API로 연계합니다."],
  ["가상화 백업", "Agentless VM 백업·복구, CBT 증분, Hot-add와 Off-host·SAN 백업 구성을 지원합니다."],
  ["인라인 중복제거", "백업 저장과 동시에 중복 데이터를 제거해 추가 처리 시간과 저장공간 사용을 줄입니다."],
  ["DR·원격 복제", "테이프 복제 자동화와 원격지 볼륨 복제로 별도 카탈로그 이관 없이 복구할 수 있도록 구성합니다."],
];

const applianceModels = [
  { model: "1050S", scale: "중소규모", capacity: "최대 16 / 32TB", network: "1/10GbE", summary: "간결한 백업 통합을 시작하는 엔트리 어플라이언스" },
  { model: "2050S", scale: "중소규모", capacity: "최대 40 / 80TB", network: "1/10GbE", summary: "확장된 서버·스토리지 환경을 위한 표준 구성" },
  { model: "4050S", scale: "중대규모", capacity: "최대 56 / 112TB", network: "1/10GbE", summary: "더 높은 처리량과 확장성을 요구하는 데이터센터" },
  { model: "MD50", scale: "대규모", capacity: "최대 768TB", network: "1/10/25GbE", summary: "인라인 중복제거와 다중 복제를 갖춘 대용량 플랫폼" },
  { model: "HD50", scale: "초대규모", capacity: "최대 1.5PB", network: "1/10/25/100GbE", summary: "PB급 백업과 고속 복제 환경을 위한 플래그십" },
];

export default function VirbakAbioPage(){
  return <>
    <Header/>
    <main className="pt-16">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="ds-scanline-overlay" aria-hidden/>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-acid/10" aria-hidden/>
        <div className="relative z-10 mx-auto max-w-page px-6 lg:px-12">
          <div className="mb-7 flex flex-wrap items-center gap-3"><Badge color="cyan">ENTERPRISE_BACKUP</Badge><span className="font-mono text-xs uppercase tracking-widest text-slate-500">BA Infra · Version 5.0</span></div>
          <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-slate-900">VIRBAK<br/><span className="text-emerald">ABIO</span></h1>
              <p className="mt-8 max-w-3xl font-sans text-xl leading-relaxed text-slate-600">이기종 Multi-Vendor 환경을 하나의 콘솔로 관리하는 국산 엔터프라이즈 백업. 소프트웨어 단독 구성부터 All-in-One 어플라이언스까지 운영 규모에 맞춰 제공합니다.</p>
              <div className="mt-9 flex flex-wrap gap-3"><PrimaryButton href="/contact">도입 구성 상담</PrimaryButton><SecondaryButton href="#lineup">제품군 비교</SecondaryButton></div>
            </div>
            <GlassPanel className="p-7"><div className="font-mono text-[10px] uppercase tracking-widest text-emerald">PROTECTION_SCOPE</div><div className="mt-5 space-y-4">{["SAN · NAS · DAS", "상용 DBMS · 이기종 OS", "물리 · 가상화 환경", "소규모부터 PB급 확장"].map(item=><div key={item} className="flex items-center gap-3 border-b border-slate-200 pb-3 text-sm font-bold text-slate-800"><span className="h-2 w-2 rounded-full bg-emerald"/>{item}</div>)}</div></GlassPanel>
          </div>
        </div>
      </section>

      <section id="lineup" className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-12">
          <div className="mb-12"><div className="font-mono text-xs tracking-widest text-emerald">TWO_DEPLOYMENT_OPTIONS</div><h2 className="mt-3 font-display text-4xl font-bold text-slate-900">환경에 맞는 두 가지 제품군</h2></div>
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassPanel className="flex flex-col p-8 lg:p-10"><Badge color="acid">BACKUP_SOFTWARE</Badge><h3 className="mt-6 font-display text-3xl font-bold text-slate-900">VIRBAK ABIO Version 5.0</h3><p className="mt-4 leading-relaxed text-slate-600">기존 서버·스토리지 인프라를 활용하면서 중앙 통합관리, 가상화 보호, 중복제거와 재해복구 기능을 도입하는 소프트웨어 방식입니다.</p><ul className="mt-7 space-y-3 text-sm text-slate-700">{["기존 하드웨어를 활용한 유연한 설계","다수 백업 서버·스토리지 도메인 통합","REST API 기반 운영 시스템 연계","단계별 라이선스와 옵션 확장"].map(item=><li key={item} className="flex gap-3"><span className="text-emerald">✓</span>{item}</li>)}</ul><a href="https://bainfra.com/product/software.php" target="_blank" rel="noreferrer" className="mt-8 text-sm font-bold text-navy hover:text-emerald">제조사 Backup Software 자료 →</a></GlassPanel>
            <GlassPanel className="flex flex-col p-8 lg:p-10"><Badge color="cyan">BACKUP_APPLIANCE</Badge><h3 className="mt-6 font-display text-3xl font-bold text-slate-900">VIRBAK Backup Appliance</h3><p className="mt-4 leading-relaxed text-slate-600">백업 서버, 디스크 스토리지와 VIRBAK 소프트웨어를 통합해 설치·호환성 검증과 운영 복잡도를 줄인 All-in-One 방식입니다.</p><ul className="mt-7 space-y-3 text-sm text-slate-700">{["검증된 HW·SW 통합 설계","빠른 구축과 일관된 관리 화면","RAID 6 + Hot Spare 기반 안정성","중소규모부터 PB급까지 모델 선택"].map(item=><li key={item} className="flex gap-3"><span className="text-emerald">✓</span>{item}</li>)}</ul><a href="https://bainfra.com/product/app.php" target="_blank" rel="noreferrer" className="mt-8 text-sm font-bold text-navy hover:text-emerald">제조사 Backup Appliance 자료 →</a></GlassPanel>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-12">
          <div className="mb-10"><div className="font-mono text-xs tracking-widest text-emerald">SOFTWARE_CAPABILITIES</div><h2 className="mt-3 font-display text-4xl font-bold text-slate-900">백업 운영의 핵심 기능</h2></div>
          <div className="grid gap-5 md:grid-cols-2">{softwareFeatures.map(([title,desc],index)=><GlassPanel key={title} className="p-7"><div className="font-mono text-xs text-emerald">0{index+1}</div><h3 className="mt-3 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p></GlassPanel>)}</div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-12">
          <div className="mb-10"><div className="font-mono text-xs tracking-widest text-emerald">APPLIANCE_LINEUP</div><h2 className="mt-3 font-display text-4xl font-bold">Backup Appliance 모델</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">표기 용량은 제조사 공개 개요 기준이며 실제 구성은 보호 데이터, 증가율, 보관기간, 중복제거율과 RPO/RTO 분석 후 확정합니다.</p></div>
          <div className="overflow-x-auto rounded-2xl border border-white/15"><table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-white/10 text-white/70"><tr><th className="p-4">모델</th><th className="p-4">환경 규모</th><th className="p-4">공개 최대 가용량</th><th className="p-4">Ethernet</th><th className="p-4">권장 용도</th></tr></thead><tbody>{applianceModels.map(item=><tr key={item.model} className="border-t border-white/10"><td className="p-4 font-bold text-emerald">VIRBAK {item.model}</td><td className="p-4">{item.scale}</td><td className="p-4">{item.capacity}</td><td className="p-4">{item.network}</td><td className="p-4 text-white/70">{item.summary}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-6 text-center"><Badge color="acid">EINSTECH_DELIVERY</Badge><h2 className="mt-6 font-display text-4xl font-bold text-slate-900">제품보다 먼저 복구 목표를 설계합니다</h2><p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-600">백업 대상·용량·보관주기·DR 위치를 진단하고, Software와 Appliance 중 비용과 운영에 맞는 구성을 제안한 뒤 구축·복구훈련·유지보수까지 지원합니다.</p><div className="mt-8"><PrimaryButton href="/contact">VIRBAK ABIO 상담 요청</PrimaryButton></div></div></section>
    </main>
    <Footer/>
  </>;
}
