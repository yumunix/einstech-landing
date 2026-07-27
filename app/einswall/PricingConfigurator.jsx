"use client";

import { useEffect, useMemo, useState } from "react";
import { einswallPrices, pricingPolicy } from "./pricing";

const cpuOptions = [
  {
    id: "8505",
    label: "Pentium 8505",
    detail: "중소 사업장 · 1G 운용형",
    users: "약 20~100명",
    price: einswallPrices.cpu["8505"],
  },
  {
    id: "i5",
    label: "Core i5-12450H",
    detail: "다중 VPN · IDS/IPS",
    users: "약 50~200명",
    price: einswallPrices.cpu.i5,
  },
  {
    id: "i7",
    label: "Core i7-13620H",
    detail: "10G · 고부하 보안 정책",
    users: "약 100~300명",
    price: einswallPrices.cpu.i7,
  },
];

const sfpOptions = [
  { id: "none", label: "1G 경제형", detail: "4×2.5GbE RJ45 · SFP+ 없음", price: einswallPrices.network.none, suffix: "-1G" },
  { id: "2s", label: "10G 고급형", detail: "4×2.5GbE + 2×10G SFP+", price: einswallPrices.network["2s"], suffix: "-10G2" },
  { id: "4s", label: "10G 확장형", detail: "4×2.5GbE + 4×10G SFP+", price: einswallPrices.network["4s"], suffix: "-10G4" },
];

const memoryOptions = [
  { id: "16", label: "16GB DDR5 SO-DIMM", detail: "삼성전자·SK하이닉스", price: einswallPrices.memory["16"] },
  { id: "32", label: "32GB DDR5 SO-DIMM", detail: "삼성전자·SK하이닉스", price: einswallPrices.memory["32"] },
  { id: "64", label: "64GB DDR5 SO-DIMM", detail: "32GB×2 · 삼성전자·SK하이닉스", price: einswallPrices.memory["64"] },
];

const storageOptions = [
  {
    id: "512",
    label: "500/512GB NVMe",
    detail: "삼성전자·SK하이닉스 정품",
    price: einswallPrices.storage["512"],
  },
  {
    id: "1tb",
    label: "1TB NVMe",
    detail: "삼성전자·SK하이닉스 정품",
    price: einswallPrices.storage["1tb"],
  },
];

const moduleOptions = [
  { id: "none", label: "모듈 미포함", detail: "보유 모듈 사용", price: einswallPrices.sfpModule.none },
  {
    id: "1",
    label: "10G GBIC 1개",
    detail: "멀티모드 · 장착·호환성 검수",
    price: einswallPrices.sfpModule["1"],
  },
  {
    id: "2",
    label: "10G GBIC 2개",
    detail: "멀티모드 · 장착·호환성 검수",
    price: einswallPrices.sfpModule["2"],
  },
  {
    id: "4",
    label: "10G GBIC 4개",
    detail: "멀티모드 · 장착·호환성 검수",
    price: einswallPrices.sfpModule["4"],
  },
];

const won = new Intl.NumberFormat("ko-KR");

function OptionGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">
        {label}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((option) => {
          const active = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                active
                  ? "border-navy bg-navy text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-700 hover:border-navy/40"
              }`}
              aria-pressed={active}
            >
              <span className="block font-display text-sm font-bold">{option.label}</span>
              {option.detail && (
                <span className={`block text-[11px] mt-1 ${active ? "text-white/65" : "text-slate-400"}`}>
                  {option.detail}
                </span>
              )}
              {option.price > 0 && (
                <span className={`block font-mono text-[11px] mt-2 ${active ? "text-emerald-200" : "text-navy"}`}>
                  +{won.format(option.price)}원
                </span>
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function PricingConfigurator() {
  const [cpu, setCpu] = useState("8505");
  const [sfp, setSfp] = useState("none");
  const [memory, setMemory] = useState("16");
  const [storage, setStorage] = useState("512");
  const [modules, setModules] = useState("none");

  const availableModuleOptions =
    sfp === "4s"
      ? moduleOptions
      : sfp === "2s"
        ? moduleOptions.filter((item) => item.id !== "4")
        : moduleOptions.filter((item) => item.id === "none");

  useEffect(() => {
    if (sfp === "none" || (sfp === "2s" && modules === "4")) {
      setModules("none");
    }
  }, [sfp, modules]);

  const selected = useMemo(
    () => ({
      cpu: cpuOptions.find((item) => item.id === cpu),
      sfp: sfpOptions.find((item) => item.id === sfp),
      memory: memoryOptions.find((item) => item.id === memory),
      storage: storageOptions.find((item) => item.id === storage),
      modules: moduleOptions.find((item) => item.id === modules),
    }),
    [cpu, sfp, memory, storage, modules],
  );

  const total =
    selected.cpu.price +
    selected.sfp.price +
    selected.memory.price +
    selected.storage.price +
    selected.modules.price;
  const annualMaintenance = Math.ceil((total * 0.15) / 10000) * 10000;
  const modelName = `EINSWALL ${selected.cpu.id === "8505" ? "8505" : selected.cpu.id}${selected.sfp.suffix}`;
  const inquiry = encodeURIComponent(
    `${modelName} / ${selected.memory.label} / ${selected.storage.label} / ${selected.modules.label} 구성 견적 문의`,
  );

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:pl-12">
      <div className="rounded-[32px] border border-slate-200 bg-slate-50/60 p-6 sm:p-8 space-y-8">
        <OptionGroup label="1. CPU" options={cpuOptions} value={cpu} onChange={setCpu} />
        <OptionGroup label="2. Network" options={sfpOptions} value={sfp} onChange={setSfp} />
        <OptionGroup label="3. Memory" options={memoryOptions} value={memory} onChange={setMemory} />
        <OptionGroup label="4. Storage" options={storageOptions} value={storage} onChange={setStorage} />
        <OptionGroup
          label="5. 10G GBIC Module"
          options={availableModuleOptions}
          value={modules}
          onChange={setModules}
        />
      </div>

      <aside className="rounded-[32px] bg-navy text-white p-8 flex flex-col h-fit lg:sticky lg:top-28">
        <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.18em] mb-3">
          Estimated Configuration
        </div>
        <h3 className="font-display text-2xl font-bold mb-6">{modelName}</h3>

        <dl className="space-y-3 text-sm border-y border-white/10 py-6">
          {[
            selected.cpu.label,
            selected.sfp.detail,
            selected.memory.label,
            selected.storage.label,
            selected.modules.label,
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald flex-none" />
              <span>{item}</span>
            </div>
          ))}
          <div className="mt-4 rounded-xl bg-white/5 px-4 py-3">
            <dt className="text-[10px] uppercase tracking-widest text-white/45">
              권장 동시 사용자
            </dt>
            <dd className="mt-1 font-display text-lg font-bold text-emerald-200">
              {selected.cpu.users}
            </dd>
            <dd className="mt-1 text-[10px] leading-relaxed text-white/45">
              일반 사무 트래픽과 IDS/IPS 사용 기준의 예상 범위
            </dd>
          </div>
        </dl>

        <div className="mt-7">
          <div className="text-xs text-white/50 mb-1">예상 공급가 · VAT 별도</div>
          <div className="font-display text-3xl font-black">{won.format(total)}원</div>
          <div className="mt-2 font-mono text-[10px] text-white/40">
            가격 기준 {pricingPolicy.effectiveMonth} · {pricingPolicy.reviewCycle}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/45">
            Optional Support
          </div>
          <div className="mt-2 flex items-end justify-between gap-3">
            <span className="text-xs text-white/70">연간 장애 대응 유지보수</span>
            <strong className="font-display text-base text-emerald-200">
              {won.format(annualMaintenance)}원
            </strong>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-white/45">
            선택 제품가의 15% · 장애 발생 시 기술지원 · 출장비 별도
          </p>
        </div>

        <div className="mt-6 space-y-3 text-[11px] leading-relaxed text-white/55">
          <p>
            <strong className="text-white/75">포함 내용:</strong>{" "}
            하드웨어, 조립, 부품 호환성 검수 및 기본 방화벽 OS 설치
          </p>
          <p>
            <strong className="text-white/75">불포함 내용:</strong>{" "}
            부가가치세(VAT), 출장비, 현장 설치비·배선 공사비, 네트워크 구성비, 방화벽
            보안 정책 설정비, 인터넷 회선, 랙·UPS·스위치 등 주변 장비, HA 이중화,
            유료 보안 구독·라이선스, 유지보수비 및 별도 워런티 비용
          </p>
          <p>
            메모리는 삼성전자·SK하이닉스 DDR5 SO-DIMM, NVMe는 삼성전자·SK하이닉스
            국내 유통 제품의 현재 판매가를 기준으로 산정합니다. 부품 시세는{" "}
            {pricingPolicy.sourceSummary} 방식으로 확인하며, {pricingPolicy.componentRule}
            합니다. {pricingPolicy.exclusions} 기준입니다.
          </p>
          <p>
            기본 모듈은 10G GBIC 멀티모드이며 장착·호환성 검수를 포함합니다. 장거리
            싱글모드 LR 모듈은 전송거리에 따라 별도 견적입니다. 실제 수용 규모는 회선
            사용량, 동시 세션, VPN 암호화와 보안 규칙에 따라 달라집니다.
          </p>
          <p>
            <strong className="text-white/75">유지보수·출장 기준:</strong>{" "}
            연간 유지보수는 제품가의 15%이며 장애 발생 시에만 기술지원합니다. 현장
            출장은 1회 300,000원으로 별도 산정하며, 연간 기준 4회(총 1,200,000원)까지
            이용할 수 있습니다. 매월 정기 출장은 포함하지 않습니다.
          </p>
        </div>

        <a
          href={`/contact?subject=${inquiry}`}
          className="mt-7 rounded-2xl bg-emerald px-5 py-4 text-center font-bold text-white hover:bg-white hover:text-navy transition-colors"
        >
          이 구성으로 견적 문의
        </a>
      </aside>
    </div>
  );
}
