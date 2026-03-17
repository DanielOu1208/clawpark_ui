import { OpenclawNavbar } from "@/components/openclaw-navbar";

export default function LabPage() {
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

      <main className="mx-auto flex min-h-screen w-full max-w-[1040px] flex-col items-center justify-center px-6 pt-24 text-center sm:pt-28">
        <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.95] text-white">
          Lab
        </h1>
        <p className="mt-4 max-w-[720px] font-mono text-[clamp(0.95rem,1.8vw,1.1rem)] text-[var(--openclaw-muted)]">
          Lab is coming soon. This stub route is live to validate active navigation and hover indicator behavior.
        </p>
      </main>
    </div>
  );
}
