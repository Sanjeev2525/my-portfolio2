"use client";

import { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Search,
  Cloud,
  Code2,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

export function SkillSpectrumInfographic() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "all", label: "All Disciplines", icon: Layers },
    { key: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { key: "languages", label: "Languages", icon: Terminal },
    { key: "frontend", label: "Frontend", icon: Code2 },
    { key: "backend", label: "Backend", icon: Layers },
    { key: "data_ai", label: "Data & AI", icon: Cpu },
    { key: "security", label: "Security & Auth", icon: Shield },
  ];

  // Flatten and filter skills
  const filteredCategories = useMemo(() => {
    return PORTFOLIO_DATA.skillsCategories
      .filter((cat) => {
        if (selectedCategory === "all") return true;
        return cat.categoryKey === selectedCategory;
      })
      .map((cat) => {
        const matchingSkills = cat.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.level.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const totalMatchingSkills = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <div className="rounded-2xl border border-border-hairline bg-surface/80 backdrop-blur-xl p-4 sm:p-5 space-y-3 shadow-2xl h-full flex flex-col justify-between overflow-y-auto md:overflow-hidden no-scrollbar">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-border-hairline pb-2.5 shrink-0">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-accent uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Competency Radar</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold font-sans text-fg-primary tracking-tight">
            Verified Technical Disciplines
          </h3>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-fg-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Docker, RAG, React)..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-border-hairline bg-surface-subtle text-[11px] font-mono text-fg-primary placeholder:text-fg-muted focus:outline-none focus:ring-1 focus:ring-text-cyan transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-fg-muted hover:text-fg-primary"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills & Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const isSelected = cat.key === selectedCategory;
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-fg-primary text-canvas font-semibold shadow-md"
                    : "border border-border-hairline bg-surface hover:bg-surface-elevated text-fg-secondary hover:text-fg-primary"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-[10px] font-mono text-fg-muted hidden sm:inline">
          <strong className="text-fg-primary">{totalMatchingSkills}</strong> skills verified
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0 overflow-y-auto no-scrollbar pr-0.5">
        {filteredCategories.map((category) => (
          <div
            key={category.categoryKey}
            className="rounded-xl border border-border-hairline bg-surface-subtle/80 p-3 space-y-2.5 hover:border-border-medium transition-all"
          >
            {/* Category Header */}
            <div className="border-b border-border-hairline pb-1.5 flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-fg-primary text-[11px]">{category.title}</span>
              <span className="text-[10px] text-text-cyan">{category.skills.length} tools</span>
            </div>

            {/* Skills List */}
            <div className="space-y-1.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2 rounded-lg border border-border-hairline bg-surface/90 hover:bg-surface transition-colors space-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-[11px] text-fg-primary">
                      {skill.name}
                    </span>
                    <span
                      className={`font-mono text-[8px] uppercase px-1.5 py-0.2 rounded font-semibold ${
                        skill.level === "Primary"
                          ? "bg-cyan-500/10 text-text-cyan border border-cyan-500/30"
                          : skill.level === "Advanced"
                          ? "bg-orange-500/10 text-text-accent border border-orange-500/30"
                          : "bg-surface-elevated text-fg-muted border border-border-hairline"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-fg-muted leading-tight truncate">
                    {skill.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
