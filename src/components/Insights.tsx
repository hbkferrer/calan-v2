import { IMAGES } from "../lib/images";
import { ArrowLink, Container, Photo, Reveal, SectionHeading } from "./ui";

const INSIGHTS = [
  {
    photo: IMAGES.insightGuide,
    tag: "Guide",
    title: "Where to start automating finance",
    text: "A prioritization framework: which process to automate first, what ROI to expect and which risks to control from day one.",
    meta: "14 min read",
  },
  {
    photo: IMAGES.insightPaper,
    tag: "White paper",
    title: "Multi-entity financial reporting",
    text: "Collecting, standardizing and consolidating data across dozens of entities, ERPs and local requirements.",
    meta: "22 pages",
  },
  {
    photo: IMAGES.insightViewpoint,
    tag: "Viewpoint",
    title: "Building controlled AI workflows in finance",
    text: "Where applied AI already earns its place in production — and the governance that keeps it out of the black box.",
    meta: "9 min read",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 border-t border-rule bg-white">
      <Container className="py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="What finance leaders read before they automate."
              lede="Guides, white papers and viewpoints connected to CFO priorities — each one linked to a solution and a client case."
            />
            <ArrowLink href="#insights" className="mb-2">
              All insights
            </ArrowLink>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.title} delay={i * 100} className="h-full">
              <a href="#contact" className="group flex h-full flex-col">
                <div className="overflow-hidden">
                  <Photo
                    src={insight.photo}
                    alt=""
                    label={insight.tag}
                    className="aspect-[16/10]"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex grow flex-col border-b border-rule pb-6">
                  <p className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-green-700">
                    {insight.tag}
                    <span aria-hidden className="h-px grow bg-navy-900/15" />
                    <span className="font-medium normal-case tracking-normal text-ink-faint">
                      {insight.meta}
                    </span>
                  </p>
                  <h3 className="mt-3.5 font-display text-[1.35rem] font-semibold leading-snug text-navy-900 underline-offset-4 transition-colors group-hover:text-blue-700 group-hover:underline">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {insight.text}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
