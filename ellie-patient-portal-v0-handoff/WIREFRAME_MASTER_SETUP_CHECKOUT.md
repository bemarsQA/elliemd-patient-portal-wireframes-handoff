# Master wireframe setup — Checkout (Subscription cadence & cycle price)

**Use this** as the visual and structural contract for v0 (and Figma). It matches the **April 2026 checkout wireframe set** (Cart, Plan Review, Payment, Overview index, Sources).

**Align with:** `ELLIEMD_DESIGN_CONTEXT_FOR_V0.md` + `EllieMDContext-UploadZIPtoClaude/CONTEXT.md` for locked terminology and `data/product-pricing.md` for numbers.

**Authoritative pricing display:** **`orderPrice` (full per-cycle charge) prominent** + **`orderCycle`** as “Every N weeks” + **per-day secondary**. Do **not** lead with monthly/`retailPrice` as the hero line if it contradicts per-cycle locks (see CONTEXT). If a “Sources” slide ever says the opposite, **CONTEXT + these checkout mocks win** for customer-facing checkout.

---

## 1. Global shell (every step page)

- **Top nav / progress:** `Overview` → `Cart` → `Plan Review` → `Payment` → `Sources` (active state on current step).
- **Brand:** EllieMD logo; navy/orange/charcoal per existing doc standard.
- **Toggles (where useful):**  
  - **Product / cadence variant:** e.g. `8-Week (NAD+)` vs `12-Week (Semaglutide)` — same layout, different copy/numbers from `product-pricing.md`.  
  - **Desktop / Mobile** — same content, adjusted layout.
- **Step header:** `STEP N:` + short **purpose line** (what this step proves for stakeholders).

---

## 2. Comparison pattern (required on Cart, Plan Review, Payment)

- **Two columns:** **CURRENT** (left, red/warning framing) vs **PROPOSED** (right, green/success framing).
- **Same viewport width** for both columns so differences read at a glance.
- **Numbered callouts** on both sides where a specific UI element changes.
- **Below columns:** **Annotation legend table** — columns at minimum:  
  `# | Element | What changed | Why it matters | Validation / source`
- **Acceptance criteria** list at bottom of step (checkbox style) — tied to that step only.

---

## 3. Data & terminology on mocks (must be consistent)

| Concept | UI behavior |
|--------|-------------|
| **orderPrice** | Full amount per billing event (e.g. `$478.00`). Tag/badge in wireframe where educating eng/stakeholders. |
| **orderCycle** | Human interval aligned with PDP, e.g. `Every 8 weeks`. Tag/badge `orderCycle`. |
| **Per-day** | Secondary line under hero price (e.g. `$8.54/day`) — must match PDP math. |
| **Subscription** | Use “subscription” language; avoid “plan” / “membership” unless explicitly approved elsewhere. |
| **Next charge / next renewal** | Use for **billing**; avoid “next shipment” when meaning charge date (shipment ≠ charge). |
| **prescription duration** | Call out in **Plan Review** where relevant (e.g. 52-week validity + reassessment note) — **separate** from order cycle. |

---

## 4. Step-specific content blocks

### Cart (Step 1)

- **Proposed** line item: product name + optional category tag; **`orderPrice`** prominent; **`orderCycle`**; per-day secondary.
- **Value breakdown** (optional but shown in master): med supply window, consultation $0, shipping free — reframes total.
- **Subscription disclosure** in-cart: auto-renew language with **exact $ + exact interval**.
- **Order summary:** Due today = **`orderPrice`**; **Next charge** line with amount + interval from `orderCycle`.
- **CTA:** **`Subscribe Now`** (not “Next Steps”); optional **price in button** (e.g. `Subscribe Now — $478.00`).
- **Current** column: shows the failure mode (e.g. monthly-only framing, missing cycle, weak CTA) with red callouts.

### Plan Review (Step 2)

- **Proposed:** single **subscription summary card** — product, **Billed** (`orderCycle`), **Per cycle** (`orderPrice`), per-day secondary.
- **Renewal terms** block: auto-renew, charge amount per renewal, cancel/modify via portal; **prescription validity** (e.g. 52 weeks + reassessment) **distinct** from billing cadence.
- **Agreements preview** before payment: links to ToS, Telehealth, Privacy, Subscription Agreement (copy consolidated, not scattered).
- **Next charge** line: explicit amount + timing (from `orderCycle`).
- **CTA:** `Continue to Payment` (or equivalent locked progression).
- **Current** column: missing summary / renewal terms / agreements preview — red callouts.

### Payment (Step 3)

- **Order summary** at top: product, cycle, **Due today**, **Next charge** — must **match Cart + Plan Review** (`orderPrice` / `orderCycle`).
- **Payment method:** card HSA/FSA, wallets (Apple Pay / G Pay) if in scope; security note (encryption) if shown in master.
- **Subscription disclosure + consent:** single checkbox covering consolidated legal items; disclosure text includes **exact price + interval**; **CTA disabled until checked**.
- **CTA:** `Subscribe Now — $orderPrice` (price in button); disabled state visible in spec.
- **Current** column: weaker disclosure / consent / CTA behavior.

---

## 5. Overview index page (project hub)

- Title: **Checkout: Subscription cadence & cycle price** (or project name).
- **Problem / solution** (or Today vs Proposed summary cards).
- **Definitions:** `orderPrice`, `orderCycle`, retail vs per-cycle, per-day, subscription, next charge.
- **Two cadence examples** in copy (e.g. NAD+ 8-week vs Semaglutide 12-week) with real numbers from pricing table.
- **Journey:** Cart → Plan Review → Payment.
- **Sourced (locked)** vs **Proposals (pending)** — separate visually so stakeholders know what is approved vs in review.
- **Scope IN / OUT** (e.g. IN: three steps + terminology; OUT: BNPL deep dive, multi-cart processor details) — adjust per product direction.

---

## 6. Sources page

- Traceability: decision cards, PDP ↔ Checkout terminology table, disclosure ownership matrix, coupon/trial/tier notes, edge cases, data-contract snippets.
- **Every claim** that is “locked” should be visually distinct from “proposal.”

---

## 7. Updates vs earlier wireframe passes (this master set)

- **Plan Review** is a full **subscription summary + renewal + agreements preview** step (not only a thin summary).
- **Prescription duration** (e.g. 52 weeks) explicitly called out **next to** billing cadence, not conflated with `orderCycle`.
- **Price in CTA** + **disabled until consent** on Payment.
- **Single consolidated consent** aligned with DES-53 direction.
- **Value breakdown** on Cart optional but part of the approved visual story.
- **Product/cadence toggles** to show **two real examples** without duplicating entire pages.
- **Sources** page as dedicated **traceability** surface (terminology matrix + ownership).

---

## 8. v0 prompt one-liner (attach this file + screenshots)

> “Implement using `WIREFRAME_MASTER_SETUP_CHECKOUT.md` as the layout contract; use `ELLIEMD_DESIGN_CONTEXT_FOR_V0.md` + `data/product-pricing.md` for terminology and numbers; match the attached reference screenshots pixel-logic (shell, CURRENT vs PROPOSED, callouts, acceptance criteria).”

---

*Derived from checkout wireframe exports dated April 12, 2026. Update this doc if the master screenshots change.*
