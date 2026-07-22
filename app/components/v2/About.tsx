import Image from "next/image";
import {
  CameraDoodle,
  PaletteDoodle,
  PencilDoodle,
  CoffeeCupDoodle,
  AirplaneDoodle,
  TackPinDoodle,
} from "./Doodles";

// Personality photos — placeholders until real photos are swapped in.
// Each just needs a `photo` (real asset) or `placeholder` (icon + gradient).
type Snap = {
  id: string;
  label: string;
  gradient: string;
  icon: React.ReactNode;
  pos: React.CSSProperties;
  rotate: number;
};

const snaps: Snap[] = [
  {
    id: "painting",
    label: "sketching",
    gradient: "linear-gradient(160deg, #FBD8C4, #F3A98A)",
    icon: <PaletteDoodle style={{ width: "34px", height: "34px" }} />,
    pos: { right: "-9%", top: "24%", width: "30%" },
    rotate: 6,
  },
  {
    id: "coffee",
    label: "coffee",
    gradient: "linear-gradient(160deg, #E8D9C4, #C9A876)",
    icon: <CoffeeCupDoodle style={{ width: "30px", height: "30px" }} />,
    pos: { right: "-16%", top: "46%", width: "27%" },
    rotate: -5,
  },
  {
    id: "travel",
    label: "solo trips",
    gradient: "linear-gradient(160deg, #C9E0D8, #8FBFAE)",
    icon: <AirplaneDoodle style={{ width: "30px", height: "30px" }} />,
    pos: { right: "-8%", top: "68%", width: "25%" },
    rotate: 5,
  },
  {
    id: "desk",
    label: "desk / camera roll",
    gradient: "linear-gradient(160deg, #D8DEEF, #A6B3DC)",
    icon: <CameraDoodle style={{ width: "34px", height: "30px" }} />,
    pos: { left: "-9%", top: "32%", width: "26%" },
    rotate: -6,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingBottom: "100px" }}>
      <div className="relative mx-auto" style={{ maxWidth: "620px", paddingTop: "40px", paddingBottom: "60px" }}>
        {/* scattered doodles */}
        <PencilDoodle style={{ position: "absolute", left: "-56px", top: "8%", width: "30px" }} className="hidden sm:block" />
        <PaletteDoodle style={{ position: "absolute", left: "-60px", top: "34%", width: "32px" }} className="hidden sm:block" />
        <CameraDoodle style={{ position: "absolute", left: "-58px", top: "58%", width: "32px" }} className="hidden sm:block" />
        <CoffeeCupDoodle style={{ position: "absolute", right: "-2%", bottom: "-4%", width: "26px" }} />
        <AirplaneDoodle style={{ position: "absolute", left: "6%", bottom: "-6%", width: "24px", transform: "rotate(-8deg)" }} />

        {/* main card — the hero photo */}
        <div
          className="relative"
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "36px 36px 40px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
            border: "1px solid #f0f0ee",
          }}
        >
          <div className="text-center" style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
                color: "#111",
              }}
            >
              Outside of Work
            </h2>
            <p className="text-[15px]" style={{ color: "#777", marginTop: "6px" }}>
              Product designer, artist &amp; side-project starter.
            </p>
          </div>

          <div className="relative mx-auto" style={{ width: "100%", maxWidth: "340px", aspectRatio: "3 / 4", borderRadius: "14px", overflow: "hidden" }}>
            <Image
              src="/Avatar.jpg"
              alt="Aditi outside of work"
              fill
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />
          </div>
        </div>

        {/* personality snaps (desktop scrapbook overlay) */}
        {snaps.map((s) => (
          <div
            key={s.id}
            className="about-snap absolute hidden md:block"
            style={{ ...s.pos, transform: `rotate(${s.rotate}deg)`, zIndex: 5 }}
          >
            <div
              style={{
                background: "#fff",
                padding: "6px 6px 16px",
                borderRadius: "8px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: "3px", background: s.gradient }}
              >
                {s.icon}
              </div>
            </div>
          </div>
        ))}

        {/* sticky note */}
        <div
          className="absolute hidden md:block"
          style={{ left: "-22%", bottom: "10%", width: "230px", zIndex: 6, transform: "rotate(-3deg)" }}
        >
          <TackPinDoodle style={{ position: "absolute", top: "-14px", left: "20px", width: "18px", zIndex: 7 }} />
          <div
            style={{
              background: "#FFF6C7",
              padding: "18px 20px 20px",
              borderRadius: "4px",
              boxShadow: "0 14px 30px rgba(0,0,0,0.14)",
            }}
          >
            <p style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: 600, fontSize: "18px", color: "#2a2410", marginBottom: "6px" }}>
              Currently obsessed with:
            </p>
            <ul style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "16.5px", color: "#3a3010", lineHeight: 1.5 }}>
              <li>&middot; Building side projects</li>
              <li>&middot; AI-native products</li>
              <li>&middot; Great typography</li>
              <li>&middot; Cold coffee</li>
            </ul>
            <a
              href="/about"
              className="about-cta inline-block"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "14px", fontWeight: 500, color: "#8a5a00", marginTop: "12px" }}
            >
              Know me better &rarr;
            </a>
          </div>
        </div>

        {/* mobile: simple row of snaps + sticky note stacked below the card */}
        <div className="md:hidden mt-6 grid grid-cols-4 gap-3">
          {snaps.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-center"
              style={{ aspectRatio: "1 / 1", borderRadius: "10px", background: s.gradient }}
            >
              {s.icon}
            </div>
          ))}
        </div>

        <div className="md:hidden mt-6">
          <div
            style={{
              background: "#FFF6C7",
              padding: "18px 20px 20px",
              borderRadius: "10px",
              boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
              transform: "rotate(-1.5deg)",
            }}
          >
            <p style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: 600, fontSize: "18px", color: "#2a2410", marginBottom: "6px" }}>
              Currently obsessed with:
            </p>
            <ul style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "16.5px", color: "#3a3010", lineHeight: 1.5 }}>
              <li>&middot; Building side projects</li>
              <li>&middot; AI-native products</li>
              <li>&middot; Great typography</li>
              <li>&middot; Cold coffee</li>
            </ul>
            <a
              href="/about"
              className="about-cta inline-block"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "14px", fontWeight: 500, color: "#8a5a00", marginTop: "12px" }}
            >
              Know me better &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
