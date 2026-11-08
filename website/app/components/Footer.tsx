import Link from "next/link";
import { MapPin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, SERVICES } from "../data/site";

const COMPANY_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "/about" },
  { label: "Get in Touch", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-on-surface/20 bg-surface text-on-surface">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Vici home">
              <Logo variant="light" className="h-8 w-auto" />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed opacity-80">
              A technology partner for growing businesses, from custom
              software to the systems and infrastructure that run it.
            </p>
            <p className="mt-6 flex items-start gap-2 text-[15px] opacity-80">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
              {COMPANY.address}
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-bold uppercase tracking-wider opacity-60">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-[15px]">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-sm font-bold uppercase tracking-wider opacity-60">
              Company
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-[15px]">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-on-surface/20 pt-6 text-sm opacity-80 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p>© 2026 {COMPANY.name}. All rights reserved.</p>
            <p>SSM Reg. No. {COMPANY.ssm}</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
