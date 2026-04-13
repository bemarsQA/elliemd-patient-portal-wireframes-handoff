# EllieMD Design Context — v0 Handoff Summary

**Purpose:** Paste this alongside the uploaded **EllieMD Design Context** folder so v0 stays aligned with locked decisions, terminology, and data contracts. This file is a **distilled guide**; authoritative numbers live in `data/product-pricing.md` inside that bundle.

**Source bundle:** `EllieMDContext-UploadZIPtoClaude/` (CONTEXT.md + `data/` + `intake-questionnaires/`)

**Last distilled:** April 2026 (matches CONTEXT.md v1.0, April 12, 2026)

---

## 1. What “locked decisions” means

Rules the org has **already chosen**. Treat as **constraints**—do not override in UI copy or flows without explicit product approval. If a staging site or old mock conflicts with a lock, **flag drift**; do not “fix” silently in design.

---

## 2. Pricing & display (locked)

- **“Per cycle”** replaces vague **“per month”** for subscription billing framing where the product is cycle-based.
- **`orderPrice`** is the **hero number** (full amount for one order cycle). **`retailPrice`** is **not** the primary customer-facing price label for subscription parity.
- **Per-day** (or similar) breakdown is **secondary** only, under the main cycle price.
- **Backend / catalog is source of truth**—never hardcode prices in UI; use data or realistic placeholders labeled as such.
- **Same molecule + tier + formulation rules:** formulations at the same molecule and tier **share `orderPrice`** (per CONTEXT).

---

## 3. Terminology (use / avoid)

| Use | Avoid |
|-----|--------|
| Per cycle | Per month (when misleading vs actual cadence) |
| orderPrice (as concept: “per cycle” charge) | retailPrice as the lead price |
| Subscribe Now (checkout CTA, per DES-53) | Next Steps |
| Reassessment | Re-evaluation |
| Intake | Onboarding |
| Formulation | Variant (casual) — B12, Glycine, L-Carnitine are formulations |
| Tier | “Dosage level” phrasing; tiers 1, 1.5, 2, 2.5, 3, 4 |
| Microdose | Low-dose / maintenance (as substitute label) |
| **Subscription** (portal continuity) | Plan / membership (unless explicitly approved elsewhere) |
| **Next renewal / Next charge** | **Next shipment** when you mean billing—shipment can lag provider approval |

---

## 4. Data fields (how they differ)

### `orderPrice` (number)

- Amount the patient pays **for one order cycle** (the main subscription charge to surface prominently).

### `orderCycle` (object)

- **Billing / reorder rhythm** for that price: `{ count, unit: 'week', description?: string }`.
- Examples: `{ count: 12, unit: 'week' }` → charge every 12 weeks.
- **Composite cycles:** optional **`description`** (e.g. “8 week supply, 2 week break” on a 10-week order cycle). UI may need **primary interval + supporting line** from `description`.

### `prescriptionCycle` (object)

- **Clinical / prescription cadence** (e.g. months, refills)—can differ from **when the card is charged**.
- Use for **script / refill / supply** context—not as a drop-in replacement for “next charge” language.

### `displayInterval()` (engineering helper)

- Returns a **human-readable string** from `orderCycle` (exact template is an engineering/detail spec—bundle only states the contract).

**Portal / PDP / checkout:** Align **customer-facing** money + timing with **`orderPrice` + `orderCycle`** (and `displayInterval()` output). Use **`prescriptionCycle`** only where the screen is about **prescription/refills**, not as the default “when you pay next” line.

---

## 5. Checkout locks (DES-53) — from CONTEXT

- CTA: **Subscribe Now** (not “Next Steps”).
- **Consent:** many checkboxes consolidated toward **one** (per lock).
- **Disclosure:** present across **Cart → Checkout → Confirmation** (per lock).
- **Single-product checkout** (per lock).
- **No installments, no BNPL** in this locked DES-53 spec (per CONTEXT). If a staging build shows installments/BNPL, treat as **possible drift** vs doc—do not assume without product sign-off.
- **Ownership:** **Cart** = subscription terms; **Checkout** = medical/legal; **Confirmation** = receipt.

---

## 6. Key prices cheat sheet (verify in `data/product-pricing.md`)

Do not treat this as the database—**always** reconcile to `product-pricing.md` for wireframes that show real SKUs.

- **8-week cycles:** NAD+ Nasal Spray $478 · Glutathione $398 · BPC-157/TB-500 $558 · GHK-Cu $440 · Tesa/IPA $500  
- **10-week cycles:** MOTS-C $478 · Tesa/KPV $500 (8 weeks on, 2 off)  
- **12-week cycles:** Semaglutide T1 $897 · T1.5 $987 · T2 $1,047 · T2.5 $1,047 · T3 $1,197 · Tirzepatide T1 $897 · T1.5 $1,017 · T2 $1,137 · T2.5 $1,167 · T3 $1,197 · T4 $1,287  
- **Monthly:** GLP-1 Support+ $119  

**Example rows (from pricing table):**

- **Semaglutide (injection) Tier 2:** `orderPrice` **1047.0**, `orderCycle` **12 weeks**  
- **MOTS-C Injection:** `orderPrice` **478.0**, `orderCycle` **10 weeks** + `description`: **8 week supply, 2 week break**

---

## 7. Wireframe / v0 behavior (from CONTEXT)

- **Self-contained:** do not reference external Linear issue IDs inside user-facing copy unless the brief requires it.
- **Sourced vs proposed:** sourced claims = verified; speculative UI = mark as proposal.
- **Brand colors (doc chrome):** Orange `#E8623A`, Navy `#141B34`, Charcoal `#2D2D2D`  
- **Prices:** verify against `data/product-pricing.md` before shipping realistic numbers.

---

## 8. What v0 should do

- Use **orderPrice + orderCycle** (and human interval from `displayInterval()` when simulating real UI) for **subscription rows**, **renewal**, and **checkout continuity** in the patient portal.
- Keep **terminology** aligned with the table in §3.
- When showing **composite** cycles, reflect **`description`** (e.g. on/off weeks) without collapsing it into misleading “monthly.”
- If the brief is **portal** work, design it as a **continuation** of PDP + checkout language—not a separate vocabulary.

---

## 9. What v0 should not do

- Lead with **retailPrice** or **$/mo** when the locked rule is **per-cycle `orderPrice`**.
- Invent **final** dollar amounts for real products without `product-pricing.md` (use placeholders if needed).
- Ignore **locked** checkout/consent/disclosure ownership when simulating end-to-end flows.
- Assume **installments/BNPL** are in scope for DES-53 without explicit override from product.

---

## 10. Canonical files inside the uploaded folder

| Need | File |
|------|------|
| Locks, terminology, contracts, cheatsheet | `CONTEXT.md` |
| Every product `orderPrice` / `orderCycle` / `prescriptionCycle` | `data/product-pricing.md` |
| Reassessment routing | `data/reassessment-links.md`, questionnaires under `intake-questionnaires/` |
| PSQ logic | `data/psq-*.md` |

---

*End of handoff summary. Regenerate from Linear “EllieMD - Document Source of Truth” when the zip version bumps.*
