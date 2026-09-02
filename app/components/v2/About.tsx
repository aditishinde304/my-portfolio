import Image from "next/image";

// Colors and type pulled directly from the Figma "About" frame
// (node 678:23516, file lf6f59UjnJdmlNwtbieySn).
const MATISSE = "#1e4b9a"; // heading / body ink
const PERSIAN_RED = "#cd392a"; // CTA link
const ATHENS_GRAY = "#f4f4f5"; // sticky note background

// The 4 secondary photos (dog, coffee+croissant, hiking, record player) are
// stock imagery from the Figma template — this sandbox can't fetch them
// (figma.com is network-policy blocked), so they're neutral placeholder
// cards with a matching emoji until real photos are swapped in.
function PhotoCard({
  emoji,
  style,
  rotate,
  emojiSize = 34,
  radius = 4,
}: {
  emoji: string;
  style: React.CSSProperties;
  rotate: number;
  emojiSize?: number;
  radius?: number;
}) {
  return (
    <div
      className="figma-about-photo absolute flex items-center justify-center"
      style={{
        ...style,
        transform: `rotate(${rotate}deg)`,
        background: "#e9e7e2",
        border: "2px solid #f4f4f5",
        borderRadius: `${radius}px`,
        boxShadow: "0px 1px 2px 0px rgba(39,39,42,0.05)",
      }}
    >
      <span style={{ fontSize: `${emojiSize}px`, lineHeight: 1 }}>{emoji}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto px-6 sm:px-0" style={{ maxWidth: "1014px", paddingTop: "40px", paddingBottom: "100px" }}>
      {/* ── desktop: exact Figma composition, 820px reference frame ── */}
      <div className="relative mx-auto hidden md:block" style={{ width: "820px", height: "526px" }}>
        {/* left column emoji */}
        <div className="absolute flex flex-col items-center" style={{ left: "165px", top: "82px", gap: "6px" }}>
          <span style={{ fontSize: "48px", lineHeight: 1 }}>🏃‍♀️</span>
          <span style={{ fontSize: "48px", lineHeight: 1 }}>🧘‍♀️</span>
          <span style={{ fontSize: "48px", lineHeight: 1 }}>🐕</span>
        </div>

        {/* bottom-right coffee + croissant cluster */}
        <div className="absolute" style={{ right: "60px", bottom: "83px", transform: "rotate(4deg)" }}>
          <span style={{ fontSize: "96px", lineHeight: 1, display: "block" }}>☕️</span>
          <span style={{ fontSize: "51px", lineHeight: 1, position: "absolute", right: "-8px", top: "4px", transform: "rotate(-12deg)" }}>🥐</span>
        </div>

        {/* core card */}
        <div
          className="relative mx-auto"
          style={{
            width: "350px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 1px 1px rgba(39,39,42,0.05)",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col items-center" style={{ gap: "8px", padding: "26.6px 32px 27.61px" }}>
            <h2
              style={{
                fontFamily: "var(--font-petrona), Georgia, serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "39.2px",
                color: MATISSE,
                textAlign: "center",
              }}
            >
              About Me
            </h2>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "25.6px",
                color: MATISSE,
                textAlign: "center",
              }}
            >
              Aditi would like to share a photo
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <Image src="/Avatar.jpg" alt="Aditi Shinde" fill className="object-cover" style={{ objectPosition: "center 20%" }} />
          </div>

          <div style={{ height: "48px" }} />
        </div>

        {/* top-right polaroid cluster (hiking / dog / coffee+croissant) */}
        <PhotoCard emoji="🥾" rotate={-4} emojiSize={30} style={{ left: "565px", top: "86px", width: "97px", height: "124px", zIndex: 4 }} />
        <PhotoCard emoji="🐕" rotate={6} emojiSize={40} style={{ left: "613px", top: "21px", width: "119px", height: "119px", zIndex: 6 }} />
        <PhotoCard emoji="☕️" rotate={2} emojiSize={36} style={{ left: "682px", top: "92px", width: "123px", height: "94px", zIndex: 5 }} />
        <span className="absolute" style={{ left: "691px", top: "15px", fontSize: "29px", transform: "rotate(8deg)", zIndex: 7 }}>📎</span>

        {/* bottom-left: record photo peeking behind the sticky note */}
        <PhotoCard emoji="🎵" rotate={-8} emojiSize={40} style={{ left: "8px", top: "374px", width: "120px", height: "120px", zIndex: 4 }} />

        {/* sticky note */}
        <div
          className="absolute flex flex-col"
          style={{
            left: "68px",
            top: "336px",
            width: "230px",
            gap: "10px",
            padding: "8px",
            background: ATHENS_GRAY,
            borderRadius: "4px",
            boxShadow: "0px 1px 2px 0px rgba(23,23,23,0.05)",
            zIndex: 6,
          }}
        >
          <span className="absolute" style={{ left: "18px", top: "-16px", fontSize: "26px", zIndex: 7 }}>📌</span>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "25.6px",
              color: MATISSE,
              padding: "4px",
              margin: 0,
            }}
          >
            Love great design or good coffee? Let&rsquo;s chat about your brand&rsquo;s next chapter!
          </p>
          <div className="flex items-center" style={{ gap: "6px", padding: "0 4px" }}>
            <span style={{ fontSize: "20px", lineHeight: 1 }}>📞</span>
            <a
              href="mailto:aditi.shinde304@gmail.com"
              className="figma-about-cta"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "25.6px",
                color: PERSIAN_RED,
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Book a call now!
            </a>
          </div>
        </div>
      </div>

      {/* ── mobile: simple stacked fallback ── */}
      <div className="md:hidden">
        <div
          className="relative mx-auto"
          style={{
            width: "100%",
            maxWidth: "350px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 1px 1px rgba(39,39,42,0.05)",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col items-center" style={{ gap: "8px", padding: "26.6px 32px 27.61px" }}>
            <h2
              style={{
                fontFamily: "var(--font-petrona), Georgia, serif",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "36px",
                color: MATISSE,
                textAlign: "center",
              }}
            >
              About Me
            </h2>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "15px",
                lineHeight: "24px",
                color: MATISSE,
                textAlign: "center",
              }}
            >
              Aditi would like to share a photo
            </p>
          </div>
          <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <Image src="/Avatar.jpg" alt="Aditi Shinde" fill className="object-cover" style={{ objectPosition: "center 20%" }} />
          </div>
        </div>

        <div className="flex justify-center flex-wrap mt-6" style={{ gap: "20px" }}>
          <span style={{ fontSize: "34px" }}>🏃‍♀️</span>
          <span style={{ fontSize: "34px" }}>🧘‍♀️</span>
          <span style={{ fontSize: "34px" }}>🐕</span>
          <span style={{ fontSize: "34px" }}>☕️</span>
          <span style={{ fontSize: "34px" }}>🥐</span>
        </div>

        <div
          className="flex flex-col mt-6 mx-auto"
          style={{
            maxWidth: "350px",
            gap: "10px",
            padding: "16px",
            background: ATHENS_GRAY,
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "15px",
              lineHeight: "24px",
              color: MATISSE,
              margin: 0,
            }}
          >
            📌 Love great design or good coffee? Let&rsquo;s chat about your brand&rsquo;s next chapter!
          </p>
          <a
            href="mailto:aditi.shinde304@gmail.com"
            className="figma-about-cta"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "15px",
              color: PERSIAN_RED,
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            📞 Book a call now!
          </a>
        </div>
      </div>
    </section>
  );
}
