"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/routes", label: "Study & Work Routes" },
  { href: "/courses", label: "Courses & Pricing" },
  { href: "/stories", label: "Success Stories" },
  { href: "/partners", label: "Partners" },
  { href: "/trial-classes", label: "Trial Classes" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={40} height={40} alt="Nippon Bridge Academy logo" />
          <span className="font-semibold tracking-wide text-lg">Nippon Bridge Academy</span>
        </Link>
        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <span className="i-[tabler-menu-2]">☰</span>
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm hover:text-[var(--color-accent)] transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5">
          <ul className="px-4 py-3 grid gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-1" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}