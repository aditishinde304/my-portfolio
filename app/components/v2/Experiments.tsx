import VideoPlayer from "../VideoPlayer";

const experiments = [
  { id: "game", video: "/Pixel Game Portfolio.mp4" },
  { id: "postcard", video: "/Postcard.mp4" },
  { id: "focus-mode", video: "/Focus Mode.mp4" },
  { id: "carousel", video: "/Scroll animation architecture website (2).mp4" },
];

export default function Experiments() {
  return (
    <section className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingBottom: "100px" }}>
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
        <h2
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 500,
            fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
            color: "#111",
          }}
        >
          Experiments
        </h2>
        <a
          href="/experiments"
          className="hero-nav-link text-[16px]"
          style={{ color: "#666" }}
        >
          View more
        </a>
      </div>
      <p className="text-[18px]" style={{ color: "#666", marginBottom: "48px" }}>
        Small builds and interaction explorations outside of work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
        {experiments.map((exp) => (
          <a
            key={exp.id}
            href="/experiments"
            className="projects-row group block"
            style={{ background: "#eeeeec", borderRadius: "18px", padding: "10px" }}
          >
            <div className="projects-card relative overflow-hidden rounded-2xl">
              <VideoPlayer
                src={exp.video}
                className="projects-card-img w-full h-auto block"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
