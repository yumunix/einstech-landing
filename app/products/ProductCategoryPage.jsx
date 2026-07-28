import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export default function ProductCategoryPage({
  badge,
  title,
  subtitle,
  description,
  groups,
}) {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <Badge color="cyan">{badge}</Badge>
            <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-none text-slate-900">
              {title}
            </h1>
            <p className="mt-4 font-display text-xl font-bold text-navy sm:text-3xl">{subtitle}</p>
            <p className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#lineup">제품군 보기</PrimaryButton>
              <SecondaryButton href="/contact">공급 문의</SecondaryButton>
            </div>
          </div>
        </section>
        <section id="lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">
              PRODUCT_LINEUP
            </div>
            <h2 className="mt-3 font-display text-4xl font-black text-slate-900">제품 소개</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group) => (
                <article key={group.name} className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="font-mono text-[9px] font-bold tracking-widest text-navy">{group.tier}</div>
                  <h3 className="mt-3 font-display text-2xl font-black text-slate-900">{group.name}</h3>
                  <p className="mt-3 flex-grow text-sm leading-6 text-slate-600">{group.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {group.specs.map((spec) => <li key={spec} className="text-xs text-slate-600">▸ {spec}</li>)}
                  </ul>
                  <a href={`/contact?subject=${encodeURIComponent(`${title} ${group.name} 공급 문의`)}`} className="mt-6 rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald">
                    상세 사양 · 공급 견적
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
