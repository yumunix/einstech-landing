const categories = [
  {
    code: "SERVER",
    title: "HP Server",
    vendor: "Hewlett Packard Enterprise",
    desc: "ProLiant DL·ML, Synergy와 Apollo 서버 제품군",
    uses: ["가상화·DB·ERP", "HA Cluster 노드", "기업용 컴퓨팅"],
    href: "/hp-server",
  },
  {
    code: "GPU",
    title: "NVIDIA GPU",
    vendor: "NVIDIA",
    desc: "AI 학습·추론과 HPC를 위한 GPU 컴퓨팅 제품군",
    uses: ["사내 생성형 AI", "모델 학습·추론", "GPU 클러스터"],
    href: "/nvidia-gpu",
  },
  {
    code: "STORAGE",
    title: "Storage",
    vendor: "Hitachi Vantara · Infortrend EonStor",
    desc: "High-End와 Midrange를 분리한 스토리지 제품군",
    uses: ["High-End · Hitachi", "Midrange · EonStor", "DR·복제 구성"],
    href: "/storage",
  },
  {
    code: "SAN_SWITCH",
    title: "Brocade SAN Switch",
    vendor: "Broadcom Brocade",
    desc: "32G·64G Fibre Channel SAN 패브릭 제품군",
    uses: ["이중 패브릭", "ISL 확장", "스토리지 연결"],
    href: "/san-switch",
  },
  {
    code: "FIREWALL",
    title: "EINSWALL Firewall",
    vendor: "EINSWALL",
    desc: "Mini PC부터 2U Flagship까지 기업용 방화벽",
    uses: ["VLAN·VPN", "IDS·IPS", "다중 WAN"],
    href: "/einswall",
  },
  {
    code: "NETWORK_SWITCH",
    title: "TP-Link Network Switch",
    vendor: "TP-Link Omada",
    desc: "Access부터 Campus까지 관리형 네트워크 스위치",
    uses: ["VLAN", "PoE", "10G·25G·100G"],
    href: "/network-switch",
  },
];

export default function ProductCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:pl-12 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((item) => (
        <article
          key={item.code}
          className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald">
            {item.code}
          </div>
          <h3 className="mt-3 font-display text-2xl font-black text-slate-900">
            {item.title}
          </h3>
          <div className="mt-1 font-mono text-[10px] text-navy">{item.vendor}</div>
          <p className="mt-5 text-sm leading-6 text-slate-600">{item.desc}</p>
          <ul className="mt-5 flex-grow space-y-2 border-t border-slate-100 pt-5">
            {item.uses.map((use) => (
              <li key={use} className="text-xs text-slate-600">
                ▸ {use}
              </li>
            ))}
          </ul>
          <a
            href={item.href}
            className="mt-6 rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald"
          >
            제품 소개 · 공급 문의
          </a>
        </article>
      ))}
    </div>
  );
}
