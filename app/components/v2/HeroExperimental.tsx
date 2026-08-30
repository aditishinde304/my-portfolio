"use client";

import { useState } from "react";
import Image from "next/image";

// Experimental center-aligned hero (Figma: node 919-42038).
// Rendered alongside the original hero, which is currently hidden in page.tsx.

const photos = [
  { src: "/hero-photo-2.jpg", alt: "Aditi at a cafe" },
  { src: "/hero-photo-1.jpg", alt: "Aditi outside Bangalore Palace" },
  { src: "/hero-photo-3.jpg", alt: "Aditi at a hill viewpoint" },
];

// Slot 0 sits in front; slots 1 and 2 fan out behind it.
// Offsets/rotations come from the Figma composition.
const slots = [
  { x: 0, y: 0, rotate: 0, z: 3, scale: 1 },
  { x: 37, y: -13, rotate: 13.43, z: 2, scale: 1 },
  { x: -34, y: -16, rotate: -14.26, z: 1, scale: 1 },
];

function PhotoStack() {
  const [front, setFront] = useState(0);

  // Hovering the stack promotes the next photo to the front.
  const advance = () => setFront((f) => (f + 1) % photos.length);

  return (
    <div
      className="hero-x-stack relative"
      style={{ width: "210px", height: "150px" }}
      onMouseEnter={advance}
      onFocus={advance}
      tabIndex={0}
      role="img"
      aria-label="Photos of Aditi"
    >
      {photos.map((photo, i) => {
        const slot = slots[(i - front + photos.length) % photos.length];
        return (
          <div
            key={photo.src}
            className="hero-x-photo absolute"
            style={{
              left: "50%",
              // Side photos sit higher than the centre one, so the optical
              // centre of the stack is below the box's midpoint.
              top: "88px",
              width: "110px",
              height: "122px",
              marginLeft: "-55px",
              marginTop: "-61px",
              zIndex: slot.z,
              transform: `translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg) scale(${slot.scale})`,
              background: "#fff",
              borderRadius: "4px",
              padding: "5px",
              boxShadow:
                "1.385px 1.385px 5.541px 0px rgba(169,169,169,0.25), -0.693px -0.693px 2.078px 0px rgba(184,184,184,0.25)",
            }}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ borderRadius: "1.4px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="110px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HeroExperimental() {
  return (
    <section className="hero-x relative" style={{ overflow: "clip" }}>
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="hero-x-grid pointer-events-none absolute"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          top: "36px",
          width: "1017px",
          height: "720px",
          backgroundImage: "url(/hero-grid.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />

      <div
        className="hero-x-inner relative mx-auto flex flex-col items-center text-center px-6"
        style={{ maxWidth: "1014px" }}
      >
        <PhotoStack />

        <p
          className="text-[18px]"
          style={{ color: "#111011", marginTop: "34px" }}
        >
          <span style={{ color: "#505050" }}>Yo🤘</span>, I&rsquo;m Aditi Shinde
        </p>

        <h1
          className="hero-x-title"
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4.4vw, 3rem)",
            lineHeight: 1.29,
            color: "#000",
            marginTop: "14px",
          }}
        >
          I{" "}
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                left: "-8%",
                top: "16%",
                width: "116%",
                height: "82%",
                backgroundImage: "url(/hero-highlight.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                zIndex: 0,
              }}
            />
            <span className="relative" style={{ zIndex: 1 }}>
              design
            </span>
          </span>
          , build &amp;
          <br />
          make products{" "}
          <span className="relative inline-block">
            <span className="relative" style={{ zIndex: 1 }}>
              delightful
            </span>
            <span
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                left: "-2%",
                bottom: "-0.16em",
                width: "104%",
                height: "0.22em",
                backgroundImage: "url(/hero-squiggle.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
            <span
              aria-hidden
              className="hero-x-sparkles absolute pointer-events-none"
              style={{
                left: "calc(100% + 0.16em)",
                top: "-0.24em",
                width: "0.55em",
                height: "0.69em",
                backgroundImage: "url(/hero-sparkles.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
          </span>
          .
        </h1>

        <p
          className="text-[18px]"
          style={{
            color: "#5c5c5c",
            lineHeight: "32px",
            marginTop: "26px",
            maxWidth: "536px",
          }}
        >
          Product designer at{" "}
          <a
            href="https://www.superr.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "#5c5c5c", textUnderlineOffset: "2px" }}
          >
            Superr
          </a>
          . Currently building, experimenting, and shipping things that excite
          me.
        </p>
      </div>
    </section>
  );
}
