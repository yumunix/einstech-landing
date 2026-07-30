import { notFound } from "next/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";
import { storageProducts, storageProductMap } from "../products";

export function generateStaticParams() {
  return storageProducts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const product = storageProductMap[params.slug];
  if (!product) return {};
  return createPageMetadata({
    path: `/storage/${product.slug}`,
    title: `${product.name} 상세 사양 · 구축`,
    description: `${product.summary} Einstech가 용량, 성능, 연결, 이중화와 DR 요구사항에 맞춰 설계·공급합니다.`,
    keywords: [product.name, product.vendor, product.category, "엔터프라이즈 스토리지", "스토리지 구축", "SAN", "NAS"],
  });
}

export default function StorageProductPage({ params }) {
  const product = storageProductMap[params.slug];
  if (!product) notFound();
  const related = storageProducts.filter((item) => item.slug !== product.slug && (item.vendor === product.vendor || item.category === product.category)).slice(0, 3);
  return <><Header /><main className="pt-16">
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,.18),transparent_32%)]" /><div className="relative mx-auto grid w-full max-w-page gap-12 px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-12"><div><a href="/storage" className="text-xs font-bold text-emerald-300 hover:text-white">← Storage 제품군</a><div className="mt-8"><Badge color="cyan">{product.eyebrow}</Badge></div><p className="mt-6 text-sm font-bold text-emerald-300">{product.vendor} · {product.category}</p><h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[1.04]">{product.name}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{product.summary}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`/contact?subject=${encodeURIComponent(`${product.name} 구성 견적`)}`} className="rounded-xl bg-emerald px-6 py-4 text-center text-sm font-black text-slate-950 hover:bg-white">구성 상담 · 견적</a><a href={product.source} target="_blank" rel="noreferrer" className="rounded-xl border border-white/25 px-6 py-4 text-center text-sm font-bold text-white hover:border-white">참고 제품 정보 ↗</a></div></div><div className="flex min-h-[300px] items-center justify-center rounded-[32px] border border-white/10 bg-white p-8 shadow-2xl"><img src={`/products/storage/${product.image}`} alt={`${product.name} 제품 이미지`} className="max-h-[360px] w-full object-contain" /></div></div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">PRODUCT_OVERVIEW</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">제품 개요</h2><p className="mt-6 text-base leading-8 text-slate-600">{product.intro}</p></div><div className="grid gap-4 sm:grid-cols-2">{product.highlights.map((item, i) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><span className="font-mono text-xs font-black text-emerald">0{i + 1}</span><p className="mt-3 text-sm font-bold leading-6 text-slate-800">{item}</p></div>)}</div></div></div></section>
    <section className="bg-slate-50 py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">SPECIFICATIONS</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">대표 사양</h2><p className="mt-4 text-sm leading-7 text-slate-600">실제 공급 사양은 선택 모델, 소프트웨어 라이선스와 구성 조건에 따라 달라집니다.</p><div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white">{product.specs.map(([label, value]) => <div key={label} className="grid border-t border-slate-100 first:border-0 md:grid-cols-[.35fr_.65fr]"><div className="bg-slate-50 px-5 py-4 text-sm font-black text-navy">{label}</div><div className="px-5 py-4 text-sm leading-6 text-slate-600">{value}</div></div>)}</div></div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="grid gap-10 lg:grid-cols-2"><div><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">WORKLOAD_FIT</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">적용 업무</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{product.useCases.map((item) => <div key={item} className="rounded-xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-700">✓ {item}</div>)}</div></div><div className="rounded-[28px] bg-navy p-8 text-white"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald-300">EINSTECH_CONFIGURATION</div><h2 className="mt-3 font-display text-3xl font-black">제품이 아니라 업무 기준으로 구성합니다.</h2><p className="mt-5 text-sm leading-7 text-white/70">현재 용량, 증가율, IOPS와 처리량, 호스트 포트, 가용성, 백업·복제·DR 목표를 확인한 뒤 실제 공급 가능한 모델과 라이선스를 확정합니다.</p><a href={`/contact?subject=${encodeURIComponent(`${product.name} 상세 구성 상담`)}`} className="mt-7 inline-block rounded-xl bg-white px-6 py-4 text-sm font-black text-navy">상세 구성 상담</a></div></div></div></section>
    <section className="bg-slate-950 py-20 text-white"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><h2 className="font-display text-3xl font-black">관련 스토리지 제품</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{related.map((item) => <a key={item.slug} href={`/storage/${item.slug}`} className="rounded-2xl border border-white/15 p-6 hover:border-emerald-300"><p className="text-xs font-bold text-emerald-300">{item.vendor}</p><h3 className="mt-2 text-lg font-black">{item.name}</h3><p className="mt-3 text-xs leading-5 text-white/60">{item.summary}</p></a>)}</div></div></section>
  </main><Footer /></>;
}
