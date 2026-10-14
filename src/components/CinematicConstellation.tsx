"use client";

import { useState } from "react";
import { Sparkles, Cloud, Shield, Cpu, Layers, Terminal } from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: typeof Cloud;
  color: "cyan" | "orange" | "emerald" | "indigo";
  tools: string[];
  description: string;
}

const NODES: NodeItem[] = [
  {
    id: "ai-core",
    label: "LAYER 01",
    title: "AI & Vector Retrieval Core",
    subtitle: "FastAPI • Qdrant • Gemini",
    icon: Sparkles,
    color: "cyan",
    tools: ["FastAPI", "Qdrant Vector DB", "Gemini LLM", "LangChain", "Async Python"],
    description: "Designing semantic retrieval architectures with sub-second vector search, multi-tenant payload partitioning, and grounded prompt synthesis.",
  },
  {
    id: "cloud-mesh",
    label: "LAYER 02",
    title: "Kubernetes & GitOps Mesh",
    subtitle: "GKE • Docker • ArgoCD",
    icon: Cloud,
    color: "orange",
    tools: ["Google Kubernetes Engine", "Docker", "ArgoCD", "Cloud Build", "GCP IAM"],
    description: "Orchestrating production microservices with immutable multi-stage containers and automated declarative GitOps continuous synchronization.",
  },
  {
    id: "auth-perimeter",
    label: "LAYER 03",
    title: "Zero-Trust Security Perimeter",
    subtitle: "Next.js BFF • OIDC • RBAC",
    icon: Shield,
    color: "emerald",
    tools: ["Next.js BFF", "HTTP-Only Cookies", "Google Cloud Identity", "JWT", "RBAC"],
    description: "Eliminating client-side token exposure through server-side cookie sessions, OIDC federation, and granular cross-service role validation.",
  },
  {
    id: "interface-deck",
    label: "LAYER 04",
    title: "High-Craft Interface Surface",
    subtitle: "Next.js • React • Tailwind CSS",
    icon: Layers,
    color: "indigo",
    tools: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Angular"],
    description: "Building responsive, highly accessible user interfaces with refined typography, tactile micro-interactions, and accessible keyboard navigation.",
  },
];

export function CinematicConstellation() {
  const [activeNodeId, setActiveNodeId] = useState<string>("ai-core");

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[0];

  const getColorClasses = (color: NodeItem["color"], isActive: boolean) => {
    switch (color) {
      case "cyan":
        return isActive
          ? "border-cyan-400 bg-cyan-950/30 text-cyan-300 shadow-[0_0_25px_rgba(0,242,254,0.2)]"
          : "border-border-hairline hover:border-cyan-500/40 text-fg-secondary";
      case "orange":
        return isActive
          ? "border-orange-500 bg-orange-950/30 text-orange-300 shadow-[0_0_25px_rgba(255,85,0,0.2)]"
          : "border-border-hairline hover:border-orange-500/40 text-fg-secondary";
      case "emerald":
        return isActive
          ? "border-emerald-400 bg-emerald-950/30 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
          : "border-border-hairline hover:border-emerald-500/40 text-fg-secondary";
      case "indigo":
        return isActive
          ? "border-indigo-400 bg-indigo-950/30 text-indigo-300 shadow-[0_0_25px_rgba(99,102,241,0.2)]"
          : "border-border-hairline hover:border-indigo-500/40 text-fg-secondary";
    }
  };

  return (
    <div className="relative rounded-xl border border-border-hairline bg-surface/60 backdrop-blur-md p-6 sm:p-8 overflow-hidden space-y-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-hairline/60 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-text-cyan tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Systems Constellation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-fg-primary tracking-tight">
            How Every Tier Connects In My Work
          </h3>
        </div>
        <div className="font-mono text-xs text-fg-muted">
          Select a layer to inspect its architectural role
        </div>
      </div>

      {/* Interactive Node Selector Deck */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {NODES.map((node) => {
          const isActive = node.id === activeNodeId;
          const IconComponent = node.icon;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNodeId(node.id)}
              className={`p-4 rounded-lg border text-left transition-all duration-200 space-y-2.5 ${getColorClasses(
                node.color,
                isActive
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-fg-muted uppercase">
                  {node.label}
                </span>
                <IconComponent className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <div className="font-sans font-bold text-sm text-fg-primary tracking-tight">
                  {node.title}
                </div>
                <div className="font-mono text-[11px] text-fg-muted mt-0.5 truncate">
                  {node.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Layer Cinematic Visualizer Card */}
      <div className="p-6 rounded-lg border border-border-hairline bg-surface-subtle/80 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-hairline/60 pb-3 font-mono text-xs">
          <span className="text-fg-muted uppercase tracking-wider">
            ACTIVE TIER // {activeNode.title}
          </span>
          <span className="text-text-cyan flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>PRODUCTION VERIFIED</span>
          </span>
        </div>

        <p className="text-sm sm:text-base text-fg-secondary leading-relaxed font-sans max-w-3xl">
          {activeNode.description}
        </p>

        {/* Technologies Chip Mesh */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-fg-muted uppercase mr-1">Tooling:</span>
          {activeNode.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded border border-border-hairline bg-surface font-mono text-xs text-fg-secondary"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
