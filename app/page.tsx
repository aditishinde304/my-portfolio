import {
  AvatarDoodle,
  ScribbleUnderline,
  FlowerScribble,
} from "./components/v2/Doodles";
import Workspace from "./components/v2/Workspace";

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
            className="relative w-full md:w-[460px]"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2.2rem, 5vw, 3.375rem)",
              lineHeight: "1.375",
              letterSpacing: "-0.01em",
              color: "#111",
            }}
          >
            I design, build &
            <FlowerScribble
              className="absolute hero-flower hidden sm:block"
              style={{ width: "30px", height: "27px", left: "404px", top: "-4px" }}
            />
            <br />
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
            Product designer at{" "}
            <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#111" }}>
              Superr
            </a>
            . Currently building, experimenting, and shipping things that
            excite me. Previously at ConnectWise and Zoop.one.
          </p>
        </div>

        {/* Right: workspace folders */}
        <div className="w-full mt-6 md:mt-2">
          <Workspace />
        </div>
      </section>
    </div>
  );
}
