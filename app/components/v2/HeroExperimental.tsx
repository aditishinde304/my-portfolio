"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  // Each hover advances the stack one photo forward, permanently — the
  // sequence only ever moves forward and never resets on mouse leave.
  const advance = () => setFront((f) => (f + 1) % photos.length);

  return (
    <div
      className="hero-x-stack relative"
      style={{ width: "210px", height: "150px" }}
      onMouseEnter={() => {
        setIsHovered(true);
        advance();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => {
        setIsHovered(true);
        advance();
      }}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="img"
      aria-label="Photos of Aditi"
    >
      <div
        aria-hidden
        className={`hero-x-note absolute${isHovered ? " hero-x-note-visible" : ""}`}
        style={{ left: "216px", top: "12px" }}
      >
        <svg
          className="hero-x-note-arrow"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 13C21 6 12 8 6 12"
            stroke="#9a9a9a"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M12.9 10.9L6 12L9.6 6"
            stroke="#9a9a9a"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="hero-x-note-text">Yeah, that&rsquo;s me :)</span>
      </div>

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
  const titleRef = useRef<HTMLHeadingElement>(null);

  // The marker strokes animate only once this class is added, so without JS
  // they simply render in place. Re-triggered on bfcache restore (back button)
  // so the sequence plays again rather than staying finished.
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const play = () => {
      el.classList.remove("hero-x-play");
      void el.offsetWidth; // force reflow so the animation restarts
      el.classList.add("hero-x-play");
    };

    play();

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) play();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

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
          <span style={{ color: "#505050" }}>Hey</span>, I&rsquo;m Aditi Shinde
        </p>

        <h1
          ref={titleRef}
          className="hero-x-title"
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4.4vw, 3rem)",
            lineHeight: 1.29,
            color: "#000",
            marginTop: "10px",
          }}
        >
          I{" "}
          <span className="relative inline-block">
            {/* Two overlapping passes, timed to draw in one after another
                like a real highlighter: the first thin stroke lands, then
                the second, thicker pass continues over it. */}
            <span
              aria-hidden
              className="hero-x-highlight hero-x-highlight-a absolute pointer-events-none"
              style={{
                left: "-8%",
                top: "16%",
                width: "116%",
                height: "82%",
                backgroundImage: "url(/hero-highlight-a.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                zIndex: 0,
              }}
            />
            <span
              aria-hidden
              className="hero-x-highlight hero-x-highlight-b absolute pointer-events-none"
              style={{
                left: "-8%",
                top: "16%",
                width: "116%",
                height: "82%",
                backgroundImage: "url(/hero-highlight-b.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                zIndex: 0,
              }}
            />
            <span className="relative" style={{ zIndex: 1 }}>
              design
            </span>
          </span>
          ,{" "}
          <span aria-hidden className="hero-x-build-bracket hero-x-build-bracket-open">
            &lt;
          </span>{" "}
          build{" "}
          <span aria-hidden className="hero-x-build-bracket hero-x-build-bracket-close">
            /&gt;
          </span>{" "}
          &amp;
          <br />
          make products{" "}
          <span className="relative inline-block">
            <span className="relative" style={{ zIndex: 1 }}>
              delightful
            </span>
            <span
              aria-hidden
              className="hero-x-sparkles absolute pointer-events-none"
              style={{
                // tucked right at the top-right corner of the final "l"
                left: "calc(100% - 0.14em - 1px)",
                top: "calc(-0.06em - 6px)",
                width: "0.44em",
                height: "0.55em",
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
            marginTop: "3px",
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

        <div
          className="hero-x-status inline-flex items-center"
          style={{ marginTop: "20px" }}
        >
          <span className="hero-x-status-dot" aria-hidden>
            <span className="hero-x-status-dot-ping" />
            <span className="hero-x-status-dot-core" />
          </span>
          <span className="hero-x-status-text">open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
