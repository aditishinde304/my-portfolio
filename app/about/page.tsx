import Image from "next/image";
import { NavWiggleUnderline } from "./../components/v2/Doodles";
import Footer from "../components/v2/Footer";

type FanPhoto = { src: string; alt: string; width: number; rotate: number; top: number };

// Collage photos — placeholders from existing site assets for now, easy to
// swap for real ones later. Each carries its own size/rotation/offset so
// the row reads as an overlapping, hand-arranged strip rather than a grid.
const collagePhotos: FanPhoto[] = [
  { src: "/about-painting.jpg", alt: "Aditi painting a portrait", width: 148, rotate: -7, top: 18 },
  { src: "/about-white-top.jpg", alt: "Aditi on a mountain viewpoint", width: 158, rotate: 4, top: 0 },
  { src: "/about-red-top.jpg", alt: "Aditi at a hilltop cafe", width: 170, rotate: -2, top: 26 },
  { src: "/about-library.jpg", alt: "Aditi picking a book off a shelf", width: 158, rotate: 6, top: 6 },
  { src: "/about-pottery.jpg", alt: "Aditi working on a pottery wheel", width: 148, rotate: -5, top: 22 },
];

// A few of Aditi's own paintings/sketches, shown alongside the "When I'm
// not designing" section as proof of the hobby mentioned there. Arranged
// the same fanned, overlapping way as the photo collage up top.
const paintingPhotos: FanPhoto[] = [
  { src: "/about-art-kingfisher.jpg", alt: "Colored pencil drawing of a kingfisher", width: 140, rotate: -8, top: 20 },
  { src: "/about-art-radha-krishna.jpg", alt: "Acrylic painting of Radha and Krishna", width: 160, rotate: 5, top: 2 },
  { src: "/about-art-deer.jpg", alt: "Colored pencil drawing of a fawn in a meadow", width: 170, rotate: -2, top: 26 },
  { src: "/about-art-saree.png", alt: "Acrylic painting of a woman in a saree", width: 150, rotate: 6, top: 8 },
  { src: "/about-art-portrait-glam.jpg", alt: "Colored pencil portrait of Priyanka Chopra", width: 158, rotate: -5, top: 14 },
  { src: "/about-art-portrait-elder.jpg", alt: "Pencil portrait of Aditi's grandmother", width: 148, rotate: 3, top: 22 },
];

// Shared fanned/overlapping photo layout, used both for the intro collage
// and the painting gallery. Desktop: absolutely positioned, rotated,
// overlapping strip. Mobile: a simple horizontal scroll strip.
function PhotoFan({ photos }: { photos: FanPhoto[] }) {
  const totalWidth = photos.reduce((sum, p) => sum + p.width, 0);
  const overlap = 34;
  const rowWidth = totalWidth - overlap * (photos.length - 1);

  return (
    <>
      <div className="relative mx-auto hidden sm:block" style={{ maxWidth: "860px", height: "300px" }}>
        {photos.map((photo, i) => {
          let left = -rowWidth / 2;
          for (let j = 0; j < i; j++) left += photos[j].width - overlap;

          return (
            <div
              key={photo.src}
              className="absolute about-collage-photo"
              style={{
                left: `calc(50% + ${left}px)`,
                top: `${photo.top}px`,
                width: `${photo.width}px`,
                height: `${photo.width * 1.2}px`,
                ["--photo-rotate" as string]: `${photo.rotate}deg`,
                ["--photo-z" as string]: i,
              } as React.CSSProperties}
            >
              <div
                className="about-collage-inner relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "12px",
                  background: "#fff",
                }}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="200px" className="object-cover" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="sm:hidden flex overflow-x-auto" style={{ gap: "12px", paddingBottom: "8px" }}>
        {photos.map((photo) => (
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
    </>
  );
}

// Section heading used to break up the bio into named sections.
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "17px",
        fontWeight: 600,
        color: "#111",
      }}
    >
      {children}
    </p>
  );
}

// Inline emphasis for key phrases within the bio paragraphs.
function Semibold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 500, color: "#333" }}>{children}</span>;
}

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
              style={{ background: "#111", color: "#fff", padding: "11px 20px", borderRadius: "999px", lineHeight: 1 }}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingTop: "48px", paddingBottom: "80px" }}>
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
            style={{ color: "#666", marginTop: "4px" }}
          >
            Curious, creative, and probably in the middle of learning or
            making something new.
          </p>
        </div>

        {/* Photo collage */}
        <div style={{ marginTop: "64px" }}>
          <PhotoFan photos={collagePhotos} />
        </div>

        {/* Bio content */}
        <div
          className="mx-auto text-[16px]"
          style={{ maxWidth: "640px", marginTop: "20px", color: "#555", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <p>
            I&rsquo;m a <Semibold>Product Designer</Semibold> currently at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium" style={{ color: "#111" }}>
              Superr
            </a>
            , where I&rsquo;m building education products and thinking about
            ways to make learning and teaching a little more fun for
            students and teachers :)
          </p>
          <p>Before that, I worked at ConnectWise and Zoop.one.</p>
          <p>
            Over the years, I&rsquo;ve designed for tablets, mobile, web,
            dashboards, SaaS products and design systems. I enjoy getting
            into the messy part of a problem,{" "}
            <Semibold>
              understanding the flows, asking too many questions, thinking
              through edge cases and slowly making sense of it all.
            </Semibold>
          </p>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionLabel>In my current role</SectionLabel>
            <p>
              At Superr, I work on education products across the learning
              journey. My work involves thinking through{" "}
              <Semibold>
                complex flows, different user needs, edge cases and the
                little details
              </Semibold>{" "}
              that make a product feel simple.
            </p>
            <p>
              I enjoy being involved throughout the process{" "}
              <Semibold>
                from understanding the problem and exploring ideas to
                refining the experience and seeing it come to life.
              </Semibold>
            </p>
            <p>
              Lately, I&rsquo;ve also been getting closer to the building
              side. I&rsquo;ve{" "}
              <Semibold>
                shipped a few small features using Cursor and Antigravity
              </Semibold>
              , which has helped me understand implementation and bring
              ideas beyond the design file.
            </p>
            <p>
              I also enjoy getting into the details through{" "}
              <Semibold>design QA</Semibold>, catching inconsistencies,
              refining interactions and making sure the final product
              feels as good as the intended design.
            </p>
          </div>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionLabel>Beyond Figma</SectionLabel>
            <p>
              I&rsquo;ve also been spending a lot of time exploring the
              space between design and code,{" "}
              <Semibold>
                experimenting with tools like Cursor, Claude Code and v0
              </Semibold>
              , building little ideas and prototypes that help me think
              beyond static screens. I&rsquo;m still figuring things out,
              but honestly, that&rsquo;s part of what makes it fun.
            </p>
          </div>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionLabel>When I&rsquo;m not designing</SectionLabel>
            <p>
              You&rsquo;ll probably find me sketching or painting
              something, chasing good coffee, planning my next trip, or
              starting another side project that may or may not get
              finished :) I also enjoy experimenting with motion,
              interactions and random creative things just because I find
              them fun.
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <PhotoFan photos={paintingPhotos} />
          </div>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <SectionLabel>Let&rsquo;s chat?</SectionLabel>
            <p>
              Always happy to talk about design, interesting ideas, side
              projects or cool opportunities. Reach me at{" "}
              <a href="mailto:aditi.shinde304@gmail.com" className="link-dashed" style={{ color: "#111" }}>
                aditi.shinde304@gmail.com
              </a>
              , on{" "}
              <a href="https://x.com/AditiShinde30" target="_blank" rel="noopener noreferrer" className="link-dashed" style={{ color: "#111" }}>
                Twitter
              </a>
              , or on{" "}
              <a href="https://www.linkedin.com/in/aditi-shinde-5415681b7/" target="_blank" rel="noopener noreferrer" className="link-dashed" style={{ color: "#111" }}>
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
