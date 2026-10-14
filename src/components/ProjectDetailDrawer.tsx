"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/portfolioData";
import { X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ProjectDetailDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailDrawer({ project, onClose }: ProjectDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl h-full bg-surface border-l border-border-hairline p-6 sm:p-10 overflow-y-auto space-y-8 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border-hairline pb-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-accent">
              <span>PROJECT {project.number}</span>
              <span className="text-fg-muted">/</span>
              <span className="text-fg-secondary">{project.year}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project view"
              className="p-1.5 rounded border border-border-hairline bg-surface-subtle hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-fg-muted">
              {project.category}
            </span>
            <h2 id="drawer-title" className="text-2xl sm:text-3xl font-bold font-serif text-fg-primary tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-fg-secondary leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Story Narrative */}
          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Challenge</span>
              </h3>
              <p className="text-sm text-fg-secondary leading-relaxed font-sans">
                {project.narrative.context}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5" />
                <span>My Approach & Decisions</span>
              </h3>
              <p className="text-sm text-fg-secondary leading-relaxed font-sans">
                {project.narrative.approach}
              </p>
            </div>

            <div className="p-4 rounded border border-border-hairline bg-surface-subtle space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-status-active flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Key Result</span>
              </h3>
              <p className="text-sm text-fg-primary font-medium leading-relaxed font-sans">
                {project.narrative.highlight}
              </p>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-fg-muted">
              Core Technologies
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-surface-subtle border border-border-hairline text-fg-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-6 border-t border-border-hairline flex items-center justify-between font-mono text-xs">
          <span className="text-fg-muted">Role: {project.role}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border border-border-hairline bg-surface-subtle hover:bg-surface-elevated text-fg-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
}
