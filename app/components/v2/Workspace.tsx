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
    rotate: -3,
    pos: { left: "0%", top: "1%", width: "24%" },
    noteShift: "-20%",
  },
  {
    id: "vibe_coding",
    name: "vibe_coding/",
    color: "#F7B98C",
    tab: "#F2A671",
    note: "shipping features by feel, not by spec",
    rotate: 3,
    pos: { left: "76%", top: "3%", width: "24%" },
    noteShift: "-80%",
  },
  {
    id: "ai_experiments",
    name: "ai_experiments/",
    color: "#A9D5F2",
    tab: "#8FC6EC",
    note: "poking at models to see what sticks",
    rotate: -2,
    pos: { left: "-1%", top: "68%", width: "24%" },
    noteAbove: true,
    noteShift: "-20%",
  },
  {
    id: "product_ideas",
    name: "product_ideas/",
    color: "#CDE96F",
    tab: "#BADE4F",
    note: "a notes app full of 2am “what if” moments",
    rotate: 2,
    pos: { left: "77%", top: "70%", width: "24%" },
    noteAbove: true,
    noteShift: "-80%",
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

function ClickCursor({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="52" height="58" viewBox="0 0 52 58" fill="none" style={style} aria-hidden="true">
      {/* click sparks */}
      <path d="M9 12 L4 7 M20 6 L20 -1 M32 12 L37 7" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
      {/* hand */}
      <path
        d="M18 15 a3 3 0 0 1 6 0 v13 l3 -1 a3 3 0 0 1 4 2.6 l0 1 3 -0.6 a3 3 0 0 1 3.5 2.7 l0 1 2.5 -0.4 a3 3 0 0 1 3 3 v7 a11 11 0 0 1 -11 11 h-6 a10 10 0 0 1 -8.6 -5 l-6 -10 a3 3 0 0 1 5 -3.2 l2.6 3 z"
        fill="#fff"
        stroke="#111"
        strokeWidth="2.2"
        strokeLinejoin="round"
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
            <Image src="/Avatar.jpg" alt="Aditi" fill className="object-cover" style={{ objectPosition: "center 18%" }} priority />
          </div>
        </div>

        {/* folders */}
        {folders.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              className="workspace-folder absolute"
              style={{ ...f.pos, transform: `rotate(${f.rotate}deg)`, zIndex: isActive ? 30 : 5 }}
              aria-label={`${f.name} — ${f.note}`}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive((a) => (a === f.id ? null : a))}
              onFocus={() => setActive(f.id)}
              onBlur={() => setActive((a) => (a === f.id ? null : a))}
              onClick={() => setActive((a) => (a === f.id ? null : f.id))}
            >
              <span className="workspace-folder-icon block w-full">
                <FolderIcon color={f.color} tab={f.tab} />
              </span>

              <span
                className="workspace-folder-label"
                style={{ position: "absolute", left: "50%", top: "62%", transform: "translateX(-50%)" }}
              >
                {f.name}
              </span>

              <span
                className="workspace-note"
                style={{
                  [f.noteAbove ? "bottom" : "top"]: "94%",
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

        {/* caption — small handwritten annotation with a highlighter mark */}
        <div
          className="absolute flex justify-center"
          style={{ left: "50%", top: "66%", transform: "translateX(-50%)", zIndex: 20, width: "100%" }}
        >
          <p
            className="workspace-highlight"
            style={{
              display: "inline-block",
              maxWidth: "clamp(140px, 34vw, 200px)",
              margin: 0,
              textAlign: "center",
              fontFamily: "var(--font-caveat), cursive",
              fontWeight: 600,
              fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
              lineHeight: 1.3,
              color: "#3a2b12",
              transform: "rotate(-1.2deg)",
            }}
          >
            Currently thinking about my next side project.
          </p>
        </div>

        {/* click cursor */}
        <ClickCursor style={{ position: "absolute", left: "62%", top: "73%", width: "clamp(30px, 6vw, 38px)", height: "auto", zIndex: 21 }} />
      </div>
    </div>
  );
}
