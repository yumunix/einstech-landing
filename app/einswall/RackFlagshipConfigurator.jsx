"use client";

import { einswallPrices, pricingPolicy } from "./pricing";

const won = new Intl.NumberFormat("ko-KR");

export default function RackFlagshipConfigurator() {
  const total = einswallPrices.rack.flagshipConfigured;
  const annualMaintenance = Math.ceil((total * 0.15) / 10000) * 10000;
  const inquiry = encodeURIComponent("EINSWALL RACK FLAGSHIP / LGA1700 플랫폼 / 16GB / 500·512GB NVMe 구성 견적 문의");

  return (
    <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white lg:grid-cols-[1fr_360px] lg:ml-12">
      <div className="p-7 sm:p-9">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-emerald">RACK FLAGSHIP</span>
          <span className="font-mono text-[10px] text-slate-400">19형 2U · 최고급형</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900">EINSWALL RACK FLAGSHIP</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">통신실·서버실의 표준 19형 랙에 장착하는 확장형 2U 방화벽 서버입니다. Intel 12~14세대 LGA1700 플랫폼과 대규모 10G 인터페이스를 기반으로 지사·사무실의 방화벽, VPN 및 회선 이중화 용도에 적합합니다.</p>
        <dl className="mt-7 grid gap-3 sm:grid-cols-2">
          {[["CPU", "Intel 12~14세대 LGA1700 · CPU 선택"], ["폼팩터", "19형 2U Rackmount"], ["네트워크", "최대 16×RJ45"], ["광 포트", "최대 8×10G SFP+"], ["메모리", "16GB 구성 기준"], ["스토리지", "500/512GB NVMe 구성 기준"]].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 px-4 py-3"><dt className="font-mono text-[9px] uppercase tracking-widest text-slate-400">{label}</dt><dd className="mt-1 text-sm font-semibold text-slate-800">{value}</dd></div>
          ))}
        </dl>
        <p className="mt-5 text-[11px] leading-relaxed text-slate-400">CPU·포트 표기는 공급 원제품의 공개 사양 기준입니다. 실제 납품 사양과 부품 재고는 발주 시점에 다시 확인합니다. CPU와 네트워크 확장카드는 요구 처리량에 따라 별도 견적입니다.</p>
      </div>
      <aside className="bg-navy p-8 text-white">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Standard Configuration</div>
        <div className="mt-5 space-y-3 border-y border-white/10 py-5 text-sm text-white/75">
          {["LGA1700 플랫폼", "16GB 메모리", "500/512GB NVMe", "기본 방화벽 OS 설치"].map((item) => <div key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald" />{item}</div>)}
        </div>
        <div className="mt-6 text-xs text-white/50">예상 공급가 · VAT 별도</div>
        <div className="mt-1 font-display text-3xl font-black">{won.format(total)}원</div>
        <div className="mt-2 font-mono text-[10px] leading-relaxed text-white/40">원제품 US$651.90 · 고정환율 {won.format(pricingPolicy.fixedUsdKrw)}원 · 수입비용 {(pricingPolicy.importTaxRate * 100).toFixed(0)}% · 만원 단위 올림<br />가격 기준 {pricingPolicy.effectiveMonth}</div>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-[10px] uppercase tracking-wider text-white/45">Optional Support</div><div className="mt-2 flex items-end justify-between gap-3"><span className="text-xs text-white/70">연간 장애 대응</span><strong className="text-emerald-200">{won.format(annualMaintenance)}원</strong></div></div>
        <p className="mt-5 text-[10px] leading-relaxed text-white/45">VAT, 출장·현장 설치, 배선, 네트워크 구성, 보안 정책 설정, 랙·UPS, HA 이중화 및 유료 보안 구독은 별도입니다.</p>
        <a href={`/contact?subject=${inquiry}`} className="mt-6 block rounded-2xl bg-emerald px-5 py-4 text-center font-bold text-white transition-colors hover:bg-white hover:text-navy">랙형 최고급형 견적 문의</a>
      </aside>
    </div>
  );
}
