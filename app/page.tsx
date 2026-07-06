"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

const BORDER = "#e4e4e7";

// ─── Tabs ──────────────────────────────────────────────────────────────────
const tabs = [
  { id: "figma",     emoji: "🎨", label: "Figma",                sub: "28 drafts"   },
  { id: "claude",    emoji: "◆",  label: "Claude Code",           sub: "4 agents"   },
  { id: "github",    emoji: "🐙", label: "GitHub"                                   },
  { id: "pinterest", emoji: "📌", label: "Pinterest",             sub: "1,203 saves" },
  { id: "spotify",   emoji: "🎵", label: "Spotify",               sub: "Lo-fi"       },
  { id: "ideas",     emoji: "🧠", label: "37 unfinished ideas",                      active: true },
];

// ─── SVG illustrations ─────────────────────────────────────────────────────
function PencilSVG() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <line x1="6" y1="20" x2="19" y2="7" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="19,7 22,4 22,10" fill="#6366f1"/>
      <rect x="4" y="19" width="5" height="3" rx="1" fill="#a5b4fc"/>
    </svg>
  );
}
function CodeSVG() {
  return (
    <svg width="46" height="26" viewBox="0 0 46 26" fill="none">
      <rect width="46" height="26" rx="5" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="7" y="18" fontFamily="monospace" fontSize="12" fill="#6B7280">&lt;/&gt;</text>
    </svg>
  );
}
function SparkleSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2 L12.2 9 L19 11 L12.2 13 L11 20 L9.8 13 L3 11 L9.8 9 Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="0.6"/>
      <circle cx="18" cy="4" r="1.5" fill="#FCD34D"/>
      <circle cx="4" cy="18" r="1" fill="#FCD34D"/>
    </svg>
  );
}
function NotebookSVG() {
  return (
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
      <rect x="5" y="1" width="17" height="26" rx="2" fill="white" stroke="#D1D5DB" strokeWidth="1.2"/>
      <line x1="2" y1="6"  x2="5" y2="6"  stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="11" x2="5" y2="11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="16" x2="5" y2="16" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="21" x2="5" y2="21" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="8"  x2="18" y2="8"  stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round"/>
      <line x1="9" y1="13" x2="18" y2="13" stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round"/>
      <line x1="9" y1="18" x2="15" y2="18" stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
function CoffeeSVG() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M5 10 H17 V19 C17 21.2 15.2 23 13 23 H9 C6.8 23 5 21.2 5 19 Z" fill="white" stroke="#D97706" strokeWidth="1.2"/>
      <path d="M17 12 H20 C21.7 12 23 13.3 23 15 C23 16.7 21.7 18 20 18 H17" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M9 5 C9 5 8 3 9 2" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round"/>
      <path d="M13 5 C13 5 12 3 13 2" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
function BrushSVG() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <line x1="4" y1="22" x2="18" y2="8" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 8 L21 5 L23 3 L21 8 Z" fill="#EC4899"/>
      <circle cx="4" cy="22" r="3" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.2"/>
    </svg>
  );
}
function StickySVG() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M2 2 H22 V20 L16 26 H2 Z" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.2"/>
      <path d="M22 20 H16 V26" fill="#FDE047" stroke="#EAB308" strokeWidth="1.2" strokeLinejoin="round"/>
      <line x1="6" y1="8"  x2="18" y2="8"  stroke="#A16207" strokeWidth="1" strokeLinecap="round"/>
      <line x1="6" y1="13" x2="18" y2="13" stroke="#A16207" strokeWidth="1" strokeLinecap="round"/>
      <line x1="6" y1="18" x2="13" y2="18" stroke="#A16207" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

const floatingItems = [
  { id: "pencil",   el: <PencilSVG />,   pos: { top: "0px",    left: "162px" }, rotate: "18deg",  delay: "0s"   },
  { id: "code",     el: <CodeSVG />,     pos: { top: "94px",   left: "-14px" }, rotate: "-8deg",  delay: "0.5s" },
  { id: "sparkle",  el: <SparkleSVG />, pos: { top: "8px",    left: "22px"  }, rotate: "12deg",  delay: "1.0s" },
  { id: "notebook", el: <NotebookSVG />, pos: { bottom: "0px", left: "160px" }, rotate: "-12deg", delay: "0.3s" },
  { id: "coffee",   el: <CoffeeSVG />,  pos: { bottom: "24px",left: "-6px"  }, rotate: "14deg",  delay: "0.8s" },
  { id: "brush",    el: <BrushSVG />,   pos: { top: "78px",   right: "-14px"}, rotate: "-22deg", delay: "1.3s" },
  { id: "sticky",   el: <StickySVG />,  pos: { bottom: "6px", left: "70px"  }, rotate: "6deg",   delay: "0.6s" },
];

// ─── Browser Tab component ─────────────────────────────────────────────────
function BrowserTab({
  tab,
  hovered,
  onEnter,
  onLeave,
}: {
  tab: typeof tabs[number];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const fullLabel = tab.sub ? `${tab.label} · ${tab.sub}` : tab.label;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "5px 10px 5px 8px",
        borderRadius: "8px 8px 0 0",
        border: `1px solid ${tab.active ? BORDER : "transparent"}`,
        borderBottom: tab.active ? "1px solid var(--background)" : "none",
        background: tab.active
          ? "var(--background)"
          : hovered
          ? "rgba(0,0,0,0.035)"
          : "transparent",
        marginBottom: tab.active ? "-1px" : "0",
        position: "relative",
        zIndex: tab.active ? 2 : 1,
        cursor: "default",
        flexShrink: 1,
        minWidth: 0,
        transition: "background 120ms ease",
        userSelect: "none",
      }}
    >
      {/* Emoji / × icon — same slot, crossfade */}
      <div style={{ position: "relative", width: "13px", height: "13px", flexShrink: 0 }}>
        <span
          style={{
            position: "absolute",
            inset: 0,
            fontSize: "11px",
            lineHeight: "13px",
            textAlign: "center",
            opacity: hovered ? 0 : 1,
            transition: "opacity 120ms ease",
          }}
        >
          {tab.emoji}
        </span>
        <span
          style={{
            position: "absolute",
            inset: 0,
            fontSize: "12px",
            lineHeight: "13px",
            textAlign: "center",
            color: "var(--muted)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 120ms ease",
          }}
        >
          ×
        </span>
      </div>

      {/* Label */}
      <span
        style={{
          fontSize: "11px",
          lineHeight: "1.3",
          whiteSpace: "nowrap",
          color: tab.active ? "var(--foreground)" : "var(--muted)",
          fontWeight: tab.active ? 500 : 400,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {fullLabel}
      </span>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* ── Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "transparent" }}
      >
        <Link
          href="/"
          className="text-[15px] font-semibold"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
        >
          aditi
        </Link>
        <nav className="hidden sm:flex items-center gap-7 ml-auto mr-6">
          {[
            { label: "Projects",    href: "#projects"    },
            { label: "About",       href: "#about"       },
            { label: "Experiments", href: "/experiments" },
            { label: "Say hi",      href: "mailto:aditi.shinde304@gmail.com" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      {/* ── Main ── */}
      <main className="px-5 sm:px-8 pt-28 pb-0 max-w-5xl mx-auto">

        {/* Label */}
        <p
          className="text-center text-[11px] uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--muted)" }}
        >
          Currently open tabs in Aditi&rsquo;s brain
        </p>

        {/* ── Browser window ── */}
        <div
          style={{
            borderRadius: "14px 14px 0 0",
            border: `1px solid ${BORDER}`,
            borderBottom: "none",
            overflow: "hidden",
            /* no box-shadow */
          }}
        >

          {/* ── Title bar (traffic lights + URL bar) ── */}
          <div
            style={{
              background: "#f5f5f3",
              borderBottom: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 14px",
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28CA41" }} />
            </div>

            {/* URL bar */}
            <div
              style={{
                flex: 1,
                maxWidth: "320px",
                margin: "0 auto",
                background: "rgba(0,0,0,0.055)",
                border: `1px solid ${BORDER}`,
                borderRadius: "6px",
                padding: "3px 10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {/* Lock icon */}
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
                <rect x="1.5" y="4.5" width="7" height="5.5" rx="1" fill="none" stroke="#9CA3AF" strokeWidth="1"/>
                <path d="M3 4.5V3a2 2 0 014 0v1.5" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.01em" }}>
                aditishinde.com
              </span>
            </div>

            {/* Right spacer (mirrors traffic lights width for centering) */}
            <div style={{ width: "41px", flexShrink: 0 }} />
          </div>

          {/* ── Tab strip ── */}
          <div
            style={{
              background: "#f5f5f3",
              borderBottom: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "flex-end",
              padding: "6px 8px 0",
              gap: "2px",
              overflowX: "hidden",
            }}
          >
            {tabs.map((tab) => (
              <BrowserTab
                key={tab.id}
                tab={tab}
                hovered={hoveredTab === tab.id}
                onEnter={() => setHoveredTab(tab.id)}
                onLeave={() => setHoveredTab(null)}
              />
            ))}
          </div>

          {/* ── Browser content (hero) ── */}
          <div
            className="px-8 sm:px-20 py-16 sm:py-20 text-center"
            style={{ background: "var(--background)" }}
          >

            {/* Photo with floating illustrations */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
              <div style={{ position: "relative", width: "240px", height: "240px" }}>

                {floatingItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      position: "absolute",
                      ...item.pos,
                      transform: `rotate(${item.rotate})`,
                      zIndex: 2,
                    }}
                  >
                    <div style={{ animation: `floatY 3.5s ease-in-out ${item.delay} infinite` }}>
                      {item.el}
                    </div>
                  </div>
                ))}

                {/* Photo */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #fff",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)",
                    zIndex: 3,
                  }}
                >
                  <Image
                    src="/New Avatar.png"
                    alt="Aditi Shinde"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 45%" }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(1.75rem, 3.8vw, 2.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                color: "var(--foreground)",
                marginBottom: "1.1rem",
              }}
            >
              Hi, I&rsquo;m Aditi! 👋
            </h1>

            {/* Subheading */}
            <p
              style={{
                maxWidth: "480px",
                margin: "0 auto",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "var(--muted)",
              }}
            >
              I&rsquo;m a designer who enjoys turning ideas into useful products through design, code, and an eye for detail. Currently building education products at{" "}
              <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                Superr
              </a>
              , previously at{" "}
              <a href="https://www.connectwise.com/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                ConnectWise
              </a>
              {" "}and{" "}
              <a href="https://www.zoop.one/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                Zoop.one
              </a>
              .
            </p>

          </div>
        </div>
      </main>

    </div>
  );
}
