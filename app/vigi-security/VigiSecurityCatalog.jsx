const sections = [
  {
    id: "ip-camera",
    label: "IP 카메라",
    name: "VIGI IP 카메라",
    desc: "돔·벌릿·터렛·PT 형태의 SMB용 풀컬러 네트워크 카메라",
    imageFolder: "vigi-camera",
    models: [
      {
        model: "VIGI C250",
        image: "vigi-c250.png",
        type: "돔 · 실내",
        spec: "5MP 풀컬러 돔",
        specs: ["5MP 풀컬러 야간 촬영", "VIGI 앱·중앙관리", "PoE 지원"],
        msrp: 80000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c250/",
      },
      {
        model: "VIGI C230",
        image: "vigi-c230.png",
        type: "돔 · 실내",
        spec: "3MP 풀컬러 돔",
        specs: ["3MP 풀컬러 야간 촬영", "VIGI 앱·중앙관리", "PoE 지원"],
        msrp: 55000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c230/",
      },
      {
        model: "VIGI C220I",
        image: "vigi-c220i.png",
        type: "돔 · 실내 IR",
        spec: "2MP IR 돔",
        specs: ["2MP 적외선 야간 촬영", "VIGI 앱·중앙관리", "PoE 지원"],
        msrp: 45000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c220i/",
      },
      {
        model: "VIGI C450",
        image: "vigi-c450.jpg",
        type: "터렛 · 실외",
        spec: "5MP 풀컬러 터렛",
        specs: ["5MP 풀컬러 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 76000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c450/",
      },
      {
        model: "VIGI C440",
        image: "vigi-c440.jpg",
        type: "터렛 · 실외",
        spec: "4MP 풀컬러 터렛",
        specs: ["4MP 풀컬러 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 60000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c440/",
      },
      {
        model: "VIGI C430",
        image: "vigi-c430.jpg",
        type: "터렛 · 실외",
        spec: "3MP 풀컬러 터렛",
        specs: ["3MP 풀컬러 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 50000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c430/",
      },
      {
        model: "VIGI C420I",
        image: "vigi-c420i.jpg",
        type: "터렛 · 실외 IR",
        spec: "2MP IR 터렛",
        specs: ["2MP 적외선 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 40000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c420i/",
      },
      {
        model: "VIGI C350",
        image: "vigi-c350.png",
        type: "벌릿 · 실외",
        spec: "5MP 풀컬러 벌릿",
        specs: ["5MP 풀컬러 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 82000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c350/",
      },
      {
        model: "VIGI C340",
        image: "vigi-c340.png",
        type: "벌릿 · 실외",
        spec: "4MP 풀컬러 벌릿",
        specs: ["4MP 풀컬러 야간 촬영", "IP67 방진방수", "VIGI 앱·중앙관리"],
        msrp: 62000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c340/",
      },
      {
        model: "VIGI C320I",
        image: "vigi-c320i.png",
        type: "벌릿 · 실외 IR",
        spec: "2MP IR 벌릿",
        specs: ["2MP 적외선 야간 촬영", "IP67 방진방수", "PoE 지원"],
        msrp: 40000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c320i/",
      },
      {
        model: "VIGI C540-W",
        image: "vigi-c540-w.png",
        type: "PT · Wi-Fi",
        spec: "4MP 풀컬러 Wi-Fi PT",
        specs: ["팬·틸트 360° 커버리지", "Wi-Fi 무선 연결", "2-Way Audio"],
        msrp: 116000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c540-w/",
      },
      {
        model: "VIGI C540",
        image: "vigi-c540.png",
        type: "PT · 실외",
        spec: "4MP 풀컬러 PT",
        specs: ["팬·틸트 360° 커버리지", "PoE 유선 연결", "IP66 방진방수"],
        msrp: 90000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-c540/",
      },
    ],
  },
  {
    id: "nvr",
    label: "NVR",
    name: "VIGI 네트워크 비디오 레코더",
    desc: "4채널~64채널 PoE NVR — SMB부터 엔터프라이즈까지",
    imageFolder: "vigi-nvr",
    models: [
      {
        model: "VIGI NVR1004H",
        image: "nvr1004h.jpg",
        type: "소형 · 4채널",
        spec: "4채널 NVR",
        specs: ["4채널 동시 녹화", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 70000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr1004h/",
      },
      {
        model: "VIGI NVR1004H-4P",
        image: "nvr1004h-4p.jpg",
        type: "소형 · 4채널 PoE",
        spec: "4채널 PoE+ NVR",
        specs: ["4채널 동시 녹화 + PoE+", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 105000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr1004h-4p/",
      },
      {
        model: "VIGI NVR1008H",
        image: "nvr1008h.jpg",
        type: "중형 · 8채널",
        spec: "8채널 NVR",
        specs: ["8채널 동시 녹화", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 100000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr1008h/",
      },
      {
        model: "VIGI NVR1008H-8P",
        image: "nvr1008h-8p.jpg",
        type: "중형 · 8채널 PoE",
        spec: "8채널 PoE+ NVR",
        specs: ["8채널 동시 녹화 + PoE+", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 155000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr1008h-8p/",
      },
      {
        model: "VIGI NVR1016H",
        image: "nvr1016h.jpg",
        type: "중형 · 16채널",
        spec: "16채널 NVR",
        specs: ["16채널 동시 녹화", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 144000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr1016h/",
      },
      {
        model: "VIGI NVR2016H",
        image: "nvr2016h.png",
        type: "SMB · 16채널",
        spec: "16채널 NVR",
        specs: ["16채널 동시 녹화", "최대 8MP 지원", "VIGI 중앙관리"],
        msrp: 270000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr2016h/",
      },
      {
        model: "VIGI NVR2016H-16P",
        image: "nvr2016h-16p.jpg",
        type: "SMB · 16채널 PoE",
        spec: "16채널 PoE+ NVR",
        specs: ["16채널 동시 녹화 + PoE+", "최대 8MP 지원", "이중 전원"],
        msrp: 350000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr2016h-16p/",
      },
      {
        model: "VIGI NVR4016H",
        image: "nvr4016h.jpg",
        type: "기업 · 16채널",
        spec: "16채널 기업용 NVR",
        specs: ["16채널 동시 녹화", "최대 12MP AI 카메라 지원", "이중 전원"],
        msrp: 1600000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr4016h/",
      },
      {
        model: "VIGI NVR4032H",
        image: "nvr4032h.png",
        type: "기업 · 32채널",
        spec: "32채널 기업용 NVR",
        specs: ["32채널 동시 녹화", "최대 12MP AI 카메라 지원", "이중 전원"],
        msrp: 1860000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr4032h/",
      },
      {
        model: "VIGI NVR4064H",
        image: "nvr4064h.jpg",
        type: "기업 · 64채널",
        spec: "64채널 기업용 NVR",
        specs: ["64채널 동시 녹화", "최대 12MP AI 카메라 지원", "이중 전원"],
        msrp: 2760000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/vigi-nvr4064h/",
      },
    ],
  },
  {
    id: "insight",
    label: "InSight B2B",
    name: "VIGI InSight 기업용 카메라",
    desc: "대형 현장·기업·프로젝트 전용 고해상도 카메라 (별도 견적)",
    imageFolder: "vigi-camera",
    models: [
      {
        model: "InSight S225",
        image: "insight-s225.jpg",
        type: "터렛 · 실내",
        spec: "2MP 풀컬러 InSight 터렛",
        specs: ["2MP 풀컬러 야간 촬영", "기업 프로젝트 전용", "별도 견적 문의"],
        msrp: 260000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s225/",
      },
      {
        model: "InSight S245",
        image: "insight-s245.jpg",
        type: "돔 · 실내",
        spec: "4MP 풀컬러 InSight 돔",
        specs: ["4MP 풀컬러 야간 촬영", "기업 프로젝트 전용", "별도 견적 문의"],
        msrp: 480000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s245/",
      },
      {
        model: "InSight S285",
        image: "insight-s285.jpg",
        type: "돔 · 실내",
        spec: "8MP 풀컬러 InSight 돔",
        specs: ["8MP 풀컬러 야간 촬영", "기업 프로젝트 전용", "별도 견적 문의"],
        msrp: 600000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s285/",
      },
      {
        model: "InSight S325",
        image: "insight-s325.jpg",
        type: "벌릿 · 실외",
        spec: "2MP 풀컬러 InSight 벌릿",
        specs: ["2MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 280000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s325/",
      },
      {
        model: "InSight S345",
        image: "insight-s345.jpg",
        type: "벌릿 · 실외",
        spec: "4MP 풀컬러 InSight 벌릿",
        specs: ["4MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 480000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s345/",
      },
      {
        model: "InSight S355",
        image: "insight-s355.jpg",
        type: "벌릿 · 실외",
        spec: "5MP 풀컬러 InSight 벌릿",
        specs: ["5MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 500000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s355/",
      },
      {
        model: "InSight S385",
        image: "insight-s385.jpg",
        type: "벌릿 · 실외",
        spec: "8MP 풀컬러 InSight 벌릿",
        specs: ["8MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 620000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s385/",
      },
      {
        model: "InSight S425",
        image: "insight-s425.jpg",
        type: "터렛 · 실외",
        spec: "2MP 풀컬러 InSight 터렛",
        specs: ["2MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 260000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s425/",
      },
      {
        model: "InSight S445",
        image: "insight-s445.png",
        type: "터렛 · 실외",
        spec: "4MP 풀컬러 InSight 터렛",
        specs: ["4MP 풀컬러 야간 촬영", "기업 프로젝트 전용", "별도 견적 문의"],
        msrp: 460000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s445/",
      },
      {
        model: "InSight S455",
        image: "insight-s455.jpg",
        type: "터렛 · 실외",
        spec: "5MP 풀컬러 InSight 터렛",
        specs: ["5MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 480000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s455/",
      },
      {
        model: "InSight S485",
        image: "insight-s485.jpg",
        type: "터렛 · 실외",
        spec: "8MP 풀컬러 InSight 터렛",
        specs: ["8MP 풀컬러 야간 촬영", "IP67 방진방수", "별도 견적 문의"],
        msrp: 580000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-s485/",
      },
      {
        model: "InSight PTZ5425",
        image: "insight-ptz5425.jpg",
        type: "PTZ 스피드 돔",
        spec: "4MP 25× 광학 줌 PTZ",
        specs: ["4MP 25× 풀컬러 스피드 돔", "360° 팬·틸트·줌", "별도 견적 문의"],
        msrp: 2800000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-ptz5425/",
      },
      {
        model: "InSight LPR345Z",
        image: "insight-lpr345z.jpg",
        type: "LPR · 번호판 인식",
        spec: "4MP 번호판 인식 카메라",
        specs: ["차량 번호판 자동 인식", "모터식 줌 렌즈", "별도 견적 문의"],
        msrp: 1600000,
        tplink: "https://www.tp-link.com/kr/business-networking/vigi-network-camera/insight-lpr345z/",
      },
    ],
  },
];

function formatPrice(msrp) {
  if (!msrp) return null;
  return `${msrp.toLocaleString("ko-KR")}원`;
}

export default function VigiSecurityCatalog() {
  return (
    <div className="space-y-16">
      <nav className="grid gap-3 sm:grid-cols-3" aria-label="VIGI 제품 분류">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center hover:border-navy"
          >
            <span className="block font-mono text-[9px] text-emerald">{s.label}</span>
            <strong className="mt-1 block text-xs text-navy">{s.name}</strong>
          </a>
        ))}
      </nav>

      {sections.map((section) => (
        <section id={section.id} key={section.id} className="scroll-mt-24 border-t border-slate-200 pt-9">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest text-emerald">{section.label}</div>
              <h3 className="mt-2 font-display text-3xl font-black text-slate-900">{section.name}</h3>
            </div>
            <p className="max-w-lg text-sm text-slate-500">{section.desc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {section.models.map((item) => (
              <article key={item.model} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img
                  src={`/products/${section.imageFolder}/${item.image}`}
                  alt={`TP-Link ${item.model}`}
                  className="aspect-square w-full border-b border-slate-100 object-contain p-6"
                />
                <div className="p-6">
                  <div className="mb-1 font-mono text-[10px] text-slate-400">{item.type}</div>
                  <h4 className="font-display text-xl font-black text-slate-900">{item.model}</h4>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2 font-mono text-[11px] font-bold text-navy">
                    {item.spec}
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
        InSight·기업용 B2B 모델은 프로젝트 전용이며 실제 공급가는 별도 문의 바랍니다.
      </p>
    </div>
  );
}
