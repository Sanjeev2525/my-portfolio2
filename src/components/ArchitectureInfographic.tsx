"use client";

import { useState } from "react";
import {
  Monitor,
  ShieldCheck,
  Server,
  Cloud,
  Cpu,
  Sparkles,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

interface SystemTier {
  id: string;
  name: string;
  category: string;
  icon: typeof Monitor;
  color: string;
  badge: string;
  description: string;
  technologies: string[];
  specs: { label: string; value: string }[];
  scenarios: string[];
}

const TIERS: SystemTier[] = [
  {
    id: "interface",
    name: "01. Client & Interface Tier",
    category: "USER EXPERIENCE",
    icon: Monitor,
    color: "#00f2fe",
    badge: "FRONTEND",
    description: "Responsive, accessible web applications engineered with Next.js (App Router), React, and Angular. Emphasizes server-side rendering, semantic HTML, and fluid interactions.",
    technologies: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
    specs: [
      { label: "Rendering", value: "SSR / SSG Hybrid" },
      { label: "Design System", value: "Modular Tokens" },
      { label: "Standards", value: "WCAG AAA Accessible" },
    ],
    scenarios: ["all", "security", "rag"],
  },
  {
    id: "perimeter",
    name: "02. Identity & Security Perimeter",
    category: "ACCESS CONTROL",
    icon: ShieldCheck,
    color: "#6366f1",
    badge: "ZERO-TRUST",
    description: "Server-side session handling and token validation. Implements OIDC federation with Google Cloud Identity, fine-grained RBAC authorization, and secure HTTP-only cookies to eliminate token theft.",
    technologies: ["OIDC", "JWT Validation", "RBAC", "Google Cloud Identity", "HTTP-Only Cookies"],
    specs: [
      { label: "Session Model", value: "HTTP-Only Server Cookies" },
      { label: "Authorization", value: "Granular RBAC Policies" },
      { label: "Federation", value: "Google Cloud Identity / OIDC" },
    ],
    scenarios: ["all", "security"],
  },
  {
    id: "services",
    name: "03. Backend Services & APIs",
    category: "DISTRIBUTED LOGIC",
    icon: Server,
    color: "#10b981",
    badge: "SERVICES",
    description: "High-throughput microservices and RESTful APIs developed in Node.js, NestJS, Spring Boot, and FastAPI. Decoupled using RabbitMQ message queues and Redis in-memory caching.",
    technologies: ["Node.js", "NestJS", "Spring Boot", "FastAPI", "RabbitMQ", "Redis"],
    specs: [
      { label: "API Pattern", value: "Contract-Driven REST" },
      { label: "Task Queuing", value: "RabbitMQ Events" },
      { label: "In-Memory State", value: "Redis Cache" },
    ],
    scenarios: ["all", "security", "rag", "gitops"],
  },
  {
    id: "cloud",
    name: "04. Cloud & GitOps Orchestration",
    category: "INFRASTRUCTURE",
    icon: Cloud,
    color: "#ff5500",
    badge: "KUBERNETES",
    description: "Containerized application delivery on Google Kubernetes Engine (GKE) and AWS EC2. Automated continuous integration with Cloud Build and declarative GitOps synchronization with ArgoCD.",
    technologies: ["GKE", "Kubernetes", "Docker", "ArgoCD", "Cloud Build", "AWS EC2"],
    specs: [
      { label: "Orchestrator", value: "Google Kubernetes Engine" },
      { label: "Continuous Delivery", value: "Declarative GitOps (ArgoCD)" },
      { label: "Containers", value: "Multi-stage Docker Builds" },
    ],
    scenarios: ["all", "gitops"],
  },
  {
    id: "data_ai",
    name: "05. Data & AI Vector Engine",
    category: "INTELLIGENCE & STORAGE",
    icon: Cpu,
    color: "#a855f7",
    badge: "VECTOR & DB",
    description: "Applied generative AI systems using Retrieval-Augmented Generation (RAG). Pairs Qdrant vector databases with Gemini LLMs and LangChain for context-grounded conversational search alongside PostgreSQL and MongoDB.",
    technologies: ["Qdrant Vector DB", "Gemini LLM", "LangChain", "PostgreSQL", "MongoDB"],
    specs: [
      { label: "Vector Search", value: "Qdrant HNSW Embeddings" },
      { label: "Language Model", value: "Gemini Generative AI" },
      { label: "Databases", value: "PostgreSQL & MongoDB" },
    ],
    scenarios: ["all", "rag"],
  },
];

const FLOW_SCENARIOS = [
  {
    id: "all",
    label: "Full System Architecture",
    description: "End-to-end flow from client UI down to cloud clusters and AI vector stores.",
  },
  {
    id: "security",
    label: "Zero-Trust Security Flow",
    description: "Client request -> HTTP-only Cookie Auth -> OIDC & RBAC Perimeter -> Protected APIs.",
  },
  {
    id: "rag",
    label: "RAG AI Vector Retrieval Flow",
    description: "Query -> FastAPI Gateway -> Qdrant Vector Search -> Context Assembly -> Gemini LLM Response.",
  },
  {
    id: "gitops",
    label: "GitOps Continuous Delivery Flow",
    description: "Git Commit -> Cloud Build Containerization -> ArgoCD Reconciliation -> GKE Pods.",
  },
];

export function ArchitectureInfographic() {
  const [activeTierId, setActiveTierId] = useState<string>("interface");
  const [activeScenarioId, setActiveScenarioId] = useState<string>("all");

  const activeTier = TIERS.find((t) => t.id === activeTierId) || TIERS[0];
  const activeScenario = FLOW_SCENARIOS.find((s) => s.id === activeScenarioId) || FLOW_SCENARIOS[0];

  return (
    <div className="rounded-2xl border border-border-hairline bg-surface/80 backdrop-blur-xl p-3 sm:p-4 space-y-2 sm:space-y-2.5 shadow-2xl relative overflow-y-auto md:overflow-hidden no-scrollbar h-full flex flex-col justify-between">
      {/* Background glow conduits */}
      <div className="absolute top-0 right-10 w-60 h-60 bg-cyan-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Infographic Header with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-border-hairline pb-2 shrink-0">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-cyan uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Topology</span>
          </div>
          <h3 className="text-sm sm:text-base font-bold font-sans text-fg-primary tracking-tight">
            End-to-End Engineering Topology
          </h3>
        </div>

        {/* Flow Preset Scenario Selector */}
        <div className="flex flex-wrap items-center gap-1 bg-surface-subtle p-1 rounded-xl border border-border-hairline text-xs font-mono">
          {FLOW_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-fg-primary text-canvas font-semibold shadow-md"
                    : "text-fg-secondary hover:text-fg-primary hover:bg-surface"
                }`}
              >
                {scenario.label.replace(" Flow", "").replace(" Architecture", "")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Flow Explanation Banner */}
      <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-surface-elevated/60 border border-border-hairline text-[10px] sm:text-[11px] font-mono text-fg-secondary shrink-0">
        <GitBranch className="w-3 h-3 text-text-cyan shrink-0" />
        <span className="text-text-cyan font-semibold uppercase">{activeScenario.label}:</span>
        <span className="text-fg-muted truncate">{activeScenario.description}</span>
      </div>

      {/* Interactive Visual Circuit Map (5 Interconnected Tiers) */}
      <div className="relative shrink-0">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 relative z-10">
          {TIERS.map((tier, idx) => {
            const isSelected = tier.id === activeTierId;
            const isParticipating = tier.scenarios.includes(activeScenarioId);
            const Icon = tier.icon;

            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setActiveTierId(tier.id)}
                className={`p-2 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-20 sm:h-22 relative group ${
                  isSelected
                    ? "border-text-cyan bg-cyan-950/20 text-fg-primary shadow-[0_0_16px_rgba(0,242,254,0.18)] ring-1 ring-text-cyan"
                    : isParticipating
                    ? "border-border-hairline bg-surface-subtle hover:border-border-medium hover:bg-surface text-fg-secondary"
                    : "border-border-hairline/40 bg-surface-subtle/40 opacity-40 hover:opacity-80 text-fg-muted"
                }`}
              >
                {/* Node Status Badge */}
                <div className="flex items-center justify-between w-full">
                  <div
                    className="p-1 rounded-md border border-border-hairline"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase px-1 py-0.2 rounded border border-border-hairline bg-surface">
                    {tier.badge}
                  </span>
                </div>

                {/* Node Label */}
                <div>
                  <div className="font-mono text-[8px] text-fg-muted uppercase tracking-wider">
                    TIER 0{idx + 1}
                  </div>
                  <div className="font-sans font-bold text-[10px] sm:text-[11px] text-fg-primary mt-0.5 leading-snug truncate">
                    {tier.name.replace(/^\d+\.\s*/, "")}
                  </div>
                </div>

                {/* Active Indicator Bar */}
                <div className="w-full">
                  {isSelected ? (
                    <div className="h-0.5 w-full rounded-full bg-text-cyan shadow-[0_0_6px_#00f2fe]" />
                  ) : isParticipating ? (
                    <div className="h-0.5 w-full rounded-full bg-border-hairline group-hover:bg-text-cyan/50" />
                  ) : (
                    <div className="h-0.5 w-full rounded-full bg-border-hairline/20" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Tier Deep-Dive Inspection Panel (Redesigned Zero-Overflow Telemetry Console) */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-border-hairline bg-surface-subtle/80 backdrop-blur-md shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Left Column (7 cols): Tier Identification, Description & Stack Chips */}
          <div className="lg:col-span-7 space-y-1.5">
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-surface border border-border-hairline text-text-cyan font-bold">
                {activeTier.name}
              </span>
              <span className="text-fg-muted">•</span>
              <span className="text-fg-secondary uppercase tracking-wider text-[10px]">{activeTier.category}</span>
            </div>

            <p className="text-[11px] sm:text-xs text-fg-secondary leading-relaxed font-sans line-clamp-2">
              {activeTier.description}
            </p>

            {/* Verified Technologies Pills */}
            <div className="flex flex-wrap gap-1 font-mono text-[9px] sm:text-[10px] pt-0.5">
              {activeTier.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 rounded border border-border-hairline bg-surface text-fg-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Redesigned Architecture Specs Telemetry Matrix */}
          <div className="lg:col-span-5 p-2 sm:p-2.5 rounded-lg border border-border-hairline bg-surface/90 space-y-1.5">
            {/* Specs Header */}
            <div className="flex items-center justify-between font-mono text-[10px] text-fg-muted uppercase tracking-wider pb-1 border-b border-border-hairline">
              <span className="flex items-center gap-1 text-text-cyan font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                Architecture Specs
              </span>
              <span className="text-fg-muted">
                0{TIERS.findIndex((t) => t.id === activeTierId) + 1} / 05
              </span>
            </div>

            {/* 3 Compact Spec Rows */}
            <div className="flex flex-col gap-1 font-mono">
              {activeTier.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-2 py-1 rounded bg-surface-subtle/80 border border-border-hairline/60 text-[10px]"
                >
                  <span className="text-fg-muted uppercase tracking-tight text-[9px] sm:text-[10px] shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-fg-primary font-semibold truncate ml-2 text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
