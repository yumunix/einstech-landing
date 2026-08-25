const tiers = [
  {
    id: "enterprise",
    level: "엔터프라이즈",
    name: "Omada 기업용 게이트웨이",
    desc: "다중 WAN·VPN·SD-WAN이 필요한 중대형 기업 환경",
    models: [
      {
        model: "ER8411",
        image: "er8411.jpg",
        ports: "2×10G SFP+ WAN/LAN + 1×2.5G WAN + 8×1G RJ45",
        specs: ["최대 10Gbps 처리", "IPsec·L2TP·PPTP VPN", "로드밸런싱·페일오버"],
        msrp: 1790000,
      },
      {
        model: "ER7412-M2",
        image: "er7412-m2.jpg",
        ports: "2×2.5G WAN/LAN + 1×2.5G WAN + 8×1G RJ45",
        specs: ["2.5G 멀티기가 WAN", "IPsec VPN", "Omada SDN 통합"],
        msrp: 459000,
      },
      {
        model: "ER7406",
        image: "er7406.jpg",
        ports: "2×1G SFP WAN + 4×1G RJ45 WAN/LAN",
        specs: ["6포트 유연한 WAN 구성", "기업 SD-WAN", "Omada 중앙관리"],
        msrp: 309000,
      },
    ],
  },
  {
    id: "mid",
    level: "중급형",
    name: "Omada 중형 게이트웨이",
    desc: "중소기업·지사·리테일에 적합한 멀티 WAN 게이트웨이",
    models: [
      {
        model: "ER7212PC",
        image: null,
        ports: "2×2.5G WAN + 8×1G RJ45 + OC220 컨트롤러 내장",
        specs: ["컨트롤러 일체형", "PoC(Power over Controller)", "올인원 설계"],
        msrp: 599000,
      },
      {
        model: "ER7206",
        image: "er7206.jpg",
        ports: "1×2.5G WAN + 1×1G SFP WAN + 4×1G RJ45",
        specs: ["6포트 멀티 WAN", "SD-WAN", "Omada 중앙관리"],
        msrp: 279000,
      },
      {
        model: "ER707-M2",
        image: "er707-m2.jpg",
        ports: "1×2.5G WAN + 1×2.5G WAN/LAN + 5×1G RJ45",
        specs: ["2.5G 멀티기가 WAN", "Wi-Fi 7 AP 연동 최적화", "Omada SDN"],
        msrp: 369000,
      },
    ],
  },
  {
    id: "smb",
    level: "소형·SMB",
    name: "Omada SMB 게이트웨이",
    desc: "소규모 사무실·매장·SOHO를 위한 간편한 VPN 게이트웨이",
    models: [
      {
        model: "ER706W",
        image: "er706w.jpg",
        ports: "1×1G WAN + 1×1G WAN/LAN + 4×1G RJ45",
        specs: ["Wi-Fi 6 내장 (AX3000)", "올인원 유무선 게이트웨이", "Omada 중앙관리"],
        msrp: 299000,
      },
      {
        model: "ER605",
        image: "er605.jpg",
        ports: "1×1G WAN + 4×1G WAN/LAN RJ45",
        specs: ["5포트 멀티 WAN", "OpenVPN·IPsec·L2TP", "Omada SDN 지원"],
        msrp: 85900,
      },
    ],
  },
];

function formatPrice(msrp) {
  if (!msrp) return null;
  if (msrp >= 1000000) {
    const m = (msrp / 1000000).toFixed(1).replace(/\.0$/, "");
    return `${m}백만원`;
  }
  return `${msrp.toLocaleString("ko-KR")}원`;
}

export default function OmadaGatewayCatalog() {
  return (
    <div className="space-y-16">
      <nav className="grid gap-3 sm:grid-cols-3" aria-label="게이트웨이 등급 선택">
        {tiers.map((tier) => (
          <a
            key={tier.id}
            href={`#${tier.id}`}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center hover:border-navy"
          >
            <span className="block font-mono text-[9px] text-emerald">{tier.level}</span>
            <strong className="mt-1 block text-xs text-navy">{tier.name}</strong>
          </a>
        ))}
      </nav>

      {tiers.map((tier) => (
        <section id={tier.id} key={tier.id} className="scroll-mt-24 border-t border-slate-200 pt-9">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest text-emerald">{tier.level}</div>
              <h3 className="mt-2 font-display text-3xl font-black text-slate-900">{tier.name}</h3>
            </div>
            <p className="max-w-lg text-sm text-slate-500">{tier.desc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tier.models.map((item) => (
              <article key={item.model} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                {item.image ? (
                  <img
                    src={`/products/omada-gw/${item.image}`}
                    alt={`TP-Link ${item.model}`}
                    className="aspect-square w-full border-b border-slate-100 object-contain p-6"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center border-b border-slate-100 bg-slate-50">
                    <span className="font-display text-2xl font-black text-slate-300">{item.model}</span>
                  </div>
                )}
                <div className="p-6">
                  <h4 className="font-display text-2xl font-black text-slate-900">{item.model}</h4>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-3 font-mono text-[11px] font-bold text-navy">
                    {item.ports}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.specs.map((spec) => (
                      <li key={spec} className="text-xs text-slate-600">▸ {spec}</li>
                    ))}
                  </ul>
                  {item.msrp ? (
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-[10px] text-slate-400">권장소비자가</span>
                      <span className="font-display text-lg font-black text-emerald">{formatPrice(item.msrp)}</span>
                      <span className="text-[10px] text-slate-400">(VAT 포함)</span>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <span className="rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">별도 견적</span>
                    </div>
                  )}
                  <a
                    href={`/contact?subject=${encodeURIComponent(`TP-Link ${item.model} 아인스테크 공급 견적 문의`)}`}
                    className="mt-4 block rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald"
                  >
                    상세 사양 · 아인스테크 구매 견적
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="text-[10px] leading-5 text-slate-400">
        권장소비자가는 2026년 Q3 TP-Link 공식 가격표 기준이며 VAT가 포함된 금액입니다.
        실제 공급가는 수량·프로젝트 조건에 따라 달라질 수 있으며, 재고·하드웨어 버전은 납품 시 최종 확인합니다.
      </p>
    </div>
  );
}
