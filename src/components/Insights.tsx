import { ArrowUpRight } from "lucide-react";
import { ArrowLink, Container, Reveal, SectionHeading } from "./ui";

const INSIGHTS = [
  {
    tag: "Guide",
    tagClass: "bg-blue-50 text-blue-700",
    title: "Where to start automating finance",
    text: "A prioritization framework: which process to automate first, what ROI to expect and which risks to control from day one.",
    meta: "14 min read",
  },
  {
    tag: "White paper",
    tagClass: "bg-green-100 text-green-800",
    title: "Multi-entity financial reporting",
    text: "Collecting, standardizing and consolidating data across dozens of entities, ERPs and local requirements.",
    meta: "22 pages",
  },
  {
    tag: "Viewpoint",
    tagClass: "bg-navy-50 text-navy-700",
    title: "Building controlled AI workflows in finance",
    text: "Where applied AI already earns its place in production — and the governance that keeps it out of the black box.",
    meta: "9 min read",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="What finance leaders read before they automate."
              lede="Guides, white papers and viewpoints connected to CFO priorities — each one linked to a solution and a client case."
            />
            <ArrowLink href="#insights" className="mb-1.5">
              All insights
            </ArrowLink>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.title} delay={i * 90} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-cloud bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${insight.tagClass}`}
                  >
                    {insight.tag}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 text-navy-200 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-blue-700">
                  {insight.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {insight.text}
                </p>
                <p className="mt-auto pt-5 text-xs font-medium text-ink-faint">
                  {insight.meta}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
