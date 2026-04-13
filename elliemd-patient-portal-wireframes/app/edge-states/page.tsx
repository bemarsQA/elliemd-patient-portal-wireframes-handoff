import { WireframeChrome } from "@/components/WireframeChrome";
import { EngTag } from "@/components/EngTag";

/* ------------------------------------------------------------------ */
/*  Reusable card shell for each edge-state wireframe                 */
/* ------------------------------------------------------------------ */
function StateCard({
  n,
  title,
  borderColor,
  bgColor,
  children,
}: {
  n: number;
  title: string;
  borderColor: string;
  bgColor: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`rounded-2xl border-2 ${borderColor} ${bgColor} p-5 shadow-sm`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#141B34] text-sm font-bold text-white">
          {n}
        </span>
        <h2 className="text-base font-bold text-[#141B34]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Tiny status badge                                                 */
/* ------------------------------------------------------------------ */
function StatusBadge({
  label,
  color,
}: {
  label: string;
  color: "green" | "amber" | "red" | "neutral" | "violet";
}) {
  const cls = {
    green: "bg-emerald-100 text-emerald-900",
    amber: "bg-amber-100 text-amber-900",
    red: "bg-red-100 text-red-900",
    neutral: "bg-neutral-200 text-neutral-800",
    violet: "bg-violet-100 text-violet-900",
  }[color];
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}

/* ================================================================== */
export default function EdgeStatesPage() {
  return (
    <WireframeChrome>
      <main className="py-8">
        <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
          Patient Portal · Edge cases
        </p>
        <h1 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
          Edge states
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">
          Every realistic portal state needs a designed response. These
          wireframe mockups show what patients see beyond the happy path:
          empty lists, paused subscriptions, payment failures, reassessment
          gates, composite cycles, and non-subscription products.
        </p>

        {/* Step label */}
        <div className="mt-8 flex items-center gap-3">
          <span className="rounded-md bg-[#E8623A] px-3 py-1 text-xs font-bold uppercase text-white">
            Step 5
          </span>
          <span className="text-base font-semibold text-[#141B34]">
            Edge states and empty states
          </span>
        </div>

        <div className="mt-6 space-y-6">
          {/* ---- 1. No active subscriptions (empty state) ---- */}
          <StateCard
            n={1}
            title="No active subscriptions (empty state)"
            borderColor="border-neutral-300"
            bgColor="bg-neutral-50/60"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
                <span className="text-2xl text-neutral-400" aria-hidden>
                  &#8709;
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#141B34]">
                No active subscriptions
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-600">
                You don&apos;t have any active subscriptions right now.
                Browse our products to find the right treatment for you.
              </p>
              <button
                type="button"
                className="mt-5 rounded-lg bg-[#E8623A] px-6 py-2.5 text-sm font-medium text-white"
              >
                Browse products
              </button>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Shown when patient has cancelled everything or is a new account
              with no orders. CTA links to product catalog.
            </p>
          </StateCard>

          {/* ---- 2. Pending provider approval ---- */}
          <StateCard
            n={2}
            title="Pending provider approval (no charges yet)"
            borderColor="border-amber-300"
            bgColor="bg-amber-50/40"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">NAD+ Nasal Spray</p>
                  <p className="text-xs text-neutral-500">Longevity</p>
                </div>
                <StatusBadge label="Pending approval" color="amber" />
              </div>
              <div className="mt-3 rounded-lg bg-amber-50 p-3 text-sm">
                <p className="font-medium text-amber-900">
                  Awaiting provider review
                </p>
                <p className="mt-1 text-xs text-amber-800">
                  Your prescription is being reviewed. You will not be charged
                  until your provider approves your order.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
                <span>{`Every 8 weeks`}</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-sm">
                $478.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Next charge: <span className="font-medium">pending</span> until
                approved
              </p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Patient just signed up; subscription created but first charge
              awaits provider approval. Show cycle and price for transparency
              even before first charge.
            </p>
          </StateCard>

          {/* ---- 3. Active subscription ---- */}
          <StateCard
            n={3}
            title="Active subscription (normal state)"
            borderColor="border-emerald-300"
            bgColor="bg-emerald-50/30"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">NAD+ Nasal Spray</p>
                  <p className="text-xs text-neutral-500">Longevity</p>
                </div>
                <StatusBadge label="Active" color="green" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span>Every 8 weeks</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-base font-bold">
                $478.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="text-xs text-neutral-500">$8.54/day</p>
              <div className="mt-3 rounded-lg bg-neutral-50 p-3 text-sm">
                <p>
                  Next charge:{" "}
                  <span className="font-semibold">$478.00</span> on Mar 9, 2026
                </p>
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs">
                  View details
                </button>
                <button type="button" className="rounded-lg bg-[#E8623A] px-3 py-1.5 text-xs text-white">
                  Manage subscription
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Standard happy-path card for reference. Next charge date and
              amount always visible.
            </p>
          </StateCard>

          {/* ---- 4. Paused subscription ---- */}
          <StateCard
            n={4}
            title="Paused subscription"
            borderColor="border-neutral-400"
            bgColor="bg-neutral-50/80"
          >
            <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-neutral-700">
                    B12 injections
                  </p>
                  <p className="text-xs text-neutral-500">Wellness</p>
                </div>
                <StatusBadge label="Paused" color="neutral" />
              </div>
              <div className="mt-3 rounded-lg bg-neutral-100 p-3 text-sm">
                <p className="font-medium text-neutral-800">
                  Subscription paused
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  No charges while paused. Your cycle and price are preserved
                  for when you resume.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
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
                <button type="button" className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs">
                  View details
                </button>
                <button type="button" className="rounded-lg bg-[#141B34] px-3 py-1.5 text-xs text-white">
                  Resume subscription
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Card uses dashed border and muted tone. orderCycle and orderPrice
              still shown for transparency. Primary CTA changes to "Resume."
            </p>
          </StateCard>

          {/* ---- 5. Cancelled subscription ---- */}
          <StateCard
            n={5}
            title="Cancelled subscription"
            borderColor="border-red-300"
            bgColor="bg-red-50/30"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-4 opacity-80">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-neutral-500 line-through">
                    Semaglutide (Tier 1)
                  </p>
                  <p className="text-xs text-neutral-400">Weight Loss</p>
                </div>
                <StatusBadge label="Cancelled" color="red" />
              </div>
              <p className="mt-3 text-sm text-neutral-500">
                Cancelled on Feb 20, 2026. No further charges.
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Last charge: $897.00 on Jan 5, 2026
              </p>
              <div className="mt-3 flex gap-2">
                <button type="button" className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs">
                  View history
                </button>
                <button type="button" className="rounded-lg bg-[#E8623A] px-3 py-1.5 text-xs text-white">
                  Restart subscription
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Appears in subscription history, clearly marked. No next charge
              date. CTA offers restart option.
            </p>
          </StateCard>

          {/* ---- 6. Reassessment needed ---- */}
          <StateCard
            n={6}
            title="Pending reassessment (prescription expiring)"
            borderColor="border-amber-400"
            bgColor="bg-amber-50/50"
          >
            <div className="rounded-xl border border-amber-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">NAD+ Nasal Spray</p>
                  <p className="text-xs text-neutral-500">Longevity</p>
                </div>
                <StatusBadge label="Reassessment needed" color="amber" />
              </div>
              <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
                <p className="font-medium text-amber-900">
                  Prescription expires in 4 weeks
                </p>
                <p className="mt-1 text-xs text-amber-800">
                  Your prescription is valid through Mar 15, 2026 (52 weeks from
                  start). Complete a reassessment to continue your subscription
                  without interruption.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span>Every 8 weeks</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-sm font-bold">
                $478.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="mt-2 text-sm">
                Next charge:{" "}
                <span className="font-medium text-amber-800">
                  pending reassessment
                </span>
              </p>
              <div className="mt-3 flex gap-2">
                <button type="button" className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs">
                  View details
                </button>
                <button type="button" className="rounded-lg bg-[#E8623A] px-4 py-2 text-sm font-medium text-white">
                  Start reassessment
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Approaching 52-week prescription window. Price shows as "pending
              reassessment" until new <EngTag>orderPrice</EngTag> confirmed.
              Links to correct intake questionnaire per SKU
              (intake-questionnaires/).
            </p>
          </StateCard>

          {/* ---- 7. Payment failed ---- */}
          <StateCard
            n={7}
            title="Payment method failed / retry"
            borderColor="border-red-400"
            bgColor="bg-red-50/50"
          >
            <div className="rounded-xl border border-red-200 bg-white p-4">
              <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm">
                <p className="font-semibold text-red-900">
                  Payment failed
                </p>
                <p className="mt-1 text-xs text-red-800">
                  Your renewal charge of $478.00 could not be processed. Please
                  update your payment method to avoid interruption.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">NAD+ Nasal Spray</p>
                  <p className="text-xs text-neutral-500">Longevity</p>
                </div>
                <StatusBadge label="Payment failed" color="red" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span>Every 8 weeks</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-sm font-bold">
                $478.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Next retry: Mar 12, 2026
              </p>
              <div className="mt-3">
                <button type="button" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white">
                  Update payment method
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Alert state with urgent CTA. Shows retry date, amount, and
              cadence so patient knows what to expect.
            </p>
          </StateCard>

          {/* ---- 8. Composite orderCycle (MOTS-C) ---- */}
          <StateCard
            n={8}
            title="Composite orderCycle (e.g. MOTS-C)"
            borderColor="border-sky-400"
            bgColor="bg-sky-50/50"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">MOTS-C Injection</p>
                  <p className="text-xs text-neutral-500">Longevity</p>
                </div>
                <StatusBadge label="Active" color="green" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium">Every 10 weeks</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                8 week supply, 2 week break
              </p>
              <p className="mt-2 text-base font-bold">
                $548.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="text-xs text-neutral-500">$7.83/day</p>
              <div className="mt-3 rounded-lg bg-sky-50 p-3 text-sm">
                <p>
                  Next charge:{" "}
                  <span className="font-semibold">$548.00</span> on Apr 20, 2026
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  displayInterval() returns description field for composite
                  cycles.
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Uses description from data/product-pricing.md (mots_c_injection
              row). Do not collapse to misleading "monthly." Per-product copy in
              intake-questionnaires/MOTS-c_Injection.md.
            </p>
          </StateCard>

          {/* ---- 9. Weight Loss tiers ---- */}
          <StateCard
            n={9}
            title="Weight Loss product with tier display"
            borderColor="border-violet-300"
            bgColor="bg-violet-50/30"
          >
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">Semaglutide (Tier 1)</p>
                  <p className="text-xs text-neutral-500">Weight Loss</p>
                </div>
                <StatusBadge label="Active" color="green" />
              </div>
              <div className="mt-3 rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm">
                <p className="font-medium text-violet-900">
                  Current tier: Tier 1
                </p>
                <p className="mt-1 text-xs text-violet-700">
                  Tier changes follow defined upgrade/downgrade rules. Your
                  provider manages tier adjustments based on treatment progress.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span>Every 12 weeks</span>
                <EngTag>orderCycle</EngTag>
              </div>
              <p className="mt-1 text-base font-bold">
                $897.00 <EngTag>orderPrice</EngTag>
              </p>
              <p className="text-xs text-neutral-500">$10.68/day</p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Tier shown for Weight Loss products (Tier 1-4). Upgrade/downgrade
              rules per data/upgrade-downgrade-matrix.md. Portal does not let
              patients self-serve tier changes.
            </p>
          </StateCard>

          {/* ---- 10. Non-subscription product ---- */}
          <StateCard
            n={10}
            title="Non-subscription product"
            borderColor="border-neutral-300"
            bgColor="bg-neutral-50/50"
          >
            <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-neutral-700">
                    GLP-1 Support+ (example)
                  </p>
                  <p className="text-xs text-neutral-500">
                    Supplement (monthly, not prescription)
                  </p>
                </div>
                <span className="rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                  One-time / monthly
                </span>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                $49.99/month · Not a prescription subscription
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Non-prescription supplements use standard e-commerce monthly
                billing. No orderCycle / prescriptionCycle applies. Visually
                distinct from prescription subscription cards.
              </p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Dashed border and muted styling differentiate from prescription
              subscriptions. No prescription validity or reassessment link.
            </p>
          </StateCard>
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          EllieMD · Patient Portal wireframes · Edge states
        </footer>
      </main>
    </WireframeChrome>
  );
}
