import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { IMAGES } from "../lib/images";
import { ArrowLink, Button, Container, GreenSquare, Logo, Photo } from "./ui";

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

const TOPBAR_LINKS = ["About Calan", "European Delivery", "Careers", "Newsroom"];

function MegaColumns({ columns }: { columns: MegaColumn[] }) {
  return (
    <>
      {columns.map((col) => (
        <div key={col.title} className="border-l border-rule pl-6 first:border-l-0 first:pl-0">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
            {col.title}
          </p>
          <ul className="space-y-3">
            {col.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[15px] font-medium text-navy-800 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4"
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
    <div className="grid grid-cols-[1fr_1fr_1fr_1.1fr] gap-8 py-10">
      <MegaColumns columns={SOLUTIONS_COLUMNS} />
      <div className="border-l border-rule pl-8">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-green-700">
          <GreenSquare />
          Client result
        </p>
        <p className="mt-4 font-display text-3xl font-semibold text-navy-900">
          12 → 3 days
        </p>
        <p className="mt-1.5 text-sm leading-snug text-ink-soft">
          statutory reporting cycle for a 42-entity European group.
        </p>
        <div className="mt-5 space-y-3 border-t border-rule pt-5">
          <ArrowLink href="#insights">Where to start automating finance</ArrowLink>
          <ArrowLink href="#contact">Discuss your process</ArrowLink>
        </div>
      </div>
    </div>
  );
}

function TechnologyPanel() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1.1fr] gap-8 py-10">
      <MegaColumns columns={TECHNOLOGY_COLUMNS} />
      <a href="#technology" className="group relative block overflow-hidden bg-navy-950">
        <Photo
          src={IMAGES.showreel}
          alt="Calan working session"
          label="How we build"
          showLabel={false}
          className="absolute inset-0"
          imgClassName="opacity-50 transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="relative flex h-full min-h-[210px] flex-col justify-end p-6">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-green-400">
            <GreenSquare />
            How we build
          </p>
          <p className="mt-2 font-display text-xl font-semibold leading-snug text-white">
            Architecture, controls and auditability — in service of the
            process.
          </p>
        </div>
      </a>
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
      className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(16,44,75,0.12)]"
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Utility bar */}
      <div className="hidden bg-navy-950 lg:block">
        <Container className="flex h-9 items-center justify-end gap-6">
          {TOPBAR_LINKS.map((link) => (
            <a
              key={link}
              href="#company"
              className="text-[11.5px] font-medium text-white/65 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
          <span aria-hidden className="h-3.5 w-px bg-white/25" />
          <button
            type="button"
            className="flex items-center gap-1.5 text-[11.5px] font-medium text-white/65 transition-colors hover:text-white"
            title="Polish version planned at launch"
          >
            <Globe aria-hidden className="h-3 w-3" />
            EN <span className="text-white/40">/ PL</span>
          </button>
        </Container>
      </div>

      {/* Main bar */}
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {megaItems.map((item) => (
              <li key={item.id} onMouseEnter={() => setOpenMenu(item.id)}>
                <button
                  type="button"
                  aria-expanded={openMenu === item.id}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu(openMenu === item.id ? null : item.id)
                  }
                  className={`inline-flex items-center gap-1.5 border-b-2 px-3 py-[26px] text-[14.5px] font-semibold transition-colors ${
                    openMenu === item.id
                      ? "border-green-500 text-navy-950"
                      : "border-transparent text-navy-800 hover:text-blue-700"
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
                  className="inline-flex border-b-2 border-transparent px-3 py-[26px] text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-blue-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-navy-800 transition-colors hover:text-blue-700"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <Button href="#contact" className="!py-3">
            Talk to an expert
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 text-navy-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Desktop mega-menu panel */}
      {openMenu && (
        <div className="absolute inset-x-0 top-full hidden border-t border-rule bg-white shadow-panel lg:block">
          <Container>
            {openMenu === "solutions" ? <SolutionsPanel /> : <TechnologyPanel />}
          </Container>
        </div>
      )}

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-rule bg-white lg:hidden">
          <Container className="py-4">
            {megaItems.map((item) => {
              const columns =
                item.id === "solutions" ? SOLUTIONS_COLUMNS : TECHNOLOGY_COLUMNS;
              const open = mobileAccordion === item.id;
              return (
                <div key={item.id} className="border-b border-rule">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileAccordion(open ? null : item.id)}
                    className="flex w-full items-center justify-between py-4 text-[15px] font-semibold text-navy-900"
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
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-faint">
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
                className="block border-b border-rule py-4 text-[15px] font-semibold text-navy-900"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between py-5">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-faint">
                <Globe aria-hidden className="h-3.5 w-3.5" />
                EN <span aria-hidden>/</span> PL
              </span>
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
