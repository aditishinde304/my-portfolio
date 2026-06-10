import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";

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
      <main className="max-w-[680px] mx-auto px-8 py-20 md:py-28">

        {/* Back */}
        <Link
          href="/"
          className="text-[13px] inline-block mb-16 link-dashed"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>

        {/* ── HEADING ── */}
        <div className="mb-16">
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[16px] font-medium mb-6"
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
                className="text-[15px] leading-relaxed flex items-start gap-3"
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[16px] font-medium mb-8"
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
                    className="text-[15px] font-medium mb-0.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[15px] leading-relaxed"
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[16px] font-medium mb-6"
            style={{ color: "var(--foreground)" }}
          >
            How I approach design
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[16px] font-medium"
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

            {/* Overview */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Overview</p>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>One of the most common learning behaviors in Superrbook is switching between textbooks and notebooks. Students frequently read from a textbook, write notes in a notebook, and then return to continue reading. This simple workflow can happen multiple times within a single study session.</p>
                <p>However, the existing experience made switching unnecessarily difficult. To move between resources, students had to leave their current content, navigate back through modules, browse directories, and manually find what they were looking for again.</p>
                <p>The challenge wasn&rsquo;t helping students open another textbook or notebook. It was helping them stay focused while moving between resources.</p>
              </div>
            </div>

            {/* Current Flow */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Existing Experience</p>
              <div className="rounded-2xl p-6" style={{ background: "var(--hover-bg)" }}>
                {/* Horizontal flow */}
                <div className="flex items-center w-full mb-5">
                  {["Textbook", "Go back", "Browse files", "Find notebook", "Open notebook"].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span
                        className="text-[12px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0"
                        style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <div style={{ flex: 1 }}>
                          <svg width="100%" height="10" fill="none" preserveAspectRatio="none">
                            <line x1="0" y1="5" x2="100%" y2="5" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="4 4"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* Caption */}
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Students often switched between textbooks and notebooks while studying. Each switch required multiple steps, breaking their focus and slowing down note-taking.
                </p>
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Why It Matters</p>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>Switching between resources is not an occasional behavior. It&rsquo;s a high-frequency interaction that sits at the center of how students learn. The most common pattern looked like:</p>
                <div className="flex items-center gap-2 py-3 px-4 rounded-xl" style={{ background: "var(--hover-bg)" }}>
                  {["Textbook", "Notebook", "Textbook"].map((step, i, arr) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="text-[15px] font-medium" style={{ color: "var(--foreground)" }}>{step}</span>
                      {i < arr.length - 1 && <span style={{ color: "var(--muted)" }}>→</span>}
                    </span>
                  ))}
                </div>
                <p>Students wanted to quickly capture a thought and immediately return to where they left off. When switching became difficult:</p>
                <ul className="flex flex-col gap-2">
                  {["Students lost their train of thought","Note-taking became less frequent","Learning sessions felt fragmented","Valuable context was lost between reading and writing"].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{point}
                    </li>
                  ))}
                </ul>
                <p>The ideal experience should feel almost invisible. Students should be able to move between resources without interrupting their learning flow.</p>
              </div>
            </div>

            {/* Defining Success */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Defining Success</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Enable students to switch resources in as few steps as possible.",
                  "Support the most common workflow, reading and note taking side by side.",
                  "Make returning to previous resources effortless.",
                  "Reduce context loss during study sessions.",
                  "Avoid interfering with writing and drawing interactions.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exploration */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Exploration</p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--muted)" }}>The trigger became the most debated part of the feature. The solution needed to be fast, discoverable, accessible, compatible with writing and drawing experiences, and flexible enough to work across textbooks and notebooks. I explored multiple directions before arriving at the final solution.</p>
              <div className="flex flex-col gap-6">

                {/* Option 01 — custom layout */}
                <div className="rounded-2xl">
                  {/* Header */}
                  <div className="pb-4">
                    <p className="text-[15px] font-medium" style={{ color: "var(--foreground)" }}>01  Single Pull-Down Swipe From Top</p>
                  </div>

                  {/* Image */}
                  <div className="mb-5 rounded-2xl overflow-hidden p-4" style={{ background: "var(--hover-bg)" }}>
                    <Image src="/Context Switching 1.png" alt="Swipe from top gesture exploration" width={800} height={1120} quality={100} className="w-full h-auto block rounded-xl" />
                  </div>

                  {/* Cons + Pros */}
                  <div className="grid grid-cols-2 gap-8 mb-5">
                    <div>
                      <p className="text-[15px] font-medium mb-3" style={{ color: "var(--muted)" }}>Cons</p>
                      <ul className="flex flex-col gap-2">
                        {["Conflicted with system gestures", "Difficult to own consistently across the OS"].map((c) => (
                          <li key={c} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                            <span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[15px] font-medium mb-3" style={{ color: "var(--muted)" }}>Pros</p>
                      <ul className="flex flex-col gap-2">
                        {["Quick access"].map((p) => (
                          <li key={p} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                            <span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decision card */}
                  <div className="mb-5 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                    <p className="text-[15px] font-medium mb-2" style={{ color: "#DC2626" }}>Decision: Rejected</p>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#7F1D1D" }}>
                      The gesture competed directly with operating system interactions and could not be reliably controlled within the product.
                    </p>
                  </div>
                </div>

                {/* Option 02 */}
                <div key="Option 02  Toolbar Action" className="rounded-2xl">
                  <div className="pb-4">
                    <p className="text-[15px] font-medium" style={{ color: "var(--foreground)" }}>02  Toolbar Action</p>
                  </div>
                  <div className="mb-5 rounded-2xl overflow-hidden p-4" style={{ background: "var(--hover-bg)" }}>
                    <Image src="/Context Switching 02.png" alt="Toolbar action exploration" width={800} height={1120} quality={100} className="w-full h-auto block rounded-xl" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                    <div>
                      <p className="text-[15px] font-medium mb-2" style={{ color: "var(--muted)" }}>Cons</p>
                      <ul className="flex flex-col gap-1.5">{["Slower for frequent usage","Added additional UI controls","Extra interaction steps required"].map((c) => (<li key={c} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}><span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{c}</li>))}</ul>
                    </div>
                    <div>
                      <p className="text-[15px] font-medium mb-2" style={{ color: "var(--muted)" }}>Pros</p>
                      <ul className="flex flex-col gap-1.5">{["Familiar interaction pattern"].map((p) => (<li key={p} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}><span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{p}</li>))}</ul>
                    </div>
                  </div>
                  <div className="mb-5 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                    <p className="text-[15px] font-medium mb-2" style={{ color: "#DC2626" }}>Decision: Rejected</p>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#7F1D1D" }}>The interaction felt too heavy for a workflow students perform repeatedly throughout a study session.</p>
                  </div>
                </div>

                {/* Option 03 */}
                <div key="Option 03  Handle + Pull Gesture" className="rounded-2xl">
                  <div className="pb-4">
                    <p className="text-[15px] font-medium" style={{ color: "var(--foreground)" }}>03  Handle + Pull Gesture</p>
                  </div>
                  <div className="mb-5 rounded-2xl overflow-hidden p-4" style={{ background: "var(--hover-bg)" }}>
                    <Image src="/Context Switching 03.png" alt="Handle and pull gesture exploration" width={800} height={1120} quality={100} className="w-full h-auto block rounded-xl" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                    <div>
                      <p className="text-[15px] font-medium mb-2" style={{ color: "var(--muted)" }}>Cons</p>
                      <ul className="flex flex-col gap-1.5">{["Required persistent UI across the entire product","Valuable top-of-screen space lost in notebooks","Added visual clutter to focused reading and writing surfaces"].map((c) => (<li key={c} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}><span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{c}</li>))}</ul>
                    </div>
                    <div>
                      <p className="text-[15px] font-medium mb-2" style={{ color: "var(--muted)" }}>Pros</p>
                      <ul className="flex flex-col gap-1.5">{["Discoverable","Fast for repeat usage","Easy to understand"].map((p) => (<li key={p} className="text-[15px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}><span className="shrink-0 rounded-full mt-[7px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{p}</li>))}</ul>
                    </div>
                  </div>
                  <div className="mb-5 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                    <p className="text-[15px] font-medium mb-2" style={{ color: "#DC2626" }}>Decision: Rejected</p>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#7F1D1D" }}>While the handle improved discoverability, the tradeoff of adding permanent interface chrome across the product felt too expensive for a feature intended to stay lightweight.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Designing the Switcher */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Designing the Switcher</p>
              <div className="space-y-4 text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                <p>Once I decided the entry point for the switcher, the next challenge was determining what should happen after it opened.</p>
                <p>Students primarily switched resources for two reasons:</p>
              </div>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Returning to something they had recently used (Recents)",
                  "Accessing resources they intentionally wanted to keep close (Favorites)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>This led to exploring different ways of organizing content within the switcher.</p>

              {/* Modal Explorations */}
              <div className="rounded-2xl mb-6 p-4" style={{ background: "var(--hover-bg)" }}>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "/Context Switching Explo 1 .png",
                    "/Context Switching Explo 2.png",
                    "/Context Switching Explo 3.png",
                  ].map((src, i) => (
                    <div key={i} className="overflow-hidden">
                      <Image
                        src={src}
                        alt={`Modal exploration ${i + 1}`}
                        width={600}
                        height={840}
                        quality={100}
                        className="w-full h-auto block"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                <p>While these explorations helped validate the information architecture, they didn&rsquo;t feel quite right as a final solution.</p>
                <p>The switcher was triggered through a top-down gesture, but center modals and bottom sheets felt disconnected from that interaction. The experience lacked a sense of continuity between the gesture and the resulting UI.</p>
                <p>The tabbed explorations also felt overly app-like and borrowed patterns commonly found in web products. Since Superrbook is built around notebooks, textbooks, and paper-based learning, I wanted the interaction to feel closer to how students naturally organize physical resources.</p>
              </div>

              <div className="rounded-2xl p-5 mb-6" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <p className="text-[15px] leading-relaxed font-medium" style={{ color: "#1E3A8A" }}>
                  This led to an approach inspired by physical file folders, where Recents and Favorites tabs felt like sections within the same collection rather than separate screens.
                </p>
              </div>

              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>These explorations helped clarify not only what content should appear inside the switcher, but also how the switcher should feel.</p>

              {/* Final Direction sub-section */}
              <p className="text-[15px] font-medium mb-4 mt-8" style={{ color: "var(--foreground)" }}>Final Direction</p>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>After exploring multiple approaches, I landed on a switcher that could be accessed through <span style={{ fontWeight: "600" }}>a two finger swipe down gesture or directly from the Control Center</span>.</p>
              </div>

              {/* Final Context Switching Video */}
              <div className="my-6 rounded-2xl overflow-hidden">
                <VideoPlayer src="/Final Context Switching.mov" className="w-full h-auto block" />
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>Together, these interactions balanced speed and discoverability without introducing persistent UI into textbooks and notebooks. Students could quickly move between resources when needed, while the learning experience remained focused and distraction-free.</p>
                <p>The final solution combined Recents and Favorites within a single surface, allowing students to return to recently used resources or access intentionally saved content from one place.</p>
              </div>
            </div>

            {/* Edge Cases */}
            <div>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Designing for Edge Cases</p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>A significant part of the project involved defining behavior beyond the happy path. Questions included:</p>
              <ul className="flex flex-col gap-2">
                {["Should the currently open resource appear in Recents?","What happens when a notebook is deleted?","What happens when there are no recent or favourite resources?","Should reading position be preserved?"].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>Every edge case was intentionally defined to ensure the switcher behaved consistently, remained easy to understand, and could scale across future learning workflows.</p>
            </div>

            {/* Looking Ahead */}
            <div style={{ display: "none" }}>
              <p className="text-[15px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Looking Ahead</p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>The switching system was intentionally designed as a foundation for future workflows. One direction explored was split-screen learning — students could drag a resource from the switcher and open it alongside their current content.</p>
              <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--hover-bg)" }}>
                {[["Textbook","Notebook"],["Notebook","Notebook"],["Textbook","Textbook"]].map((pair, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {pair.map((step, j) => (<span key={j} className="flex items-center gap-2"><span className="text-[13px] font-medium" style={{ color: "var(--foreground)" }}>{step}</span>{j < pair.length - 1 && <span className="text-[13px]" style={{ color: "var(--muted)" }}>+</span>}</span>))}
                  </div>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>This would allow students to compare, reference, and take notes simultaneously without repeatedly switching contexts.</p>
            </div>

            {/* Live Quizzes */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
              <h3 className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>{liveQuizItem.title}</h3>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{liveQuizItem.description}</p>
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>Focused on</p>
              <ul className="flex flex-col gap-2 mb-8">
                {liveQuizItem.focusedOn.map((point) => (
                  <li key={point} className="text-[15px] leading-relaxed flex items-start gap-3" style={{ color: "var(--muted)" }}>
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[16px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Geometry Tools — Making Digital Tools Feel Physical
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
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                The Challenge
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Geometry tools are familiar in the physical world. Students already know how a ruler, protractor, or compass behaves on paper.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The challenge wasn't just adding these tools digitally—it was making them feel intuitive enough that students could use them without learning a completely new system.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The experience needed to support drawing, measuring, rotating, and positioning tools while remaining approachable for students across different age groups.
                </p>
              </div>
            </div>

            {/* Understanding Existing Patterns */}
            <div>
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Understanding Existing Patterns
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Before designing the interactions, I studied how geometry tools were implemented across learning platforms, whiteboard products, and drawing applications.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
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
                <p className="text-[15px] leading-relaxed font-medium" style={{ color: "#1E3A8A" }}>
                  If a student already knows how the tool works on paper, the digital version should behave as closely as possible to that mental model.
                </p>
              </div>
            </div>

            {/* Designing Around Physical Behaviors */}
            <div>
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Designing Around Physical Behaviors
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Geometry tools are something students already understand from the physical world. Instead of introducing entirely new interaction patterns, I wanted the digital experience to build on behaviors students were already familiar with.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  This meant constantly asking:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "How would a student expect a ruler to move?",
                    "How would they rotate a protractor?",
                    "Where would they look to start drawing an arc or circle?",
                    "What feedback should appear while measuring?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The goal wasn't to replicate physical tools exactly, but to preserve the mental models students already had while taking advantage of digital capabilities.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  As a result, interactions were designed around direct manipulation, allowing students to move, rotate, measure and draw directly from the tool itself without relying on separate control panels or complex menus.
                </p>
              </div>
            </div>

            {/* Prototyping Interactions in Code */}
            <div>
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Prototyping Interactions in Code
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Many of these behaviors were difficult to evaluate through static Figma screens alone.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  To better understand how the tools would feel in use, we prototyped interactions directly in Cursor and tested different approaches for movement, rotation, drawing and tool states.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
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
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Designing for Edge Cases
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
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
                    <li key={q} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Prototyping helped uncover these scenarios early, making it easier to define clear behaviors before development and reduce implementation ambiguity.
                </p>
              </div>
            </div>

            {/* Key Decisions */}
            <div>
              <p className="text-[15px] font-medium mb-5" style={{ color: "var(--foreground)" }}>
                Key Decisions
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "1. Tool Actions Stay Close to the Tool",
                    body: [
                      "Instead of placing controls in a separate toolbar, contextual actions were attached directly to the active tool.",
                      "This reduced visual scanning and kept interactions close to where students were working, making the experience feel more direct and intuitive.",
                    ],
                  },
                  {
                    title: "2. Discovery Through Use",
                    body: [
                      "Rather than relying on tutorials or onboarding flows, interactions were designed to reveal themselves naturally as students explored the tools.",
                      "For example, selecting a protractor exposed drawing points and controls that hinted at additional capabilities such as creating arcs and measuring angles. This allowed students to learn the tool while using it.",
                    ],
                  },
                  {
                    title: "3. Familiar Gestures Over Custom Controls",
                    body: [
                      "Instead of introducing dedicated rotate buttons or complex controls, interactions were based on gestures students already understood.",
                    ],
                    bullets: ["One finger to move.", "Two fingers to rotate.", "Direct touch points for drawing and measuring."],
                    footer: "This reduced the learning curve and helped the digital tools feel closer to their physical counterparts.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-[14px] font-medium mb-2" style={{ color: "var(--foreground)" }}>{item.title}</p>
                    <div className="space-y-2">
                      {item.body.map((p) => (
                        <p key={p} className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{p}</p>
                      ))}
                      {item.bullets && (
                        <ul className="flex flex-col gap-1">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                              <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.footer && (
                        <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{item.footer}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div>
              <p className="text-[15px] font-medium mb-3" style={{ color: "var(--foreground)" }}>
                Outcome
              </p>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  The final experience balanced familiarity and flexibility by borrowing behaviors from physical geometry tools while adapting them for touch interactions.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  Prototyping the interactions in code helped validate complex behaviors, uncover edge cases early and refine the experience before implementation.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 03: HELPING SCHOOL ADMINS MANAGE DEVICES BETTER ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[16px] font-medium"
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
                className="text-[13px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Problem
              </p>
              <p
                className="text-[15px] leading-relaxed"
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
                className="text-[13px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Approach
              </p>
              <p
                className="text-[15px] leading-relaxed"
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
                className="text-[13px] font-medium mb-3"
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
                    className="text-[15px] leading-relaxed flex items-start gap-3"
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
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <p
            className="text-[16px] font-medium mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Reflection
          </p>
          <h2
            className="text-[20px] font-semibold leading-tight tracking-[-0.01em] mb-10"
            style={{ color: "var(--foreground)" }}
          >
            What I learned
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p
                className="text-[15px] font-medium leading-snug mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Designing for clarity at scale.
              </p>
              <p
                className="text-[15px] leading-relaxed"
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
                className="text-[15px] font-medium leading-snug mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Thinking beyond individual screens.
              </p>
              <p
                className="text-[15px] leading-relaxed"
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
            className="text-[15px] font-medium leading-relaxed"
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
  );
}
