import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import VigiSecurityCatalog from "./VigiSecurityCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/vigi-security",
  title: "TP-Link VIGI 보안 카메라 & NVR",
  description:
    "TP-Link VIGI IP 카메라·NVR 전 라인업. 돔·벌릿·PT·InSight 기업용 보안 카메라를 권장소비자가와 함께 제공하며 아인스테크가 공급·설치합니다.",
  keywords: [
    "VIGI 카메라",
    "VIGI NVR",
    "TP-Link 보안카메라",
    "IP 카메라",
    "기업용 CCTV",
    "InSight",
    "네트워크 카메라",
  ],
  image: "/products/vigi-camera/vigi-c340.png",
});

export default function VigiSecurityPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-page items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <Badge color="cyan">VIGI SECURITY</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                TP-Link VIGI
                <span className="mt-2 block text-navy">보안 카메라 & NVR</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                돔·벌릿·PT·InSight 기업용 IP 카메라와 4~64채널 NVR.
                중소기업부터 대형 현장까지 아인스테크가 규모에 맞는 보안 솔루션을
                설계하고 공급합니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#ip-camera">카메라 라인업 보기</PrimaryButton>
                <SecondaryButton href="/omada-ap">무선 AP 보기</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[36px] bg-gradient-to-br from-slate-950 via-navy to-slate-900 p-8 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/vigi-camera/vigi-c340.png"
                alt="TP-Link VIGI C340 기업용 보안 카메라"
                className="aspect-[4/3] w-full rounded-[24px] bg-white object-contain p-8"
              />
            </div>
          </div>
        </section>

        <section id="ip-camera" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_VIGI"
              badgeColor="cyan"
              sectionLabel="Products — 보안 카메라 & NVR"
            >
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                현장에 맞는
                <br />
                <span className="text-navy">보안 카메라를 선택하세요.</span>
              </h2>
            </SectionHeader>
            <VigiSecurityCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
