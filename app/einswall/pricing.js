export const pricingPolicy = {
  effectiveMonth: "2026.07",
  nextReviewDate: "2026-08-01",
  fixedUsdKrw: 1600,
  importTaxRate: 0.18,
  reviewCycle: "매월 1일 검토·갱신",
  sourceSummary: "네이버 쇼핑 직접 조사 · 다나와 가격비교 교차 검증",
  componentRule:
    "정확한 모델의 국내 신품 배송포함 최저 3개 중 중간값을 구하고, 삼성전자·SK하이닉스 중 높은 값을 기준으로 산정",
  exclusions: "중고·해외구매·병행수입·렌탈·품절 상품 제외",
};

export const einswallPrices = {
  cpu: {
    "8505": 1690000,
    i5: 1890000,
    i7: 2090000,
  },
  network: {
    none: 0,
    "2s": 300000,
    "4s": 500000,
  },
  memory: {
    "16": 0,
    "32": 350000,
    "64": 950000,
  },
  storage: {
    "512": 0,
    "1tb": 280000,
  },
  sfpModule: {
    none: 0,
    "1": 50000,
    "2": 120000,
    "4": 240000,
  },
};
