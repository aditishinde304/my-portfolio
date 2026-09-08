import Link from "next/link";
import Image from "next/image";

type OldProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

const projects: OldProject[] = [
  {
    id: "homelygrub",
    title: "HomelyGrub",
    description:
      "HomelyGrub is an app that simplifies the problem of finding healthy, homemade food. It empowers home chefs by connecting them with food lovers who seek nutritious, home-cooked meals.",
    image: "/Homelygrub.png",
    alt: "HomelyGrub app screen",
    href: "https://www.behance.net/gallery/197852237/HomelyGrub-Homemade-food-app",
  },
  {
    id: "adventour",
    title: "Adventour",
    description:
      "Adventour is the go-to app for solo travelers, tourists, and explorers. It simplifies trip planning by creating itineraries, connecting users with travel communities, and guiding them to discover new destinations, food joints, and more.",
    image: "/Adventour.png",
    alt: "Adventour app screen",
    href: "https://www.behance.net/gallery/198183295/Adventour-Travel-Planner-App-UiUx-case-study",
  },
  {
    id: "greenscape",
    title: "GreenScape",
    description:
      "GreenScape is a conceptual brand focused on transforming outdoor spaces into vibrant, eco-friendly green havens. It includes in-depth research, a custom-designed logo, a comprehensive brand book, and creative media designs tailored to the target audience.",
    image: "/Greenscape.png",
    alt: "GreenScape brand card",
    href: "https://www.figma.com/deck/X6Sa57ybXpehfv0qCEAKGG/Brand-Book---Greenscape?node-id=2092-659&viewport=-49%2C-75%2C0.44&t=x9WXhSjO4BAhku9W-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

function ArrowIcon() {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L8 8L1 15" stroke="#111011" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MoreWork() {
  return (
    <main className="max-w-[1014px] mx-auto px-6 sm:px-0" style={{ paddingTop: "82px", paddingBottom: "100px" }}>
      <div style={{ marginBottom: "48px" }}>
        <Link
          href="/"
          className="text-[14px] mb-8 inline-block"
          style={{ color: "var(--muted)" }}
        >
          Back
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
            color: "#111",
          }}
        >
          More Work
        </h1>
        <p className="text-[18px]" style={{ color: "#666", marginTop: "8px" }}>
          A few older projects from earlier in my journey.
        </p>
      </div>

      <div className="flex flex-col" style={{ gap: "32px" }}>
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
                <h2
                  style={{
                    fontFamily: "var(--font-petrona), Georgia, serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.3rem, 2.2vw, 1.55rem)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.02em",
                    color: "#111011",
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </h2>

                <p className="text-[16px]" style={{ lineHeight: 1.6, color: "rgba(5,5,5,0.6)" }}>
                  {project.description}
                </p>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
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
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
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
    </main>
  );
}
