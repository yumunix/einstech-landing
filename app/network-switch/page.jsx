import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import TpLinkCatalog from "./TpLinkCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/network-switch",
  title: "TP-Link Omada Network Switch",
  description:
    "TP-Link Omada Access부터 Campus까지 기업용 네트워크 스위치를 등급별로 구성하고 아인스테크 공급 견적을 제공합니다.",
  keywords: [
    "TP-Link 스위치",
    "Omada 스위치",
    "Network Switch",
    "VLAN 스위치",
    "PoE 스위치",
    "10G 스위치",
    "기업용 네트워크",
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
              <Badge color="cyan">NETWORK SWITCH</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                TP-Link Omada
                <span className="mt-2 block text-navy">Network Switch</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                액세스부터 캠퍼스 코어까지 실제 포트·PoE·업링크 요구사항에 맞춰
                설계하고 아인스테크가 공급합니다. 외부 쇼핑몰로 이동하지 않고
                모델별 상세 상담과 구매 견적을 제공합니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#switch-lineup">제품 라인업 보기</PrimaryButton>
                <SecondaryButton href="/einswall">EINSWALL 방화벽 보기</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/e-gate/tp-link-sx3008f.jpg"
                alt="TP-Link Omada 네트워크 스위치"
                className="aspect-[4/3] w-full rounded-[24px] bg-white object-contain p-8"
              />
            </div>
          </div>
        </section>

        <section id="switch-lineup" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_OMADA"
              badgeColor="cyan"
              sectionLabel="Products — 네트워크 스위치"
            >
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                네트워크 규모에 맞는
                <br />
                <span className="text-navy">스위치 제품을 선택하세요.</span>
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
