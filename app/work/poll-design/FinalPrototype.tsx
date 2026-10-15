"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/Final Prototype Poll Design.mov";
const POSTER = "/posters/final-prototype-poll-design.jpg";

// `start` = playback time (seconds) at which each state begins in the video.
// The active step is derived from the video's own currentTime, so the heading
// can never drift from what's on screen (including after the video loops).
const B = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontWeight: 600, color: "var(--cs-fg)" }}>{children}</span>
);

const steps: { start: number; title: string; body: React.ReactNode }[] = [
  {
    start: 0,
    title: "Ready to create",
    body: (
      <>
        Teachers start with <B>a clear question area and a choice of poll types</B>, making it easy to get started.
      </>
    ),
  },
  {
    start: 6.0,
    title: "Creating the poll",
    body: (
      <>
        <B>Larger writing areas</B> make it easier to add questions and answer options using a pen on the interactive
        whiteboard. Teachers can also <B>switch poll types directly from the options area</B> without returning to the
        starting screen.
      </>
    ),
  },
  {
    start: 16.5,
    title: "Poll in progress",
    body: (
      <>
        Once the poll is launched, teachers can display the answer options for students and <B>end the poll</B> when they
        are ready to view the results.
      </>
    ),
  },
  {
    start: 24.75,
    title: "Viewing the results",
    body: (
      <>
        The results screen shows <B>student responses</B>, helping teachers see how the class answered.
      </>
    ),
  },
];

function stepAt(time: number) {
  let idx = 0;
  steps.forEach((s, i) => {
    if (time >= s.start) idx = i;
  });
  return idx;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function FinalPrototype() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sync = () => setActive(stepAt(video.currentTime));
    video.addEventListener("timeupdate", sync);
    video.addEventListener("seeked", sync);

    // Play while on screen, pause while off screen (the file is large).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("timeupdate", sync);
      video.removeEventListener("seeked", sync);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <style>{`
        @keyframes pollStepIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        .poll-step-heading { animation: pollStepIn 350ms ease-out; }
        @media (prefers-reduced-motion: reduce) { .poll-step-heading { animation: none; } }
      `}</style>

      <div
        className="rounded-2xl p-3 md:p-4"
        style={{ background: "var(--cs-bg)", border: "1px solid var(--cs-border)" }}
      >
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
          <video
            ref={videoRef}
            src={SRC}
            poster={POSTER}
            loop
            muted
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-auto block"
            aria-label="Final teacher prototype: ready to create, creating the poll, poll in progress, viewing the results"
          />
        </div>

        <p
          key={active}
          className="poll-step-heading text-[18px] font-semibold text-center pt-[30px] pb-2 md:pb-3"
          style={{ color: "var(--cs-blue-text)" }}
          aria-live="polite"
        >
          {pad(active)} - {steps[active].title}
        </p>
      </div>

      <ol className="flex flex-col gap-10 mt-14 mb-28">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <span
              className="text-[16px] leading-6 tabular-nums shrink-0 transition-colors duration-300"
              style={{ width: "22px", color: active === i ? "var(--cs-blue-text)" : "var(--cs-muted)" }}
            >
              {pad(i)}
            </span>
            <div>
              <p
                className="text-[17px] font-semibold leading-6 mb-1.5 transition-colors duration-300"
                style={{ color: active === i ? "var(--cs-blue-text)" : "var(--cs-fg)" }}
              >
                {step.title}
              </p>
              <p className="text-[17px] leading-relaxed" style={{ color: "var(--cs-secondary)" }}>
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
