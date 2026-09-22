// "Pinned sticky notes" testimonials section — recreated as real
// HTML/CSS (no screenshot/image asset for the cards themselves) using
// the same typography, container width and spacing system as
// "My Creative Play" / "Experiments". The pushpin is the one real
// asset (public/Pin.png), used as a small `<img>`.

import Image from "next/image";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  // Desktop-only hand-composed placement: a small rotation + vertical
  // offset per card so the row reads as intentionally pinned rather
  // than perfectly aligned (card 2 sits lower, per the reference).
  rotate: number;
  translateY: number;
  pinRotate: number;
  pinOffsetX: number;
};

const testimonials: Testimonial[] = [
  {
    id: "suhani",
    quote:
      "Aditi is easy to work with and easy to manage. She asks clarifying questions early, which saves rework and ensures she’s working from the right brief. She takes feedback graciously and acts on it, making iteration fast and low friction. She’s a genuine collaborator, approachable, reliable and a positive presence on the team.",
    name: "Suhani Ashok",
    role: "Design Manager",
    company: "Superr",
    photo: "/face-suhani.png",
    rotate: -1.5,
    translateY: 0,
    pinRotate: 8,
    pinOffsetX: -4,
  },
  {
    id: "shalini",
    quote:
      "Aditi is a self-motivated designer. She's keen on learning and a very quick executor. I have liked working with Aditi specially because she's warm and fun to talk to.",
    name: "Shalini Mookerjee",
    role: "Product Designer",
    company: "Superr",
    photo: "/face-shalini.png",
    rotate: 2,
    translateY: 22,
    pinRotate: -6,
    pinOffsetX: 5,
  },
  {
    id: "gauruv",
    quote:
      "Aditi is a thoughtful and highly diligent designer who always takes the time to explore different options and recommend the best approach. I especially appreciate how she goes beyond design to help with UI testing and iteration. She’s someone I can always rely on to care about both the details and the overall user experience.",
    name: "Gauruv Singh",
    role: "Product Manager",
    company: "Superr",
    photo: "/face-gauruv.png",
    rotate: -2,
    translateY: -4,
    pinRotate: 10,
    pinOffsetX: -3,
  },
];

function Pushpin({ rotate = 0, offsetX = 0 }: { rotate?: number; offsetX?: number }) {
  return (
    <span
      className="testimonial-pin"
      aria-hidden
      style={{ transform: `translateX(calc(-50% + ${offsetX}px)) rotate(${rotate}deg)` }}
    >
      <span className="testimonial-pin-shadow" />
      <Image src="/Pin.png" alt="" width={44} height={40} />
    </span>
  );
}

// Hand-drawn doodle assets provided for the section (public/tangle.png,
// public/heart.svg) -- used in place of the earlier inline-SVG marks.
function TangleDoodle({ className }: { className?: string }) {
  return (
    <Image src="/tangle.png" alt="" width={28} height={31} className={className} aria-hidden />
  );
}

function HeartDoodle({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/heart.svg" alt="" className={className} aria-hidden />
  );
}

function TestimonialCard({
  t,
  className,
  style,
  innerStyle,
}: {
  t: Testimonial;
  className?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}) {
  // Split into an outer wrapper (flex sizing + the pinned rotation/
  // offset transform) and an inner card (the actual sticky-note box)
  // so a card's visible width can be trimmed via `innerStyle` without
  // touching its flex slot -- i.e. without moving or re-tilting it.
  return (
    <div className={className} style={style}>
      <div className="testimonial-card" style={innerStyle}>
        <Pushpin rotate={t.pinRotate} offsetX={t.pinOffsetX} />
        <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
        <div className="testimonial-person">
          <span className={`testimonial-avatar${t.id === "shalini" ? " testimonial-avatar-shalini" : ""}`}>
            <Image src={t.photo} alt="" width={40} height={40} className="testimonial-avatar-photo" />
          </span>
          <div>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">
              {t.role}, {t.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mb-20" style={{ paddingTop: "16px" }}>
      <div className="flex items-baseline justify-between mb-3">
        <h2
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
            color: "var(--foreground)",
          }}
        >
          Kind words from good people.
        </h2>
      </div>
      <p className="testimonials-subheading text-[18px] leading-relaxed" style={{ color: "var(--muted)", marginTop: "-8px", marginBottom: "48px" }}>
        A few words from the people I&rsquo;ve had the chance to learn and build with.
      </p>

      <div className="testimonials-board">
        <TangleDoodle className="testimonials-doodle-marks" />
        <HeartDoodle className="testimonials-doodle-heart" />

        <div className="testimonials-row hidden sm:flex">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              t={t}
              className="testimonials-row-card"
              style={{
                transform: `rotate(${t.rotate}deg) translateY(${t.translateY}px)`,
              }}
              innerStyle={
                t.id === "shalini"
                  ? { width: "calc(100% - 6px)", marginLeft: "auto", marginRight: "auto" }
                  : undefined
              }
            />
          ))}
        </div>

        <div className="testimonials-stack flex sm:hidden">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              t={t}
              className="testimonials-stack-card"
              style={{
                transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              }}
            />
          ))}
          <HeartDoodle className="testimonials-doodle-heart-mobile" />
        </div>
      </div>
    </section>
  );
}
