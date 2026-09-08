import {
  AvatarDoodle,
  ScribbleUnderline,
  FlowerScribble,
  NavWiggleUnderline,
} from "./components/v2/Doodles";
import Workspace from "./components/v2/Workspace";
import HeroExperimental from "./components/v2/HeroExperimental";
import Projects from "./components/v2/Projects";
import About from "./components/v2/About";
import Experiments from "./components/v2/Experiments";
import Playground from "./components/Playground";
import Footer from "./components/v2/Footer";

// Hero A/B switch — flip to false to bring the original hero back.
const USE_EXPERIMENTAL_HERO = true;

const NAV_HEIGHT = 56;

function NavAboutIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10.5" r="1.1" fill="currentColor" />
      <circle cx="15" cy="10.5" r="1.1" fill="currentColor" />
      <path d="M8.5 14.5C9.5 16 14.5 16 15.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function NavWorkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5C3 7.67 3.67 7 4.5 7H9L11 9H19.5C20.33 9 21 9.67 21 10.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function NavPlaygroundIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8.5" y="2.5" width="13" height="13" rx="2" fill="#fcfcfb" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function NavContactIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6L12 12.5L20.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navItems = [
  { label: "About", href: "/about", icon: NavAboutIcon },
  { label: "Work", href: "#work", icon: NavWorkIcon },
  { label: "Playground", href: "#playground", icon: NavPlaygroundIcon },
  { label: "Contact", href: "#contact", icon: NavContactIcon },
];

export default function Home() {
  return (
    <div style={{ background: "#fcfcfb", color: "#111", minHeight: "100vh", overflowX: "clip" }}>
      {/* Nav */}
      <header className="mx-auto" style={{ maxWidth: "1014px", padding: "24px 0" }}>
        <div className="flex items-center justify-between px-6 sm:px-0">
          <span className="text-[18px] font-semibold" style={{ color: "#111" }}>
            Aditi Shinde
          </span>
          <div className="hidden sm:flex items-center" style={{ gap: "12px" }}>
            <nav
              className="flex items-center"
              style={{
                height: `${NAV_HEIGHT}px`,
                background: "#fff",
                border: "1px solid #ececea",
                borderRadius: "999px",
                padding: "0 6px",
                gap: "2px",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hero-nav-link nav-wiggle-link nav-pill-link relative inline-flex items-center"
                  style={{ height: "40px", padding: "0 14px", borderRadius: "999px", color: "#333", gap: "6px" }}
                >
                  <item.icon />
                  <span className="text-[14.5px]">{item.label}</span>
                  <NavWiggleUnderline
                    className="nav-wiggle-svg"
                    style={{
                      position: "absolute",
                      left: "14px",
                      right: "14px",
                      width: "auto",
                      bottom: "5px",
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
              className="hero-resume-btn text-[15px] font-medium"
              style={{
                height: `${NAV_HEIGHT}px`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111",
                color: "#fff",
                padding: "0 22px",
                borderRadius: "999px",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero — experimental (Figma 919-42038) */}
      {USE_EXPERIMENTAL_HERO && <HeroExperimental />}

      {/* Hero — original. Kept intact for comparison; not rendered while the experiment is live. */}
      {!USE_EXPERIMENTAL_HERO && (
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
              fontFamily: "var(--font-petrona), Georgia, serif",
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

          <p className="text-[18px]" style={{ lineHeight: "1.6", color: "#555", marginTop: "32px", maxWidth: "405px" }}>
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
      )}

      <Projects />
      {/* <About /> */}
      <Experiments />

      <div id="playground" className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", scrollMarginTop: "24px" }}>
        <Playground />
      </div>

      <Footer />
    </div>
  );
}
