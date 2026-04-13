# Figma export audit (boss share): terminology + pricing + cadence discrepancies

This audit summarizes the **current Patient Portal v2 exported screens** in `ellie-patient-portal-v0-handoff/screenshots/figma/` and highlights where portal language drifts from the intended subscription story (cycle price + cadence + next charge).

## Criteria used (per your checklist)

Focus sections and screens that mention:
- Upcoming renewals or next charge dates
- Order history / past orders
- Order detail (individual order view)
- Subscription settings (cancel, modify, pause)
- Any billing or payment info
- Account dashboard / overview

For each screen, note:
- What terminology is used today (monthly, per month, plan, subscription, etc.)
- What pricing info is shown (retailPrice? orderPrice? per-day? nothing?)
- What cadence info is shown (Every 8 weeks? Monthly? Nothing?)
- What is missing that should be there (next charge? cycle info?)
- Legacy language flags (monthSupply, per month, retailPrice)

## Screen-by-screen findings (from exported PNGs)

### 1) Account dashboard / overview: Home (Subscriptions + Non-Subscriptions)

**Files**
- `screenshots/figma/HOME D_ Sub1 Hover.png`
- (Same content/hover chrome in: `HOME D_ Orders Hover.png`, `HOME D_ Messages Hover.png`, `HOME D_ Wallet Hover.png`, `HOME D_ Support Hover.png`, `HOME D_ Profile Hover.png`)

**What terminology is used today**
- Uses **“Subscriptions”** and **“Non-Subscriptions”** (good base taxonomy).
- Uses **“Next Shipment”** on a subscription card (GLP-1 Protein Powder).
- Uses **“Reassessment Due”** on a subscription card (Semaglutide Tier 1 Injection).

**What pricing info is shown**
- **No price shown** on the subscription cards (no per-cycle price, no per-day).

**What cadence info is shown**
- **No cadence shown** (no “Every N weeks”, no cycle interval).

**What’s missing that should be there**
- For each active subscription: **cycle price** (orderPrice), **billing cadence** (orderCycle as “Every N weeks”), and **next charge** (amount + date).
- Separation of **billing** vs **fulfillment**: if shipment is shown, it should not replace billing expectation.

**Legacy language flags**
- No “per month” visible in this export, but **“Next Shipment” used in the subscription section** is a drift risk because it reads like the next billing event.

---

### 2) Order history / past orders: Orders list (table)

**File**
- `screenshots/figma/ORDERS D_ MOTHER.png`

**What terminology is used today**
- Table columns: **Order Number**, **Date Ordered**, **Payment Method**, **Total Price**, **Status**, **Invoice**.
- “Download PDF” used for invoices.

**What pricing info is shown**
- **Total Price** is shown per order row (e.g. **$897.00**, **$498.36**).
- No indication whether amounts are **subscription renewal charges** vs **one-time orders**, and no per-cycle framing.

**What cadence info is shown**
- **None** in the list view.

**What’s missing that should be there**
- If this list includes subscription renewals, the UI needs a cue for **cycle** and **next charge** context or a link target that clearly explains billing cadence (avoid making “Total Price” the only pricing story).
- If the list is meant to be “orders only” (including renewals), users still need a clear path back to subscription details and the next charge expectation.

**Legacy language flags**
- No “per month” visible in this export.

---

### 3) Order detail (individual order view): Orders list row expanded

**File**
- `screenshots/figma/ORDERS D_ MOTHER Expanded.png`

**What terminology is used today**
- Expanded section uses **“Subscription:”** followed by an interval string (e.g. “Every 2 months”, “Every 2 weeks”).
- Uses **“Status: Shipped”** and **“Track My Package”** within the expanded content.
- Uses **“Order Summary”** and **“TOTAL PRICE”**.

**What pricing info is shown**
- Per-line amounts shown (e.g. **$350.00**, **$99.99**).
- Order Summary shows subtotal, shipping, doctor fee, estimated tax, and total (e.g. **$498.36**).
- Still no explicit “per cycle” or “next charge” story for a subscription renewal.

**What cadence info is shown**
- Cadence appears as **“Subscription: Every 2 months / Every 2 weeks”**.
- That interval is **not tied to a billing story** (no next charge date, no next renewal amount).

**What’s missing that should be there**
- If the expanded row is meant to stand in for “order detail for a subscription renewal”, it should clarify **billing cadence** and the **next charge** (amount + date) separately from shipment tracking.
- Interval strings (“Every 2 months”) should be consistent with the organization’s cycle framing (typically “Every N weeks” for cycle-based SKUs).

**Legacy language flags**
- No explicit “per month” visible, but cadence is expressed in **months** here (“Every 2 months”), which can be confusing when the intended model is week-based cycles for many SKUs.

---

### 4) Order detail (individual order view): Non-subscription order detail (contains billing + plan language)

**File**
- `screenshots/figma/HOME D_ NonSub1 Overview.png`

**What terminology is used today**
- “Order: #1234567”
- “Prescription Refills”
- “Billing Information”
- **“CURRENT PAYMENT PLAN”** with **“1st Payment / 2nd Payment”**
- CTA: “Update Payment Method”

**What pricing info is shown**
- Displays an order amount (“$350” near the top card).
- Payment plan shows split payments (e.g. **$175** + **$175**) with payment dates.

**What cadence info is shown**
- **No subscription cadence** shown (this appears to be an order detail view, not an active-subscription renewal list).

**What’s missing that should be there**
- If this “payment plan” pattern is for true financing, it must be **explicitly distinguished** from subscription renewals so users do not interpret “payment plan” as the normal subscription billing model.
- If this is not financing, then “payment plan” language and 1st/2nd payment numbering is misleading and should be replaced with a renewal/billing model consistent with subscriptions.

**Legacy language flags**
- Strong drift risk: **“CURRENT PAYMENT PLAN”** + installments numbering reads like BNPL/financing, not subscription renewal.

---

## What’s in scope but not fully represented in these PNG exports

The 13 PNGs in `screenshots/figma/` do **not** include dedicated screens for:
- Subscription settings (cancel, modify, pause)
- A full subscription list / upcoming renewals view with cycle price + next charge
- A dedicated “manage subscription” view with renewal schedule

Those exist in the broader “Patient Portal v2” frame set and are captured in the separate audit markdown:
- `ellie-patient-portal-v0-handoff/PATIENT_PORTAL_V2_FIGMA_AUDIT_FOR_V0.md`

### Legacy language explicitly flagged in the broader audit
From `PATIENT_PORTAL_V2_FIGMA_AUDIT_FOR_V0.md` (PDF text extraction coverage):
- **“Per Month”** shown as a billing hero in some order detail variants
- **“Per Month / Full Price”** dual pricing column (e.g. $299 vs $897) that needs reframing to per-cycle orderPrice + cadence
- **“Current Payment Plan”** + “1st/2nd/3rd Payment” installment-style language that reads as financing
- **“Next Shipment”** used where billing expectation should be “Next charge / Next renewal”
- Field-name leakage risk: **monthSupply** should not appear in patient-facing UI

## Summary: the gap we must close

Across the exports that touch subscription context, the portal currently tends to show:
- product name + date ordered, and sometimes shipment or reassessment

…but it often omits the information users come to the portal for:
- **when they will be charged next**
- **how much the charge will be**
- **how often billing occurs (cycle cadence)**

That is exactly why Step 3 focuses on a subscription list that surfaces **orderCycle**, **orderPrice**, **per-day secondary**, and **next charge date**, with clear status and quick actions.

