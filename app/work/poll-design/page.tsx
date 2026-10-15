import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";
import CaseStudyNav from "@/app/components/CaseStudyNav";
import { BackArrowIcon } from "@/app/components/v2/Doodles";
import Footer from "@/app/components/v2/Footer";
import IterationGroup from "./IterationGroup";
import SplitLayoutPrototype from "./SplitLayoutPrototype";
import FinalPrototype from "./FinalPrototype";

// Inline emphasis for key phrases, same treatment as the Superrbook case study.
function Bold({ children, inherit }: { children: React.ReactNode; inherit?: boolean }) {
  return <span style={{ fontWeight: 600, color: inherit ? "inherit" : "var(--cs-fg)" }}>{children}</span>;
}

// Stand-in for media that hasn't been added yet. To swap in the real asset,
// replace the <MediaPlaceholder .../> with the matching Superrbook pattern:
//   video  -> <div className="rounded-2xl overflow-hidden"><VideoPlayer src="/file.mp4" className="w-full h-auto block" /></div>
//   image  -> <div className="rounded-2xl overflow-hidden"><Image src="/file.png" alt="..." width={W} height={H} className="w-full h-auto block" /></div>
function MediaPlaceholder({
  kind,
  label,
  aspectRatio,
}: {
  kind: "Video" | "Image";
  label: string;
  aspectRatio: string;
}) {
  return (
    <div
      className="rounded-2xl w-full flex flex-col items-center justify-center text-center px-6"
      style={{
        aspectRatio,
        background: "var(--cs-surface)",
        border: "1px dashed var(--cs-border)",
      }}
    >
      <p
        className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-2"
        style={{ color: "var(--cs-muted)" }}
      >
        {kind} placeholder
      </p>
      <p className="text-[15px] leading-snug" style={{ color: "var(--cs-secondary)" }}>
        {label}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--cs-muted)" }}>
      {children}
    </p>
  );
}

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

function TeacherIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  );
}

function HierarchyIcon() {
  return (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <path d="M14 15h6M14 18.5h4" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.5-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.9 17 3 12 3Z" />
      <path d="M7.5 11h.01M10 7.5h.01M14.5 7.5h.01" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg {...iconProps}>
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
    </svg>
  );
}

function TouchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 10.5V9a1.5 1.5 0 0 1 3 0v2" />
      <path d="M15 10.5a1.5 1.5 0 0 1 3 0V15c0 3.3-2.2 6-5.5 6h-1c-2 0-3.4-.9-4.4-2.4L4.6 14.7a1.5 1.5 0 0 1 2.5-1.6L9 15.5V11" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  );
}

function StudentsIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15.5 5.7a3 3 0 0 1 0 5.6" />
      <path d="M17 13.2c2.3.6 4 2.7 4 5.3" />
    </svg>
  );
}

// "Designing the Poll" is hidden for now; flip to true to restore the section and its nav entry.
const SHOW_DESIGNING_POLL = false;

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why it mattered" },
  { id: "role", label: "My Role" },
  { id: "challenge", label: "The Challenge" },
  { id: "goals", label: "Design Goals" },
  { id: "patterns", label: "Competitor Analysis", includes: ["poll-types"] },
  ...(SHOW_DESIGNING_POLL ? [{ id: "designing", label: "Designing the Poll" }] : []),
  { id: "iterations", label: "Design Iterations", includes: ["split-layout"] },
  { id: "biggest-challenge", label: "Biggest Challenge" },
  { id: "final-design", label: "Final Design" },
  { id: "student-pov", label: "Student POV" },
  { id: "measuring", label: "Metrics" },
  { id: "reflection", label: "Reflection" },
];

const bulletDot = (
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
);

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[17px] leading-relaxed flex items-start gap-3"
          style={{ color: "var(--cs-secondary)" }}
        >
          {bulletDot}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sectionStyle = {} as const;
const h2Style = {
  color: "var(--cs-fg)",
  fontFamily: "var(--font-petrona), Georgia, serif",
  lineHeight: "1.3",
} as const;

export default function PollDesignCaseStudy() {
  return (
    <div className="case-study" style={{ background: "var(--cs-bg)", minHeight: "100vh" }}>
      <div
        className="mx-auto px-6 sm:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-16 items-start"
        style={{ maxWidth: "1214px" }}
      >
        <CaseStudyNav sections={navSections} />

        {/* Mobile back link (sidebar handles it on desktop) */}
        <Link
          href="/"
          className="cs-back-link lg:hidden inline-flex items-center gap-1.5 text-[15px] mb-16"
          style={{ color: "var(--cs-secondary)" }}
        >
          <BackArrowIcon /> Back
        </Link>

        <main className="min-w-0 flex-1" style={{ maxWidth: "1014px" }}>
          {/* ── HEADING ── */}
          <div className="mb-16" id="overview">
            <h1
              className="text-[34px] md:text-[48px] font-semibold tracking-[-0.02em] mb-4"
              style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif", lineHeight: "1.12" }}
            >
              Making classroom participation more interactive through polls
            </h1>
            <p className="text-[14px] tracking-[0.04em]" style={{ color: "var(--cs-muted)" }}>
              Superrboard &nbsp;·&nbsp; 2025
            </p>
          </div>

          {/* ── OVERVIEW ── */}
          <section className="mb-12">
            <div
              className="space-y-5 text-[17px] leading-relaxed"
              style={{ color: "var(--cs-secondary)", lineHeight: "1.6" }}
            >
              <p>
                Superrboard is an interactive classroom tool that helps teachers make lessons more engaging through
                digital whiteboards and collaborative activities.
              </p>
              <p>
                <Bold>I designed the poll experience to help teachers check students&rsquo; understanding during a lesson, while giving students simple, engaging ways to participate.</Bold>
              </p>
              <p>
                The experience supports <Bold>three poll types</Bold> - Multiple Choice, Yes/No and Smileys - each designed for a different kind of classroom interaction.
              </p>
            </div>

            <div
              className="rounded-xl mt-8 px-5 py-4"
              style={{ background: "#EAF3FC" }}
            >
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-fg)" }}>
                <span style={{ fontWeight: 600 }}>My focus:</span> Making polls easy to create, intuitive to use on an
                interactive whiteboard, and engaging for students.
              </p>
            </div>
          </section>

          {/* ── PROTOTYPE ── */}
          <div className="mb-28 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
            <VideoPlayer
              src="/Poll design superrboard final prototype.mov"
              poster="/posters/poll-final-prototype.jpg"
              className="w-full h-auto block"
            />
          </div>

          {/* ── WHY THIS PROJECT MATTERED ── */}
          <section id="why" className="mb-28" style={sectionStyle}>
            <SectionLabel>Why this project mattered</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              Learning works better when students can participate
            </h2>
            <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              A teacher can explain a concept without knowing whether every student has understood it. Polls create an opportunity to <Bold>check in with the class without turning the lesson into a separate activity.</Bold>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <TeacherIcon />,
                  title: "For teachers",
                  body: "Get a quick way to check understanding and gather responses during a lesson.",
                },
                {
                  icon: <StudentsIcon />,
                  title: "For students",
                  body: "Participate actively instead of only listening, reading or watching.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-6"
                  style={{ background: "#fff", border: "1px solid var(--cs-border)" }}
                >
                  <div className="flex items-center gap-3 mb-3" style={{ color: "var(--cs-fg)" }}>
                    {card.icon}
                    <h3 className="text-[18px] font-semibold" style={{ color: "var(--cs-fg)" }}>
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MY ROLE ── */}
          <section id="role" className="mb-28" style={sectionStyle}>
            <SectionLabel>My Role</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              From exploration to interaction design
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
              I worked on the poll experience <Bold>across the teacher and student perspectives</Bold>, exploring how polls could be created, presented and used during a live classroom session.
            </p>
            <p className="text-[17px] leading-relaxed mt-5" style={{ color: "var(--cs-secondary)" }}>
              I <Bold>collaborated closely with engineers, the product manager and design lead</Bold> to align on requirements, explore solutions and refine the experience.
            </p>
          </section>

          {/* ── THE CHALLENGE ── */}
          <section id="challenge" className="mb-28">
            <SectionLabel>The Challenge</SectionLabel>

            <p
              className="text-[28px] font-semibold tracking-[-0.01em] text-left"
              style={{
                color: "var(--cs-blue-text)",
                lineHeight: "1.25",
              }}
            >
              How might we make classroom polling effortless for teachers and engaging for students?
            </p>
          </section>

          {/* ── 06. DESIGN GOALS ── */}
          <section id="goals" className="mb-28" style={sectionStyle}>
            <SectionLabel>Design Goals</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-8" style={h2Style}>
              Three goals to guide the experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {[
                {
                  n: "01",
                  icon: <BoltIcon />,
                  title: "Quick to create",
                  body: "Help teachers set up and launch a poll with minimal friction.",
                },
                {
                  n: "02",
                  icon: <TouchIcon />,
                  title: "Easy to interact with",
                  body: "Make questions and options easy to write and edit on the whiteboard.",
                },
                {
                  n: "03",
                  icon: <SmileIcon />,
                  title: "Engaging for students",
                  body: "Give students simple ways to respond with answers, Yes/No, or Smileys.",
                },
              ].map((goal) => (
                <div
                  key={goal.n}
                  className="rounded-xl p-6 flex flex-col"
                  style={{ background: "#fff", border: "1px solid var(--cs-border)" }}
                >
                  <div className="flex items-center justify-between mb-5" style={{ color: "var(--cs-blue-text)" }}>
                    {goal.icon}
                    <span className="text-[14px] font-semibold tabular-nums" style={{ color: "var(--cs-muted)" }}>
                      {goal.n}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold mb-2" style={{ color: "var(--cs-blue-text)" }}>
                    {goal.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                    {goal.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── UNDERSTANDING POLLING PATTERNS ── */}
          <section id="patterns" className="mb-28" style={sectionStyle}>
            <SectionLabel>Competitor analysis</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-6" style={h2Style}>
              Understanding Polling Patterns
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              <p>Before designing the experience, I looked at how polling works across different products and platforms.</p>
              <p>
                I explored poll experiences in products like <Bold>WhatsApp, Instagram, Kahoot, Google Classroom</Bold> and other learning and communication platforms to understand how they approached:
              </p>
            </div>

            <div className="mb-8 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
              <Image
                src="/Poll compititor.png"
                alt="Collage of poll experiences from other products, including Instagram, X, Nextdoor, Kajabi, Kahoot, Classroomscreen, Canva and Figma"
                width={12476}
                height={6412}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="w-full h-auto block"
              />
            </div>

            <p className="text-[17px] leading-relaxed mb-12" style={{ color: "var(--cs-secondary)" }}>
              I also created a moodboard to look beyond individual UI patterns and understand how different products made interactions feel <Bold>playful, lightweight and engaging</Bold>.
            </p>

            <p className="text-[18px] font-semibold mb-5" style={{ color: "var(--cs-fg)" }}>
              What I noticed
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Polls are usually designed for quick decisions",
                  body: "Most polling experiences reduce creation to a few essential actions instead of making users configure too many things.",
                },
                {
                  title: "Response types shape the interaction",
                  body: "Different questions need different ways to respond. Multiple choice, yes/no and more expressive responses create very different participation experiences.",
                },
                {
                  title: "The interaction needs to feel lightweight",
                  body: "A poll works best when it feels like a natural part of the activity rather than a separate workflow that takes users away from what they’re already doing.",
                },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span className="text-[14px] tabular-nums shrink-0 mt-0.5" style={{ color: "var(--cs-muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                      {item.title}
                    </p>
                    <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DESIGNING THE POLL ── */}
          {SHOW_DESIGNING_POLL && (
          <section id="designing" className="mb-28" style={sectionStyle}>
            <h2 className="text-[28px] font-semibold mb-6" style={h2Style}>
              Designing the Poll
            </h2>

            <p className="text-[17px] leading-relaxed mb-2" style={{ color: "var(--cs-secondary)" }}>
              The first question was simple:
            </p>
            <p className="text-[18px] font-semibold mb-8" style={{ color: "var(--cs-fg)" }}>
              What does a teacher actually need when creating a poll?
            </p>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--cs-secondary)" }}>
              I broke the experience into four essential pieces:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Question", subtitle: "What do you want to ask?" },
                { title: "Options", subtitle: "What can students choose?" },
                { title: "Poll type", subtitle: "What kind of response are you collecting?" },
                { title: "Launch", subtitle: "When are you ready to start?" },
              ].map((piece) => (
                <div
                  key={piece.title}
                  className="rounded-xl p-4"
                  style={{ background: "var(--cs-yellow-bg)", border: "1.5px solid var(--cs-yellow-border)" }}
                >
                  <p className="text-[16px] font-medium leading-snug" style={{ color: "var(--cs-yellow-text)" }}>
                    {piece.title}
                  </p>
                  <p className="text-[14px] leading-snug mt-1" style={{ color: "var(--cs-yellow-subtext)" }}>
                    {piece.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
              This gave me a simple structure for the creation flow while keeping the interaction focused on what
              actually matters during a live class.
            </p>
          </section>
          )}

          {/* ── DEFINING THE POLL TYPES ── */}
          <section id="poll-types" className="mb-28" style={sectionStyle}>
            <h2 className="text-[28px] font-semibold mb-6" style={h2Style}>
              Defining the Poll Types
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              <p>
                Once the basic structure was clear, I explored what kinds of questions teachers would need to ask during
                a lesson.
              </p>
              <p>I decided to support <Bold>three poll types</Bold>:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {[
                {
                  title: "ABCD",
                  image: "/ABCD Poll Option.png",
                  alt: "ABCD poll type: colourful lettered shapes labelled A, B, C and D",
                  body: "For questions where students need to choose one answer from multiple options.",
                },
                {
                  title: "Yes / No",
                  image: "/Yes No Poll option.png",
                  alt: "Yes-No poll type: a thumbs up and a thumbs down",
                  body: "For quick knowledge checks, confirmations or questions with a binary response.",
                },
                {
                  title: "Smileys",
                  image: "/Smileys Poll Option.png",
                  alt: "Smileys poll type: three friendly shapes with different expressions",
                  body: "A more expressive format for quickly understanding how students are feeling or how confident they are about a topic.",
                },
              ].map((type) => (
                <div key={type.image}>
                  <Image
                    src={type.image}
                    alt={type.alt}
                    width={944}
                    height={608}
                    unoptimized
                    className="w-full h-auto block"
                  />
                  <p className="text-[16px] font-semibold mt-5 mb-1" style={{ color: "var(--cs-fg)" }}>
                    {type.title}
                  </p>
                  <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                    {type.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* ── HOW I GOT HERE · DESIGN ITERATIONS ── */}
          {/* Mobile-only note (visibility handled by the shared .cs-mobile-only-note class). */}
          <div className="cs-mobile-only-note mb-20">
            <div
              className="mx-auto rounded-2xl px-6 py-7"
              style={{ maxWidth: "320px", background: "var(--cs-surface)", border: "1px solid var(--cs-border)" }}
            >
              <p className="text-[19px] font-semibold leading-snug mb-3" style={{ color: "var(--cs-fg)" }}>
                Curious to see the whole story?
              </p>
              <p className="text-[16px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                This case study is best experienced on a bigger screen. Switch to your desktop to explore the full design
                process, iterations and prototypes. <span aria-hidden="true">😊</span>
              </p>
            </div>
          </div>

          <section id="iterations" className="cs-mobile-hide mb-28">
            <SectionLabel>How I got here &middot; Design iterations</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              Exploring modal-based creation
            </h2>
            <p className="text-[17px] leading-relaxed mb-16" style={{ color: "var(--cs-secondary)" }}>
              I started by <Bold>separating poll type selection from poll creation</Bold>. Teachers would first choose a poll type, then move to a second modal to write their question and set up the answers.
            </p>

            {/* Exploration A */}
            <div className="mb-12">
              <p className="text-[18px] font-semibold mb-3" style={{ color: "var(--cs-fg)" }}>
                A. Choosing a poll type
              </p>
              <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
                The first step was <Bold>a simple selection modal with three options</Bold>: ABCD, Yes&ndash;No, and Smileys. Each option led to a separate creation flow for that poll type.
              </p>
              <IterationGroup
                video="/Poll Iteration 1.mov"
                poster="/posters/poll-iteration-1.jpg"
                observationLabel="Design observation"
                observationTone="blue"
                observation="Teachers first selected a poll type, then moved to a separate creation flow which was adding an extra step."
              />
            </div>

            {/* Exploration B */}
            <div className="mb-10">
              <p className="text-[18px] font-semibold mb-2" style={{ color: "var(--cs-fg)" }}>
                B. Creating a poll with separate modals
              </p>
              <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
                After selecting a poll type, teachers moved to <Bold>a dedicated modal</Bold> to enter their question and answer options. Each poll type had its own creation screen.
              </p>
              <IterationGroup
                video="/Poll iteration 2.mov"
                poster="/posters/poll-iteration-2.jpg"
                observationLabel="What wasn't working"
                observationTone="red"
                observation="The compact modals left little room for writing with a pen on the interactive whiteboard. The ‘Add question’ action also blended in with the answer options, making it less noticeable."
              />
            </div>

            {/* What I learned */}
            <div
              className="rounded-2xl px-5 py-5"
              style={{ background: "var(--cs-blue-bg)", border: "1px solid var(--cs-blue-border)" }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: "var(--cs-blue-text)" }}>
                <LightbulbIcon />
                <p className="text-[18px] font-semibold" style={{ color: "var(--cs-blue-text)" }}>
                  What I learned
                </p>
              </div>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-blue-text)" }}>
                The interface needed to do more than offer different poll types. It needed to give teachers <Bold inherit>enough room to write and edit, while reducing unnecessary steps.</Bold>
              </p>
            </div>
          </section>

          {/* ── 02 - EXPLORING A SPLIT LAYOUT ── */}
          <section id="split-layout" className="cs-mobile-hide mb-28">
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              02 - Exploring a split layout
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              <p>
                I explored <Bold>a two-panel layout</Bold>, placing the poll question on the left and poll-type options on the right. Selecting a poll type would update the corresponding options within the same interface.
              </p>
              <p>
                This brought the main parts of poll creation together, but <Bold>the visual treatment still felt too plain</Bold>. I continued exploring colour, cards and hierarchy.
              </p>
            </div>

            <SplitLayoutPrototype
              video="/Split view poll design.mov"
              poster="/posters/split-view-poll-design.jpg"
              observationLabel="Design observation"
              observation="Bringing the question and poll-type selection into one interface reduced the separation between these steps, but the layout still needed a stronger visual hierarchy."
            />
          </section>

          {/* ── BIGGEST CHALLENGE ── same blue callout treatment as "What I learned" */}
          <section
            id="biggest-challenge"
            className="cs-mobile-hide mb-28 rounded-2xl px-5 py-5 md:px-8 md:py-6"
            style={{ background: "var(--cs-blue-bg)", border: "1px solid var(--cs-blue-border)" }}
          >
            <div style={{ maxWidth: "800px" }}>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-3"
                style={{ color: "var(--cs-blue)" }}
              >
                Biggest challenge
              </p>
              <h2
                className="text-[28px] font-semibold mb-6"
                style={{ ...h2Style, color: "var(--cs-blue-text)" }}
              >
                Finding the right layout
              </h2>
              <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--cs-blue-text)" }}>
                <p>
                  One of the main challenges was <Bold inherit>aligning with the team on the poll creation layout</Bold>. I explored different approaches, from using separate modals for each step to bringing the question and poll type selection together in a split layout.
                </p>
                <p>
                  Each approach had its trade-offs. I refined the designs based on feedback, focusing on <Bold inherit>giving teachers enough space to write and making it easy to switch between poll types</Bold>.
                </p>
                <p>
                  Through these iterations, we arrived at a layout that <Bold inherit>better suited how teachers use Superrboard in the classroom</Bold>.
                </p>
              </div>
            </div>
          </section>

          {/* ── 03 - FINAL DESIGN (TEACHER POV) ──
              */}
          <section id="final-design" className="cs-mobile-hide mb-28">
            <SectionLabel>03 - Final design</SectionLabel>
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              Designing the poll experience for teachers
            </h2>
            <p className="text-[17px] leading-relaxed mb-12" style={{ color: "var(--cs-secondary)" }}>
              I designed the teacher experience to make it easy to choose a poll type, create a question, <Bold>manage a live poll and view the results</Bold>.
            </p>

            <FinalPrototype />

            <h3 className="text-[28px] font-semibold mb-8" style={{ color: "var(--cs-fg)", fontFamily: "var(--font-petrona), Georgia, serif" }}>
              Why this direction worked
            </h3>
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <PenIcon />,
                  title: "More room to write",
                  body: "Larger question and answer areas make writing with a pen on an interactive whiteboard more practical.",
                },
                {
                  icon: <HierarchyIcon />,
                  title: "Clearer visual hierarchy",
                  body: "The question, answer options and primary actions have distinct roles, making the screen easier to scan.",
                },
                {
                  icon: <PaletteIcon />,
                  title: "More fun and interactive",
                  body: "Sticker-style, hand-drawn illustrations, bold colours and playful cards make the experience more engaging.",
                },
              ].map((point) => (
                <div key={point.title} className="flex items-start gap-5">
                  <div className="mt-0.5" style={{ color: "var(--cs-blue-text)" }}>
                    {point.icon}
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                      {point.title}
                    </p>
                    <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STUDENT POV ──
              */}
          <section id="student-pov" className="cs-mobile-hide mb-28">
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              Student POV design
            </h2>
            <p className="text-[17px] leading-relaxed mb-12" style={{ color: "var(--cs-secondary)" }}>
              The final design connects polls on Superrboard with the student experience on Superrbook. When a teacher starts a poll, <Bold>students receive a banner inviting them to participate</Bold>. They can select their answer directly and once the teacher ends the poll, <Bold>see what they voted for and which answer received the most votes</Bold>.
            </p>

            {/* Student-side (Superrbook) prototype, presented like the Geometry Tools prototype in the Superrbook case study. */}
            <div
              className="rounded-2xl flex items-center justify-center mb-12"
              style={{ background: "var(--cs-hover-bg)", padding: "40px 24px" }}
            >
              <div
                style={{
                  border: "10px solid #111",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
                  width: "min(70%, 360px)",
                }}
              >
                <VideoPlayer
                  src="/Student Poll Design.mov"
                  poster="/posters/student-poll-design.jpg"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
              {[
                {
                  title: "Start the poll",
                  body: "When the teacher starts a poll on Superrboard, students receive a banner on Superrbook inviting them to join.",
                },
                {
                  title: "Cast a vote",
                  body: "Students open the poll from the banner and select their answer, making it easy to participate during the lesson.",
                },
                {
                  title: "View the results",
                  body: "Once the teacher ends the poll, students can see which answer they selected and which answer received the most votes.",
                },
              ].map((step, i) => (
                <div key={step.title}>
                  <p className="text-[14px] tabular-nums mb-2" style={{ color: "var(--cs-muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--cs-fg)" }}>
                    {step.title}
                  </p>
                  <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* ── WHAT I'LL BE MEASURING NEXT ── planned metrics only, no results */}
          <section id="measuring" className="cs-mobile-hide mb-28">
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              What I&rsquo;ll be measuring next
            </h2>
            <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              The experience is currently being prepared for launch, so <Bold>I don&rsquo;t have user metrics to share yet</Bold>. Once it&rsquo;s live, I&rsquo;ll be looking closely at:
            </p>
            <div className="flex flex-col gap-6">
              {[
                { title: "Poll creation time", body: "How quickly teachers can create and launch a poll during a lesson." },
                { title: "Student participation", body: "How many students respond when a poll is launched." },
                { title: "Completion rate", body: "How many students submit their answers before the poll ends." },
                { title: "Teacher adoption", body: "How often teachers use polls across their lessons." },
              ].map((metric, i) => (
                <div key={metric.title} className="flex gap-5">
                  <span className="text-[16px] leading-6 tabular-nums shrink-0" style={{ color: "var(--cs-muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[18px] font-semibold leading-6 mb-1" style={{ color: "var(--cs-fg)" }}>
                      {metric.title}
                    </p>
                    <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      {metric.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="cs-mobile-hide mb-28">
            <h2 className="text-[28px] font-semibold mb-4" style={h2Style}>
              Reflection
            </h2>
            <p className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--cs-secondary)" }}>
              A few things I learned while working through this:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  title: "Layout needs to fit the environment",
                  body: "Designing for an interactive whiteboard meant thinking beyond a regular desktop interface, especially about writing space and pen input.",
                },
                {
                  title: "Explore before settling",
                  body: "Comparing different layouts helped me understand the trade-offs and find a direction that worked better for the classroom.",
                },
                {
                  title: "Consider both sides of the experience",
                  body: "A poll needs to work for teachers creating and managing it, as well as students responding to it.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  {bulletDot}
                  <div>
                    <p className="text-[18px] font-semibold leading-6 mb-1" style={{ color: "var(--cs-fg)" }}>
                      {item.title}
                    </p>
                    <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}
