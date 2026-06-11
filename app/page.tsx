import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import CopyButton from "./components/CopyButton";
import VideoPlayer from "./components/VideoPlayer";

const work = [
  {
    name: "Designing better digital classroom experiences",
    subheading: "Focused on making learning more interactive, collaborative, and\nengaging for students.",
    year: "2025",
    href: "/work/superrbook",
    image: "/Superrbook mockup.png",
    alt: "Superrbook mockup",
    inset: "4px",
  },
  {
    name: "A platform for managing classrooms better",
    subheading: "Built a centralized system for assignments, notebooks, and\nclassroom workflows.",
    year: "2025",
    href: "/work/lms",
    image: "/LMS Mockup.png",
    alt: "LMS mockup",
    inset: "24px",
  },
  {
    name: "Designing engaging poll experiences",
    subheading: "Exploring how voting and feedback interactions can feel\nmore intuitive and expressive.",
    year: "2026",
    href: "#",
    image: "/Poll Project.png",
    alt: "Poll Design mockup",
    inset: "16px",
    comingSoon: true,
  },
];

const experiments = [
  { name: "Game", image: "/Game design.png", video: "/Pixel Game Portfolio.mp4", href: "/experiments" },
  { name: "Postcard", image: "/Postcard.png", video: "/Postcard.mp4", href: "/experiments" },
  { name: "Focus Mode", image: "/Focus mode.png", video: "/Focus Mode.mp4", href: "/experiments" },
  { name: "Interactive Project Carousel", image: "/Cursor to do.png", video: "/Scroll animation architecture website.mp4", href: "/experiments" },
];

const experience = [
  {
    company: "Superr",
    role: "Product Designer",
    duration: "Mar 2025 - Present",
  },
  {
    company: "ConnectWise",
    role: "UI/UX Design Intern",
    duration: "Jan 2025 - Mar 2025",
  },
  {
    company: "Zoop.One",
    role: "Product Design Intern",
    duration: "May 2023 - Jul 2023",
  },
  {
    company: "Madideations",
    role: "Graphic Design Intern",
    duration: "Jun 2022 - Aug 2022",
  },
];

export default function Home() {
  return (
    <main className="max-w-[680px] mx-auto px-8 py-20 md:py-28">

      {/* Introduction */}
      <section className="mb-20">
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full shrink-0 overflow-hidden" style={{ background: "var(--border)" }}>
              <Image
                src="/New Avatar.png"
                alt="Aditi Shinde"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
            <div>
              <h1
                className="relative cursor-default group/name text-[16px] font-semibold leading-tight tracking-[-0.01em]"
                style={{ color: "var(--foreground)" }}
              >
                <span className="transition-opacity duration-300 group-hover/name:opacity-0">Aditi Shinde</span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/name:opacity-100 whitespace-nowrap">Hey there :)</span>
              </h1>
              <p className="text-[16px] leading-tight mt-0.5" style={{ color: "var(--muted)" }}>
                Product designer who builds
              </p>
            </div>
          </div>
          <div style={{ marginTop: "4px" }}><ThemeToggle /></div>
        </div>

        <div className="space-y-4 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            I&rsquo;m a product designer currently building education products
            at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
              Superr
            </a>
            . Previously at{" "}
            <a href="https://www.zoop.one/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
              Zoop.one
            </a>
            {" "}and{" "}
            <a href="https://www.connectwise.com/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium">
              ConnectWise
            </a>
            .
          </p>
          <p>
            I care deeply about crafting experiences that feel simple, playful
            and human. I obsess over small interaction details, thoughtful
            systems and making complex workflows feel intuitive and engaging.
          </p>
          <p>
            Lately, I&rsquo;ve been exploring the space between design and code,
            experimenting with AI tools, prototyping ideas and shipping
            experiences using Cursor, Claude Code, Antigravity and v0.
          </p>
          <p>
            I enjoy building things fast, testing ideas and learning through
            experimentation. Beyond designing, I also love painting, sketching
            and exploring visual craft.
          </p>
        </div>

        <p className="text-[16px] leading-relaxed mt-8" style={{ color: "var(--muted)" }}>
          Reach me at{" "}
          <a href="mailto:aditi.shinde304@gmail.com" className="link-dashed">
            aditi.shinde304@gmail.com
          </a>
          <CopyButton text="aditi.shinde304@gmail.com" />
          {" "}or dm me on{" "}
          <a href="https://x.com/AditiShinde30" target="_blank" rel="noopener noreferrer" className="link-dashed">
            x.com
          </a>
          .{" "}
          <a href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-dashed">
            View my resume
          </a>
          .
        </p>
      </section>

      {/* Work */}
      <section className="mb-20">
        <h2
          className="text-[12px] font-medium tracking-[0.06em] uppercase mb-5"
          style={{ color: "var(--foreground)" }}
        >
          Projects
        </h2>

        <div className="flex flex-col" style={{ gap: "56px" }}>
          {work.map((project) => (
            <a key={project.name} href={project.href} className="group block">
              <div className="w-full rounded-2xl overflow-hidden mb-4 h-[220px] md:h-[300px]" style={{ background: "var(--hover-bg)", position: "relative" }}>
                <div className="absolute" style={{ inset: project.inset, position: "absolute" }}>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="560px"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <p className="text-[16px] leading-snug" style={{ color: "var(--foreground)" }}>
                  {project.name}
                  {project.comingSoon && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 ml-2" style={{ verticalAlign: "middle" }}>
                      <span
                        className="rounded-full shrink-0"
                        style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }}
                      />
                      <span className="text-[15px]" style={{ color: "var(--muted)", fontFamily: "var(--font-shantell)" }}>Coming soon</span>
                    </span>
                  )}
                </p>
                <span className="text-[14px] shrink-0 tabular-nums" style={{ color: "var(--muted)" }}>
                  {project.year}
                </span>
              </div>
              {project.comingSoon && (
                <span className="flex sm:hidden items-center gap-1.5 mb-1">
                  <span
                    className="rounded-full shrink-0"
                    style={{ width: "3px", height: "3px", background: "var(--muted)", display: "inline-block" }}
                  />
                  <span className="text-[15px]" style={{ color: "var(--muted)", fontFamily: "var(--font-shantell)" }}>Coming soon</span>
                </span>
              )}
              <p className="text-[16px] leading-relaxed whitespace-pre-line" style={{ color: "var(--muted)" }}>
                {project.subheading}
              </p>
            </a>
          ))}
        </div>

        <a
          href="https://aditishinde.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-8 text-[15px] font-medium"
        >
          <span className="link-dashed">See everything I&apos;ve worked on</span>
          <span style={{ display: "inline-block", transform: "rotate(45deg)" }}>↑</span>
        </a>
      </section>

      {/* Experiments */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-5">
          <h2
            className="text-[12px] font-medium tracking-[0.06em] uppercase"
            style={{ color: "var(--foreground)" }}
          >
            Experiments
          </h2>
          <a href="/experiments" className="text-[14px] link-dashed" style={{ color: "var(--muted)" }}>
            View more
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {experiments.map((exp) => (
            <a
              key={exp.name}
              href={exp.href}
              className="group block rounded-2xl p-2 flex items-center justify-center"
              style={{ background: "var(--hover-bg)" }}
            >
              <div className="rounded-xl overflow-hidden">
                <VideoPlayer
                  src={exp.video}
                  className="h-auto block mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2
          className="text-[12px] font-medium tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Experience
        </h2>

        <div className="flex flex-col gap-5">
          {experience.map((job, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
              <div>
                <span
                  className="text-[16px] font-medium block"
                  style={{ color: "var(--foreground)" }}
                >
                  {job.company}
                </span>
                <span className="text-[16px] block mt-1" style={{ color: "var(--muted)" }}>
                  {job.role}
                </span>
              </div>
              <span className="text-[15px] shrink-0 tabular-nums mt-1 sm:mt-0" style={{ color: "var(--muted)" }}>
                {job.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
  );
}
