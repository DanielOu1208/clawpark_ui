import Image from "next/image"
import {
  Bot,
  Brain,
  Code2,
  Github,
  type LucideIcon,
  Rocket,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type {
  AgentListing,
  AgentTrait,
  AgentTraitKind,
} from "@/lib/marketplace-listings"
import { cn } from "@/lib/utils"

export type { AgentListing, AgentTrait, AgentTraitKind }

export type AgentListingCardProps = {
  agent: AgentListing
  className?: string
}

type TraitVisual = {
  icon: LucideIcon
  className: string
}

const traitVisualMap: Record<AgentTraitKind, TraitVisual> = {
  "code-generation": {
    icon: Code2,
    className: "border-[rgba(61,151,235,0.65)] bg-[rgba(61,151,235,0.19)]",
  },
  reasoning: {
    icon: Brain,
    className: "border-[rgba(207,207,207,0.65)] bg-[rgba(215,215,215,0.19)]",
  },
  speed: {
    icon: Rocket,
    className: "border-[rgba(235,61,61,0.65)] bg-[rgba(235,61,61,0.19)]",
  },
  git: {
    icon: Github,
    className: "border-[rgba(235,134,61,0.65)] bg-[rgba(235,134,61,0.19)]",
  },
  "tool-calling": {
    icon: Bot,
    className: "border-[rgba(207,207,207,0.65)] bg-[rgba(215,215,215,0.19)]",
  },
}

function AgentTraitChip({ trait }: { trait: AgentTrait }) {
  const { icon: Icon, className } = traitVisualMap[trait.kind]

  return (
    <Badge
      variant="outline"
      className={cn(
        "h-5 rounded-[8px] border px-2 py-0.5 font-mono text-[12px] leading-4 text-[var(--openclaw-cta)]",
        className
      )}
    >
      <Icon aria-hidden="true" />
      <span>{trait.label}</span>
    </Badge>
  )
}

export function AgentListingCard({ agent, className }: AgentListingCardProps) {
  return (
    <Card
      className={cn(
        "h-[315px] w-[226px] gap-0 rounded-[10px] border border-white/10 bg-[var(--openclaw-glass)] p-4 text-[var(--openclaw-text)] ring-0",
        className
      )}
    >
      <div className="flex h-full flex-col justify-end">
        <div className="relative h-[129px] w-full shrink-0 overflow-hidden rounded-[8px] ">
          {agent.imageSrc ? (
            <Image
              src={agent.imageSrc}
              alt={agent.imageAlt ?? `${agent.name} ${agent.version} listing image`}
              fill
              sizes="226px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_65%)]">
              <span className="rounded-md border border-dashed border-white/20 px-2 py-1 font-mono text-[10px] text-[var(--openclaw-muted)]">
                Insert image
              </span>
            </div>
          )}
        </div>

        <div className="flex h-[154px] flex-col justify-between">
          <div className="overflow-hidden">
            <h2 className="font-display text-[24px] leading-6 text-white">
              {agent.name} {agent.version}
            </h2>
          </div>

          <div className="font-mono text-[10px] leading-4 text-white">
            <p>{agent.generation}</p>
            <p className="max-w-[180px]">{agent.summary}</p>
          </div>

          <div className="flex h-[82px] flex-wrap content-start items-start gap-x-[13px] gap-y-[10px] overflow-hidden">
            {agent.traits.map((trait, index) => (
              <AgentTraitChip
                key={`${agent.slug}-${trait.kind}-${trait.label}-${index}`}
                trait={trait}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
