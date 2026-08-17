import { IMAGES } from "../lib/images";
import { ArrowLink, Container, Photo, Reveal, SectionHeading } from "./ui";

/* Placeholder team — swap portraits, names and bios with the real
   specialist roster (strategy §10, "People"). */
const EXPERTS = [
  {
    photo: IMAGES.expertA,
    name: "Tomasz Zieliński",
    role: "Partner — Finance Transformation",
    focus: "Close, consolidation and group reporting for listed groups.",
  },
  {
    photo: IMAGES.expertB,
    name: "Claire Moreau",
    role: "Director — Applied AI & Data",
    focus: "Controlled AI workflows, matching engines and data platforms.",
  },
  {
    photo: IMAGES.expertC,
    name: "Marek Nowak",
    role: "Director — Managed Operations",
    focus: "SLA-based run, monitoring and continuous improvement.",
  },
  {
    photo: IMAGES.expertD,
    name: "Anna Kowalska",
    role: "Senior Manager — Tax Data & Compliance",
    focus: "JPK / KSeF, e-invoicing and regulatory data flows.",
  },
];

export default function Experts() {
  return (
    <section id="experts" className="scroll-mt-24 border-t border-rule bg-white">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The people behind the processes"
              title="Finance experts. Data engineers. One team."
              lede="Every engagement is led by people who have closed books, filed statements and run production systems — not by generalists."
            />
            <ArrowLink href="#company" className="mb-2">
              Meet the team
            </ArrowLink>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTS.map((expert, i) => (
            <Reveal key={expert.name} delay={i * 90} className="h-full">
              <article className="group h-full">
                <div className="relative overflow-hidden">
                  <Photo
                    src={expert.photo}
                    alt={`Portrait of ${expert.name}`}
                    label="Portrait"
                    className="aspect-[4/5]"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.03] grayscale-[0.2]"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-500 group-hover:w-full"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {expert.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-blue-700">
                  {expert.role}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {expert.focus}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-xs italic text-ink-faint">
            Illustrative profiles — to be replaced with Calan's specialist
            roster and approved portraits.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
