"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "/about" },
];

function CtaButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button href="#contact" onClick={onClick} variant="primary" tone="on-dark">
      Get in Touch
      <span
        aria-hidden
        className="size-2 bg-burnt-orange transition-colors group-hover:bg-ink"
      />
    </Button>
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
              className="type-label underline-offset-8 hover:underline"
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
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-paper/20 px-6 pb-8 pt-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="type-h3 border-b border-paper/20 py-4"
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
