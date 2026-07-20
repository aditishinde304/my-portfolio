import Image from "next/image";
import {
  AvatarDoodle,
  CameraDoodle,
  SunSparkleDoodle,
  TagDoodle,
  PaletteDoodle,
  ScribbleUnderline,
  FlowerScribble,
  CursorArrowDoodle,
  MusicNotesDoodle,
} from "./components/v2/Doodles";

// Second "scissors/tool" doodle mirroring PaletteDoodle on the right side
function ToolDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="5" stroke="#111" strokeWidth="1.6" />
      <circle cx="10" cy="30" r="5" stroke="#111" strokeWidth="1.6" />
      <path d="M14 13 L34 34" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 27 L34 6" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div style={{ background: "#fcfcfb", color: "#111", minHeight: "100vh" }}>
      {/* Nav */}
      <header className="mx-auto" style={{ maxWidth: "1014px", padding: "38px 0" }}>
        <div className="flex items-center justify-between px-6 sm:px-0">
          <span className="text-[18px] font-semibold" style={{ color: "#111" }}>
            Aditi Shinde
          </span>
          <nav className="hidden sm:flex items-center" style={{ gap: "40px" }}>
            {["About", "Work", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hero-nav-link text-[15px]"
                style={{ color: "#333" }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn text-[15px] font-medium"
            style={{ background: "#111", color: "#fff", padding: "11px 24px", borderRadius: "999px" }}
          >
            Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="mx-auto grid grid-cols-1 md:grid-cols-[445px_1fr] px-6 sm:px-0"
        style={{ maxWidth: "1014px", gap: "60px", paddingTop: "82px", paddingBottom: "80px", alignItems: "start" }}
      >
        {/* Left: text */}
        <div style={{ maxWidth: "445px" }}>
          <div
            className="flex items-center justify-center"
            style={{ width: "92px", height: "92px", borderRadius: "14px", border: "1px solid #eee", background: "#fff", marginBottom: "24px" }}
          >
            <AvatarDoodle style={{ width: "64px", height: "64px" }} />
          </div>

          <p className="text-[16px]" style={{ color: "#333", marginBottom: "8px" }}>
            Yo🤙, I&rsquo;m Aditi Shinde
          </p>

          <h1
            className="relative"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4.6vw, 2.75rem)",
              lineHeight: "1.375",
              letterSpacing: "-0.01em",
              color: "#111",
            }}
          >
            I design, build
            <FlowerScribble
              className="absolute hero-flower hidden sm:block"
              style={{ width: "30px", height: "27px", left: "292px", top: "-4px" }}
            />
            <br />
            &amp;{" "}
            <span className="relative inline-block" style={{ lineHeight: 1 }}>
              make
              <ScribbleUnderline
                className="absolute"
                style={{ width: "100%", height: "10px", left: 0, bottom: "-10px" }}
              />
            </span>{" "}
            products delightful.
          </h1>

          <p className="text-[17px]" style={{ lineHeight: "1.6", color: "#555", marginTop: "32px", maxWidth: "405px" }}>
            I&rsquo;m a product designer and artist, currently crafting 0&rarr;1
            experiences at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#111" }}>
              Superr
            </a>{" "}
            to shape the future of education.
          </p>
        </div>

        {/* Right: polaroid + doodles */}
        <div
          className="hidden md:block relative mx-auto"
          style={{ width: "397px", height: "486px" }}
        >
          <SunSparkleDoodle
            className="absolute hero-doodle-float"
            style={{ left: "196px", top: "0px", width: "47px", height: "28px", animationDelay: "0s" }}
          />
          <CameraDoodle
            className="absolute hero-doodle-float"
            style={{ left: "0px", top: "111px", width: "36px", height: "45px", transform: "rotate(-14deg)", animationDelay: "0.6s" }}
          />
          <TagDoodle
            className="absolute hero-doodle-float"
            style={{ left: "352px", top: "105px", width: "30px", height: "43px", transform: "rotate(12deg)", animationDelay: "1.1s" }}
          />
          <PaletteDoodle
            className="absolute hero-doodle-float"
            style={{ left: "2px", top: "296px", width: "34px", height: "34px", animationDelay: "0.3s" }}
          />
          <ToolDoodle
            className="absolute hero-doodle-float"
            style={{ left: "352px", top: "296px", width: "34px", height: "34px", transform: "rotate(-8deg)", animationDelay: "0.9s" }}
          />
          <MusicNotesDoodle
            className="absolute hero-doodle-float"
            style={{ left: "117px", top: "418px", width: "38px", height: "23px", animationDelay: "1.4s" }}
          />

          <div
            className="hero-polaroid absolute"
            style={{
              left: "36px",
              top: "28px",
              width: "317px",
              background: "#fff",
              padding: "14px 14px 0",
              borderRadius: "6px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)",
              zIndex: 2,
            }}
          >
            <div className="relative overflow-hidden" style={{ width: "289px", height: "317px", borderRadius: "2px" }}>
              <Image src="/Avatar.jpg" alt="This is me" fill className="object-cover" style={{ objectPosition: "center 20%" }} />
            </div>
            <p
              className="text-center"
              style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "19px", color: "#111", padding: "10px 0 14px" }}
            >
              This is me :)
            </p>
          </div>

          <div className="absolute" style={{ left: "247px", top: "438px", zIndex: 3 }}>
            <CursorArrowDoodle style={{ width: "18px", height: "24px" }} />
          </div>
          <a
            href="#"
            className="hero-tag-pill absolute text-[14px] font-medium"
            style={{
              left: "258px",
              top: "455px",
              background: "#9DC3B8",
              color: "#0f2e26",
              padding: "9px 20px",
              borderRadius: "999px",
              whiteSpace: "nowrap",
              zIndex: 3,
            }}
          >
            product designer
          </a>
        </div>
      </section>
    </div>
  );
}
