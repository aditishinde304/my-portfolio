import Image from "next/image";

type Project = {
  id: string;
  eyebrow: string;
  meta: string;
  title: string;
  image: string;
  alt: string;
  href: string;
  tall?: boolean;
};

const projects: Project[] = [
  {
    id: "superrbook",
    eyebrow: "PRODUCT DESIGN / 0 → 1 EXPERIENCE",
    meta: "SUPERR / 2025",
    title: "Making learning more interactive through thoughtful design",
    image: "/Superrbook mockup.png",
    alt: "Superrbook product mockup",
    href: "/work/superrbook",
  },
  {
    id: "lms",
    eyebrow: "PRODUCT DESIGN / PLATFORM",
    meta: "SUPERR / 2025",
    title: "A platform for managing classrooms better",
    image: "/LMS mockup.png",
    alt: "LMS platform mockup",
    href: "/work/lms",
  },
  {
    id: "poll",
    eyebrow: "PRODUCT DESIGN / EXPLORATION",
    meta: "SUPERR / 2026",
    title: "Designing engaging poll experiences",
    image: "/Poll Project.png",
    alt: "Poll experience mockup",
    href: "#",
    tall: true,
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingTop: "20px", paddingBottom: "100px" }}>
      <h2
        className="flex items-center gap-2"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px", fontWeight: 500, letterSpacing: "0.02em", color: "#111", textTransform: "uppercase" }}
      >
        Key projects I have worked on
        <span style={{ color: "#999" }}>+</span>
      </h2>

      <div className="flex flex-col" style={{ gap: "96px", marginTop: "64px" }}>
        {projects.map((project) => (
          <a key={project.id} href={project.href} className="projects-row group block">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
              <span
                style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.02em", color: "#E8873A" }}
              >
                {project.eyebrow}
              </span>
              <span
                style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12.5px", letterSpacing: "0.02em", color: "#9a9a96" }}
              >
                {project.meta}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 3.2vw, 2.15rem)",
                lineHeight: 1.25,
                color: "#111",
                marginBottom: "28px",
                maxWidth: "820px",
              }}
            >
              {project.title}
            </h3>

            <div
              className="projects-card relative w-full overflow-hidden"
              style={{
                background: "#eeeeec",
                borderRadius: "18px",
                aspectRatio: project.tall ? "4 / 3" : "16 / 10",
              }}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                quality={95}
                className="projects-card-img"
                style={{ objectFit: project.tall ? "contain" : "cover" }}
                sizes="(max-width: 1014px) 100vw, 1014px"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
