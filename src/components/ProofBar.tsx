import { Container, Reveal } from "./ui";

const PROOF_POINTS = [
  {
    value: "1993",
    label: "operating critical finance processes for over 30 years",
  },
  {
    value: "Europe",
    label: "delivery across entities, languages and regulatory regimes",
  },
  {
    value: "Listed groups",
    label: "and their subsidiaries among long-standing clients",
  },
  {
    value: "ERP-agnostic",
    label: "SAP, Oracle, Microsoft, Workday and local systems",
  },
];

export default function ProofBar() {
  return (
    <section aria-label="Why Calan is credible" className="border-b border-rule bg-white">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {PROOF_POINTS.map((point) => (
              <div
                key={point.value}
                className="border-l border-rule px-6 py-9 first:border-l-0 first:pl-0 sm:px-8 max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(3)]:pl-0 max-lg:[&:nth-child(n+3)]:border-t"
              >
                <dt className="sr-only">{point.value}</dt>
                <dd>
                  <p className="font-display text-[1.65rem] font-semibold leading-none text-navy-900">
                    {point.value}
                  </p>
                  <p className="mt-2.5 max-w-[24ch] text-[13px] leading-snug text-ink-soft">
                    {point.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
