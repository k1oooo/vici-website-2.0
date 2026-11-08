"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

const CTA = { label: "Contact us", href: "#contact" };

function CtaButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href={CTA.href}
      onClick={onClick}
      className="group inline-flex items-center gap-2.5 rounded-full bg-off-white px-5 py-2.5 text-[15px] font-bold text-deep-blue transition-colors hover:bg-accent"
    >
      {CTA.label}
      <span
        aria-hidden
        className="size-2 bg-burnt-orange transition-colors group-hover:bg-deep-blue"
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-surface text-on-surface">
      <div className="mx-auto grid h-20 w-full max-w-[1400px] grid-cols-[1fr_auto] items-center px-6 md:grid-cols-[1fr_auto_1fr] md:px-12">
        <Link href="/" aria-label="Vici home" onClick={close} className="justify-self-start">
          <Logo variant="light" className="h-7 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-bold transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <CtaButton />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end rounded-full p-2 md:hidden"
        >
          <span className="flex h-3.5 w-6 flex-col justify-between" aria-hidden>
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-on-surface/15 px-6 pb-8 pt-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-on-surface/15 py-4 text-xl font-bold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <CtaButton onClick={close} />
          </div>
        </div>
      )}
    </header>
  );
}
