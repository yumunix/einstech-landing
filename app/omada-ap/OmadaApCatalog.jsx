const tiers = [
  {
    id: "wifi7",
    level: "Wi-Fi 7 (BE)",
    name: "Omada Wi-Fi 7 AP",
    desc: "BE 규격 6GHz 트라이밴드 · 최신 Wi-Fi 7 액세스 포인트",
    models: [
      {
        model: "EAP787",
        image: "eap787.jpg",
        type: "천장형",
        radio: "BE19000 트라이밴드",
        specs: ["6GHz AFC 인증", "RF 스캐닝", "2×10G 포트"],
        msrp: 2190000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap787/",
      },
      {
        model: "EAP783",
        image: "eap783.jpg",
        type: "천장형",
        radio: "BE19000 트라이밴드",
        specs: ["6GHz 고밀도", "Wi-Fi 7 플래그십", "10G 업링크"],
        msrp: 1273000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap783/",
      },
      {
        model: "EAP773",
        image: "eap773.jpg",
        type: "천장형",
        radio: "BE9300 트라이밴드",
        specs: ["고밀도 환경", "2.5G 포트", "Omada 중앙관리"],
        msrp: 690000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap773/",
      },
      {
        model: "EAP770",
        image: "eap770.jpg",
        type: "천장형",
        radio: "BE9300 트라이밴드",
        specs: ["팬리스", "2.5G 포트", "Omada 중앙관리"],
        msrp: 359000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap770/",
      },
      {
        model: "EAP720",
        image: "eap720.jpg",
        type: "천장형",
        radio: "BE5000 듀얼밴드",
        specs: ["입문형 Wi-Fi 7", "2.5G 포트", "팬리스"],
        msrp: 149000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap720/",
      },
    ],
  },
  {
    id: "wifi6-high",
    level: "Wi-Fi 6 (AX) · 고급형",
    name: "Omada Wi-Fi 6 고급",
    desc: "고밀도·고성능 Wi-Fi 6 환경을 위한 AX 액세스 포인트",
    models: [
      {
        model: "EAP660 HD",
        image: "eap660-hd.jpg",
        type: "천장형 고밀도",
        radio: "AX3600 듀얼밴드",
        specs: ["고밀도 전용 설계", "2.5G 포트", "512+ 동시 접속"],
        msrp: 469000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap660-hd/",
      },
      {
        model: "EAP673",
        image: "eap673.jpg",
        type: "천장형",
        radio: "AX5400 트라이밴드",
        specs: ["초고성능", "Omada 중앙관리", "10G SFP+ 옵션"],
        msrp: 299000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap673/",
      },
      {
        model: "EAP670",
        image: "eap670.jpg",
        type: "천장형",
        radio: "AX5400 듀얼밴드",
        specs: ["팬리스", "2.5G 포트", "Omada 중앙관리"],
        msrp: 289000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap670/",
      },
    ],
  },
  {
    id: "wifi6-mid",
    level: "Wi-Fi 6 (AX) · 중급형",
    name: "Omada Wi-Fi 6 표준",
    desc: "사무실·교육·리테일을 위한 범용 Wi-Fi 6 액세스 포인트",
    models: [
      {
        model: "EAP653",
        image: "eap653.jpg",
        type: "천장형",
        radio: "AX3000 듀얼밴드",
        specs: ["가성비 Wi-Fi 6", "기가비트 포트", "Omada 중앙관리"],
        msrp: null,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap653/",
      },
      {
        model: "EAP650",
        image: "eap650.jpg",
        type: "천장형",
        radio: "AX3000 듀얼밴드",
        specs: ["팬리스", "기가비트 포트", "Omada 중앙관리"],
        msrp: null,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap650/",
      },
      {
        model: "EAP650-Outdoor",
        image: "eap650-outdoor.jpg",
        type: "실외형",
        radio: "AX3000 듀얼밴드",
        specs: ["IP67 방진방수", "실내외 겸용", "Omada Mesh"],
        msrp: 267000,
        tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-access-point/eap650-outdoor/",
      },
    ],
  },
];

function formatPrice(msrp) {
  if (!msrp) return null;
  const man = parseFloat((msrp / 10000).toFixed(2));
  return `${man.toLocaleString("ko-KR")}만원`;
}

export default function OmadaApCatalog() {
  return (
    <div className="space-y-16">
      <nav className="grid gap-3 sm:grid-cols-3" aria-label="Wi-Fi 세대 선택">
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
                <img
                  src={`/products/omada-ap/${item.image}`}
                  alt={`TP-Link ${item.model}`}
                  className="aspect-square w-full border-b border-slate-100 object-contain p-6"
                />
                <div className="p-6">
                  <div className="mb-1 font-mono text-[10px] text-slate-400">{item.type}</div>
                  <h4 className="font-display text-2xl font-black text-slate-900">{item.model}</h4>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-3 font-mono text-[11px] font-bold text-navy">
                    {item.radio}
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
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={item.tplink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-bold text-navy hover:border-navy"
                    >
                      TP-Link 공식 사양 →
                    </a>
                    <a
                      href={`/contact?subject=${encodeURIComponent(`TP-Link ${item.model} 아인스테크 공급 견적 문의`)}`}
                      className="block rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald"
                    >
                      아인스테크 구매 견적
                    </a>
                  </div>
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
