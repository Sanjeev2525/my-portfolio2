"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Layers,
  Compass,
  FolderGit2,
  Building,
  FileText,
  Mail,
  Linkedin,
  Check,
  Moon,
  Sun,
} from "lucide-react";

export type PortfolioView = "overview" | "topology" | "skills" | "projects" | "experience";

interface QuickDockProps {
  activeView: PortfolioView;
  onSelectView: (view: PortfolioView) => void;
}

export function QuickDock({ activeView, onSelectView }: QuickDockProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    // Keyboard shortcuts (1-5 to switch views)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "1") onSelectView("overview");
      if (e.key === "2") onSelectView("topology");
      if (e.key === "3") onSelectView("skills");
      if (e.key === "4") onSelectView("projects");
      if (e.key === "5") onSelectView("experience");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSelectView]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sanjeevganesh25@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const views: { id: PortfolioView; label: string; icon: typeof Sparkles }[] = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "topology", label: "Topology", icon: Layers },
    { id: "skills", label: "Skills", icon: Compass },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "experience", label: "Experience", icon: Building },
  ];

  return (
    <footer className="w-full flex justify-center pointer-events-none z-50 shrink-0 py-1">
      <nav
        aria-label="Interactive Navigation Dock"
        className="pointer-events-auto flex items-center justify-center gap-0.5 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl border border-border-medium/80 bg-surface/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-xs font-mono max-w-[98vw]"
      >
        {/* Main View Mode Buttons */}
        {views.map((v) => {
          const isSelected = v.id === activeView;
          const Icon = v.icon;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onSelectView(v.id)}
              className={`flex items-center justify-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl transition-all duration-200 relative shrink-0 ${
                isSelected
                  ? "bg-fg-primary text-canvas font-semibold shadow-md"
                  : "text-fg-secondary hover:text-fg-primary hover:bg-surface-elevated"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-canvas" : "text-text-cyan"}`} />
              <span className="hidden sm:inline">{v.label}</span>
              {isSelected && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-text-cyan" />
              )}
            </button>
          );
        })}

        <div className="h-4 w-px bg-border-hairline mx-0.5 sm:mx-1" aria-hidden="true" />

        {/* LinkedIn Profile */}
        <a
          href="https://linkedin.com/in/sanjeev2525"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-fg-secondary hover:text-fg-primary hover:bg-surface-elevated transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
          <span className="hidden md:inline">LinkedIn</span>
        </a>

        {/* Resume PDF */}
        <a
          href="/SANJEEV_RESUME_FULLSTACK.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-fg-secondary hover:text-fg-primary hover:bg-surface-elevated transition-colors"
          title="Open Resume PDF"
        >
          <FileText className="w-3.5 h-3.5 text-text-accent" />
          <span className="hidden md:inline">Resume</span>
        </a>

        {/* Copy Email */}
        <button
          type="button"
          onClick={copyEmail}
          className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-fg-secondary hover:text-fg-primary hover:bg-surface-elevated transition-colors"
          title="Copy Email"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-status-active" />
              <span className="text-status-active font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 text-text-cyan" />
              <span className="hidden md:inline">Email</span>
            </>
          )}
        </button>

        {/* Theme Toggle */}
        {mounted && (
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-1.5 rounded-xl text-fg-secondary hover:text-fg-primary hover:bg-surface-elevated transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
            )}
          </button>
        )}
      </nav>
    </footer>
  );
}
