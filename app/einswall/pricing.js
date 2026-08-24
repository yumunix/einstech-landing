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
  sourceSummary: "삼성전자·SK하이닉스 정품 신품 · 국내 가격비교 기준",
  componentRule:
    "삼성전자 메모리와 삼성 980·SK하이닉스 Gold P31 NVMe 정품 신품의 국내 유통가를 기준으로 산정",
  exclusions: "OEM 벌크·적출품·중고·해외구매·병행수입·렌탈·품절 상품 제외",
};

const rackEntryUsd = 366.63;
const rackAdvancedUsd = 763.88;
const rackFlagshipUsd = 651.9;

export const einswallPrices = {
  cpu: {
    "8505": roundUp10000(
      1037000 + market.memory8 + market.storage500 - excludedServiceFees,
    ),
    i5: roundUp10000(
      1237000 + market.memory8 + market.storage500 - excludedServiceFees,
    ),
    i7: roundUp10000(
      1437000 + market.memory8 + market.storage500 - excludedServiceFees,
    ),
  },
  network: {
    none: 0,
    "2s": 300000,
    "4s": 500000,
  },
  memory: {
    "8": 0,
    "16": roundUp10000(market.memory16 - market.memory8),
    "32": roundUp10000(market.memory32 - market.memory8),
  },
  storage: {
    "250": roundUp10000(market.storage250) - roundUp10000(market.storage500),
    "500": 0,
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
        market.memory8 +
        market.storage500,
    ),
    advancedConfigured: roundUp10000(
      rackAdvancedUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate) +
        market.memory8 +
        market.storage500,
    ),
    flagshipConfigured: roundUp10000(
      rackFlagshipUsd * pricingPolicy.fixedUsdKrw * (1 + pricingPolicy.importTaxRate) +
        market.memory8 +
        market.storage500,
    ),
  },
};
