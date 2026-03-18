export type AgentTraitKind =
  | "code-generation"
  | "reasoning"
  | "speed"
  | "git"
  | "tool-calling"

export type AgentTrait = {
  kind: AgentTraitKind
  label: string
}

export type AgentListing = {
  slug: string
  name: string
  version: string
  generation: string
  summary: string
  imageSrc?: string
  imageAlt?: string
  traits: AgentTrait[]
}

export const MARKETPLACE_LISTINGS: AgentListing[] = [
  {
    slug: "spark-v2",
    name: "SPARK",
    version: "v2",
    generation: "Gen-2",
    summary: "Rapid-Prototyping Code Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "SPARK v2 OpenClaw agent",
    traits: [
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "speed", label: "Speed" },
      { kind: "git", label: "Git" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
  {
    slug: "quill-v1",
    name: "QUILL",
    version: "v1",
    generation: "Gen-1",
    summary: "Long-Context Documentation Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "QUILL v1 OpenClaw agent",
    traits: [
      { kind: "reasoning", label: "Reasoning" },
      { kind: "tool-calling", label: "Tool-Calling" },
      { kind: "code-generation", label: "Code-Generation" },
    ],
  },
  {
    slug: "forge-v3",
    name: "FORGE",
    version: "v3",
    generation: "Gen-3",
    summary: "Autonomous CI/CD Build Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "FORGE v3 OpenClaw agent",
    traits: [
      { kind: "git", label: "Git" },
      { kind: "speed", label: "Speed" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
  {
    slug: "atlas-v2",
    name: "ATLAS",
    version: "v2",
    generation: "Gen-2",
    summary: "Research and Planning Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "ATLAS v2 OpenClaw agent",
    traits: [
      { kind: "reasoning", label: "Reasoning" },
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
  {
    slug: "pulse-v1",
    name: "PULSE",
    version: "v1",
    generation: "Gen-1",
    summary: "Incident Triage Response Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "PULSE v1 OpenClaw agent",
    traits: [
      { kind: "speed", label: "Speed" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "git", label: "Git" },
    ],
  },
  {
    slug: "cipher-v4",
    name: "CIPHER",
    version: "v4",
    generation: "Gen-4",
    summary: "Secure Refactor and Test Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "CIPHER v4 OpenClaw agent",
    traits: [
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "git", label: "Git" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
]

export function getAgentListingBySlug(slug: string) {
  return MARKETPLACE_LISTINGS.find((listing) => listing.slug === slug)
}
