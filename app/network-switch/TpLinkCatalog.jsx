// 아인스테크는 TP-Link 기업용(B2B) 제품군인 Omada(네트워킹)와 VIGI(영상보안)를
// 함께 공급합니다. 아래는 각 제품군의 대표 모델이며, 전 라인업은 문의로 안내합니다.
const groups = [
  {
    id: "switch",
    tag: "OMADA SWITCH",
    title: "네트워크 스위치",
    desc: "액세스부터 10G 애그리게이션, 25G·100G 캠퍼스 코어까지 관리형 스위치",
    items: [
      { model: "SG2428P", spec: "24×1G PoE+ 250W + 4×SFP · Omada 중앙관리" },
      { model: "SG3428X", spec: "24×1G + 4×10G SFP+ · L2+ 정적 라우팅·ERPS" },
      { model: "SX3016F", spec: "16×10G SFP+ · 320Gbps 광 애그리게이션" },
    ],
  },
  {
    id: "ap",
    tag: "OMADA WIRELESS",
    title: "무선 AP",
    desc: "Wi-Fi 6·Wi-Fi 7 실내·실외 액세스 포인트, Omada 컨트롤러 일괄 관리",
    items: [
      { model: "EAP783", spec: "Wi-Fi 7 플래그십 · 트라이밴드 · 10G 업링크" },
      { model: "EAP683 LR", spec: "Wi-Fi 6 고출력 · 고밀도 사무실·강당" },
      { model: "EAP625 Outdoor HD", spec: "Wi-Fi 6 실외 · IP67 방수·방진" },
    ],
  },
  {
    id: "camera",
    tag: "VIGI CAMERA",
    title: "IP 카메라",
    desc: "돔·불릿·터렛·팬틸트 IP 카메라, 컬러 야간·AI 움직임 감지",
    items: [
      { model: "VIGI C440", spec: "4MP 돔 · 풀컬러 야간 · 사람·차량 분류" },
      { model: "VIGI C340", spec: "4MP 불릿 · 실외 IP67 · 30m 야간 가시거리" },
      { model: "VIGI C540V", spec: "4MP 팬틸트 돔 · 360° 감시 · 양방향 음성" },
    ],
  },
  {
    id: "manage",
    tag: "NVR · GATEWAY · CONTROLLER",
    title: "저장·게이트웨이·통합관리",
    desc: "VIGI NVR와 Omada 게이트웨이·컨트롤러, Omada Central로 네트워크·보안 통합",
    items: [
      { model: "VIGI NVR1016H", spec: "16채널 NVR · H.265+ · 최대 16TB" },
      { model: "ER8411", spec: "Omada VPN 게이트웨이 · 10G SFP+ · 다중 WAN" },
      { model: "OC300", spec: "하드웨어 컨트롤러 · 최대 500대 기기 관리" },
    ],
  },
];

export default function TpLinkCatalog() {
  return (
    <div className="space-y-14">
      <div className="rounded-[28px] border border-slate-200 bg-white p-7 lg:p-9">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">
          TP-LINK BUSINESS · OMADA + VIGI
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          아인스테크는 TP-Link 기업용 네트워킹(Omada)과 영상보안(VIGI) 전 제품군을
          공급합니다. 스위치·무선 AP·IP 카메라·NVR·게이트웨이를 Omada Central 한
          곳에서 통합 관리하며, 아래 대표 모델 외 전 라인업과 국내 출시·재고는
          문의 시 안내합니다.
        </p>
      </div>

      {groups.map((group) => (
        <section key={group.id} className="border-t border-slate-200 pt-9">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest text-emerald">
                {group.tag}
              </div>
              <h3 className="mt-2 font-display text-2xl font-black text-slate-900">
                {group.title}
              </h3>
            </div>
            <p className="max-w-lg text-xs leading-relaxed text-slate-500">{group.desc}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {group.items.map((item) => (
              <article
                key={item.model}
                className="flex flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h4 className="font-display text-lg font-black text-slate-900">{item.model}</h4>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{item.spec}</p>
                <a
                  href={`/contact?subject=${encodeURIComponent(`TP-Link ${item.model} 공급 견적 문의`)}`}
                  className="mt-4 rounded-xl border border-slate-200 px-3 py-2.5 text-center text-[11px] font-bold text-slate-600 hover:border-navy hover:text-navy"
                >
                  사양 · 공급 문의
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="rounded-[24px] bg-slate-950 p-7 text-center lg:p-9">
        <p className="text-sm leading-7 text-white/80">
          찾는 모델이 목록에 없어도 됩니다. TP-Link Omada·VIGI 전 제품을 아인스테크가
          국내 유통 재고와 하드웨어 버전을 확인해 견적합니다.
        </p>
        <a
          href="/contact?subject=TP-Link%20Omada%C2%B7VIGI%20%EA%B5%AC%EC%84%B1%20%EB%AC%B8%EC%9D%98"
          className="mt-5 inline-block rounded-xl bg-navy px-6 py-3 text-xs font-bold text-white hover:bg-emerald"
        >
          TP-Link 구성·견적 문의
        </a>
      </div>

      <p className="text-[10px] leading-5 text-slate-400">
        제품명과 표기 사양은 TP-Link Omada·VIGI 공식 제품 페이지를 기준으로 하며,
        실제 공급 시 국내 출시 여부·하드웨어 버전·재고·라이선스를 확인해 최종 견적합니다.
      </p>
    </div>
  );
}
