/**
 * Shared classes aligned to patient portal wireframe reference:
 * compact toggles; labels left of stacks.
 */
/** Top nav links: fill only when active; no border; light shadow on hover. */
export const wfNav = {
  active:
    "inline-flex shrink-0 items-center justify-center rounded bg-[#141B34] px-2 py-1 text-center text-[11px] font-medium leading-tight text-white transition-shadow duration-150 hover:shadow-sm",
  inactive:
    "inline-flex shrink-0 items-center justify-center rounded bg-transparent px-2 py-1 text-center text-[11px] font-medium leading-tight text-neutral-800 transition-shadow duration-150 hover:shadow-sm",
} as const;

/** Review toggles: same interaction pattern as nav. */
export const wfToggle = {
  active:
    "w-full rounded bg-[#141B34] px-2 py-1 text-left text-[11px] font-medium leading-tight text-white transition-shadow duration-150 hover:shadow-sm",
  inactive:
    "w-full rounded bg-transparent px-2 py-1 text-left text-[11px] font-medium leading-tight text-neutral-800 transition-shadow duration-150 hover:shadow-sm",
} as const;

/** Device row: icon + label, same density as wfToggle */
export const wfToggleDevice = {
  active:
    "inline-flex w-full items-center gap-1.5 rounded bg-[#141B34] px-2 py-1 text-left text-[11px] font-medium leading-tight text-white transition-shadow duration-150 hover:shadow-sm",
  inactive:
    "inline-flex w-full items-center gap-1.5 rounded bg-transparent px-2 py-1 text-left text-[11px] font-medium leading-tight text-neutral-800 transition-shadow duration-150 hover:shadow-sm",
} as const;

/** Column label in control bar (uppercase, sits left of the button stack). */
export const wfControlLabel =
  "w-[5rem] shrink-0 pt-0.5 text-left text-[10px] font-semibold uppercase leading-tight tracking-[0.07em] text-neutral-500 sm:w-[5.25rem]";

export const wfControlShell =
  "rounded-lg border border-neutral-200 bg-white p-3 shadow-none sm:p-4";

/** One column: label | stacked toggles */
export const wfControlColumn = "flex min-w-0 items-start gap-2 sm:gap-2.5";
