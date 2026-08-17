import { Check, Minus } from "lucide-react";
import { IMAGES } from "../lib/images";
import { ArrowLink, Container, Photo, Reveal, SectionHeading } from "./ui";

const CONTEXT_CHIPS = [
  "European listed group",
  "42 entities · 11 countries",
  "SAP + local ERPs",
];

const BEFORE = [
  "12 working days per reporting cycle",
  "Manual collection from 42 entity files",
  "Errors discovered late, during review",
  "Process carried by three key people",
];

const AFTER = [
  "3 working days per reporting cycle",
  "Automated collection, mapping and checks",
  "Exceptions flagged at the source, same day",
  "Documented workflow, operated to SLA",
];

const METRICS = [
  { value: "12 → 3", label: "working days per cycle" },
  { value: "86%", label: "of postings automated" },
  { value: "42", label: "entities on one workflow" },
  { value: "6 wks", label: "to first entity live" },
];

export default function ClientResult() {
  return (
    <section id="client-results" className="scroll-mt-24 border-t border-rule bg-white">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Client results"
              title="Proof over promises."
              lede="One environment, before and after — the level of operational detail we bring to every published case."
            />
            <ArrowLink href="#insights" className="mb-2">
              See all client results
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <article className="mt-16 grid border border-rule lg:grid-cols-[0.85fr_1.15fr]">
            {/* Photography */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <Photo
                src={IMAGES.caseStudy}
                alt="Headquarters of a European listed group"
                label="Case study"
                showLabel={false}
                className="absolute inset-0"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-green-400">
                  Case study
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {CONTEXT_CHIPS.map((chip) => (
                    <li key={chip} className="text-[13px] font-medium text-white/90">
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Narrative */}
            <div className="p-8 sm:p-12">
              <h3 className="max-w-lg font-display text-[1.9rem] font-semibold leading-tight text-navy-900">
                Monthly statutory reporting, industrialized.
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Group reporting depended on entity files arriving by e-mail,
                manual re-mapping in Excel and late-night checks before every
                deadline. Calan standardized the data model, automated
                collection and mapping from SAP and local ERPs, and now
                operates the monthly run — with exceptions routed to the right
                owner the moment they appear.
              </p>

              <div className="mt-9 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Before
                  </p>
                  <ul className="mt-4 space-y-3">
                    {BEFORE.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                        <Minus aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-green-700">
                    After
                  </p>
                  <ul className="mt-4 space-y-3">
                    {AFTER.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] font-medium text-navy-900">
                        <Check aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <dl className="mt-9 grid grid-cols-2 gap-px border border-rule bg-navy-100/60 sm:grid-cols-4">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="bg-white px-4 py-5">
                    <dt className="sr-only">{metric.label}</dt>
                    <dd>
                      <p className="font-display text-[1.7rem] font-semibold leading-none text-navy-900">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[11.5px] leading-snug text-ink-soft">
                        {metric.label}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 text-xs italic text-ink-faint">
                Illustrative case assembled from typical Calan engagements —
                metrics to be replaced with approved client figures. Stack:
                SAP ECC &amp; S/4 · local ERPs · Calan data platform · Power
                BI.
              </p>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
