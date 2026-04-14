"use client";

import { useState } from "react";
import {
  wfControlColumn,
  wfControlLabel,
  wfControlShell,
  wfToggleDevice,
} from "@/lib/wireframe-ui";
import { IconMonitor, IconPhone } from "@/components/wireframes/PreviewDeviceIcons";

/** Step 7: desktop vs ~390px column preview for routes without wireframe panels. */
export function ReviewViewportToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div>
      <div className={`mb-8 ${wfControlShell}`}>
        <div className={wfControlColumn}>
          <span className={wfControlLabel}>Device</span>
          <div className="flex max-w-[220px] min-w-0 flex-1 flex-col gap-1">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={
                device === "desktop"
                  ? wfToggleDevice.active
                  : wfToggleDevice.inactive
              }
            >
              <IconMonitor className="shrink-0 opacity-90" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={
                device === "mobile"
                  ? wfToggleDevice.active
                  : wfToggleDevice.inactive
              }
            >
              <IconPhone className="shrink-0 opacity-90" />
              Mobile
            </button>
            <p className="mt-0.5 text-[10px] leading-snug text-neutral-500">
              Preview width only: full column vs ~390px for Step 7 breakpoint QA
              (compare to subscription list / order detail toggles).
            </p>
          </div>
        </div>
      </div>
      <div className={device === "mobile" ? "mx-auto max-w-[390px]" : ""}>
        {children}
      </div>
    </div>
  );
}
