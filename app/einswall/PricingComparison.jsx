"use client";

import { useMemo, useState } from "react";
import {
  calculateInstallment,
  calculateSubscription,
  defaultInstallmentDownPaymentRate,
  defaultInstallmentMonths,
  defaultSubscriptionMonths,
  installmentDownPaymentRates,
  installmentTerms,
  subscriptionPlans,
} from "./subscription";

const won = new Intl.NumberFormat("ko-KR");

export default function PricingComparison({ cashPrice }) {
  const [paymentMode, setPaymentMode] = useState("installment");
  const [subscriptionMonths, setSubscriptionMonths] = useState(defaultSubscriptionMonths);
  const [downPaymentRate, setDownPaymentRate] = useState(
    defaultInstallmentDownPaymentRate,
  );
  const [installmentMonths, setInstallmentMonths] = useState(defaultInstallmentMonths);
  const subscription = useMemo(
    () => calculateSubscription(cashPrice, subscriptionMonths),
    [cashPrice, subscriptionMonths],
  );
  const installment = useMemo(
    () => calculateInstallment(cashPrice, downPaymentRate, installmentMonths),
    [cashPrice, downPaymentRate, installmentMonths],
  );

  const paymentModes = [
    { id: "cash", label: "일시불", amount: `${won.format(cashPrice)}원` },
    { id: "subscription", label: "구독형", amount: `월 ${won.format(subscription.monthly)}원` },
    { id: "installment", label: "선납+분할", amount: `월 ${won.format(installment.monthly)}원` },
  ];

  return (
    <div className="mt-7 space-y-4">
      <div>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/45">
          결제 방식 선택
        </div>
        <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white/5 p-1.5">
          {paymentModes.map((mode) => {
            const active = paymentMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setPaymentMode(mode.id)}
                aria-pressed={active}
                className={`flex min-h-[58px] w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-emerald bg-navy text-white"
                    : "border-slate-300 bg-slate-100 text-slate-950 hover:border-navy hover:bg-white hover:text-slate-950"
                }`}
              >
                <span className="block text-sm font-bold leading-tight">{mode.label}</span>
                <span className="block whitespace-nowrap text-right font-display text-base font-black leading-tight">
                  {mode.amount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {paymentMode === "cash" && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] font-bold text-white/45">일시불 구매가 · VAT 별도</div>
          <div className="mt-2 font-display text-2xl font-black text-white">
            {won.format(cashPrice)}원
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-white/45">
            제품 대금 전액 결제 방식이며 유지보수와 현장 서비스는 별도 선택입니다.
          </p>
        </div>
      )}

      {paymentMode === "subscription" && (
        <div className="space-y-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/45">
              구독 계약 기간
            </div>
            <div className="grid grid-cols-2 gap-2">
              {subscriptionPlans.map((plan) => {
                const active = subscriptionMonths === plan.months;
                return (
                  <button
                    key={plan.months}
                    type="button"
                    onClick={() => setSubscriptionMonths(plan.months)}
                    aria-pressed={active}
                    className={`min-h-11 rounded-xl border px-2 py-2.5 text-sm font-bold transition-colors ${
                      active
                        ? "border-emerald bg-navy text-white"
                        : "border-slate-300 bg-slate-100 text-slate-950 hover:border-navy hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {plan.label}
                  </button>
                );
              })}
            </div>
          </div>

          <dl className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-[11px]">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">월 구독료</dt>
              <dd className="font-bold text-emerald-200">
                {won.format(subscription.monthly)}원
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">총 계약금액</dt>
              <dd className="font-bold text-white">
                {won.format(subscription.contractTotal)}원
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">일시불 가격 누적 도달</dt>
              <dd className="font-bold text-emerald-200">
                {subscription.cashPriceRecoveryMonth}개월차
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">도달 후 잔여 계약</dt>
              <dd className="font-bold text-white">
                {subscription.months - subscription.cashPriceRecoveryMonth}개월
              </dd>
            </div>
          </dl>

          <p className="text-[10px] leading-relaxed text-white/45">
            만기 인수형 예상 구독료입니다. 하드웨어, 기본 OS 설치, 계약기간 중 기본
            원격 장애접수 및 표준 보증을 포함합니다. 계약기간의 납부를 모두 완료하면
            장비 소유권이 고객에게 이전되며 반납하지 않습니다.
          </p>
        </div>
      )}

      {paymentMode === "installment" && (
        <div className="space-y-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/45">
              선납금 선택
            </div>
            <div className="grid grid-cols-3 gap-2">
              {installmentDownPaymentRates.map((rate) => {
                const active = downPaymentRate === rate;
                return (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setDownPaymentRate(rate)}
                    aria-pressed={active}
                    className={`min-h-11 rounded-xl border px-2 py-2.5 text-sm font-bold transition-colors ${
                      active
                        ? "border-emerald bg-navy text-white"
                        : "border-slate-300 bg-slate-100 text-slate-950 hover:border-navy hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {rate}%
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/45">
              분할 기간 선택
            </div>
            <div className="grid grid-cols-3 gap-2">
              {installmentTerms.map((term) => {
                const active = installmentMonths === term;
                return (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setInstallmentMonths(term)}
                    aria-pressed={active}
                    className={`min-h-11 rounded-xl border px-2 py-2.5 text-sm font-bold transition-colors ${
                      active
                        ? "border-emerald bg-navy text-white"
                        : "border-slate-300 bg-slate-100 text-slate-950 hover:border-navy hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {term}개월
                  </button>
                );
              })}
            </div>
          </div>

          <dl className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-[11px]">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">계약 시 선납금</dt>
              <dd className="font-bold text-white">{won.format(installment.downPayment)}원</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">월 분할 납부액</dt>
              <dd className="font-bold text-emerald-200">
                {won.format(installment.monthly)}원 × {installment.months}개월
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-white/50">장비 총 납부액</dt>
              <dd className="font-bold text-white">
                {won.format(installment.contractTotal)}원
              </dd>
            </div>
          </dl>

          <p className="text-[10px] leading-relaxed text-white/45">
            제품 구매가의 {downPaymentRate}%를 먼저 납부하고 나머지 장비 대금을
            선택한 기간으로 나눠 납부하는 예상 금액입니다. 표시된 월 납부액과 장비
            총 납부액을 기준으로 계약하며, 최종 납부 완료 후 장비는 고객 소유가 되어
            반납하지 않습니다. 중도상환 조건은 최종 계약서를 따릅니다.
          </p>
        </div>
      )}

      <p className="text-[10px] leading-relaxed text-white/45">
        위 계산은 장비 가격만 포함하며 VAT 별도입니다. 케이블·광모듈·랙·패치패널 등
        공사 자재비와 배선·장비 설치·정책 설정 등 인건비는 포함하지 않습니다. 자재비와
        인건비는 현장 실사 후 각각 별도 계산하며 계약 시 일시불로 납부합니다.
      </p>
    </div>
  );
}
