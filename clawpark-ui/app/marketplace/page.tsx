import Link from "next/link"

import { AgentListingCard } from "@/components/marketplace/agent-listing-card"
import { OpenclawNavbar } from "@/components/openclaw-navbar"
import { MARKETPLACE_LISTINGS } from "@/lib/marketplace-listings"

export default function MarketplacePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-[var(--openclaw-text)]">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto h-16 w-full sm:h-20">
        <p className="pointer-events-auto absolute left-4 top-4 font-display text-[20px] leading-none text-white sm:text-[24px]">
          ClawPark
        </p>
        <div className="pointer-events-auto absolute left-1/2 top-3 -translate-x-1/2 sm:top-4">
          <OpenclawNavbar />
        </div>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-[1160px] flex-col px-6 pb-16 pt-24 sm:pt-28">
        <section className="mx-auto w-full max-w-[1040px]">
          <div className="text-center">
            <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.95] text-white">
              Marketplace
            </h1>
            <p className="mx-auto mt-4 max-w-[760px] font-mono text-[clamp(0.95rem,1.8vw,1.1rem)] text-[var(--openclaw-muted)]">
              Discover unique OpenClaw agents, compare specialized traits, and
              insert agent-specific preview images through listing data.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(226px,1fr))] justify-items-center gap-6">
            {MARKETPLACE_LISTINGS.map((agent) => (
              <Link
                key={agent.slug}
                href={`/marketplace/${agent.slug}`}
                className="group rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <AgentListingCard
                  agent={agent}
                  className="transition-colors duration-200 group-hover:border-white/25 group-focus-visible:border-white/35"
                />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
