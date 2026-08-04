"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavSection = { id: string; label: string };

export default function CaseStudyNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className="hidden lg:flex flex-col shrink-0"
      style={{ position: "sticky", top: "100px", alignSelf: "flex-start", width: "168px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] mb-10"
        style={{ color: "var(--muted)" }}
      >
        <span aria-hidden>←</span> Go back
      </Link>
      <ul className="flex flex-col gap-3.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-[14px] block"
              style={{
                color: active === section.id ? "var(--foreground)" : "var(--muted)",
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
