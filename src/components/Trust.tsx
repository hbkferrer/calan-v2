import {
  BookOpen,
  Bot,
  LifeBuoy,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Access & security",
    text: "Role-based access, environment separation and encrypted data flows — reviewed with your IT and security teams.",
  },
  {
    icon: ScrollText,
    title: "Audit trail & logs",
    text: "Every run, rule change and approval is logged and traceable end to end, ready for internal and external audit.",
  },
  {
    icon: UserCheck,
    title: "Human validation",
    text: "Critical steps keep a human in the loop, with explicit responsibilities on both the Calan and client side.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    text: "Processes, rules and interfaces are documented and kept current — the workflow never lives in one person's head.",
  },
  {
    icon: LifeBuoy,
    title: "Business continuity",
    text: "Monitored runs, backups and recovery procedures sized for deadlines that cannot be missed.",
  },
  {
    icon: Bot,
    title: "AI governance",
    text: "AI is applied with a defined scope, tested models and human sign-off — never as a black box in a statutory process.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="scroll-mt-24 border-t border-cloud bg-mist">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Trust & control"
            title="Automation your auditors will approve of."
            lede="Every workflow ships with the control layer a regulated, listed environment expects — because speed without control is not an outcome."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80} className="h-full">
              <div className="h-full rounded-xl border border-cloud bg-white p-6 shadow-card">
                <span className="inline-flex rounded-lg bg-green-100 p-2.5 text-green-700">
                  <item.icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
