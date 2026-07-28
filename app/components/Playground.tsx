"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { preload } from "react-dom";
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
export const newCreativeItems: PlaygroundItem[] = [
  { id: "fashion-design", type: "image", src: "/Fashion design.png" },
  { id: "dashboard-design", type: "image", src: "/Dashboard design.png" },
  { id: "no-news-mockup", type: "image", src: "/No news mockup.png" },
  { id: "landing-page-mockup", type: "image", src: "/Landing page mockup.png" },
  { id: "music-player", type: "image", src: "/Music player.png" },
  { id: "loop-mockup", type: "image", src: "/Loop Mockup.png" },
  { id: "travel-mobile-mockup", type: "image", src: "/Travel mobile mockup.png" },
];

export const motionWorkItems: PlaygroundItem[] = [
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

function PlaygroundCard({
  item,
  keyPrefix,
  onOpen,
}: {
  item: PlaygroundItem;
  keyPrefix: string;
  onOpen: (item: PlaygroundItem) => void;
}) {
  const Card = (
    <div
      className="rounded-2xl overflow-hidden mb-2.5 flex items-center justify-center"
      style={{ width: "300px", height: "230px", background: "var(--hover-bg)", position: "relative" }}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
        {item.type === "image" && item.src && (
          <Image src={item.src} alt={item.title ?? ""} fill className="object-cover" sizes="300px" priority />
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
  const isClickable = !item.href && (item.type === "image" || item.type === "video") && !!item.src;

  if (item.href) {
    return (
      <a key={key} href={item.href} className={className} style={style}>
        {inner}
      </a>
    );
  }

  if (isClickable) {
    return (
      <button
        key={key}
        type="button"
        onClick={() => onOpen(item)}
        className={`${className} text-left bg-transparent border-0 p-0 cursor-pointer`}
        style={style}
        aria-label={item.title ? `View ${item.title}` : "View creative"}
      >
        {inner}
      </button>
    );
  }

  return (
    <div key={key} className={className} style={style}>
      {inner}
    </div>
  );
}

function Lightbox({ item, onClose }: { item: PlaygroundItem; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10"
      style={{ background: "rgba(0, 0, 0, 0.85)" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 flex items-center justify-center rounded-full bg-transparent border-0 cursor-pointer"
        style={{ width: "40px", height: "40px", background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6 L18 18 M18 6 L6 18" />
        </svg>
      </button>

      <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "85vh" }}>
        {item.type === "image" && item.src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.title ?? ""}
            style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: "12px" }}
          />
        )}
        {item.type === "video" && item.src && (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", borderRadius: "12px" }}
          />
        )}
      </div>
    </div>
  );
}

export default function Playground() {
  for (const item of newCreativeItems) {
    if (item.type === "image" && item.src) {
      preload(item.src, { as: "image" });
    }
  }
  for (const item of motionWorkItems) {
    if (item.type === "video" && item.src) {
      preload(item.src, { as: "video" });
    }
  }

  const [activeItem, setActiveItem] = useState<PlaygroundItem | null>(null);
  const handleOpen = useCallback((item: PlaygroundItem) => setActiveItem(item), []);
  const handleClose = useCallback(() => setActiveItem(null), []);

  return (
    <section className="mb-20">
      <div className="flex items-baseline justify-between mb-1.5">
        <h2
          className="text-[12px] font-medium tracking-[0.06em] uppercase"
          style={{ color: "var(--foreground)" }}
        >
          My Creative Play
        </h2>
      </div>
      <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
        A collection of things I create, explore and experiment with beyond everyday product work.
      </p>

      <div className="playground-marquee-viewport -mx-8 px-8 sm:mx-0 sm:px-0">
        <div className="playground-marquee-track">
          {newCreativeItems.map((item) => (
            <PlaygroundCard key={`top-a-${item.id}`} item={item} keyPrefix="top-a" onOpen={handleOpen} />
          ))}
          {newCreativeItems.map((item) => (
            <PlaygroundCard key={`top-b-${item.id}`} item={item} keyPrefix="top-b" onOpen={handleOpen} />
          ))}
        </div>
      </div>

      <div className="playground-marquee-viewport -mx-8 px-8 sm:mx-0 sm:px-0 mt-4">
        <div className="playground-marquee-track playground-marquee-track--reverse">
          {motionWorkItems.map((item) => (
            <PlaygroundCard key={`bottom-a-${item.id}`} item={item} keyPrefix="bottom-a" onOpen={handleOpen} />
          ))}
          {motionWorkItems.map((item) => (
            <PlaygroundCard key={`bottom-b-${item.id}`} item={item} keyPrefix="bottom-b" onOpen={handleOpen} />
          ))}
        </div>
      </div>

      {activeItem && <Lightbox item={activeItem} onClose={handleClose} />}
    </section>
  );
}
