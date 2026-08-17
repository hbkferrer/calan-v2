import { Check, CircleDashed, ShieldCheck } from "lucide-react";
import { Button, Container, Eyebrow, GreenSquare, PixelMosaic, Reveal } from "./ui";

const CLOSE_ROWS = [
  { entity: "PL · SAP ECC", pct: 100, status: "Posted" },
  { entity: "DE · SAP S/4", pct: 100, status: "Posted" },
  { entity: "FR · Oracle NetSuite", pct: 82, status: "In validation" },
  { entity: "ES · Local ERP", pct: 64, status: "Mapping" },
];

function WorkflowCard() {
  return (
    <div className="relative">
      {/* Back card — bank clearing */}
      <div className="absolute -left-6 -top-9 hidden w-64 rotate-[-3deg] rounded-xl border border-cloud bg-white p-4 shadow-card sm:block">
        <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
          Bank clearing
        </p>
        <p className="mt-1.5 text-2xl font-bold tracking-tight text-navy-900">
          96.4%
        </p>
        <p className="text-xs text-ink-soft">auto-matched this cycle</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-cloud">
          <div className="h-full w-[96%] rounded-full bg-green-500" />
        </div>
      </div>

      {/* Main card — group close */}
      <div className="relative rounded-2xl border border-cloud bg-white p-6 shadow-panel">
        <div className="flex items-center justify-between gap-4 border-b border-mist pb-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
              Monthly close · Workday 3
            </p>
            <p className="mt-1 text-base font-bold text-navy-900">
              Group statutory reporting — 42 entities
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            On track
          </span>
        </div>

        <ul className="divide-y divide-mist">
          {CLOSE_ROWS.map((row) => (
            <li key={row.entity} className="flex items-center gap-4 py-3">
              <span className="w-36 shrink-0 text-[13px] font-medium text-navy-800">
                {row.entity}
              </span>
              <span className="h-1.5 grow overflow-hidden rounded-full bg-cloud">
                <span
                  className={`block h-full rounded-full ${
                    row.pct === 100 ? "bg-green-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${row.pct}%` }}
                />
              </span>
              <span
                className={`flex w-28 shrink-0 items-center justify-end gap-1 text-right text-xs font-medium ${
                  row.pct === 100 ? "text-green-700" : "text-blue-600"
                }`}
              >
                {row.pct === 100 ? (
                  <Check aria-hidden className="h-3.5 w-3.5" />
                ) : (
                  <CircleDashed aria-hidden className="h-3.5 w-3.5" />
                )}
                {row.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between rounded-lg bg-mist px-4 py-3 text-xs">
          <span className="font-semibold text-navy-900">
            8,412 entries posted automatically
          </span>
          <span className="text-ink-soft">14 exceptions for review</span>
        </div>
      </div>

      {/* Floating chip — audit trail */}
      <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-lg border border-cloud bg-white px-3.5 py-2.5 shadow-card-hover sm:flex">
        <ShieldCheck aria-hidden className="h-4 w-4 text-green-600" />
        <span className="text-xs font-semibold text-navy-900">
          Audit trail complete
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-cloud/70">
      <PixelMosaic
        className="absolute -right-6 top-10 hidden opacity-70 lg:block"
        rows={9}
        cols={16}
        seed={11}
      />
      <PixelMosaic
        className="absolute -left-10 bottom-6 hidden opacity-30 xl:block"
        rows={6}
        cols={8}
        seed={4}
      />
      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
        <Reveal>
          <Eyebrow>Finance transformation &amp; operations</Eyebrow>
          <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl">
            Finance operations,
            <br />
            <span className="text-blue-600">engineered</span>
            <GreenSquare className="ml-2 inline-block h-[0.14em] w-[0.14em] align-baseline sm:h-3 sm:w-3" />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            We design, automate and operate critical finance processes for
            multi-entity organizations across Europe — connecting people, data
            and systems with control.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#solutions" withArrow>
              Explore our solutions
            </Button>
            <Button href="#contact" variant="outline">
              Talk to a finance automation expert
            </Button>
          </div>
          <p className="mt-7 text-[13px] font-medium text-ink-faint">
            Close · Consolidation · Reconciliation · Reporting · Tax data ·
            Payroll data
          </p>
        </Reveal>
        <Reveal delay={150} className="lg:pl-4">
          <WorkflowCard />
        </Reveal>
      </Container>
    </section>
  );
}
