import { notFound } from "next/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";
import { supportServices, supportServiceMap } from "../services";

export function generateStaticParams() { return supportServices.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = supportServiceMap[slug];
  if (!service) return {};
  return createPageMetadata({ path: `/support/${service.slug}`, title: `${service.name} 기술지원`, description: service.summary, keywords: [service.name, "IT 기술지원", "인프라 유지보수", "EINSTECH 기술지원"] });
}

export default async function SupportServicePage({ params }) {
  const { slug } = await params;
  const service = supportServiceMap[slug];
  if (!service) notFound();
  return <><Header /><main className="pt-16">
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50/60 py-24 lg:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(15,118,110,.13),transparent_32%)]" /><div className="relative mx-auto w-full max-w-page px-6 lg:px-12"><Badge color="cyan">{service.code}</Badge><p className="mt-7 text-sm font-bold text-emerald">EINSTECH Technical Support</p><h1 className="mt-3 font-display text-[clamp(2.7rem,6vw,5.5rem)] font-black leading-none text-slate-900">{service.name}</h1><p className="mt-5 font-display text-xl font-bold text-navy sm:text-3xl">{service.subtitle}</p><p className="mt-8 max-w-3xl border-l-2 border-emerald/50 pl-5 text-base leading-8 text-slate-600">{service.summary}</p></div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">SUPPORT_SCOPE</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">지원 범위</h2><p className="mt-5 text-sm leading-7 text-slate-600">대상 시스템과 계약 범위에 따라 실제 지원 내용과 대응시간이 달라질 수 있습니다.</p></div><div className="grid gap-4 sm:grid-cols-2">{service.scope.map((item, index) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><span className="font-mono text-xs font-black text-emerald">0{index + 1}</span><p className="mt-3 text-sm font-bold leading-6 text-slate-800">{item}</p></div>)}</div></div></div></section>
    <section className="bg-slate-50 py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">SUPPORT_PROCESS</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">진행 절차</h2><div className="mt-10 grid gap-5 lg:grid-cols-4">{service.process.map(([number, title, desc]) => <div key={number} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="font-mono text-sm font-black text-emerald">{number}</div><h3 className="mt-4 text-lg font-black text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p></div>)}</div></div></section>
    {service.maintenanceGroups && <section className="py-20 lg:py-28"><div className="mx-auto w-full max-w-page px-6 lg:px-12"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">MAINTENANCE_CATALOG</div><h2 className="mt-3 font-display text-4xl font-black text-slate-900">유지보수 대상</h2><p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600">{service.maintenanceNote}</p><div className="mt-10 grid gap-5 md:grid-cols-2">{service.maintenanceGroups.map((group) => <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-7"><h3 className="text-xl font-black text-navy">{group.title}</h3><ul className="mt-5 space-y-3">{group.items.map((item) => <li key={item} className="text-sm leading-6 text-slate-600">▸ {item}</li>)}</ul></article>)}</div></div></section>}
    <section className="py-20 lg:py-28"><div className="mx-auto grid w-full max-w-page gap-8 px-6 lg:grid-cols-2 lg:px-12"><div className="rounded-[28px] border border-slate-200 p-8"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald">BEFORE_CONTACT</div><h2 className="mt-3 font-display text-3xl font-black text-slate-900">문의 전에 준비해 주세요</h2><ul className="mt-7 space-y-4">{service.prepare.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="font-bold text-emerald">✓</span>{item}</li>)}</ul></div><div className="rounded-[28px] bg-navy p-8 text-white"><div className="font-mono text-[10px] font-bold tracking-[.2em] text-emerald-300">CONTACT_ENGINEER</div><h2 className="mt-3 font-display text-3xl font-black">내용을 확인한 뒤 엔지니어가 연락드립니다.</h2><p className="mt-5 text-sm leading-7 text-white/70">{service.response}</p><a href={`/contact?type=${encodeURIComponent("기술지원")}&subject=${encodeURIComponent(`${service.name} 요청`)}`} className="mt-8 inline-block rounded-xl bg-white px-6 py-4 text-sm font-black text-navy hover:bg-emerald">{service.name} 문의하기</a></div></div></section>
  </main><Footer /></>;
}
