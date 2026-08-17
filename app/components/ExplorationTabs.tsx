"use client";

import { useState } from "react";
import Image from "next/image";

export interface ExplorationIteration {
  tabLabel: string;
  image: string;
  alt: string;
  title: string;
  idea: string;
  whyTitle: string;
  why: string;
  moveAwayTitle: string;
  moveAway: string;
}

export default function ExplorationTabs({
  iterations,
}: {
  iterations: ExplorationIteration[];
}) {
  const [active, setActive] = useState(0);
  const current = iterations[active];

  return (
    <div>
      {/* Tab bar */}
      <div
        className="inline-flex w-full rounded-full p-1 mb-6"
        style={{ background: "var(--hover-bg)", border: "1px solid var(--border)" }}
        role="tablist"
        aria-label="Exploration iterations"
      >
        {iterations.map((iteration, i) => (
          <button
            key={iteration.tabLabel}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className="flex-1 text-[14px] font-medium rounded-full transition-colors"
            style={{
              padding: "10px 16px",
              background: active === i ? "var(--foreground)" : "transparent",
              color: active === i ? "var(--background)" : "var(--muted)",
            }}
          >
            {iteration.tabLabel}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{ background: "var(--background)", border: "1px solid var(--border)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 items-start">
          <div className="rounded-2xl overflow-hidden" style={{ background: "var(--hover-bg)" }}>
            <Image
              src={current.image}
              alt={current.alt}
              width={1071}
              height={1474}
              quality={100}
              className="w-full h-auto block"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[13px] font-medium tracking-[0.04em] uppercase mb-2" style={{ color: "#3B82F6" }}>
                Idea
              </p>
              <p className="text-[17px] font-medium leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                {current.title}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {current.idea}
              </p>
            </div>

            <div>
              <p className="text-[13px] font-medium tracking-[0.04em] uppercase mb-2" style={{ color: "#16A34A" }}>
                Why I explored it
              </p>
              <p className="text-[15px] font-medium leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                {current.whyTitle}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {current.why}
              </p>
            </div>

            <div>
              <p className="text-[13px] font-medium tracking-[0.04em] uppercase mb-2" style={{ color: "#DC2626" }}>
                Why I moved away
              </p>
              <p className="text-[15px] font-medium leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                {current.moveAwayTitle}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {current.moveAway}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
