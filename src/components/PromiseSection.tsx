import { Container, Reveal, SectionHeading } from "./ui";

const PROMISES = [
  {
    index: "01",
    title: "Standardize the process.",
    text: "One target workflow across all entities: same steps, same data model, same control points — designed together with your finance teams, exceptions included.",
  },
  {
    index: "02",
    title: "Automate the work.",
    text: "Integrations, rules and applied AI execute the repetitive steps — collection, mapping, matching, posting — while your people validate what actually matters.",
  },
  {
    index: "03",
    title: "Operate with control.",
    text: "We run the process to SLA: monitoring, exception queues, audit trail and continuous improvement. Not a tool you are left alone with — an operated service.",
  },
];

export default function PromiseSection() {
  return (
    <section id="promise" className="scroll-mt-24 bg-white">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The Calan promise"
            title="Standardize. Automate. Operate."
            lede="Three commitments behind every engagement — from a single reconciliation flow to a full group reporting landscape."
          />
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {PROMISES.map((promise, i) => (
            <Reveal key={promise.index} delay={i * 100} className="h-full">
              <article className="h-full border-t-2 border-green-500 pt-7">
                <span className="font-display text-[2.6rem] font-semibold leading-none text-navy-200">
                  {promise.index}
                </span>
                <h3 className="mt-5 font-display text-[1.55rem] font-semibold leading-snug text-navy-900">
                  {promise.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-ink-soft">
                  {promise.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
