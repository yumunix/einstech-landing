"use client";

import { useMemo, useState } from "react";
import {
  calculateSubscription,
  defaultSubscriptionMonths,
  subscriptionPlans,
} from "./subscription";

const won = new Intl.NumberFormat("ko-KR");

export default function PricingComparison({ cashPrice }) {
  const [months, setMonths] = useState(defaultSubscriptionMonths);
  const subscription = useMemo(
    () => calculateSubscription(cashPrice, months),
    [cashPrice, months],
  );

  return (
    <div className="mt-7 space-y-4">
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-1.5">
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
          <div className="text-[10px] font-bold text-white/45">일시불 구매</div>
          <div className="mt-1 font-display text-lg font-black text-white">
            {won.format(cashPrice)}원
          </div>
        </div>
        <div className="rounded-xl bg-emerald px-3 py-3 text-white">
          <div className="text-[10px] font-bold text-white/75">구독형 · 월 납부</div>
          <div className="mt-1 font-display text-lg font-black">
            {won.format(subscription.monthly)}원
          </div>
        </div>
      </div>

      <div>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/45">
          계약 기간 선택
        </div>
        <div className="grid grid-cols-3 gap-2">
          {subscriptionPlans.map((plan) => {
            const active = months === plan.months;
            return (
              <button
                key={plan.months}
                type="button"
                onClick={() => setMonths(plan.months)}
                aria-pressed={active}
                className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition-colors ${
                  active
                    ? "border-emerald bg-emerald text-white"
                    : "border-white/10 bg-white/5 text-white/65 hover:border-white/35 hover:text-white"
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
          <dt className="text-white/50">총 계약금액</dt>
          <dd className="font-bold text-white">{won.format(subscription.contractTotal)}원</dd>
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
        만기 인수형 예상 구독료입니다. 하드웨어, 기본 OS 설치, 계약기간 중 기본 원격
        장애접수 및 표준 보증을 포함합니다. 현장 출동, 정책 설계·변경, 배선, HA,
        유료 보안 라이선스는 별도이며 최종 조건은 견적서와 계약서를 따릅니다.
      </p>
    </div>
  );
}

