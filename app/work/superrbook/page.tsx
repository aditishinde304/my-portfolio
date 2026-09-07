import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";
import CaseStudyNav from "@/app/components/CaseStudyNav";
import ExplorationTabs from "@/app/components/ExplorationTabs";

// Inline emphasis for the key phrases highlighted in the source copy doc.
function Bold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 600, color: "var(--cs-fg)" }}>{children}</span>;
}

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
    <div className="case-study" style={{ background: "var(--cs-bg)", minHeight: "100vh" }}>
      <div className="mx-auto px-6 sm:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-16 items-start" style={{ maxWidth: "1214px" }}>

        <CaseStudyNav sections={navSections} />

        {/* Mobile back link (sidebar handles it on desktop) */}
        <Link
          href="/"
          className="lg:hidden text-[15px] inline-block mb-16 link-dashed"
          style={{ color: "var(--cs-secondary)" }}
        >
          ← Back
        </Link>

      <main className="min-w-0 flex-1" style={{ maxWidth: "1014px" }}>

        {/* ── HEADING ── */}
        <div className="mb-16" id="overview">
          <h1
            className="text-[34px] md:text-[48px] font-semibold tracking-[-0.02em] mb-4"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.12" }}
          >
            Designing better digital<br />classroom experiences
          </h1>
          <p
            className="text-[14px] tracking-[0.04em]"
            style={{ color: "var(--cs-muted)" }}
          >
            Superr &nbsp;|&nbsp; 2025
          </p>
        </div>

        {/* ── TLDR ── */}
        <section className="mb-16">
          <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)", lineHeight: "1.6" }}>
            <p>
              Superr is an edtech company building tools that support{" "}
              <Bold>teaching, learning and classroom operations</Bold> for schools.
            </p>
            <p>
              Over my time at Superr, I worked across <Bold>Superrbook and the Admin Portal</Bold>, designing
              experiences for <Bold>students, teachers and school administrators</Bold>. My focus was on{" "}
              <Bold>simplifying complex classroom workflows</Bold>, improving information architecture and creating
              intuitive experiences across the platform.
            </p>
            <p>
              For interaction heavy features, I often used <Bold>Cursor to prototype behaviours directly in code</Bold>,
              validate edge cases and refine <Bold>motion and micro interactions</Bold> before development.
            </p>
            <p>
              This case study highlights a collection of the <Bold>features, systems and interaction patterns</Bold> I
              helped design and ship while building a more connected digital classroom experience.
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
        <section id="role" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-6"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            My Role
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              <>
                <Bold>Designed and shipped experiences across Superrbook and the Admin Portal</Bold> for students, teachers and school administrators.
              </>,
              <>
                Simplified complex classroom workflows through <Bold>navigation, information architecture and interaction design</Bold>.
              </>,
              <>
                Designed learning experiences including <Bold>assignments, quizzes, notebooks, whiteboards and collaborative tools</Bold>.
              </>,
              <>
                Created <Bold>workflows and dashboards</Bold> for school device management and administration.
              </>,
              <>
                Collaborated closely with <Bold>product managers and engineers from concept to implementation</Bold>.
              </>,
            ].map((item, i) => (
              <li
                key={i}
                className="text-[17px] leading-relaxed flex items-start gap-3"
                style={{ color: "var(--cs-secondary)" }}
              >
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "var(--cs-secondary)",
                    display: "inline-block",
                    marginTop: "9px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── AREAS OF OWNERSHIP ── */}
        <section id="ownership" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-8"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
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
                    background: "var(--cs-secondary)",
                    display: "inline-block",
                    marginTop: "9px",
                  }}
                />
                <div>
                  <p
                    className="text-[18px] font-semibold mb-0.5"
                    style={{ color: "var(--cs-fg)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[17px] leading-relaxed"
                    style={{ color: "var(--cs-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── HOW I APPROACH DESIGN ── */}
        <section id="approach" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-6"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            How I approach design
          </h2>
          <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
            <p>
              I enjoy working on systems where <Bold>interaction, usability and structure come together</Bold>. My
              process usually involves <Bold>understanding workflows deeply</Bold>, simplifying complexity, exploring
              multiple interaction patterns and <Bold>prototyping ideas quickly</Bold> to test assumptions early.
            </p>
            <p>
              Lately, I&rsquo;ve been using <Bold>AI-assisted workflows with tools like Cursor and Claude Code</Bold> to
              prototype interactions, explore ideas beyond static screens and iterate faster. I also use them to{" "}
              <Bold>build and ship small features</Bold>, helping me test ideas more directly and understand
              implementation constraints earlier in the process.
            </p>
          </div>
        </section>

        {/* ── SECTION 01: CONTEXT SWITCHING ── */}
        <section id="context-switching" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[28px] font-semibold"
              style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
            >
              Context Switching Between Learning Resources
            </h2>
            <span
              className="text-[14px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--cs-muted)" }}
            >
              01 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-12">

            {/* TL;DR */}
            <div>
              <p className="text-[18px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>TL;DR</p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                Designed a <span style={{ fontWeight: 500, color: "var(--cs-fg)" }}>resource switcher that lets students move between textbooks and notebooks</span> without breaking their learning flow.
              </p>
            </div>

            {/* Problem */}
            <div>
              <p className="text-[18px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>Problem</p>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
                Learning often required jumping between different resources. Every switch interrupted focus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[2.4fr_0.7fr] gap-14 items-start">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--cs-bg)", border: "1px solid var(--cs-border)" }}
                >
                  <p
                    className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-6"
                    style={{ color: "var(--cs-muted)" }}
                  >
                    Current Workflow
                  </p>
                  <div
                    className="flex items-center w-full overflow-x-auto"
                    style={{ minWidth: 0, paddingRight: "26px", paddingBottom: "38px" }}
                  >
                    {[
                      { label: "Read", icon: "/icons/cs-textbook.svg" },
                      { label: "Go back", icon: "/icons/cs-goback-v2.svg" },
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
                            className="absolute text-[14px] leading-snug text-center whitespace-nowrap"
                            style={{ color: "var(--cs-fg)", top: "76px", left: "50%", transform: "translateX(-50%)" }}
                          >
                            {step.label}
                          </p>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="shrink-0" style={{ flex: "1 1 40px", height: "1px", background: "var(--cs-border)" }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <p
                    className="text-[14px] text-center"
                    style={{ color: "var(--cs-muted)", marginTop: "22px" }}
                  >
                    Repeated many times during every study session.
                  </p>
                </div>
                <div className="flex flex-col" style={{ marginLeft: "-20px" }}>
                  <p className="text-[18px] font-medium mb-5" style={{ color: "var(--cs-fg)" }}>Pain Points</p>
                  <div className="flex flex-col gap-4">
                    {[
                      "Too many steps to switch",
                      "Breaks study flow",
                      "Interrupts note-taking",
                      "Hard to resume where you left off",
                    ].map((point, i) => (
                      <p
                        key={point}
                        className={`text-[17px] font-normal ${i === 0 ? "whitespace-nowrap" : ""}`}
                        style={{ color: "var(--cs-red)" }}
                      >
                        {i + 1}. {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Design Goals */}
            <div>
              <p className="text-[18px] font-semibold mb-4" style={{ color: "var(--cs-fg)" }}>Design Goals</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "/icons/dg-faster-switching.svg", title: "Faster switching", subtitle: "Reduce navigation steps" },
                  { icon: "/icons/dg-learning-flow.svg", title: "Preserve learning flow", subtitle: "Keep students focused" },
                  { icon: "/icons/dg-minimal-interface.svg", title: "Minimal interface", subtitle: "Only appears when needed" },
                  { icon: "/icons/dg-mental-model.svg", title: "Familiar mental model", subtitle: "Feels natural to use" },
                ].map((goal) => (
                  <div
                    key={goal.title}
                    className="rounded-xl p-4"
                    style={{ background: "var(--cs-yellow-bg)", border: "1.5px solid var(--cs-yellow-border)" }}
                  >
                    <Image src={goal.icon} alt="" width={22} height={22} />
                    <p className="text-[16px] font-medium leading-snug mt-2" style={{ color: "var(--cs-yellow-text)" }}>{goal.title}</p>
                    <p className="text-[14px] leading-snug mt-1" style={{ color: "var(--cs-yellow-subtext)" }}>{goal.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exploration */}
            <div>
              <p className="text-[18px] font-semibold mb-6" style={{ color: "var(--cs-fg)" }}>Exploration</p>

              {/* Part 1 - Finding the right entry point */}
              <div>
                <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                  Part 1 - Finding the right entry point
                </p>
                <p className="text-[17px] leading-relaxed mb-10" style={{ color: "var(--cs-muted)" }}>
                  How should students open the switcher?
                </p>

                <ExplorationTabs
                  iterations={[
                    {
                      tabLabel: "Iteration 1",
                      image: "/context-switching-iteration-1.png",
                      imageWidth: 906,
                      imageHeight: 1312,
                      alt: "Iteration 1: single pull-down swipe from top, shown on iPad",
                      title: "Single Pull down swipe from top",
                      idea: "Swipe down from the top edge to open the resource switcher.",
                      whyTitle: "Fast and gesture first access",
                      why: "Let students access resources quickly without any visible UI taking up space.",
                      moveAwayTitle: "Conflicted with system gestures.",
                      moveAway: "It was easy to trigger accidentally and clashed with system gestures.",
                    },
                    {
                      tabLabel: "Iteration 2",
                      image: "/context-switching-iteration-2.png",
                      imageWidth: 906,
                      imageHeight: 1312,
                      alt: "Iteration 2: toolbar action, shown on iPad",
                      title: "Toolbar Action",
                      idea: "Used a dedicated switcher button in the toolbar.",
                      whyTitle: "Familiar and easy to discover",
                      why: "Students are already familiar with toolbar actions in productivity tools.",
                      moveAwayTitle: "Added an extra tap for a frequent action",
                      moveAway: "Slowed down a workflow students repeat throughout a study session.",
                    },
                    {
                      tabLabel: "Iteration 3",
                      image: "/context-switching-iteration-3.png",
                      imageWidth: 906,
                      imageHeight: 1313,
                      alt: "Iteration 3: handle and pull gesture, shown on iPad",
                      title: "Handle + Pull Gesture",
                      idea: "Reveal the switcher by pulling a handle from the top edge.",
                      whyTitle: "Easy to discover",
                      why: "Visible enough to discover and quick to access.",
                      moveAwayTitle: "Required a persistent handle.",
                      moveAway: "Takes up canvas space and interrupts focus.",
                    },
                  ]}
                />
              </div>

              {/* Key Insight -- hidden for now (not deleted), per request */}
              {false && (
                <div className="rounded-2xl p-5 mt-8" style={{ background: "var(--cs-blue-bg)", border: "1px solid var(--cs-blue-border)" }}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--cs-blue)" }}>
                    Key Insight
                  </p>
                  <p className="text-[17px] leading-relaxed font-medium" style={{ color: "var(--cs-blue-text)" }}>
                    This exploration shifted my thinking from navigating between screens to switching within the same collection &mdash; like opening another folder in the same workspace.
                  </p>
                </div>
              )}

              {/* Final entry point decision */}
              <div className="mt-12">
                <p className="text-[18px] font-semibold mb-2" style={{ color: "var(--cs-fg)" }}>
                  Final entry point (Two finger swipe down + Control Center access)
                </p>
                <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
                  The switcher opens with a two-finger swipe down from the top edge, with a direct entry point from Control Center when needed.
                </p>

                <p className="text-[18px] font-medium mb-4" style={{ color: "var(--cs-fg)" }}>
                  Why this direction?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {[
                    {
                      icon: "/icons/cs-fast-access.svg",
                      title: "Fast to access",
                      body: "A natural gesture that gets students to their resources in one motion.",
                    },
                    {
                      icon: "/icons/cs-no-persistent-ui.svg",
                      title: "No persistent UI",
                      body: "Keeps the notebook workspace clean and focused.",
                    },
                    {
                      icon: "/icons/cs-easy-to-discover.svg",
                      title: "Easy to discover",
                      body: "Provides a familiar way to access the switcher when needed.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className={`flex flex-col items-start text-left ${i > 0 ? "pl-6" : "pl-0"}`}
                      style={i > 0 ? { borderLeft: "1px solid var(--cs-border)" } : undefined}
                    >
                      <div
                        className="shrink-0 rounded-full flex items-center justify-center mb-3"
                        style={{ width: "40px", height: "40px", background: "var(--cs-blue-bg)" }}
                      >
                        <Image src={item.icon} alt="" width={18} height={18} />
                      </div>
                      <p className="text-[18px] font-medium mb-1" style={{ color: "var(--cs-fg)" }}>
                        {item.title}
                      </p>
                      <p className="text-[14px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/Context switching entry point1.png"
                    alt="Final entry point mockup: two-finger swipe down with Control Center access, annotated to show the switcher icon in Control Center"
                    width={827}
                    height={515}
                    quality={100}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Part 2 - Designing the Switcher */}
              <div className="mt-12">
                <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                  Part 2 - Designing the Switcher
                </p>
                <p className="text-[17px] leading-relaxed mb-10" style={{ color: "var(--cs-secondary)" }}>
                  What should appear when students open it?
                </p>

                <div className="mb-10">
                  <p className="text-[18px] font-medium mb-4" style={{ color: "var(--cs-fg)" }}>
                    Students primarily switched resources for two reasons
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { title: "Continue where they left off", label: "Recently Used" },
                      { title: "Keep important resources close", label: "Favourites" },
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-baseline text-[17px] leading-relaxed" style={{ color: "var(--cs-fg)" }}>
                        <span className="shrink-0" style={{ width: "22px" }}>{i + 1}.</span>
                        <span>
                          {item.title}{" "}
                          <span style={{ color: "var(--cs-blue)" }}>({item.label})</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-2xl p-3 md:p-4"
                  style={{ background: "var(--cs-bg)", border: "1px solid var(--cs-border)" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 md:p-4">
                    {[
                      { image: "/switcher-iteration-1.png", alt: "Iteration 1: switcher grid overlaying the toolbar" },
                      { image: "/switcher-iteration-2.png", alt: "Iteration 2: switcher grid anchored to the bottom of the page" },
                      { image: "/switcher-iteration-3.png", alt: "Iteration 3: switcher shown as a bottom tab bar" },
                    ].map((variant) => (
                      <Image
                        key={variant.image}
                        src={variant.image}
                        alt={variant.alt}
                        width={1048}
                        height={1518}
                        quality={100}
                        className="w-full h-auto block"
                      />
                    ))}
                  </div>

                  <div className="px-2 pb-2 pt-8 md:px-4 md:pb-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "var(--cs-red)" }}>
                      Why it didn&rsquo;t work
                    </p>
                    <div className="flex flex-col gap-6">
                      {[
                        {
                          title: "1. Disconnected interaction",
                          body: "The gesture opened the switcher, but the resulting UI felt separate from the workspace.",
                        },
                        {
                          title: "2. Too app like",
                          body: "Tabs and sheets introduced patterns that felt unfamiliar in a notebook first experience.",
                        },
                      ].map((reason) => (
                        <div key={reason.title}>
                          <p className="text-[17px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                            {reason.title}
                          </p>
                          <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                            {reason.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Direction */}
            <div>
              <p className="text-[18px] font-semibold mb-4" style={{ color: "var(--cs-fg)" }}>Final Direction</p>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
                A switcher accessed through <span style={{ fontWeight: 600, color: "#292929" }}>a two-finger swipe down or directly from the Control Center</span>, combining Recents and Favorites within a single surface.
              </p>

              <div className="rounded-2xl overflow-hidden">
                <VideoPlayer src="/Final Context Switching.mov" className="w-full h-auto block" />
              </div>
            </div>

            {/* Edge Cases */}
            <div style={{ marginTop: "16px" }}>
              <p className="text-[18px] font-semibold mb-4" style={{ color: "var(--cs-fg)" }}>Designing for Edge Cases</p>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
                A big part of this project was thinking beyond the ideal flow. The resource system had to work across different states without making the everyday experience feel more complicated.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Current resource in Recents", body: "Deciding whether the resource a student is currently viewing should appear in their recently accessed list." },
                  { title: "Deleted notebooks", body: "Handling previously accessed content that is no longer available." },
                  { title: "Empty Recents and Favorites", body: "Making empty states still feel intentional rather than broken." },
                  { title: "Preserving reading position", body: "Helping students pick up where they left off without unnecessary effort." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className="shrink-0 rounded-full"
                      style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block", marginTop: "9px" }}
                    />
                    <p className="text-[16px] leading-relaxed">
                      <span className="font-semibold" style={{ color: "var(--cs-fg)" }}>{item.title}</span>
                      <span style={{ color: "var(--cs-secondary)" }}> - {item.body}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I'll be measuring next */}
            <div style={{ marginTop: "32px" }}>
              <p className="text-[18px] font-semibold mb-4" style={{ color: "var(--cs-fg)" }}>What I&rsquo;ll be measuring next (Metrics)</p>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
                The experience is currently being prepared for launch, so I don&rsquo;t have user metrics to share yet. Once it&rsquo;s live, I&rsquo;ll be looking closely at:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Feature adoption", body: "How many students start using the resource switcher?" },
                  { title: "Return usage", body: "Do students come back to previously accessed resources?" },
                  { title: "Time to find content", body: "Can students get to what they need faster?" },
                  { title: "Reading continuity", body: "Does preserving position make it easier to pick up where they left off?" },
                  { title: "Qualitative feedback", body: "What feels intuitive, confusing or unexpectedly useful?" },
                ].map((item, i) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="shrink-0 text-[16px] font-semibold" style={{ width: "20px", color: "var(--cs-fg)" }}>{i + 1}.</span>
                    <div>
                      <p className="text-[16px] font-semibold mb-0.5" style={{ color: "var(--cs-fg)" }}>{item.title}</p>
                      <p className="text-[16px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reflection */}
            <div style={{ marginTop: "32px" }}>
              <p className="text-[18px] font-semibold mb-4" style={{ color: "var(--cs-fg)" }}>Reflection</p>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
                A few things I learned while working through this:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "The fastest interaction isn't always the best one.", body: "The pull down gesture was quick, but it conflicted with system level gestures and introduced unnecessary friction." },
                  { title: "Small entry point decisions can have a big impact.", body: "Where and how students access their resources shaped the entire daily learning flow." },
                  { title: "Handling edge cases early helped keep the core experience simple.", body: "Thinking through empty, deleted and returning states prevented complexity from showing up later." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className="shrink-0 rounded-full"
                      style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block", marginTop: "9px" }}
                    />
                    <div>
                      <p className="text-[16px] font-semibold mb-0.5" style={{ color: "var(--cs-fg)" }}>{item.title}</p>
                      <p className="text-[16px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Quizzes */}
            <div style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
              <h3 className="text-[24px] font-semibold mb-4" style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif" }}>{liveQuizItem.title}</h3>
              <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>{liveQuizItem.description}</p>
              <p className="text-[18px] font-medium mb-3" style={{ color: "var(--cs-fg)" }}>Focused on</p>
              <ul className="flex flex-col gap-2 mb-8">
                {liveQuizItem.focusedOn.map((point) => (
                  <li key={point} className="text-[17px] leading-relaxed flex items-start gap-3" style={{ color: "var(--cs-secondary)" }}>
                    <span className="shrink-0 rounded-full" style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block", marginTop: "9px" }} />{point}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl flex items-center justify-center" style={{ background: "var(--cs-hover-bg)", padding: "32px 24px" }}>
                <div style={{ border: "10px solid #111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)", width: "min(60%, 320px)" }}>
                  <VideoPlayer src={liveQuizItem.media.src} className="w-full h-auto block" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 02: GEOMETRY TOOLS ── */}
        <section id="geometry-tools" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[28px] font-semibold"
              style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
            >
              Geometry Tools: Making Digital Tools Feel Physical
            </h2>
            <span
              className="text-[14px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--cs-muted)" }}
            >
              02 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-14">
            {/* The Challenge */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                The Challenge
              </p>
              <div className="space-y-3">
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  Students already know how rulers, protractors, and compasses work on paper. The challenge was translating those familiar behaviors into digital interactions without making students learn a new system.
                </p>
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  The experience needed to support drawing, measuring, rotating, and positioning tools while remaining intuitive across different age groups.
                </p>
              </div>
            </div>

            {/* Understanding Existing Patterns */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                Understanding Existing Patterns
              </p>
              <div className="space-y-3">
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  Before designing the interactions, I studied how geometry tools were implemented across learning platforms, whiteboard products, and drawing applications.
                </p>
                <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                  What I noticed
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Controls were often separated from the tool.",
                    "Interactions felt more technical than physical.",
                    "Students had to learn new behaviors instead of relying on familiar ones.",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Design Principle — callout card */}
              <div
                className="rounded-2xl px-5 py-4 flex flex-col gap-2 mt-4"
                style={{ background: "var(--cs-blue-bg)", border: "1px solid var(--cs-blue-border)" }}
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--cs-blue)" }}>
                  Design Principle
                </p>
                <p className="text-[17px] leading-relaxed font-medium" style={{ color: "var(--cs-blue-text)" }}>
                  If a student already knows how the tool works on paper, the digital version should behave as closely as possible to that mental model.
                </p>
              </div>
            </div>

            {/* Designing Around Physical Behaviors */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                Designing Around Physical Behaviors
              </p>
              <p className="text-[17px] leading-relaxed mb-4" style={{ color: "var(--cs-secondary)" }}>
                Instead of inventing entirely new interactions, I started with behaviors students already understood.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Move", body: "How would a student naturally reposition a ruler?" },
                  { title: "Rotate", body: "How would they expect a protractor to turn?" },
                  { title: "Draw", body: "Where would they expect to start an arc or circle?" },
                  { title: "Measure", body: "What feedback should appear while measuring?" },
                ].map((item) => (
                  <p key={item.title} className="text-[17px] leading-relaxed">
                    <span className="font-semibold" style={{ color: "var(--cs-fg)" }}>{item.title}</span>
                    <span style={{ color: "var(--cs-secondary)" }}> - {item.body}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Prototyping Interactions in Code */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                Prototyping Interactions in Code
              </p>
              <div className="space-y-3">
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  Many of these behaviors were difficult to evaluate through static Figma screens alone.
                </p>
                <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                  Why I prototyped in code
                </p>
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  Static screens couldn&rsquo;t answer questions like:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Does rotation feel natural?",
                    "Do controls stay accessible while a tool moves?",
                    "Does the interaction still work at the screen edge?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                  I used Cursor to prototype and test these behaviors early, helping validate interactions before development.
                </p>
              </div>
              <div
                className="rounded-2xl flex items-center justify-center mt-6"
                style={{ background: "var(--cs-hover-bg)", padding: "32px 24px" }}
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
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                Designing for Edge Cases
              </p>
              <p className="text-[17px] leading-relaxed mb-4" style={{ color: "var(--cs-secondary)" }}>
                As the tools became movable and interactive, I considered states beyond the ideal flow.
              </p>
              <div className="flex flex-col gap-4 mb-4">
                {[
                  { title: "Screen boundaries", body: "Defined how tools behave when moved close to or partially beyond the screen edge." },
                  { title: "Accessible actions", body: "Ensured contextual actions repositioned appropriately instead of becoming inaccessible." },
                  { title: "Default placement", body: "Considered where each tool should appear initially without obstructing the workspace." },
                  { title: "Different screen sizes", body: "Tested how positioning and interactions could adapt across available space." },
                  { title: "Progressive discovery", body: "Considered how advanced functionality could be revealed without overwhelming students." },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-[16px] font-semibold mb-0.5" style={{ color: "var(--cs-fg)" }}>{item.title}</p>
                    <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                Prototyping these scenarios early helped define clearer behaviors and reduce implementation ambiguity.
              </p>
            </div>

            {/* Key Decisions */}
            <div>
              <p className="text-[18px] font-semibold mb-5" style={{ color: "var(--cs-fg)" }}>
                Key Decisions
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Actions follow the tool",
                    body: "Instead of sending students to a separate toolbar, relevant actions appear alongside the active tool.",
                    why: "Reduces visual scanning and keeps the interaction connected to the object being manipulated.",
                  },
                  {
                    title: "Reveal controls when they're needed",
                    body: "Relevant controls appear as students interact rather than presenting everything upfront.",
                    why: "Keeps the workspace simpler while allowing students to discover functionality naturally.",
                  },
                  {
                    title: "Use familiar gestures",
                    body: "Movement, rotation, drawing, and measuring build on interactions students already understand.",
                    why: "Reduces the amount of new behavior students need to learn.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <span
                      className="text-[14px] tabular-nums shrink-0 mt-0.5"
                      style={{ color: "var(--cs-muted)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>{item.title}</p>
                      <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>{item.body}</p>
                      <p className="text-[17px] leading-relaxed mt-1" style={{ color: "var(--cs-secondary)" }}>
                        <span className="font-semibold" style={{ color: "var(--cs-fg)" }}>Why: </span>
                        {item.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Outcome */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                The Outcome
              </p>
              <p className="text-[17px] leading-relaxed mb-4" style={{ color: "var(--cs-secondary)" }}>
                The final interaction model allowed students to:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Manipulate tools directly",
                  "Use familiar gestures for movement and rotation",
                  "Access relevant actions in context",
                  "Discover functionality through interaction rather than complex controls",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                    <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--cs-secondary)", display: "inline-block" }} />{q}
                  </li>
                ))}
              </ul>
            </div>

            {/* What I learned */}
            <div>
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                What I learned
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                Designing interaction heavy experiences required testing behaviors beyond static screens. Prototyping in code helped me explore motion, edge cases and implementation constraints earlier in the process.
              </p>
            </div>

          </div>
        </section>

        {/* ── SECTION 03: HELPING SCHOOL ADMINS MANAGE DEVICES BETTER ── */}
        <section id="admin" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[28px] font-semibold"
              style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
            >
              Helping school admins manage devices better
            </h2>
            <span
              className="text-[14px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--cs-muted)" }}
            >
              03 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* Problem */}
            <div>
              <p
                className="text-[18px] font-semibold mb-3"
                style={{ color: "var(--cs-fg)" }}
              >
                Problem
              </p>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--cs-secondary)" }}
              >
                School admins needed a quick way to monitor device health,
                assignments, classroom activity, and operational issues without
                feeling overwhelmed by large amounts of data.
              </p>
            </div>

            {/* Approach */}
            <div>
              <p
                className="text-[18px] font-semibold mb-3"
                style={{ color: "var(--cs-fg)" }}
              >
                Approach
              </p>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--cs-secondary)" }}
              >
                I designed dashboards and workflows focused on quick scanning,
                prioritization, and actionable insights so admins could identify
                issues and take action faster.
              </p>
            </div>

            {/* Focus Areas */}
            <div>
              <p
                className="text-[18px] font-semibold mb-3"
                style={{ color: "var(--cs-fg)" }}
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
                    className="text-[17px] leading-relaxed flex items-start gap-3"
                    style={{ color: "var(--cs-secondary)" }}
                  >
                    <span
                      className="shrink-0 rounded-full"
                      style={{
                        width: "4px",
                        height: "4px",
                        background: "var(--cs-secondary)",
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
              style={{ background: "var(--cs-hover-bg)", padding: "24px 16px 16px 16px" }}
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
        <section id="reflection" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <p
            className="text-[18px] font-semibold mb-6"
            style={{ color: "var(--cs-fg)" }}
          >
            Reflection
          </p>
          <h2
            className="text-[28px] font-semibold tracking-[-0.01em] mb-10"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            What I learned
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p
                className="text-[18px] font-semibold leading-snug mb-3"
                style={{ color: "var(--cs-fg)" }}
              >
                Designing for clarity at scale.
              </p>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--cs-secondary)" }}
              >
                Designing classroom experiences taught me that students and
                teachers process information very differently. Every interaction
                needed to feel simple, focused, and easy to navigate without
                becoming overwhelming.
              </p>
            </div>
            <div>
              <p
                className="text-[18px] font-semibold leading-snug mb-3"
                style={{ color: "var(--cs-fg)" }}
              >
                Thinking beyond individual screens.
              </p>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--cs-secondary)" }}
              >
                The work pushed me to think more deeply about workflows,
                interaction systems, scalability, and how features connect
                across students, teachers, and admins instead of treating each
                screen separately.
              </p>
            </div>
          </div>
          <p
            className="text-[17px] font-medium leading-relaxed"
            style={{ color: "var(--cs-fg)" }}
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
          style={{ borderTop: "1px solid var(--cs-border)" }}
        >
          <span className="text-[14px]" style={{ color: "var(--cs-secondary)" }}>
            Designed + Coded with{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginBottom: "1px" }}>
              <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
            </svg>
            {" "}by Aditi
          </span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:aditi.shinde304@gmail.com"
              className="text-[15px] link-dashed"
              style={{ color: "var(--cs-secondary)" }}
            >
              Email
            </a>
            <a
              href="https://x.com/AditiShinde30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] link-dashed"
              style={{ color: "var(--cs-secondary)" }}
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/aditi-shinde-5415681b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] link-dashed"
              style={{ color: "var(--cs-secondary)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] link-dashed"
              style={{ color: "var(--cs-secondary)" }}
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
