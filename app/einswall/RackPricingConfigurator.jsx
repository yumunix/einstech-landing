"use client";

import { useEffect, useMemo, useState } from "react";
import { einswallPrices, pricingPolicy } from "./pricing";
import PricingComparison from "./PricingComparison";

const won = new Intl.NumberFormat("ko-KR");

const families = {
  entry: {
    badge: "RACK ENTRY LINE",
    title: "랙마운트 보급형",
    chassis: "19형 1U",
    network: "6×1GbE + 4×2.5GbE + 4×SFP",
    image: "/products/e-gate/einswall-rack-entry-v2.png",
    base: einswallPrices.rack.entryConfigured,
    source: "US$366.63",
    cpus: [
      { id: "c3758", label: "Atom C3758", image: "/products/e-gate/rack-entry-c3758.webp", detail: "8코어 · 지사·소규모 사업장", users: "처리량·정책 기준 별도 산정", price: 0 },
      { id: "c3808", label: "Atom C3808", image: "/products/e-gate/rack-entry-c3808.webp", detail: "12코어 · 다중 VPN", users: "처리량·정책 기준 별도 산정", price: 300000 },
      { id: "c3958", label: "Atom C3958", image: "/products/e-gate/rack-entry-c3958.webp", detail: "16코어 · 고부하 정책", users: "처리량·정책 기준 별도 산정", price: 500000 },
    ],
  },
  advanced: {
    badge: "RACK ADVANCED LINE",
    title: "랙마운트 고급형",
    chassis: "19형 1U",
    network: "8×2.5GbE + 4×10G SFP+",
    image: "/products/e-gate/einswall-rack-advanced-v2.png",
    base: einswallPrices.rack.advancedConfigured,
    source: "US$763.88",
    cpus: [
      { id: "i5", label: "Core i5-13400", image: "/products/e-gate/rack-advanced-i5.webp", detail: "10코어 · 기업 표준형", users: "처리량·정책 기준 별도 산정", price: 0 },
      { id: "i7", label: "Core i7-13700", image: "/products/e-gate/rack-advanced-i7.webp", detail: "16코어 · VPN·IDS/IPS", users: "처리량·정책 기준 별도 산정", price: 400000 },
      { id: "i9", label: "Core i9-13900", image: "/products/e-gate/rack-advanced-i9.webp", detail: "24코어 · 고부하 10G", users: "처리량·정책 기준 별도 산정", price: 700000 },
    ],
  },
  flagship: {
    badge: "RACK FLAGSHIP LINE",
    title: "랙마운트 최고급형",
    chassis: "19형 2U",
    network: "최대 16×RJ45 + 8×10G SFP+",
    image: "/products/e-gate/einswall-rack-flagship-v2.png",
    base: einswallPrices.rack.flagshipConfigured,
    source: "US$651.90 플랫폼",
    cpus: [
      { id: "12g", label: "12세대 LGA1700", image: "/products/e-gate/rack-flagship-12g.webp", detail: "검증된 비용 최적화 구성", users: "요구 처리량별 설계", price: 300000 },
      { id: "13g", label: "13세대 LGA1700", image: "/products/e-gate/rack-flagship-13g.webp", detail: "고성능 멀티코어 구성", users: "요구 처리량별 설계", price: 600000 },
      { id: "14g", label: "14세대 LGA1700", image: "/products/e-gate/rack-flagship-14g.webp", detail: "최상위 확장 구성", users: "요구 처리량별 설계", price: 900000 },
    ],
  },
};

const memoryOptions = [
  { id: "8", label: "8GB", detail: "삼성전자 · 기본 구성", price: einswallPrices.memory["8"] },
  { id: "16", label: "16GB", detail: "삼성전자 · VPN·IDS/IPS 권장", price: einswallPrices.memory["16"] },
  { id: "32", label: "32GB", detail: "삼성전자 · 최대 구성", price: einswallPrices.memory["32"] },
];
const storageOptions = [
  { id: "128", label: "128GB NVMe", detail: "삼성전자 · 기본 구성", price: einswallPrices.storage["128"] },
  { id: "256", label: "256GB NVMe", detail: "삼성전자", price: einswallPrices.storage["256"] },
  { id: "512", label: "500/512GB NVMe", detail: "삼성전자 · 최대 구성", price: einswallPrices.storage["512"] },
];
const moduleOptions = [
  { id: "none", label: "모듈 미포함", detail: "보유 모듈 사용", price: 0 },
  { id: "2", label: "10G GBIC 2개", detail: "멀티모드 · 호환성 검수", price: einswallPrices.sfpModule["2"] },
  { id: "4", label: "10G GBIC 4개", detail: "멀티모드 · 호환성 검수", price: einswallPrices.sfpModule["4"] },
];

function OptionGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500">{label}</legend>
      <div className={`grid grid-cols-1 gap-3 ${options.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
        {options.map((option) => {
          const active = value === option.id;
          return (
            <button key={option.id} type="button" onClick={() => onChange(option.id)} aria-pressed={active} className={`rounded-2xl border p-4 text-left transition-all ${active ? "border-navy bg-navy text-white shadow-lg" : "border-slate-200 bg-white text-slate-700 hover:border-navy/40"}`}>
              {option.image && <img src={option.image} alt="" className="mb-3 aspect-[4/3] w-full rounded-xl object-cover" />}
              <span className="block font-display text-sm font-bold">{option.label}</span>
              <span className={`mt-1 block text-[11px] ${active ? "text-white/65" : "text-slate-400"}`}>{option.detail}</span>
              {option.price > 0 && <span className={`mt-2 block font-mono text-[11px] ${active ? "text-emerald-200" : "text-navy"}`}>+{won.format(option.price)}원</span>}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function RackPricingConfigurator({ familyId }) {
  const family = families[familyId];
  const [cpu, setCpu] = useState(family.cpus[0].id);
  const [memory, setMemory] = useState("8");
  const [storage, setStorage] = useState("128");
  const [modules, setModules] = useState("none");
  useEffect(() => {
    const selectModel = (event) => {
      if (event.detail?.family === familyId && family.cpus.some((item) => item.id === event.detail.model)) setCpu(event.detail.model);
    };
    window.addEventListener("einswall:model-select", selectModel);
    return () => window.removeEventListener("einswall:model-select", selectModel);
  }, [family, familyId]);
  const selected = useMemo(() => ({
    cpu: family.cpus.find((item) => item.id === cpu),
    memory: memoryOptions.find((item) => item.id === memory),
    storage: storageOptions.find((item) => item.id === storage),
    modules: moduleOptions.find((item) => item.id === modules),
  }), [family, cpu, memory, storage, modules]);
  const total = family.base + selected.cpu.price + selected.memory.price + selected.storage.price + (familyId === "entry" ? 0 : selected.modules.price);
  const maintenance = Math.ceil((total * 0.15) / 10000) * 10000;
  const modelName = `EINSWALL ${familyId.toUpperCase()} ${selected.cpu.label}`;
  const inquiry = encodeURIComponent(`${modelName} / ${selected.memory.label} / ${selected.storage.label} / ${selected.modules.label} 견적 문의`);

  return (
    <section id={`pricing-${familyId}`} className="scroll-mt-24 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm lg:ml-12">
      <div className="border-b border-slate-200 bg-slate-950 p-7 text-white sm:p-9">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-300">{family.badge}</div>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h3 className="font-display text-3xl font-black">{family.title}</h3><p className="mt-2 text-sm text-white/50">{family.chassis} · {family.network}</p></div><div className="text-right font-mono text-[10px] text-white/35">독립 제품군 · CPU별 개별 모델</div></div>
      </div>
      <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[360px_1fr_340px]">
        <div className="overflow-hidden rounded-[28px] bg-slate-950">
          <img src={selected.cpu.image} alt={`${modelName} 실제 제품 이미지`} className="aspect-square w-full object-cover" />
          <div className="border-t border-white/10 p-5 text-white"><div className="font-mono text-[9px] tracking-widest text-cyan-300">SELECTED MODEL</div><div className="mt-1 font-display text-xl font-bold">{selected.cpu.label}</div><p className="mt-2 text-xs leading-relaxed text-white/45">{selected.cpu.detail}</p></div>
        </div>
        <div className="space-y-8 rounded-[28px] bg-slate-50/80 p-5 sm:p-7">
          <OptionGroup label="1. CPU 모델" options={family.cpus} value={cpu} onChange={setCpu} />
          <OptionGroup label="2. 메모리" options={memoryOptions} value={memory} onChange={setMemory} />
          <OptionGroup label="3. 스토리지" options={storageOptions} value={storage} onChange={setStorage} />
          {familyId !== "entry" && <OptionGroup label="4. 10G GBIC 모듈" options={moduleOptions} value={modules} onChange={setModules} />}
        </div>
        <aside className="h-fit rounded-[28px] bg-navy p-7 text-white lg:sticky lg:top-28">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">Estimated Configuration</div>
          <h4 className="mt-3 font-display text-xl font-bold">{modelName}</h4>
          <dl className="my-5 space-y-2 border-y border-white/10 py-5 text-xs text-white/70">{[family.chassis, family.network, selected.memory.label, selected.storage.label, familyId === "entry" ? "SFP 모듈 별도" : selected.modules.label].map((item) => <div key={item} className="flex gap-2"><span className="text-emerald-300">●</span><span>{item}</span></div>)}</dl>
          <div className="text-xs text-white/45">가격 기준 · VAT 별도</div>
          <div className="mt-2 font-mono text-[9px] leading-relaxed text-white/35">원제품 {family.source} · 고정환율 {won.format(pricingPolicy.fixedUsdKrw)}원 · 수입비용 {(pricingPolicy.importTaxRate * 100).toFixed(0)}%<br />가격 기준 {pricingPolicy.effectiveMonth}</div>
          <PricingComparison cashPrice={total} />
          <div className="mt-5 rounded-xl bg-white/5 p-3 text-xs"><span className="text-white/50">권장 규모</span><strong className="float-right text-emerald-200">{selected.cpu.users}</strong></div>
          <div className="mt-3 rounded-xl bg-white/5 p-3 text-xs">
            <div><span className="text-white/70">1년 원격 장애 기술지원(선택)</span><strong className="float-right text-emerald-200">{won.format(maintenance)}원</strong></div>
            <p className="mt-2 clear-both text-sm leading-relaxed text-white/70">장애 접수·원격 점검·원인 분석·복구 안내 · 부품·출장·현장 작업 별도 · 지원 시간·SLA는 계약 시 확정</p>
          </div>
          <a href={`/contact?subject=${inquiry}`} className="mt-5 block rounded-xl bg-emerald px-4 py-3.5 text-center text-sm font-bold transition-colors hover:bg-white hover:text-navy">이 구성으로 견적 문의</a>
        </aside>
      </div>
    </section>
  );
}
