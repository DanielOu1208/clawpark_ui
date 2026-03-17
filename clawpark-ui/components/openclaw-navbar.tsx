"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const itemBaseClass =
  "inline-flex min-h-9 items-center justify-center rounded-[10px] px-4 py-2 font-mono text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function OpenclawNavbar() {
  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList className="rounded-[10px] border border-white/10 bg-[var(--openclaw-glass)] p-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <NavigationMenuItem>
          <Link
            href="/"
            aria-current="page"
            className={cn(
              itemBaseClass,
              "border border-[var(--openclaw-border)] bg-[var(--openclaw-outline)] text-[var(--openclaw-text)]"
            )}
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button
            type="button"
            aria-disabled
            className={cn(
              itemBaseClass,
              "cursor-default border border-transparent bg-transparent text-[var(--openclaw-muted)] hover:bg-white/5 hover:text-[var(--openclaw-text)]"
            )}
          >
            Marketplace
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button
            type="button"
            aria-disabled
            className={cn(
              itemBaseClass,
              "cursor-default border border-transparent bg-transparent text-[var(--openclaw-muted)] hover:bg-white/5 hover:text-[var(--openclaw-text)]"
            )}
          >
            Lab
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
