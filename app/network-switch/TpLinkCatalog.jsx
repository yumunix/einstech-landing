const tiers = [
  {
    id: "access",
    level: "01 · 저가형",
    name: "Omada Access",
    desc: "1G 액세스와 PoE가 필요한 사무실·매장·지사",
    models: [
      { model: "SG2008", image: "sg2008.jpg", ports: "8×1G RJ45", specs: ["팬리스", "Omada 중앙관리", "정적 라우팅"] },
      { model: "SG2218", image: "sg2218.jpg", ports: "16×1G RJ45 + 2×1G SFP", specs: ["팬리스", "VLAN·ACL·QoS", "정적 라우팅"] },
      { model: "SG2428P", image: "sg2428p.jpg", ports: "24×1G PoE+ + 4×1G SFP", specs: ["PoE 250W", "Omada 중앙관리", "랙마운트"] },
    ],
  },
  {
    id: "access-plus",
    level: "02 · 중급형",
    name: "Omada Access Plus",
    desc: "1G 다운링크와 10G 업링크를 갖춘 고밀도 엣지",
    models: [
      { model: "SG3428X", image: "sg3428x.jpg", ports: "24×1G RJ45 + 4×10G SFP+", specs: ["정적 라우팅·ERPS", "Omada 중앙관리", "랙마운트"] },
      { model: "SG3452X", image: "sg3452x.jpg", ports: "48×1G RJ45 + 4×10G SFP+", specs: ["팬리스", "정적 라우팅·ERPS", "랙마운트"] },
      { model: "SG3428XMP", image: "sg3428xmp.jpg", ports: "24×1G PoE+ + 4×10G SFP+", specs: ["PoE 384W", "정적 라우팅·ERPS", "Omada 중앙관리"] },
    ],
  },
  {
    id: "access-pro",
    level: "03 · 고급형",
    name: "Omada Access Pro",
    desc: "2.5G 멀티기가비트와 10G 업링크를 위한 Wi-Fi 6·7 액세스",
    models: [
      { model: "SG3210X-M2", image: "sg3210x-m2.jpg", ports: "8×2.5G RJ45 + 2×10G SFP+", specs: ["팬리스", "80Gbps 스위칭", "Omada 중앙관리"] },
      { model: "SG3218XP-M2", image: "sg3218xp-m2.jpg", ports: "16×2.5G PoE + 2×10G SFP+", specs: ["PoE++ 4포트", "PoE 240W", "Omada 중앙관리"] },
      { model: "SG3428XPP-M2", image: "sg3428xpp-m2.jpg", ports: "24×2.5G PoE + 4×10G SFP+", specs: ["PoE++·PoE+", "V2 기준 PoE 770W", "정적 라우팅·ERPS"] },
    ],
  },
  {
    id: "access-max",
    level: "04 · 최고급형",
    name: "Omada Access Max",
    desc: "10GBASE-T 액세스와 플래그십 Wi-Fi 7용 PoE++",
    models: [
      { model: "SX3206HPP", image: "sx3206hpp.jpg", ports: "4×10G PoE++ + 2×10G SFP+", specs: ["PoE 200W", "포트당 최대 60W", "정적 라우팅·ERPS"] },
      { model: "SX3832", image: "sx3832.jpg", ports: "24×10G RJ45 + 8×10G SFP+", specs: ["32포트 10G", "Omada 중앙관리", "랙마운트"] },
      { model: "SX3832MPP", image: "sx3832mpp.jpg", ports: "24×10G PoE++ + 8×10G SFP+", specs: ["PoE 770W", "출시·재고 확인", "별도 견적"] },
    ],
  },
  {
    id: "aggregation",
    level: "05 · 프리미엄",
    name: "Omada Aggregation",
    desc: "서버·스토리지·액세스 스위치를 집선하는 100% 광 패브릭",
    models: [
      { model: "SX3008F", image: "sx3008f.jpg", ports: "8×10G SFP+", specs: ["160Gbps 스위칭", "팬리스", "정적 라우팅·ERPS"] },
      { model: "SX3016F", image: "sx3016f.jpg", ports: "16×10G SFP+", specs: ["320Gbps 스위칭", "1+1 전원 이중화", "Omada 중앙관리"] },
      { model: "SX3032F", image: "sx3032f.jpg", ports: "32×10G SFP+", specs: ["640Gbps 스위칭", "1+1 전원 이중화", "Omada 중앙관리"] },
    ],
  },
  {
    id: "campus",
    level: "06 · 플래티늄",
    name: "Omada Campus",
    desc: "기업·캠퍼스·ISP를 위한 25G·100G Stackable L3 코어",
    models: [
      { model: "S6500-24G4XF", image: "s6500-24g4xf.jpg", ports: "24×1G RJ45 + 4×10G SFP+", specs: ["최대 12대 스태킹", "M-LAG", "전원 이중화"] },
      { model: "S6500-24MPP4Y", image: "https://static.tp-link.com/upload/image-line/S6500-24MPP4Y_UN_1.26_overview_01_large_20260203024335q.jpg", ports: "24×2.5G PoE++ + 4×25G SFP28", specs: ["PoE 최대 1,534W", "최대 12대 스태킹", "M-LAG · 전원 이중화"] },
      { model: "S7500-24Y4C", image: "https://static.tp-link.com/upload/image-line/S7500-24Y4C_UN_1.20_overview_01_large_20260212054445j.jpg", ports: "24×25G SFP28 + 4×100G QSFP28", specs: ["2Tbps 스위칭", "최대 12대 스태킹", "M-LAG · 전원 이중화"] },
    ],
  },
];

export default function TpLinkCatalog() {
  return (
    <div className="space-y-16">
      <nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" aria-label="TP-Link 제품 등급">
        {tiers.map((tier) => <a key={tier.id} href={`#${tier.id}`} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center hover:border-navy"><span className="block font-mono text-[9px] text-emerald">{tier.level}</span><strong className="mt-1 block text-xs text-navy">{tier.name}</strong></a>)}
      </nav>
      {tiers.map((tier) => (
        <section id={tier.id} key={tier.id} className="scroll-mt-24 border-t border-slate-200 pt-9">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div><div className="font-mono text-[10px] font-bold tracking-widest text-emerald">{tier.level}</div><h3 className="mt-2 font-display text-3xl font-black text-slate-900">{tier.name}</h3></div>
            <p className="max-w-lg text-sm text-slate-500">{tier.desc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tier.models.map((item) => (
              <article key={item.model} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={item.image.startsWith("http") ? item.image : `/products/network-switch/${item.image}`} alt={`TP-Link ${item.model} 공식 제품 이미지`} className="aspect-square w-full border-b border-slate-100 object-contain p-6" />
                <div className="p-6">
                  <h4 className="font-display text-2xl font-black text-slate-900">{item.model}</h4>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-3 font-mono text-[11px] font-bold text-navy">{item.ports}</div>
                  <ul className="mt-4 space-y-2">{item.specs.map((spec) => <li key={spec} className="text-xs text-slate-600">▸ {spec}</li>)}</ul>
                  <a href={`/contact?subject=${encodeURIComponent(`TP-Link ${item.model} 아인스테크 공급 견적 문의`)}`} className="mt-6 block rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald">상세 사양 · 아인스테크 구매 견적</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <p className="text-[10px] leading-5 text-slate-400">제품 이미지와 표기 사양은 TP-Link Omada 대한민국 공식 제품 페이지를 기준으로 구성했습니다. 실제 공급 시 국내 출시 여부, 하드웨어 버전, 재고와 라이선스를 확인해 최종 견적합니다.</p>
    </div>
  );
}
