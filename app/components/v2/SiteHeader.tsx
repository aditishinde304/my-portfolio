"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavWiggleUnderline } from "./Doodles";

const RESUME_HREF =
  "https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {open ? (
        <path d="M5 5L15 15M15 5L5 15" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M3 6H17M3 10H17M3 14H17" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

function MobileMenuPanel({
  navItems,
  activeLabel,
  topOffset,
  onClose,
}: {
  navItems: { label: string; href: string }[];
  activeLabel?: string;
  topOffset: number;
  onClose: () => void;
}) {
  // Lock background scroll while the panel is open so the page behind it
  // can't be scrolled while browsing the menu.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return createPortal(
    <div
      className="site-mobile-menu-panel sm:hidden"
      style={{ top: topOffset }}
      role="dialog"
      aria-modal="true"
    >
      <nav className="site-mobile-menu-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="site-mobile-menu-link"
            style={{ color: item.label === activeLabel ? "#111" : "#333", fontWeight: item.label === activeLabel ? 600 : 400 }}
          >
            {item.label}
          </a>
        ))}
        <a
          href={RESUME_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="site-mobile-menu-resume inline-flex items-center justify-center"
        >
          Resume
        </a>
      </nav>
    </div>,
    document.body
  );
}

// Site header used on the homepage and About page. Desktop markup/styling
// is untouched from before. On mobile the hamburger toggles a nav panel
// rendered via a portal straight onto <body> (never nested inside the
// page's root `overflow: clip` wrapper -- WebKit is known to mis-position
// `position: fixed` elements nested inside an ancestor with any
// `overflow` set). The header itself never re-renders/repositions when
// the panel opens -- only the icon inside its button swaps -- and the
// panel is anchored just below the header's own measured height rather
// than covering the full screen, so the page's background stays visible
// beneath it.
export default function SiteHeader({
  isHome,
  activeLabel,
}: {
  isHome?: boolean;
  activeLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const prefix = isHome ? "" : "/";
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Work", href: `${prefix}#work` },
    { label: "Contact", href: `${prefix}#contact` },
  ];

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setPanelTop(headerRef.current.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  return (
    <header ref={headerRef} className="mx-auto relative" style={{ maxWidth: "1014px", padding: "38px 0" }}>
      <div className="flex items-center justify-between px-6 sm:px-0">
        {isHome ? (
          <span className="text-[18px] font-semibold" style={{ color: "#111" }}>
            Aditi Shinde
          </span>
        ) : (
          <a href="/" className="text-[18px] font-semibold" style={{ color: "#111" }}>
            Aditi Shinde
          </a>
        )}

        <div className="hidden sm:flex items-center" style={{ gap: "32px" }}>
          <nav className="flex items-center" style={{ gap: "32px" }}>
            {navItems.map((item) => {
              const active = item.label === activeLabel;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="hero-nav-link nav-wiggle-link text-[16px] relative inline-block"
                  style={{ color: active ? "#111" : "#333", fontWeight: active ? 600 : 400 }}
                >
                  {item.label}
                  <NavWiggleUnderline
                    className="nav-wiggle-svg"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-7px",
                      width: "100%",
                      height: "8px",
                    }}
                  />
                </a>
              );
            })}
          </nav>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn text-[15px] font-medium inline-flex items-center"
            style={{ background: "#111", color: "#fff", padding: "11px 20px", borderRadius: "999px", lineHeight: 1 }}
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="site-mobile-menu-btn sm:hidden inline-flex items-center justify-center shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <MobileMenuPanel
          navItems={navItems}
          activeLabel={activeLabel}
          topOffset={panelTop}
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
}
