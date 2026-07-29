import Link from "next/link";

export default function Interactions() {
  return (
    <main className="max-w-[680px] mx-auto px-8 py-20 md:py-28">
      <div className="mb-12">
        <Link
          href="/"
          className="text-[13px] mb-8 inline-block link-dashed"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>
        <h1
          className="text-[16px] font-semibold tracking-[-0.01em] mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Interactions
        </h1>
        <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
          How I think about product details — small interactions, flows, UI states and transitions I&apos;ve designed and shipped.
        </p>
        <p className="text-[16px] leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
          Coming soon.
        </p>
      </div>
    </main>
  );
}
