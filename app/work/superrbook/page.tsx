import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";
import CaseStudyNav from "@/app/components/CaseStudyNav";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My Role" },
  { id: "ownership", label: "Areas of Ownership" },
  { id: "approach", label: "Approach" },
  { id: "context-switching", label: "Context Switching" },
  { id: "geometry-tools", label: "Geometry Tools" },
  { id: "admin", label: "Admin Devices" },
  { id: "reflection", label: "Reflection" },
];

const workItems = [
  {
    title: "Classroom learning experiences",
    description:
      "Assignments, quizzes, polls, whiteboards, notebooks, and collaborative classroom tools.",
  },
  {
    title: "Information architecture",
    description:
      "Simplifying navigation and organizing complex classroom workflows for students and teachers.",
  },
  {
    title: "Interaction-heavy tools",
    description:
      "Geometry toolkit, drawing experiences, tool states, and interaction behaviors.",
  },
  {
    title: "Admin and device management",
    description:
      "Designed dashboards and operational workflows for managing school devices and classroom systems.",
  },
  {
    title: "Prototyping and experimentation",
    description:
      "Used Cursor and code-based prototyping to test complex interactions and uncover usability edge cases early.",
  },
];

const liveQuizItem = {
  title: "Live Quizzes",
  description:
    "Created interactive classroom experiences that made classroom participation feel more active and engaging during lessons.",
  focusedOn: [
    "Real-time classroom interaction",
    "Faster teacher controls",
    "Clear participation states",
    "Keeping students engaged during sessions",
  ],
  media: { type: "video", src: "/Practice on demand sound updated.mp4", tablet: true },
};

const TOTAL_SECTIONS = 3;

export default function SuperrbookCaseStudy() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="mx-auto px-6 sm:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-16 items-start" style={{ maxWidth: "1214px" }}>

        <CaseStudyNav sections={navSections} />

        {/* Mobile back link (sidebar handles it on desktop) */}
        <Link
          href="/"
          className="lg:hidden text-[13px] inline-block mb-16 link-dashed"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>

      <main className="min-w-0 flex-1" style={{ maxWidth: "1014px" }}>

        {/* ── HEADING ── */}
        <div className="mb-16" id="overview">
          <h1
            className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Designing better digital<br />classroom experiences
          </h1>
          <p
            className="text-[13px] tracking-[0.04em]"
            style={{ color: "var(--muted)" }}
          >
            Superr &nbsp;|&nbsp; 2025
          </p>
        </div>

        {/* ── TLDR ── */}
        <section className="mb-16">
          <div className="space-y-5 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Superr is an edtech company building tools that support teaching,
              learning and classroom operations for schools.
            </p>
            <p>
              Over my time at Superr, I worked across Superrbook and the Admin
              Portal, designing experiences for students, teachers, and school
              administrators. My focus was on simplifying complex classroom
              workflows, improving information architecture and creating intuitive
              experiences across the platform.
            </p>
            <p>
              For interaction heavy features, I often used Cursor to prototype
              behaviors, validate edge cases, refine motion and micro-interactions
              directly in code before development.
            </p>
            <p>
              This case study highlights a collection of the features, systems
              and interaction patterns I helped design and ship while building a
              more connected digital classroom experience.
            </p>
          </div>
        </section>

        {/* ── FULL-WIDTH MEDIA ── */}
        <div className="mb-16 rounded-2xl overflow-hidden">
          <VideoPlayer
            src="/Superrbook.mp4"
            className="w-full h-auto block"
            style={{ transform: "scale(1.08)", transformOrigin: "center center" }}
          />
        </div>

        {/* ── MY ROLE ── */}
        <section id="role" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[18px] font-medium mb-6"
            style={{ color: "var(--foreground)" }}
          >
            My Role
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Designed and shipped experiences across Superrbook and the Admin Portal for students, teachers, and school administrators.",
              "Simplified classroom workflows through navigation, information architecture and interaction design.",
              "Designed learning experiences including assignments, quizzes, notebooks, whiteboards and collaborative classroom tools.",
              "Created operational workflows and dashboards for school device management and administration.",
              "Collaborated closely with product managers and engineers from concept to implementation.",
            ].map((item) => (
              <li
                key={item}
                className="text-[16px] leading-relaxed flex items-start gap-3"
                style={{ color: "var(--muted)" }}
              >
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "var(--muted)",
                    display: "inline-block",
                    marginTop: "9px",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── AREAS OF OWNERSHIP ── */}
        <section id="ownership" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[18px] font-medium mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Areas of Ownership
          </h2>
          <ul className="flex flex-col gap-4">
            {[
              { title: "Learning Experiences", description: "Assignments, quizzes, notebooks, whiteboards, reports and classroom collaboration." },
              { title: "Systems & Information Architecture", description: "Navigation structures, content organisation and workflow simplification across the platform." },
              { title: "Interaction Design", description: "Geometry tools, stickers, drawing experiences, tool behaviors and micro-interactions." },
              { title: "Admin Operations", description: "Device management, operational dashboards, monitoring workflows and quick action systems." },
              { title: "Prototyping", description: "Cursor based prototypes used to test interaction logic, usability edge cases and motion before implementation." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "var(--muted)",
                    display: "inline-block",
                    marginTop: "9px",
                  }}
                />
                <div>
                  <p
                    className="text-[16px] font-medium mb-0.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[16px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── HOW I APPROACH DESIGN ── */}
        <section id="approach" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[18px] font-medium mb-6"
            style={{ color: "var(--foreground)" }}
          >
            How I approach design
          </h2>
          <div className="space-y-5 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I enjoy working on systems where interaction, usability, and structure
              come together. My process usually involves understanding workflows
              deeply, simplifying complexity, exploring multiple interaction patterns,
              and prototyping ideas quickly to test assumptions early.
            </p>
            <p>
              Lately, I&rsquo;ve also been experimenting heavily with AI-assisted
              workflows and code-based prototyping to iterate faster and explore
              interaction details beyond static screens.
            </p>
          </div>
        </section>

        {/* ── SECTION 01: CONTEXT SWITCHING ── */}
        <section id="context-switching" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[18px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Context Switching Between Learning Resources
            </h2>
            <span
              className="text-[13px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--muted)" }}
            >
              01 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-12">

            {/* TL;DR */}
            <div>
              <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                Designed a lightweight resource switcher that lets students move between textbooks and notebooks without breaking their learning flow.
              </p>
            </div>

            {/* Problem */}
            <div>
              <p className="text-[16px] font-medium mb-1" style={{ color: "var(--foreground)" }}>Problem</p>
              <p className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                Learning often required jumping between different resources. Every switch interrupted focus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[2.4fr_0.7fr] gap-14 items-start">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--background)", border: "1px solid var(--border)" }}
                >
                  <p
                    className="text-[13px] tracking-[0.04em] uppercase mb-6"
                    style={{ color: "var(--muted)" }}
                  >
                    Current Workflow
                  </p>
                  <div
                    className="flex items-center w-full overflow-x-auto"
                    style={{ minWidth: 0, paddingRight: "26px", paddingBottom: "38px" }}
                  >
                    {[
                      { label: "Read", icon: "/icons/cs-textbook.svg" },
                      { label: "Go back", icon: "/icons/cs-goback.svg" },
                      { label: "Browse", icon: "/icons/cs-browsefiles.svg" },
                      { label: "Find notes", icon: "/icons/cs-findnotebook.svg" },
                      { label: "Continue writing", icon: "/icons/cs-opennotebook.svg" },
                    ].map((step, i, arr) => (
                      <React.Fragment key={step.label}>
                        <div
                          className="relative flex items-center justify-center shrink-0"
                          style={{ width: "64px", height: "64px" }}
                        >
                          <Image src={step.icon} alt="" width={48} height={48} />
                          <p
                            className="absolute text-[13px] leading-snug text-center whitespace-nowrap"
                            style={{ color: "var(--foreground)", top: "76px", left: "50%", transform: "translateX(-50%)" }}
                          >
                            {step.label}
                          </p>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="shrink-0" style={{ flex: "1 1 40px", height: "1px", background: "#C7C7C7" }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <p
                    className="text-[13px] text-center"
                    style={{ color: "var(--muted)", marginTop: "8px" }}
                  >
                    Repeated many times during every study session.
                  </p>
                </div>
                <div className="flex flex-col" style={{ paddingTop: "24px", marginLeft: "-20px" }}>
                  <p className="text-[16px] font-semibold mb-5" style={{ color: "var(--foreground)" }}>Pain Points</p>
                  <ol className="flex flex-col gap-4" style={{ listStyle: "decimal", paddingLeft: "20px" }}>
                    {[
                      "Lost context",
                      "Interrupted note-taking",
                      "Too many navigation steps",
                    ].map((point) => (
                      <li
                        key={point}
                        className="text-[15px] whitespace-nowrap"
                        style={{ color: "var(--foreground)", lineHeight: 1.7 }}
                      >
                        {point}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Design Goals */}
            <div>
              <p className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Design Goals</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { text: "Faster switching", rotate: "-1.5deg" },
                  { text: "Preserve learning flow", rotate: "1deg" },
                  { text: "No persistent UI", rotate: "-1deg" },
                  { text: "Familiar mental model", rotate: "1.5deg" },
                ].map((goal) => (
                  <div
                    key={goal.text}
                    className="rounded-xl p-4"
                    style={{
                      background: "#FFF6C7",
                      border: "1.5px solid #E8C93A",
                      transform: `rotate(${goal.rotate})`,
                    }}
                  >
                    <p className="text-[15px] font-medium leading-snug" style={{ color: "#171717" }}>{goal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exploration */}
            <div>
              <p className="text-[16px] font-medium mb-2" style={{ color: "var(--foreground)" }}>Exploration</p>
              <p className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                I explored multiple interaction patterns for the switcher&rsquo;s entry point before committing to one.
              </p>
              <div className="flex flex-col gap-10">
                {[
                  {
                    number: "01",
                    title: "Single Pull-Down Swipe From Top",
                    image: "/Context Switching 1.png",
                    alt: "Swipe from top gesture exploration",
                    idea: "Swipe down from the top of the screen to reveal the switcher.",
                    why: "Explored for its speed and quick access.",
                    pros: ["Quick access"],
                    cons: ["Conflicted with system gestures", "Difficult to own consistently across the OS"],
                    decision: "The gesture competed directly with operating system interactions and could not be reliably controlled within the product.",
                  },
                  {
                    number: "02",
                    title: "Toolbar Action",
                    image: "/Context Switching 02.png",
                    alt: "Toolbar action exploration",
                    idea: "Add a dedicated switcher button to the toolbar.",
                    why: "Explored for its familiarity as a common interaction pattern.",
                    pros: ["Familiar interaction pattern"],
                    cons: ["Slower for frequent usage", "Added additional UI controls", "Extra interaction steps required"],
                    decision: "The interaction felt too heavy for a workflow students perform repeatedly throughout a study session.",
                  },
                  {
                    number: "03",
                    title: "Handle + Pull Gesture",
                    image: "/Context Switching 03.png",
                    alt: "Handle and pull gesture exploration",
                    idea: "A persistent handle at the edge of the screen that students pull to open the switcher.",
                    why: "Explored for its discoverability and ease of understanding.",
                    pros: ["Discoverable", "Fast for repeat usage", "Easy to understand"],
                    cons: ["Required persistent UI across the entire product", "Valuable top-of-screen space lost in notebooks", "Added visual clutter to focused reading and writing surfaces"],
                    decision: "While the handle improved discoverability, the tradeoff of adding permanent interface chrome across the product felt too expensive for a feature intended to stay lightweight.",
                  },
                ].map((option) => (
                  <div key={option.number} className="rounded-2xl">
                    <p className="text-[13px] tracking-[0.06em] uppercase mb-3" style={{ color: "var(--muted)" }}>
                      Exploration {option.number}
                    </p>

                    <div className="mb-5 rounded-2xl overflow-hidden p-4" style={{ background: "var(--hover-bg)" }}>
                      <Image src={option.image} alt={option.alt} width={800} height={1120} quality={100} className="w-full h-auto block rounded-xl" />
                    </div>

                    <p className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>{option.title}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                      <div>
                        <p className="text-[13px] font-medium mb-1" style={{ color: "var(--muted)" }}>Idea</p>
                        <p className="text-[15px] leading-relaxed" style={{ color: "var(--foreground)" }}>{option.idea}</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-medium mb-1" style={{ color: "var(--muted)" }}>Why I explored it</p>
                        <p className="text-[15px] leading-relaxed" style={{ color: "var(--foreground)" }}>{option.why}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                      <div>
                        <p className="text-[13px] font-medium mb-2" style={{ color: "var(--muted)" }}>Pros</p>
                        <ul className="flex flex-col gap-1.5">
                          {option.pros.map((p) => (
                            <li key={p} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                              <span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[13px] font-medium mb-2" style={{ color: "var(--muted)" }}>Cons</p>
                        <ul className="flex flex-col gap-1.5">
                          {option.cons.map((c) => (
                            <li key={c} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                              <span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                      <p className="text-[15px] font-medium mb-1" style={{ color: "#DC2626" }}>Decision: Rejected</p>
                      <p className="text-[15px] leading-relaxed" style={{ color: "#7F1D1D" }}>{option.decision}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Insight */}
              <div className="rounded-2xl p-5 mt-8" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] mb-2" style={{ color: "#3B82F6" }}>
                  Key Insight
                </p>
                <p className="text-[16px] leading-relaxed font-medium" style={{ color: "#1E3A8A" }}>
                  This exploration shifted my thinking from navigating between screens to switching within the same collection &mdash; like opening another folder in the same workspace.
                </p>
              </div>
            </div>

            {/* Final Direction */}
            <div>
              <p className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Final Direction</p>
              <p className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                A switcher accessed through <span style={{ fontWeight: 600 }}>a two-finger swipe down or directly from the Control Center</span>, combining Recents and Favorites within a single surface.
              </p>

              <div className="rounded-2xl overflow-hidden mb-4">
                <VideoPlayer src="/Final Context Switching.mov" className="w-full h-auto block" />
              </div>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                Recents and Favorites became sections inside the same collection instead of separate screens.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Preserved learning flow",
                  "Reduced navigation",
                  "Familiar folder metaphor",
                  "No persistent UI",
                ].map((chip) => (
                  <div
                    key={chip}
                    className="rounded-xl px-3.5 py-3 flex items-start gap-2"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[3px]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[14px] font-medium leading-snug" style={{ color: "var(--foreground)" }}>{chip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Edge Cases */}
            <div>
              <p className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Designing for Edge Cases</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Current resource appearing in Recents",
                  "Deleted notebooks",
                  "Empty Recents / Favorites states",
                  "Preserving reading position",
                ].map((q) => (
                  <div
                    key={q}
                    className="rounded-xl px-4 py-3 flex items-center gap-3"
                    style={{ background: "var(--hover-bg)" }}
                  >
                    <span className="shrink-0 rounded-full" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />
                    <p className="text-[15px]" style={{ color: "var(--foreground)" }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div>
              <p className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Reflection</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "The fastest interaction isn't always the best — the pull-down gesture was quick but conflicted with system-level gestures.",
                  "Physical metaphors like folders and collections made the switcher easier to understand than app-like tabs or modals.",
                  "Avoiding persistent UI kept textbooks and notebooks free of visual clutter.",
                  "The entry-point decision had an outsized impact on daily learning flow.",
                ].map((lesson, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="shrink-0 rounded-full mt-[8px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />
                    <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{lesson}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Quizzes */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
              <h3 className="text-[18px] font-medium mb-4" style={{ color: "var(--foreground)" }}>{liveQuizItem.title}</h3>
              <p className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{liveQuizItem.description}</p>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>Focused on</p>
              <ul className="flex flex-col gap-2 mb-8">
                {liveQuizItem.focusedOn.map((point) => (
                  <li key={point} className="text-[16px] leading-relaxed flex items-start gap-3" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block", marginTop: "9px" }} />{point}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl flex items-center justify-center" style={{ background: "var(--hover-bg)", padding: "32px 24px" }}>
                <div style={{ border: "10px solid #111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)", width: "min(60%, 320px)" }}>
                  <VideoPlayer src={liveQuizItem.media.src} className="w-full h-auto block" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 02: GEOMETRY TOOLS ── */}
        <section id="geometry-tools" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[18px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Geometry Tools: Making Digital Tools Feel Physical
            </h2>
            <span
              className="text-[13px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--muted)" }}
            >
              02 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* The Challenge */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                The Challenge
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Geometry tools are familiar in the physical world. Students already know how a ruler, protractor, or compass behaves on paper.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The challenge wasn't just adding these tools digitally, it was making them feel intuitive enough that students could use them without learning a completely new system.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The experience needed to support drawing, measuring, rotating, and positioning tools while remaining approachable for students across different age groups.
                </p>
              </div>
            </div>

            {/* Understanding Existing Patterns */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Understanding Existing Patterns
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Before designing the interactions, I studied how geometry tools were implemented across learning platforms, whiteboard products, and drawing applications.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  While most products provided similar toolsets, many interactions felt overly technical, hidden behind controls, or disconnected from how physical tools behave.
                </p>
              </div>
              {/* Design Principle — callout card */}
              <div
                className="rounded-2xl px-5 py-4 flex flex-col gap-2 mt-4"
                style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.06em]" style={{ color: "#3B82F6" }}>
                  Design Principle
                </p>
                <p className="text-[16px] leading-relaxed font-medium" style={{ color: "#1E3A8A" }}>
                  If a student already knows how the tool works on paper, the digital version should behave as closely as possible to that mental model.
                </p>
              </div>
            </div>

            {/* Designing Around Physical Behaviors */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Designing Around Physical Behaviors
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Geometry tools are something students already understand from the physical world. Instead of introducing entirely new interaction patterns, I wanted the digital experience to build on behaviors students were already familiar with.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  This meant constantly asking:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "How would a student expect a ruler to move?",
                    "How would they rotate a protractor?",
                    "Where would they look to start drawing an arc or circle?",
                    "What feedback should appear while measuring?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The goal wasn't to replicate physical tools exactly, but to preserve the mental models students already had while taking advantage of digital capabilities.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--foreground)" }}>
                  As a result, interactions were designed around direct manipulation, allowing students to move, rotate, measure and draw directly from the tool itself without relying on separate control panels or complex menus.
                </p>
              </div>
            </div>

            {/* Prototyping Interactions in Code */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Prototyping Interactions in Code
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Many of these behaviors were difficult to evaluate through static Figma screens alone.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  To better understand how the tools would feel in use, we prototyped interactions directly in Cursor and tested different approaches for movement, rotation, drawing and tool states.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Working in code allowed me to validate interactions much earlier, uncover usability issues and collaborate more effectively with engineers around implementation details and constraints.
                </p>
              </div>
              <div
                className="rounded-2xl flex items-center justify-center mt-6"
                style={{ background: "var(--hover-bg)", padding: "32px 24px" }}
              >
                <div
                  style={{
                    border: "10px solid #111",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
                    width: "min(60%, 320px)",
                  }}
                >
                  <VideoPlayer src="/Geometry tools video.mp4" className="w-full h-auto block" />
                </div>
              </div>
            </div>

            {/* Designing for Edge Cases */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Designing for Edge Cases
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  As the tools became movable and interactive, many edge cases had to be considered:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "What happens when a tool is dragged partially off-screen?",
                    "How far can each tool move before becoming hard to access?",
                    "Where should action buttons move when they reach the screen edge?",
                    "What should be the default size of each tool?",
                    "How can students discover advanced features naturally?",
                    "How should the tools adapt across different screen sizes?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Prototyping helped uncover these scenarios early, making it easier to define clear behaviors before development and reduce implementation ambiguity.
                </p>
              </div>
            </div>

            {/* Key Decisions */}
            <div>
              <p className="text-[16px] font-medium mb-5" style={{ color: "var(--foreground)" }}>
                Key Decisions
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "1. Tool Actions Stay Close to the Tool",
                    body: ["Contextual actions were attached directly to the active tool instead of a separate toolbar, reducing visual scanning and making interactions more intuitive."],
                  },
                  {
                    title: "2. Discovery Through Use",
                    body: ["Interactions were designed to reveal themselves naturally during use. Selecting a tool exposed relevant controls, helping students learn by exploring rather than through onboarding."],
                  },
                  {
                    title: "3. Familiar Gestures Over Custom Controls",
                    body: ["Common touch gestures replaced custom controls: one finger to move, two fingers to rotate, and direct touch points for drawing and measuring, making the experience feel natural and easy to learn."],
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-[14px] font-medium mb-2" style={{ color: "var(--foreground)" }}>{item.title}</p>
                    <div className="space-y-2">
                      {item.body.map((p) => (
                        <p key={p} className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div>
              <p className="text-[16px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Outcome
              </p>
              <div className="space-y-3">
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The final experience balanced familiarity and flexibility by borrowing behaviors from physical geometry tools while adapting them for touch interactions.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Prototyping the interactions in code helped validate complex behaviors, uncover edge cases early and refine the experience before implementation.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 03: HELPING SCHOOL ADMINS MANAGE DEVICES BETTER ── */}
        <section id="admin" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[18px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Helping school admins manage devices better
            </h2>
            <span
              className="text-[13px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--muted)" }}
            >
              03 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* Problem */}
            <div>
              <p
                className="text-[16px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Problem
              </p>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                School admins needed a quick way to monitor device health,
                assignments, classroom activity, and operational issues without
                feeling overwhelmed by large amounts of data.
              </p>
            </div>

            {/* Approach */}
            <div>
              <p
                className="text-[16px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Approach
              </p>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                I designed dashboards and workflows focused on quick scanning,
                prioritization, and actionable insights so admins could identify
                issues and take action faster.
              </p>
            </div>

            {/* Focus Areas */}
            <div>
              <p
                className="text-[16px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Focus Areas
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Information hierarchy",
                  "Scannability",
                  "Status visibility",
                  "Quick actions",
                  "Reducing operational effort",
                ].map((point) => (
                  <li
                    key={point}
                    className="text-[16px] leading-relaxed flex items-start gap-3"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="shrink-0 rounded-full"
                      style={{
                        width: "4px",
                        height: "4px",
                        background: "var(--muted)",
                        display: "inline-block",
                        marginTop: "9px",
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media — desktop frame */}
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ background: "var(--hover-bg)", padding: "24px 16px 16px 16px" }}
            >
              <div style={{ width: "100%", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.2))" }}>
                {/* Screen bezel */}
                <div style={{ background: "#1a1a1a", borderRadius: "10px 10px 0 0", padding: "8px 8px 0 8px" }}>
                  <div style={{ borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
                    <VideoPlayer
                      src="/Admin Portal.mp4"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                {/* Hinge */}
                <div style={{ background: "#2a2a2a", height: "12px" }} />
                {/* Base */}
                <div style={{ background: "#242424", height: "20px", borderRadius: "0 0 8px 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "56px", height: "6px", background: "#333", borderRadius: "3px" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REFLECTION ── */}
        <section id="reflection" className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <p
            className="text-[18px] font-medium mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Reflection
          </p>
          <h2
            className="text-[18px] font-semibold leading-tight tracking-[-0.01em] mb-10"
            style={{ color: "var(--foreground)" }}
          >
            What I learned
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p
                className="text-[16px] font-medium leading-snug mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Designing for clarity at scale.
              </p>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Designing classroom experiences taught me that students and
                teachers process information very differently. Every interaction
                needed to feel simple, focused, and easy to navigate without
                becoming overwhelming.
              </p>
            </div>
            <div>
              <p
                className="text-[16px] font-medium leading-snug mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Thinking beyond individual screens.
              </p>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                The work pushed me to think more deeply about workflows,
                interaction systems, scalability, and how features connect
                across students, teachers, and admins instead of treating each
                screen separately.
              </p>
            </div>
          </div>
          <p
            className="text-[16px] font-medium leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            A large part of the work involved interconnected features and
            evolving systems, so I&rsquo;d be happy to walk through deeper
            explorations, iterations, prototypes, and shipped decisions in
            conversation.
          </p>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-[13px]" style={{ color: "var(--muted)" }}>
            Designed + Coded with{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginBottom: "1px" }}>
              <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
            </svg>
            {" "}by Aditi
          </span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:aditi.shinde304@gmail.com"
              className="text-[13px] link-dashed"
              style={{ color: "var(--muted)" }}
            >
              Email
            </a>
            <a
              href="https://x.com/AditiShinde30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] link-dashed"
              style={{ color: "var(--muted)" }}
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/aditi-shinde-5415681b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] link-dashed"
              style={{ color: "var(--muted)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] link-dashed"
              style={{ color: "var(--muted)" }}
            >
              Resume
            </a>
          </div>
        </footer>

      </main>

      </div>
    </div>
  );
}
