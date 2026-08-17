import { Check, Minus } from "lucide-react";
import { ArrowLink, Container, Reveal, SectionHeading } from "./ui";

const CONTEXT_CHIPS = [
  "European listed group",
  "42 entities · 11 countries",
  "SAP + local ERPs",
  "Monthly statutory reporting",
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
  { value: "12 → 3", label: "working days per reporting cycle" },
  { value: "86%", label: "of postings generated automatically" },
  { value: "42", label: "entities on one standardized workflow" },
  { value: "6 weeks", label: "to the first entity live in production" },
];

export default function ClientResult() {
  return (
    <section id="client-results" className="scroll-mt-24 bg-white">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Client results"
              title="Proof over promises."
              lede="One environment, before and after — the level of operational detail we bring to every published case."
            />
            <ArrowLink href="#insights" className="mb-1.5">
              See all client results
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-cloud shadow-panel lg:grid-cols-[1.15fr_0.85fr]">
            {/* Case narrative */}
            <div className="bg-white p-8 sm:p-10">
              <ul className="flex flex-wrap gap-2">
                {CONTEXT_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-navy-900">
                Monthly statutory reporting, industrialized.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Group reporting depended on entity files arriving by e-mail,
                manual re-mapping in Excel and late-night checks before every
                deadline. Calan standardized the data model, automated
                collection and mapping from SAP and local ERPs, and now
                operates the monthly run — with exceptions routed to the right
                owner the moment they appear.
              </p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Before
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {BEFORE.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-ink-soft">
                        <Minus aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-green-700">
                    After
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {AFTER.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] font-medium text-navy-800">
                        <Check aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Outcomes panel */}
            <div className="flex flex-col justify-between bg-navy-900 p-8 text-white sm:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-green-400">
                  Outcomes
                </p>
                <dl className="mt-6 space-y-6">
                  {METRICS.map((metric) => (
                    <div key={metric.label}>
                      <dt className="sr-only">{metric.label}</dt>
                      <dd>
                        <p className="text-3xl font-bold tracking-tight text-white">
                          {metric.value}
                        </p>
                        <p className="mt-0.5 text-sm text-navy-100/70">
                          {metric.label}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 border-t border-navy-700 pt-5">
                <p className="text-xs text-navy-100/60">
                  Stack: SAP ECC &amp; S/4 · local ERPs · Calan data platform ·
                  Power BI
                </p>
                <p className="mt-2 text-[11px] italic text-navy-100/45">
                  Illustrative case assembled from typical Calan engagements —
                  metrics to be replaced with approved client figures.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
