import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import TpLinkCatalog from "./TpLinkCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/network-switch",
  title: "TP-Link Omada · VIGI",
  description:
    "아인스테크가 공급하는 TP-Link 기업용 제품군 — Omada 스위치·무선 AP, VIGI IP 카메라·NVR의 대표 모델과 공급 견적을 안내합니다.",
  keywords: [
    "TP-Link",
    "TP-Link 스위치",
    "Omada AP",
    "VIGI 카메라",
    "VIGI NVR",
    "Omada 컨트롤러",
    "기업용 네트워크·영상보안",
  ],
  image: "/products/e-gate/tp-link-sx3008f.jpg",
});

export default function NetworkSwitchPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-page items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <Badge color="cyan">TP-LINK OMADA · VIGI</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                TP-Link
                <span className="mt-2 block text-navy">Omada · VIGI</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                아인스테크는 TP-Link 기업용 제품군 — Omada 스위치·무선 AP와 VIGI
                IP 카메라·NVR을 함께 공급합니다. 네트워크와 영상보안을 Omada
                Central 한 곳에서 관리하며, 대표 모델과 전 라인업 견적을 안내합니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#switch-lineup">대표 제품 보기</PrimaryButton>
                <SecondaryButton href="/einswall">EINSWALL 방화벽 보기</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/e-gate/tp-link-sx3008f.jpg"
                alt="TP-Link Omada · VIGI 기업용 제품군"
                className="aspect-[4/3] w-full rounded-[24px] bg-white object-contain p-8"
              />
            </div>
          </div>
        </section>

        <section id="switch-lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_OMADA_VIGI"
              badgeColor="cyan"
              sectionLabel="Products — 대표 제품군"
            >
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                스위치·AP·카메라까지
                <br />
                <span className="text-navy">TP-Link를 한 곳에서 공급합니다.</span>
              </h2>
            </SectionHeader>
            <TpLinkCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
