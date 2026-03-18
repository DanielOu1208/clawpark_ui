export type AgentTraitKind =
  | "code-generation"
  | "reasoning"
  | "speed"
  | "git"
  | "tool-calling"
  | "security"
  | "testing"
  | "documentation"
  | "deployment"
  | "data-analysis"
  | "monitoring"

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
      { kind: "speed", label: "Speed" },
      { kind: "tool-calling", label: "Tool-Calling" },
      { kind: "testing", label: "Testing" },
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
      { kind: "documentation", label: "Documentation" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "tool-calling", label: "Tool-Calling" },
      { kind: "data-analysis", label: "Data-Analysis" },
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
      { kind: "deployment", label: "Deployment" },
      { kind: "git", label: "Git" },
      { kind: "speed", label: "Speed" },
      { kind: "monitoring", label: "Monitoring" },
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
      { kind: "documentation", label: "Documentation" },
      { kind: "data-analysis", label: "Data-Analysis" },
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
      { kind: "monitoring", label: "Monitoring" },
      { kind: "speed", label: "Speed" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "tool-calling", label: "Tool-Calling" },
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
      { kind: "security", label: "Security" },
      { kind: "testing", label: "Testing" },
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "git", label: "Git" },
    ],
  },
  {
    slug: "nimbus-v2",
    name: "NIMBUS",
    version: "v2",
    generation: "Gen-2",
    summary: "Cloud Orchestration and Rollout Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "NIMBUS v2 OpenClaw agent",
    traits: [
      { kind: "deployment", label: "Deployment" },
      { kind: "monitoring", label: "Monitoring" },
      { kind: "speed", label: "Speed" },
      { kind: "git", label: "Git" },
    ],
  },
  {
    slug: "sentry-v3",
    name: "SENTRY",
    version: "v3",
    generation: "Gen-3",
    summary: "Security Audit and Guardrail Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "SENTRY v3 OpenClaw agent",
    traits: [
      { kind: "security", label: "Security" },
      { kind: "testing", label: "Testing" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "code-generation", label: "Code-Generation" },
    ],
  },
  {
    slug: "prism-v1",
    name: "PRISM",
    version: "v1",
    generation: "Gen-1",
    summary: "Dataset Profiling and Insight Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "PRISM v1 OpenClaw agent",
    traits: [
      { kind: "data-analysis", label: "Data-Analysis" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "documentation", label: "Documentation" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
  {
    slug: "beacon-v2",
    name: "BEACON",
    version: "v2",
    generation: "Gen-2",
    summary: "Observability and Alert Routing Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "BEACON v2 OpenClaw agent",
    traits: [
      { kind: "monitoring", label: "Monitoring" },
      { kind: "speed", label: "Speed" },
      { kind: "tool-calling", label: "Tool-Calling" },
      { kind: "reasoning", label: "Reasoning" },
    ],
  },
  {
    slug: "scribe-v2",
    name: "SCRIBE",
    version: "v2",
    generation: "Gen-2",
    summary: "API Spec and Changelog Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "SCRIBE v2 OpenClaw agent",
    traits: [
      { kind: "documentation", label: "Documentation" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "git", label: "Git" },
    ],
  },
  {
    slug: "anvil-v1",
    name: "ANVIL",
    version: "v1",
    generation: "Gen-1",
    summary: "Test Fixture and Regression Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "ANVIL v1 OpenClaw agent",
    traits: [
      { kind: "testing", label: "Testing" },
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "speed", label: "Speed" },
      { kind: "git", label: "Git" },
    ],
  },
  {
    slug: "orbit-v4",
    name: "ORBIT",
    version: "v4",
    generation: "Gen-4",
    summary: "Multi-Repo Release Train Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "ORBIT v4 OpenClaw agent",
    traits: [
      { kind: "deployment", label: "Deployment" },
      { kind: "git", label: "Git" },
      { kind: "reasoning", label: "Reasoning" },
      { kind: "tool-calling", label: "Tool-Calling" },
    ],
  },
  {
    slug: "lattice-v2",
    name: "LATTICE",
    version: "v2",
    generation: "Gen-2",
    summary: "Feature Flag and Experiment Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "LATTICE v2 OpenClaw agent",
    traits: [
      { kind: "data-analysis", label: "Data-Analysis" },
      { kind: "deployment", label: "Deployment" },
      { kind: "testing", label: "Testing" },
      { kind: "reasoning", label: "Reasoning" },
    ],
  },
  {
    slug: "bulwark-v1",
    name: "BULWARK",
    version: "v1",
    generation: "Gen-1",
    summary: "Dependency Hardening Patch Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "BULWARK v1 OpenClaw agent",
    traits: [
      { kind: "security", label: "Security" },
      { kind: "git", label: "Git" },
      { kind: "code-generation", label: "Code-Generation" },
      { kind: "testing", label: "Testing" },
    ],
  },
  {
    slug: "compass-v3",
    name: "COMPASS",
    version: "v3",
    generation: "Gen-3",
    summary: "Roadmap Breakdown and Execution Claw",
    imageSrc: "/lobster_transparent.png",
    imageAlt: "COMPASS v3 OpenClaw agent",
    traits: [
      { kind: "reasoning", label: "Reasoning" },
      { kind: "documentation", label: "Documentation" },
      { kind: "tool-calling", label: "Tool-Calling" },
      { kind: "deployment", label: "Deployment" },
    ],
  },
]

export function getAgentListingBySlug(slug: string) {
  return MARKETPLACE_LISTINGS.find((listing) => listing.slug === slug)
}
