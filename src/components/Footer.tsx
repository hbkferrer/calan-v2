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
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/70">
              Calan designs, automates and operates critical finance processes
              for complex European groups — since 1993.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#company"
                aria-label="Calan on LinkedIn"
                className="rounded-md border border-navy-700 p-2 text-navy-100/80 transition-colors hover:border-blue-400 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#company"
                aria-label="Calan on YouTube"
                className="rounded-md border border-navy-700 p-2 text-navy-100/80 transition-colors hover:border-blue-400 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <span className="ml-2 text-xs font-semibold text-navy-100/60">
                EN <span aria-hidden>/</span> PL
              </span>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-navy-300">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href={group.href}
                        className="text-[13px] leading-snug text-navy-100/75 transition-colors hover:text-white"
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-navy-800 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-100/50">
            © 2026 Calan · All rights reserved
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {UTILITY_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#company"
                  className="text-xs text-navy-100/60 transition-colors hover:text-white"
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
