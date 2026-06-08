"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Work", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "https://drive.google.com/file/d/1mbuBG-T9t_Rxmam4UcLlDq3tveGxfSit/view?usp=sharing", external: true },
  { label: "Contact", href: "mailto:aditi.shinde304@gmail.com", external: true },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none" style={{ display: "none" }}>
      <nav
        className="flex items-center gap-1 px-1.5 py-1.5 pointer-events-auto"
        style={{
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "999px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        }}
      >
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-150"
              style={{ color: "var(--muted)" }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-150"
              style={
                isActive
                  ? { background: "var(--foreground)", color: "var(--background)" }
                  : { color: "var(--muted)" }
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
