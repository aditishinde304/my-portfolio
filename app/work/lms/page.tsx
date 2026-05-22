import Link from "next/link";
import Image from "next/image";

const approachItems = [
  {
    title: "Understand workflows",
    description: "Mapped classroom pain points through research and teacher inputs.",
  },
  {
    title: "Simplify the system",
    description: "Designed familiar, scalable patterns to reduce confusion.",
  },
  {
    title: "Iterate continuously",
    description: "Explored multiple flows, tested ideas, and refined based on feedback.",
  },
];

const featureSections = [
  {
    title: "My Notes",
    description:
      "A unified space where notebooks and folders come together in one place. Designed to help users quickly organize, search, and manage classroom content with minimal friction.",
    image: "/My notes LMS.png",
  },
  {
    title: "My Classes",
    description:
      "A central workspace for managing students, assignments, files, and classroom activities. Focused on giving teachers better visibility and structured classroom management.",
    image: "/Classes LMS.png",
  },
  {
    title: "Whiteboards",
    description:
      "A shared whiteboard system where teachers can access and revisit classroom boards easily. Explored preview interactions for PDFs, images, and videos to improve content browsing.",
    image: "/Whiteboards LMS.png",
  },
  {
    title: "Assignments",
    description:
      "Designed assignment workflows that help teachers quickly track submissions, reviews, and pending tasks across classrooms. Focused on visibility, hierarchy, and reducing operational friction.",
    image: "/Assignment List Page LMS.png",
  },
  {
    title: "Files",
    description:
      "A centralized space for teaching materials and classroom resources. Designed to make content easier to upload, organize, preview, and access quickly.",
    image: "/Files LMS.png",
  },
];

const reflectionItems = [
  {
    title: "Designing for education requires simplicity.",
    description: "Every interaction needs to feel clear, approachable, and easy to navigate.",
  },
  {
    title: "Systems thinking matters.",
    description:
      "The experience taught me how connected classroom workflows are across students, teachers, and admins.",
  },
  {
    title: "Prototyping helps uncover real problems.",
    description:
      "Building interactions directly in code helped surface usability gaps and edge cases much earlier.",
  },
];

export default function LMSCaseStudy() {
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

        {/* ── HERO ── */}
        <div className="mb-16">
          <h1
            className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Designing a scalable LMS<br />for classrooms
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
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Built a web-based learning management system that brings assignments,
            notes, files, and classroom workflows into one place for teachers
            and students.
          </p>
        </section>

        {/* ── FULL-WIDTH MEDIA ── */}
        <div
          className="rounded-2xl overflow-hidden relative mb-16"
          style={{ height: "440px", background: "var(--hover-bg)" }}
        >
          <div className="absolute" style={{ inset: "20px" }}>
            <div className="relative w-full h-full">
              <Image
                src="/My notes LMS.png"
                alt="LMS My Notes"
                fill
                className="object-contain"
                sizes="640px"
              />
            </div>
          </div>
        </div>

        {/* ── THE PROBLEM ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-6"
            style={{ color: "var(--muted)" }}
          >
            The Problem
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Teachers often manage classrooms across scattered tools, making
              assignments, files, and student management difficult to track.
            </p>
            <p>
              The goal was to design a centralized system that simplifies
              classroom workflows while keeping the experience easy to use.
            </p>
          </div>
        </section>

        {/* ── MY ROLE ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-6"
            style={{ color: "var(--muted)" }}
          >
            My Role
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Worked closely with PMs, engineers, and designers to shape core
              LMS workflows across notes, assignments, whiteboards, files, and
              classroom management.
            </p>
            <p>
              Focused on simplifying usability, improving consistency, and
              prototyping complex interactions directly in Cursor.
            </p>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-8"
            style={{ color: "var(--muted)" }}
          >
            Approach
          </h2>
          <div className="flex flex-col gap-6">
            {approachItems.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span
                  className="text-[13px] tabular-nums shrink-0 mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="text-[15px] font-medium mb-1"
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
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE SECTIONS ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <h2
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-12"
            style={{ color: "var(--muted)" }}
          >
            What I designed
          </h2>
          <div className="flex flex-col gap-16">
            {featureSections.map((item, i) => (
              <div key={item.title}>
                <div className="flex items-baseline justify-between mb-4">
                  <h3
                    className="text-[16px] font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-[13px] tabular-nums shrink-0 ml-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / {String(featureSections.length).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{ height: "360px", background: "var(--hover-bg)" }}
                >
                  <div className="absolute" style={{ inset: "20px" }}>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="640px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REFLECTION ── */}
        <section className="mb-16" style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <p
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-6"
            style={{ color: "var(--muted)" }}
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
                {reflectionItems[0].title}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {reflectionItems[0].description}
              </p>
            </div>
            <div>
              <p
                className="text-[15px] font-medium leading-snug mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {reflectionItems[1].title}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {reflectionItems[1].description}
              </p>
            </div>
          </div>
          <div>
            <p
              className="text-[15px] font-medium leading-snug mb-3"
              style={{ color: "var(--foreground)" }}
            >
              {reflectionItems[2].title}
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {reflectionItems[2].description}
            </p>
          </div>
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
              href="https://www.linkedin.com/in/aditi-shinde"
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
