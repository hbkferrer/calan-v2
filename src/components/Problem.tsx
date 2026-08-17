import {
  CalendarClock,
  FileSpreadsheet,
  KeyRound,
  ShieldAlert,
  Unplug,
} from "lucide-react";
import { ArrowLink, Container, PixelMosaic, Reveal, SectionHeading } from "./ui";

const PROBLEMS = [
  {
    icon: Unplug,
    title: "Fragmented systems",
    text: "Finance data sits in ERPs, banks, payroll and local tools that were never designed to talk to each other.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual handoffs",
    text: "Excel exports, e-mails and copy-paste steps carry critical numbers between teams — every single cycle.",
  },
  {
    icon: CalendarClock,
    title: "Recurring deadlines",
    text: "Close, reporting, tax and payroll runs come back every month, with no room to slip and no slack to absorb issues.",
  },
  {
    icon: KeyRound,
    title: "Key-person dependency",
    text: "The process lives in the heads of a few experts, not in documented, controlled and transferable workflows.",
  },
  {
    icon: ShieldAlert,
    title: "Difficult controls",
    text: "Reconciliations, validations and audit trails are hard to enforce consistently across dozens of entities.",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <PixelMosaic
        dark
        className="absolute -right-4 -top-6 opacity-40"
        rows={8}
        cols={14}
        seed={23}
      />
      <Container className="relative py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="The starting point"
            title="The processes are critical. The way they run is fragile."
            lede="In most multi-entity groups, the finance calendar is carried by effort and heroics rather than by systems. Five patterns come up in almost every assessment we run."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 60} className="h-full">
              <div className="h-full rounded-xl border border-navy-700 bg-navy-800/60 p-6">
                <problem.icon aria-hidden className="h-6 w-6 text-blue-300" />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/75">
                  {problem.text}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-xl border border-green-500/40 bg-green-500/10 p-6">
              <p className="text-sm leading-relaxed text-navy-100/90">
                The result: slow closes, weak audit trails and outcomes that
                depend on who is in the office that week.{" "}
                <span className="font-semibold text-white">
                  None of this is a people problem — it is a process design
                  problem.
                </span>
              </p>
              <ArrowLink href="#promise" dark className="mt-5">
                See how we fix it
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
