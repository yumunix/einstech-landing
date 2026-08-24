const roundUp1000 = (value) => Math.ceil(value / 1000) * 1000;

export const subscriptionPlans = [
  {
    months: 36,
    label: "3년",
    multiplier: 1.32,
    description: "월 부담과 총 계약금액의 균형형",
  },
  {
    months: 48,
    label: "4년",
    multiplier: 1.46,
    description: "월 납입액을 낮춘 기업 표준형",
  },
  {
    months: 60,
    label: "5년",
    multiplier: 1.65,
    description: "최저 월 비용 중심의 장기형",
  },
];

export const defaultSubscriptionMonths = 36;

export function calculateSubscription(cashPrice, months = defaultSubscriptionMonths) {
  const plan = subscriptionPlans.find((item) => item.months === months) ?? subscriptionPlans[0];
  const monthly = roundUp1000((cashPrice * plan.multiplier) / plan.months);
  const contractTotal = monthly * plan.months;
  const cashPriceRecoveryMonth = Math.ceil(cashPrice / monthly);

  return {
    ...plan,
    monthly,
    contractTotal,
    cashPriceRecoveryMonth,
    serviceAndFinanceAmount: contractTotal - cashPrice,
  };
}

