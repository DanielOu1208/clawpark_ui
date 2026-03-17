"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/lab", label: "Lab" },
];

const itemBaseClass =
  "inline-flex min-h-9 items-center justify-center rounded-[10px] border border-transparent px-4 py-2 font-mono text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function getActiveHref(pathname: string): string | null {
  if (pathname === "/") {
    return "/";
  }

  const prefixedItem = NAV_ITEMS.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href)
  );

  return prefixedItem?.href ?? null;
}

export function OpenclawNavbar() {
  const pathname = usePathname();
  const activeHref = useMemo(() => getActiveHref(pathname), [pathname]);

  const listRef = useRef<HTMLUListElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const hasPositionedIndicator = useRef(false);
  const quickToX = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const quickToY = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const quickToWidth = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const quickToHeight = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getIndicatorDuration = useCallback(() => {
    return prefersReducedMotion ? 0.12 : 0.28;
  }, [prefersReducedMotion]);

  const moveIndicator = useCallback(
    (href: string | null, instant = false) => {
      const indicator = indicatorRef.current;
      const list = listRef.current;

      if (!indicator || !list || !href) {
        if (indicator) {
          gsap.to(indicator, {
            opacity: 0,
            duration: instant ? 0 : 0.15,
            overwrite: true,
          });
        }

        return;
      }

      const item = itemRefs.current[href];
      if (!item) {
        return;
      }

      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const x = itemRect.left - listRect.left;
      const y = itemRect.top - listRect.top;
      const width = itemRect.width;
      const height = itemRect.height;

      if (instant) {
        gsap.set(indicator, {
          x,
          y,
          width,
          height,
          opacity: 1,
        });
        return;
      }

      if (
        quickToX.current &&
        quickToY.current &&
        quickToWidth.current &&
        quickToHeight.current
      ) {
        quickToX.current(x);
        quickToY.current(y);
        quickToWidth.current(width);
        quickToHeight.current(height);
        gsap.set(indicator, {
          opacity: 1,
        });
      } else {
        gsap.to(indicator, {
          x,
          y,
          width,
          height,
          opacity: 1,
          duration: getIndicatorDuration(),
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    },
    [getIndicatorDuration]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);
    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) {
      return;
    }

    quickToX.current = gsap.quickTo(indicator, "x", {
      duration: getIndicatorDuration(),
      ease: "power3.out",
      overwrite: true,
    });

    quickToY.current = gsap.quickTo(indicator, "y", {
      duration: getIndicatorDuration(),
      ease: "power3.out",
      overwrite: true,
    });

    quickToWidth.current = gsap.quickTo(indicator, "width", {
      duration: getIndicatorDuration(),
      ease: "power3.out",
      overwrite: true,
    });

    quickToHeight.current = gsap.quickTo(indicator, "height", {
      duration: getIndicatorDuration(),
      ease: "power3.out",
      overwrite: true,
    });

    return () => {
      quickToX.current = null;
      quickToY.current = null;
      quickToWidth.current = null;
      quickToHeight.current = null;
    };
  }, [getIndicatorDuration]);

  useLayoutEffect(() => {
    const shouldMoveInstantly = !hasPositionedIndicator.current;
    moveIndicator(activeHref, shouldMoveInstantly);
    hasPositionedIndicator.current = true;
  }, [activeHref, moveIndicator]);

  useEffect(() => {
    const handleResize = () => {
      moveIndicator(activeHref, true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeHref, moveIndicator]);

  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList
        ref={listRef}
        className="relative rounded-[10px] border border-white/10 bg-[var(--openclaw-glass)] p-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        onPointerLeave={() => moveIndicator(activeHref)}
        onBlurCapture={(event) => {
          const nextFocused = event.relatedTarget as Node | null;
          if (!nextFocused || !event.currentTarget.contains(nextFocused)) {
            moveIndicator(activeHref);
          }
        }}
      >
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 rounded-[10px] border border-[var(--openclaw-border)] bg-[var(--openclaw-outline)] opacity-0"
        />

        {NAV_ITEMS.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <NavigationMenuItem key={item.href}>
              <Link
                href={item.href}
                ref={(node) => {
                  itemRefs.current[item.href] = node;
                }}
                aria-current={isActive ? "page" : undefined}
                onPointerEnter={() => moveIndicator(item.href)}
                onFocus={() => moveIndicator(item.href)}
                className={cn(
                  itemBaseClass,
                  "relative z-10 bg-transparent",
                  isActive
                    ? "text-[var(--openclaw-text)]"
                    : "text-[var(--openclaw-muted)] hover:text-[var(--openclaw-text)]"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
