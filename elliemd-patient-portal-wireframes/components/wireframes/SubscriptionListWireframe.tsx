"use client";

import { useMemo, useState } from "react";
import { EngTag } from "@/components/EngTag";
import { PRODUCTS, type ProductKey } from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Reusable annotation circle (matches checkout reference style)     */
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
export function SubscriptionListWireframe() {
  const [productKey, setProductKey] = useState<ProductKey>("nad8");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [listMode, setListMode] = useState<"single" | "multiple">("multiple");

  const p = PRODUCTS[productKey];

  const secondaryCard = useMemo(() => {
    if (listMode === "single") return null;
    return productKey === "nad8" ? PRODUCTS.sem12 : PRODUCTS.nad8;
  }, [listMode, productKey]);

  const panelMax = device === "mobile" ? "max-w-[390px] mx-auto" : "";

  return (
    <main className="py-8">
      {/* Page header */}
      <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
        Patient Portal wireframes
      </p>
      <h1 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
        Active subscriptions &amp; upcoming renewals
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">
        Main view after login: when patients are charged next and how much.
        Current vs proposed side-by-side with cadence and pricing aligned to
        checkout. Single product per subscription card.
      </p>

      {/* ---- Toggle bar ---- */}
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
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
            Layout
          </span>
          <button
            type="button"
            onClick={() => setListMode("single")}
            className={
              listMode === "single"
                ? "rounded-full bg-[#141B34] px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-neutral-300 px-4 py-2 text-sm"
            }
          >
            1 subscription
          </button>
          <button
            type="button"
            onClick={() => setListMode("multiple")}
            className={
              listMode === "multiple"
                ? "rounded-full bg-[#141B34] px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-neutral-300 px-4 py-2 text-sm"
            }
          >
            Multiple (2-3)
          </button>
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
          Step 3
        </span>
        <span className="text-base font-semibold text-[#141B34]">
          Subscription list (home)
        </span>
      </div>

      {/* ============================================================ */}
      {/*  SIDE-BY-SIDE WIREFRAMES                                     */}
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

          {/* Wireframe content with annotation overlays */}
          <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Subscriptions</span>
              <span className="text-xs text-neutral-500">Sort: none</span>
            </div>

            {/* Primary card: legacy */}
            <div className="relative rounded-lg border border-neutral-200 bg-white p-3">
              <Callout n={1} className="absolute -left-3 -top-3" />
              <div className="flex justify-between gap-2">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-neutral-500">{p.category}</p>
                </div>
                <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                  Active
                </span>
              </div>
              <p className="mt-2 text-base font-semibold text-red-700">
                {p.retailMo}
                <span className="text-xs font-normal text-neutral-500">
                  {" "}
                  , billed monthly
                </span>
              </p>
              <p className="mt-1 text-xs text-red-600">
                Shows monthly price, not actual cycle charge
              </p>
            </div>

            {/* Callout 2: No cycle info */}
            <div className="relative rounded-lg border border-dashed border-red-200 bg-red-50/60 p-3">
              <Callout n={2} color="red" className="absolute -left-3 -top-3" />
              <p className="text-xs font-semibold text-red-800">
                No Subscription Cadence
              </p>
              <p className="text-xs text-red-700">
                No orderCycle / "Every N weeks" shown anywhere
              </p>
            </div>

            {/* Callout 3: Next shipment instead of next charge */}
            <div className="relative rounded-lg border border-neutral-200 bg-white p-3">
              <Callout n={3} color="red" className="absolute -left-3 -top-3" />
              <p className="text-xs text-neutral-600">
                Next shipment: Feb 15, 2026
              </p>
              <p className="mt-1 text-xs text-red-600">
                "Next shipment" used where "next charge" should set billing
                expectations
              </p>
            </div>

            {/* Callout 4: No per-day secondary */}
            <div className="relative rounded-lg border border-dashed border-red-200 bg-red-50/60 p-3">
              <Callout n={4} color="red" className="absolute -left-3 -top-3" />
              <p className="text-xs font-semibold text-red-800">
                No Value Breakdown
              </p>
              <p className="text-xs text-red-700">
                No per-day secondary, no per-cycle context
              </p>
            </div>

            {listMode === "multiple" && secondaryCard && (
              <div className="rounded-lg border border-neutral-200 bg-white p-3 opacity-90">
                <div className="flex justify-between">
                  <p className="font-medium">{secondaryCard.name}</p>
                  <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                    Active
                  </span>
                </div>
                <p className="mt-2 text-sm text-red-700">
                  {secondaryCard.retailMo} · Next shipment: Mar 1, 2026
                </p>
              </div>
            )}

            {listMode === "multiple" && (
              <div className="rounded-lg border border-neutral-200 bg-white p-3 opacity-80">
                <div className="flex justify-between">
                  <p className="font-medium">B12 injections</p>
                  <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                    Paused
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  $99/mo · "When does billing resume?" unclear
                </p>
              </div>
            )}

            <div className="flex gap-2 border-t border-neutral-100 pt-3">
              <button
                type="button"
                className="flex-1 rounded-lg border border-neutral-300 py-2 text-sm text-neutral-600"
                disabled
              >
                View details
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg border border-neutral-300 py-2 text-sm text-neutral-600"
                disabled
              >
                Manage
              </button>
            </div>
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

          {/* Sort control */}
          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
            <span className="text-xs font-medium text-neutral-600">
              Sort by:
            </span>
            <select
              className="rounded-lg border border-neutral-300 bg-white px-2 py-1 text-sm"
              aria-label="Sort subscriptions"
              defaultValue="next_charge"
            >
              <option value="next_charge">Next charge date (default)</option>
              <option value="category">Category</option>
              <option value="product">Product name</option>
            </select>
          </div>

          <div className="space-y-4">
            {/* Primary proposed card */}
            <article className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <Callout n={1} className="absolute -left-3 -top-3" />
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{p.category}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-900">
                  Active
                </span>
              </div>

              {/* Cycle row */}
              <div className="relative mt-4 flex flex-wrap items-center gap-2">
                <Callout n={2} className="absolute -left-3" />
                <span className="ml-5 text-sm text-neutral-600">Cycle</span>
                <span className="font-medium">{p.orderCycleDisplay}</span>
                <EngTag>orderCycle</EngTag>
              </div>

              {/* Price row */}
              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-sm text-neutral-600">Per cycle</span>
                <span className="text-xl font-bold tracking-tight">
                  ${p.orderPrice.toFixed(2)}
                </span>
                <EngTag>orderPrice</EngTag>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{p.perDay}</p>

              {/* Next charge block */}
              <div className="relative mt-4 rounded-lg bg-neutral-50 p-3">
                <Callout n={3} className="absolute -left-3 -top-3" />
                <p className="text-sm font-medium text-neutral-800">
                  Next charge:{" "}
                  <span className="font-semibold text-[#141B34]">
                    ${p.orderPrice.toFixed(2)}
                  </span>{" "}
                  on{" "}
                  <span className="text-neutral-600">
                    {p.nextChargeExample}
                  </span>
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Calculated from orderCycle + subscription anchor (eng).
                </p>
              </div>

              {/* Actions */}
              <div className="relative mt-4 flex flex-wrap gap-2">
                <Callout n={4} className="absolute -left-3 top-1" />
                <button
                  type="button"
                  className="ml-5 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                >
                  View details
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#E8623A] px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                >
                  Manage subscription
                </button>
              </div>
            </article>

            {listMode === "multiple" && secondaryCard && (
              <article className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{secondaryCard.name}</h3>
                    <p className="text-xs text-neutral-500">
                      {secondaryCard.category}
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-900">
                    Pending renewal
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span>{secondaryCard.orderCycleDisplay}</span>
                  <EngTag>orderCycle</EngTag>
                </div>
                <p className="mt-1 text-base font-bold">
                  ${secondaryCard.orderPrice.toFixed(2)}{" "}
                  <EngTag>orderPrice</EngTag>
                </p>
                <p className="text-xs text-neutral-500">
                  {secondaryCard.perDay}
                </p>
                <p className="mt-2 text-sm">
                  Next charge:{" "}
                  <span className="font-medium">
                    ${secondaryCard.orderPrice.toFixed(2)}
                  </span>{" "}
                  on {secondaryCard.nextChargeExample}
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs"
                  >
                    View details
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-[#141B34] px-3 py-1.5 text-xs text-white"
                  >
                    Manage subscription
                  </button>
                </div>
              </article>
            )}

            {listMode === "multiple" && (
              <article className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50/80 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-neutral-700">
                      B12 injections (example)
                    </h3>
                    <p className="text-xs text-neutral-500">Wellness</p>
                  </div>
                  <span className="rounded-full bg-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-800">
                    Paused
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-600">
                  No charges while paused. Cycle and price still shown for
                  transparency when patient resumes.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-neutral-700">
                  <span>Every 4 weeks</span>
                  <EngTag>orderCycle</EngTag>
                </div>
                <p className="mt-1 text-sm font-semibold text-neutral-600">
                  $129.00 <EngTag>orderPrice</EngTag>
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Next charge: <span className="font-medium">none</span> until
                  resumed
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs"
                  >
                    View details
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-[#141B34] px-3 py-1.5 text-xs text-white"
                  >
                    Resume subscription
                  </button>
                </div>
              </article>
            )}
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/*  ANNOTATION LEGEND (2-column grid, matches checkout)         */}
      {/* ============================================================ */}
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        <AnnotationRow
          n={1}
          title="Per-Cycle Price"
          description="Full orderPrice replaces monthly retailPrice. Per-day as secondary. Source: Pricing Display Decisions."
        />
        <AnnotationRow
          n={2}
          title="Subscription Cadence"
          description="orderCycle displayed as human interval via displayInterval(). Matches PDP and checkout. Source: data/product-pricing.md."
        />
        <AnnotationRow
          n={3}
          title="Next Charge Date"
          proposal
          description="Shows when the next billing cycle occurs. Engineering calculates from orderCycle. Replaces 'next shipment'."
          color="orange"
        />
        <AnnotationRow
          n={4}
          title="Subscription Actions"
          description="'Manage subscription' CTA communicates post-purchase control. Consistent with checkout 'Subscribe Now' intent. Source: Patient Portal v2 Figma frames."
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
            Each card shows product + category + status (Active / Paused /
            Pending renewal).
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Order price shows full cycle amount, not monthly conversion.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            orderCycle shown as human interval; tagged for engineering.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Per-day breakdown matches PDP calculation.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Next charge date + amount visible; not conflated with shipment.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            CTA says &apos;Manage subscription&apos;.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            Toggles: 8-week vs 12-week example; single vs multi; desktop vs
            mobile.
          </p>
          <p className="flex gap-2">
            <span className="text-emerald-600">&#10003;</span>
            All terminology aligns with data/product-pricing.md.
          </p>
        </div>
      </div>

      <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
        EllieMD · Patient Portal wireframes · Subscription list
      </footer>
    </main>
  );
}
