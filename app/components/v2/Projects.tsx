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
        Owned and shipped product experiences that helped teachers and
        students collaborate, learn, and engage more effectively.
      </>
    ),
    image: "/Superr book.png",
    alt: "Superrbook product mockup",
    href: "/work/superrbook",
  },
  {
    id: "lms",
    title: "A platform for managing classrooms better",
    description: (
      <>
        Built a centralized system for assignments, notebooks and classroom
        workflows.
      </>
    ),
    image: "/LMS.png",
    alt: "LMS platform mockup",
    href: "/work/lms",
  },
  {
    id: "poll",
    title: "Designing engaging poll experiences",
    description: (
      <>
        Exploring how voting and feedback interactions can feel more
        intuitive and expressive.
      </>
    ),
    image: "/29894143-8e6b-48de-bb1c-4c8536376d0e (1).png",
    alt: "Poll experience mockup",
    href: "#",
    comingSoon: true,
  },
];

function ArrowIcon() {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L8 8L1 15" stroke="#111011" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

      <div className="flex flex-col" style={{ gap: "32px", marginTop: "48px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row"
            style={{
              border: "2px solid #e0e0e0",
              borderRadius: "24px",
              overflow: "hidden",
              gap: "24px",
            }}
          >
            <div
              className="flex flex-col justify-between"
              style={{ padding: "27px 8px 27px 27px", flex: "0 0 auto", width: "100%", maxWidth: "380px" }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(1.3rem, 2.2vw, 1.55rem)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.02em",
                    color: "#111011",
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-[16px]" style={{ lineHeight: 1.6, color: "rgba(5,5,5,0.6)" }}>
                  {project.description}
                </p>
              </div>

              {project.comingSoon ? (
                <span
                  className="inline-flex items-center gap-1.5 mt-8"
                  style={{ fontSize: "14px", color: "#999" }}
                >
                  <span className="rounded-full shrink-0" style={{ width: "5px", height: "5px", background: "#999" }} />
                  Coming soon
                </span>
              ) : (
                <a
                  href={project.href}
                  className="projects-cta inline-flex items-center justify-between mt-8"
                  style={{
                    background: "#fff",
                    color: "#111",
                    border: "1px solid #dfdfdf",
                    borderRadius: "24px",
                    padding: "12px 16px 12px 20px",
                    boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.08)",
                    fontSize: "18px",
                    fontWeight: 500,
                    maxWidth: "395px",
                  }}
                >
                  Open case study
                  <ArrowIcon />
                </a>
              )}
            </div>

            <a
              href={project.href}
              className="projects-row group block px-3 pb-3 md:pl-0 md:pr-3 md:py-3"
              style={{ flex: "1 1 auto" }}
            >
              <div
                className="projects-card relative w-full overflow-hidden"
                style={{ background: "#eeeeec", borderRadius: "16px", height: "clamp(260px, 32vw, 400px)" }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={95}
                  className="projects-card-img object-cover"
                  sizes="(max-width: 768px) 100vw, 748px"
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center" style={{ marginTop: "40px", gap: "10px" }}>
        <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleY(-1)" }}>
          <path
            d="M6 8C34 8 62 24 78 44"
            stroke="#4b4b4b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M60 40L79 45L72 26"
            stroke="#4b4b4b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a
          href="#"
          className="inline-flex items-center justify-center"
          style={{
            border: "1px solid #dbdbdb",
            borderRadius: "32px",
            padding: "12px 20px",
            boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.1)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            color: "#111",
          }}
        >
          View all projects
        </a>
      </div>
    </section>
  );
}
