import { WireframeChrome } from "@/components/WireframeChrome";
import { PRODUCTS, type ProductKey } from "@/lib/products";

const SKU_VERIFICATION_EXTRA = [
  {
    skuRowKey: "mots_c_injection",
    orderPrice: "$478",
    orderCycle: "Every 10 weeks (8 week supply, 2 week break)",
    perDay: "—",
    anchor: "data/product-pricing.md · mots_c_injection row",
  },
] as const;

export default function SourcesPage() {
  return (
    <WireframeChrome>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
          Patient Portal · Sources
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Sources &amp; traceability
        </h1>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Citations are limited to files under{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">data/</code> and{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">
            intake-questionnaires/
          </code>{" "}
          in the stakeholder package, plus the{" "}
          <strong>Patient Portal v2 Figma frames</strong>. Green = traceable to{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">data/</code> (or
          intake docs where noted). Orange = proposals. Engineering endpoints
          are illustrative.
        </p>

        <section className="mt-10 rounded-2xl border-2 border-emerald-500 bg-emerald-50/30 p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
            Decision traceability (sourced)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead>
                <tr className="border-b border-emerald-200 bg-white/80">
                  <th className="p-3 font-semibold">Topic</th>
                  <th className="p-3 font-semibold">Document</th>
                  <th className="p-3 font-semibold">Location / anchor</th>
                  <th className="p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 bg-white/60">
                <tr>
                  <td className="p-3">
                    <strong>orderPrice</strong>, <strong>retailPrice</strong>,{" "}
                    <strong>monthSupply</strong>
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/product-pricing.md
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Per-SKU table row · columns{" "}
                    <code className="text-xs">orderPrice</code>,{" "}
                    <code className="text-xs">retailPrice</code>,{" "}
                    <code className="text-xs">monthSupply</code>
                  </td>
                  <td className="p-3 text-neutral-700">
                    Authoritative price table; portal should not invent amounts
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <strong>orderCycle</strong> (billing cadence, incl.{" "}
                    <code className="text-xs">description</code>)
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/product-pricing.md
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Same row as SKU ·{" "}
                    <code className="text-xs">orderCycle</code> +{" "}
                    <code className="text-xs">description</code> (e.g. MOTS-C
                    10-week composite)
                  </td>
                  <td className="p-3 text-neutral-700">
                    e.g. MOTS-C row: 10-week cycle + supply/break description
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <strong>prescriptionCycle</strong> vs billing
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/product-pricing.md
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Same row · column{" "}
                    <code className="text-xs">prescriptionCycle</code> (or
                    equivalent); keep separate from billing cadence column
                  </td>
                  <td className="p-3 text-neutral-700">
                    Separate columns; do not swap into “next charge” copy by
                    default
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Next shipment vs billing expectation</td>
                  <td className="p-3 font-mono text-xs">
                    Patient Portal v2 Figma frames (Frame B, Frame J)
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Figma frame refs (Home B, Example product J); not a
                    product-pricing row
                  </td>
                  <td className="p-3 text-neutral-700">
                    UI issue in exported frames; not a row in product-pricing
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Intake &amp; reassessment URLs per SKU
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/reassessment-links.md
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Table: product / URL columns · match row to portal SKU id
                  </td>
                  <td className="p-3 text-neutral-700">
                    Routing table from spreadsheet export
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Tier / formulation changes</td>
                  <td className="p-3 font-mono text-xs">
                    data/upgrade-downgrade-matrix.md
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Matrix: from-tier × to-tier cells per product family
                  </td>
                  <td className="p-3 text-neutral-700">
                    Which tier moves are allowed per product id
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border-2 border-orange-500 bg-orange-50/40 p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-orange-900">
            Design proposals (pending review)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="border-b border-orange-200 bg-white/80">
                  <th className="p-3 font-semibold">Proposal</th>
                  <th className="p-3 font-semibold">Rationale</th>
                  <th className="p-3 font-semibold">Reference</th>
                  <th className="p-3 font-semibold">Where surfaced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100 bg-white/60">
                <tr>
                  <td className="p-3">Default sort: next charge date</td>
                  <td className="p-3 text-neutral-700">
                    Scannable when 2–3 active subscriptions
                  </td>
                  <td className="p-3 text-xs">This wireframe · Overview</td>
                  <td className="p-3 text-xs text-neutral-700">
                    /subscription-list · Proposed panel · sort control
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Explicit financing lane vs renewal UI</td>
                  <td className="p-3 text-neutral-700">
                    Avoid installment pattern on standard subs
                  </td>
                  <td className="p-3 text-xs">
                    Patient Portal v2 Figma frames (Frame E)
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    /edge-states · Panel 6; order detail delta row3
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Engineering tags on review decks</td>
                  <td className="p-3 text-neutral-700">
                    Map UI labels to API fields
                  </td>
                  <td className="p-3 text-xs">Wireframe convention</td>
                  <td className="p-3 text-xs text-neutral-700">
                    All Proposed panels ·{" "}
                    <code className="text-xs">EngTag</code> components
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Security line under primary CTAs</td>
                  <td className="p-3 text-neutral-700">
                    Optional reinforcement
                  </td>
                  <td className="p-3 text-xs">
                    Patient Portal v2 Figma frames
                  </td>
                  <td className="p-3 text-xs text-neutral-700">
                    Not yet in static wireframes; checkout parity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            Engineering touchpoints (illustrative)
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Shape endpoints to return the same fields as{" "}
            <code className="rounded bg-neutral-200 px-1 text-xs">
              data/product-pricing.md
            </code>{" "}
            (<strong>orderPrice</strong>, <strong>orderCycle</strong>, etc.)
            where applicable.
          </p>
          <ul className="mt-4 space-y-3 font-mono text-xs text-neutral-800">
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/subscriptions
              <span className="block pt-1 text-neutral-600">
                Active subscriptions: product, status, orderCycle, orderPrice,
                nextChargeDate, displayInterval
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/upcoming-renewals
              <span className="block pt-1 text-neutral-600">
                Consolidated renewal timeline for home + list sort
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/orders/{"{orderId}"}
              <span className="block pt-1 text-neutral-600">
                Order detail: line items, charge events, fulfillment, links to
                subscriptionId
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/subscriptions/{"{id}"}/schedule
              <span className="block pt-1 text-neutral-600">
                Optional: upcoming charge rows (amount, date, status)
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">PATCH</span>{" "}
              /api/portal/subscriptions/{"{id}"}
              <span className="block pt-1 text-neutral-600">
                pause · resume · cancel-intent (state machine)
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-10 overflow-x-auto rounded-xl border border-sky-200 bg-sky-50/40 p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-sky-950">
            SKU verification (wireframe examples)
          </h2>
          <p className="mt-2 text-sm text-neutral-700">
            Row keys and amounts match{" "}
            <code className="rounded bg-white px-1 text-xs">
              data/product-pricing.md
            </code>{" "}
            in the stakeholder package. Use this table for Step 7 price audits.
          </p>
          <table className="mt-4 w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-sky-200 bg-white/90">
                <th className="p-3 font-semibold">SKU (row key)</th>
                <th className="p-3 font-semibold">orderPrice</th>
                <th className="p-3 font-semibold">orderCycle (display)</th>
                <th className="p-3 font-semibold">perDay</th>
                <th className="p-3 font-semibold">Data anchor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-100 bg-white/70">
              {(Object.keys(PRODUCTS) as ProductKey[]).map((key) => {
                const p = PRODUCTS[key];
                return (
                  <tr key={key}>
                    <td className="p-3 font-mono text-xs">{p.skuRowKey}</td>
                    <td className="p-3">${p.orderPrice}</td>
                    <td className="p-3">{p.orderCycleDisplay}</td>
                    <td className="p-3">{p.perDay}</td>
                    <td className="p-3 text-xs text-neutral-700">
                      {p.pricingDocAnchor}
                    </td>
                  </tr>
                );
              })}
              {SKU_VERIFICATION_EXTRA.map((row) => (
                <tr key={row.skuRowKey}>
                  <td className="p-3 font-mono text-xs">{row.skuRowKey}</td>
                  <td className="p-3">{row.orderPrice}</td>
                  <td className="p-3 text-xs text-neutral-800">
                    {row.orderCycle}
                  </td>
                  <td className="p-3 text-neutral-600">{row.perDay}</td>
                  <td className="p-3 text-xs text-neutral-700">{row.anchor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            Terminology alignment
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Product and money fields align with{" "}
            <code className="rounded bg-neutral-200 px-1 text-xs">
              data/product-pricing.md
            </code>
            . Portal wording fixes follow{" "}
            <strong>Patient Portal v2 Figma frames</strong>. Intake copy for
            specific molecules lives under{" "}
            <code className="rounded bg-neutral-200 px-1 text-xs">
              intake-questionnaires/
            </code>{" "}
            (per-product{" "}
            <code className="rounded bg-neutral-200 px-1 text-xs">.md</code>{" "}
            files).
          </p>
          <table className="mt-4 w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="p-3 font-semibold">Portal (target)</th>
                <th className="p-3 font-semibold">
                  Checkout / PDP (conceptual)
                </th>
                <th className="p-3 font-semibold">Data anchor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-3">Per cycle / Every N weeks</td>
                <td className="p-3">Same cadence as purchase path</td>
                <td className="p-3 font-mono text-xs">
                  data/product-pricing.md · orderCycle
                </td>
              </tr>
              <tr>
                <td className="p-3">orderPrice (renewal amount)</td>
                <td className="p-3">Subscribe / pay flow amount</td>
                <td className="p-3 font-mono text-xs">
                  data/product-pricing.md · orderPrice
                </td>
              </tr>
              <tr>
                <td className="p-3">Retail / “per month” display</td>
                <td className="p-3">Must not hide true cycle charge</td>
                <td className="p-3 font-mono text-xs">
                  data/product-pricing.md · retailPrice, monthSupply
                </td>
              </tr>
              <tr>
                <td className="p-3">Next charge / Next renewal</td>
                <td className="p-3">Billing expectation</td>
                <td className="p-3 text-xs">
                  Patient Portal v2 Figma frames (UX); amounts from
                  product-pricing
                </td>
              </tr>
              <tr>
                <td className="p-3">Manage subscription</td>
                <td className="p-3">Post-purchase</td>
                <td className="p-3 font-mono text-xs">N/A</td>
              </tr>
              <tr>
                <td className="p-3 text-red-700 line-through">
                  Per Month (hero)
                </td>
                <td className="p-3 text-neutral-500">
                  Legacy framing in Patient Portal v2 Figma frames
                </td>
                <td className="p-3 font-mono text-xs">
                  Compare to orderCycle row
                </td>
              </tr>
              <tr>
                <td className="p-3 text-red-700 line-through">
                  Next shipment (billing-only)
                </td>
                <td className="p-3">N/A</td>
                <td className="p-3 text-xs">
                  Patient Portal v2 Figma frames (Frame B, Frame J)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-sm leading-relaxed text-neutral-800">
            <p className="font-semibold text-amber-950">
              Patient Portal v2 Figma · Section 13
            </p>
            <p className="mt-2">
              Lock primary CTAs and control labels (for example{" "}
              <strong>Manage subscription</strong>,{" "}
              <strong>View details</strong>,{" "}
              <strong>Resume subscription</strong>) against the stakeholder deck
              before sign-off. The table above is the data anchor for money and
              cadence fields; Section 13 is the UX/copy lock for visible
              controls.
            </p>
            <p className="mt-2 text-xs text-neutral-600">
              Legacy or forbidden phrasing may appear only in strikethrough rows
              or in wireframe <strong>Current</strong> panels—not as the
              proposed target state.
            </p>
          </div>
        </section>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          EllieMD · Patient Portal wireframes · Sources
        </footer>
      </main>
    </WireframeChrome>
  );
}
