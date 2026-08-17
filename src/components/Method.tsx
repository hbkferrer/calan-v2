import { Container, Reveal, SectionHeading } from "./ui";

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
    <section id="how-calan-works" className="scroll-mt-24 bg-white">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How Calan works"
            title="From assessment to operated process."
            lede="A delivery model with explicit deliverables and governance at every stage — a first perimeter is typically live in weeks, without heavy implementation costs."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Connecting line, desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[17px] hidden h-px bg-gradient-to-r from-blue-200 via-blue-300 to-green-300 lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <li key={step.name} className="relative">
                <Reveal delay={i * 90} className="flex h-full gap-5 lg:block">
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold ${
                      i === STEPS.length - 1
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-blue-300 bg-white text-blue-700"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {/* Vertical connector, mobile */}
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-2 w-px grow bg-blue-200 lg:hidden"
                    />
                  )}
                </div>
                <div className="pb-2 lg:mt-5 lg:pb-0">
                  <h3 className="text-lg font-bold tracking-tight text-navy-900">
                    {step.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                  <p className="mt-3 inline-block rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700">
                    {step.deliverable}
                  </p>
                </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
