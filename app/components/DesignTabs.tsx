"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";

export interface DesignTabIteration {
  tabLabel: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
}

export default function DesignTabs({
  iterations,
  footer,
}: {
  iterations: DesignTabIteration[];
  footer?: ReactNode;
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
        aria-label="Design iterations"
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
              background: active === i ? "var(--foreground)" : "transparent",
              color: active === i ? "var(--background)" : "var(--muted)",
            }}
          >
            {iteration.tabLabel}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-2 pb-2 pt-6 md:px-4 md:pb-4 md:pt-10 flex justify-center">
        <Image
          src={current.image}
          alt={current.alt}
          width={current.imageWidth}
          height={current.imageHeight}
          quality={100}
          className="w-full h-auto block"
          style={{ maxWidth: "320px" }}
        />
      </div>

      {footer && (
        <div className="px-2 pb-2 pt-8 md:px-4 md:pb-4">{footer}</div>
      )}
    </div>
  );
}
