"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Blueprint", href: "#blueprint" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-border-hairline bg-canvas/80 backdrop-blur-xl transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-border-active rounded p-1"
          >
            <div className="flex items-center font-bold tracking-wider text-fg-primary text-base sm:text-lg font-sans">
              <span>SANJEEV</span>
              <span className="mx-2 text-text-cyan font-mono font-medium">//</span>
              <span>A</span>
            </div>
            <span className="hidden sm:inline-flex items-center text-xs font-mono text-fg-muted uppercase tracking-wider pl-2 border-l border-border-hairline">
              Full Stack & Cloud
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase font-mono tracking-wider text-fg-secondary hover:text-fg-primary transition-colors py-1 hover:text-text-cyan"
              >
                {link.label}
              </a>
            ))}
            <div className="h-4 w-px bg-border-hairline" aria-hidden="true" />
            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg border border-border-hairline bg-surface text-fg-secondary hover:text-fg-primary focus-visible:ring-2 focus-visible:ring-border-active"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border-hairline bg-surface/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-fg-secondary hover:text-fg-primary py-2 border-b border-border-hairline/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
