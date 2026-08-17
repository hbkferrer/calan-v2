import { IMAGES } from "../lib/images";
import {
  Button,
  Container,
  GreenSquare,
  Photo,
  Reveal,
  VideoPlaceholder,
} from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950">
      {/* Full-bleed photography */}
      <Photo
        src={IMAGES.hero}
        alt="Glass towers of a European financial district"
        label="Hero photography"
        showLabel={false}
        className="absolute inset-0"
        imgClassName="opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/82 to-navy-900/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent"
      />

      <Container className="relative">
        <div className="grid items-end gap-16 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:py-36">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-eyebrow text-green-400">
              <GreenSquare />
              Finance transformation &amp; operations
            </p>
            <h1 className="mt-7 font-display text-[3.1rem] font-semibold leading-[1.06] text-white sm:text-[4.2rem]">
              Finance operations,
              <br />
              engineered
              <GreenSquare className="ml-3 inline-block h-3 w-3 align-baseline sm:h-[15px] sm:w-[15px]" />
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-white/85 sm:text-xl">
              We design, automate and operate critical finance processes for
              multi-entity organizations across Europe — connecting people,
              data and systems with control.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#solutions" variant="light" withArrow>
                Explore our solutions
              </Button>
              <Button href="#contact" variant="ghost-dark">
                Talk to a finance automation expert
              </Button>
            </div>
          </Reveal>

          {/* Showreel placeholder */}
          <Reveal delay={180} className="lg:pb-2">
            <VideoPlaceholder
              thumbnail={IMAGES.showreel}
              kicker="Showreel 2026"
              title="Inside the operations we run for European groups"
              duration="1:45"
              className="shadow-panel"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
