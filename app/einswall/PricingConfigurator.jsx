"use client";

import { useEffect, useMemo, useState } from "react";

const cpuOptions = [
  {
    id: "8505",
    label: "Pentium 8505",
    detail: "중소 사업장 · 1G 운용형",
    users: "약 20~100명",
    price: 1690000,
  },
  {
    id: "i5",
    label: "Core i5-12450H",
    detail: "다중 VPN · IDS/IPS",
    users: "약 50~200명",
    price: 1890000,
  },
  {
    id: "i7",
    label: "Core i7-13620H",
    detail: "10G · 고부하 보안 정책",
    users: "약 100~300명",
    price: 2090000,
  },
];

const sfpOptions = [
  { id: "none", label: "1G 경제형", detail: "4×2.5GbE RJ45 · SFP+ 없음", price: 0, suffix: "-1G" },
  { id: "2s", label: "10G 고급형", detail: "4×2.5GbE + 2×10G SFP+", price: 300000, suffix: "-10G2" },
  { id: "4s", label: "10G 확장형", detail: "4×2.5GbE + 4×10G SFP+", price: 500000, suffix: "-10G4" },
];

const memoryOptions = [
  { id: "16", label: "16GB DDR5 SO-DIMM", detail: "삼성전자·SK하이닉스", price: 0 },
  { id: "32", label: "32GB DDR5 SO-DIMM", detail: "삼성전자·SK하이닉스", price: 350000 },
  { id: "64", label: "64GB DDR5 SO-DIMM", detail: "32GB×2 · 삼성전자·SK하이닉스", price: 950000 },
];

const storageOptions = [
  {
    id: "512",
    label: "500/512GB NVMe",
    detail: "삼성전자·SK하이닉스 정품",
    price: 0,
  },
  {
    id: "1tb",
    label: "1TB NVMe",
    detail: "삼성전자·SK하이닉스 정품",
    price: 280000,
  },
];

const moduleOptions = [
  { id: "none", label: "모듈 미포함", detail: "보유 모듈 사용", price: 0 },
  {
    id: "1",
    label: "TP-Link 10G SR 1개",
    detail: "TL-SM5110-SR · 장착·호환성 검수",
    price: 50000,
  },
  {
    id: "2",
    label: "TP-Link 10G SR 2개",
    detail: "TL-SM5110-SR · 장착·호환성 검수",
    price: 120000,
  },
  {
    id: "4",
    label: "TP-Link 10G SR 4개",
    detail: "TL-SM5110-SR · 장착·호환성 검수",
    price: 240000,
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
          label="5. SFP+ GBIC Module"
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
        </div>

        <div className="mt-6 text-[11px] leading-relaxed text-white/55">
          표시 가격은 단순 H/W 원가가 아닌 완제품 예상 공급가입니다.
          하드웨어 조립·부품 호환성 검수·방화벽 OS 설치·기본 네트워크 및 보안 정책
          설정·초기 불량 대응·국내 보증충당금·판매마진을 포함합니다.
          메모리는 삼성전자·SK하이닉스 DDR5 SO-DIMM, NVMe는 삼성전자·SK하이닉스
          국내 유통 제품의 현재 판매가를 기준으로 산정합니다.
          현장 구축, HA 이중화 및 연간 운영지원은 별도 견적입니다.
          기본 모듈은 TP-Link TL-SM5110-SR 10G 멀티모드이며 장착·호환성 검수를 포함합니다.
          장거리 싱글모드 LR 모듈은 전송거리에 따라 별도 견적입니다.
          수입 하드웨어는 기준환율 1 USD = 1,600원으로 환산한 상품가와 배송비에
          관부가세 18%를 적용해 산정했습니다.
          실제 수용 규모는 회선 사용량, 동시 세션, VPN 암호화와 보안 규칙에 따라 달라집니다.
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
