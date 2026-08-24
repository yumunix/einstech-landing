"use client";

import { useMemo, useState } from "react";
import PricingComparison from "./PricingComparison";
import { einswallPrices, pricingPolicy } from "./pricing";

const won = new Intl.NumberFormat("ko-KR");

const switchOfficialUsd = 309.99;
const switchUnitPrice = Math.ceil(
  (switchOfficialUsd * pricingPolicy.fixedUsdKrw) / 10000,
) * 10000;
const cctvCameraUnitPrice = 70000;
const cctvRecorderPackPrice = 300000;
const packageSizes = [15, 30, 50, 100];
const cctvOptions = [0, 4, 8, 16, 24];
const defaultCctvByUsers = { 15: 4, 30: 8, 50: 16, 100: 24 };

function selectFirewall(users) {
  if (users <= 15) {
    return {
      name: "EINSWALL i5-1G",
      detail: "Core i5 · 4×2.5GbE",
      price: einswallPrices.cpu.i5,
    };
  }
  if (users <= 30) {
    return {
      name: "EINSWALL i5-10G2",
      detail: "Core i5 · 2×10G SFP+",
      price: einswallPrices.cpu.i5 + einswallPrices.network["2s"],
    };
  }
  if (users <= 50) {
    return {
      name: "EINSWALL i7-10G2",
      detail: "Core i7 · 2×10G SFP+",
      price: einswallPrices.cpu.i7 + einswallPrices.network["2s"],
    };
  }
  return {
    name: "EINSWALL RACK ADVANCED i5",
    detail: "19형 1U · 4×10G SFP+",
    price: einswallPrices.rack.advancedConfigured,
  };
}

function buildPackage(users, cctvCount = defaultCctvByUsers[users] ?? 0) {
  const userPorts = users;
  const infrastructurePorts = 3;
  const requiredPorts = userPorts + cctvCount + infrastructurePorts;
  const switchCount = Math.ceil(requiredPorts / 24);
  const totalSwitchPorts = switchCount * 24;
  const firewall = selectFirewall(users);
  const switchTotal = switchCount * switchUnitPrice;
  const cctvRecorderCount = cctvCount > 0 ? Math.ceil(cctvCount / 8) : 0;
  const cctvCameraTotal = cctvCount * cctvCameraUnitPrice;
  const cctvRecorderTotal = cctvRecorderCount * cctvRecorderPackPrice;
  const cctvTotal = cctvCameraTotal + cctvRecorderTotal;

  return {
    users,
    userPorts,
    cctvCount,
    infrastructurePorts,
    requiredPorts,
    switchCount,
    totalSwitchPorts,
    sparePorts: totalSwitchPorts - requiredPorts,
    firewall,
    switchTotal,
    cctvRecorderCount,
    cctvCameraTotal,
    cctvRecorderTotal,
    cctvTotal,
    total: firewall.price + switchTotal + cctvTotal,
  };
}

export default function BusinessPackageConfigurator() {
  const [users, setUsers] = useState(15);
  const [cctvCount, setCctvCount] = useState(defaultCctvByUsers[15]);
  const bundle = useMemo(() => buildPackage(users, cctvCount), [users, cctvCount]);
  const inquiry = encodeURIComponent(
    `${users}명/CCTV ${cctvCount}대 기준 EINSWALL + SG2428P ${bundle.switchCount}대 장비 견적 문의`,
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:pl-12">
      <div className="space-y-7 rounded-[32px] border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
        <div>
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-emerald">
            FACTORY · SMB PACKAGE
          </div>
          <h3 className="mt-2 font-display text-2xl font-black text-slate-900">
            사업장 인원 기준 패키지
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            임직원 PC 외에 서버·무선 AP·CCTV·설비망과 향후 증설 포트를 함께 계산합니다.
          </p>
        </div>

        <fieldset>
          <legend className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
            사업장 규모 선택
          </legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {packageSizes.map((size) => {
              const active = users === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setUsers(size);
                    setCctvCount(defaultCctvByUsers[size]);
                  }}
                  aria-pressed={active}
                  className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                    active
                      ? "border-navy bg-navy text-white shadow-lg"
                      : "border-slate-200 bg-white text-slate-800 hover:border-navy/40"
                  }`}
                >
                  <span className="block font-display text-xl font-black">{size}명</span>
                  <span className={`mt-1 block text-[10px] ${active ? "text-white/65" : "text-slate-500"}`}>
                    CCTV {defaultCctvByUsers[size]}대 기준
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
            CCTV 수량 선택
          </legend>
          <div className="grid grid-cols-5 gap-2">
            {cctvOptions.map((count) => {
              const active = cctvCount === count;
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => setCctvCount(count)}
                  aria-pressed={active}
                  className={`rounded-xl border px-2 py-3 text-xs font-bold transition-colors ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-navy/40"
                  }`}
                >
                  {count === 0 ? "미포함" : `${count}대`}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald">
              Firewall
            </div>
            <h4 className="mt-2 font-display text-lg font-black text-slate-900">
              {bundle.firewall.name}
            </h4>
            <p className="mt-1 text-xs text-slate-600">{bundle.firewall.detail}</p>
            <div className="mt-4 border-t border-slate-100 pt-3 text-sm font-bold text-navy">
              {won.format(bundle.firewall.price)}원
            </div>
          </article>

          <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-800">
              Managed Switch
            </div>
            <h4 className="mt-2 font-display text-lg font-black text-slate-900">
              Omada SG2428P × {bundle.switchCount}대
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              대당 24×1G PoE+ + 4×1G SFP · VLAN·ACL·QoS·Omada 중앙관리
            </p>
            <div className="mt-4 border-t border-cyan-200 pt-3 text-sm font-bold text-cyan-900">
              {won.format(switchUnitPrice)}원 × {bundle.switchCount}대 = {won.format(bundle.switchTotal)}원
            </div>
          </article>

          {cctvCount > 0 && (
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:col-span-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                CCTV Equipment
              </div>
              <h4 className="mt-2 font-display text-lg font-black text-slate-900">
                TP-Link VIGI C340 × {cctvCount}대
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                4MP 실외형 PoE 카메라 · 8채널 NVR+감시용 HDD 구성 {bundle.cctvRecorderCount}세트
              </p>
              <div className="mt-4 grid gap-2 border-t border-amber-200 pt-3 text-sm font-bold text-amber-950 sm:grid-cols-2">
                <span>카메라 {won.format(cctvCameraUnitPrice)}원 × {cctvCount}대</span>
                <span className="sm:text-right">녹화장치 {won.format(cctvRecorderPackPrice)}원 × {bundle.cctvRecorderCount}세트</span>
              </div>
              <div className="mt-2 text-right font-display text-lg font-black text-amber-950">
                CCTV 장비 합계 {won.format(bundle.cctvTotal)}원
              </div>
            </article>
          )}
        </div>

        <dl className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-xs sm:grid-cols-2">
          <div className="flex justify-between gap-3"><dt className="text-slate-600">임직원용 포트</dt><dd className="font-bold text-slate-900">{bundle.userPorts}포트</dd></div>
          <div className="flex justify-between gap-3"><dt className="text-slate-600">선택한 CCTV</dt><dd className="font-bold text-slate-900">{bundle.cctvCount}포트</dd></div>
          <div className="flex justify-between gap-3"><dt className="text-slate-600">방화벽·서버·AP 기본</dt><dd className="font-bold text-slate-900">{bundle.infrastructurePorts}포트</dd></div>
          <div className="flex justify-between gap-3"><dt className="text-slate-600">총 필요 포트</dt><dd className="font-bold text-slate-900">{bundle.requiredPorts}포트</dd></div>
          <div className="flex justify-between gap-3"><dt className="text-slate-600">구성 후 예비 포트</dt><dd className="font-bold text-emerald-700">{bundle.sparePorts}포트</dd></div>
        </dl>

        <p className="text-[10px] leading-relaxed text-slate-500">
          SG2428P는 TP-Link 공식 Omada Store의 US${switchOfficialUsd}를 고정환율
          {won.format(pricingPolicy.fixedUsdKrw)}원으로 환산해 대당 {won.format(switchUnitPrice)}원으로
          산정했습니다. CCTV는 VIGI C340 및 8채널 NVR+감시용 HDD 기준의 예상 장비가입니다.
          실제 견적은 공급 시점 재고와 하드웨어 버전을 확인합니다.
        </p>
        <a
          href="https://store.omadanetworks.com/products/omada-28-port-poe-gigabit-smart-switch-with-4-sfp-slots-250w"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-[10px] font-bold text-navy underline decoration-navy/30 underline-offset-4 hover:text-emerald"
        >
          TP-Link Omada 공식 SG2428P 가격 기준 보기
        </a>
      </div>

      <aside className="h-fit rounded-[32px] bg-navy p-7 text-white lg:sticky lg:top-28">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
          {users} USERS PACKAGE
        </div>
        <h3 className="mt-3 font-display text-2xl font-black">
          방화벽 + 관리형 스위치
        </h3>
        <div className="mt-4 rounded-2xl bg-white/5 p-4">
          <div className="text-[10px] text-white/45">장비 구매금액 합계 · VAT 별도</div>
          <div className="mt-1 font-display text-3xl font-black">
            {won.format(bundle.total)}원
          </div>
          <div className="mt-2 text-[10px] text-white/40">
            방화벽 + 스위치 + 선택 CCTV · 가격 기준 {pricingPolicy.effectiveMonth}
          </div>
        </div>

        <div className="mt-4 space-y-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-[10px] leading-relaxed text-amber-100">
          <div>
            <strong className="text-white">장비 가격만 표시</strong> · 위 합계에는 방화벽,
            관리형 스위치, 선택한 CCTV 카메라와 NVR/HDD 장비만 포함합니다.
          </div>
          <div>
            <strong className="text-white">공사 자재비 별도</strong> · UTP·광케이블,
            커넥터, 광모듈, 패치패널, 랙, 케이블 덕트 등은 현장에 필요한 수량을 확인해
            별도 계산합니다.
          </div>
          <div>
            <strong className="text-white">설치 인건비 별도</strong> · 배선 공사, 장비·랙
            설치, VLAN·방화벽 정책 설정, CCTV 설치·각도 조정과 출장비는 현장 실사 후
            별도 계산합니다.
          </div>
          <div>
            자재비와 인건비는 장비 구독·분할 대상에 포함하지 않으며 계약 시 별도
            일시불로 납부합니다.
          </div>
        </div>

        <PricingComparison cashPrice={bundle.total} />

        <a
          href={`/contact?subject=${inquiry}`}
          className="mt-6 block rounded-2xl bg-emerald px-5 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy"
        >
          이 패키지로 견적 문의
        </a>
      </aside>
    </div>
  );
}
