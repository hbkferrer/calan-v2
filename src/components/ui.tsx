import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowRight, Play } from "lucide-react";

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
      className="inline-flex items-baseline gap-1 text-[26px] font-bold tracking-tight"
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
      className={`flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-eyebrow ${
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
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-display text-4xl font-semibold leading-[1.12] sm:text-[2.9rem] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 max-w-2xl text-lg font-light leading-relaxed ${
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
      className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
        dark
          ? "text-green-400 hover:text-green-300"
          : "text-blue-700 hover:text-navy-900"
      } ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost-dark";
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
    primary: "bg-navy-900 text-white hover:bg-blue-700",
    outline:
      "border border-navy-900/30 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
    light: "bg-white text-navy-950 hover:bg-cloud",
    "ghost-dark":
      "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy-950",
  }[variant];
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      )}
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* Photography                                                       */
/* ---------------------------------------------------------------- */

/**
 * Photography slot. Renders the image; if it cannot load (offline build,
 * network policy blocking stock CDNs, swapped asset), it degrades to
 * generated Calan brand art — a duotone skyline composition — so every
 * slot still reads as art-directed. Replace `src` values in
 * src/lib/images.ts with final brand photography.
 */
export function Photo({
  src,
  alt,
  label,
  showLabel = true,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  label?: string;
  showLabel?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`relative overflow-hidden ${className}`}>
        <BrandArt seedText={label ?? alt} />
        {showLabel && (
          <div className="absolute bottom-0 left-0 flex flex-col items-start gap-2 p-5">
            <GreenSquare />
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/55">
              {label ?? "Photography"}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

/**
 * Generated brand art: a duotone "financial district" skyline in the Calan
 * palette, deterministic per seed text. Fills its parent absolutely.
 */
function BrandArt({ seedText }: { seedText: string }) {
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) {
    hash = (hash * 31 + seedText.charCodeAt(i)) | 0;
  }
  const rand = mulberry32(Math.abs(hash) + 3);
  const bars: ReactNode[] = [];
  const n = 16;
  for (let i = 0; i < n; i++) {
    const h = 22 + rand() * 66;
    const w = 3.2 + rand() * 3.4;
    const x = (i / n) * 100 + rand() * 2;
    const pick = rand();
    const fill =
      pick < 0.16 ? "#6CBF4B" : pick < 0.5 ? "#2B87CE" : pick < 0.78 ? "#33608F" : "#84A6CB";
    bars.push(
      <rect
        key={i}
        x={`${x}%`}
        y={`${100 - h}%`}
        width={`${w}%`}
        height={`${h}%`}
        fill={fill}
        opacity={0.14 + rand() * 0.3}
      />,
    );
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {bars}
      </svg>
      {/* Diagonal light sweep */}
      <div
        aria-hidden
        className="absolute -inset-y-full left-1/4 w-2/3 rotate-[24deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />
      <PixelMosaic
        dark
        rows={5}
        cols={8}
        cell={10}
        seed={Math.abs(hash) % 97}
        className="absolute right-3 top-3 opacity-50"
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Video placeholder                                                 */
/* ---------------------------------------------------------------- */

/**
 * Placeholder for a video asset (showreel, 90-second demo, case film).
 * Purely visual — swap for the real player at integration time.
 */
export function VideoPlaceholder({
  thumbnail,
  kicker,
  title,
  duration,
  size = "regular",
  className = "",
}: {
  thumbnail: string;
  kicker: string;
  title: string;
  duration: string;
  size?: "regular" | "large";
  className?: string;
}) {
  return (
    <figure
      className={`group relative cursor-pointer overflow-hidden bg-navy-950 ${className}`}
      title="Video placeholder — final asset to be provided"
    >
      <div className="aspect-video">
        <Photo
          src={thumbnail}
          alt={title}
          label="Video still"
          showLabel={false}
          className="h-full w-full"
          imgClassName="opacity-75 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-60"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-navy-950/30"
      />
      {/* Play control */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full border border-white/70 bg-navy-950/40 backdrop-blur-sm transition-all group-hover:border-green-400 group-hover:bg-navy-950/60 ${
            size === "large" ? "h-20 w-20" : "h-14 w-14"
          }`}
        >
          <Play
            aria-hidden
            className={`translate-x-0.5 text-white transition-colors group-hover:text-green-400 ${
              size === "large" ? "h-8 w-8" : "h-5 w-5"
            }`}
            fill="currentColor"
          />
        </span>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-green-400">
            <GreenSquare />
            {kicker}
          </p>
          <p
            className={`mt-2 font-display font-semibold leading-snug text-white ${
              size === "large" ? "text-2xl sm:text-[1.7rem]" : "text-lg"
            }`}
          >
            {title}
          </p>
        </div>
        <span className="mb-0.5 shrink-0 border border-white/40 px-2 py-1 text-[11px] font-semibold text-white/90">
          {duration}
        </span>
      </figcaption>
    </figure>
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
