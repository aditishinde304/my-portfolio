import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div style={{ background: "#fcfcfb", color: "#111", minHeight: "100vh" }}>
      <main className="max-w-[1014px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        <Link href="/" className="text-[14px] inline-block mb-16 link-dashed" style={{ color: "#666" }}>
          &larr; Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="relative w-full" style={{ aspectRatio: "3 / 4", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="/Avatar.jpg"
              alt="Aditi Shinde"
              fill
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />
          </div>

          <div>
            <h1
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                color: "#111",
                marginBottom: "20px",
              }}
            >
              Hi, I&rsquo;m Aditi.
            </h1>
            <div className="text-[16px] leading-relaxed" style={{ color: "#555", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                I&rsquo;m a product designer currently building education
                products at{" "}
                <a href="https://www.superr.ai/" target="_blank" rel="noopener noreferrer" className="link-dashed font-medium" style={{ color: "#111" }}>
                  Superr
                </a>
                . Previously at ConnectWise and Zoop.one.
              </p>
              <p>
                Outside of work, I&rsquo;m usually sketching something,
                chasing good coffee, planning the next solo trip, or building
                a side project I probably won&rsquo;t finish. I care about
                craft, thoughtful details, and things that feel human.
              </p>
              <p>
                Lately I&rsquo;ve been exploring the space between design and
                code, prototyping with Cursor, Claude Code, and v0.
              </p>
            </div>
            <p className="text-[16px] leading-relaxed mt-8" style={{ color: "#555" }}>
              Reach me at{" "}
              <a href="mailto:aditi.shinde304@gmail.com" className="link-dashed" style={{ color: "#111" }}>
                aditi.shinde304@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
