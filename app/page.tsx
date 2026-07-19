import Image from "next/image";
import Reveal from "./components/v2/Reveal";
import StickyNote from "./components/v2/StickyNote";
import {
  CameraDoodle,
  SunSparkleDoodle,
  TagDoodle,
  PaletteDoodle,
  TackPinDoodle,
  MusicNotesDoodle,
  ScribbleUnderline,
  FlowerScribble,
  CursorArrowDoodle,
} from "./components/v2/Doodles";

const projects = [
  {
    name: "Designing for the Future of Education",
    description: (
      <>
        Currently <strong>building 0&rarr;1 products</strong> at Superr to shape
        the future of school infrastructure and education.
        <br />
        <br />
        <strong>Leading design</strong> on two projects across Tablet and Web.
        Collaborating with PMs, engineers and contributing to{" "}
        <strong>frontend development</strong> using Cursor.
      </>
    ),
    visual: "superr",
  },
  {
    name: "Exportify Connect",
    description:
      "A smart backend tool empowering Exportify employees to streamline supplier evaluations. It simplifies the process of reviewing, approving, and managing applications, ensuring faster and more informed decisions.",
    visual: "exportify",
  },
  {
    name: "HomelyGrub",
    description:
      "HomeGrub is an app that simplifies the problem of finding healthy, homemade food. It empowers home chefs by connecting them with food lovers who seek nutritious, home-cooked meals.",
    visual: "homelygrub",
  },
  {
    name: "Adventour",
    description:
      "Adventour is the go-to app for solo travelers, tourists, and explorers. It simplifies trip planning by creating itineraries, connecting users with travel communities, and guiding them to discover new destinations, food joints, and more.",
    visual: "adventour",
  },
];

const skillNotes = [
  {
    title: "Soft Skills",
    bg: "#BFE3F0",
    headerBg: "#A9D8EA",
    rotate: -2,
    items: ["Team Collaboration", "Storytelling", "Communication", "Attention to Detail", "Problem-Solving"],
  },
  {
    title: "Tools",
    bg: "#F5E9A8",
    headerBg: "#F0DF88",
    rotate: 1.5,
    items: ["Figma", "Framer", "After effects", "Illustrator", "Blender"],
  },
  {
    title: "Design Skills",
    bg: "#E4D3F5",
    headerBg: "#D8C0EE",
    rotate: -1,
    items: ["Visual Design", "User Research", "Interaction Design", "Prototyping", "Wireframing"],
  },
];

const creativePlayCards = [
  { id: "pink-cards", bg: "linear-gradient(160deg, #f7d9d9, #f2c4c9)" },
  { id: "nyan-cat", bg: "linear-gradient(160deg, #14142b, #1f1f45)" },
  { id: "phone-sky", bg: "linear-gradient(160deg, #bfe3f5, #8fc8e8)" },
  { id: "pepsi", bg: "linear-gradient(160deg, #0a2f5c, #123a73)" },
  { id: "watch", bg: "linear-gradient(160deg, #0d1b1b, #123030)" },
  { id: "build2", bg: "linear-gradient(160deg, #1a1030, #2a1750)" },
];

function SuperrVisual() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{ background: "#FF5A1F" }}
    >
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11.5 L9 6.5 a1.5 1.5 0 0 1 3 0 V11" />
        <path d="M12 11 V5.5 a1.5 1.5 0 0 1 3 0 V11" />
        <path d="M15 11 V7 a1.5 1.5 0 0 1 3 0 V13.5 C18 17.5 15.5 20 12 20 C8.5 20 6.5 17.5 6 14.5 L5 11.5 a1.3 1.3 0 0 1 2.3-1.1 L9 12.5" />
      </svg>
      <span className="text-white font-extrabold tracking-wide" style={{ fontSize: "34px", letterSpacing: "0.02em" }}>
        SUPERR
      </span>
    </div>
  );
}

function ExportifyVisual() {
  return (
    <div className="w-full h-full p-4 sm:p-6" style={{ background: "#eef0f2" }}>
      <div className="w-full h-full rounded-lg overflow-hidden flex" style={{ background: "#fff", border: "1px solid #e3e5e8" }}>
        <div className="hidden sm:flex flex-col w-[30%] gap-2 p-3" style={{ background: "#fafafa", borderRight: "1px solid #eee" }}>
          {["Dashboard", "Applications", "Suppliers", "Directory", "Reports", "Settings"].map((item, i) => (
            <div
              key={item}
              className="text-[10px] px-2 py-1.5 rounded"
              style={{ background: i === 0 ? "#e8ecff" : "transparent", color: i === 0 ? "#3346c9" : "#888", fontWeight: i === 0 ? 600 : 400 }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3 sm:p-4">
          <p className="text-[11px] font-semibold mb-2" style={{ color: "#222" }}>Welcome back, Sneha</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[["30/80", "Pending"], ["36/80", "Approved"], ["14/80", "Rejected"]].map(([num, label]) => (
              <div key={label} className="rounded p-2" style={{ background: "#f7f8fa" }}>
                <p className="text-[12px] font-bold" style={{ color: "#222" }}>{num}</p>
                <p className="text-[8px]" style={{ color: "#999" }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded" style={{ background: "#f7f8fa" }}>
            {["General Mills", "Volkswagen", "PepsiCo", "Unilever"].map((name) => (
              <div key={name} className="flex justify-between px-2 py-1.5 text-[9px]" style={{ borderBottom: "1px solid #eee", color: "#555" }}>
                <span>{name}</span>
                <span style={{ color: "#c98a1c" }}>Pending</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomelyGrubVisual() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #4a3a2f, #6b5644)" }}
    >
      <div
        className="rounded-[28px] overflow-hidden"
        style={{ width: "150px", height: "230px", background: "#fff", border: "5px solid #1a1a1a", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
      >
        <div className="w-full h-full flex flex-col p-3" style={{ background: "linear-gradient(180deg, #fff7ec, #ffe9d0)" }}>
          <p className="text-[10px] font-semibold" style={{ color: "#222" }}>Hey Aditi!</p>
          <p className="text-[7px] mb-2" style={{ color: "#777" }}>Discover home tasty delights</p>
          <div className="flex-1 rounded-lg" style={{ background: "#f2c78a" }} />
          <p className="text-[7px] mt-2" style={{ color: "#777" }}>Must Try Dishes</p>
        </div>
      </div>
    </div>
  );
}

function AdventourVisual() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #cfcfcf, #8f8f8f)" }}
    >
      <div
        className="rounded-[28px] overflow-hidden"
        style={{ width: "150px", height: "230px", background: "#0e0e0e", border: "5px solid #111", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
      >
        <div className="w-full h-full flex flex-col p-3" style={{ background: "#fff" }}>
          <p className="text-[9px] font-semibold" style={{ color: "#111" }}>Adventour</p>
          <p className="text-[11px] font-bold leading-tight mt-2" style={{ color: "#111" }}>
            DISCOVER YOUR NEXT Adventure
          </p>
          <div className="flex-1 rounded-lg mt-2" style={{ background: "linear-gradient(160deg, #d8a15a, #a86f3a)" }} />
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  switch (type) {
    case "superr":
      return <SuperrVisual />;
    case "exportify":
      return <ExportifyVisual />;
    case "homelygrub":
      return <HomelyGrubVisual />;
    case "adventour":
      return <AdventourVisual />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div style={{ background: "#fcfcfb", color: "#111" }}>
      {/* Nav */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-6 max-w-[1200px] mx-auto">
        <span className="text-[18px] font-semibold" style={{ color: "#111" }}>
          Aditi Shinde
        </span>
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#about" className="text-[15px]" style={{ color: "#333" }}>About</a>
          <a href="#work" className="text-[15px]" style={{ color: "#333" }}>Work</a>
          <a href="#contact" className="text-[15px]" style={{ color: "#333" }}>Contact</a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-medium px-5 py-2.5 rounded-full"
          style={{ background: "#111", color: "#fff" }}
        >
          Resume
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 max-w-[1200px] mx-auto pt-10 pb-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div
            className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center overflow-hidden"
            style={{ background: "#fff", border: "1px solid #eee" }}
          >
            <Image src="/New Avatar.png" alt="Aditi Shinde" width={64} height={64} className="w-full h-full object-cover" style={{ objectPosition: "center 45%" }} />
          </div>
          <p className="text-[16px] mb-3" style={{ color: "#333" }}>
            Yo🤙, I&rsquo;m Aditi Shinde
          </p>
          <h1
            className="relative"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              lineHeight: 1.05,
              color: "#111",
            }}
          >
            I design, paint
            <span className="relative inline-block mx-1">
              <FlowerScribble className="absolute -top-6 -right-3" />
            </span>
            <br />
            &amp;{" "}
            <span className="relative inline-block">
              draw
              <ScribbleUnderline className="absolute left-0 -bottom-2 w-full" />
            </span>{" "}
            stuff.
          </h1>
          <p className="text-[17px] leading-relaxed mt-6 max-w-[440px]" style={{ color: "#555" }}>
            I&rsquo;m a product designer and artist, currently crafting 0&rarr;1
            experiences at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#111" }}>
              Superr
            </a>{" "}
            to shape the future of education.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative flex justify-center items-center" style={{ minHeight: "420px" }}>
            <SunSparkleDoodle className="absolute" style={{ top: "-10px", left: "45%" }} />
            <CameraDoodle className="absolute hidden sm:block" style={{ top: "70px", left: "-10px" }} />
            <TagDoodle className="absolute hidden sm:block" style={{ top: "150px", right: "0px" }} />
            <PaletteDoodle className="absolute hidden sm:block" style={{ bottom: "60px", left: "-20px" }} />
            <MusicNotesDoodle className="absolute hidden sm:block" style={{ bottom: "10px", left: "70px" }} />
            <TackPinDoodle className="absolute hidden sm:block" style={{ bottom: "80px", right: "10px" }} />

            <div
              className="relative"
              style={{
                background: "#fff",
                padding: "14px 14px 44px",
                borderRadius: "4px",
                boxShadow: "0 24px 48px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
                transform: "rotate(-1.5deg)",
                zIndex: 2,
              }}
            >
              <div className="rounded overflow-hidden" style={{ width: "300px", height: "300px", position: "relative" }}>
                <Image src="/Avatar.jpg" alt="This is me" fill className="object-cover" style={{ objectPosition: "center 20%" }} />
              </div>
              <p
                className="text-center mt-3"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "20px", color: "#111" }}
              >
                This is me :)
              </p>
            </div>

            <div
              className="absolute flex items-center gap-1.5"
              style={{ bottom: "-10px", right: "0px", zIndex: 3 }}
            >
              <CursorArrowDoodle />
              <span
                className="text-[13px] font-medium px-4 py-2 rounded-full"
                style={{ background: "#9DC3B8", color: "#0f2e26" }}
              >
                product designer
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="px-6 sm:px-10 max-w-[1200px] mx-auto pb-28">
        <Reveal>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: "#111" }}
          >
            Passionate about crafting beautiful and functional{" "}
            <span className="relative inline-block">
              designs✨
              <span
                className="absolute left-0 top-full whitespace-nowrap"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "15px", color: "#3B82F6" }}
              >
                my obsession
              </span>
            </span>
            . When I&rsquo;m not designing, you can find me drawing some random
            stuff ✏️ or{" "}
            <span className="relative inline-block">
              painting
              <span
                className="absolute left-0 top-full whitespace-nowrap"
                style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "15px", color: "#3B82F6" }}
              >
                my colourful passion
              </span>
            </span>{" "}
            some vibrant canvases 🎨. Currently building and shipping 0&rarr;1
            experiences at Superr. Scroll down to see my work and get a
            glimpse of my creative journey! 🚀
          </p>
        </Reveal>
      </section>

      {/* My Latest Creations */}
      <section id="work" className="px-6 sm:px-10 max-w-[1200px] mx-auto pb-32">
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#111" }}>
            My Latest Creations
          </h2>
          <p className="text-[16px] mt-2" style={{ color: "#666" }}>
            A showcase of my recent projects and exploration
          </p>
        </Reveal>

        <div className="flex flex-col gap-24 mt-16">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "#111" }}>
                    {project.name}
                  </h3>
                  <div className="text-[16px] leading-relaxed mt-4" style={{ color: "#555" }}>
                    {project.description}
                  </div>
                  <button
                    className="mt-6 text-[14px] font-medium px-5 py-2.5 rounded-full"
                    style={{ background: "#111", color: "#fff" }}
                  >
                    View case study
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/11" }}>
                  <ProjectVisual type={project.visual} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 sm:px-10 max-w-[1200px] mx-auto pb-32">
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#111" }}>
            Crafting with These Skills
          </h2>
          <p className="text-[16px] mt-2" style={{ color: "#666" }}>
            A peek at the skills and tools that make it all possible.
          </p>
        </Reveal>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mt-16 items-start justify-center flex-wrap">
          {skillNotes.map((note, i) => (
            <Reveal key={note.title} delay={i * 120}>
              <StickyNote {...note} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* My Creative Play */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pb-32">
        <Reveal>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#111" }}>
                My Creative Play
              </h2>
              <p className="text-[16px] mt-2 max-w-[520px]" style={{ color: "#666" }}>
                While product design is my main gig, I love experimenting with{" "}
                <strong style={{ color: "#111" }}>motion design</strong> and{" "}
                <strong style={{ color: "#111" }}>vibe coding</strong>. Currently
                working on a vibe-coding project, feel free to explore.
              </p>
            </div>
            <span
              className="text-[13px] font-medium px-4 py-2 rounded-full whitespace-nowrap"
              style={{ background: "#111", color: "#fff" }}
            >
              Vibe Coding Project
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="playground-scroll flex gap-4 overflow-x-auto mt-10 -mx-6 px-6 sm:mx-0 sm:px-0 pb-2">
            {creativePlayCards.map((card) => (
              <div
                key={card.id}
                className="shrink-0 rounded-xl transition-transform duration-300 hover:-translate-y-1"
                style={{ width: "280px", height: "280px", background: card.bg }}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" style={{ background: "#111", color: "#fff" }} className="py-24 px-6 sm:px-10">
        <Reveal>
          <div className="max-w-[700px] mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Thanks for making it this far 😊
            </h2>
            <p className="text-[16px] mt-4" style={{ color: "#aaa" }}>
              Got cool opportunities or want to chat about design? Hit me up.
              Always excited to connect!
            </p>
            <a
              href="mailto:aditi.shinde304@gmail.com"
              className="inline-block mt-8 text-[15px] font-medium px-7 py-3 rounded-full"
              style={{ border: "1px solid #fff", color: "#fff" }}
            >
              Let&rsquo;s Connect!
            </a>

            <div className="flex items-center justify-center gap-8 flex-wrap mt-16 text-[14px]" style={{ color: "#ccc" }}>
              <a href="https://www.linkedin.com/in/aditi-shinde-5415681b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/AditiShinde30" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>

            <p className="text-[13px] mt-10" style={{ color: "#777" }}>
              Crafted with dedication, buildspace encouragement and a touch of
              last-minute tweaks.✨
            </p>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}
