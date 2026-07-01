"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

const tabs = [
  { id: "figma",    label: "Figma",               badge: "28 drafts",     emoji: "🎨" },
  { id: "claude",   label: "Claude Code",          badge: "4 agents",      emoji: "◆"  },
  { id: "github",   label: "GitHub",                                       emoji: "🐙" },
  { id: "pinterest",label: "Pinterest",            badge: "1,203 saves",   emoji: "📌" },
  { id: "spotify",  label: "Spotify",              badge: "Lo-fi",         emoji: "🎵" },
  { id: "ideas",    label: "37 unfinished ideas",                          emoji: "🧠", active: true },
];

const keywordMeta: Record<string, { popup: string }> = {
  thoughtful: { popup: "🧠" },
  useful:     { popup: "✅" },
  delightful: { popup: "✨" },
};

function Keyword({ word, serif }: { word: string; serif?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const meta = keywordMeta[word];
  return (
    <span
      className="relative inline-block cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontFamily: serif ? "var(--font-fraunces), Georgia, serif" : undefined,
          fontStyle: serif ? "italic" : undefined,
          fontWeight: serif ? 500 : undefined,
          borderBottom: "1.5px dotted currentColor",
          opacity: hovered ? 1 : undefined,
          transition: "opacity 150ms ease",
        }}
      >
        {word}
      </span>
      {meta && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: "-2.2rem",
            left: "50%",
            transform: `translateX(-50%) translateY(${hovered ? "0px" : "6px"})`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 180ms ease, transform 180ms ease",
            fontSize: "1.35rem",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {meta.popup}
        </span>
      )}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ background: "transparent" }}>
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.02em]"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}
        >
          aditi
        </Link>
        <nav className="hidden sm:flex items-center gap-7">
          {[
            { label: "Projects",     href: "#projects"     },
            { label: "About",        href: "#about"        },
            { label: "Experiments",  href: "/experiments"  },
            { label: "Say hi",       href: "mailto:aditi.shinde304@gmail.com" },
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="px-5 sm:px-8 pt-28 pb-0 max-w-5xl mx-auto">

        {/* Label above browser */}
        <p
          className="text-center text-[11px] uppercase tracking-[0.12em] mb-5"
          style={{ color: "var(--muted)" }}
        >
          Currently open tabs in Aditi&rsquo;s brain
        </p>

        {/* Browser window */}
        <div
          className="w-full rounded-t-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            borderBottom: "none",
            boxShadow: "0 2px 0 0 var(--border), 0 8px 40px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          {/* Browser chrome */}
          <div style={{ borderBottom: "1px solid var(--border)", background: "var(--hover-bg)" }}>

            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
            </div>

            {/* Tab bar */}
            <div className="flex items-end gap-1 px-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
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

          {/* Browser body – hero content */}
          <div className="px-8 sm:px-16 py-20 sm:py-28 text-center" style={{ background: "var(--background)" }}>

            {/* Avatar + eyebrow */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-full overflow-hidden shrink-0"
                style={{ border: "2px solid var(--border)" }}
              >
                <Image
                  src="/New Avatar.png"
                  alt="Aditi Shinde"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
              </div>
              <p
                className="text-[15px]"
                style={{ color: "var(--muted)" }}
              >
                Hi, I&rsquo;m Aditi. 👋
              </p>
            </div>

            {/* Heading */}
            <h1 className="mb-8 mx-auto" style={{ maxWidth: "720px" }}>
              <span
                className="block leading-[1.15] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  color: "var(--muted)",
                  fontWeight: 300,
                }}
              >
                I design and build products
              </span>
              <span
                className="block leading-[1.15] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  color: "var(--muted)",
                  fontWeight: 300,
                }}
              >
                that are{" "}
                <Keyword word="thoughtful" serif />,{" "}
                <Keyword word="useful" serif />,
              </span>
              <span
                className="block leading-[1.2] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                and a little <Keyword word="delightful" />
                <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="mx-auto text-[15px] leading-relaxed"
              style={{ maxWidth: "520px", color: "var(--muted)" }}
            >
              Currently building education products at{" "}
              <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                Superr
              </a>
              , where I design and ship experiences for students, teachers, and school administrators across digital classrooms and learning workflows. Previously at{" "}
              <a href="https://www.connectwise.com/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                ConnectWise
              </a>
              {" "}and{" "}
              <a href="https://www.zoop.one/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
                Zoop.one
              </a>
              .
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <a
                href="#projects"
                className="text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-150"
                style={{ background: "var(--foreground)", color: "var(--background)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View my work
              </a>
              <a
                href="mailto:aditi.shinde304@gmail.com"
                className="text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-150"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                Say hi
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
