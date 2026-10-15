"use client";

import VideoPlayer from "@/app/components/VideoPlayer";

// A single auto-looping prototype video inside the outer frame, with the
// observation below it. (No pills/tabs: each exploration has one prototype.)
export default function IterationGroup({
  video,
  poster,
  observationLabel,
  observationTone,
  observation,
}: {
  video: string;
  poster: string;
  observationLabel: string;
  observationTone: "blue" | "red";
  observation: string;
}) {
  return (
    <div>
      <div
        className="rounded-2xl p-3 md:p-4"
        style={{ background: "var(--cs-bg)", border: "1px solid var(--cs-border)" }}
      >
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
          <VideoPlayer src={video} poster={poster} alwaysPlay className="w-full h-auto block" />
        </div>

        <div className="px-2 pt-8 pb-2 md:px-4 md:pb-3">
          <p
            className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2"
            style={{ color: observationTone === "red" ? "var(--cs-red)" : "var(--cs-blue)" }}
          >
            {observationLabel}
          </p>
          <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
            {observation}
          </p>
        </div>
      </div>
    </div>
  );
}
