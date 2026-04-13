# EllieMD Design Context

**Last updated:** April 12, 2026
**Version:** 1.0

---

## How to Use This

1. **Upload this entire zip** to a new Claude chat
2. Tell Claude what you're working on
3. Claude has all the data it needs — pricing, questionnaires, scoring, decisions, everything

That's it. No other files needed.

---

## What's in This Zip

### CONTEXT.md (this file)
Locked decisions, terminology, team, active projects, wireframe rules, engineering contracts.

### data/ (14 files)
All extracted source data in markdown:
- **product-pricing.md** — 46 products with orderPrice, orderCycle, all columns
- **reassessment-links.md** — 95 products, which questionnaire each routes to
- **upgrade-downgrade-matrix.md** — 55 products, 900 allowed tier/formulation changes
- **wm-injection-reassessment.md** — Injection reassessment: all questions, conditions, DQ rules
- **wm-oral-reassessment.md** — Oral reassessment: all questions, conditions, DQ rules
- **psq-question-bank.md** — 54 quiz questions with branching logic
- **psq-compound-families.md** — 38 compounds with mechanisms, categories, stack groups
- **psq-v2-compound-families.md** — V2 compounds with roles, evidence, risk ratings
- **psq-v2-compound-master.md** — V2 master list with research ratings (★–★★★★★)
- **psq-signal-map.md** — 37 × 16 scoring matrix (product × category)
- **psq-category-rankings.md** — 29 categories, compounds ranked strongest → weakest
- **psq-stack-rules.md** — 69 exclusion rules, delivery swaps, contraindication logic
- **psq-comparisons.md** — Head-to-head compound comparison tables
- **psq-recommendation-screen.md** — Tier logic, display rules, mandatory promotions

### intake-questionnaires/ (45 files + INDEX.md)
Every product's medical intake form with all questions, answer formats, conditions, DQ rules, and tech notes. Organized by product.

### source-files/ (6 files)
Original spreadsheets and non-convertible documents:
- Product_Price_and_Order_Cycle.xlsx
- Upgrade_Downgrades___Formulation_Changes.xlsx
- V1_Product_Selection_Quiz.xlsx
- 3_0_EllieMD_Questionnaire_Source_of_Truth.xlsx
- EllieMD_Enrollment_Screenshots.docx (images — enrollment UI reference)
- Enrollment_Flow.pdf (25MB — visual enrollment flow)

---

## Locked Decisions

### Pricing
- "Per cycle" replaces "per month" everywhere
- Full orderPrice is prominent, per-day breakdown is secondary
- Backend is source of truth — never hardcode prices in UI
- Formulations at same molecule and tier share orderPrice

### Checkout (DES-53)
- CTA = "Subscribe Now" (not "Next Steps")
- 7+ consent checkboxes consolidated → 1
- Disclosure present at every step (Cart → Checkout → Confirmation)
- Single-product checkout only
- No installments, no BNPL
- Cart owns subscription terms; Checkout owns medical/legal; Confirmation owns receipt

### Reassessment (DES-61)
- Tier/formulation selection happens BEFORE questionnaire
- Skip option always available (keeps current tier)
- Non-weight-loss products skip the tier selection step entirely
- Microdose → triggers new INTAKE, not reassessment
- BMI < 22 → DISQUALIFIED
- Pregnancy → DISQUALIFIED
- Tier 1 patients: upgrades only (no downgrade option shown)
- Top tier patients: downgrades only
- Cross-molecule switches (Semaglutide ↔ Tirzepatide) allowed at matching tiers

### Enrollment
- $8/mo tech fee included in $79 enrollment fee
- "Replicated Website Name" field with blacklist validation
- No EIN required
- Promo code field kept
- SSO-integrated flow replacing Trinity's multi-screen process

### PSQ (Product Selection Quiz)
- "Get It" replaces "Add to Protocol"
- Protocol Builder removed from results screen
- Goals: 1 Primary (+3) + 2 Secondary (+2) + remaining sub-goals (+1)
- Must Have / Nice to Have result tiers
- "More Info" consolidation: one expandable per compound
- Mechanism family tags on compound cards

---

## Team

- **Honey** — Leadership
- **Stephanie** — Product
- **Amir** — Product
- **Samir** — Engineering Lead
- **Nikki** — Marketing
- **Lauren** — Operations
- **Gina** — Junior UI Designer
- **Mayra** — Junior Marketing Designer (Mexico City)

---

## Key Prices (always verify against data/product-pricing.md)

**8-week cycles:** NAD+ Nasal Spray $478 · Glutathione $398 · BPC-157/TB-500 $558 · GHK-Cu $440 · Tesa/IPA $500
**10-week cycles:** MOTS-C $478 · Tesa/KPV $500 (8 weeks on, 2 off)
**12-week cycles:** Semaglutide T1 $897 · T1.5 $987 · T2 $1,047 · T2.5 $1,047 · T3 $1,197 · Tirzepatide T1 $897 · T1.5 $1,017 · T2 $1,137 · T2.5 $1,167 · T3 $1,197 · T4 $1,287
**Monthly:** GLP-1 Support+ $119

---

## Terminology

| Use This | Not This |
|---|---|
| Per cycle | Per month |
| orderPrice | retailPrice |
| Subscribe Now | Next Steps |
| Reassessment | Re-evaluation |
| Intake | Onboarding |
| Formulation | Variant (B12, Glycine, L-Carnitine) |
| Tier | Dosage level (1, 1.5, 2, 2.5, 3, 4) |
| Microdose | Low-dose / maintenance |

---

## Active Projects

| Project | Audit Status | Current State |
|---|---|---|
| PSQ Prototype | 44/44 ✅ | Open: goals × protocol matrix keep/remove, lead capture timing |
| DES-53 Checkout Cadence | 61/61 ✅ | Ready for review |
| DES-61 Reassessment Tier Selection | 135/135 ✅ | Blocked: awaiting signed matrix from Operations (OPS-210) |
| Brand Partner Enrollment | 79/79 ✅ | Blocked: ICA update, error states, coupon workflow |

---

## Wireframe Standards

1. **Self-contained** — Each wireframe site never references other projects or Linear issues
2. **Format adapts** — Side-by-side (CURRENT red vs PROPOSED green) if comparing to existing UI; proposed-only with "TODAY" context block if net-new
3. **Every claim traced** — Every claim traces to a source document with specific row/location. Sourced = green ✓. Proposal = orange ?.
4. **Audit before delivery** — Cross-contamination check, price verification against spreadsheets, syntax check

### Brand Colors
- Orange: #E8623A
- Navy: #141B34
- Charcoal: #2D2D2D

### v0 Deployment Pattern
Single JSX file, tab navigation, logo as base64, Tailwind CSS, eslint/ts ignore comments. Break large prompts into small sequential steps.

---

## Engineering Contracts

**Order cycle format:** `{ count: number, unit: 'week', description?: string }`
**Order price:** `number` (in cents in some contexts, dollars in others — verify)
**Display interval helper:** `displayInterval()` returns human-readable string

**Hand-off API fields (reassessment → checkout):**
previousProduct, previousTier, selectedProduct, selectedTier, changeType (upgrade/downgrade/formulation), requiresNewIntake, priceDelta, subscriptionId, patientId

**Payment scenarios:** upgrade (pay delta), downgrade (credit applied), formulation change (same price), new intake required (full price), same tier renewal (no change)

---

## Open Questions (as of April 12, 2026)

- Signed upgrade/downgrade matrix from Operations (OPS-210)?
- Goals × Protocol Matrix: keep or remove from PSQ results?
- ICA enrollment fee update ($5 → $8)?
- Enrollment error states — what happens when validation fails?
- Coupon workflows — how do coupons interact with subscriptions?
- Microdose reassessment path — does one exist or always new intake?

---

## Keeping This Updated

This zip is regenerated every few weeks by the design lead. Between zip updates, check the Linear project "EllieMD - Document Source of Truth" for the latest individual document updates. Update notifications are posted as issues on the Ellie Design team.
