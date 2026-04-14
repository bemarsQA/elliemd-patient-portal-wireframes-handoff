"use client";

import { useState } from "react";
import { EngTag } from "@/components/EngTag";
import { PRODUCTS, type ProductKey } from "@/lib/products";
import {
  wfControlColumn,
  wfControlLabel,
  wfControlShell,
  wfToggle,
  wfToggleDevice,
} from "@/lib/wireframe-ui";
import {
  IconMonitor,
  IconPhone,
} from "@/components/wireframes/PreviewDeviceIcons";

export function OrderDetailWireframe() {
  const [productKey, setProductKey] = useState<ProductKey>("sem12");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const p = PRODUCTS[productKey];
  const panelMax = device === "mobile" ? "max-w-[390px] mx-auto" : "";

  return (
    <main className="py-8">
      <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
        Patient Portal wireframes
      </p>
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
        Order detail (subscription order)
      </h1>
      <p className="mt-2 max-w-3xl text-neutral-600">
        <strong>Patient Portal v2 Figma frames</strong> (Frame D, Frame G):{" "}
        <strong>Per Month / Full Price</strong> columns,{" "}
        <strong>Total Price</strong> without cycle context, and{" "}
        <strong>installment-style</strong> schedules. Proposed view mirrors
        checkout line-item clarity; fields from{" "}
        <code className="rounded bg-neutral-200 px-1 text-xs">
          data/product-pricing.md
        </code>
        .
      </p>

      <div className={`mt-8 ${wfControlShell}`}>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <div className={wfControlColumn}>
            <span className={wfControlLabel}>Product</span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              {(Object.keys(PRODUCTS) as ProductKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProductKey(key)}
                  className={
                    productKey === key ? wfToggle.active : wfToggle.inactive
                  }
                >
                  {PRODUCTS[key].label}
                </button>
              ))}
            </div>
          </div>
          <div className={wfControlColumn}>
            <span className={wfControlLabel}>Device</span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={
                  device === "desktop"
                    ? wfToggleDevice.active
                    : wfToggleDevice.inactive
                }
              >
                <IconMonitor className="shrink-0 opacity-90" />
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={
                  device === "mobile"
                    ? wfToggleDevice.active
                    : wfToggleDevice.inactive
                }
              >
                <IconPhone className="shrink-0 opacity-90" />
                Mobile
              </button>
              <p className="mt-0.5 text-[10px] leading-snug text-neutral-500">
                Preview width only: full canvas vs ~390px phone column for the
                Current / Proposed panels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs uppercase text-neutral-500">
        STEP 4 · Order detail
      </p>

      <div
        className={`mt-4 grid items-start gap-6 lg:grid-cols-2 ${device === "mobile" ? "lg:grid-cols-1" : ""}`}
      >
        <section
          className={`rounded-2xl border-2 border-red-300 bg-red-50/80 p-4 shadow-sm ${panelMax}`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-red-800">
              Current
            </h2>
            <span className="text-xs text-red-700">
              Current Figma design patterns
            </span>
          </div>
          <div className="mb-3 rounded-lg border border-dashed border-red-300 bg-white/80 p-3 text-xs text-red-800">
            <strong>1</strong> Per Month vs Full Price columns ·{" "}
            <strong>2</strong> No orderCycle on order · <strong>3</strong>{" "}
            “Current Payment Plan” + 1st/2nd/3rd reads monthly ·{" "}
            <strong>4</strong> Next shipment mixed with billing
          </div>
          <div className="space-y-3 rounded-xl border border-red-200 bg-white p-4 text-sm">
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-100 pb-3">
              <div>
                <p className="font-semibold">Order #4521891</p>
                <p className="text-xs text-neutral-500">Placed Jan 12, 2026</p>
              </div>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs">
                Paid
              </span>
            </div>
            <div className="rounded-lg border border-neutral-200 p-3">
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
              <p className="mt-2 text-xs text-neutral-500">
                Confusing retail framing vs true cycle charge (Patient Portal v2
                Figma Frame D).
              </p>
            </div>
            <div className="flex justify-between border-t border-neutral-100 pt-3 font-semibold">
              <span>Total Price</span>
              <span className="text-red-700">${p.orderPrice.toFixed(2)}</span>
            </div>
            <div className="rounded-lg border border-dashed border-red-200 bg-red-50/50 p-3 text-xs">
              <p className="font-bold text-red-900">Current Payment Plan</p>
              <ul className="mt-2 space-y-1 text-neutral-700">
                <li>1st Payment · {p.retailMo} · due 1/25/2026</li>
                <li>2nd Payment · {p.retailMo} · due 2/25/2026</li>
                <li>3rd Payment · {p.retailMo} · due 3/25/2026</li>
              </ul>
              <p className="mt-2 text-red-800">
                Reads like installments, not orderCycle renewals (Patient Portal
                v2 Figma Frame E).
              </p>
            </div>
            <p className="text-xs text-neutral-600">
              Next shipment: Feb 2, 2026 ·{" "}
              <span className="text-red-700">No “next charge” line</span>
            </p>
            <button
              type="button"
              className="w-full rounded-lg border border-neutral-300 py-2 text-sm text-neutral-600"
            >
              Track my package
            </button>
          </div>
        </section>

        <section
          className={`rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 p-4 shadow-sm ${panelMax}`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-emerald-200 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
              Proposed
            </h2>
            <span className="text-xs text-emerald-800">
              Per data/product-pricing.md
            </span>
          </div>
          <div className="space-y-3 rounded-xl border border-emerald-200 bg-white p-4 text-sm">
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-100 pb-3">
              <div>
                <p className="font-semibold">Order #4521891</p>
                <p className="text-xs text-neutral-500">Placed Jan 12, 2026</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-900">
                Paid
              </span>
            </div>

            <div className="rounded-lg border border-neutral-200 p-3">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Subscription summary
              </p>
              <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-neutral-500">{p.category}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Active
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-neutral-600">Billing cadence</span>
                <span className="font-medium">{p.orderCycleDisplay}</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-neutral-600">Amount (this order)</span>
                <span className="text-xl font-bold">
                  ${p.orderPrice.toFixed(2)}
                </span>
                <EngTag>orderPrice</EngTag>
              </div>
              <p className="mt-1 text-xs text-neutral-500">{p.perDay}</p>
              <p className="mt-3 text-xs text-neutral-700">
                <span className="text-neutral-600">
                  Prescription valid through
                </span>{" "}
                <span className="font-medium">
                  {p.prescriptionValidThroughExample}
                </span>{" "}
                <EngTag>prescriptionCycle</EngTag>
                <span className="text-neutral-500">
                  {" "}
                  (example: 52-week validity from anchor; align to program
                  rules)
                </span>
              </p>
            </div>

            <div className="rounded-lg border border-sky-100 bg-sky-50/50 p-3">
              <p className="text-xs font-semibold uppercase text-sky-900">
                What&apos;s included
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-800">
                <li>
                  Medication ({p.orderCycleDisplay.replace(/^Every /, "")}{" "}
                  supply)
                </li>
                <li>Medical consultation ($0)</li>
                <li>Shipping (Free)</li>
              </ul>
              <p className="mt-2 text-xs text-neutral-600">
                Mirrors checkout / PDP value stack so renewals reinforce the
                same story.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 p-3">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Renewal timeline
              </p>
              <ul className="mt-3 space-y-2 border-l-2 border-emerald-200 pl-4">
                {p.renewalTimeline.map((row, i) => (
                  <li
                    key={i}
                    className={
                      row.status === "Scheduled"
                        ? "font-semibold text-emerald-900"
                        : row.status === "Paid"
                          ? "font-medium text-neutral-900"
                          : "text-neutral-800"
                    }
                  >
                    <span className="text-neutral-600">{row.label}</span> ·{" "}
                    {row.date} · ${p.orderPrice.toFixed(2)} · {row.status}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 p-3">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Charge history (this subscription)
              </p>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full min-w-[280px] text-left text-xs">
                  <thead>
                    <tr className="border-b border-neutral-200 text-neutral-600">
                      <th className="py-1.5 pr-2 font-medium">Date</th>
                      <th className="py-1.5 pr-2 font-medium">Amount</th>
                      <th className="py-1.5 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-800">
                    {p.renewalTimeline
                      .filter((r) => r.status !== "Scheduled")
                      .map((row, i) => (
                        <tr key={i}>
                          <td className="py-1.5 pr-2">{row.date}</td>
                          <td className="py-1.5 pr-2">
                            ${p.orderPrice.toFixed(2)}
                          </td>
                          <td className="py-1.5">{row.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Renewal index labels engineering-friendly counts; not “1st/2nd
                payment” unless true financing.
              </p>
            </div>

            <div className="rounded-lg border border-dashed border-emerald-200 bg-emerald-50/40 p-3 text-xs">
              <p className="font-semibold text-emerald-900">Fulfillment</p>
              <p className="mt-1 text-neutral-700">
                Estimated delivery: Feb 2, 2026 · Carrier tracking when
                available
              </p>
              <p className="mt-1 text-neutral-500">
                Billing vs fulfillment (portal UX);{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs">
                  prescriptionCycle
                </code>{" "}
                vs{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs">
                  orderCycle
                </code>{" "}
                in data/product-pricing.md.
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50/40 p-3 text-sm">
              <p className="text-xs font-semibold uppercase text-orange-900">
                Subscription management
              </p>
              <ul className="mt-2 space-y-2 text-neutral-800">
                <li>
                  <button
                    type="button"
                    className="text-left text-sky-800 underline decoration-sky-800/40"
                  >
                    Cancel subscription
                  </button>
                  <span className="ml-1 text-xs font-medium text-orange-800">
                    (? flow TBD)
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-sky-800 underline decoration-sky-800/40"
                  >
                    Contact support
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-sky-800 underline decoration-sky-800/40"
                  >
                    Start reassessment
                  </button>
                  <span className="ml-1 text-xs text-orange-800">
                    (? show when prescription window requires; link per{" "}
                    <code className="rounded bg-white px-1 text-[10px]">
                      data/reassessment-links.md
                    </code>
                    )
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
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

      <div className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="p-3 font-semibold">#</th>
              <th className="p-3 font-semibold">Field / pattern</th>
              <th className="p-3 font-semibold">Delta</th>
              <th className="p-3 font-semibold">
                Patient Portal v2 Figma frames
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            <tr>
              <td className="p-3 font-mono">1</td>
              <td className="p-3">Per Month / Full Price</td>
              <td className="p-3">
                Replace with <EngTag>orderPrice</EngTag> +{" "}
                <EngTag>orderCycle</EngTag> hero block
              </td>
              <td className="p-3 text-xs">
                Frame D · Semaglutide order detail
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono">2</td>
              <td className="p-3">Total Price</td>
              <td className="p-3">
                Keep for order totals; pair with cycle context for subscription
                rows
              </td>
              <td className="p-3 text-xs">Frame H · Orders list</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">3</td>
              <td className="p-3">Payment plan · 1st/2nd/3rd</td>
              <td className="p-3">
                Standard sub: renewal schedule + next charge; finance-only lane
                if applicable
              </td>
              <td className="p-3 text-xs">Frame E · Manage subscription</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">4</td>
              <td className="p-3">Next shipment</td>
              <td className="p-3">
                Add next charge; keep shipment under Fulfillment
              </td>
              <td className="p-3 text-xs">
                Frame B Home, Frame J Protein powder
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono">5</td>
              <td className="p-3">Prescription validity</td>
              <td className="p-3">
                Show script window via <EngTag>prescriptionCycle</EngTag>; do
                not replace billing cadence
              </td>
              <td className="p-3 text-xs">
                Design context section 11; Step 4 spec
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono">6</td>
              <td className="p-3">What&apos;s included</td>
              <td className="p-3">
                Value stack (medication, consult, shipping) like checkout
              </td>
              <td className="p-3 text-xs">Step 4 · order detail</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">7</td>
              <td className="p-3">Renewal timeline + charge history</td>
              <td className="p-3">
                Past charges + this order + scheduled next; table for
                scanability
              </td>
              <td className="p-3 text-xs">Step 4 · renewal clarity</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">8</td>
              <td className="p-3">Cancel / support / reassessment</td>
              <td className="p-3">
                Management block; cancel + reassessment marked ? until product
                locks flows
              </td>
              <td className="p-3 text-xs">Step 4 · management</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-700">
          Acceptance criteria
        </h3>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-700">
          <li>
            Order header shows subscription line item with orderPrice + human
            orderCycle.
          </li>
          <li>No “Per Month” as primary billing label for cycle-based SKUs.</li>
          <li>
            Subscription summary includes status,{" "}
            <EngTag>prescriptionCycle</EngTag> end date (script context), and
            separated billing cadence.
          </li>
          <li>
            What&apos;s included lists medication supply length, $0 consult,
            free shipping (checkout parity).
          </li>
          <li>
            Renewal timeline shows prior renewals, this order, and scheduled
            next charge with amounts.
          </li>
          <li>
            Charge history table lists past and current paid rows for this
            subscription.
          </li>
          <li>
            Charge date / renewal index labeled clearly; not installment copy
            unless product is financed.
          </li>
          <li>Fulfillment (ship/track) separated from billing summary.</li>
          <li>
            Subscription management exposes cancel, support, and reassessment
            entry points (proposals flagged ? where needed).
          </li>
          <li>
            CTAs consistent: View subscription vs View product detail (Patient
            Portal v2 Figma Frame H).
          </li>
        </ul>
      </div>

      <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
        EllieMD · Patient Portal wireframes · Order detail
      </footer>
    </main>
  );
}
