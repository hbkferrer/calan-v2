import { Gauge, PencilRuler, Zap } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const PROMISES = [
  {
    index: "01",
    icon: PencilRuler,
    title: "Standardize the process.",
    text: "One target workflow across all entities: same steps, same data model, same control points — designed together with your finance teams, exceptions included.",
  },
  {
    index: "02",
    icon: Zap,
    title: "Automate the work.",
    text: "Integrations, rules and applied AI execute the repetitive steps — collection, mapping, matching, posting — while your people validate what actually matters.",
  },
  {
    index: "03",
    icon: Gauge,
    title: "Operate with control.",
    text: "We run the process to SLA: monitoring, exception queues, audit trail and continuous improvement. Not a tool you are left alone with — an operated service.",
  },
];

export default function PromiseSection() {
  return (
    <section id="promise" className="scroll-mt-24 bg-white">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The Calan promise"
            title="Standardize. Automate. Operate."
            lede="Three commitments behind every engagement — from a single reconciliation flow to a full group reporting landscape."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROMISES.map((promise, i) => (
            <Reveal key={promise.index} delay={i * 90} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-cloud bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                    <promise.icon aria-hidden className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold tracking-eyebrow text-green-600">
                    {promise.index}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-navy-900">
                  {promise.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {promise.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
