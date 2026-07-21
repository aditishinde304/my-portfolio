import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
  alt: string;
  href: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    id: "superrbook",
    title: "Making learning more interactive through thoughtful design",
    description: (
      <>
        Owned and shipped <strong>product experiences</strong> that helped
        teachers and students collaborate, learn, and engage more
        effectively.
      </>
    ),
    image: "/Superrbook mockup.png",
    alt: "Superrbook product mockup",
    href: "/work/superrbook",
  },
  {
    id: "lms",
    title: "A platform for managing classrooms better",
    description: (
      <>
        Built a <strong>centralized system</strong> for assignments,
        notebooks, and classroom workflows.
      </>
    ),
    image: "/LMS mockup.png",
    alt: "LMS platform mockup",
    href: "/work/lms",
  },
  {
    id: "poll",
    title: "Designing engaging poll experiences",
    description: (
      <>
        Exploring how <strong>voting and feedback interactions</strong> can
        feel more intuitive and expressive.
      </>
    ),
    image: "/Poll Project.png",
    alt: "Poll experience mockup",
    href: "#",
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingTop: "20px", paddingBottom: "100px" }}>
      <h2
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 500,
          fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
          color: "#111",
        }}
      >
        My Latest Creations
      </h2>
      <p className="text-[17px]" style={{ color: "#666", marginTop: "8px" }}>
        A showcase of my recent projects and exploration
      </p>

      <div className="flex flex-col" style={{ gap: "112px", marginTop: "72px" }}>
        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: "56px" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontWeight: 500,
                  fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                  lineHeight: 1.3,
                  color: "#111",
                  marginBottom: "20px",
                }}
              >
                {project.title}
              </h3>

              <p className="text-[16px]" style={{ lineHeight: 1.65, color: "#666", maxWidth: "420px" }}>
                {project.description}
              </p>

              {project.comingSoon ? (
                <span
                  className="inline-flex items-center gap-1.5 mt-7"
                  style={{ fontSize: "14px", color: "#999" }}
                >
                  <span className="rounded-full shrink-0" style={{ width: "5px", height: "5px", background: "#999" }} />
                  Coming soon
                </span>
              ) : (
                <a
                  href={project.href}
                  className="projects-cta inline-block mt-7 text-[15px] font-medium"
                  style={{
                    background: "transparent",
                    color: "#111",
                    border: "1px solid #d8d8d4",
                    padding: "12px 25px",
                    borderRadius: "999px",
                  }}
                >
                  View case study
                </a>
              )}
            </div>

            <a href={project.href} className="projects-row group block">
              <div
                className="projects-card relative w-full overflow-hidden"
                style={{ background: "#eeeeec", borderRadius: "18px", height: "clamp(260px, 32vw, 340px)" }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={95}
                  className="projects-card-img object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
