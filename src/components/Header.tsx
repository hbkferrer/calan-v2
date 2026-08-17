import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { ArrowLink, Button, Container, GreenSquare, Logo } from "./ui";

type MenuId = "solutions" | "technology";

type MegaColumn = { title: string; links: { label: string; href: string }[] };

const SOLUTIONS_COLUMNS: MegaColumn[] = [
  {
    title: "Core finance processes",
    links: [
      { label: "Record-to-Report & Close", href: "#solutions" },
      { label: "Group Reporting & Consolidation", href: "#solutions" },
      { label: "Reconciliation & Bank Clearing", href: "#solutions" },
      { label: "Management & Statutory Reporting", href: "#solutions" },
    ],
  },
  {
    title: "Compliance operations",
    links: [
      { label: "Tax Data & E-invoicing", href: "#solutions" },
      { label: "JPK / KSeF & Local Reporting", href: "#solutions" },
      { label: "Payroll Data & Posting", href: "#solutions" },
    ],
  },
  {
    title: "Transformation needs",
    links: [
      { label: "Multi-entity Standardization", href: "#solutions" },
      { label: "Finance Process Assessment", href: "#how-calan-works" },
      { label: "Managed Finance Operations", href: "#how-calan-works" },
    ],
  },
];

const TECHNOLOGY_COLUMNS: MegaColumn[] = [
  {
    title: "Data & Cloud",
    links: [
      { label: "Financial Data Platforms", href: "#technology" },
      { label: "Data Integration & APIs", href: "#technology" },
      { label: "Cloud Architecture", href: "#technology" },
    ],
  },
  {
    title: "Automation & AI",
    links: [
      { label: "Workflow Automation", href: "#technology" },
      { label: "Applied AI for Finance", href: "#technology" },
      { label: "Process Intelligence & Monitoring", href: "#technology" },
    ],
  },
  {
    title: "Enterprise fit",
    links: [
      { label: "ERP & SaaS Integrations", href: "#technology" },
      { label: "Security, Controls & Governance", href: "#trust" },
      { label: "How We Build", href: "#how-calan-works" },
    ],
  },
];

const SIMPLE_LINKS = [
  { label: "Client Results", href: "#client-results" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
];

function MegaColumns({ columns }: { columns: MegaColumn[] }) {
  return (
    <>
      {columns.map((col) => (
        <div key={col.title}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
            {col.title}
          </p>
          <ul className="space-y-0.5">
            {col.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded px-2 py-1.5 -mx-2 text-[15px] font-medium text-navy-800 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function SolutionsPanel() {
  return (
    <div className="grid grid-cols-4 gap-10 py-9">
      <MegaColumns columns={SOLUTIONS_COLUMNS} />
      <div className="rounded-xl bg-mist p-5">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-green-700">
          <GreenSquare />
          Client result
        </p>
        <p className="mt-3 text-2xl font-bold tracking-tight text-navy-900">
          12 → 3 days
        </p>
        <p className="mt-1 text-sm leading-snug text-ink-soft">
          statutory reporting cycle for a 42-entity European group.
        </p>
        <div className="mt-4 border-t border-cloud pt-4">
          <ArrowLink href="#insights">Where to start automating finance</ArrowLink>
        </div>
        <Button href="#contact" className="mt-4 w-full !py-2.5" withArrow>
          Discuss your process
        </Button>
      </div>
    </div>
  );
}

function TechnologyPanel() {
  return (
    <div className="grid grid-cols-4 gap-10 py-9">
      <MegaColumns columns={TECHNOLOGY_COLUMNS} />
      <div className="rounded-xl bg-navy-900 p-5 text-white">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-green-400">
          <GreenSquare />
          How we build
        </p>
        <p className="mt-3 text-sm leading-relaxed text-navy-100/85">
          Modular architecture, human-in-the-loop controls and a full audit
          trail — technology in service of the process, never the other way
          around.
        </p>
        <ArrowLink href="#technology" dark className="mt-4">
          See the architecture
        </ArrowLink>
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MenuId | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  const megaItems: { id: MenuId; label: string }[] = [
    { id: "solutions", label: "Solutions" },
    { id: "technology", label: "Technology" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {megaItems.map((item) => (
              <li key={item.id} onMouseEnter={() => setOpenMenu(item.id)}>
                <button
                  type="button"
                  aria-expanded={openMenu === item.id}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu(openMenu === item.id ? null : item.id)
                  }
                  className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                    openMenu === item.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-navy-800 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>
            ))}
            {SIMPLE_LINKS.map((link) => (
              <li key={link.label} onMouseEnter={() => setOpenMenu(null)}>
                <a
                  href={link.href}
                  className="inline-flex rounded-md px-3.5 py-2 text-sm font-semibold text-navy-800 transition-colors hover:text-blue-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className="flex items-center gap-1 text-xs font-semibold text-ink-faint"
            title="Polish version planned at launch"
          >
            <Globe aria-hidden className="mr-1 h-3.5 w-3.5" />
            <button type="button" className="rounded px-1.5 py-1 text-navy-900">
              EN
            </button>
            <span aria-hidden>/</span>
            <button
              type="button"
              className="rounded px-1.5 py-1 transition-colors hover:text-navy-800"
            >
              PL
            </button>
          </div>
          <Button href="#contact">Talk to an expert</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-navy-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Desktop mega-menu panel */}
      {openMenu && (
        <div className="absolute inset-x-0 top-full hidden border-b border-navy-100 bg-white shadow-panel lg:block">
          <Container>
            {openMenu === "solutions" ? <SolutionsPanel /> : <TechnologyPanel />}
          </Container>
        </div>
      )}

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden">
          <Container className="py-4">
            {megaItems.map((item) => {
              const columns =
                item.id === "solutions" ? SOLUTIONS_COLUMNS : TECHNOLOGY_COLUMNS;
              const open = mobileAccordion === item.id;
              return (
                <div key={item.id} className="border-b border-navy-50">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileAccordion(open ? null : item.id)}
                    className="flex w-full items-center justify-between py-3.5 text-[15px] font-semibold text-navy-900"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="space-y-5 pb-5">
                      {columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
                            {col.title}
                          </p>
                          <ul>
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <a
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1.5 text-[15px] text-navy-800"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {SIMPLE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-navy-50 py-3.5 text-[15px] font-semibold text-navy-900"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-1 text-xs font-semibold text-ink-faint">
                <Globe aria-hidden className="mr-1 h-3.5 w-3.5" />
                <span className="text-navy-900">EN</span>
                <span aria-hidden>/</span>
                <span>PL</span>
              </div>
              <Button href="#contact" className="!py-2.5">
                Talk to an expert
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
