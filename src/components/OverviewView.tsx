"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building,
  MapPin,
  Sparkles,
  ArrowRight,
  Layers,
  FolderGit2,
  Compass,
  Mail,
  Linkedin,
  Check,
  Terminal,
  ShieldCheck,
  Cloud,
  Cpu,
} from "lucide-react";

interface OverviewViewProps {
  onSwitchView: (view: "overview" | "topology" | "skills" | "projects" | "experience") => void;
}

export function OverviewView({ onSwitchView }: OverviewViewProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto md:overflow-hidden no-scrollbar py-1 space-y-4 sm:space-y-5">
      {/* Top Banner: Status & Verified Location */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] sm:text-xs text-fg-muted pb-2.5 border-b border-border-hairline shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-status-active animate-pulse" aria-hidden="true" />
          <span className="text-text-cyan font-semibold tracking-wider uppercase">
            SANJEEV A • SYSTEMS DEVELOPER
          </span>
          <span className="text-border-medium hidden sm:inline">•</span>
          <span className="hidden sm:inline text-fg-secondary">
            FULL STACK | CLOUD & DEVOPS
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-fg-muted">
          <MapPin className="w-3.5 h-3.5 text-text-accent" />
          <span>{PORTFOLIO_DATA.personal.location}</span>
        </div>
      </div>

      {/* Main Grid: Identity & Systems Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center flex-1 min-h-0">
        {/* Left Column: Personal Statement & Role */}
        <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-border-hairline bg-surface/60 text-[10px] sm:text-xs font-mono text-text-cyan uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Creative Systems Studio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-sans cinematic-gradient-text">
              Sanjeev A
            </h1>

            <p className="text-base sm:text-xl font-serif text-fg-secondary italic font-normal">
              Full Stack Developer & Cloud Systems Engineer
            </p>
          </div>

          <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-sans max-w-xl">
            I design and operate software across the entire journey: from responsive, accessible interfaces down to distributed APIs, zero-trust security perimeters, and automated cloud deployments on Kubernetes.
          </p>

          {/* Current Production Role Card */}
          <div className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface/80 backdrop-blur-sm flex items-start gap-3 max-w-xl">
            <div className="p-2 rounded-lg border border-border-hairline bg-text-cyan/10 text-text-cyan shrink-0 mt-0.5">
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="space-y-0.5 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-fg-muted uppercase font-mono text-[9px] sm:text-[10px] tracking-wider">Current Production Role</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-status-active font-semibold">● ACTIVE REMOTE</span>
              </div>
              <div className="text-fg-primary font-bold text-sm">N51 Invest PTE LTD</div>
              <div className="text-[11px] font-mono text-fg-muted">
                Full Stack Developer | Cloud & DevOps • Singapore (Remote)
              </div>
            </div>
          </div>

          {/* Action Jump Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onSwitchView("topology")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-fg-primary text-canvas font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>System Topology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onSwitchView("projects")}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-text-cyan" />
              <span>Projects (04)</span>
            </button>

            <button
              type="button"
              onClick={() => onSwitchView("skills")}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-text-accent" />
              <span>Skills</span>
            </button>

            <a
              href="https://linkedin.com/in/sanjeev2525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary font-mono text-xs uppercase tracking-wider transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary font-mono text-xs uppercase tracking-wider transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-status-active" />
                  <span className="text-status-active">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-text-cyan" />
                  <span>Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: 4 Core Architectural Vector Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs">
          <div
            onClick={() => onSwitchView("topology")}
            className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface/70 hover:border-text-cyan/40 hover:bg-surface transition-all cursor-pointer space-y-1.5 group"
          >
            <div className="flex items-center justify-between text-text-cyan">
              <Cloud className="w-4 h-4" />
              <span className="text-[9px] text-fg-muted uppercase">GKE & Docker</span>
            </div>
            <div className="font-bold text-fg-primary font-sans text-xs sm:text-sm group-hover:text-text-cyan transition-colors">
              Cloud Infrastructure
            </div>
            <p className="text-[10px] sm:text-[11px] text-fg-muted leading-relaxed font-sans line-clamp-2">
              Google Kubernetes Engine clusters, containerization & ArgoCD GitOps delivery.
            </p>
          </div>

          <div
            onClick={() => onSwitchView("projects")}
            className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface/70 hover:border-emerald-400/40 hover:bg-surface transition-all cursor-pointer space-y-1.5 group"
          >
            <div className="flex items-center justify-between text-emerald-400">
              <Cpu className="w-4 h-4" />
              <span className="text-[9px] text-fg-muted uppercase">Qdrant & Gemini</span>
            </div>
            <div className="font-bold text-fg-primary font-sans text-xs sm:text-sm group-hover:text-emerald-300 transition-colors">
              Applied Generative AI
            </div>
            <p className="text-[10px] sm:text-[11px] text-fg-muted leading-relaxed font-sans line-clamp-2">
              RAG knowledge search engine with dense vector embeddings & citation grounding.
            </p>
          </div>

          <div
            onClick={() => onSwitchView("topology")}
            className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface/70 hover:border-indigo-400/40 hover:bg-surface transition-all cursor-pointer space-y-1.5 group"
          >
            <div className="flex items-center justify-between text-indigo-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[9px] text-fg-muted uppercase">Zero-Trust</span>
            </div>
            <div className="font-bold text-fg-primary font-sans text-xs sm:text-sm group-hover:text-indigo-300 transition-colors">
              Perimeter Security
            </div>
            <p className="text-[10px] sm:text-[11px] text-fg-muted leading-relaxed font-sans line-clamp-2">
              Server-side HTTP-only session cookies, fine-grained RBAC & OIDC federation.
            </p>
          </div>

          <div
            onClick={() => onSwitchView("skills")}
            className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface/70 hover:border-orange-400/40 hover:bg-surface transition-all cursor-pointer space-y-1.5 group"
          >
            <div className="flex items-center justify-between text-text-accent">
              <Terminal className="w-4 h-4" />
              <span className="text-[9px] text-fg-muted uppercase">Full Stack</span>
            </div>
            <div className="font-bold text-fg-primary font-sans text-xs sm:text-sm group-hover:text-orange-300 transition-colors">
              Distributed Backend
            </div>
            <p className="text-[10px] sm:text-[11px] text-fg-muted leading-relaxed font-sans line-clamp-2">
              FastAPI, NestJS, Spring Boot, RabbitMQ message queues & Redis caching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
