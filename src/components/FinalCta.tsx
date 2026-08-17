import { useState, type FormEvent } from "react";
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Download,
  PlayCircle,
} from "lucide-react";
import { IMAGES } from "../lib/images";
import { Container, Eyebrow, Photo, Reveal } from "./ui";

const MICRO_CONVERSIONS = [
  { icon: Download, label: "Download the process automation checklist" },
  { icon: PlayCircle, label: "Watch a 90-second workflow demo" },
  { icon: BarChart3, label: "See a client result for your process" },
  { icon: ClipboardCheck, label: "Request a finance process assessment" },
];

const PROCESSES = [
  "Record-to-Report & Close",
  "Management & Statutory Reporting",
  "Group Reporting & Consolidation",
  "Reconciliation & Bank Clearing",
  "Tax Data & E-invoicing",
  "Payroll Data & Posting",
  "Other / not sure yet",
];

const inputClass =
  "w-full border border-navy-200 bg-white px-3.5 py-3 text-sm text-navy-900 placeholder:text-ink-faint/60 focus:border-blue-600 focus:outline-none";

function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false);
  const [situation, setSituation] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Prototype only: no backend — the future site routes this to the right
    // specialist based on process and market (strategy §12).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-white p-10 text-center shadow-panel">
        <CheckCircle2 aria-hidden className="h-12 w-12 text-green-600" strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
          Thank you — your request is with the right specialist.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          We usually come back within one business day with a first read of
          your process and the questions we would dig into together.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-7 shadow-panel sm:p-9"
      aria-label="Talk to a finance automation expert"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-navy-800">
            Work email <span className="text-green-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-navy-800">
            Company <span className="text-green-700">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Company name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="process" className="mb-1.5 block text-xs font-semibold text-navy-800">
          Process to improve
        </label>
        <select id="process" name="process" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a process…
          </option>
          {PROCESSES.map((process) => (
            <option key={process}>{process}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="complexity" className="mb-1.5 block text-xs font-semibold text-navy-800">
          Your complexity
        </label>
        <input
          id="complexity"
          name="complexity"
          type="text"
          placeholder="e.g. 12 entities, 4 countries, SAP + 2 local ERPs"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="situation" className="block text-xs font-semibold text-navy-800">
            What is happening today?
          </label>
          <span className="text-[11px] text-ink-faint">
            {situation.length}/500
          </span>
        </div>
        <textarea
          id="situation"
          name="situation"
          rows={3}
          maxLength={500}
          value={situation}
          onChange={(event) => setSituation(event.target.value)}
          placeholder="The manual steps, the deadline pressure, the tools involved…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 border-navy-300 accent-blue-700"
        />
        I agree to be contacted about my request and accept the privacy
        policy.
      </label>

      <button
        type="submit"
        className="mt-6 w-full bg-navy-900 px-5 py-4 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-blue-700"
      >
        Talk to a finance automation expert
      </button>
      <p className="mt-3 text-center text-[11px] text-ink-faint">
        Routed to the right specialist by process and market — no generic
        sales sequence.
      </p>
    </form>
  );
}

export default function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy-950">
      <Photo
        src={IMAGES.cta}
        alt="Calan office space"
        label="Office"
        showLabel={false}
        className="absolute inset-0"
        imgClassName="opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
      />
      <Container className="relative grid items-center gap-14 py-24 lg:grid-cols-[1fr_0.95fr] lg:py-28">
        <Reveal>
          <Eyebrow dark>Talk to an expert</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-white sm:text-[2.9rem]">
            Which finance process should run better?
          </h2>
          <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-white/80">
            Tell us which process, how many entities and which systems are
            involved. We will come back with the right specialist — not a
            generic sales call.
          </p>
          <ul className="mt-10 max-w-md divide-y divide-white/15 border-y border-white/15">
            {MICRO_CONVERSIONS.map((item) => (
              <li key={item.label}>
                <a
                  href="#contact"
                  className="group flex items-center gap-4 py-4 text-sm font-medium text-white/85 transition-colors hover:text-white"
                >
                  <item.icon
                    aria-hidden
                    className="h-[18px] w-[18px] text-green-400"
                    strokeWidth={1.6}
                  />
                  {item.label}
                  <span
                    aria-hidden
                    className="ml-auto text-green-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={140}>
          <DiagnosticForm />
        </Reveal>
      </Container>
    </section>
  );
}
