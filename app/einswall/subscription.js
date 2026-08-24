const roundUp1000 = (value) => Math.ceil(value / 1000) * 1000;
const roundUp10000 = (value) => Math.ceil(value / 10000) * 10000;
const annualInstallmentAdjustment = 0.06;

export const installmentDownPaymentRates = [40];
export const installmentTerms = [24, 36];
export const defaultInstallmentDownPaymentRate = 40;
export const defaultInstallmentMonths = 36;

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
  const adjustedInstallmentTotal =
    financedPrincipal *
    (1 + annualInstallmentAdjustment * (normalizedMonths / 12));
  const monthly = roundUp1000(adjustedInstallmentTotal / normalizedMonths);
  const installmentTotal = monthly * normalizedMonths;

  return {
    downPaymentRate: normalizedRate,
    months: normalizedMonths,
    downPayment,
    financedPrincipal,
    monthly,
    installmentTotal,
    contractTotal: downPayment + installmentTotal,
  };
}
