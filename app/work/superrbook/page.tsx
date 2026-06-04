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
            <h2 className="text-[16px] font-medium" style={{ color: "var(--foreground)" }}>
              Context Switching Between Learning Resources
            </h2>
            <span className="text-[13px] tabular-nums shrink-0 ml-6" style={{ color: "var(--muted)" }}>
              01 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-12">

            {/* Overview */}
            <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>One of the most common learning behaviors in Superrbook is switching between textbooks and notebooks. Students frequently read from a textbook, write notes in a notebook, and then return to continue reading. This simple workflow can happen multiple times within a single study session.</p>
              <p>However, the existing experience made switching unnecessarily difficult. To move between resources, students had to leave their current content, navigate back through modules, browse directories, and manually find what they were looking for again.</p>
              <p>The challenge wasn&rsquo;t helping students open another textbook or notebook. It was helping them stay focused while moving between resources.</p>
            </div>

            {/* Existing Experience */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Existing Experience</p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>To move between resources, students had to exit their current content and manually navigate back each time.</p>
              <div className="rounded-2xl p-6" style={{ background: "var(--hover-bg)" }}>
                <div className="flex flex-col gap-2">
                  {["Textbook", "Back to Modules", "Browse Directory", "Find Notebook", "Open Notebook"].map((step, i, arr) => (
                    <div key={step} className="flex flex-col items-start gap-1">
                      <span className="text-[14px] font-medium px-3 py-1.5 rounded-lg" style={{ background: "var(--background)", color: "var(--foreground)" }}>{step}</span>
                      {i < arr.length - 1 && <span className="text-[13px] pl-3" style={{ color: "var(--muted)" }}>↓</span>}
                    </div>
                  ))}
                </div>
                <p className="text-[13px] mt-5 leading-relaxed" style={{ color: "var(--muted)" }}>Students repeated this process multiple times during a study session, creating unnecessary friction between reading and note-taking.</p>
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Why It Matters</p>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>Switching between resources is not an occasional behavior. It&rsquo;s a high-frequency interaction that sits at the center of how students learn. The most common pattern looked like:</p>
                <div className="flex items-center gap-2 py-3 px-4 rounded-xl" style={{ background: "var(--hover-bg)" }}>
                  {["Textbook", "Notebook", "Textbook"].map((step, i, arr) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="text-[14px] font-medium" style={{ color: "var(--foreground)" }}>{step}</span>
                      {i < arr.length - 1 && <span style={{ color: "var(--muted)" }}>→</span>}
                    </span>
                  ))}
                </div>
                <p>Students wanted to quickly capture a thought and immediately return to where they left off. When switching became difficult:</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Students lost their train of thought",
                    "Note-taking became less frequent",
                    "Learning sessions felt fragmented",
                    "Valuable context was lost between reading and writing",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />
                      {point}
                    </li>
                  ))}
                </ul>
                <p>The ideal experience should feel almost invisible. Students should be able to move between resources without interrupting their learning flow.</p>
              </div>
            </div>

            {/* Defining Success */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Defining Success</p>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--muted)" }}>The solution needed to optimize for the most common behavior while supporting more complex workflows. The goal was reducing navigation overhead without introducing new complexity.</p>
              <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--hover-bg)" }}>
                {[
                  ["Textbook", "Notebook", "Textbook"],
                  ["Textbook", "Notebook A", "Notebook B", "Textbook"],
                  ["Textbook A", "Textbook B"],
                ].map((flow, i) => (
                  <div key={i} className="flex items-center flex-wrap gap-2">
                    {flow.map((step, j) => (
                      <span key={j} className="flex items-center gap-2">
                        <span className="text-[13px] font-medium" style={{ color: "var(--foreground)" }}>{step}</span>
                        {j < flow.length - 1 && <span className="text-[13px]" style={{ color: "var(--muted)" }}>→</span>}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Exploration */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Exploration</p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--muted)" }}>The trigger became the most debated part of the feature. The solution needed to be fast, discoverable, accessible, compatible with writing and drawing experiences, and flexible enough to work across textbooks and notebooks. We explored multiple directions before arriving at the final solution.</p>

              <div className="flex flex-col gap-8">
                {[
                  {
                    label: "Option 01 — Swipe From Top",
                    pros: ["Familiar interaction", "Quick access"],
                    cons: ["Conflicted with system gestures", "Notification panel collisions", "Difficult to own consistently across the OS"],
                    decision: "Rejected. The gesture competed directly with operating system interactions and could not be reliably controlled within the product.",
                  },
                  {
                    label: "Option 02 — Toolbar Action",
                    pros: ["Easy to discover", "Familiar interaction pattern"],
                    cons: ["Slower for frequent usage", "Added additional UI controls", "Increased interaction cost for a high-frequency action"],
                    decision: "Rejected. The interaction felt too heavy for a workflow students perform repeatedly throughout a study session.",
                  },
                  {
                    label: "Option 03 — Handle + Pull Gesture",
                    pros: ["Discoverable", "Fast for repeat usage", "Easy to understand"],
                    cons: ["Required persistent UI across the entire product", "Valuable top-of-screen space lost in notebooks", "Added visual clutter to focused reading and writing surfaces"],
                    decision: "Rejected. While the handle improved discoverability, the tradeoff of adding permanent interface chrome across the product felt too expensive for a feature intended to stay lightweight.",
                  },
                ].map((option) => (
                  <div key={option.label} className="rounded-2xl p-5" style={{ background: "var(--hover-bg)" }}>
                    <p className="text-[14px] font-medium mb-4" style={{ color: "var(--foreground)" }}>{option.label}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-[12px] font-medium mb-2 tracking-[0.04em] uppercase" style={{ color: "var(--foreground)" }}>Pros</p>
                        <ul className="flex flex-col gap-1.5">
                          {option.pros.map((p) => (
                            <li key={p} className="text-[14px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                              <span className="shrink-0 rounded-full mt-[8px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[12px] font-medium mb-2 tracking-[0.04em] uppercase" style={{ color: "var(--foreground)" }}>Cons</p>
                        <ul className="flex flex-col gap-1.5">
                          {option.cons.map((c) => (
                            <li key={c} className="text-[14px] leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                              <span className="shrink-0 rounded-full mt-[8px]" style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }} />{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed pt-4" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}><span className="font-medium" style={{ color: "var(--foreground)" }}>Decision — </span>{option.decision}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Direction */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Final Direction — Two-Finger Swipe + Control Center</p>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>After evaluating multiple approaches, we chose a two-finger swipe-down gesture as the primary trigger for the switcher. The gesture allowed the feature to remain hidden until needed, keeping the reading and writing experience clean while avoiding conflicts with existing interactions.</p>
                <p>To improve discoverability, a secondary entry point was added to the Control Center, allowing students to access the switcher through a visible action whenever needed. This created a balance between clean surfaces, fast access for experienced users, discoverability through an alternative entry point, and compatibility with notebooks and drawing experiences.</p>
              </div>
            </div>

            {/* Designing the Switcher */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Designing the Switcher</p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>Once the entry point was defined, the next challenge was designing the switcher itself. The switcher needed to support two distinct behaviors — quickly returning to recently used resources, and accessing intentionally saved resources. This led to two sections within the switcher.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Recents", body: "Resources ordered by recent activity. Designed to support fast round-trip behavior. The most recently closed resource appears at the top, making it easy to return to previous work." },
                  { title: "Favorites", body: "Resources intentionally saved by students for quick access. Unlike Recents, Favorites are user-curated and remain stable over time, providing predictable access to frequently referenced content." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl p-5" style={{ background: "var(--hover-bg)" }}>
                    <p className="text-[14px] font-medium mb-2" style={{ color: "var(--foreground)" }}>{item.title}</p>
                    <p className="text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>Modal explorations included a single list approach, tabbed navigation, segmented control, and split sections. The final decision was a lightweight overlay with Recents as the default view and Favorites available as a secondary view — prioritizing the most common behavior while still supporting intentional organization.</p>
            </div>

            {/* Edge Cases */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Designing for Edge Cases</p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>A significant part of the project involved defining behavior beyond the happy path. Questions included:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Should the currently open resource appear in Recents?",
                  "What happens when a notebook is deleted?",
                  "How should duplicate entries behave?",
                  "What happens during active writing?",
                  "Should reading position be preserved?",
                  "Should tool states be remembered when returning?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full mt-[9px]" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block" }} />{q}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>Each decision was documented and evaluated to ensure the system remained predictable, scalable, and reliable as usage increased.</p>
            </div>

            {/* Looking Ahead */}
            <div>
              <p className="text-[13px] font-medium mb-4" style={{ color: "var(--foreground)" }}>Looking Ahead</p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>The switching system was intentionally designed as a foundation for future workflows. One direction explored was split-screen learning — students could drag a resource from the switcher and open it alongside their current content.</p>
              <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--hover-bg)" }}>
                {[["Textbook", "Notebook"], ["Notebook", "Notebook"], ["Textbook", "Textbook"]].map((pair, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {pair.map((step, j) => (
                      <span key={j} className="flex items-center gap-2">
                        <span className="text-[13px] font-medium" style={{ color: "var(--foreground)" }}>{step}</span>
                        {j < pair.length - 1 && <span className="text-[13px]" style={{ color: "var(--muted)" }}>+</span>}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>This would allow students to compare, reference, and take notes simultaneously without repeatedly switching contexts.</p>
            </div>

            {/* Live Quizzes */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
              <h3 className="text-[16px] font-medium mb-4" style={{ color: "var(--foreground)" }}>{liveQuizItem.title}</h3>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{liveQuizItem.description}</p>
              <p className="text-[13px] font-medium mb-3" style={{ color: "var(--foreground)" }}>Focused on</p>
              <ul className="flex flex-col gap-2 mb-8">
                {liveQuizItem.focusedOn.map((point) => (
                  <li key={point} className="text-[15px] leading-relaxed flex items-start gap-3" style={{ color: "var(--muted)" }}>
                    <span className="shrink-0 rounded-full" style={{ width: "4px", height: "4px", background: "var(--muted)", display: "inline-block", marginTop: "9px" }} />
                    {point}
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

        {/* ── SECTION 02: DESIGNING INTERACTION-HEAVY LEARNING TOOLS ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[16px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Designing interaction-heavy learning tools
            </h2>
            <span
              className="text-[13px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--muted)" }}
            >
              02 / {String(TOTAL_SECTIONS).padStart(2, "0")}
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
                Tools like geometry interactions and classroom whiteboards involved
                complex states, gestures, and edge cases that were difficult to fully
                understand through static designs alone.
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
                I prototyped interactions directly in Cursor to test motion, tool
                behavior, responsiveness, and interaction logic early in the process.
                This helped reveal usability issues and edge cases much faster.
              </p>
            </div>

            {/* Learning */}
            <div>
              <p
                className="text-[13px] font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Learning
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Working closer to code improved how I thought about interactions,
                system behavior, and implementation constraints while collaborating
                with engineers.
              </p>
            </div>

            {/* Visuals */}
            <div
              className="rounded-2xl flex items-center justify-center"
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
