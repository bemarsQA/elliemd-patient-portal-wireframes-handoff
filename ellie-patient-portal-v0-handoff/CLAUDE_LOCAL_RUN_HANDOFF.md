# Claude local run handoff (full project state)

This is the operator guide for running the current Patient Portal wireframe project with Claude on a local machine.

## 1) What Claude should open

- App repo folder: `elliemd-patient-portal-wireframes/`
- Context/handoff folder: `ellie-patient-portal-v0-handoff/`

If your Claude workflow takes one folder at a time, open the app folder first and keep this handoff folder available for reference files.

## 2) Current app status

- Framework: Next.js App Router, TypeScript, React 19
- Styling: Tailwind CSS v4 (`@import "tailwindcss"` in `app/globals.css`)
- Routes:
  - `/` Overview
  - `/subscription-list`
  - `/order-detail`
  - `/edge-states`
  - `/sources`
- Build status: passing (`npm run build`)
- Shared shell component: `components/WireframeChrome.tsx`

## 3) Run commands (local)

```bash
cd "/Users/marsjones/Cursor Fileas/elliemd-patient-portal-wireframes"
npm install
npm run dev -- --port 3001
```

Build check:

```bash
npm run build
```

## 4) Rules Claude must preserve

1. No em dash character (`—`) in site copy.
2. Keep Overview page focused on problem/solution outcomes, not heavy source-file callouts.
3. Keep source traceability details on `/sources`.
4. Keep stakeholder-facing citation naming clean:
   - use `data/...`, `intake-questionnaires/...`, and `Patient Portal v2 Figma frames`
   - do not surface internal package naming in user-facing chrome/content.
5. Keep engineering field clarity in wireframes (`orderCycle`, `orderPrice`, etc.) with `EngTag` where applicable.

## 5) PM acceptance requirements to follow

Read first:
- `STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md`

Highlights:
- Step 3: subscription list current vs proposed, cadence toggle, desktop/mobile toggle, annotations, acceptance criteria.
- Step 4: full wireframe site structure (overview, subscription list, order detail, edge states, sources).

## 6) Figma discrepancy audit files (important for leadership review)

- `BOSS_SHARE_FIGMA_EXPORT_DISCREPANCIES.md`  
  Criteria-based review of exported Figma screens with terminology/pricing/cadence gaps.
- `PATIENT_PORTAL_V2_FIGMA_AUDIT_FOR_V0.md`  
  Larger audit with legacy language and drift patterns from broader frame coverage.

## 7) Recommended Claude kickoff prompt (copy/paste)

```text
You are working inside elliemd-patient-portal-wireframes (Next.js App Router + Tailwind v4).
Before making changes, read these files in ellie-patient-portal-v0-handoff:
- CLAUDE_LOCAL_RUN_HANDOFF.md
- STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md
- BOSS_SHARE_FIGMA_EXPORT_DISCREPANCIES.md
- PATIENT_PORTAL_V2_FIGMA_AUDIT_FOR_V0.md

Constraints:
- No em dashes in site copy.
- Keep Overview problem/solution focused, not source-path heavy.
- Keep traceability detail on /sources.
- Preserve route structure and shared WireframeChrome.

Task:
[insert your immediate task]
```

## 8) Known environment gotchas

- Port collisions are common (e.g., `3001` in use). If needed:
  - stop existing process using that port, or
  - run `npm run dev -- --port 3002`.
- There may be other unrelated projects in the same parent directory. Ensure Claude edits only:
  - `elliemd-patient-portal-wireframes/`
  - `ellie-patient-portal-v0-handoff/` (if updating docs).

