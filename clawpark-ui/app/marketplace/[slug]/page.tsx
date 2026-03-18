import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

import { OpenclawNavbar } from "@/components/openclaw-navbar"
import { Badge } from "@/components/ui/badge"
import { getAgentListingBySlug } from "@/lib/marketplace-listings"

type AgentDetailPageProps = {
  params: Promise<{ slug: string }>
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { slug } = await params
  const listing = getAgentListingBySlug(slug)

  if (!listing) {
    notFound()
  }

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

      <main className="mx-auto flex min-h-screen w-full max-w-[1040px] flex-col px-6 pb-16 pt-24 sm:pt-28">
        <Link
          href="/marketplace"
          className="inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/10 bg-[var(--openclaw-glass)] px-3 py-2 font-mono text-xs text-[var(--openclaw-text)] transition-colors hover:border-white/30"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          Back to marketplace
        </Link>

        <section className="mt-6 rounded-[14px] border border-white/10 bg-[var(--openclaw-glass)] p-6">
          <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-[10px] border border-white/10 bg-black/25">
            {listing.imageSrc ? (
              <Image
                src={listing.imageSrc}
                alt={listing.imageAlt ?? `${listing.name} ${listing.version}`}
                fill
                sizes="(max-width: 1040px) 100vw, 1040px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_65%)]">
                <span className="rounded-md border border-dashed border-white/20 px-2 py-1 font-mono text-[10px] text-[var(--openclaw-muted)]">
                  No image configured
                </span>
              </div>
            )}
          </div>

          <h1 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[0.95] text-white">
            {listing.name} {listing.version}
          </h1>
          <p className="mt-3 font-mono text-sm text-white">{listing.generation}</p>
          <p className="mt-1 font-mono text-sm text-[var(--openclaw-muted)]">
            {listing.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {listing.traits.map((trait, index) => (
              <Badge
                key={`${listing.slug}-${trait.kind}-${trait.label}-${index}`}
                variant="outline"
                className="border-white/30 bg-white/10 font-mono text-[11px] text-white"
              >
                {trait.label}
              </Badge>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs text-[var(--openclaw-muted)]">
            Detailed listing content is scaffolded and ready for profile,
            pricing, and capability sections.
          </p>
        </section>
      </main>
    </div>
  )
}
