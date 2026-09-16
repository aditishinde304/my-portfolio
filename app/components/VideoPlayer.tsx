"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  // Skip the IntersectionObserver play/pause gating and just autoplay
  // immediately. Needed for cards inside a continuously-scrolling
  // marquee (e.g. Playground): elements there cross the visibility
  // threshold constantly as the CSS animation moves them, which can
  // pause playback before the browser has ever painted a frame,
  // leaving the video blank.
  alwaysPlay?: boolean;
  // A static frame shown immediately and whenever the video hasn't (or
  // can't) start playing yet -- autoplay is blocked by the browser,
  // the network is slow, etc. Without this the card is blank until
  // playback actually begins.
  poster?: string;
  // Fixed-box layout: the video and its poster both absolutely fill the
  // wrapper (className/style go on the wrapper), guaranteeing something
  // paints even if the <video> element itself fails to render a frame.
  // Use for cards with an externally-set size (object-fit: cover grids).
  // Leave false (default) for a video that should size itself naturally
  // from its own dimensions (className/style go straight on the <video>).
  fill?: boolean;
}

export default function VideoPlayer({ src, className, style, alwaysPlay, poster, fill }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (alwaysPlay) {
      video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [alwaysPlay]);

  if (!fill) {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        className={className}
        style={style}
      />
    );
  }

  return (
    <div className={className} style={{ position: "relative", ...style }}>
      {/* Plain <img> poster, always rendered behind the video. If the
          <video> element ever fails to paint for any reason (autoplay
          blocked, a decoding/compositing quirk, slow network), this is
          guaranteed to still show something instead of a blank box. */}
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
