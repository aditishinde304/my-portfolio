import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";
import CaseStudyNav from "@/app/components/CaseStudyNav";
import { BackArrowIcon } from "@/app/components/v2/Doodles";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My Role" },
  { id: "approach", label: "Approach" },
  { id: "designed", label: "What I designed" },
  { id: "reflection", label: "Reflection" },
];

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
    video: "/My notes.mp4",
  },
  {
    title: "My Classes",
    description:
      "A central workspace for managing students, assignments, files, and classroom activities. Focused on giving teachers better visibility and structured classroom management.",
    image: "/Classes LMS.png",
    desktopImage: true,
  },
  {
    title: "Whiteboards",
    description:
      "A shared whiteboard system where teachers can access and revisit classroom boards easily. Explored preview interactions for PDFs, images, and videos to improve content browsing.",
    video: "/Whiteboard LMS.mp4",
  },
  {
    title: "Assignments",
    description:
      "Designed assignment workflows that help teachers quickly track submissions, reviews, and pending tasks across classrooms. Focused on visibility, hierarchy, and reducing operational friction.",
    video: "/Assignments LMS.mp4",
  },
  {
    title: "Files",
    description:
      "A centralized space for teaching materials and classroom resources. Designed to make content easier to upload, organize, preview, and access quickly.",
    video: "/Files LMS.mp4",
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

function DesktopFrame({ src }: { src: string }) {
  return (
    <div
      className="rounded-2xl flex items-center justify-center"
      style={{ background: "var(--cs-hover-bg)", padding: "24px 16px 16px 16px" }}
    >
      <div style={{ width: "100%", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.2))" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "10px 10px 0 0", padding: "8px 8px 0 8px" }}>
          <div style={{ borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
            <VideoPlayer src={src} className="w-full h-auto block" />
          </div>
        </div>
        <div style={{ background: "#2a2a2a", height: "12px" }} />
        <div style={{ background: "#242424", height: "20px", borderRadius: "0 0 8px 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "56px", height: "6px", background: "#333", borderRadius: "3px" }} />
        </div>
      </div>
    </div>
  );
}

export default function LMSCaseStudy() {
  return (
    <div className="case-study" style={{ background: "var(--cs-bg)", minHeight: "100vh" }}>
      <div className="mx-auto px-6 sm:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-16 items-start" style={{ maxWidth: "1214px" }}>

        <CaseStudyNav sections={navSections} />

        {/* Mobile back link (sidebar handles it on desktop) */}
        <Link
          href="/"
          className="lg:hidden inline-flex items-center gap-1.5 text-[15px] mb-16"
          style={{ color: "var(--cs-secondary)" }}
        >
          <BackArrowIcon /> Back
        </Link>

      <main className="min-w-0 flex-1" style={{ maxWidth: "1014px" }}>

        {/* ── HERO ── */}
        <div className="mb-16" id="overview">
          <h1
            className="text-[34px] md:text-[48px] font-semibold tracking-[-0.02em] mb-4"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.12" }}
          >
            Designing a scalable LMS<br />for classrooms
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
          <div className="space-y-5 text-[18px] leading-relaxed" style={{ color: "var(--cs-secondary)", lineHeight: "1.6" }}>
            <p className="text-[22px] font-semibold tracking-[-0.01em]" style={{ color: "var(--cs-fg)", lineHeight: "1.6" }}>
              How might we simplify classroom management through one centralized platform?
            </p>
            <p>
              Teachers often manage classrooms across multiple tools, where
              assignments, notes, files and student data stay scattered and
              difficult to track. A lot of teaching material also lives on
              personal laptops, making classroom workflows slower and harder
              to manage.
            </p>
            <p>
              This project focused on designing a centralised web based LMS
              where teachers can upload files directly from their laptops,
              manage classroom activities, track assignments and access
              everything from one place.
            </p>
            <p>
              The goal was to simplify everyday classroom workflows while
              making the experience feel clean, intuitive and easy to use
              for both teachers and students.
            </p>
          </div>
        </section>

        {/* ── FULL-WIDTH HERO VIDEO ── */}
        <div className="mb-16">
          <DesktopFrame src="/LMS Intro.mp4" />
        </div>

        {/* ── MY ROLE ── */}
        <section id="role" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-6"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            My Role
          </h2>
          <div className="space-y-4 text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
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
        <section id="approach" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-8"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            Approach
          </h2>
          <div className="flex flex-col gap-6">
            {approachItems.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span
                  className="text-[14px] tabular-nums shrink-0 mt-0.5"
                  style={{ color: "var(--cs-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="text-[18px] font-semibold mb-1"
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
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE SECTIONS ── */}
        <section id="designed" className="mb-16" style={{ borderTop: "1px solid var(--cs-border)", paddingTop: "48px" }}>
          <h2
            className="text-[28px] font-semibold mb-12"
            style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.3" }}
          >
            What I designed
          </h2>
          <div className="flex flex-col gap-16">
            {featureSections.map((item, i) => (
              <div key={item.title}>
                <div className="flex items-baseline justify-between mb-4">
                  <h3
                    className="text-[24px] font-semibold"
                    style={{ color: "var(--cs-fg)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-[14px] tabular-nums shrink-0 ml-6"
                    style={{ color: "var(--cs-muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / {String(featureSections.length).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="text-[17px] leading-relaxed mb-6"
                  style={{ color: "var(--cs-secondary)" }}
                >
                  {item.description}
                </p>

                {"video" in item && item.video ? (
                  <DesktopFrame src={item.video} />
                ) : "desktopImage" in item && item.desktopImage ? (
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{ background: "var(--cs-hover-bg)", padding: "24px 16px 16px 16px" }}
                  >
                    <div style={{ width: "100%", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.2))" }}>
                      <div style={{ background: "#1a1a1a", borderRadius: "10px 10px 0 0", padding: "8px 8px 0 8px" }}>
                        <div style={{ borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
                          <Image
                            src={(item as any).image}
                            alt={item.title}
                            width={900}
                            height={560}
                            className="block w-full h-auto"
                          />
                        </div>
                      </div>
                      <div style={{ background: "#2a2a2a", height: "12px" }} />
                      <div style={{ background: "#242424", height: "20px", borderRadius: "0 0 8px 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "56px", height: "6px", background: "#333", borderRadius: "3px" }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{ height: "360px", background: "var(--cs-hover-bg)" }}
                  >
                    <div className="absolute" style={{ inset: "20px" }}>
                      <div className="relative w-full h-full">
                        <Image
                          src={(item as any).image}
                          alt={item.title}
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
                {reflectionItems[0].title}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {reflectionItems[0].description}
              </p>
            </div>
            <div>
              <p
                className="text-[18px] font-semibold leading-snug mb-3"
                style={{ color: "var(--cs-fg)" }}
              >
                {reflectionItems[1].title}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {reflectionItems[1].description}
              </p>
            </div>
          </div>
          <div>
            <p
              className="text-[18px] font-semibold leading-snug mb-3"
              style={{ color: "var(--cs-fg)" }}
            >
              {reflectionItems[2].title}
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
              {reflectionItems[2].description}
            </p>
          </div>
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
