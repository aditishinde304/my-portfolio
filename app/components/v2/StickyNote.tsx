interface StickyNoteProps {
  title: string;
  items: string[];
  bg: string;
  headerBg: string;
  rotate: number;
}

export default function StickyNote({ title, items, bg, headerBg, rotate }: StickyNoteProps) {
  return (
    <div
      className="w-full sm:w-[260px] transition-transform duration-300 hover:-translate-y-1.5"
      style={{
        background: bg,
        borderRadius: "4px",
        boxShadow: "0 10px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        className="px-5 py-3 text-[16px] font-semibold"
        style={{ background: headerBg, borderRadius: "4px 4px 0 0", color: "#1a1a1a" }}
      >
        {title}
      </div>
      <ul className="px-5 py-5 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-[16px]"
            style={{ fontFamily: "var(--font-caveat), cursive", color: "#1a1a1a" }}
          >
            &middot; {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
