"use client";

import { useState, useEffect } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { QuickDock, PortfolioView } from "@/components/QuickDock";
import { OverviewView } from "@/components/OverviewView";
import { ArchitectureInfographic } from "@/components/ArchitectureInfographic";
import { SkillSpectrumInfographic } from "@/components/SkillSpectrumInfographic";
import { CareerRoadmapInfographic } from "@/components/CareerRoadmapInfographic";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ProjectDetailDrawer } from "@/components/ProjectDetailDrawer";
import {
  Sparkles,
  Layers,
  Compass,
  FolderGit2,
  Building,
  MapPin,
  Clock,
  ArrowUpRight,
  Mail,
  Linkedin,
} from "lucide-react";

export default function Home() {
  const [activeView, setActiveView] = useState<PortfolioView>("overview");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getViewTitle = () => {
    switch (activeView) {
      case "topology":
        return "System Architecture Topology";
      case "skills":
        return "Technical Competencies Radar";
      case "projects":
        return "Selected Engineering Projects";
      case "experience":
        return "Production Career Milestones";
      case "overview":
      default:
        return "Engineering Studio Console";
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between p-2.5 sm:p-4 lg:p-5 relative bg-canvas text-fg-secondary">
      {/* Ambient background glow accents */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] bg-orange-500/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* =========================================================================
          TOP AMBIENT STATUS HUD STRIP (REPLACES TRADITIONAL WEBSITE HEADER)
      ========================================================================= */}
      <header className="w-full flex items-center justify-between gap-3 font-mono text-xs border-b border-border-hairline/80 pb-2.5 z-20 shrink-0">
        {/* Left: Brand Monogram & Live Status */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveView("overview")}
            className="flex items-center font-bold tracking-wider text-fg-primary text-sm sm:text-base font-sans hover:opacity-80 transition-opacity"
          >
            <span>SANJEEV</span>
            <span className="mx-1.5 text-text-cyan font-mono font-medium">//</span>
            <span>A</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-border-hairline text-fg-muted text-[11px]">
            <span className="w-2 h-2 rounded-full bg-status-active animate-pulse" aria-hidden="true" />
            <span className="text-status-active font-semibold">ONLINE</span>
            <span>•</span>
            <span>REMOTE @ SINGAPORE</span>
          </div>
        </div>

        {/* Center: Current Active View Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-border-hairline bg-surface/50 text-[11px] text-text-cyan uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-text-cyan" />
          <span>VIEW: {getViewTitle()}</span>
        </div>

        {/* Right: Telemetry, LinkedIn & Direct Contact */}
        <div className="flex items-center gap-2 sm:gap-3 text-fg-muted text-xs">
          {timeStr && (
            <div className="hidden lg:flex items-center gap-1.5 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5 text-text-accent" />
              <span>{timeStr}</span>
            </div>
          )}

          <a
            href="https://linkedin.com/in/sanjeev2525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary transition-colors text-[11px]"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary transition-colors text-[11px]"
          >
            <Mail className="w-3 h-3 text-text-cyan" />
            <span className="hidden sm:inline">Get in Touch</span>
          </a>
        </div>
      </header>

      {/* =========================================================================
          CENTER CANVAS STAGE (ACTIVE VIEWPORT CONTAINER)
      ========================================================================= */}
      <main className="flex-1 overflow-hidden my-3 sm:my-4 flex flex-col justify-center relative z-10">
        {activeView === "overview" && (
          <OverviewView onSwitchView={(view) => setActiveView(view)} />
        )}

        {activeView === "topology" && <ArchitectureInfographic />}

        {activeView === "skills" && <SkillSpectrumInfographic />}

        {activeView === "projects" && (
          <ProjectShowcase
            projects={PORTFOLIO_DATA.projects}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {activeView === "experience" && <CareerRoadmapInfographic />}
      </main>

      {/* =========================================================================
          BOTTOM DOCK (PRIMARY VIEW SWITCHER & UTILITIES)
      ========================================================================= */}
      <QuickDock
        activeView={activeView}
        onSelectView={(view) => setActiveView(view)}
      />

      {/* Project Detail Slide-Over Modal / Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
