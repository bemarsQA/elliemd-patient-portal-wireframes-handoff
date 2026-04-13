import { WireframeChrome } from "@/components/WireframeChrome";

/* ------------------------------------------------------------------ */
/*  Source document card (matches checkout reference card grid)        */
/* ------------------------------------------------------------------ */
function SourceCard({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-[#141B34]">{title}</h3>
        <span className="shrink-0 rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
          {type}
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}

/* ================================================================== */
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
          Reference materials and decision traceability for Patient Portal
          wireframes. Citations limited to files under{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">data/</code>{" "}
          and{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">
            intake-questionnaires/
          </code>{" "}
          in the stakeholder package, plus{" "}
          <strong>Patient Portal v2 Figma frames</strong>. Green = traceable to
          data/. Orange = proposals.
        </p>

        {/* ============================================================ */}
        {/*  SOURCE DOCUMENT CARDS                                       */}
        {/* ============================================================ */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SourceCard
            title="Product Price &amp; Order Cycle"
            type="Spreadsheet"
            description="Per-product pricing matrix. Single source of truth for orderPrice ($478, $897) and orderCycle (8wk, 12wk) values used in wireframes."
          />
          <SourceCard
            title="Pricing Display Decisions (Locked)"
            type="Meeting"
            description={`Locked: shift from 'per month' to 'per cycle' language. Show full orderPrice prominently, per-day as secondary. Applies to portal and checkout.`}
          />
          <SourceCard
            title="Subscription Cycle Mgmt Tech Spec"
            type="PDF"
            description="Defines orderCycle, orderPrice, displayInterval() data contracts. Engineering dependency for portal API endpoints."
          />
          <SourceCard
            title="Patient Portal v2 Figma Frames"
            type="Design"
            description="Current portal designs under audit. Sections referenced as sections B through J. Source of current-state screenshots in wireframes."
          />
          <SourceCard
            title="Upgrade/Downgrade Matrix"
            type="Spreadsheet"
            description="Which tier moves are allowed per product id. Referenced for Weight Loss tier display in portal edge states."
          />
          <SourceCard
            title="Reassessment Links"
            type="Spreadsheet"
            description="Routing table: intake and reassessment URLs per SKU. Used for correct questionnaire links from subscription management CTAs."
          />
        </div>

        {/* ============================================================ */}
        {/*  DECISION TRACEABILITY                                       */}
        {/* ============================================================ */}
        <section className="mt-10 rounded-2xl border-2 border-emerald-500 bg-emerald-50/30 p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
            Decision traceability (sourced)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-emerald-200 bg-white/80">
                  <th className="p-3 font-semibold">Sourced Decision</th>
                  <th className="p-3 font-semibold">Source Document</th>
                  <th className="p-3 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 bg-white/60">
                <tr>
                  <td className="p-3">
                    &quot;Per cycle&quot; language replaces &quot;per month&quot;
                  </td>
                  <td className="p-3 text-xs">Pricing Display Decisions</td>
                  <td className="p-3 text-xs text-neutral-600">
                    Locked decision
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Full orderPrice shown prominently; per-day as secondary
                  </td>
                  <td className="p-3 text-xs">Pricing Display Decisions</td>
                  <td className="p-3 text-xs text-neutral-600">
                    Locked decision
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    orderCycle and orderPrice from product database
                  </td>
                  <td className="p-3 text-xs">
                    Sub Cycle Mgmt Tech Spec (reference)
                  </td>
                  <td className="p-3 text-xs text-neutral-600">
                    Via pricing display project
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Subscription disclosure required on every portal view
                  </td>
                  <td className="p-3 text-xs">Pricing Display Project</td>
                  <td className="p-3 text-xs text-neutral-600">
                    Disclosure placement
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    NAD+ Nasal Spray: $478/8wk cycle
                  </td>
                  <td className="p-3 text-xs">Product Price &amp; Order Cycle</td>
                  <td className="p-3 font-mono text-xs text-neutral-600">
                    data/product-pricing.md: nad_nasal_spray
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Semaglutide Tier 1: $897/12wk cycle
                  </td>
                  <td className="p-3 text-xs">Product Price &amp; Order Cycle</td>
                  <td className="p-3 font-mono text-xs text-neutral-600">
                    data/product-pricing.md: semaglutide_injection_tier_1
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    prescriptionCycle vs billing kept separate
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/product-pricing.md
                  </td>
                  <td className="p-3 text-xs text-neutral-600">
                    Separate columns; do not swap into "next charge" copy
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Intake &amp; reassessment URLs per SKU
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/reassessment-links.md
                  </td>
                  <td className="p-3 text-xs text-neutral-600">
                    Routing table from spreadsheet export
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Tier / formulation upgrade-downgrade rules
                  </td>
                  <td className="p-3 font-mono text-xs">
                    data/upgrade-downgrade-matrix.md
                  </td>
                  <td className="p-3 text-xs text-neutral-600">
                    Which tier moves are allowed per product id
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  DESIGN PROPOSALS                                            */}
        {/* ============================================================ */}
        <section className="mt-10 rounded-2xl border-2 border-orange-500 bg-orange-50/40 p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-orange-900">
            Design proposals{" "}
            <span className="ml-2 rounded bg-orange-200 px-2 py-0.5 text-[10px] font-bold uppercase text-orange-800">
              Pending Review
            </span>
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-orange-200 bg-white/80">
                  <th className="p-3 font-semibold">Proposal</th>
                  <th className="p-3 font-semibold">Rationale</th>
                  <th className="p-3 font-semibold">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100 bg-white/60">
                <tr>
                  <td className="p-3">Default sort: next charge date</td>
                  <td className="p-3 text-neutral-700">
                    Scannable when 2-3 active subscriptions
                  </td>
                  <td className="p-3 text-xs">This wireframe · Overview</td>
                </tr>
                <tr>
                  <td className="p-3">
                    Explicit financing lane vs renewal UI
                  </td>
                  <td className="p-3 text-neutral-700">
                    Avoid installment pattern on standard subs
                  </td>
                  <td className="p-3 text-xs">
                    Patient Portal v2 Figma frames section E
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    Value breakdown showing consultation ($0) and shipping (Free)
                  </td>
                  <td className="p-3 text-neutral-700">
                    Reframes price as value. Derived from Pricing Display
                    Exploration Value Stack concept.
                  </td>
                  <td className="p-3 text-xs">Order detail (Step 4)</td>
                </tr>
                <tr>
                  <td className="p-3">
                    Next charge date on subscription list and detail
                  </td>
                  <td className="p-3 text-neutral-700">
                    Sets billing expectations. Engineering would calculate from
                    orderCycle.
                  </td>
                  <td className="p-3 text-xs">Steps 3 and 4</td>
                </tr>
                <tr>
                  <td className="p-3">Engineering tags on review decks</td>
                  <td className="p-3 text-neutral-700">
                    Map UI labels to API fields
                  </td>
                  <td className="p-3 text-xs">Wireframe convention</td>
                </tr>
                <tr>
                  <td className="p-3">Security line under primary CTAs</td>
                  <td className="p-3 text-neutral-700">
                    Optional reinforcement
                  </td>
                  <td className="p-3 text-xs">
                    Patient Portal v2 Figma frames
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PDP / CHECKOUT / PORTAL TERMINOLOGY ALIGNMENT               */}
        {/* ============================================================ */}
        <section className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            PDP / Checkout / Portal terminology alignment
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Portal wireframes use the exact same terms as the PDP pricing mockup
            (Honest Anchor / Subscription-First concepts from Pricing Display
            Exploration).
          </p>
          <table className="mt-4 w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="p-3 font-semibold">Element</th>
                <th className="p-3 font-semibold">PDP Display</th>
                <th className="p-3 font-semibold">Checkout Display</th>
                <th className="p-3 font-semibold">Portal Display</th>
                <th className="p-3 font-semibold text-center">Match</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-3">Cycle price</td>
                <td className="p-3 text-xs">$478.00 (prominent)</td>
                <td className="p-3 text-xs">$478.00 as orderPrice</td>
                <td className="p-3 text-xs">$478.00 as orderPrice</td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">Cycle interval</td>
                <td className="p-3 text-xs">Every 8 weeks</td>
                <td className="p-3 text-xs">Every 8 weeks as orderCycle</td>
                <td className="p-3 text-xs">Every 8 weeks as orderCycle</td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">Per-day cost</td>
                <td className="p-3 text-xs">$8.54/day (secondary)</td>
                <td className="p-3 text-xs">$8.54/day (secondary, below price)</td>
                <td className="p-3 text-xs">$8.54/day (secondary)</td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">Subscription label</td>
                <td className="p-3 text-xs">
                  "This is a subscription, billed every 8 weeks"
                </td>
                <td className="p-3 text-xs">
                  "This is an auto-renewing subscription" + disclosure
                </td>
                <td className="p-3 text-xs">
                  Renewal terms block with exact amount and interval
                </td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">CTA copy</td>
                <td className="p-3 text-xs">
                  "Subscribe Now" or "Secure Payment"
                </td>
                <td className="p-3 text-xs">
                  "Subscribe Now" / "Subscribe Now - $478.00"
                </td>
                <td className="p-3 text-xs">
                  "Manage subscription" / "View details"
                </td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">Value breakdown</td>
                <td className="p-3 text-xs">Consultation $0, Shipping Free</td>
                <td className="p-3 text-xs">
                  Same items in "What&apos;s Included" section
                </td>
                <td className="p-3 text-xs">
                  Same items in order detail (proposal)
                </td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
              <tr>
                <td className="p-3">Monthly price</td>
                <td className="p-3 text-xs">
                  Not shown on V2 pages (deprecated)
                </td>
                <td className="p-3 text-xs">
                  Not shown in proposed; only in CURRENT panel for comparison
                </td>
                <td className="p-3 text-xs">
                  Not shown in proposed; only in CURRENT panel
                </td>
                <td className="p-3 text-center text-emerald-600">&#10003;</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ============================================================ */}
        {/*  DISCLOSURE OWNERSHIP MATRIX                                 */}
        {/* ============================================================ */}
        <section className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            Disclosure ownership matrix
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Which portal screen is responsible for which disclosure, to avoid
            duplication or omission.
          </p>
          <table className="mt-4 w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="p-3 font-semibold">Disclosure</th>
                <th className="p-3 text-center font-semibold">Sub List</th>
                <th className="p-3 text-center font-semibold">Order Detail</th>
                <th className="p-3 text-center font-semibold">Edge States</th>
                <th className="p-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-3">Cycle price (orderPrice)</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Render from orderPrice. Must match across all steps.
                </td>
              </tr>
              <tr>
                <td className="p-3">Cycle interval (orderCycle)</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Render from displayInterval(orderCycle). Must match PDP.
                </td>
              </tr>
              <tr>
                <td className="p-3">Per-day breakdown</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Calculate: orderPrice / (orderCycle.count x 7). Optional on
                  edge states.
                </td>
              </tr>
              <tr>
                <td className="p-3">Renewal terms (auto-renewal)</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-center text-blue-600">&#9679;</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Order detail owns the full renewal explanation.
                </td>
              </tr>
              <tr>
                <td className="p-3">Next charge date</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Calculate: today + orderCycle. Show on all steps.
                </td>
              </tr>
              <tr>
                <td className="p-3">Prescription validity (52 wk)</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-center text-blue-600">&#9679;</td>
                <td className="p-3 text-center text-emerald-600">&#9679;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Order detail + reassessment edge state.
                </td>
              </tr>
              <tr>
                <td className="p-3">Value breakdown ({"what's included"})</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-center text-blue-600">&#9679;</td>
                <td className="p-3 text-center text-neutral-300">&#9675;</td>
                <td className="p-3 text-xs text-neutral-600">
                  Order detail only. Avoids repetition on list view.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-neutral-500">
            &#9679; green = primary owner. &#9679; blue = secondary (shown on
            this screen). &#9675; = not shown or optional.
          </p>
        </section>

        {/* ============================================================ */}
        {/*  EDGE CASES TABLE                                            */}
        {/* ============================================================ */}
        <section className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            Edge cases
          </h2>
          <table className="mt-4 w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="p-3 font-semibold">Edge Case</th>
                <th className="p-3 font-semibold">Behavior</th>
                <th className="p-3 font-semibold">Steps Affected</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-3">No active subscriptions</td>
                <td className="p-3 text-xs text-neutral-700">
                  Empty state with CTA to browse products. No subscription cards
                  rendered.
                </td>
                <td className="p-3 text-xs">Sub List</td>
              </tr>
              <tr>
                <td className="p-3">Pending provider approval</td>
                <td className="p-3 text-xs text-neutral-700">
                  Card shows product, cycle, and price but next charge is
                  &quot;pending.&quot; No billing until approval.
                </td>
                <td className="p-3 text-xs">Sub List, Order Detail</td>
              </tr>
              <tr>
                <td className="p-3">
                  Composite cycle descriptions (e.g., &quot;8 weeks on, 2 weeks
                  off&quot;)
                </td>
                <td className="p-3 text-xs text-neutral-700">
                  If orderCycle includes a description field, displayInterval()
                  returns the description instead of &quot;Every 8 weeks.&quot;
                  All steps render this longer text. Mobile wraps naturally.
                </td>
                <td className="p-3 text-xs">All</td>
              </tr>
              <tr>
                <td className="p-3">Payment failed</td>
                <td className="p-3 text-xs text-neutral-700">
                  Alert banner with retry date and amount. CTA: &quot;Update
                  payment method.&quot;
                </td>
                <td className="p-3 text-xs">Sub List, Order Detail</td>
              </tr>
              <tr>
                <td className="p-3">Reassessment approaching</td>
                <td className="p-3 text-xs text-neutral-700">
                  52-week prescription window approaching. Next charge shows
                  &quot;pending reassessment.&quot; CTA links to correct
                  intake-questionnaires/ file per SKU.
                </td>
                <td className="p-3 text-xs">Sub List, Order Detail</td>
              </tr>
              <tr>
                <td className="p-3">Weight Loss tier display</td>
                <td className="p-3 text-xs text-neutral-700">
                  Current tier shown on card. Upgrade/downgrade managed by
                  provider, not self-serve. Rules per
                  data/upgrade-downgrade-matrix.md.
                </td>
                <td className="p-3 text-xs">Sub List, Order Detail</td>
              </tr>
              <tr>
                <td className="p-3">Non-subscription products</td>
                <td className="p-3 text-xs text-neutral-700">
                  Monthly supplements (e.g. GLP-1 Support+) use dashed border
                  and distinct styling. No orderCycle/prescriptionCycle applies.
                </td>
                <td className="p-3 text-xs">Sub List</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ============================================================ */}
        {/*  ENGINEERING TOUCHPOINTS                                      */}
        {/* ============================================================ */}
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
              <span className="block pt-1 font-sans text-neutral-600">
                Active subscriptions: product, status, orderCycle, orderPrice,
                nextChargeDate, displayInterval
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/upcoming-renewals
              <span className="block pt-1 font-sans text-neutral-600">
                Consolidated renewal timeline for home + list sort
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/orders/{"{orderId}"}
              <span className="block pt-1 font-sans text-neutral-600">
                Order detail: line items, charge events, fulfillment, links to
                subscriptionId
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">GET</span>{" "}
              /api/portal/subscriptions/{"{id}"}/schedule
              <span className="block pt-1 font-sans text-neutral-600">
                Optional: upcoming charge rows (amount, date, status)
              </span>
            </li>
            <li className="rounded-lg bg-neutral-50 p-3">
              <span className="font-semibold text-[#141B34]">PATCH</span>{" "}
              /api/portal/subscriptions/{"{id}"}
              <span className="block pt-1 font-sans text-neutral-600">
                pause · resume · cancel-intent (state machine)
              </span>
            </li>
          </ul>
        </section>

        {/* ============================================================ */}
        {/*  DATA CONTRACTS                                              */}
        {/* ============================================================ */}
        <section className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-800">
            Data contracts
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="font-mono text-xs font-semibold text-[#141B34]">
                orderCycle
              </p>
              <pre className="mt-1 whitespace-pre-wrap font-mono text-xs text-neutral-700">
{`{ count: number, unit: 'week', description?: string }`}
              </pre>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="font-mono text-xs font-semibold text-[#141B34]">
                orderPrice
              </p>
              <pre className="mt-1 whitespace-pre-wrap font-mono text-xs text-neutral-700">
{`number // full cycle price in cents`}
              </pre>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="font-mono text-xs font-semibold text-[#141B34]">
                displayInterval(orderCycle)
              </p>
              <pre className="mt-1 whitespace-pre-wrap font-mono text-xs text-neutral-700">
{`// Returns: 'Every 8 weeks' or description if composite`}
              </pre>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="font-mono text-xs font-semibold text-[#141B34]">
                prescriptionCycle
              </p>
              <pre className="mt-1 whitespace-pre-wrap font-mono text-xs text-neutral-700">
{`{ count: number, unit: 'week' }
// Script/refill context only. Not a substitute for billing cadence.`}
              </pre>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          EllieMD · Patient Portal wireframes · Sources
        </footer>
      </main>
    </WireframeChrome>
  );
}
