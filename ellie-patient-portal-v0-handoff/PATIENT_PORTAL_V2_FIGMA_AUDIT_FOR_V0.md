# Patient Portal v2 (Figma export PDF) — Audit for v0

**Source:** `Patient Portal v2.pdf` (extracted text; ~170 pages, many duplicate/layout variants).  
**Purpose:** Flag current terminology, pricing, and cadence vs EllieMD locked context (`CONTEXT.md`, `ELLIEMD_DESIGN_CONTEXT_FOR_V0.md`).  
**Audience:** v0 / design — use this as the change list when rebuilding portal wireframes.

---

## Executive summary

| Theme | Finding |
|--------|---------|
| **Cadence** | Almost no **`orderCycle`** / “Every N weeks” language in sampled frames. Billing rhythm is **not** aligned with PDP/checkout. |
| **Pricing** | Mix of **$897** (matches Tier 1 `orderPrice`), **$299** with **“Per Month”**, **installment-style payment plans**, and **“Total Price”** — **legacy / ambiguous** vs **orderPrice + per cycle**. |
| **Renewals** | **“Next Shipment”** appears for subscriptions (e.g. protein powder) — conflicts with locked **next charge / next renewal** for billing expectations. |
| **Plans** | **“Current Payment Plan”**, **1st/2nd/3rd Payment** — reads like **financing installments**, not **per-cycle subscription** language. |
| **Subscriptions** | **“Subscription(s)”**, **“Manage Subscription”**, **“Cancel Subscription”** — generally good; some **“payment plan”** wording dilutes **subscription** model. |

---

## Coverage map (requested attributes)

| Attribute | Present in PDF? | Where (examples) |
|-----------|-----------------|------------------|
| **Subscription list / active** | Yes | Home “Subscriptions” section; “ACTIVE SUBSCRIPTION”; product cards (Semaglutide Tier 1, GLP-1 Protein Powder). |
| **Upcoming renewals / next charge** | Partial | **“Pending Payments”** + **Scheduled Payment Date**; cancel flow **“Next Payment Date”**. **Not** consistently labeled **next renewal / next charge**. **“Next Shipment”** used in places — **wrong frame** for billing. |
| **Order history** | Yes | **Orders** list; **Previous Orders** table (product, date, order #, status); **Load more**. |
| **Order detail (single order)** | Yes | Order # header, line items, **Total Price**, delivery, **Track My Package**, timeline (Intake → Shipped). Some variants: **Per Month / Full Price** row. |
| **Subscription settings (cancel / modify)** | Partial | **Cancel Subscription** flow (reasons, alternatives, confirmation). **Modify / pause** not clearly surfaced in sampled text (only **Edit** on address/payment). |
| **Billing / payment** | Yes | **Billing Information**, card **ending in \*\*\***, billing address, **Payment Method** **Edit**, **Pending** / **Past Payments**, **Download Invoice**. **Update Payment Method** on some order views. |
| **Account dashboard / overview** | Yes | **Welcome** home, **treatment journey**, reassessment banner, **Subscriptions** vs **Non-Subscriptions**, nav (Home, Orders, Messages, Wallet, Support). |

---

## Screen-by-screen notes (grouped by flow)

### A. Spec / IA fragment (early PDF — “MY ORDERS” blueprint)

**Observed fields:** Order ID, Order Date, **Subscription (Active vs Inactive)**, Payment #, **Payment Due Date**, Paid Date, Payment Method, Status, Complete purchase?

**Terminology:** “Subscription” ✓ (as a column concept).  
**Pricing:** Payment-oriented; **no** `orderPrice` / **per cycle** labels.  
**Cadence:** **None** in this fragment.  
**Gaps vs target:** Add **orderCycle** (or `displayInterval()` output), **orderPrice** per renewal, **next charge** (not only “payment due” / shipment).  
**Legacy risk:** “Payment #” may imply installment numbering — clarify vs **renewal number** or drop if misleading.

---

### B. Home / dashboard (“Welcome”, treatment journey)

**Terminology:** **Subscriptions** / **Non-Subscriptions** ✓. **“Next Shipment”** for subscription line items (e.g. GLP-1 Protein Powder) — **flag** (should be **next charge** or **next renewal** for billing; keep shipment separately if needed).  
**Pricing:** Often **only** “Date Ordered” + provider; **no** per-cycle price on cards for Semaglutide in some variants.  
**Cadence:** **Missing** (“Every 12 weeks” etc.).  
**Gaps:** Each active subscription card should show: **orderPrice**, **orderCycle** (human string), **next charge date** (and optionally estimated ship as secondary).

---

### C. Active subscription — high-level (Semaglutide)

**Terminology:** **Active Subscription**, **Manage Subscription** ✓.  
**Pricing:** **$897** shown (aligns with Semaglutide Tier 1 **orderPrice** in catalog). **No** label that it is **per 12-week cycle**; **no** per-day secondary.  
**Cadence:** **Not shown**.  
**Billing:** **Pending Payments** with dates (e.g. 04/25, 05/25, 06/25) — reads **monthly schedule**, not **orderCycle**.  
**Gaps:** Replace ambiguous schedule with **next charge** + **amount** + **cycle** copy tied to `orderCycle`.  
**Legacy:** If **$299** appears as parallel line elsewhere in flow, **“Per Month”** — **must change** to **per-cycle + orderPrice** hierarchy per locks.

---

### D. Order detail — Semaglutide (with **Per Month / Full Price**)

**Terminology:** **“Per Month”** + **“Full Price”** as two price columns — **legacy** (conflicts with **per cycle** + **orderPrice** prominence).  
**Pricing:** **$299** vs **$897** — maps to **retail/month framing vs full cycle**; should be reframed to **orderPrice** + optional secondary (e.g. per-day), not “per month” as hero.  
**Cadence:** **Missing** on this screen.  
**Gaps:** Add **Every N weeks** from `orderCycle`; remove or demote **“Per Month”** as primary customer-facing billing term.

---

### E. Manage subscription — **“CURRENT PAYMENT PLAN”**

**Terminology:** **“Payment Plan”** — **risk**: sounds like **financing**, not **subscription renewal schedule**. Prefer **subscription billing** / **renewal schedule** aligned with checkout copy.  
**Pricing:** **$299** × **1st / 2nd / 3rd Payment** — **installment-style**; **not** the same as **single orderPrice per orderCycle** for standard subscription.  
**Cadence:** **Implicit monthly** (1/25, 2/25, 3/25) — **not** “Every 12 weeks.”  
**Gaps:** For standard subs: show **orderPrice** per renewal and **displayInterval()** string; if this UI is **only** for true multi-pay plans, **label explicitly** and separate from default subscription UX.  
**Legacy flag:** **Strong** — this whole block likely needs redesign to match **locked pricing terminology**.

---

### F. Manage subscription — billing block

**Terminology:** **Billing Information**, **Delivery Address**, **Payment Method**, **Billing Address** ✓.  
**Pricing:** **Pending Payments** + **Price pending reassessment results** (state handling) ✓ as pattern.  
**Cadence:** **Missing** next to scheduled charges.  
**Gaps:** Each scheduled row: **amount = orderPrice** (when known), **date = next charge**, **cadence** repeated or linked.

---

### G. Order detail — NAD+ (and similar)

**Terminology:** **Billing Information**, **Date Charged**, **Delivery Date** — **“Date Charged”** is closer to truth than shipment-only.  
**Pricing:** **$350** line; **Current Payment Plan** with **$175** × 2 — **split payment** presentation; **not** labeled **orderPrice** / cycle.  
**Cadence:** **Missing** for subscription renewal context.  
**Gaps:** Align **NAD+** **orderCycle** (e.g. 8 weeks) and **orderPrice** from `product-pricing.md` in portal copy.

---

### H. Orders list (history)

**Terminology:** **Orders**, **Order Summary**, **Total Price**, **View Product Detail** / **View Subscription** (inconsistent CTA naming).  
**Pricing:** **Total Price** + line **$897** / **$350** / **$79.99** — amounts without **per-cycle** context.  
**Cadence:** **None** in list rows.  
**Gaps:** For subscription rows: show **cycle** + **next charge** snippet or tooltip; unify **View Subscription** vs **View Product Detail**.

---

### I. Cancel subscription

**Terminology:** **“subscription”** in cancel copy ✓. **“Next Payment Date”** ✓ (billing-oriented).  
**Pricing:** Not always repeated on first step — OK if clear on prior screen.  
**Cadence:** **Missing** on cancel confirm (could show “You are billed every …”).  
**Gaps:** Optional one-line **orderCycle** + **orderPrice** so user knows what they are canceling.

---

### J. GLP-1 Protein Powder (subscription variant)

**Terminology:** **Manage Subscription**, **Previous Orders** ✓.  
**Pricing:** **$79.99** — may be **monthly** SKU in catalog; still need **orderCycle** / **orderPrice** from data (not assumed).  
**Cadence:** **Missing** in sampled frames.  
**Legacy:** Any **“Next Shipment”** without **next charge** — **flag**.

---

## Global legacy flags (search/replace targets for v0)

| Pattern in PDF | Issue | Target language (locked context) |
|----------------|-------|-----------------------------------|
| **Per Month** (as billing hero) | Implies monthly billing vs true **orderCycle** | **Per cycle** + **orderPrice** primary |
| **$299** next to “Per Month” vs **$897** “Full Price” | **retail/month** vs **full cycle** without approved framing | **orderPrice** + **displayInterval()**; secondary per-day only |
| **Current Payment Plan** + **1st/2nd/3rd Payment** | Reads like **installments** | **Renewal schedule** / **billing schedule** tied to **orderCycle**, or separate **financing** flow only if real |
| **Next Shipment** (for subscription card) | Conflates **billing** and **fulfillment** | **Next charge** / **Next renewal** + optional **Estimated ship** |
| **Total Price** only | Ambiguous vs **per-cycle** | **Total** OK for **order**; for **active sub** use **orderPrice** + cycle |
| **monthSupply** (if appears in UI) | Engineering field name in patient UI | Remove from patient-facing copy |
| **“Plan”** (payment plan) | Near **“subscription”** | Prefer **subscription** / **billing schedule** unless product approves “plan” |

---

## What v0 should add (minimum viable alignment)

1. **Every subscription surface:** **`orderPrice`** (labeled as amount **per cycle** or paired with **Every N weeks**).  
2. **`orderCycle`:** Human string from **`displayInterval()`** (or equivalent), including **description** for composite cycles (e.g. 8 on / 2 off).  
3. **Next charge / next renewal** date + amount — **not** only “pending payment” without cycle context.  
4. **Per-day** — secondary line under **orderPrice**, PDP-consistent.  
5. **Remove or demote** **Per Month** as the **primary** billing label unless catalog truly bills monthly **and** copy is approved.  
6. **Differentiate** true **multi-payment financing** UI from **standard subscription renewal** — don’t use one component for both without labels.

---

## Limitations of this audit

- Based on **PDF text extraction**, not live Figma inspect (colors/components may differ).  
- **170 pages** include many **duplicates**; edge screens may exist that weren’t sampled.  
- **Re-read PDF** or Figma for any frame not represented here before final sign-off.

---

## Reference docs (repo)

- `ellie-patient-portal-v0-handoff/ELLIEMD_DESIGN_CONTEXT_FOR_V0.md`  
- `ellie-patient-portal-v0-handoff/docs/EllieMDContext-UploadZIPtoClaude/CONTEXT.md`  
- `.../data/product-pricing.md` — authoritative **orderPrice** / **orderCycle** per SKU  

---

*Generated from PDF text parse. Update after Figma v3 if frames change.*
