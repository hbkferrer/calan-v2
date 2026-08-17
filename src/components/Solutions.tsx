import {
  ArrowLeftRight,
  Banknote,
  BarChart3,
  BookOpenCheck,
  Boxes,
  Building2,
  Check,
  Database,
  FileCheck2,
  Globe,
  Layers,
  Timer,
} from "lucide-react";
import {
  ArrowLink,
  Container,
  PixelMosaic,
  Reveal,
  SectionHeading,
} from "./ui";

const SOLUTIONS = [
  {
    icon: BookOpenCheck,
    title: "Record-to-Report & Close",
    text: "A faster close that does not depend on heroics.",
    points: ["Journals & accruals automation", "Close checklist & ownership", "Reconciliations & controls"],
  },
  {
    icon: Layers,
    title: "Group Reporting & Consolidation",
    text: "Multi-entity collection, mapping and consolidation.",
    points: ["Entity data collection & mapping", "Consolidation & eliminations", "Statutory notes & disclosures"],
  },
  {
    icon: ArrowLeftRight,
    title: "Reconciliation & Bank Clearing",
    text: "Matching engineered for volume, not for spot checks.",
    points: ["Rule-based auto-matching", "Exception queues & review", "Cash application & clearing"],
  },
  {
    icon: BarChart3,
    title: "Management & Statutory Reporting",
    text: "From source systems to signed reports, automatically.",
    points: ["Automated report production", "Discrepancy & variance reports", "Audit-ready documentation"],
  },
  {
    icon: FileCheck2,
    title: "Tax Data & E-invoicing",
    text: "Regulatory data flows under permanent control.",
    points: ["JPK / KSeF & VAT data flows", "Validation & control rules", "E-invoicing integration"],
  },
  {
    icon: Banknote,
    title: "Payroll Data & Posting",
    text: "From time & attendance to a posted, controlled payroll.",
    points: ["T&A and payroll interfaces", "Control & validation steps", "Automated GL posting"],
  },
];

const COMPLEXITY = [
  { icon: Building2, title: "Multi-entity", text: "Dozens of subsidiaries, one standard." },
  { icon: Boxes, title: "Multi-ERP", text: "SAP next to local and legacy systems." },
  { icon: Globe, title: "Multi-country", text: "Languages, GAAPs and local rules." },
  { icon: Database, title: "High volumes", text: "Millions of lines, every cycle." },
  { icon: Timer, title: "Hard deadlines", text: "Close and filings that cannot slip." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 overflow-hidden bg-mist">
      <PixelMosaic
        className="absolute right-0 top-14 hidden opacity-60 xl:block"
        rows={11}
        cols={12}
        seed={31}
      />
      <Container className="relative py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Solutions by process"
              title="Built around the processes your finance team actually runs."
              lede="Six process territories — each delivered as a standardized, automated and operated workflow, not as a line in a service catalogue."
            />
            <ArrowLink href="#contact" className="mb-1.5">
              Discuss your process
            </ArrowLink>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 3) * 80} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-cloud bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover"
              >
                <span className="w-fit rounded-lg bg-blue-50 p-2.5 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <solution.icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-900 transition-colors group-hover:text-blue-700">
                  {solution.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{solution.text}</p>
                <ul className="mt-4 space-y-2 border-t border-mist pt-4">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13px] text-ink-soft"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Designed for complexity */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-2xl border border-cloud bg-white p-7 shadow-card sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight text-navy-900">
                Designed for complexity
              </h3>
              <p className="text-sm text-ink-faint">
                The environments most tools and generalist firms struggle with.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {COMPLEXITY.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border-l-2 border-green-500 bg-mist px-4 py-3.5"
                >
                  <item.icon aria-hidden className="h-5 w-5 text-blue-600" />
                  <p className="mt-2.5 text-sm font-bold text-navy-900">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-soft">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
