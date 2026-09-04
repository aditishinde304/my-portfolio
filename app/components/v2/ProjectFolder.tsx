import Image from "next/image";

type Thumb = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

// Native aspect ratios preserved (600x750 / 600x727 / 600x823), all
// scaled to a 130px display width.
const thumbs: Thumb[] = [
  {
    id: "greenscape",
    src: "/thumb-greenscape.png",
    alt: "GreenScape brand card",
    width: 130,
    height: 158,
    className: "folder-widget-thumb-a",
  },
  {
    id: "adventour",
    src: "/thumb-adventour.png",
    alt: "Adventour app screen",
    width: 130,
    height: 163,
    className: "folder-widget-thumb-b",
  },
  {
    id: "homelygrub",
    src: "/thumb-homelygrub.png",
    alt: "HomelyGrub app screen",
    width: 130,
    height: 178,
    className: "folder-widget-thumb-c",
  },
];

export default function ProjectFolder() {
  return (
    <section className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingBottom: "100px" }}>
      <h2
        style={{
          fontFamily: "var(--font-petrona), Georgia, serif",
          fontWeight: 600,
          fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
          color: "#111",
        }}
      >
        Side Projects
      </h2>
      <p className="text-[18px]" style={{ color: "#666", marginTop: "8px" }}>
        A few smaller things tucked away &mdash; hover the folder to peek inside.
      </p>

      <div className="folder-widget" style={{ marginTop: "48px" }}>
        {thumbs.map((thumb) => (
          <Image
            key={thumb.id}
            src={thumb.src}
            alt={thumb.alt}
            width={thumb.width}
            height={thumb.height}
            className={`folder-widget-thumb ${thumb.className}`}
          />
        ))}
        <Image
          src="/folder-projects.png"
          alt=""
          aria-hidden
          width={260}
          height={217}
          className="folder-widget-folder"
          priority
        />
      </div>
    </section>
  );
}
