const switches = [
  {
    line: "ACCESS",
    model: "TL-SG1024DE",
    name: "24포트 기가비트 이지 스마트 스위치",
    image: "/products/e-gate/tp-link-tl-sg1024de.jpg",
    ports: "24×1GbE RJ45",
    features: ["802.1Q VLAN", "QoS · IGMP Snooping", "19형 랙마운트"],
    fit: "일반 사무실 · 업무망/게스트망 분리",
    pair: "EINSWALL MINI PC / RACK ENTRY",
    url: "https://www.tp-link.com/kr/business-networking/easy-smart-switch/tl-sg1024de/",
  },
  {
    line: "POE ACCESS",
    model: "TL-SG2428P",
    name: "28포트 기가비트 Omada PoE+ 스위치",
    image: "/products/e-gate/tp-link-tl-sg2428p.jpg",
    ports: "24×1GbE PoE+ + 4×SFP",
    features: ["PoE+ 250W", "Omada SDN", "VLAN · ACL · 정적 라우팅"],
    fit: "무선 AP · IP전화 · CCTV 통합",
    pair: "EINSWALL RACK ENTRY / ADVANCED",
    url: "https://www.tp-link.com/kr/business-networking/omada-switch-access/tl-sg2428p/",
  },
  {
    line: "10G AGGREGATION",
    model: "SX3008F",
    name: "8포트 10G SFP+ L2+ 관리형 스위치",
    image: "/products/e-gate/tp-link-sx3008f.jpg",
    ports: "8×10GbE SFP+ · 160Gbps",
    features: ["Omada SDN", "VLAN · ACL · QoS", "ERPS · 정적 라우팅"],
    fit: "서버·스토리지·스위치 10G 집선",
    pair: "EINSWALL RACK ADVANCED / FLAGSHIP",
    url: "https://www.tp-link.com/kr/business-networking/omada-switch-aggregation/sx3008f/",
  },
];

export default function TpLinkLineup() {
  return (
    <div className="lg:pl-12">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-200 pb-5">
        <div><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-navy">TP-LINK SWITCH LINEUP</div><h3 className="mt-2 font-display text-3xl font-black text-slate-900">네트워크 스위치 제품군</h3></div>
        <p className="hidden max-w-md text-right text-xs leading-relaxed text-slate-500 md:block">VLAN Trunk로 EINSWALL과 연결해 업무망·서버망·게스트망·CCTV망을 분리합니다.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {switches.map((item) => (
          <article key={item.model} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={`TP-Link ${item.model} 스위치`} className="aspect-[4/3] w-full border-b border-slate-100 bg-white object-contain p-5" />
            <div className="p-6"><div className="font-mono text-[9px] font-bold tracking-widest text-emerald">{item.line}</div><h4 className="mt-2 font-display text-xl font-black text-slate-900">{item.model}</h4><p className="mt-1 text-sm text-slate-500">{item.name}</p><div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 font-mono text-[11px] text-navy">{item.ports}</div><ul className="mt-4 space-y-2 text-xs text-slate-600">{item.features.map((feature) => <li key={feature}>▸ {feature}</li>)}</ul><div className="mt-5 border-t border-slate-100 pt-4 text-[11px] leading-relaxed text-slate-500"><strong className="text-slate-800">적합 환경</strong> · {item.fit}<br /><strong className="text-slate-800">권장 조합</strong> · {item.pair}</div><div className="mt-5 grid grid-cols-2 gap-2"><a href={item.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 px-3 py-3 text-center text-xs font-bold text-slate-600 hover:border-navy hover:text-navy">공식 사양</a><a href={`/contact?subject=${encodeURIComponent(`TP-Link ${item.model} + EINSWALL 구성 견적 문의`)}`} className="rounded-xl bg-navy px-3 py-3 text-center text-xs font-bold text-white hover:bg-emerald">구성 견적</a></div></div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-[10px] leading-relaxed text-slate-400">제품 이미지와 사양은 TP-Link 공식 제품 페이지 기준입니다. 공급 시점의 국내 유통 재고와 하드웨어 버전을 확인해 견적합니다.</p>
    </div>
  );
}
