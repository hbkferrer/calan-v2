import { IMAGES } from "../lib/images";
import { Container, Reveal, SectionHeading, VideoPlaceholder } from "./ui";

export default function MediaSection() {
  return (
    <section id="media" className="scroll-mt-24 border-t border-rule bg-paper">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="See the work"
            title="Ninety seconds inside a running workflow."
            lede="Short, unscripted demonstrations — a real flow, a real exception, a real control — because reassurance comes from seeing the work, not reading about it."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal delay={100}>
            <VideoPlaceholder
              thumbnail={IMAGES.demoReporting}
              kicker="Demo · Reporting"
              title="From 42 entity ledgers to a group report — one run"
              duration="1:30"
              size="large"
              className="h-full"
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal delay={200}>
              <VideoPlaceholder
                thumbnail={IMAGES.demoClearing}
                kicker="Demo · Bank clearing"
                title="An unmatched payment, from exception to resolution"
                duration="1:10"
              />
            </Reveal>
            <Reveal delay={300}>
              <VideoPlaceholder
                thumbnail={IMAGES.demoPayroll}
                kicker="Demo · Payroll data"
                title="Time & attendance to posted payroll, controlled"
                duration="0:55"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
