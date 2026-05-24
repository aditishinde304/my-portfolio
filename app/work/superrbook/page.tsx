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

const classroomItems = [
  {
    title: "Assignments",
    description:
      "Designed assignment workflows that helped students stay organized and teachers manage classroom tasks more efficiently. Below are a few screens from the teacher experience.",
    focusedOn: [
      "Better task visibility",
      "Simpler submission flows",
      "Reducing classroom confusion",
      "Making assignments easier to track and access",
    ],
    media: { type: "video", src: "/Assignments.mov", fullWidth: true },
  },
  {
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
  },
];

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
            <p className="text-[22px] font-semibold tracking-[-0.01em]" style={{ color: "var(--foreground)", lineHeight: "1.6" }}>
              How might we design classroom tools that feel intuitive for teachers
              and engaging for students?
            </p>
            <p>
              Most classroom platforms today are built around management and
              operations, not around how learning actually happens inside
              classrooms.
            </p>
            <p>
              Teachers constantly switch between tools to manage assignments,
              files, whiteboards, assessments and student progress, while
              students often end up navigating experiences that feel overwhelming
              and disconnected.
            </p>
            <p>
              Superrbook was designed to bring these workflows into one connected
              system that feels simpler, lighter and more engaging for both
              students and teachers.
            </p>
            <p>
              I worked across different parts of the product including classroom
              workflows and the admin portal, focusing on simplifying complex
              systems, improving usability and designing interaction heavy
              experiences that feel intuitive to use.
            </p>
          </div>
        </section>

        {/* ── FULL-WIDTH MEDIA ── */}
        <div className="mb-16 rounded-2xl overflow-hidden">
          <VideoPlayer
            src="/Superrbook.mov"
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
              "Worked across student, teacher, and admin experiences",
              "Designed and shipped multiple classroom workflows and interaction-heavy features",
              "Collaborated closely with PMs and engineers",
              "Explored interaction prototyping using Cursor and AI-assisted workflows",
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

        {/* ── WHAT I WORKED ON ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[16px] font-medium mb-8"
            style={{ color: "var(--foreground)" }}
          >
            What I worked on
          </h2>
          <ul className="flex flex-col gap-4">
            {workItems.map((item) => (
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

        {/* ── SECTION 01: MAKING CLASSROOM LEARNING MORE INTERACTIVE ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[16px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Making classroom learning more interactive
            </h2>
            <span
              className="text-[13px] tabular-nums shrink-0 ml-6"
              style={{ color: "var(--muted)" }}
            >
              01 / {String(TOTAL_SECTIONS).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-16">
            {classroomItems.map((item) => (
              <div key={item.title}>
                <h3
                  className="text-[16px] font-medium mb-4"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
                <p
                  className="text-[13px] font-medium mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  Focused on
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {item.focusedOn.map((point) => (
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
                {/* fullWidth: end-to-end video (Assignments) */}
                {item.media.fullWidth && (
                  <div className="rounded-2xl overflow-hidden">
                    <VideoPlayer
                      src={item.media.src}
                      className="w-full h-auto block"
                      style={{ transform: "scale(1.08)", transformOrigin: "center center" }}
                    />
                  </div>
                )}

                {/* tablet: centered iPad border (Live Quizzes) */}
                {item.media.tablet && (
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
                        width: "60%",
                      }}
                    >
                      <VideoPlayer src={item.media.src} className="w-full h-auto block" />
                    </div>
                  </div>
                )}

                {/* image */}
                {item.media.type === "image" && (
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{ height: "360px", background: "var(--hover-bg)" }}
                  >
                    <div className="absolute" style={{ inset: "20px" }}>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.media.src}
                          alt={(item.media as any).alt ?? item.title}
                          fill
                          className="object-contain"
                          sizes="640px"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
                  width: "60%",
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
              style={{ background: "var(--hover-bg)", padding: "40px 32px 32px 32px" }}
            >
              <div style={{ width: "100%", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.2))" }}>
                {/* Screen bezel */}
                <div style={{ background: "#1a1a1a", borderRadius: "10px 10px 0 0", padding: "8px 8px 0 8px" }}>
                  <div style={{ borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
                    <VideoPlayer
                      src="/Admin Portal.mov"
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
          <div className="grid grid-cols-2 gap-8 mb-8">
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
          className="flex items-center justify-between pt-6"
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
          </div>
        </footer>

      </main>
    </div>
  );
}
