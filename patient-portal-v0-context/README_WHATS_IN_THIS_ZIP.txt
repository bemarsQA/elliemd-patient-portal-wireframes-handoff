Patient Portal v0 — full context bundle
========================================
Last aligned with the Cursor-built wireframe site and team conventions below.
Use this file when handing work to v0, contractors, or future you.


WHAT IS IN THIS ZIP
-------------------
1) elliemd-patient-portal-wireframes/
   Runnable Next.js (App Router) wireframe / spec mini-site.

2) ellie-patient-portal-v0-handoff/
   Prompts, design context, Figma audit markdown, checkout master setup notes,
   PNG exports (Figma + template), and docs/EllieMDContext_Pkg/ with stakeholder
   data (data/*.md, intake-questionnaires/*.md, CONTEXT.md, etc.).

3) patient-portal-v0-context/README_WHATS_IN_THIS_ZIP.txt (this file)

Excluded from the wireframe app folder inside any zip we build: node_modules,
.next, .git, and .DS_Store.


RUN THE APP
-----------
  cd elliemd-patient-portal-wireframes
  npm install
  npm run dev
  (package.json uses next dev on 127.0.0.1)

  npm run build   — verify before sharing


TECH STACK (DO NOT SILENTLY DOWNGRADE)
--------------------------------------
- Next.js 16.x, React 19, TypeScript
- Tailwind CSS v4: app/globals.css uses @import "tailwindcss" and @theme inline
  for fonts. Do not replace with Tailwind v3 + tailwind.config unless you migrate
  intentionally.
- Fonts: Geist Sans / Geist Mono (layout.tsx); Lora loaded for --font-lora and
  used as font-serif on the overview hero (and other serif headings as needed).
- Path alias: @/ for components, lib, etc.


INFORMATION ARCHITECTURE (ROUTES)
---------------------------------
All pages share WireframeChrome (header + pill nav).

  /                  Overview (reference-checkout-style narrative layout)
  /subscription-list Step 3 wireframe
  /order-detail      Step 4 wireframe
  /edge-states       Step 5 wireframe
  /sources           Traceability tables and citations only page

Nav labels: Overview, Subscription list, Order detail, Edge states, Sources.
Active pill: rounded-full bg #141B34 text white; inactive: neutral hover.


GLOBAL CHROME (PRESENTATION)
----------------------------
- Page shell: header border-b white on a light gray outer background
  (#f4f4f5); overview main content uses a full-width white band under the header
  for parity with the checkout reference overview.
- Logo: public/ellie-md-logo.png via next/image in WireframeChrome, links home.
- Title row: logo, then a vertical 1px rule (neutral-200), then subtitle text
  "Patient Portal · Wireframes" (hidden on very small screens if needed; sm+).
- Body default text color ~#141B34; accent orange for wireframe CTAs #E8623A
  where used.
- Section pattern on overview (match checkout “master” overview rhythm):
  · Small mono uppercase eyebrow (Patient Portal · Wireframe site)
  · Large serif H1
  · Lead paragraph (outcome / problem focused)
  · Today vs Proposed: two cards, red “Today” pill, green “Proposed” pill,
    white cards, subtle border/shadow
  · Scope: In (green badge) and Out (red badge) full-width bars
  · Cadence examples: two rows, sky badge (8-week), amber badge (12-week);
    example numbers come from lib/products.ts (aligned to product-pricing rows)
  · Patient portal journey: three numbered circles (orange outline, navy filled,
    orange outline) + short blurbs
  · Decisions: two-column grid, green check circles (product/engineering rules,
    not file paths)
  · Design proposals (pending review): two-column grid, orange ? circles
  · Primary CTA: dark navy button “View wireframes →” to /subscription-list
  · Small footer line: EllieMD · Patient Portal wireframes · Overview


COPY AND EDITORIAL RULES
------------------------
A) No em dashes (U+2014 —) anywhere in site copy, buttons, table placeholders,
   comments, or titles. Use commas, colons, “on” for dates, middle dot (·),
   “none” / “N/A”, or rephrase.

B) Overview page is problem- and outcome-first. Do not lead with file paths,
   internal doc names, or “see data/X”. The checkout reference keeps traceability
   on a dedicated Sources area; this site does the same.

C) Sources page (/sources) is where paths like data/product-pricing.md,
   data/reassessment-links.md, intake-questionnaires/…, and explicit Figma
   section references belong.

D) Prefer “Patient Portal v2 Figma frames” as the user-facing name for design
   references. Do not label the UI with internal audit document filenames
   (e.g. do not put the handoff-only audit markdown filename on a patient-facing
   string). Do not use “PDF” for that artifact in UI copy.

E) Stakeholder-facing citations (in UI) should be limited to:
   · Files under data/ (as cited on Sources), e.g. product-pricing,
     reassessment-links, upgrade-downgrade-matrix
   · intake-questionnaires/*.md where relevant
   · Patient Portal v2 Figma frames for UX gaps
   Avoid shouting internal bundle names (e.g. EllieMDContext_Pkg) in chrome or
   main wireframe copy; those paths live in the handoff zip for authors only.

F) Engineering field names (orderPrice, orderCycle, prescriptionCycle, etc.) may
   appear in wireframes and EngTag labels so design and eng share vocabulary.

G) Optional style note: avoid “§” in marketing-style user-facing strings where
   possible; section symbols may still appear on the Sources page for precise
   traceability to frame sections.


EngTag COMPONENT
----------------
Small label/badge used on dynamic or schema-backed fields in wireframes so
review decks show what is data-backed. Keep usage consistent on subscription
list and order detail wireframes.


WIREFRAME CONTENT PRINCIPLES (SUBSTANCE)
----------------------------------------
- Separate billing from fulfillment: next charge / renewal vs shipment/tracking.
- Do not use prescriptionCycle or retail framing as a stand-in for billing
  cadence when the screen is about subscription billing.
- Call out edge states: reassessment pending, paused, failed payment, composite
  orderCycle (e.g. MOTS-C style descriptions), financing vs true subscription.
- Example SKUs in lib/products.ts mirror stakeholder pricing table rows
  (e.g. NAD+ 8-week, Semaglutide 12-week) for consistent demo numbers.


STAKEHOLDER BRIEF (PM) — STEP 3 & STEP 4 (REVIEW THIS)
-------------------------------------------------------
The same text lives in Markdown at:
  ellie-patient-portal-v0-handoff/STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md
Below is the full plain-text copy for the zip README.


--- STEP 3 — SUBSCRIPTION LIST / UPCOMING RENEWALS ---

Goal: Design the main view patients see when they log into the portal: the list
of their active subscriptions with upcoming renewal info. This is the most
important screen because it is where patients go to understand when they are
getting charged next and how much.

What to design (side-by-side Current vs Proposed)

CURRENT panel — Screenshot what exists today, annotate the problems:
  · Legacy terminology (monthly, per month, etc.)
  · Missing cycle info
  · Missing next charge date
  · Any confusing or unclear elements

PROPOSED panel — Design the updated view. Each subscription card/row should show:
  · Product name + category
  · Cycle badge: “Every 8 weeks” (from displayInterval(orderCycle)) — blue
    engineering tag [orderCycle]
  · Cycle price: “$478.00” (from orderPrice) — blue engineering tag [orderPrice]
  · Per-day breakdown as secondary: “$8.54/day”
  · Next charge date: “[date]” — calculated from orderCycle
  · Subscription status: Active, Paused, Pending Renewal
  · Quick actions: View Details, Manage Subscription

Cadence variations to show
  · At least two products toggled (like checkout wireframes): 8-week (e.g. NAD+
    Nasal Spray — $478, Every 8 weeks) and 12-week (e.g. Semaglutide Tier 1 —
    $897, Every 12 weeks)
  · Toggle in the wireframe so stakeholders can switch between them

Other considerations
  · Sorting: how ordered (next charge date, category)? Let the patient sort?
  · Multiple subscriptions: show list state with 2–3 cards
  · Single subscription: show simpler single-product state
  · Desktop and mobile: both; list must work on phone

Deliverable (Step 3)
  Side-by-side Current vs Proposed wireframe for subscription list / upcoming
  renewals, with numbered annotations and engineering tags on dynamic fields.

Done when (Step 3)
  A stakeholder can look at the wireframe and understand exactly what the
  renewals list looks like, what data appears, and where it comes from.


--- STEP 4 — FULL WIREFRAME SITE (REACT ARTIFACT & STRUCTURE) ---

Build: React artifact — same approach as checkout wireframes (e.g.
checkoutv1.elliestaging.com). PM asked for: single JSX file, tab navigation,
Tailwind CSS, no routing; deploy to v0 when done.

Implementation note (this repo): The shipped app uses Next.js App Router,
shared WireframeChrome (pill nav), and multiple files instead of one JSX file.
Pages and content mirror the PM’s site structure; v0 can still consume or
regenerate components.

Wireframe site structure (standard format)

Overview page
  · Problem: patients cannot see subscription details clearly; terminology
    does not match checkout/PDP
  · Solution: unified portal views with consistent orderCycle / orderPrice
  · Page map: which screens are covered
  · Sourced decisions vs design proposals summary

Subscription List (Step 3)
  · Current vs Proposed, cadence toggle (8-week / 12-week), desktop/mobile toggle
  · Numbered annotations with source tracing
  · Field-level delta table (what changed and why)
  · Acceptance criteria

Order Detail
  · Same format as subscription list (side-by-side, toggles, annotations, delta,
    acceptance criteria where applicable)

Edge States (Step 5)
  · Each state as a standalone panel with annotation

Sources page
  · Decision Traceability table (green border): sourced decisions + document/row
  · Design Proposals table (orange border): proposals + rationale
  · Engineering touchpoints: API fields and endpoints (upcoming_renewals,
    order_details, etc.)
  · Terminology alignment: portal ↔ checkout ↔ PDP vocabulary

Deliverable (Step 4)
  Complete wireframe site with all pages, annotations, and sources.


HOW THE BUILT APP MAPS TO THE PM BRIEF
--------------------------------------
Subscription list (/subscription-list, SubscriptionListWireframe.tsx)
  · Current vs Proposed columns, red/green panels, numbered callout strip on Current
  · Product toggle (8-week NAD+ vs 12-week Semaglutide), single vs multiple,
    desktop vs mobile
  · Proposed cards: product, category, status, orderCycle + orderPrice EngTags,
    per-day secondary, next charge line, actions
  · Annotation table (#, element, what changed, why, source) and acceptance
    criteria block
  · Current panel is a wireframe representation aligned to Patient Portal v2
    Figma issues (not always a raster screenshot embed)

Order detail (/order-detail): OrderDetailWireframe — side-by-side Current vs
  Proposed, product + device toggles, numbered delta table, acceptance criteria
  (same structural pattern as PM asked for subscription list).

Edge states (/edge-states): panels per state with copy (align with standalone
  panel + annotation expectation).

Sources (/sources): green/orange tables, traceability; add or tighten “engineering
  touchpoints” and “terminology alignment” tables if PM checklist is not fully met.

Overview (/): problem/solution, journey, decisions, proposals (see earlier
  sections); no file-heavy sourcing on overview per team copy rules.


INTERNAL BANNERS
----------------
Do not add “internal use only” style banners to the public wireframe pages unless
product explicitly asks; we did not add them in this build.


HANDOFF FOLDER (ellie-patient-portal-v0-handoff)
-------------------------------------------------
- STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md — PM Step 3 + Step 4 spec (Markdown;
  duplicate of the stakeholder section above for review in Cursor/GitHub).
- PROMPT_FOR_V0.md — original v0 brief; template URL and Figma link; IA from
  exports; may describe a broader portal than the current thin vertical slice
  implemented in code.
- ELLIEMD_DESIGN_CONTEXT_FOR_V0.md, PATIENT_PORTAL_V2_FIGMA_AUDIT_FOR_V0.md —
  deeper audit / context for authors (not all of this belongs in nav copy).
- WIREFRAME_MASTER_SETUP_CHECKOUT.md — checkout reference alignment notes.
- docs/EllieMDContext_Pkg/ — authoritative markdown tables and questionnaires;
  the live app’s Sources page points at the same logical filenames under data/
  and intake-questionnaires/ relative to that package.


V0 / EXTERNAL TOOL ITERATION
-----------------------------
When regenerating UI in v0: preserve App Router routes, WireframeChrome, Tailwind
v4 setup, and EngTag behavior unless intentionally changing architecture. Expect
v0 to suggest Tailwind v3 patterns; merge JSX but keep this repo’s CSS entry
and @theme if possible. Zips omit node_modules; always npm install after unzip.


CONTACT POINT FOR “WHAT WE ALREADY AGREED”
--------------------------------------------
This file, STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md, PROMPT_FOR_V0.md, and the
implemented pages in elliemd-patient-portal-wireframes are the contract for
layout, tone, citation boundaries, and PM acceptance intent. If PROMPT_FOR_V0
conflicts with a rule here from later iteration (overview sourcing tone, em dash
ban, chrome details), prefer this file and the current code for presentation
rules; for product scope, align with the PM Step 3 / Step 4 brief above.
