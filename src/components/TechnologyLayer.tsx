import {
  BrainCircuit,
  ChevronDown,
  ChevronRight,
  Database,
  FileOutput,
  ListChecks,
  Server,
} from "lucide-react";
import { Container, PixelMosaic, Reveal, SectionHeading } from "./ui";

const LAYERS = [
  {
    icon: Server,
    title: "Sources",
    items: ["ERPs & ledgers", "Banks & payment files", "Payroll, SaaS & files"],
  },
  {
    icon: Database,
    title: "Data layer",
    items: ["Standardized models", "Quality & validation rules", "Secure cloud storage"],
  },
  {
    icon: BrainCircuit,
    title: "Rules & AI",
    items: ["Matching & posting rules", "ML where it earns its place", "Human-in-the-loop"],
  },
  {
    icon: ListChecks,
    title: "Workflow & controls",
    items: ["Approvals & validations", "Exception queues", "Logs & audit trail"],
  },
  {
    icon: FileOutput,
    title: "Outputs",
    items: ["Reports & filings", "ERP postings", "Dashboards & alerts"],
  },
];

const SYSTEMS = [
  "SAP",
  "Oracle NetSuite",
  "Microsoft Dynamics 365",
  "Workday",
  "SAP SuccessFactors",
  "Sage",
  "Comarch",
  "ADP",
  "Azure",
  "Google Cloud",
  "Banks & local systems",
];

export default function TechnologyLayer() {
  return (
    <section id="technology" className="relative scroll-mt-24 overflow-hidden bg-navy-950">
      <PixelMosaic
        dark
        className="absolute -left-6 top-10 opacity-30"
        rows={9}
        cols={10}
        seed={47}
      />
      <Container className="relative py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="The technology layer"
            title="One architecture underneath every process."
            lede="Outcome first, engine second. Every Calan workflow runs on the same five-stage architecture — documented, monitored and auditable from source to output."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {LAYERS.map((layer, i) => (
            <Reveal
              key={layer.title}
              delay={i * 90}
              className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center lg:gap-0"
            >
              <div className="h-full flex-1 rounded-xl border border-navy-700 bg-navy-800/70 p-5 transition-colors hover:border-blue-500/60">
                <div className="flex items-center justify-between">
                  <layer.icon aria-hidden className="h-5 w-5 text-green-400" />
                  <span className="text-[11px] font-bold text-navy-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3.5 text-[15px] font-bold text-white">
                  {layer.title}
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="text-xs leading-snug text-navy-100/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < LAYERS.length - 1 && (
                <>
                  <ChevronRight
                    aria-hidden
                    className="mx-1 hidden h-5 w-5 shrink-0 text-blue-400 lg:block"
                  />
                  <ChevronDown
                    aria-hidden
                    className="mx-auto h-5 w-5 shrink-0 text-blue-400 lg:hidden"
                  />
                </>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 border-t border-navy-800 pt-9">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-navy-300">
              ERP-agnostic by design — we plug into your landscape, not the
              other way around
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {SYSTEMS.map((system) => (
                <li
                  key={system}
                  className="rounded-full border border-navy-700 px-3.5 py-1.5 text-xs font-medium text-navy-100/85"
                >
                  {system}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
