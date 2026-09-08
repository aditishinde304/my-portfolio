"use client";

import { useEffect } from "react";

// Next.js's App Router doesn't reliably let the browser jump to a URL's
// #hash on initial load (hydration can reset scroll after the native jump
// fires). This retries the scroll on mount so links like
// `/experiments#game` land on the right card.
export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.getElementById(hash.slice(1));
    if (!el) return;

    el.scrollIntoView({ block: "start" });
  }, []);

  return null;
}
