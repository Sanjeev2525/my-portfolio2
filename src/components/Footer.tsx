"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="border-t border-border-hairline bg-surface/30 mt-32 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-border-hairline">
          {/* Main Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-2 h-2 rounded-full bg-status-active animate-pulse" aria-hidden="true" />
              Available for Opportunities & Conversations
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-fg-primary tracking-tight">
              Let’s create something thoughtful together.
            </h2>
            <p className="text-sm text-fg-secondary max-w-lg leading-relaxed font-sans">
              I’m always open to discussing new engineering roles, creative technical collaborations, or product ideas across full-stack web, cloud, and AI.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold rounded bg-fg-primary text-canvas hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Get in Touch</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-status-active" aria-hidden="true" />
                    <span className="text-status-active font-medium">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3 font-mono text-xs">
              <span className="text-fg-muted uppercase tracking-wider">Connect & Profiles</span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary group transition-colors"
                  >
                    <span>GitHub: /Sanjeev2525</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-fg-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary group transition-colors"
                  >
                    <span>LinkedIn: /in/sanjeev2525</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-fg-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href="/SANJEEV_RESUME_FULLSTACK.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary group transition-colors"
                  >
                    <span>Download Resume (PDF)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-fg-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="font-mono text-xs text-fg-muted space-y-1">
              <div>Based in Erode, Tamil Nadu, India</div>
              <div>Working remotely for N51 Invest PTE LTD, Singapore</div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-fg-muted">
          <div>
            © {new Date().getFullYear()} Sanjeev A. Designed with personal craft & engineering depth.
          </div>
          <div>
            Built with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
