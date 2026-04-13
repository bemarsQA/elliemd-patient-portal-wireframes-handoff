"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2"
              aria-label="EllieMD wireframes home"
            >
              <Image
                src="/ellie-md-logo.png"
                alt="ellie MD logo"
                width={152}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <span
              className="hidden h-6 w-px shrink-0 bg-neutral-200 sm:block"
              aria-hidden
            />
            <span className="hidden min-w-0 text-sm text-neutral-600 sm:inline">
              Patient Portal · Wireframes
            </span>
          </div>
          <nav
            className="flex flex-wrap justify-end gap-1 text-sm"
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
                  className={
                    active
                      ? "rounded-full bg-[#141B34] px-3 py-1.5 font-medium text-white"
                      : "rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto w-full max-w-5xl px-4">{children}</div>
    </div>
  );
}
