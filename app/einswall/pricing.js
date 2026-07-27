import market from "./pricing-market.json";

const roundUp10000 = (value) => Math.ceil(value / 10000) * 10000;
const excludedOnsiteConfigurationFee = 200000;
const excludedWarrantyReserve = 100000;
const excludedServiceFees = excludedOnsiteConfigurationFee + excludedWarrantyReserve;

export const pricingPolicy = {
  effectiveMonth: market.effectiveMonth,
  nextReviewDate: market.nextReviewDate,
  fixedUsdKrw: 1600,
  importTaxRate: 0.18,
  reviewCycle: "매월 1일 검토·갱신",
  sourceSummary: "네이버 쇼핑 직접 조사 · 다나와 가격비교 교차 검증",
  componentRule:
    "정확한 모델의 국내 신품 배송포함 최저 3개 중 중간값을 구하고, 삼성전자·SK하이닉스 중 높은 값을 기준으로 산정",
  exclusions: "중고·해외구매·병행수입·렌탈·품절 상품 제외",
};

const rackEntryUsd = 366.63;
const rackAdvancedUsd = 763.88;
const rackFlagshipUsd = 651.9;

export const einswallPrices = {
  cpu: {
    "8505": roundUp10000(
      1037000 + market.memory16 + market.storage512 - excludedServiceFees,
    ),
    i5: roundUp10000(
      1237000 + market.memory16 + market.storage512 - excludedServiceFees,
    ),
    i7: roundUp10000(
      1437000 + market.memory16 + market.storage512 - excludedServiceFees,
    ),
  },
  network: {
    none: 0,
    "2s": 300000,
    "4s": 500000,
  },
  memory: {
    "16": 0,
    "32": roundUp10000(market.memory32 - market.memory16 + 95000),
    "64": roundUp10000(market.memory32 * 2 - market.memory16 + 105000),
  },
  storage: {
    "512": 0,
    "1tb": roundUp10000(market.storage1tb - market.storage512 + 170000),
  },
  sfpModule: {
    none: 0,
    "1": 50000,
    "2": 120000,
    "4": 240000,
  },
  rack: {
    entryBarebone: roundUp10000(
      rackEntryUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate),
    ),
    entryConfigured: roundUp10000(
      rackEntryUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate) +
        market.memory16 +
        market.storage512,
    ),
    advancedConfigured: roundUp10000(
      rackAdvancedUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate) +
        market.memory16 +
        market.storage512,
    ),
    flagshipConfigured: roundUp10000(
      rackFlagshipUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate) +
        market.memory16 +
        market.storage512,
    ),
  },
};
