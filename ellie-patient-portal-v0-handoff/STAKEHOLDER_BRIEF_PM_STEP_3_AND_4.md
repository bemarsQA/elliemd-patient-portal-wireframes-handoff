# Stakeholder brief: Step 3 (subscription list) & Step 4 (full wireframe site)

Authoritative copy of requirements shared for this initiative. Use with `patient-portal-v0-context/README_WHATS_IN_THIS_ZIP.txt` (same substance; README also maps to the built app).

---

## Step 3 — Subscription list / upcoming renewals

**Goal:** Design the main view patients see when they log into the portal: the list of their **active subscriptions** with **upcoming renewal** info. This is the most important screen because it is where patients go to understand **when they are getting charged next and how much**.

### What to design (side-by-side Current vs Proposed)

**CURRENT panel** — Screenshot what exists today; annotate the problems:

- Legacy terminology (monthly, per month, etc.)
- Missing cycle info
- Missing next charge date
- Any confusing or unclear elements

**PROPOSED panel** — Design the updated view. Each subscription card/row should show:

- Product name + category
- Cycle badge: e.g. “Every 8 weeks” (from `displayInterval(orderCycle)`) — use the blue engineering tag **`orderCycle`**
- Cycle price: e.g. “$478.00” (from `orderPrice`) — use the blue engineering tag **`orderPrice`**
- Per-day breakdown as secondary: e.g. “$8.54/day”
- Next charge date: “[date]” — calculated from `orderCycle`
- Subscription status: Active, Paused, Pending Renewal
- Quick actions: View Details, Manage Subscription

### Cadence variations to show

Design with at least **two products** toggled (like checkout wireframes):

- **8-week** product (e.g. NAD+ Nasal Spray — $478, Every 8 weeks)
- **12-week** product (e.g. Semaglutide Tier 1 — $897, Every 12 weeks)

Add a **toggle** in the wireframe so stakeholders can switch between them.

### Other considerations

- **Sorting:** How are subscriptions ordered? By next charge date? By product category? Let the patient sort?
- **Multiple subscriptions:** A patient might have 2–3 active subscriptions. Show a **list state with multiple cards**.
- **Single subscription:** Also show the simpler **single-product** state.
- **Desktop and mobile:** Design **both**. The list must work on a phone screen.

### Deliverable (Step 3)

Side-by-side **Current vs Proposed** wireframe for the subscription list / upcoming renewals view, with **numbered annotations** and **engineering tags** on dynamic fields.

### Done when (Step 3)

A stakeholder can look at the wireframe and understand **exactly** what the renewals list looks like, **what data appears**, and **where it comes from**.

---

## Step 4 — Full wireframe site (React artifact & structure)

**Build approach:** Build as a **React artifact** — the same approach used for the checkout wireframes (e.g. checkoutv1.elliestaging.com). **Single JSX file** with **tab navigation**, **Tailwind CSS**, **no routing**. Deploy to v0 when done.

*Note: The Cursor-built repo in this workspace uses **Next.js App Router + routes + shared header** instead of a single file; functionally it covers the same pages. See README mapping.*

### Wireframe site structure (standard format)

**Overview page**

- Problem statement: patients cannot see subscription details clearly in the portal; terminology does not match checkout/PDP
- Solution: unified portal views with consistent `orderCycle` / `orderPrice` display
- Page map: which screens are covered
- Sourced decisions vs design proposals summary

**Subscription List page (from Step 3)**

- Side-by-side Current vs Proposed
- Cadence toggle (8-week / 12-week)
- Desktop / mobile toggle
- Numbered annotations with source tracing
- Field-level delta table (what changed and why)
- Acceptance criteria

**Order Detail page (from Step 4)**

- Same format as above

**Edge States page (from Step 5)**

- Show each state as a **standalone panel** with annotation

**Sources page**

- **Decision Traceability** table (green border): every sourced decision with document/row reference
- **Design Proposals** table (orange border): every design proposal with rationale
- **Engineering touchpoints:** list the API fields and endpoints (`upcoming_renewals`, `order_details`, etc.)
- **Terminology alignment** table showing portal ↔ checkout ↔ PDP vocabulary

### Deliverable (Step 4)

Complete wireframe site (React/JSX) with **all pages**, **annotations**, and **sources**.
