# Figma export checklist (for v0 attachments)

Open: [Ellie V2 — node 3052-4075](https://www.figma.com/design/NtCmV49xWAPA0LY8L2i1AG/Ellie-V2-Design-File?node-id=3052-4075)

## Before you export

1. Turn on **Dev Mode** if you use inspect/export shortcuts.
2. Use **PNG**, **2x** scale for retina clarity (or PDF for multi-frame handoff — v0 usually prefers PNG).

## Minimum exports for the Patient Portal remit

Export these as PNG into `screenshots/figma/` (create the folder) with clear names:

| # | Frame / area | Suggested filename | Why |
|---|----------------|-------------------|-----|
| 1 | Account / portal **home** or hub (if present near this node) | `figma-account-hub.png` | IA + entry to renewals / orders |
| 2 | **Subscriptions / upcoming renewals** list | `figma-subscriptions-list.png` | Cadence + next date + labels |
| 3 | **Subscription detail** (single subscription) | `figma-subscription-detail.png` | Cycle price + cadence summary |
| 4 | **Order detail** (line items + summary) | `figma-order-detail.png` | orderCycle / orderPrice placement |
| 5 | Any **refill vs renewal** or program-specific note | `figma-refill-renewal-note.png` | Cross-link / copy patterns |
| 6 | **Empty / no active subscription** (if designed) | `figma-empty-state.png` | States coverage |

If your file structure differs, export the **closest frames** to the above and rename so v0 can tell them apart.

## Quick export in Figma

1. Select the frame.
2. Right-click → **Copy/Paste as** → **Copy as PNG** *or* use the Export panel with **+** and **Export** **2x** PNG.

## Attach to v0

Upload all `screenshots/figma/*.png` in the same v0 chat where you paste `PROMPT_FOR_V0.md`.
