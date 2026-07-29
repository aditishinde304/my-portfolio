import FolderIcon from "./FolderIcon";

const folders = [
  {
    name: "Interactions",
    subtitle: "How I think about product details",
    href: "/interactions",
  },
  {
    name: "Experiments",
    subtitle: "What I make when I explore",
    href: "/experiments",
  },
];

export default function FoldersSection() {
  return (
    <section className="mb-20">
      <h2
        className="text-[12px] font-medium tracking-[0.06em] uppercase mb-5"
        style={{ color: "var(--foreground)" }}
      >
        Explore
      </h2>

      <div className="flex gap-10 sm:gap-16">
        {folders.map((folder) => (
          <a key={folder.name} href={folder.href} className="group w-[120px] sm:w-[160px] shrink-0">
            <FolderIcon className="w-full transition-transform duration-500 group-hover:scale-[1.04]" />
            <p
              className="text-[15px] font-medium leading-snug mt-4"
              style={{ color: "var(--foreground)" }}
            >
              {folder.name}
            </p>
            <p className="text-[13px] leading-snug mt-0.5" style={{ color: "var(--muted)" }}>
              {folder.subtitle}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
