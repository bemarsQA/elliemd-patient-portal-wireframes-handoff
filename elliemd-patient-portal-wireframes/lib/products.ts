export type RenewalTimelineRow = {
  label: string;
  date: string;
  status: string;
};

/** Example SKUs: amounts/cadence match rows in data/product-pricing.md (stakeholder package). */
export const PRODUCTS = {
  nad8: {
    id: "nad8",
    skuRowKey: "nad_plus_nasal_spray",
    label: "8-Week (NAD+)",
    name: "NAD+ Nasal Spray",
    category: "Longevity",
    orderPrice: 478,
    orderCycleDisplay: "Every 8 weeks",
    perDay: "$8.54/day",
    retailMo: "$239/mo",
    nextChargeExample: "Mar 9, 2026",
    prescriptionValidThroughExample: "Mar 15, 2027",
    pricingDocAnchor: "product-pricing.md · NAD+ nasal 8-week row",
    renewalTimeline: [
      { label: "Prior renewal", date: "Sep 16, 2025", status: "Fulfilled" },
      { label: "Last renewal", date: "Nov 11, 2025", status: "Fulfilled" },
      { label: "This order", date: "Jan 12, 2026", status: "Paid" },
      { label: "Next charge", date: "Mar 9, 2026", status: "Scheduled" },
    ] as const satisfies readonly RenewalTimelineRow[],
  },
  sem12: {
    id: "sem12",
    skuRowKey: "semaglutide_tier_1",
    label: "12-Week (Semaglutide)",
    name: "Semaglutide (Tier 1)",
    category: "Weight Loss",
    orderPrice: 897,
    orderCycleDisplay: "Every 12 weeks",
    perDay: "$10.68/day",
    retailMo: "$299/mo",
    nextChargeExample: "Apr 6, 2026",
    prescriptionValidThroughExample: "Jan 12, 2027",
    pricingDocAnchor: "product-pricing.md · Semaglutide Tier 1, 12-week row",
    renewalTimeline: [
      { label: "Prior renewal", date: "Oct 10, 2025", status: "Fulfilled" },
      { label: "Last renewal", date: "Jan 12, 2026", status: "Paid" },
      { label: "Next charge", date: "Apr 6, 2026", status: "Scheduled" },
    ] as const satisfies readonly RenewalTimelineRow[],
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
