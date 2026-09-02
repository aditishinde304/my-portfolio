function Sparkle({ style, size = 14 }: { style?: React.CSSProperties; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      aria-hidden="true"
      className="footer-sparkle"
    >
      <path
        d="M12 0 C12.8 6.5 17.5 11.2 24 12 C17.5 12.8 12.8 17.5 12 24 C11.2 17.5 6.5 12.8 0 12 C6.5 11.2 11.2 6.5 12 0 Z"
        fill="#fff"
      />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditi-shinde-5415681b7/" },
  { label: "Twitter", href: "https://x.com/AditiShinde30" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Medium", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#111", overflow: "hidden" }} className="w-full">
      <div className="mx-auto px-6 sm:px-0 text-center" style={{ maxWidth: "1014px", paddingTop: "56px", paddingBottom: "36px" }}>
        <h2
          style={{
            fontFamily: "var(--font-petrona), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
            color: "#fff",
          }}
        >
          Thanks for making it this far <span aria-hidden="true">😊</span>
        </h2>

        <p className="text-[14.5px]" style={{ color: "#9a9a96", marginTop: "10px", lineHeight: 1.55, maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
          Got cool opportunities or want to chat about design? Hit me up.
          Always excited to connect!
        </p>

        <div className="footer-connect-group relative inline-block" style={{ marginTop: "32px", marginBottom: "32px" }}>
          <Sparkle size={10} style={{ position: "absolute", top: "-15px", left: "12%" }} />
          <Sparkle size={13} style={{ position: "absolute", top: "-20px", right: "10%" }} />
          <Sparkle size={9} style={{ position: "absolute", top: "8px", left: "-18px" }} />
          <Sparkle size={15} style={{ position: "absolute", bottom: "-13px", right: "-15px" }} />
          <Sparkle size={8} style={{ position: "absolute", bottom: "-18px", left: "18%" }} />

          <a
            href="mailto:aditi.shinde304@gmail.com"
            className="footer-connect-btn inline-flex items-center justify-center"
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#fff",
              padding: "11px 26px",
              borderRadius: "999px",
            }}
          >
            Let&rsquo;s Connect!
          </a>
        </div>

        <div className="flex items-center justify-center flex-wrap" style={{ gap: "28px", marginBottom: "28px" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="footer-social-link text-[14px]"
              style={{ color: "#e4e4e2" }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-[12.5px]" style={{ color: "#6b6b68" }}>
          Crafted with dedication, buildspace encouragement and a touch of last-minute tweaks.✨
        </p>
      </div>
    </footer>
  );
}
