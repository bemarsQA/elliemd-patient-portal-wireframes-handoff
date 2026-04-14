"use client";

import { useMemo, useState } from "react";
import { EngTag } from "@/components/EngTag";
import { PRODUCTS, type ProductKey } from "@/lib/products";
import {
  wfControlColumn,
  wfControlLabel,
  wfControlShell,
  wfToggle,
  wfToggleDevice,
} from "@/lib/wireframe-ui";
import { IconMonitor, IconPhone } from "@/components/wireframes/PreviewDeviceIcons";

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
        <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
          Patient Portal wireframes
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Active subscriptions &amp; upcoming renewals
        </h1>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Main view after login: when patients are charged next and how much.
          Numeric cadence and prices align with{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">
            data/product-pricing.md
          </code>{" "}
          (
          <code className="rounded bg-neutral-200 px-1 text-xs">orderCycle</code>
          ,{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">orderPrice</code>
          ); copy gaps vs{" "}
          <strong>Patient Portal v2 Figma frames</strong>.
        </p>

        {/* Controls: label left, compact stacked toggles (subtle corners, not full pills) */}
        <div className={`mt-8 ${wfControlShell}`}>
          <div className="grid gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
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
              <span className={wfControlLabel}>Layout</span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <button
                  type="button"
                  onClick={() => setListMode("single")}
                  className={
                    listMode === "single" ? wfToggle.active : wfToggle.inactive
                  }
                >
                  1 subscription
                </button>
                <button
                  type="button"
                  onClick={() => setListMode("multiple")}
                  className={
                    listMode === "multiple"
                      ? wfToggle.active
                      : wfToggle.inactive
                  }
                >
                  Multiple (2–3)
                </button>
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
          STEP 3 · Subscription list (home)
        </p>

        <div
          className={`mt-4 grid gap-6 lg:grid-cols-2 ${device === "mobile" ? "lg:grid-cols-1" : ""}`}
        >
          {/* CURRENT */}
          <section
            className={`rounded-2xl border-2 border-red-300 bg-red-50/80 p-4 shadow-sm ${panelMax}`}
          >
            <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-red-800">
                Current
              </h2>
              <span className="text-xs text-red-700">
                Current Patient Portal v2 Figma designs
              </span>
            </div>

            <div className="mb-3 rounded-lg border border-dashed border-red-300 bg-white/80 p-3 text-xs text-red-800">
              <strong>1</strong> Monthly framing hides true cycle charge ·{" "}
              <strong>2</strong> No orderCycle / “Every N weeks” ·{" "}
              <strong>3</strong> “Next shipment” ≠ next charge ·{" "}
              <strong>4</strong> No per-day secondary
            </div>

            <div className="space-y-3 rounded-xl border border-red-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Subscriptions</span>
                <span className="text-xs text-neutral-500">Sort: none</span>
              </div>

              {/* Primary card: legacy */}
              <div className="rounded-lg border border-neutral-200 p-3">
                <div className="flex justify-between gap-2">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-neutral-500">{p.category}</p>
                  </div>
                  <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                    Active
                  </span>
                </div>
                <p className="mt-2 text-lg font-semibold text-red-700">
                  {p.retailMo}
                  <span className="text-xs font-normal text-neutral-500">
                    {" "}
                    , billed monthly
                  </span>
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Next shipment: Feb 15, 2026
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  No cycle badge · no orderPrice · no next charge date
                </p>
              </div>

              {listMode === "multiple" && secondaryCard && (
                <div className="rounded-lg border border-neutral-200 p-3 opacity-90">
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
                <div className="rounded-lg border border-neutral-200 p-3 opacity-80">
                  <div className="flex justify-between">
                    <p className="font-medium">B12 injections</p>
                    <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs">
                      Paused
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">
                    $99/mo · “When does billing resume?” unclear
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

          {/* PROPOSED */}
          <section
            className={`rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 p-4 shadow-sm ${panelMax}`}
          >
            <div className="mb-4 flex items-center justify-between border-b border-emerald-200 pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
                Proposed
              </h2>
              <span className="text-xs text-emerald-800">
                orderCycle + orderPrice + next charge
              </span>
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-emerald-200 bg-white/90 p-3">
              <span className="text-xs font-medium text-neutral-600">Sort by:</span>
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

            <div className="space-y-4 rounded-xl border border-emerald-200 bg-white p-4">
              {/* Primary proposed card */}
              <article className="rounded-xl border border-neutral-200 p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-neutral-500">{p.category}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-900">
                    Active
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-neutral-600">Cycle</span>
                  <span className="font-medium">{p.orderCycleDisplay}</span>
                  <EngTag>orderCycle</EngTag>
                  <span className="text-xs text-neutral-400">
                    displayInterval(orderCycle)
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="text-sm text-neutral-600">Per cycle</span>
                  <span className="text-2xl font-bold tracking-tight">
                    ${p.orderPrice.toFixed(2)}
                  </span>
                  <EngTag>orderPrice</EngTag>
                </div>
                <p className="mt-1 text-sm text-neutral-500">{p.perDay}</p>

                <div className="mt-4 rounded-lg bg-neutral-50 p-3">
                  <p className="text-sm font-medium text-neutral-800">
                    Next charge:{" "}
                    <span className="font-semibold text-[#141B34]">
                      ${p.orderPrice.toFixed(2)}
                    </span>{" "}
                    on{" "}
                    <span className="text-neutral-600">{p.nextChargeExample}</span>
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Calculated from orderCycle + subscription anchor (eng).
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
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
                <article className="rounded-xl border border-neutral-200 p-4 opacity-95 shadow-sm">
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
                  <p className="mt-1 text-lg font-bold">
                    ${secondaryCard.orderPrice.toFixed(2)}{" "}
                    <EngTag>orderPrice</EngTag>
                  </p>
                  <p className="text-xs text-neutral-500">{secondaryCard.perDay}</p>
                  <p className="mt-2 text-sm">
                    Next charge:{" "}
                    <span className="font-medium">${secondaryCard.orderPrice.toFixed(2)}</span>{" "}
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

        {/* Annotations table */}
        <div className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="p-3 font-semibold">#</th>
                <th className="p-3 font-semibold">Element</th>
                <th className="p-3 font-semibold">What changed</th>
                <th className="p-3 font-semibold">Why it matters</th>
                <th className="p-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-3 font-mono">1</td>
                <td className="p-3">Cycle line</td>
                <td className="p-3">
                  Added <EngTag>orderCycle</EngTag> + “Every N weeks” from
                  displayInterval()
                </td>
                <td className="p-3">Matches PDP &amp; checkout; removes monthly confusion</td>
                <td className="p-3 text-xs text-neutral-600">
                  data/product-pricing.md
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono">2</td>
                <td className="p-3">Per-cycle price</td>
                <td className="p-3">
                  Prominent <EngTag>orderPrice</EngTag> replaces retail/mo hero
                </td>
                <td className="p-3">Patient sees actual renewal charge amount</td>
                <td className="p-3 text-xs">
                  data/product-pricing.md
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono">3</td>
                <td className="p-3">Per-day</td>
                <td className="p-3">Secondary line under orderPrice</td>
                <td className="p-3">Locked: secondary only</td>
                <td className="p-3 text-xs">
                  data/product-pricing.md (orderPrice / orderCycle)
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono">4</td>
                <td className="p-3">Next charge</td>
                <td className="p-3">Explicit date + amount; not “next shipment”</td>
                <td className="p-3">Billing truth vs fulfillment</td>
                <td className="p-3 text-xs">Patient Portal v2 Figma frames</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">5</td>
                <td className="p-3">Sort</td>
                <td className="p-3">Next charge (default), category, name</td>
                <td className="p-3">Scannable when 2–3 subscriptions</td>
                <td className="p-3 text-xs">This wireframe set (proposal)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">6</td>
                <td className="p-3">Actions</td>
                <td className="p-3">View details · Manage subscription</td>
                <td className="p-3">Continuity with manage/cancel flows</td>
                <td className="p-3 text-xs">Patient Portal v2 Figma frames</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Acceptance criteria */}
        <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-700">
            Acceptance criteria
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              Each card shows product + category + status (Active / Paused / Pending
              renewal).
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              orderCycle shown as human interval; tagged for engineering.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              orderPrice per cycle prominent; per-day secondary.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              Next charge date + amount visible; not conflated with shipment.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              Toggles: 8-week vs 12-week example; single vs multi; desktop vs mobile.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              Terminology aligns with{" "}
              <code className="rounded bg-neutral-200 px-1 text-xs">
                data/product-pricing.md
              </code>{" "}
              for amounts/cadence; portal copy aligned with Patient Portal v2 Figma
              frames.
            </li>
          </ul>
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          EllieMD · Patient Portal wireframes · Subscription list
        </footer>
    </main>
  );
}
