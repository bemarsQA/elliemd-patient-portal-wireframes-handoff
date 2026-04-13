"use client";

import { useState } from "react";
import { EngTag } from "@/components/EngTag";
import { PRODUCTS, type ProductKey } from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Reusable annotation circle                                        */
/* ------------------------------------------------------------------ */
function Callout({
  n,
  color = "teal",
  className = "",
}: {
  n: number;
  color?: "teal" | "orange" | "red";
  className?: string;
}) {
  const bg =
    color === "teal"
      ? "bg-teal-600"
      : color === "orange"
        ? "bg-[#E8623A]"
        : "bg-red-600";
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${bg} ${className}`}
      aria-hidden
    >
      {n}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Annotation legend row                                             */
/* ------------------------------------------------------------------ */
function AnnotationRow({
  n,
  title,
  description,
  proposal,
  color = "teal",
}: {
  n: number;
  title: string;
  description: string;
  proposal?: boolean;
  color?: "teal" | "orange";
}) {
  return (
    <div className="flex gap-3">
      <Callout n={n} color={color} className="mt-0.5" />
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-neutral-800">
        <span className="font-semibold">{title}</span>
        {proposal && (
          <span className="ml-2 rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-orange-800">
            Proposal
          </span>
        )}
        <span> {description}</span>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main component                                                    */
/* ================================================================== */
export function OrderDetailWireframe() {
  const [productKey, setProductKey] = useState<ProductKey>("sem12");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const p = PRODUCTS[productKey];
  const panelMax = device === "mobile" ? "max-w-[390px] mx-auto" : "";

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
        Patient Portal wireframes
      </p>
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
        Order / subscription detail
      </h1>
      <p className="mt-2 max-w-3xl text-neutral-600">
        Full picture when a patient clicks into a specific subscription: what
        they pay per cycle, when the next charge hits, value breakdown, charge
        history, and how to manage. Proposed view mirrors checkout line-item
        clarity.
      </p>

      {/* Toggle bar */}
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:flex-row md:flex-wrap md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-medium uppercase text-neutral-500">
            Product
          </span>
          {(Object.keys(PRODUCTS) as ProductKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setProductKey(key)}
              className={
                productKey === key
                  ? "rounded-full bg-[#141B34] px-4 py-2 text-sm font-medium text-white"
                  : "rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
              }
            >
              {PRODUCTS[key].label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-medium uppercase text-neutral-500">
            Device
          </span>
          <button
            type="button"
            onClick={() => setDevice("desktop")}
            className={
              device === "desktop"
                ? "rounded-full bg-[#141B34] px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-neutral-300 px-4 py-2 text-sm"
            }
          >
            Desktop
          </button>
          <button
            type="button"
            onClick={() => setDevice("mobile")}
            className={
              device === "mobile"
                ? "rounded-full bg-[#141B34] px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-neutral-300 px-4 py-2 text-sm"
            }
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Step label */}
      <div className="mt-8 flex items-center gap-3">
        <span className="rounded-md bg-[#E8623A] px-3 py-1 text-xs font-bold uppercase text-white">
          Step 4
        </span>
        <span className="text-lg font-semibold text-[#141B34]">
          Order / subscription detail
        </span>
      </div>

      {/* ============================================================ */}
      {/*  SIDE-BY-SIDE                                                 */}
      {/* ============================================================ */}
      <div
        className={`mt-4 grid gap-6 lg:grid-cols-2 ${device === "mobile" ? "lg:grid-cols-1" : ""}`}
      >
        {/* ---- CURRENT (Before) ---- */}
        <section
          className={`relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm ${panelMax}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wide text-red-700">
              Current
            </h2>
            <span className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
              Before
            </span>
          </div>

          <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 text-sm">
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-100 pb-3">
              <div>
                <p className="font-semibold">Order #4521891</p>
                <p className="text-xs text-neutral-500">Placed Jan 12, 2026</p>
              </div>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs">
                Paid
              </span>
            </div>

            {/* Callout 1: Per Month / Full Price columns */}
            <div className="relative rounded-lg border border-neutral-200 bg-white p-3">
              <Callout n={1} color="red" className="absolute -left-3 -top-3" />
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-neutral-500">{p.category}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded bg-red-50 p-2 text-red-800">
                  <p className="font-medium">Per Month</p>
                  <p className="text-lg font-semibold">{p.retailMo}</p>
                </div>
                <div className="rounded bg-red-50 p-2 text-red-800">
                  <p className="font-medium">Full Price</p>
                  <p className="text-lg font-semibold">
                    ${p.orderPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-red-600">
                Confusing retail framing vs true cycle charge
              </p>
            </div>

            <div className="flex justify-between border-t border-neutral-100 pt-3 font-semibold">
              <span>Total Price</span>
              <span className="text-red-700">${p.orderPrice.toFixed(2)}</span>
            </div>

            {/* Callout 2: Current Payment Plan */}
            <div className="relative rounded-lg border border-dashed border-red-200 bg-red-50/50 p-3 text-xs">
              <Callout n={2} color="red" className="absolute -left-3 -top-3" />
              <p className="font-bold text-red-900">Current Payment Plan</p>
              <ul className="mt-2 space-y-1 text-neutral-700">
                <li>1st Payment · {p.retailMo} · due 1/25/2026</li>
                <li>2nd Payment · {p.retailMo} · due 2/25/2026</li>
                <li>3rd Payment · {p.retailMo} · due 3/25/2026</li>
              </ul>
              <p className="mt-2 text-red-800">
                Reads like installments, not orderCycle renewals
              </p>
            </div>

            {/* Callout 3: Next shipment mixed with billing */}
            <div className="relative">
              <Callout n={3} color="red" className="absolute -left-3 -top-1" />
              <p className="ml-5 text-xs text-neutral-600">
                Next shipment: Feb 2, 2026
              </p>
              <p className="ml-5 mt-1 text-xs text-red-600">
                No "next charge" line
              </p>
            </div>

            <button
              type="button"
              className="w-full rounded-lg border border-neutral-300 py-2 text-sm text-neutral-600"
            >
              Track my package
            </button>
          </div>
        </section>

        {/* ---- PROPOSED (After) ---- */}
        <section
          className={`relative rounded-2xl border border-teal-300 bg-white p-5 shadow-sm ${panelMax}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-800">
              Proposed
            </h2>
            <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-bold text-white">
              After
            </span>
          </div>

          <div className="space-y-4 text-sm">
            {/* ---- Section 1: Subscription Summary ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={1} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Your Subscription
              </p>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{p.category}</p>
                </div>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                  {p.category}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Billed</span>
                  <span className="flex items-center gap-2 font-medium">
                    {p.orderCycleDisplay} <EngTag>orderCycle</EngTag>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Per cycle</span>
                  <span className="flex items-center gap-2 text-xl font-bold">
                    ${p.orderPrice.toFixed(2)} <EngTag>orderPrice</EngTag>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Per day</span>
                  <span className="text-neutral-600">{p.perDay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Status</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">
                    Prescription valid through
                  </span>
                  <span className="text-neutral-700">
                    Jan 12, 2027 (52 weeks)
                  </span>
                </div>
              </div>
            </div>

            {/* ---- Section 2: Renewal Terms ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={2} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Renewal Terms
              </p>
              <p className="text-neutral-700">
                Your subscription renews automatically{" "}
                {p.orderCycleDisplay.toLowerCase()}. You will be charged $
                {p.orderPrice.toFixed(2)} at each renewal. You can cancel or
                modify your subscription at any time through your patient portal.
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Your prescription is valid for 52 weeks. After that, a
                reassessment may be required.
              </p>
            </div>

            {/* ---- Section 3: Renewal Timeline ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={3} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Renewal Timeline
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-2.5">
                  <div>
                    <span className="font-medium text-neutral-800">
                      Last charge
                    </span>
                    <span className="ml-2 text-neutral-600">Jan 12, 2026</span>
                  </div>
                  <span className="font-semibold">
                    ${p.orderPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border-2 border-teal-200 bg-teal-50/50 p-2.5">
                  <div>
                    <span className="font-semibold text-[#141B34]">
                      Next charge
                    </span>
                    <span className="ml-2 text-neutral-600">
                      {p.nextChargeExample}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-[#141B34]">
                    ${p.orderPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Calculated from orderCycle + subscription start date.
              </p>
            </div>

            {/* ---- Section 4: What's Included ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={4} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {"What's Included"}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>
                    Medication ({productKey === "nad8" ? "8" : "12"}-week supply)
                  </span>
                  <span className="font-medium">
                    ${p.orderPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Medical consultation</span>
                  <span className="font-medium text-emerald-700">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-emerald-700">Free</span>
                </div>
              </div>
            </div>

            {/* ---- Section 5: Order History ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={5} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Charge History
              </p>
              <div className="divide-y divide-neutral-100 text-sm">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-medium">Jan 12, 2026</span>
                    <span className="ml-2 text-xs text-neutral-500">
                      Renewal #4
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      ${p.orderPrice.toFixed(2)}
                    </span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">
                      Fulfilled
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-medium">Nov 3, 2025</span>
                    <span className="ml-2 text-xs text-neutral-500">
                      Renewal #3
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      ${p.orderPrice.toFixed(2)}
                    </span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">
                      Fulfilled
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-medium">Aug 25, 2025</span>
                    <span className="ml-2 text-xs text-neutral-500">
                      Renewal #2
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      ${p.orderPrice.toFixed(2)}
                    </span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">
                      Fulfilled
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-medium">Jun 16, 2025</span>
                    <span className="ml-2 text-xs text-neutral-500">
                      Initial order
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      ${p.orderPrice.toFixed(2)}
                    </span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">
                      Fulfilled
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- Section 6: Fulfillment ---- */}
            <div className="rounded-xl border border-dashed border-teal-200 bg-teal-50/40 p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal-700">
                Fulfillment
              </p>
              <p className="text-neutral-700">
                Estimated delivery: Feb 2, 2026 · Carrier tracking when
                available
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Billing vs fulfillment kept separate; prescriptionCycle vs
                orderCycle in data/product-pricing.md.
              </p>
            </div>

            {/* ---- Section 7: Subscription Management ---- */}
            <div className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={6} className="absolute -left-3 -top-3" />
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Manage Subscription
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                >
                  Cancel subscription
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                >
                  Contact support
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#E8623A] px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                >
                  Start reassessment
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Reassessment link shown when prescription renewal is approaching
                (52-week window from prescriptionCycle).
              </p>
            </div>

            {/* Download actions */}
            <div className="flex flex-wrap gap-2 border-t border-neutral-100 pt-4">
              <button
                type="button"
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm"
              >
                View subscription
              </button>
              <button
                type="button"
                className="rounded-lg bg-[#141B34] px-4 py-2 text-sm text-white"
              >
                Download invoice
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/*  ANNOTATION LEGEND                                            */}
      {/* ============================================================ */}
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        <AnnotationRow
          n={1}
          title="Subscription Summary"
          proposal
          description="Consolidates product, cycle, price, per-day, status, and prescription validity into one scannable block. Design choice for scan-ability."
          color="orange"
        />
        <AnnotationRow
          n={2}
          title="Renewal Terms"
          description="Prominent display of auto-renewal, cancellation, and modification options. Source: Pricing Display Project (disclosure requirements)."
        />
        <AnnotationRow
          n={3}
          title="Renewal Timeline"
          description="Last charge + next charge with explicit amounts. Replaces installment-style 1st/2nd/3rd pattern. Engineering calculates from orderCycle."
        />
        <AnnotationRow
          n={4}
          title="Value Breakdown"
          proposal
          description="Shows included items ($0 consultation, free shipping). Reframes price as value. From Pricing Display Exploration Value Stack concept."
          color="orange"
        />
        <AnnotationRow
          n={5}
          title="Charge History"
          proposal
          description="Per-subscription charge log: date, amount, status (fulfilled, pending, refunded). Renewal index, not installment numbering."
          color="orange"
        />
        <AnnotationRow
          n={6}
          title="Subscription Management"
          description="Cancel, support, reassessment CTAs. Reassessment link appears when prescription approaches 52-week expiry."
        />
      </div>

      {/* ============================================================ */}
      {/*  ACCEPTANCE CRITERIA                                          */}
      {/* ============================================================ */}
      <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-700">
          Acceptance criteria
        </h3>
        <div className="mt-4 grid gap-x-8 gap-y-2 text-sm text-neutral-700 sm:grid-cols-2">
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Subscription summary shows product, cycle, price, and status.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            No "Per Month" as primary billing label for cycle-based SKUs.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Renewal terms prominently displayed with exact amount and interval.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            52-week prescription duration noted.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Next charge date shown with calculated interval.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Value breakdown shows included items.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Charge history uses renewal index, not installment numbering.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Fulfillment separated from billing summary.
          </p>
        </div>
      </div>

      <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
        EllieMD · Patient Portal wireframes · Order detail
      </footer>
    </main>
  );
}
