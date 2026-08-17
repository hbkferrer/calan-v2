import { ChevronDown, ChevronRight } from "lucide-react";
import { Container, PixelMosaic, Reveal, SectionHeading } from "./ui";

const LAYERS = [
  {
    title: "Sources",
    items: ["ERPs & ledgers", "Banks & payment files", "Payroll, SaaS & files"],
  },
  {
    title: "Data layer",
    items: ["Standardized models", "Quality & validation rules", "Secure cloud storage"],
  },
  {
    title: "Rules & AI",
    items: ["Matching & posting rules", "ML where it earns its place", "Human-in-the-loop"],
  },
  {
    title: "Workflow & controls",
    items: ["Approvals & validations", "Exception queues", "Logs & audit trail"],
  },
  {
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
        className="absolute -right-4 top-12 opacity-25"
        rows={8}
        cols={12}
        seed={47}
      />
      <Container className="relative py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="The technology layer"
            title="One architecture underneath every process."
            lede="Outcome first, engine second. Every Calan workflow runs on the same five-stage architecture — documented, monitored and auditable from source to output."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {LAYERS.map((layer, i) => (
            <Reveal
              key={layer.title}
              delay={i * 90}
              className="flex flex-col gap-4 lg:flex-1 lg:flex-row lg:items-center lg:gap-0"
            >
              <div className="h-full flex-1 border border-white/20 p-6 transition-colors hover:border-green-400/70">
                <p className="font-display text-[1.6rem] font-semibold leading-none text-white/25">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-[15px] font-bold text-white">
                  {layer.title}
                </h3>
                <ul className="mt-3 space-y-1.5 border-t border-white/15 pt-3">
                  {layer.items.map((item) => (
                    <li key={item} className="text-xs font-light leading-snug text-white/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < LAYERS.length - 1 && (
                <>
                  <ChevronRight
                    aria-hidden
                    className="mx-1.5 hidden h-5 w-5 shrink-0 text-green-400 lg:block"
                  />
                  <ChevronDown
                    aria-hidden
                    className="mx-auto h-5 w-5 shrink-0 text-green-400 lg:hidden"
                  />
                </>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 border-t border-white/20 pt-8">
            <p className="text-[11.5px] font-semibold uppercase tracking-eyebrow text-white/50">
              ERP-agnostic by design — we plug into your landscape, not the
              other way around
            </p>
            <p className="mt-5 max-w-4xl text-[15px] font-light leading-loose text-white/80">
              {SYSTEMS.map((system, i) => (
                <span key={system}>
                  <span className="whitespace-nowrap font-medium">{system}</span>
                  {i < SYSTEMS.length - 1 && (
                    <span aria-hidden className="mx-3 text-green-400">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
