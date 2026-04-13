# Patient Portal (v0) — links & screenshot prep

Use this folder when starting a new v0 project. The **template** is the subscription cadence site; the **spec** is in `PROMPT_FOR_V0.md`.

## Links

| What | URL |
|------|-----|
| **Template (match IA + tone)** | https://v0-checkout-subscription-cadence-an.vercel.app/ |
| **Figma — Ellie V2 (start node)** | https://www.figma.com/design/NtCmV49xWAPA0LY8L2i1AG/Ellie-V2-Design-File?node-id=3052-4075 |

Node ID reference: `3052-4075` → in Dev Mode URLs use `3052:4075` if needed.

## Screenshots

- **Template site:** run `./capture-template-screenshots.sh` from this folder (requires network; uses Playwright CLI after one-time browser install).
- **Figma:** v0 cannot log into Figma. Export PNGs yourself — see `FIGMA_EXPORT_CHECKLIST.md`.

## Files

- `CLAUDE_LOCAL_RUN_HANDOFF.md` — local runbook for Claude with constraints, task kickoff prompt, and file map.
- `STAKEHOLDER_BRIEF_PM_STEP_3_AND_4.md` — PM acceptance spec (subscription list + full site structure); review with engineering/design.
- `PROMPT_FOR_V0.md` — paste into v0 (includes both links).
- `FIGMA_EXPORT_CHECKLIST.md` — which frames to export and how.
- `capture-template-screenshots.sh` — captures the template homepage for v0 attachment.
