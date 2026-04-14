"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { wfNav } from "@/lib/wireframe-ui";

const NAV = [
  { href: "/", label: "Overview" },
  { href: "/subscription-list", label: "Subscription list" },
  { href: "/order-detail", label: "Order detail" },
  { href: "/edge-states", label: "Edge states" },
  { href: "/sources", label: "Sources" },
] as const;

export function WireframeChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white text-[14px] text-[#141B34]">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="EllieMD wireframes home"
            >
              <Image
                src="/ellie-md-logo.png"
                alt="ellie MD logo"
                width={132}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <span
              className="hidden h-5 w-px shrink-0 bg-neutral-200 sm:block"
              aria-hidden
            />
            <span className="hidden min-w-0 text-sm text-neutral-400 sm:inline">
              Patient Portal · Wireframes
            </span>
          </div>
          <nav
            className="-mr-1 flex max-w-[min(100%,42rem)] flex-wrap items-center justify-end gap-x-0.5 gap-y-1 sm:max-w-none sm:flex-nowrap sm:gap-x-1"
            aria-label="Wireframe sections"
          >
            {NAV.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? wfNav.active : wfNav.inactive}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">{children}</div>
    </div>
  );
}
