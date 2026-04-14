import type { ReactNode } from "react";
import { EngTag } from "@/components/EngTag";
import { WireframeChrome } from "@/components/WireframeChrome";

function Panel({
  n,
  title,
  borderClass,
  bgClass,
  children,
}: {
  n: number;
  title: string;
  borderClass: string;
  bgClass: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`rounded-2xl border-2 ${borderClass} ${bgClass} p-5 shadow-sm`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#141B34] text-sm font-bold text-white">
          {n}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold text-[#141B34]">{title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EdgeStatesPage() {
  return (
    <WireframeChrome>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
          Patient Portal · Edge cases
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Edge states
        </h1>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Each panel is a standalone state drawn from the{" "}
          <strong>Patient Portal v2 Figma frames</strong>,{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">
            data/product-pricing.md
          </code>
          , and{" "}
          <code className="rounded bg-neutral-200 px-1 text-xs">
            intake-questionnaires/
          </code>{" "}
          where relevant, plus engineering proposals. Use for
          empty/error/reassessment copy review, not happy-path only.
        </p>

        <p className="mt-8 font-mono text-xs uppercase text-neutral-500">
          STEP 5 · Edge states (11 panels)
        </p>

        <div className="mt-6 space-y-6">
          <Panel
            n={1}
            title="Pending reassessment: price TBD"
            borderClass="border-amber-400"
            bgClass="bg-amber-50/50"
          >
            <p>
              Patient Portal v2 Figma frames (Frame F):{" "}
              <strong>Price pending reassessment results</strong> on scheduled
              rows. Proposed: show scheduled date, status badge, and explainer;
              hide misleading dollar amount until <EngTag>orderPrice</EngTag>{" "}
              confirmed.
            </p>
          </Panel>

          <Panel
            n={2}
            title="Paused subscription"
            borderClass="border-neutral-400"
            bgClass="bg-neutral-50/80"
          >
            <p>
              No charges while paused. Still show <EngTag>orderCycle</EngTag>{" "}
              and last known <EngTag>orderPrice</EngTag> for transparency;{" "}
              <strong>Next charge: none</strong> until resumed. Primary CTA:{" "}
              <strong>Resume subscription</strong>.
            </p>
          </Panel>

          <Panel
            n={3}
            title="Payment method failed / retry"
            borderClass="border-red-400"
            bgClass="bg-red-50/50"
          >
            <p>
              Banner: renewal could not be processed. Show next retry date,
              amount <EngTag>orderPrice</EngTag>, and cadence{" "}
              <EngTag>orderCycle</EngTag>. CTA:{" "}
              <strong>Update payment method</strong> (Patient Portal v2 Figma
              frames; billing block).
            </p>
          </Panel>

          <Panel
            n={4}
            title="Composite orderCycle (e.g. MOTS-C)"
            borderClass="border-sky-400"
            bgClass="bg-sky-50/50"
          >
            <p>
              <code className="rounded bg-neutral-200 px-1 text-xs">
                data/product-pricing.md
              </code>{" "}
              (<strong>mots_c_injection</strong> /{" "}
              <strong>tesa_kpv_injection</strong>
              ): 10-week{" "}
              <code className="rounded bg-white px-1 text-xs">
                orderCycle
              </code>{" "}
              with <strong>description</strong> (“8 week supply, 2 week break”).
              Product copy may also appear in{" "}
              <code className="rounded bg-neutral-200 px-1 text-xs">
                intake-questionnaires/MOTS-c_Injection.md
              </code>{" "}
              and{" "}
              <code className="rounded bg-neutral-200 px-1 text-xs">
                intake-questionnaires/TesamorelinKPV_Injection.md
              </code>
              . Do not collapse to misleading calendar-month shorthand.
            </p>
          </Panel>

          <Panel
            n={5}
            title="Next shipment used for billing (anti-pattern)"
            borderClass="border-red-500"
            bgClass="bg-red-50/70"
          >
            <p>
              Patient Portal v2 Figma frames (Frame B, Frame J): subscription
              cards show <strong>Next shipment</strong> without{" "}
              <strong>next charge</strong>. Proposed: always pair billing line;
              shipment only under fulfillment. Annotate in QA when legacy copy
              appears.
            </p>
          </Panel>

          <Panel
            n={6}
            title="True multi-pay financing (if product-approved)"
            borderClass="border-violet-400"
            bgClass="bg-violet-50/50"
          >
            <p>
              If a SKU is genuinely financed, label{" "}
              <strong>Financing schedule</strong> explicitly; do not reuse
              standard subscription renewal component without distinction
              (Patient Portal v2 Figma frames Frame E; compare tier rules in{" "}
              <code className="rounded bg-neutral-200 px-1 text-xs">
                data/upgrade-downgrade-matrix.md
              </code>
              ).
            </p>
          </Panel>

          <Panel
            n={7}
            title="No active subscriptions (empty list)"
            borderClass="border-neutral-400"
            bgClass="bg-white"
          >
            <p>
              Patient has cancelled all subs or is new with no purchases. Show
              friendly empty state: explain there are no active renewals, link
              to shop or account help, avoid a blank canvas. Next charge and
              cycle copy hidden (nothing to bill).
            </p>
          </Panel>

          <Panel
            n={8}
            title="Pending provider approval / no charge yet"
            borderClass="border-amber-400"
            bgClass="bg-amber-50/40"
          >
            <p>
              Order placed but first charge not run (Patient Portal v2 Figma
              frames: “Pending Provider Approval”). Show status badge, expected
              first billing date when known, and that{" "}
              <EngTag>orderPrice</EngTag> / <EngTag>orderCycle</EngTag> will
              apply once active. Order history may be empty; do not imply a
              renewal happened.
            </p>
          </Panel>

          <Panel
            n={9}
            title="Cancelled subscription (historical)"
            borderClass="border-neutral-500"
            bgClass="bg-neutral-100/80"
          >
            <p>
              Subscription ended: show final cycle context, last charge date,
              and clear <strong>No upcoming charges</strong>. Keep read-only
              history; primary actions shift to re-enroll or support. Tier and
              product name stay accurate for records.
            </p>
          </Panel>

          <Panel
            n={10}
            title="Weight loss tier in portal"
            borderClass="border-emerald-500"
            bgClass="bg-emerald-50/40"
          >
            <p>
              Surface current tier (e.g. Tier 1–4) next to product name;
              upgrades / downgrades follow{" "}
              <code className="rounded bg-neutral-200 px-1 text-xs">
                data/upgrade-downgrade-matrix.md
              </code>
              . Portal must not promise a tier change until rules pass. Pair
              tier label with <EngTag>orderPrice</EngTag> for that tier.
            </p>
          </Panel>

          <Panel
            n={11}
            title="Non-subscription catalog item (e.g. recurring supplement SKU)"
            borderClass="border-sky-400"
            bgClass="bg-sky-50/40"
          >
            <p>
              SKUs that are not prescription subscriptions (example: a recurring
              supplement billed outside the prescription subscription pattern)
              should not reuse subscription renewal components. Use a distinct
              card pattern: one-time or different billing label, no false
              <EngTag>orderCycle</EngTag> language unless truly on a
              subscription backend. Call out in QA when PDP and portal disagree.
            </p>
          </Panel>
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          EllieMD · Patient Portal wireframes · Edge states
        </footer>
      </main>
    </WireframeChrome>
  );
}
