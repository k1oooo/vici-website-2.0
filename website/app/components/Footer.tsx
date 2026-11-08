import Link from "next/link";
import { MapPin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, SERVICES } from "../data/site";

const COMPANY_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "/about" },
  { label: "Get in Touch", href: "#contact" },
];

const LINK = "type-body underline-offset-4 hover:underline";

export default function Footer() {
  return (
    <footer className="border-t border-paper/20 bg-surface text-on-surface">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Vici home">
              <Logo variant="light" className="h-8 w-auto" />
            </Link>
            <p className="type-body mt-6 text-paper/80">
              A technology partner for growing businesses, from custom
              software to the systems and infrastructure that run it.
            </p>
            <p className="type-body mt-6 flex items-start gap-2 text-paper/80">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0" />
              {COMPANY.address}
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="type-eyebrow text-paper/75">Services</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={LINK}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="type-eyebrow text-paper/75">Company</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="type-small mt-16 flex flex-col gap-4 border-t border-paper/20 pt-6 text-paper/80 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p>© 2026 {COMPANY.name}. All rights reserved.</p>
            <p>SSM Reg. No. {COMPANY.ssm}</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="underline-offset-4 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
