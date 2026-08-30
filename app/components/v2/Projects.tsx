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
      <p className="text-[18px]" style={{ color: "#666", marginTop: "8px" }}>
        A showcase of my recent projects and exploration
      </p>

      <div className="flex flex-col" style={{ gap: "32px", marginTop: "48px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row"
            style={{
              border: "1px solid #ededec",
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
                    fontFamily: "var(--font-fraunces), Georgia, serif",
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
                    background: "#fcfcfb",
                    color: "#111",
                    border: "1px solid #dfdfdf",
                    borderRadius: "24px",
                    padding: "12px 16px 12px 20px",
                    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
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

      <a
        href="#"
        className="flex items-center justify-center"
        style={{ marginTop: "40px", gap: "24px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "28px",
            color: "#111",
          }}
        >
          More
        </span>
        <MoreWorkFolderIcon />
        <span
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "28px",
            color: "#111",
          }}
        >
          Work
        </span>
      </a>
    </section>
  );
}

function MoreWorkFolderIcon() {
  return (
    <svg width="80" height="70" viewBox="0 0 120 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mwFolderBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4e4e2" />
          <stop offset="1" stopColor="#d4d4d1" />
        </linearGradient>
        <linearGradient id="mwFolderFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbfbfa" />
          <stop offset="1" stopColor="#eeeeec" />
        </linearGradient>
      </defs>
      <rect x="21" y="8" width="60" height="34" rx="6" fill="#fdf6df" transform="rotate(-6 51 25)" />
      <rect x="38" y="6" width="60" height="34" rx="6" fill="#e4e7fb" transform="rotate(5 68 23)" />
      <path
        d="M8 20C8 16.686 10.686 14 14 14H46C48.2091 14 50.2 15.147 51.3251 17L54.6749 22.5C55.8 24.353 57.7909 25.5 60 25.5H106C109.314 25.5 112 28.186 112 31.5V90C112 93.314 109.314 96 106 96H14C10.686 96 8 93.314 8 90V20Z"
        fill="url(#mwFolderBack)"
      />
      <rect x="4" y="36" width="112" height="60" rx="12" fill="url(#mwFolderFront)" stroke="#e2e2df" />
      <g transform="translate(48, 56)" opacity="0.55">
        <rect x="0" y="0" width="24" height="20" rx="4" stroke="#8a8a86" strokeWidth="2.2" />
        <circle cx="6.5" cy="6.5" r="2.2" stroke="#8a8a86" strokeWidth="2" />
        <path d="M1 16L8.5 10L14 14.5L19 9L23 13.5" stroke="#8a8a86" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
