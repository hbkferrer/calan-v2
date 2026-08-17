import { Linkedin, Youtube } from "lucide-react";
import { Container, Logo } from "./ui";

const FOOTER_GROUPS = [
  {
    title: "Solutions",
    links: [
      "Record-to-Report & Close",
      "Group Reporting & Consolidation",
      "Reconciliation & Bank Clearing",
      "Management & Statutory Reporting",
      "Tax Data & E-invoicing",
      "Payroll Data & Posting",
    ],
    href: "#solutions",
  },
  {
    title: "Technology",
    links: [
      "Financial Data & Cloud",
      "Automation & Applied AI",
      "ERP & SaaS Integrations",
      "Security, Controls & Governance",
    ],
    href: "#technology",
  },
  {
    title: "Proof & knowledge",
    links: ["Client Results", "Insights", "White Papers", "Demos"],
    href: "#client-results",
  },
  {
    title: "Company",
    links: ["About Calan", "European Delivery", "Careers", "Talk to an Expert"],
    href: "#contact",
  },
];

const UTILITY_LINKS = [
  "Client login",
  "Privacy",
  "Cookies",
  "Legal",
  "Accessibility",
];

export default function Footer() {
  return (
    <footer id="company" className="scroll-mt-24 bg-navy-950 text-white">
      <Container className="py-20">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/65">
              Calan designs, automates and operates critical finance processes
              for complex European groups — since 1993.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#company"
                aria-label="Calan on LinkedIn"
                className="border border-white/25 p-2.5 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#company"
                aria-label="Calan on YouTube"
                className="border border-white/25 p-2.5 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <span className="ml-2 text-xs font-semibold text-white/50">
                EN <span aria-hidden>/</span> PL
              </span>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
                  {group.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href={group.href}
                        className="text-[13px] font-light leading-snug text-white/75 transition-colors hover:text-white hover:underline hover:underline-offset-4"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs font-light text-white/45">
            © 2026 Calan · All rights reserved
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {UTILITY_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#company"
                  className="text-xs font-light text-white/55 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
