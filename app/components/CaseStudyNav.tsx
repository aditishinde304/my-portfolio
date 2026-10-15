"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BackArrowIcon } from "./v2/Doodles";

// `includes` lists extra section ids (not shown in the nav) that belong to
// this item, so the item stays highlighted while those sections are in view.
type NavSection = { id: string; label: string; includes?: string[] };

// A section becomes active once its top passes this line below the top of
// the viewport (roughly where the sticky nav sits).
const ACTIVE_LINE_PX = 140;

export default function CaseStudyNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  // Set when a nav link is clicked, cleared on the next manual scroll input.
  // It only resolves the one ambiguous case where the page can't scroll far
  // enough for a clicked (last) section to reach the line.
  const lockRef = useRef<string | null>(null);

  const compute = useCallback(() => {
    // Every tracked element in document order, each tagged with its nav item.
    const tracked: { el: HTMLElement; owner: string }[] = [];
    sections.forEach((section) => {
      [section.id, ...(section.includes ?? [])].forEach((id) => {
        const el = document.getElementById(id);
        // Skip elements that aren't rendered (display: none etc.).
        if (el && el.getClientRects().length > 0) tracked.push({ el, owner: section.id });
      });
    });
    if (tracked.length === 0) return;
    tracked.sort((a, b) =>
      a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    );

    const line = Math.min(ACTIVE_LINE_PX, window.innerHeight * 0.3);
    let current = tracked[0].owner;
    for (const { el, owner } of tracked) {
      if (el.getBoundingClientRect().top <= line) current = owner;
      else break;
    }

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = lockRef.current ?? sections[sections.length - 1].id;

    setActive((prev) => (prev === current ? prev : current));
  }, [sections]);

  useEffect(() => {
    // Scroll events already fire at most once per frame, and compute() only
    // reads a handful of element positions, so it runs directly.
    const schedule = compute;
    const release = () => {
      lockRef.current = null;
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", release);

    // Media/fonts loading shifts layout, so re-check when the page height changes.
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("load", schedule);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
      resizeObserver.disconnect();
    };
  }, [compute]);

  return (
    <nav
      className="hidden lg:flex flex-col shrink-0"
      style={{ position: "sticky", top: "100px", alignSelf: "flex-start", width: "168px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] font-semibold mb-10"
        style={{ color: "var(--cs-muted)" }}
      >
        <BackArrowIcon /> Back
      </Link>
      <ul className="flex flex-col gap-3.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={() => {
                lockRef.current = section.id;
                setActive(section.id);
              }}
              className="text-[15px] block"
              style={{
                color: active === section.id ? "var(--cs-fg)" : "var(--cs-secondary)",
                fontWeight: active === section.id ? 600 : 400,
                transition: "color 150ms ease, font-weight 150ms ease",
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
