"use client";

import { einswallPrices } from "./pricing";
import { calculateInstallment, calculateSubscription } from "./subscription";

const won = new Intl.NumberFormat("ko-KR");

const groups = [
  {
    id: "mini",
    eyebrow: "MINI PC LINE",
    title: "미니PC 방화벽",
    desc: "팬리스 데스크톱형 · 사무실·매장·지사용",
    products: [
      { name: "EINSWALL MINI 1G", chip: "ESSENTIAL", spec: "4×2.5GbE", image: "/products/e-gate/einswall-mini-1g-v2.webp", price: einswallPrices.cpu["8505"] },
      { name: "EINSWALL MINI 10G2", chip: "PRO", spec: "4×2.5GbE + 2×10G SFP+", image: "/products/e-gate/einswall-mini-10g2-v2.webp", price: einswallPrices.cpu["8505"] + einswallPrices.network["2s"] },
      { name: "EINSWALL MINI 10G4", chip: "ENTERPRISE", spec: "4×2.5GbE + 4×10G SFP+", image: "/products/e-gate/einswall-mini-10g4-v2.webp", price: einswallPrices.cpu["8505"] + einswallPrices.network["4s"] },
    ],
  },
  {
    id: "entry",
    eyebrow: "RACK ENTRY LINE",
    title: "랙마운트 보급형",
    desc: "19형 1U · Atom C3000 시리즈 · 지사·중소 사업장용",
    products: [
      { name: "RACK ENTRY C3758", chip: "8 CORE", spec: "6×1GbE + 4×2.5GbE + 4×SFP", image: "/products/e-gate/rack-entry-c3758.webp", price: einswallPrices.rack.entryConfigured },
      { name: "RACK ENTRY C3808", chip: "12 CORE", spec: "다중 VPN · 확장 정책", image: "/products/e-gate/rack-entry-c3808.webp", price: einswallPrices.rack.entryConfigured + 300000 },
      { name: "RACK ENTRY C3958", chip: "16 CORE", spec: "고부하 정책 · 다중 회선", image: "/products/e-gate/rack-entry-c3958.webp", price: einswallPrices.rack.entryConfigured + 500000 },
    ],
  },
  {
    id: "advanced",
    eyebrow: "RACK ADVANCED LINE",
    title: "랙마운트 고급형",
    desc: "19형 1U · 8×2.5GbE + 4×10G SFP+ · 기업용",
    products: [
      { name: "RACK ADVANCED i5", chip: "i5-13400", spec: "기업 표준형", image: "/products/e-gate/rack-advanced-i5.webp", price: einswallPrices.rack.advancedConfigured },
      { name: "RACK ADVANCED i7", chip: "i7-13700", spec: "VPN · IDS/IPS 고성능", image: "/products/e-gate/rack-advanced-i7.webp", price: einswallPrices.rack.advancedConfigured + 400000 },
      { name: "RACK ADVANCED i9", chip: "i9-13900", spec: "고부하 10G 보안 정책", image: "/products/e-gate/rack-advanced-i9.webp", price: einswallPrices.rack.advancedConfigured + 700000 },
    ],
  },
  {
    id: "flagship",
    eyebrow: "RACK FLAGSHIP LINE",
    title: "랙마운트 최고급형",
    desc: "19형 2U · 최대 16×RJ45 + 8×10G SFP+ · 데이터센터급",
    products: [
      { name: "RACK FLAGSHIP 12G", chip: "12TH GEN", spec: "검증된 비용 최적화 구성", image: "/products/e-gate/rack-flagship-12g.webp", price: einswallPrices.rack.flagshipConfigured + 300000 },
      { name: "RACK FLAGSHIP 13G", chip: "13TH GEN", spec: "고성능 멀티코어 구성", image: "/products/e-gate/rack-flagship-13g.webp", price: einswallPrices.rack.flagshipConfigured + 600000 },
      { name: "RACK FLAGSHIP 14G", chip: "14TH GEN", spec: "최상위 네트워크 확장", image: "/products/e-gate/rack-flagship-14g.webp", price: einswallPrices.rack.flagshipConfigured + 900000 },
    ],
  },
];

export default function ProductFamilyLineup() {
  return (
    <div className="space-y-16 lg:pl-12">
      {groups.map((group, groupIndex) => (
        <section key={group.id} className="border-t border-slate-200 pt-7 first:border-t-0 first:pt-0">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">{String(groupIndex + 1).padStart(2, "0")} · {group.eyebrow}</div><h3 className="mt-2 font-display text-3xl font-black text-slate-900">{group.title}</h3></div><p className="text-sm text-slate-500">{group.desc}</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {group.products.map((product) => {
              const subscription = calculateSubscription(product.price, 36);
              const installment = calculateInstallment(product.price, 30, 36);
              return (
              <article key={product.name} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={`${product.name} 제품 이미지`} className="aspect-square w-full border-b border-slate-100 object-cover" />
                <div className="p-5"><div className="font-mono text-[9px] font-bold tracking-widest text-emerald">{product.chip}</div><h4 className="mt-2 font-display text-lg font-black text-slate-900">{product.name}</h4><p className="mt-1 min-h-9 text-xs leading-relaxed text-slate-500">{product.spec}</p><div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4"><div className="rounded-xl bg-slate-50 p-3"><div className="text-[9px] text-slate-500">일시불 · VAT 별도</div><strong className="mt-1 block font-display text-base text-navy">{won.format(product.price)}원~</strong></div><div className="rounded-xl bg-emerald/10 p-3"><div className="text-[9px] text-emerald-700">3년 구독 · 월/VAT별도</div><strong className="mt-1 block font-display text-base text-emerald-700">{won.format(subscription.monthly)}원~</strong></div><div className="col-span-2 rounded-xl bg-cyan-50 p-3"><div className="text-[9px] text-cyan-800">30% 선납 + 36개월 분할 · VAT 별도</div><div className="mt-1 flex flex-wrap items-end justify-between gap-2"><strong className="font-display text-base text-cyan-900">선납 {won.format(installment.downPayment)}원</strong><strong className="font-display text-base text-cyan-900">월 {won.format(installment.monthly)}원~</strong></div></div></div><div className="mt-4 flex justify-end"><a href={`#pricing-${group.id}`} onClick={() => window.dispatchEvent(new CustomEvent("einswall:model-select", { detail: { family: group.id, model: product.name.split(" ").at(-1).toLowerCase() } }))} className="rounded-full bg-slate-100 px-3 py-2 text-[10px] font-bold text-navy group-hover:bg-navy group-hover:text-white">결제 방식·사양 선택</a></div></div>
              </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
