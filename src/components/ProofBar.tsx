import { Container, Reveal } from "./ui";

const PROOF_POINTS = [
  {
    value: "30+ years",
    label: "operating critical finance processes, since 1993",
  },
  {
    value: "European delivery",
    label: "across entities, languages and regulatory regimes",
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
    <section aria-label="Why Calan is credible" className="border-b border-navy-100 bg-white">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 divide-navy-100 sm:divide-x lg:grid-cols-4">
            {PROOF_POINTS.map((point) => (
              <div key={point.value} className="px-2 py-7 sm:px-8 lg:py-8 first:sm:pl-0">
                <dt className="sr-only">{point.value}</dt>
                <dd>
                  <p className="text-lg font-bold tracking-tight text-navy-900">
                    {point.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-ink-soft">
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
