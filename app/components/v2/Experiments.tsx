"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer";

const experiments = [
  { id: "game", video: "/Pixel Game Portfolio.mp4" },
  { id: "postcard", video: "/Postcard.mp4" },
  { id: "focus-mode", video: "/Focus Mode.mp4" },
  { id: "carousel", video: "/Scroll animation architecture website (2).mp4" },
];

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Experiments() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingBottom: "100px" }}>
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
        <h2
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
            color: "#111",
          }}
        >
          Experiments
        </h2>
        <a
          href="/experiments"
          className="hero-nav-link text-[16px]"
          style={{ color: "#666" }}
        >
          View more
        </a>
      </div>
      <p className="text-[18px]" style={{ color: "#666", marginTop: "-8px", marginBottom: "48px" }}>
        Small builds and interaction explorations outside of work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
        {experiments.map((exp) => (
          <a
            key={exp.id}
            href="/experiments"
            className="projects-row group block relative"
            style={{ background: "#eeeeec", borderRadius: "18px", padding: "10px" }}
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <div className="projects-card relative overflow-hidden rounded-2xl">
              <VideoPlayer
                src={exp.video}
                className="projects-card-img w-full h-auto block"
              />
            </div>
            <span
              aria-hidden
              className="experiments-view-pill inline-flex items-center"
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                opacity: hoveredId === exp.id ? 1 : 0,
                pointerEvents: "none",
              }}
            >
              View <EyeIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
