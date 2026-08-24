const roundUp1000 = (value) => Math.ceil(value / 1000) * 1000;
const roundUp10000 = (value) => Math.ceil(value / 10000) * 10000;

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

export const installmentDownPaymentRates = [20, 30, 40, 50];
export const installmentTerms = [12, 24, 36];
export const defaultInstallmentDownPaymentRate = 30;
export const defaultInstallmentMonths = 36;

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

export function calculateInstallment(
  cashPrice,
  downPaymentRate = defaultInstallmentDownPaymentRate,
  months = defaultInstallmentMonths,
) {
  const normalizedRate = installmentDownPaymentRates.includes(downPaymentRate)
    ? downPaymentRate
    : defaultInstallmentDownPaymentRate;
  const normalizedMonths = installmentTerms.includes(months)
    ? months
    : defaultInstallmentMonths;
  const downPayment = roundUp10000(cashPrice * (normalizedRate / 100));
  const financedPrincipal = cashPrice - downPayment;
  const monthly = Math.ceil(financedPrincipal / normalizedMonths);
  const finalPayment = financedPrincipal - monthly * (normalizedMonths - 1);
  const installmentTotal = financedPrincipal;

  return {
    downPaymentRate: normalizedRate,
    months: normalizedMonths,
    downPayment,
    financedPrincipal,
    monthly,
    finalPayment,
    installmentTotal,
    contractTotal: cashPrice,
  };
}
