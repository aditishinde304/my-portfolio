"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

// ─── Tabs ──────────────────────────────────────────────────────────────────
const tabs = [
  { id: "figma",     label: "Figma",              badge: "28 drafts",   emoji: "🎨" },
  { id: "claude",    label: "Claude Code",         badge: "4 agents",    emoji: "◆"  },
  { id: "github",    label: "GitHub",                                    emoji: "🐙" },
  { id: "pinterest", label: "Pinterest",           badge: "1,203 saves", emoji: "📌" },
  { id: "spotify",   label: "Spotify",             badge: "Lo-fi",       emoji: "🎵" },
  { id: "ideas",     label: "37 unfinished ideas",                       emoji: "🧠", active: true },
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

// ─── Floating element layout (positions within 240×240 container) ──────────
// Photo is centered at (120, 120), radius 60px
const floatingItems = [
  { id: "pencil",   el: <PencilSVG />,   style: { top: "0px",    left: "162px" }, rotate: "18deg",  delay: "0s"    },
  { id: "code",     el: <CodeSVG />,     style: { top: "94px",   left: "-14px" }, rotate: "-8deg",  delay: "0.5s"  },
  { id: "sparkle",  el: <SparkleSVG />, style: { top: "8px",    left: "22px"  }, rotate: "12deg",  delay: "1.0s"  },
  { id: "notebook", el: <NotebookSVG />, style: { bottom: "0px", left: "160px" }, rotate: "-12deg", delay: "0.3s"  },
  { id: "coffee",   el: <CoffeeSVG />,  style: { bottom: "24px",left: "-6px"  }, rotate: "14deg",  delay: "0.8s"  },
  { id: "brush",    el: <BrushSVG />,   style: { top: "78px",   right: "-14px"}, rotate: "-22deg", delay: "1.3s"  },
  { id: "sticky",   el: <StickySVG />,  style: { bottom: "6px", left: "70px"  }, rotate: "6deg",   delay: "0.6s"  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* ── Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "transparent" }}
      >
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.01em]"
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

      {/* ── Hero ── */}
      <main className="px-6 sm:px-8 pt-24 max-w-3xl mx-auto text-center">

        {/* Photo with floating illustrations */}
        <div className="flex justify-center mb-8 mt-10">
          <div className="relative" style={{ width: "240px", height: "240px" }}>

            {/* Floating elements */}
            {floatingItems.map((item) => (
              <div
                key={item.id}
                className="absolute"
                style={{ ...item.style, transform: `rotate(${item.rotate})`, zIndex: 2 }}
              >
                <div style={{ animation: `floatY 3.5s ease-in-out ${item.delay} infinite` }}>
                  {item.el}
                </div>
              </div>
            ))}

            {/* Photo */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
              style={{
                width: "120px",
                height: "120px",
                border: "3px solid white",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
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
          className="mb-5 tracking-[-0.01em] leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 2.75rem)",
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            fontWeight: 500,
            color: "var(--foreground)",
          }}
        >
          Hi, I&rsquo;m Aditi! 👋
        </h1>

        {/* Subheading */}
        <p
          className="mx-auto text-[15px] sm:text-[16px] leading-relaxed"
          style={{ maxWidth: "500px", color: "var(--muted)" }}
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

        {/* ── Tabs section ── */}
        <div className="mt-14">
          <p
            className="text-[11px] uppercase tracking-[0.12em] mb-5"
            style={{ color: "var(--muted)" }}
          >
            Currently open tabs in Aditi&rsquo;s brain
          </p>

          {/* Browser chrome — tab bar only, bottom bleeds into page */}
          <div
            className="w-full rounded-t-2xl overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              borderBottom: "none",
              boxShadow: "0 -1px 0 var(--border), 0 8px 40px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ background: "var(--hover-bg)" }}>
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28CA41" }} />
              </div>

              {/* Tabs */}
              <div
                className="flex items-end gap-1 px-3 overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-t-lg shrink-0 select-none"
                    style={{
                      background: tab.active ? "var(--background)" : "transparent",
                      border: tab.active ? "1px solid var(--border)" : "1px solid transparent",
                      borderBottom: tab.active ? "1px solid var(--background)" : "none",
                      marginBottom: tab.active ? "-1px" : undefined,
                      position: "relative",
                      zIndex: tab.active ? 1 : 0,
                    }}
                  >
                    <span className="text-[11px]">{tab.emoji}</span>
                    <span
                      className="text-[11px] whitespace-nowrap"
                      style={{
                        color: tab.active ? "var(--foreground)" : "var(--muted)",
                        fontWeight: tab.active ? 500 : 400,
                      }}
                    >
                      {tab.label}
                      {tab.badge && (
                        <span
                          className="ml-1.5 px-1.5 py-0.5 rounded-full text-[9px]"
                          style={{
                            background: tab.active ? "var(--hover-bg)" : "var(--border)",
                            color: "var(--muted)",
                          }}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
