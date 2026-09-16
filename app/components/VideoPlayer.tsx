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
}

export default function VideoPlayer({ src, className, style, alwaysPlay }: VideoPlayerProps) {
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

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      className={className}
      style={style}
    />
  );
}
