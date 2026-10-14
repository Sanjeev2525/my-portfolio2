"use client";

import { useState, useMemo } from "react";
import { ProjectItem } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectShowcase({ projects, onSelectProject }: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Projects (04)" },
    { key: "Applied AI", label: "Applied AI" },
    { key: "Cloud & Infrastructure", label: "Cloud & Infrastructure" },
    { key: "Security & Auth", label: "Security & Auth" },
    { key: "Full Stack Web", label: "Full Stack Web" },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const getCinematicArtwork = (style: ProjectItem["visualStyle"], project: ProjectItem) => {
    switch (style) {
      case "emerald":
        return (
          <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-emerald-950/60 via-surface-subtle to-surface border border-emerald-500/20 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-emerald-400 z-10">
              <span className="tracking-widest uppercase">PROJECT // {project.number}</span>
              <span>VECTOR CORE</span>
            </div>
            <div className="z-10 space-y-1">
              <div className="inline-flex p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold text-emerald-200 tracking-wider uppercase truncate">
                RAG CONVERSATIONAL ENGINE
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-fg-muted truncate">
                FastAPI • Qdrant • Gemini LLM
              </div>
            </div>
            <div className="font-mono text-[9px] text-fg-muted tracking-widest uppercase z-10 border-t border-emerald-500/10 pt-1 flex items-center justify-between">
              <span>HNSW INDEX</span>
              <span>CITATIONS</span>
            </div>
          </div>
        );

      case "cyan":
        return (
          <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-cyan-950/60 via-surface-subtle to-surface border border-cyan-500/20 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-cyan-400 z-10">
              <span className="tracking-widest uppercase">PROJECT // {project.number}</span>
              <span>GITOPS RUNTIME</span>
            </div>
            <div className="z-10 space-y-1">
              <div className="inline-flex p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold text-cyan-200 tracking-wider uppercase truncate">
                GKE CONTINUOUS DELIVERY
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-fg-muted truncate">
                Docker • ArgoCD • Cloud Build
              </div>
            </div>
            <div className="font-mono text-[9px] text-fg-muted tracking-widest uppercase z-10 border-t border-cyan-500/10 pt-1 flex items-center justify-between">
              <span>DECLARATIVE</span>
              <span>ZERO DRIFT</span>
            </div>
          </div>
        );

      case "indigo":
        return (
          <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-indigo-950/60 via-surface-subtle to-surface border border-indigo-500/20 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden transition-all duration-300 group-hover:border-indigo-400/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-indigo-400 z-10">
              <span className="tracking-widest uppercase">PROJECT // {project.number}</span>
              <span>ZERO-TRUST VAULT</span>
            </div>
            <div className="z-10 space-y-1">
              <div className="inline-flex p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold text-indigo-200 tracking-wider uppercase truncate">
                LEGAL GATE & RBAC VAULT
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-fg-muted truncate">
                NDA Gates • RBAC • Signed Buffers
              </div>
            </div>
            <div className="font-mono text-[9px] text-fg-muted tracking-widest uppercase z-10 border-t border-indigo-500/10 pt-1 flex items-center justify-between">
              <span>COMPLIANT</span>
              <span>STREAMING</span>
            </div>
          </div>
        );

      case "teal":
      default:
        return (
          <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-teal-950/60 via-surface-subtle to-surface border border-teal-500/20 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden transition-all duration-300 group-hover:border-teal-400/50 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-teal-400 z-10">
              <span className="tracking-widest uppercase">PROJECT // {project.number}</span>
              <span>ENTERPRISE ERP</span>
            </div>
            <div className="z-10 space-y-1">
              <div className="inline-flex p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300">
                <Layers className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold text-teal-200 tracking-wider uppercase truncate">
                OPERATIONS ERP DASHBOARD
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-fg-muted truncate">
                Angular • Spring Boot • PostgreSQL
              </div>
            </div>
            <div className="font-mono text-[9px] text-fg-muted tracking-widest uppercase z-10 border-t border-teal-500/10 pt-1 flex items-center justify-between">
              <span>MODULAR</span>
              <span>IT OPS</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-3 h-full flex flex-col justify-between overflow-y-auto md:overflow-hidden no-scrollbar py-1">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-hairline pb-2.5 shrink-0">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const isSelected = cat.key === selectedCategory;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-fg-primary text-canvas font-semibold shadow-md"
                    : "border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        <span className="font-mono text-[11px] text-fg-muted hidden sm:inline">
          Showing {filteredProjects.length} of 04 projects • Click to inspect
        </span>
      </div>

      {/* Projects Grid: 4 columns on large screens to fit seamlessly on single screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 flex-1 min-h-0 overflow-y-auto md:overflow-hidden no-scrollbar items-stretch">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group rounded-xl border border-border-hairline bg-surface/80 backdrop-blur-md p-3.5 space-y-3 hover:border-border-medium hover:bg-surface transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              {/* Artwork banner */}
              {getCinematicArtwork(project.visualStyle, project)}

              {/* Category & Year */}
              <div className="flex items-center justify-between font-mono text-[10px] text-fg-muted">
                <span className="text-text-cyan uppercase tracking-wider font-semibold truncate">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold font-sans text-fg-primary group-hover:text-text-cyan transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-[11px] font-sans text-fg-muted leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Technologies & CTA */}
            <div className="space-y-2 pt-2 border-t border-border-hairline">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-surface-subtle border border-border-hairline text-fg-muted group-hover:text-fg-secondary transition-colors truncate max-w-[100px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-text-cyan group-hover:translate-x-1 transition-transform">
                <span className="font-semibold">Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
