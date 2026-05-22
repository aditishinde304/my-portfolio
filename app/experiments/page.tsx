import Image from "next/image";
import Link from "next/link";

const experiments = [
  {
    name: "Postcard",
    description: "A digital keepsake experience built with love, exploring how travel memories can feel more personal and emotional online. Focused on tactile interactions, paper-like textures, soft motion, and nostalgic visual craft using Vercel v0. (Currently in progress.)",
    image: "/Postcard.png",
    href: "https://v0-travel-postcard-project.vercel.app/",
    wip: true,
  },
  {
    name: "Pixel Game",
    description: "A retro-style browser game built in a few hours to explore interactions, movement physics, and playful visual feedback. Created using HTML, CSS, JavaScript, and Google AI Studio while experimenting with vibe coding workflows.",
    image: "/Game design.png",
    href: "https://aistudio.google.com/apps/d15c50fe-e2ee-4d69-a962-d47bda824e79?showPreview=true&showAssistant=true&project=gen-lang-client-0080565783&fullscreenApplet=true",
  },
  {
    name: "Focus Widget",
    description: "A minimal focus session widget exploring calm UI, subtle motion, and distraction-free interactions for deep work sessions. Built using Vercel v0 while experimenting with minimal visual systems and real-time interactions.",
    image: "/Focus mode.png",
    href: "https://v0-focus-widget-design-imou032sn.vercel.app/",
  },
  {
    name: "To-Do Interaction",
    description: "A tiny interaction experiment built with Cursor to explore micro-interactions, states, and motion details in everyday tools.",
    image: "/Cursor to do.png",
    href: "#",
  },
];

export default function Experiments() {
  return (
    <main className="max-w-[680px] mx-auto px-8 py-20 md:py-28">

      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="text-[13px] mb-8 inline-block link-dashed"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>
        <h1
          className="text-[16px] font-semibold tracking-[-0.01em] mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Experiments
        </h1>
        <p className="text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
          A collection of playful interactions, tiny products and late night ideas built out of curiosity.
        </p>
        <p className="text-[16px] leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
          These projects help me explore craft, motion, AI tools and the space between design and code. More coming soon.
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col" style={{ gap: "72px" }}>
        {experiments.map((exp) => (
          <a key={exp.name} href={exp.href} target={exp.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="group block">
            <div
              className="w-full rounded-2xl overflow-hidden mb-5"
              style={{ height: "300px", background: "var(--hover-bg)", position: "relative" }}
            >
              <div className="absolute" style={{ inset: "16px", position: "absolute" }}>
                <div className="relative w-full h-full">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="560px"
                  />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-medium leading-snug mb-2 flex items-center gap-2">
              <span
                className={exp.href !== "#" ? "link-dashed" : ""}
                style={exp.href === "#" ? { color: "var(--foreground)" } : undefined}
              >
                {exp.name}
              </span>
              {exp.wip && (
                <span className="text-[13px] font-normal" style={{ color: "var(--muted)", fontFamily: "var(--font-shantell)" }}>
                  (WIP)
                </span>
              )}
            </p>
            <p className="text-[16px] leading-relaxed font-normal" style={{ color: "var(--muted)" }}>
              {exp.description}
            </p>
          </a>
        ))}
      </div>

    </main>
  );
}
