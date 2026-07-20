"use client";

import { useState } from "react";
import { ScribbleUnderline } from "./Doodles";

type Folder = {
  id: string;
  name: string;
  color: string;
  tab: string;
  note: string;
  rotate: number;
};

// Folders = what's currently on my mind / in my creative backlog.
const folders: Folder[] = [
  { id: "side_projects",        name: "side_projects/",         color: "#F7B8C8", tab: "#F0A0B6", note: "half-built repos I swear I'll finish someday",  rotate: -3 },
  { id: "vibe_coding",          name: "vibe_coding/",           color: "#F6B98A", tab: "#F0A56E", note: "shipping features by feel, not by spec",        rotate:  2 },
  { id: "ai_experiments",       name: "ai_experiments/",        color: "#A9D3F0", tab: "#8DC3EA", note: "poking at models to see what sticks",           rotate: -2 },
  { id: "product_ideas",        name: "product_ideas/",         color: "#C9E870", tab: "#B7DD50", note: "a notes app full of 2am “what if” moments",     rotate:  3 },
  { id: "creative_tools",       name: "creative_tools/",        color: "#D8C0EE", tab: "#C6A6E6", note: "tiny tools that make design more fun",          rotate: -2 },
  { id: "things_i_should_build",name: "things_i_should_build/", color: "#F5DE7E", tab: "#EED258", note: "the guilt folder. it keeps growing.",           rotate:  2 },
];

function FolderIcon({ color, tab }: { color: string; tab: string }) {
  return (
    <svg width="120" height="94" viewBox="0 0 120 94" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      {/* tab */}
      <rect x="10" y="8" width="44" height="26" rx="8" fill={tab} />
      {/* back body */}
      <rect x="6" y="20" width="108" height="70" rx="11" fill={tab} />
      {/* front pocket */}
      <rect className="folder-front" x="2" y="34" width="116" height="56" rx="11" fill={color} />
    </svg>
  );
}

function Sparkle({ style, color = "#F6B98A" }: { style?: React.CSSProperties; color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={style} aria-hidden="true">
      <path d="M11 0 C 12 6 16 10 22 11 C 16 12 12 16 11 22 C 10 16 6 12 0 11 C 6 10 10 6 11 0 Z" fill={color} />
    </svg>
  );
}

function PixelHeart({ style, color = "#F0A0B6" }: { style?: React.CSSProperties; color?: string }) {
  return (
    <svg width="18" height="16" viewBox="0 0 9 8" fill="none" style={style} aria-hidden="true" shapeRendering="crispEdges">
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
    <div className="relative w-full">
      {/* decorative doodles */}
      <Sparkle style={{ position: "absolute", top: "40px", right: "18px" }} color="#F0A0B6" />
      <PixelHeart style={{ position: "absolute", top: "150px", left: "-6px" }} color="#8DC3EA" />
      <PixelHeart style={{ position: "absolute", bottom: "40px", right: "6px" }} color="#F0A56E" />
      <Sparkle style={{ position: "absolute", bottom: "0px", left: "40px" }} color="#C9E870" />

      {/* window title bar */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="flex gap-1.5">
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#F0A0B6" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#F5DE7E" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#C9E870" }} />
        </span>
        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "#9a9a96", letterSpacing: "0.02em" }}>
          ~/aditi/brain
        </span>
      </div>

      {/* heading */}
      <h2
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 500,
          fontSize: "clamp(1.35rem, 2.4vw, 1.6rem)",
          lineHeight: 1.3,
          color: "#111",
          maxWidth: "360px",
        }}
      >
        Currently thinking about my next{" "}
        <span className="relative inline-block" style={{ lineHeight: 1 }}>
          side project
          <ScribbleUnderline
            className="absolute"
            style={{ width: "100%", height: "8px", left: 0, bottom: "-7px" }}
          />
        </span>
        .
      </h2>
      <p style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "17px", color: "#8a8a86", marginTop: "12px" }}>
        peek into what&rsquo;s open on my desktop &darr;
      </p>

      {/* folder grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 mt-7" style={{ maxWidth: "420px" }}>
        {folders.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              className="workspace-folder relative flex flex-col items-center"
              style={{ transform: `rotate(${f.rotate}deg)`, zIndex: isActive ? 20 : 1 }}
              aria-label={`${f.name} — ${f.note}`}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive((a) => (a === f.id ? null : a))}
              onFocus={() => setActive(f.id)}
              onBlur={() => setActive((a) => (a === f.id ? null : a))}
              onClick={() => setActive((a) => (a === f.id ? null : f.id))}
            >
              <span className="workspace-folder-icon" style={{ width: "104px" }}>
                <FolderIcon color={f.color} tab={f.tab} />
              </span>
              <span className="workspace-folder-label">{f.name}</span>

              <span
                className="workspace-note"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateX(-50%) translateY(8px) rotate(-2deg)"
                    : "translateX(-50%) translateY(2px) rotate(-2deg)",
                }}
              >
                {f.note}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
