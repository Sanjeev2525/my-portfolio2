"use client";

import { useState } from "react";
import {
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function CareerRoadmapInfographic() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const milestones = [
    {
      title: "Full Stack Developer | Cloud & DevOps",
      organization: "N51 Invest PTE LTD",
      location: "Singapore (Remote)",
      period: "Dec 2024 – Present",
      status: "Active Production Role",
      badge: "CURRENT",
      summary: "Orchestrating cloud infrastructure deployments, application security modernization, and full-stack feature delivery across distributed systems.",
      technologies: ["Google Cloud (GKE)", "Kubernetes", "Docker", "ArgoCD", "FastAPI", "Qdrant", "Gemini", "Next.js", "NestJS", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
      highlights: [
        "Set up production infrastructure on Google Kubernetes Engine (GKE), moved backend workloads to Docker, and introduced GitOps-based CI/CD with ArgoCD.",
        "Built a RAG-based chat platform with FastAPI, Qdrant, and Gemini that lets customers query services with grounded citations.",
        "Built a multi-layer access-control system for a secure Dataroom handling sensitive documents, combining NDA checks, invite verification, and RBAC.",
        "Built an internal ERP with Angular and Spring Boot to simplify IT operations and centralize company tools.",
        "Modernized authentication with Next.js BFF and server-side HTTP-only cookies, auditing RBAC boundaries across microservices and API gateways.",
      ],
    },
    {
      title: "Full Stack Developer",
      organization: "Laabhum Social",
      location: "Chennai, Tamil Nadu",
      period: "May 2024 – Nov 2024",
      status: "Completed",
      badge: "STARTUP TECH",
      summary: "Engineered core user preference modules and represented the technology team at Tamil Nadu's premier startup summit.",
      technologies: ["React", "JavaScript", "REST APIs", "Data Management"],
      highlights: [
        "Worked on the Profile and Settings modules, handling user preferences and data management.",
        "Led Laabhum's stall at CODISSIA (Tamil Nadu Startup Thiruvizha 2024): set up the booth, ran product demos, and engaged entrepreneurs and stakeholders.",
      ],
    },
    {
      title: "Full Stack Developer",
      organization: "Gamepay",
      location: "Singapore (Remote)",
      period: "Jun 2023 – Apr 2024",
      status: "Completed",
      badge: "AGILE STACK",
      summary: "Engineered web features and diagnosed cross-stack issues in an agile distributed engineering environment.",
      technologies: ["JavaScript", "React", "Node.js", "Full Stack Development"],
      highlights: [
        "Built features and fixed bugs across the stack using the team's existing frameworks.",
        "Helped troubleshoot issues in a structured development process across distributed teams.",
      ],
    },
  ];

  const active = milestones[selectedMilestone];

  return (
    <div className="h-full flex flex-col justify-between space-y-3 overflow-y-auto md:overflow-hidden no-scrollbar py-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-hairline pb-2 shrink-0">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-accent uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Production Experience Timeline</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold font-sans text-fg-primary tracking-tight">
            Engineering Roles & Experience
          </h3>
        </div>
        <span className="font-mono text-[10px] text-fg-muted hidden sm:inline">
          Select role to inspect verified engineering impact
        </span>
      </div>

      {/* Horizontal Milestone Selector Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
        {milestones.map((m, idx) => {
          const isSelected = idx === selectedMilestone;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedMilestone(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-20 sm:h-24 relative ${
                isSelected
                  ? "border-text-cyan bg-cyan-950/20 shadow-[0_0_20px_rgba(0,242,254,0.15)] ring-1 ring-text-cyan"
                  : "border-border-hairline bg-surface-subtle hover:border-border-medium hover:bg-surface"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Building className={`w-3.5 h-3.5 ${isSelected ? "text-text-cyan" : "text-fg-muted"}`} />
                <span className="font-mono text-[8px] sm:text-[9px] uppercase px-1.5 py-0.2 rounded border border-border-hairline bg-surface">
                  {m.badge}
                </span>
              </div>

              <div>
                <div className="font-mono text-[9px] text-fg-muted truncate">{m.period}</div>
                <div className="font-sans font-bold text-xs sm:text-sm text-fg-primary truncate mt-0.5">
                  {m.organization}
                </div>
              </div>

              <div className="w-full">
                {isSelected ? (
                  <div className="h-1 w-full rounded-full bg-text-cyan shadow-[0_0_8px_#00f2fe]" />
                ) : (
                  <div className="h-0.5 w-full rounded-full bg-border-hairline" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Milestone Deep Dive Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-3.5 sm:p-4 rounded-xl border border-border-hairline bg-surface-subtle/90 flex-1 min-h-0 items-center overflow-y-auto md:overflow-hidden no-scrollbar">
        {/* Left Column: Details & Verified Highlights */}
        <div className="lg:col-span-8 space-y-2">
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              <span className="text-text-cyan font-bold">{active.title}</span>
              <span className="text-fg-muted">•</span>
              <span className="text-fg-primary font-semibold">@ {active.organization}</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-fg-muted">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-text-accent" />
                {active.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-fg-muted" />
                {active.location}
              </span>
            </div>
          </div>

          <p className="text-xs text-fg-secondary leading-relaxed font-sans line-clamp-2">
            {active.summary}
          </p>

          {/* Highlights List */}
          <div className="space-y-1 pt-1">
            <div className="font-mono text-[9px] text-fg-muted uppercase tracking-wider">
              Verified Key Contributions:
            </div>
            <ul className="space-y-1 text-xs text-fg-secondary">
              {active.highlights.slice(0, 3).map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-text-cyan shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px] line-clamp-1 sm:line-clamp-none">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Verified Technologies Pill Cloud */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-2 p-3 rounded-lg border border-border-hairline bg-surface h-full">
          <div>
            <div className="font-mono text-[9px] text-fg-muted uppercase tracking-wider pb-1.5 border-b border-border-hairline">
              Stack & Technologies
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {active.technologies.slice(0, 8).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded border border-border-hairline bg-surface-subtle font-mono text-[9px] text-fg-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-1.5 border-t border-border-hairline flex items-center justify-between text-[10px] font-mono text-fg-muted">
            <span>Status:</span>
            <span className="text-status-active font-semibold">{active.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
