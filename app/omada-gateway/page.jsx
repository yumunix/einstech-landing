import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import OmadaGatewayCatalog from "./OmadaGatewayCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/omada-gateway",
  title: "TP-Link Omada Business Gateway",
  description:
    "TP-Link Omada 기업용 게이트웨이 전 라인업. 멀티 WAN·VPN·SD-WAN을 권장소비자가와 함께 제공하며 아인스테크가 공급·구성합니다.",
  keywords: [
    "TP-Link 게이트웨이",
    "Omada Gateway",
    "기업 VPN 라우터",
    "SD-WAN",
    "멀티 WAN",
    "ER7412",
    "ER8411",
  ],
  image: "/products/omada-gw/er7412-m2.jpg",
});

export default function OmadaGatewayPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-page items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <Badge color="cyan">BUSINESS GATEWAY</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                TP-Link Omada
                <span className="mt-2 block text-navy">Business Gateway</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                멀티 WAN 이중화·VPN·SD-WAN을 단일 장비에서 제공하는 Omada 게이트웨이.
                소규모 매장부터 데이터센터급 엔터프라이즈까지 아인스테크가
                규모에 맞는 모델로 설계하고 공급합니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#gw-lineup">게이트웨이 라인업 보기</PrimaryButton>
                <SecondaryButton href="/network-switch">스위치 제품 보기</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/omada-gw/er7412-m2.jpg"
                alt="TP-Link Omada ER7412-M2 기업용 게이트웨이"
                className="aspect-[4/3] w-full rounded-[24px] bg-white object-contain p-8"
              />
            </div>
          </div>
        </section>

        <section id="gw-lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_OMADA"
              badgeColor="cyan"
              sectionLabel="Products — 비즈니스 게이트웨이"
            >
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                규모에 맞는
                <br />
                <span className="text-navy">게이트웨이를 선택하세요.</span>
              </h2>
            </SectionHeader>
            <OmadaGatewayCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
