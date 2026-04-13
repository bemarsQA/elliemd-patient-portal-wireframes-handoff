/** Example SKUs: amounts/cadence match rows in data/product-pricing.md (stakeholder package). */
export const PRODUCTS = {
  nad8: {
    id: "nad8",
    label: "8-Week (NAD+)",
    name: "NAD+ Nasal Spray",
    category: "Longevity",
    orderPrice: 478,
    orderCycleDisplay: "Every 8 weeks",
    perDay: "$8.54/day",
    retailMo: "$239/mo",
    nextChargeExample: "Mar 9, 2026",
  },
  sem12: {
    id: "sem12",
    label: "12-Week (Semaglutide)",
    name: "Semaglutide (Tier 1)",
    category: "Weight Loss",
    orderPrice: 897,
    orderCycleDisplay: "Every 12 weeks",
    perDay: "$10.68/day",
    retailMo: "$299/mo",
    nextChargeExample: "Apr 6, 2026",
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
