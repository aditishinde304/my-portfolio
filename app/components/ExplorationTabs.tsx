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
      style={{ background: "var(--cs-bg)", border: "1px solid var(--cs-border)" }}
    >
      {/* Tab bar */}
      <div
        className="inline-flex w-full rounded-full p-1 mb-6"
        style={{ background: "var(--cs-hover-bg)" }}
        role="tablist"
        aria-label="Exploration iterations"
      >
        {iterations.map((iteration, i) => (
          <button
            key={iteration.tabLabel}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className="flex-1 text-[16px] font-medium rounded-full transition-colors"
            style={{
              padding: "10px 16px",
              background: active === i ? "var(--cs-fg)" : "transparent",
              color: active === i ? "var(--cs-bg)" : "var(--cs-secondary)",
            }}
          >
            {iteration.tabLabel}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-2 pb-2 pt-6 md:px-4 md:pb-4 md:pt-10">
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
              <p className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: "var(--cs-blue)" }}>
                Idea
              </p>
              <p className="text-[18px] font-medium leading-snug mb-1" style={{ color: "var(--cs-fg)" }}>
                {current.title}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {current.idea}
              </p>
            </div>

            <div className="py-6" style={{ borderTop: "1px solid var(--cs-border)" }}>
              <p className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: "var(--cs-green)" }}>
                Why I explored it
              </p>
              <p className="text-[18px] font-medium leading-snug mb-1" style={{ color: "var(--cs-fg)" }}>
                {current.whyTitle}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {current.why}
              </p>
            </div>

            <div className="pt-6" style={{ borderTop: "1px solid var(--cs-border)" }}>
              <p className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: "var(--cs-red)" }}>
                Why I moved away
              </p>
              <p className="text-[18px] font-medium leading-snug mb-1" style={{ color: "var(--cs-fg)" }}>
                {current.moveAwayTitle}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {current.moveAway}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
