# Paste into v0 (new project)

## What you are building

Create a **new documentation + wireframe site** that matches the **same format** as:

**Template (clone this site model — layout, rhythm, sections, nav to wireframes):**  
https://v0-checkout-subscription-cadence-an.vercel.app/

That URL is the **reference for how the deliverable is structured** (homepage narrative + linked wireframe pages + research-style section + acceptance criteria). Replace the **checkout** story with the **patient portal / subscription flow** story below.

**Figma file (canonical link):**  
https://www.figma.com/design/NtCmV49xWAPA0LY8L2i1AG/Ellie-V2-Design-File?node-id=3052-4075  

**Attached PNGs:** Use what I upload as the **visual baseline** for wireframe pages. The written sections below add **team-facing recommendations** (how we think the flow should work and align with PDP/checkout). If you need to choose between inventing new UI and sticking to exports, **prefer the exports** for layout; use copy blocks to state **recommendations** where we have less documentation.

---

## Project title (H1)

Patient Portal: Renewals, Orders, and Subscription Transparency

## Purpose (subtitle)

Recommend how the **signed-in patient** experience should surface **renewals**, **order history**, and **subscription clarity** (cadence and per-cycle price)—**aligned with product detail and checkout**—and give the team a **clear, shareable** spec site (not a full audit pack).

---

## Recommendations focus (for the team)

Frame the homepage and wireframe intros around **what we suggest** patients should be able to understand quickly:

1. **When** the next meaningful event is (charge, renewal, shipment — use consistent labels across PDP, checkout, and portal).  
2. **What** they pay **per cycle** and **how often** (cadence).  
3. **Where** they are in the lifecycle (active, in progress, etc., as your wireframes imply).  
4. **What to do next** when something needs attention (one primary action per key screen where possible).

**Guidance to weave into copy (recommendations, not a formal validation matrix):**

- Prefer **one repeated pattern** for cadence + cycle price from list → detail so engineering can reuse **orderCycle** / **orderPrice** mentally across surfaces.  
- If **billing** and **shipment** differ, say so clearly in recommendations — don’t collapse two meanings into one date.  
- If **refill** and **renewal** both exist, recommend **plain language + IA** (grouping or short definitions) so support load stays low.

---

## Problem (context)

Patients return to the account area to see **when they’ll be charged** or **receive the next shipment** and to understand their subscription. Legacy or CMS-only wording (e.g. **monthSupply**) may not match what checkout and PDP promise. Engineering is moving toward **orderCycle** and **orderPrice** in lists and detail. Design needs **one coherent story** across renewals, orders, and any **category-specific** treatments (subscription vs non-subscription, Rx vs non-Rx where relevant).

## Solution (two layers — same pattern as template)

1. **Engineering:** Portal surfaces should consume the same **orderCycle** / **orderPrice** ideas as PDP and checkout so intervals and amounts stay consistent.  
2. **Design / product:** Call out **where** cadence, cycle price, and next-key dates should live in the hierarchy and **how** they should read next to PDP/checkout.

---

## Information architecture (ground in attached exports)

Exports suggest a **sidebar portal** with:

- **Home** hub states: **Sub1, Sub2, NonSub1, NonSub2, NonSub NonRx**, overview + hovers  
- **Orders**: **MOTHER** list and **MOTHER Expanded**  
- **Messages**, **Wallet**, **Support**, **Profile** (per home hover exports)

**Suggested page build order:**

1. **Home hub** — overview + subscription / non-sub / variant states from PNGs.  
2. **Orders** — MOTHER + Expanded.  
3. Other **Home hover** targets as linked sections/pages so uploads aren’t orphaned.  
4. Secondary nav items — keep pages **light** if exports are thin; add short **recommendation** paragraphs instead of inventing heavy UI.

---

## What the site should cover

- **Subscriptions / renewals list:** sorting, labels, next date + cadence + cycle price (recommend defaults in prose where Figma is silent).  
- **Order detail:** where cycle price and cadence should sit vs line items / summary (tie to expanded order export).  
- **Refill vs renewal:** recommended language and IA if both exist.  
- **Mobile + desktop** — note if exports are desktop-only; recommend responsive priorities in text without pretending full mobile frames exist.

---

## Patient portal journey (homepage numbered block — replace Checkout journey)

Four steps, **same visual style** as template — describe the **recommended** flow through the portal:

1. **Home / hub** — orient; see subscriptions and entry to orders.  
2. **Subscriptions / renewals** — list-level clarity on cadence + price + next date.  
3. **Subscription / program detail** — deeper transparency where the product needs it.  
4. **Orders** — history and detail with line items + summary aligned to **orderCycle** / **orderPrice**.

---

## Acceptance criteria (keep this section, but keep it practical)

1. Wireframe pages reflect **attached exports** for layout; written sections state **recommendations** where docs are thin.  
2. Short **vocabulary note**: renewal vs order vs subscription vs refill — aligned with PDP/checkout intent.  
3. **Two cadence examples** or clear rules for **dynamic interval** copy (same component, different strings).  
4. **Category notes** if Sub vs Non-sub or Rx vs non-Rx differ — table or bullets.  
5. **Engineering pointers**: upcoming_renewals, order_details, shared utilities; fields **orderCycle**, **orderPrice**, interval display — brief, not exhaustive audit annotations.

---

## Research Foundation section

Use the template’s **card grid**. Link or describe real sources where you have them; use **“TBD”** placeholders with one-line intent if URLs aren’t ready — don’t invent links.

---

## Build requirements

- **Skeleton:** Like template — header, hero, Problem, Solution, numbered journey, optional stats row, Research Foundation, Acceptance criteria, wireframe deep links, subpages.  
- **Tone:** Premium, clinical-but-modern; readable; generous spacing.  
- **No lorem** for cadence, price, renewal, order, subscription.

---

## File-to-page map (when attaching `screenshots/figma/`)

| Attachment pattern | Wireframe / section |
|---------------------|---------------------|
| `HOME D_ NonSub1 Overview` | Hub default / overview |
| `HOME D_ Sub1 Hover`, `Sub2 Hover` | Hub — subscription contexts |
| `HOME D_ NonSub1 Hover`, `NonSub2 Hover`, `NonSub NonRx Hover` | Hub — non-sub / variant contexts |
| `HOME D_ Orders Hover` | Nav → Orders |
| `HOME D_ Messages Hover`, `Wallet`, `Support`, `Profile` | Nav targets |
| `ORDERS D_ MOTHER` | Orders list |
| `ORDERS D_ MOTHER Expanded` | Order detail / expanded |

---

*Folder README: `README.md` · Template captures: `screenshots/template/`*
