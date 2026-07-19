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
      <path d="M20 18 C 16 14, 12 15, 13 19 C 14 22, 18 21, 20 18 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M20 18 C 24 14, 28 15, 27 19 C 26 22, 22 21, 20 18 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M20 18 C 16 22, 15 26, 19 25 C 22 24, 21 20, 20 18 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M20 18 C 24 22, 25 26, 21 25 C 18 24, 19 20, 20 18 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="18" r="2.6" fill="#111" />
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

export function AvatarDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* shoulders / top */}
      <path d="M14 58 C14 46 22 40 32 40 C42 40 50 46 50 58" fill="#111" />
      {/* hair back */}
      <path d="M18 32 C16 20 22 8 32 8 C42 8 48 20 46 32 L46 40 C46 40 40 44 32 44 C24 44 18 40 18 40 Z" fill="#111" />
      {/* face */}
      <path d="M23 27 C23 18 27 12 32 12 C37 12 41 18 41 27 C41 35 37 40 32 40 C27 40 23 35 23 27 Z" fill="#F4C9A0" />
      {/* fringe */}
      <path d="M23 25 C23 16 27 10 32 10 C37 10 41 16 41 25 C38 21 35 19 32 19 C29 19 26 21 23 25 Z" fill="#111" />
      {/* side strand */}
      <path d="M21 28 C19 34 19 40 22 46" stroke="#111" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* eyes */}
      <circle cx="28.5" cy="28" r="1.5" fill="#111" />
      <circle cx="35.5" cy="28" r="1.5" fill="#111" />
      {/* smile */}
      <path d="M28 33 C 29.5 35.5 34.5 35.5 36 33" stroke="#111" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
