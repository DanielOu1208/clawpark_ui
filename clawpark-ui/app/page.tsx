import Image from "next/image";

import { Button } from "@/components/ui/button";
import { OpenclawNavbar } from "@/components/openclaw-navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-[var(--openclaw-text)] lg:h-dvh lg:overflow-y-hidden">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto h-16 w-full max-w-[1440px] sm:h-20">
        <p className="pointer-events-auto absolute left-0 top-0 font-display text-[20px] leading-none text-white sm:text-[24px]">
          ClawPark
        </p>
        <div className="pointer-events-auto absolute left-1/2 top-3 -translate-x-1/2 sm:top-4">
          <OpenclawNavbar />
        </div>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-[clamp(0.65rem,2.2dvh,1.8rem)] px-3 pb-8 pt-16 sm:px-6 sm:pt-20 lg:h-dvh lg:min-h-0 lg:pb-4 lg:pt-[76px]">
        <div className="relative aspect-[868.719/567.888] w-full max-w-[869px] max-h-[clamp(240px,52dvh,568px)] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <Image
            src="/openclaw-hero-v2.jpg"
            alt="Chrome robotic claw agent"
            fill
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 869px"
            className="object-contain object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(84px,15dvh,180px)] bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <section className="flex max-w-[1040px] flex-col items-center text-center">
          <h1 className="font-display text-white">
            <span className="block text-[clamp(2.1rem,5.4vw,4.1rem)] leading-[0.95]">
              ClawPark
            </span>
            <span className="mt-[clamp(0.35rem,1dvh,0.85rem)] block text-[clamp(1.55rem,4vw,2.95rem)] leading-[1.05]">
              Partake in the evolution of OpenClaw agents
            </span>
          </h1>
          <p className="mt-[clamp(0.55rem,1.65dvh,1.25rem)] max-w-[960px] font-mono text-[clamp(0.95rem,1.45vw,1.25rem)] leading-[1.3] text-white">
            Buy, sell, and synthesize OpenClaw agents in a living ecosystem of
            intelligence.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-[clamp(0.8rem,2.4dvh,2rem)] min-h-9 rounded-[10px] border-[var(--openclaw-border)] bg-[var(--openclaw-glass)] px-4 py-2 font-mono text-sm text-[var(--openclaw-cta)] hover:bg-white/15 hover:text-white"
          >
            Get Started
          </Button>
        </section>
      </main>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </div>
  );
}
