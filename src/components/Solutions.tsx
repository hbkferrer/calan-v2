import { ArrowRight } from "lucide-react";
import { IMAGES } from "../lib/images";
import { ArrowLink, Container, Photo, Reveal, SectionHeading } from "./ui";

const SOLUTIONS = [
  {
    title: "Record-to-Report & Close",
    text: "A faster close that does not depend on heroics: journals, accruals, reconciliations and controls on one checklist.",
  },
  {
    title: "Group Reporting & Consolidation",
    text: "Multi-entity collection, mapping, consolidation, eliminations and statutory notes — one standard for every subsidiary.",
  },
  {
    title: "Reconciliation & Bank Clearing",
    text: "Rule-based auto-matching engineered for volume, with exception queues, cash application and clearing.",
  },
  {
    title: "Management & Statutory Reporting",
    text: "From source systems to signed reports: automated production, discrepancy reports and audit-ready documentation.",
  },
  {
    title: "Tax Data & E-invoicing",
    text: "JPK / KSeF, VAT data and e-invoicing flows under permanent validation and control.",
  },
  {
    title: "Payroll Data & Posting",
    text: "From time & attendance to a posted, controlled payroll — interfaces, validation steps and automated GL posting.",
  },
];

const COMPLEXITY = [
  { title: "Multi-entity", text: "Dozens of subsidiaries, one standard." },
  { title: "Multi-ERP", text: "SAP next to local and legacy systems." },
  { title: "Multi-country", text: "Languages, GAAPs and local rules." },
  { title: "High volumes", text: "Millions of lines, every cycle." },
  { title: "Hard deadlines", text: "Close and filings that cannot slip." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-white">
      <div className="border-t border-rule">
        <Container className="pb-20 pt-24 lg:pb-24 lg:pt-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Solutions by process"
                title="Built around the processes your finance team actually runs."
                lede="Six process territories — each delivered as a standardized, automated and operated workflow, not as a line in a service catalogue."
              />
              <ArrowLink href="#contact" className="mb-2">
                Discuss your process
              </ArrowLink>
            </div>
          </Reveal>

          {/* Hairline capability grid */}
          <Reveal delay={100}>
            <div className="mt-16 grid border border-rule md:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((solution, i) => (
                <a
                  key={solution.title}
                  href="#contact"
                  className={[
                    "group relative flex min-h-[15.5rem] flex-col justify-between border-rule p-8 transition-colors hover:bg-mist",
                    i === 0 ? "" : "border-t",
                    i % 2 === 1 ? "md:border-l" : "md:border-l-0",
                    i < 2 ? "md:border-t-0" : "md:border-t",
                    i % 3 !== 0 ? "lg:border-l" : "lg:border-l-0",
                    i < 3 ? "lg:border-t-0" : "lg:border-t",
                  ].join(" ")}
                >
                  <div>
                    <span className="font-display text-sm font-semibold text-green-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 max-w-[16ch] font-display text-[1.45rem] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-blue-700">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {solution.text}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-navy-900 transition-colors group-hover:text-blue-700">
                    Explore the solution
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Designed for complexity — dark photographic band */}
      <div className="relative overflow-hidden bg-navy-950">
        <Photo
          src={IMAGES.complexity}
          alt="European financial district at dusk"
          label="Financial district"
          showLabel={false}
          className="absolute inset-0"
          imgClassName="opacity-30"
        />
        <div aria-hidden className="absolute inset-0 bg-navy-950/55" />
        <Container className="relative py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-[1.9rem] font-semibold text-white">
                Designed for complexity.
              </h3>
              <p className="text-sm font-light text-white/70">
                The environments most tools and generalist firms struggle
                with.
              </p>
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-8 border-t border-white/20 pt-10 sm:grid-cols-3 lg:grid-cols-5">
              {COMPLEXITY.map((item) => (
                <div key={item.title} className="border-l-2 border-green-500 pl-4">
                  <p className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-[13px] font-light leading-snug text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
