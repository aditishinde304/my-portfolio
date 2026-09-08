import Image from "next/image";
import { NavWiggleUnderline } from "./../components/v2/Doodles";

// Collage photos — placeholders from existing site assets for now, easy to
// swap for real ones later. Each carries its own size/rotation/offset so
// the row reads as an overlapping, hand-arranged strip rather than a grid.
const collagePhotos = [
  { src: "/hero-photo-2.jpg", alt: "Aditi at a cafe", width: 148, rotate: -7, top: 18, tag: "camera roll" },
  { src: "/New Avatar.png", alt: "Aditi", width: 158, rotate: 4, top: 0 },
  { src: "/Avatar.jpg", alt: "Aditi Shinde", width: 170, rotate: -2, top: 26 },
  { src: "/hero-photo-1.jpg", alt: "Aditi outside Bangalore Palace", width: 158, rotate: 6, top: 6 },
  { src: "/hero-photo-3.jpg", alt: "Aditi at a hill viewpoint", width: 148, rotate: -5, top: 22, tag: "no context" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#fcfcfb", color: "#111", minHeight: "100vh", overflowX: "clip" }}>
      {/* Nav — same header as the homepage, adapted for a non-home route */}
      <header className="mx-auto" style={{ maxWidth: "1014px", padding: "38px 0" }}>
        <div className="flex items-center justify-between px-6 sm:px-0">
          <a href="/" className="text-[18px] font-semibold" style={{ color: "#111" }}>
            Aditi Shinde
          </a>
          <div className="hidden sm:flex items-center" style={{ gap: "32px" }}>
            <nav className="flex items-center" style={{ gap: "32px" }}>
              {[
                { label: "About", href: "/about", active: true },
                { label: "Work", href: "/#work" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hero-nav-link nav-wiggle-link text-[16px] relative inline-block"
                  style={{ color: item.active ? "#111" : "#333", fontWeight: item.active ? 600 : 400 }}
                >
                  {item.label}
                  <NavWiggleUnderline
                    className="nav-wiggle-svg"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-7px",
                      width: "100%",
                      height: "8px",
                    }}
                  />
                </a>
              ))}
            </nav>
            <a
              href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume-btn text-[15px] font-medium inline-flex items-center"
              style={{ background: "#111", color: "#fff", padding: "9px 20px", borderRadius: "999px", lineHeight: 1 }}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingTop: "48px", paddingBottom: "120px" }}>
        {/* Centered intro */}
        <div className="text-center mx-auto" style={{ maxWidth: "720px" }}>
          <h1
            style={{
              fontFamily: "var(--font-petrona), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: 1.3,
              color: "#111",
            }}
          >
            Hi, I&rsquo;m Aditi.
          </h1>
          <p
            className="text-[18px]"
            style={{ color: "#666", marginTop: "12px" }}
          >
            Product designer at Superr, previously ConnectWise and Zoop.one.
          </p>
        </div>

        {/* Photo collage */}
        <div
          className="relative mx-auto hidden sm:block"
          style={{ maxWidth: "860px", height: "300px", marginTop: "64px" }}
        >
          {collagePhotos.map((photo, i) => {
            const totalWidth = collagePhotos.reduce((sum, p) => sum + p.width, 0);
            const overlap = 34;
            const rowWidth = totalWidth - overlap * (collagePhotos.length - 1);
            let left = -rowWidth / 2;
            for (let j = 0; j < i; j++) left += collagePhotos[j].width - overlap;

            return (
              <div
                key={photo.src}
                className="absolute"
                style={{
                  left: `calc(50% + ${left}px)`,
                  top: `${photo.top}px`,
                  width: `${photo.width}px`,
                  height: `${photo.width * 1.2}px`,
                  transform: `rotate(${photo.rotate}deg)`,
                  zIndex: i,
                }}
              >
                {photo.tag && (
                  <span
                    className="absolute inline-block text-[13px]"
                    style={{
                      top: "-30px",
                      left: photo.rotate < 0 ? "-6px" : "auto",
                      right: photo.rotate >= 0 ? "-6px" : "auto",
                      background: "#fff",
                      color: "#333",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      border: "1px solid #ededec",
                      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
                      transform: `rotate(${-photo.rotate}deg)`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {photo.tag}
                  </span>
                )}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderRadius: "12px",
                    background: "#fff",
                    boxShadow: "0px 12px 24px rgba(17,17,17,0.12), 0px 2px 6px rgba(17,17,17,0.06)",
                  }}
                >
                  <Image src={photo.src} alt={photo.alt} fill sizes="200px" className="object-cover" />
                </div>
              </div>
            );
          })}
        </div>

        {/* mobile: simple horizontal scroll strip */}
        <div className="sm:hidden flex overflow-x-auto" style={{ gap: "12px", marginTop: "48px", paddingBottom: "8px" }}>
          {collagePhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: "140px",
                height: "168px",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(17,17,17,0.1)",
              }}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="140px" className="object-cover" />
            </div>
          ))}
        </div>

        {/* Bio content */}
        <div
          className="mx-auto text-[16px] leading-relaxed"
          style={{ maxWidth: "640px", marginTop: "72px", color: "#555", display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <p>
            I&rsquo;m a product designer currently building education
            products at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium" style={{ color: "#111" }}>
              Superr
            </a>
            . Previously at ConnectWise and Zoop.one.
          </p>
          <p>
            Outside of work, I&rsquo;m usually sketching something, chasing
            good coffee, planning the next solo trip, or building a side
            project I probably won&rsquo;t finish. I care about craft,
            thoughtful details, and things that feel human.
          </p>
          <p>
            Lately I&rsquo;ve been exploring the space between design and
            code, prototyping with Cursor, Claude Code, and v0.
          </p>
          <p style={{ marginTop: "8px" }}>
            Reach me at{" "}
            <a href="mailto:aditi.shinde304@gmail.com" className="link-dashed" style={{ color: "#111" }}>
              aditi.shinde304@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
