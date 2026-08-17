import { Container, GreenSquare, Reveal, SectionHeading } from "./ui";

const STEPS = [
  {
    name: "Assess",
    text: "Map the workflow, data, controls, pain points and automation potential.",
    deliverable: "Assessment + business case",
  },
  {
    name: "Design",
    text: "Standardize the target process, exceptions, roles and governance.",
    deliverable: "Target process + roadmap",
  },
  {
    name: "Build",
    text: "Connect systems, develop the automation, test and document.",
    deliverable: "Production-ready workflow",
  },
  {
    name: "Run",
    text: "Operate to SLA, monitor exceptions and ensure continuity.",
    deliverable: "Managed operation",
  },
  {
    name: "Improve",
    text: "Measure, optimize and extend to other entities or processes.",
    deliverable: "Continuous improvement",
  },
];

export default function Method() {
  return (
    <section id="how-calan-works" className="scroll-mt-24 border-t border-rule bg-paper">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="How Calan works"
            title="From assessment to operated process."
            lede="A delivery model with explicit deliverables and governance at every stage — a first perimeter is typically live in weeks, without heavy implementation costs."
          />
        </Reveal>

        <ol className="mt-16 grid gap-y-12 lg:grid-cols-5 lg:gap-x-8">
          {STEPS.map((step, i) => (
            <li key={step.name}>
              <Reveal delay={i * 90} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-navy-900 pt-6">
                  <p className="flex items-baseline gap-3">
                    <span className="font-display text-[2.2rem] font-semibold leading-none text-navy-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-semibold text-navy-900">
                      {step.name}
                    </span>
                  </p>
                  <p className="mt-3.5 text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-[11.5px] font-semibold uppercase tracking-eyebrow text-green-700">
                    <GreenSquare className="h-1.5 w-1.5" />
                    {step.deliverable}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
