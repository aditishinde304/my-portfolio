import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

export type PlaygroundItem = {
  id: string;
  title?: string;
  tag?: string;
  type: "image" | "video" | "placeholder";
  src?: string;
  href?: string;
  icon?: "sticker" | "motion" | "code" | "cube" | "frames" | "cursor";
};

/**
 * Add new cards here. type: "placeholder" renders a simple icon until real
 * media (image/video) is ready — just swap type to "image"/"video" and set src.
 * title/tag are optional — omit them to show the media only.
 */
export const playgroundItems: PlaygroundItem[] = [
  { id: "screen-recording-1", type: "video", src: "/Screen Recording.mp4" },
  { id: "screen-recording-2", type: "video", src: "/Screen Recording 2.mp4" },
  { id: "screen-recording-3", type: "video", src: "/Screen Recording 3.mp4" },
  { id: "screen-recording-4", type: "video", src: "/Screen Recording 4.mp4" },
  { id: "screen-recording-5", type: "video", src: "/Screen Recording 5.mp4" },
  { id: "screen-recording-6", type: "video", src: "/Screen Recording 6.mp4" },
];

function PlaceholderIcon({ icon }: { icon: PlaygroundItem["icon"] }) {
  const stroke = "var(--muted)";
  switch (icon) {
    case "sticker":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4">
          <rect x="3" y="3" width="12" height="12" rx="2.5" />
          <rect x="9" y="9" width="12" height="12" rx="2.5" fill="var(--background)" />
        </svg>
      );
    case "motion":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round">
          <circle cx="5" cy="19" r="1.6" fill={stroke} stroke="none" />
          <circle cx="12" cy="12" r="1.8" fill={stroke} stroke="none" />
          <circle cx="20" cy="4" r="2" fill={stroke} stroke="none" />
          <path d="M5 19 C 9 15, 9 9, 12 12 S 17 8, 20 4" strokeDasharray="1 3.2" />
        </svg>
      );
    case "code":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="8 5 3 12 8 19" />
          <polyline points="16 5 21 12 16 19" />
        </svg>
      );
    case "cube":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" />
          <path d="M3 7 L12 12 L21 7" />
          <path d="M12 12 V22" />
        </svg>
      );
    case "frames":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4">
          <rect x="2" y="5" width="14" height="14" rx="2" />
          <rect x="8" y="2" width="14" height="14" rx="2" fill="var(--background)" />
        </svg>
      );
    case "cursor":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M5 3 L19 10.5 L12.5 12.5 L10.5 19 Z" />
        </svg>
      );
    default:
      return null;
  }
}

function PlaygroundCard({ item, keyPrefix }: { item: PlaygroundItem; keyPrefix: string }) {
  const Card = (
    <div
      className="rounded-2xl overflow-hidden mb-2.5 flex items-center justify-center"
      style={{ width: "300px", height: "170px", background: "var(--hover-bg)", position: "relative" }}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
        {item.type === "image" && item.src && (
          <Image src={item.src} alt={item.title ?? ""} fill className="object-cover" sizes="300px" />
        )}
        {item.type === "video" && item.src && (
          <VideoPlayer src={item.src} className="w-full h-full object-cover" />
        )}
        {item.type === "placeholder" && (
          <div className="w-full h-full flex items-center justify-center">
            <PlaceholderIcon icon={item.icon} />
          </div>
        )}
      </div>
    </div>
  );

  const inner = (
    <>
      {Card}
      {item.title && (
        <p className="text-[13.5px] leading-snug" style={{ color: "var(--foreground)" }}>
          {item.title}
        </p>
      )}
      {item.tag && (
        <p className="text-[12px] mt-0.5" style={{ color: "var(--muted)" }}>
          {item.tag}
        </p>
      )}
    </>
  );

  const className = "group shrink-0";
  const style: React.CSSProperties = { width: "300px" };
  const key = `${keyPrefix}-${item.id}`;

  return item.href ? (
    <a key={key} href={item.href} className={className} style={style}>
      {inner}
    </a>
  ) : (
    <div key={key} className={className} style={style}>
      {inner}
    </div>
  );
}

export default function Playground() {
  return (
    <section className="mb-20">
      <div className="flex items-baseline justify-between mb-1.5">
        <h2
          className="text-[12px] font-medium tracking-[0.06em] uppercase"
          style={{ color: "var(--foreground)" }}
        >
          Playground
        </h2>
      </div>
      <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
        Small interaction explorations, motion studies, and quick builds. Not case studies, just craft.
      </p>

      <div className="playground-marquee-viewport -mx-8 px-8 sm:mx-0 sm:px-0">
        <div className="playground-marquee-track">
          {playgroundItems.map((item) => (
            <PlaygroundCard key={`a-${item.id}`} item={item} keyPrefix="a" />
          ))}
          {playgroundItems.map((item) => (
            <PlaygroundCard key={`b-${item.id}`} item={item} keyPrefix="b" />
          ))}
        </div>
      </div>
    </section>
  );
}
