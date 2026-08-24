"use client";

import { einswallPrices } from "./pricing";

const won = new Intl.NumberFormat("ko-KR");

export default function RackEntryConfigurator() {
  const total = einswallPrices.rack.entryConfigured;
  const annualMaintenance = Math.ceil((total * 0.15) / 10000) * 10000;
  const inquiry = encodeURIComponent("EINSWALL RACK ENTRY / Intel Atom C3758 / 8GB / 정품 500GB NVMe 구성 견적 문의");

  return (
    <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white lg:grid-cols-[1fr_360px] lg:ml-12">
      <div className="p-7 sm:p-9">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-emerald">RACK ENTRY</span>
          <span className="font-mono text-[10px] text-slate-400">19형 1U · 보급형</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900">EINSWALL RACK ENTRY</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">통신실·서버실의 표준 19형 랙에 장착하는 보급형 방화벽 서버입니다. Intel Atom C3758과 다수의 유선 인터페이스를 기반으로 지사·사무실의 방화벽, VPN 및 회선 이중화 용도에 적합합니다.</p>
        <dl className="mt-7 grid gap-3 sm:grid-cols-2">
          {[["CPU", "Intel Atom C3758 · 8코어"], ["폼팩터", "19형 1U Rackmount"], ["네트워크", "6×1GbE + 4×2.5GbE"], ["광 포트", "4×SFP"], ["메모리", "8GB 구성 기준 · 최대 32GB"], ["스토리지", "정품 500GB 권장 · 250GB 재고 확인"]].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 px-4 py-3"><dt className="font-mono text-[9px] uppercase tracking-widest text-slate-400">{label}</dt><dd className="mt-1 text-sm font-semibold text-slate-800">{value}</dd></div>
          ))}
        </dl>
        <p className="mt-5 text-[11px] leading-relaxed text-slate-400">CPU·포트 표기는 제조사 공개 사양 기준입니다. 실제 납품 사양과 부품 재고는 발주 시점에 다시 확인합니다. 랙형 고급 모델은 별도 등록 예정입니다.</p>
      </div>
      <aside className="bg-navy p-8 text-white">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Standard Configuration</div>
        <div className="mt-5 space-y-3 border-y border-white/10 py-5 text-sm text-white/75">
          {["Atom C3758", "삼성 8GB 메모리", "삼성 980 / SK하이닉스 Gold P31 500GB 정품", "기본 방화벽 OS 설치"].map((item) => <div key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald" />{item}</div>)}
        </div>
        <div className="mt-6 text-xs text-white/50">예상 장비 가격</div>
        <div className="mt-1 font-display text-3xl font-black">{won.format(total)}원</div>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-[10px] uppercase tracking-wider text-white/45">Optional Support</div><div className="mt-2 flex items-end justify-between gap-3"><span className="text-xs text-white/70">1년 원격 장애 기술지원(선택)</span><strong className="text-emerald-200">{won.format(annualMaintenance)}원</strong></div><p className="mt-2 text-sm leading-relaxed text-white/70">장애 접수·원격 점검·원인 분석·복구 안내 · 부품·출장·현장 작업 별도 · 지원 시간·SLA는 계약 시 확정</p></div>
        <p className="mt-5 text-[10px] leading-relaxed text-white/45">출장·현장 설치, 배선, 네트워크 구성, 보안 정책 설정, 랙·UPS, HA 이중화 및 유료 보안 구독은 별도입니다.</p>
        <p className="mt-3 text-[10px] font-bold leading-relaxed text-amber-100">제품 수급과 제품 특성에 따라 동급 이상의 제조사 또는 모델로 변경될 수 있으며, 최종 공급 모델은 견적서에 명시합니다.</p>
        <a href={`/contact?subject=${inquiry}`} className="mt-6 block rounded-2xl bg-emerald px-5 py-4 text-center font-bold text-white transition-colors hover:bg-white hover:text-navy">랙형 보급형 견적 문의</a>
      </aside>
    </div>
  );
}
