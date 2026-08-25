import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import OmadaApCatalog from "./OmadaApCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/omada-ap",
  title: "TP-Link Omada Access Point",
  description:
    "TP-Link Omada Wi-Fi 7·Wi-Fi 6 액세스 포인트 전 라인업. 천장형·벽판형·실외형 AP를 권장소비자가와 함께 제공하며 아인스테크가 공급·설치합니다.",
  keywords: [
    "TP-Link AP",
    "Omada AP",
    "Wi-Fi 7",
    "Wi-Fi 6",
    "무선 액세스 포인트",
    "기업용 AP",
    "EAP",
    "천장형 AP",
  ],
  image: "/products/omada-ap/eap770.jpg",
});

export default function OmadaApPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-page items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <Badge color="cyan">WIRELESS AP</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                TP-Link Omada
                <span className="mt-2 block text-navy">Access Point</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                Wi-Fi 7(BE)부터 Wi-Fi 6(AX)까지 사무실·교육·물류·공장 환경에 맞는
                AP를 선택하고 아인스테크가 공급·설치·유지보수합니다. 중앙 관리는
                Omada 컨트롤러 하나로 통합됩니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#ap-lineup">AP 라인업 보기</PrimaryButton>
                <SecondaryButton href="/network-switch">스위치 제품 보기</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/omada-ap/eap770.jpg"
                alt="TP-Link Omada EAP770 Wi-Fi 7 액세스 포인트"
                className="aspect-[4/3] w-full rounded-[24px] bg-white object-contain p-8"
              />
            </div>
          </div>
        </section>

        <section id="ap-lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_OMADA"
              badgeColor="cyan"
              sectionLabel="Products — 무선 AP"
            >
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                환경과 규모에 맞는
                <br />
                <span className="text-navy">무선 AP를 선택하세요.</span>
              </h2>
            </SectionHeader>
            <OmadaApCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
