import { IMAGES } from "../lib/images";
import { ArrowLink, Container, Photo, Reveal, SectionHeading } from "./ui";

const PROBLEMS = [
  {
    title: "Fragmented systems",
    text: "Finance data sits in ERPs, banks, payroll and local tools that were never designed to talk to each other.",
  },
  {
    title: "Manual handoffs",
    text: "Excel exports, e-mails and copy-paste steps carry critical numbers between teams — every single cycle.",
  },
  {
    title: "Recurring deadlines",
    text: "Close, reporting, tax and payroll runs come back every month, with no room to slip and no slack to absorb issues.",
  },
  {
    title: "Key-person dependency",
    text: "The process lives in the heads of a few experts, not in documented, controlled and transferable workflows.",
  },
  {
    title: "Difficult controls",
    text: "Reconciliations, validations and audit trails are hard to enforce consistently across dozens of entities.",
  },
];

export default function Problem() {
  return (
    <section className="border-b border-rule bg-paper">
      <Container className="py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The starting point"
              title="The processes are critical. The way they run is fragile."
              lede="In most multi-entity groups, the finance calendar is carried by effort and heroics rather than by systems. Five patterns come up in almost every assessment we run."
            />
            <Photo
              src={IMAGES.problem}
              alt="Finance team working through reporting files"
              label="Working session"
              className="mt-12 hidden aspect-[4/3] lg:block"
            />
          </Reveal>

          <div>
            <ol>
              {PROBLEMS.map((problem, i) => (
                <Reveal key={problem.title} delay={i * 70}>
                  <li className="group grid grid-cols-[3.5rem_1fr] gap-6 border-t border-rule py-7 first:border-t-0 first:pt-0 lg:py-8">
                    <span className="font-display text-[1.7rem] font-semibold leading-none text-navy-200 transition-colors group-hover:text-green-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {problem.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                        {problem.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={380}>
              <div className="mt-2 border-t-2 border-navy-900 pt-7">
                <p className="max-w-xl text-[15px] leading-relaxed text-ink">
                  The result: slow closes, weak audit trails and outcomes that
                  depend on who is in the office that week.{" "}
                  <span className="font-semibold">
                    None of this is a people problem — it is a process design
                    problem.
                  </span>
                </p>
                <ArrowLink href="#promise" className="mt-5">
                  See how we address it
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
