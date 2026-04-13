import Link from "next/link";
import { WireframeChrome } from "@/components/WireframeChrome";
import { PRODUCTS } from "@/lib/products";

const DECISIONS = [
  <>
    <strong>Per cycle</strong> framing on subscription surfaces; full cycle{" "}
    <strong>orderPrice</strong> and interval <strong>orderCycle</strong> shown
    the same way as checkout.
  </>,
  <>
    <strong>Per-day</strong> stays secondary so the cycle charge stays the hero
    number patients remember from purchase.
  </>,
  <>
    <strong>Prescription</strong> duration and refill cadence appear only where
    the screen is about the script, not as a substitute for billing cadence.
  </>,
  <>
    <strong>Next renewal</strong> or <strong>next charge</strong> always includes
    amount and date; <strong>shipment</strong> timing lives under fulfillment when
    both are shown.
  </>,
  <>
    Tier and formulation changes follow defined upgrade and downgrade rules so
    portal language does not promise the wrong product or price.
  </>,
  <>
    Reassessment and intake flows reachable from the correct product context so
    patients do not land on the wrong questionnaire.
  </>,
  <>
    Engineering tags on dynamic fields in review decks so reviewers can see what
    is data-backed versus copy-only.
  </>,
] as const;

const DESIGN_PROPOSALS = [
  "Sort controls default: next charge date.",
  "Explicit “financing” lane if true multi-pay exists. Separate from standard subscription renewal UI.",
  "Security / wallet copy: align with checkout when product approves.",
  "Price or summary embedded in primary CTAs where it improves clarity (pending product review).",
] as const;

export default function OverviewPage() {
  const nad = PRODUCTS.nad8;
  const sem = PRODUCTS.sem12;

  return (
    <WireframeChrome>
      <div className="bg-white">
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
            Patient Portal · Wireframe site
          </p>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-[#141B34] md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Patient Portal: Subscription Billing &amp; Cadence
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
            After purchase, patients should see the same subscription story they saw
            at checkout: true cycle price, clear billing cadence, and honest renewal
            expectations. Today the portal often blurs monthly display pricing with
            real cycle charges, hides when the next bill hits, and uses shipment
            language where billing should lead. These wireframes tighten that
            experience so renewals feel predictable and support tickets go down.
          </p>

          <section className="mt-12" aria-labelledby="today-proposed-heading">
            <h2
              id="today-proposed-heading"
              className="sr-only"
            >
              Today versus proposed
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="inline-block rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Today
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-800">
                  Patients cannot see <strong>subscription billing</strong> clearly:
                  billing cadence (
                  <code className="rounded bg-neutral-100 px-1 text-xs">
                    orderCycle
                  </code>
                  ) is often missing, pricing mixes{" "}
                  <strong>per month / retail</strong> with true cycle charges, and{" "}
                  <strong>“Next shipment”</strong> appears where{" "}
                  <strong>next charge / renewal</strong> should set expectations.{" "}
                  <strong>Current Payment Plan</strong> and{" "}
                  <strong>1st / 2nd / 3rd Payment</strong> read like financing, not
                  per-cycle renewals.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="inline-block rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Proposed
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-800">
                  Engineering passes <strong>orderPrice</strong> and{" "}
                  <strong>orderCycle</strong> into portal surfaces the same way as
                  checkout. <strong>Per cycle</strong> language replaces confusing
                  monthly framing where it misleads. <strong>Per-day</strong> stays
                  secondary. Every subscription view shows{" "}
                  <strong>next charge</strong> (amount + date). Use{" "}
                  <strong>prescriptionCycle</strong> only for script/refill context,
                  not as a substitute for billing cadence. Keep{" "}
                  <strong>fulfillment</strong> (ship/tracking) separate from{" "}
                  <strong>billing</strong> when both appear.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="scope-heading">
            <h2
              id="scope-heading"
              className="text-xs font-bold uppercase tracking-wider text-neutral-500"
            >
              Scope
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50/90 p-4 sm:flex-row sm:items-start">
                <span className="shrink-0 self-start rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold uppercase text-white">
                  In
                </span>
                <p className="text-sm leading-relaxed text-neutral-800">
                  Subscription list, order detail, and edge-state screens anywhere
                  cadence and cycle price appear. Terminology matches checkout:{" "}
                  <code className="rounded bg-white px-1 text-xs">orderCycle</code>,{" "}
                  <code className="rounded bg-white px-1 text-xs">orderPrice</code>,
                  per-cycle hero pricing, next charge called out. Two example
                  products (8-week and 12-week cycles) anchor the review decks.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50/90 p-4 sm:flex-row sm:items-start">
                <span className="shrink-0 self-start rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold uppercase text-white">
                  Out
                </span>
                <p className="text-sm leading-relaxed text-neutral-800">
                  Full PDP or checkout redesign (separate deliverables). Payment
                  processor integration details. Ellie Payment Plan / BNPL product
                  spec unless explicitly approved. Admin or internal tooling.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="examples-heading">
            <h2
              id="examples-heading"
              className="text-xs font-bold uppercase tracking-wider text-neutral-500"
            >
              Cadence examples
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex flex-col gap-3 rounded-xl border border-sky-200 bg-sky-50/50 p-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="shrink-0 self-start rounded-md bg-sky-600 px-2.5 py-1 text-xs font-bold uppercase text-white">
                  8-week
                </span>
                <p className="text-sm text-neutral-800">
                  <span className="font-medium">{nad.name}</span>
                  <span className="text-neutral-500"> · {nad.category}. </span>
                  Retail: {nad.retailMo}. Actual:{" "}
                  <span className="font-semibold text-neutral-900">
                    ${nad.orderPrice} per 8-week cycle
                  </span>
                  . {nad.perDay}.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="shrink-0 self-start rounded-md bg-amber-600 px-2.5 py-1 text-xs font-bold uppercase text-white">
                  12-week
                </span>
                <p className="text-sm text-neutral-800">
                  <span className="font-medium">{sem.name}</span>
                  <span className="text-neutral-500"> · {sem.category}. </span>
                  Retail: {sem.retailMo}. Actual:{" "}
                  <span className="font-semibold text-neutral-900">
                    ${sem.orderPrice} per 12-week cycle
                  </span>
                  . {sem.perDay}.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="journey-heading">
            <h2
              id="journey-heading"
              className="text-xs font-bold uppercase tracking-wider text-neutral-500"
            >
              Patient portal journey
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Same narrative as checkout: see what you pay per cycle, drill into the
              order, then handle exceptions without losing the billing story.
            </p>
            <ol className="mt-8 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 lg:gap-8">
              <li className="flex max-w-[14rem] flex-1 flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E8623A] text-sm font-bold text-[#E8623A]"
                  aria-hidden
                >
                  1
                </span>
                <p className="mt-3 text-sm font-semibold text-neutral-900">
                  Subscription list
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Line items with cycle price, sort, renewal and paused states
                </p>
              </li>
              <li className="flex max-w-[14rem] flex-1 flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#141B34] text-sm font-bold text-white"
                  aria-hidden
                >
                  2
                </span>
                <p className="mt-3 text-sm font-semibold text-neutral-900">
                  Order detail
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Totals and payment schedule aligned to the billed cycle, not a
                  monthly fiction
                </p>
              </li>
              <li className="flex max-w-[14rem] flex-1 flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E8623A] text-sm font-bold text-[#E8623A]"
                  aria-hidden
                >
                  3
                </span>
                <p className="mt-3 text-sm font-semibold text-neutral-900">
                  Edge states
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Reassessment pending, paused, failed payment, composite cycles
                </p>
              </li>
            </ol>
            <p className="mt-8 text-center text-sm text-neutral-600">
              Requirements, document links, and ownership live on the{" "}
              <Link
                className="font-medium text-sky-800 underline decoration-sky-800/30 underline-offset-2 hover:decoration-sky-800"
                href="/sources"
              >
                Sources
              </Link>{" "}
              page.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="decisions-heading">
            <h2
              id="decisions-heading"
              className="text-xs font-bold uppercase tracking-wider text-emerald-800"
            >
              Decisions
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              Locked product and engineering choices that keep portal copy honest
              and consistent with checkout. Policy changes still need the usual
              sign-off.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {DECISIONS.map((node, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-800"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{node}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="proposals-heading">
            <h2
              id="proposals-heading"
              className="text-xs font-bold uppercase tracking-wider text-orange-800"
            >
              Design proposals (pending review)
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              Mark in UI with ? where relevant.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {DESIGN_PROPOSALS.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-800"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-200 text-xs font-bold text-orange-900"
                    aria-hidden
                  >
                    ?
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 flex flex-col items-center gap-4 border-t border-neutral-200 pt-10">
            <Link
              href="/subscription-list"
              className="inline-flex items-center justify-center rounded-lg bg-[#141B34] px-10 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f1428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141B34]"
            >
              View wireframes →
            </Link>
            <p className="text-center text-xs text-neutral-500">
              EllieMD · Patient Portal wireframes · Overview
            </p>
          </div>
        </main>
      </div>
    </WireframeChrome>
  );
}
