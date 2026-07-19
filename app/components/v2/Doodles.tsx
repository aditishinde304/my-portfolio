// Hand-drawn style line-art doodles used around the hero polaroid,
// recreated from the original Framer portfolio's visual language.

export function CameraDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="44" height="30" rx="4" stroke="#111" strokeWidth="1.6" />
      <path d="M16 12 L20 5 H32 L36 12" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="26" cy="27" r="9" stroke="#111" strokeWidth="1.6" />
      <circle cx="26" cy="27" r="4" stroke="#111" strokeWidth="1.4" />
      <circle cx="41" cy="18" r="1.6" fill="#111" />
    </svg>
  );
}

export function SunSparkleDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 26 C 10 10, 34 10, 40 26" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 8 L20 2 L22 8" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 9 L30 4" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 12 L7 8" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function TagDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3 L30 14 L15 42 L2 31 Z" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="19" cy="13" r="2.4" stroke="#111" strokeWidth="1.4" />
    </svg>
  );
}

export function PaletteDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3 C 30 3 37 10 37 19 C 37 24 33 26 29 26 C 26 26 26 23 24 23 C 20 23 21 30 15 30 C 6 30 3 24 3 19 C 3 10 10 3 20 3 Z" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="2" fill="#111" />
      <circle cx="20" cy="11" r="2" fill="#111" />
      <circle cx="28" cy="15" r="2" fill="#111" />
      <circle cx="11" cy="23" r="2" fill="#111" />
    </svg>
  );
}

export function TackPinDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="12" r="10" stroke="#111" strokeWidth="1.6" />
      <path d="M15 22 L15 39" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12 L21 12" stroke="#111" strokeWidth="1.2" />
    </svg>
  );
}

export function MusicNotesDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="26" r="5" stroke="#111" strokeWidth="1.6" />
      <circle cx="27" cy="21" r="5" stroke="#111" strokeWidth="1.6" />
      <path d="M12 26 L12 6 L32 2 L32 21" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScribbleUnderline({ className, color = "#7C3AED", style }: { className?: string; color?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="140" height="14" viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M2 8 C 10 2, 18 2, 26 8 C 34 14, 42 14, 50 8 C 58 2, 66 2, 74 8 C 82 14, 90 14, 98 8 C 106 2, 114 2, 122 8 C 128 11, 134 11, 138 8"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function FlowerScribble({ className, color = "#3B82F6", style }: { className?: string; color?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3.2" fill="#111" />
      <path d="M20 17 C 14 12, 10 14, 12 20 C 14 26, 18 24, 20 20 C 22 24, 28 27, 30 21 C 32 15, 26 12, 20 17 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function CursorArrowDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2 L16 12 L9.5 13.5 L7 21 Z" fill="#111" />
    </svg>
  );
}
