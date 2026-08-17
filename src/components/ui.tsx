import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";

/* ---------------------------------------------------------------- */
/* Brand marks                                                       */
/* ---------------------------------------------------------------- */

/** The signature Calan green square. */
export function GreenSquare({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-block shrink-0 bg-green-500 ${className}`} />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      className="inline-flex items-baseline gap-1 text-2xl font-bold tracking-tight"
      aria-label="Calan — back to top"
    >
      <span className={dark ? "text-white" : "text-blue-600"}>Calan</span>
      <GreenSquare className="h-2.5 w-2.5" />
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* Typography                                                        */
/* ---------------------------------------------------------------- */

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-eyebrow ${
        dark ? "text-green-400" : "text-green-700"
      }`}
    >
      <GreenSquare />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  center = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-navy-100/80" : "text-ink-soft"
          }`}
        >
          {lede}
        </p>
      )}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Links & buttons                                                   */
/* ---------------------------------------------------------------- */

export function ArrowLink({
  href,
  children,
  dark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
        dark
          ? "text-green-400 hover:text-green-300"
          : "text-blue-600 hover:text-blue-700"
      } ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-900 shadow-sm hover:shadow-md",
    outline:
      "border border-navy-200 bg-white text-navy-800 hover:border-blue-400 hover:text-blue-700",
    light: "bg-white text-navy-900 hover:bg-blue-50 shadow-sm",
  }[variant];
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all ${styles} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* Decoration — the pixel-mosaic motif of the current Calan site     */
/* ---------------------------------------------------------------- */

/** Deterministic pseudo-random generator, so the mosaic is stable. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function PixelMosaic({
  rows = 10,
  cols = 14,
  cell = 14,
  seed = 7,
  dark = false,
  className = "",
}: {
  rows?: number;
  cols?: number;
  cell?: number;
  seed?: number;
  dark?: boolean;
  className?: string;
}) {
  const rand = mulberry32(seed);
  const light = ["#B0D5EF", "#7FBBE4", "#2B87CE", "#6CBF4B", "#D8EAF7"];
  const darkColors = ["#33608F", "#2B87CE", "#5580AF", "#6CBF4B", "#234B75"];
  const palette = dark ? darkColors : light;
  const squares: ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Denser toward the top-right corner, like the reference motif.
      const density = (c / cols) * 0.75 + ((rows - r) / rows) * 0.35;
      if (rand() < density * 0.55) {
        const color = palette[Math.floor(rand() * palette.length)];
        squares.push(
          <rect
            key={`${r}-${c}`}
            x={c * cell}
            y={r * cell}
            width={cell - 3}
            height={cell - 3}
            fill={color}
            opacity={0.25 + rand() * 0.65}
          />,
        );
      }
    }
  }
  return (
    <svg
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      width={cols * cell}
      height={rows * cell}
      viewBox={`0 0 ${cols * cell} ${rows * cell}`}
    >
      {squares}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Reveal-on-scroll                                                  */
/* ---------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Layout                                                            */
/* ---------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
