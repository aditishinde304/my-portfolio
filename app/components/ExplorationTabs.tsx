"use client";

import { useState } from "react";
import Image from "next/image";

export interface ExplorationIteration {
  tabLabel: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
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
    <div
      className="rounded-2xl p-3 md:p-4"
      style={{ background: "var(--background)", border: "1px solid var(--border)" }}
    >
      {/* Tab bar */}
      <div
        className="inline-flex w-full rounded-full p-1 mb-6"
        style={{ background: "var(--hover-bg)" }}
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
      <div className="px-2 pb-2 md:px-4 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 items-center">
          <Image
            src={current.image}
            alt={current.alt}
            width={current.imageWidth}
            height={current.imageHeight}
            quality={100}
            className="w-full h-auto block"
          />

          <div className="flex flex-col">
            <div className="pb-6">
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

            <div className="py-6" style={{ borderTop: "1px solid var(--border)" }}>
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

            <div className="pt-6" style={{ borderTop: "1px solid var(--border)" }}>
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
