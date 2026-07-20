"use client";

import { useState } from "react";
import Image from "next/image";

type Folder = {
  id: string;
  name: string;
  color: string;
  tab: string;
  note: string;
  rotate: number;
  pos: React.CSSProperties;     // folder position within the stage
  noteAbove?: boolean;           // reveal note above instead of below
  noteShift: string;             // horizontal translate to keep note in bounds
};

// Folders = what's currently on my mind / in my creative backlog.
const folders: Folder[] = [
  {
    id: "side_projects",
    name: "side_projects/",
    color: "#F9C4D6",
    tab: "#F3ADC4",
    note: "half-built repos I swear I'll finish someday",
    rotate: -7,
    pos: { left: "2%", top: "2%", width: "17%" },
    noteShift: "-15%",
  },
  {
    id: "vibe_coding",
    name: "vibe_coding/",
    color: "#F7B98C",
    tab: "#F2A671",
    note: "shipping features by feel, not by spec",
    rotate: 9,
    pos: { left: "81%", top: "9%", width: "15%" },
    noteShift: "-85%",
  },
  {
    id: "ai_experiments",
    name: "ai_experiments/",
    color: "#A9D5F2",
    tab: "#8FC6EC",
    note: "poking at models to see what sticks",
    rotate: -11,
    pos: { left: "-3%", top: "59%", width: "19%" },
    noteAbove: true,
    noteShift: "-12%",
  },
  {
    id: "product_ideas",
    name: "product_ideas/",
    color: "#CDE96F",
    tab: "#BADE4F",
    note: "a notes app full of 2am “what if” moments",
    rotate: 6,
    pos: { left: "86%", top: "72%", width: "16%" },
    noteAbove: true,
    noteShift: "-88%",
  },
];

function FolderIcon({ color, tab }: { color: string; tab: string }) {
  return (
    <svg width="100%" viewBox="0 0 120 112" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      {/* tab (top-right) */}
      <rect x="62" y="6" width="50" height="28" rx="9" fill={tab} />
      {/* back body */}
      <rect x="8" y="18" width="108" height="90" rx="13" fill={tab} />
      {/* front pocket */}
      <rect className="folder-front" x="2" y="36" width="112" height="72" rx="13" fill={color} />
    </svg>
  );
}

function PlusDoodle({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style={style} aria-hidden="true">
      <rect x="11" y="2" width="8" height="26" rx="2.5" fill={color} />
      <rect x="2" y="11" width="26" height="8" rx="2.5" fill={color} />
    </svg>
  );
}

function PixelHeart({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <svg width="20" height="18" viewBox="0 0 9 8" fill="none" style={style} aria-hidden="true" shapeRendering="crispEdges">
      <path
        fill={color}
        d="M1 0h2v1H1zM6 0h2v1H6zM0 1h3v1H0zM6 1h3v1H6zM0 2h9v1H0zM0 3h9v1H0zM1 4h7v1H1zM2 5h5v1H2zM3 6h3v1H3zM4 7h1v1H4z"
      />
    </svg>
  );
}

export default function Workspace() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="relative mx-auto w-full"
      style={{ maxWidth: "500px", aspectRatio: "1 / 1.3" }}
    >
      {/* ── stage ── */}
      <div className="relative" style={{ width: "100%", height: "100%" }}>
        {/* decorative doodles — kept clear of the photo */}
        <PixelHeart color="#8FC6EC" style={{ position: "absolute", left: "1%", top: "38%" }} />
        <PlusDoodle color="#F9C4D6" style={{ position: "absolute", left: "48%", top: "0%", width: "24px", height: "24px" }} />
        <PlusDoodle color="#CDE96F" style={{ position: "absolute", left: "6%", top: "94%", width: "30px", height: "30px" }} />
        <PixelHeart color="#F2A671" style={{ position: "absolute", left: "95%", top: "42%" }} />

        {/* central photo — the hero element, nothing overlaps it */}
        <div
          className="absolute"
          style={{
            left: "27%",
            top: "16%",
            width: "46%",
            height: "46%",
            background: "#efefec",
            padding: "6px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            zIndex: 1,
          }}
        >
          <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "11px" }}>
            <Image src="/Avatar.jpg" alt="Aditi" fill className="object-cover" style={{ objectPosition: "center 38%" }} priority />
          </div>
        </div>

        {/* folders */}
        {folders.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              className="workspace-folder absolute flex flex-col items-center"
              style={{ ...f.pos, zIndex: isActive ? 30 : 5 }}
              aria-label={`${f.name} — ${f.note}`}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive((a) => (a === f.id ? null : a))}
              onFocus={() => setActive(f.id)}
              onBlur={() => setActive((a) => (a === f.id ? null : a))}
              onClick={() => setActive((a) => (a === f.id ? null : f.id))}
            >
              <span
                className="workspace-folder-icon block w-full"
                style={{ "--folder-rotate": `${f.rotate}deg` } as React.CSSProperties}
              >
                <FolderIcon color={f.color} tab={f.tab} />
              </span>

              <span
                className="workspace-folder-label"
                style={{ transform: `rotate(${f.rotate}deg)` }}
              >
                {f.name}
              </span>

              <span
                className="workspace-note"
                style={{
                  [f.noteAbove ? "bottom" : "top"]: "100%",
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? `translateX(${f.noteShift}) translateY(${f.noteAbove ? "-6px" : "6px"}) rotate(-2deg)`
                    : `translateX(${f.noteShift}) translateY(0) rotate(-2deg)`,
                }}
              >
                {f.note}
              </span>
            </button>
          );
        })}

        {/* caption — small handwritten annotation, highlighter stroke per line */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: "50%",
            top: "68%",
            transform: "translateX(-50%) rotate(-1deg)",
            zIndex: 20,
            width: "100%",
            fontFamily: "var(--font-caveat), cursive",
            fontWeight: 600,
            fontSize: "clamp(1rem, 4vw, 1.3rem)",
            lineHeight: 1.9,
            color: "#3a2b12",
          }}
        >
          <span className="workspace-highlight-line">Currently thinking about my next</span>
          <span className="workspace-highlight-line workspace-highlight-line--b">side project.</span>
        </div>
      </div>
    </div>
  );
}
