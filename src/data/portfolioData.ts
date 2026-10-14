export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "Cloud & Infrastructure" | "Full Stack Web" | "Security & Auth" | "Applied AI";
  year: string;
  role: string;
  summary: string;
  narrative: {
    context: string;
    approach: string;
    highlight: string;
  };
  technologies: string[];
  visualStyle: "cyan" | "emerald" | "indigo" | "amber" | "rose" | "teal";
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sanjeev A",
    wordmark: "SANJEEV // A",
    tagline: "Full Stack Developer | Cloud & DevOps",
    location: "Erode, Tamil Nadu, India",
    email: "sanjeevganesh25@gmail.com",
    phone: "+91-9894808631",
    linkedin: "https://linkedin.com/in/sanjeev2525",
    github: "https://github.com/Sanjeev2525",
    bio: [
      "Full Stack Developer and Cloud Systems Engineer who designs and operates resilient software across the entire journey: from responsive web interfaces down to distributed APIs, zero-trust security boundaries, and automated cloud deployments on Kubernetes.",
      "I prioritize engineering simplicity, clean architecture, and visual craft. By bridging modern frontend experiences with automated cloud infrastructure and applied AI, I build systems that scale reliably and feel intuitive to use.",
      "Based in Erode, India, engineering full-stack platforms, GitOps delivery pipelines, and AI retrieval features remotely for N51 Invest PTE LTD, Singapore."
    ],
  },

  skillsCategories: [
    {
      title: "Languages",
      categoryKey: "languages",
      description: "Core programming languages utilized across frontend, backend, and infrastructure scripting.",
      skills: [
        { name: "TypeScript", level: "Primary", context: "Full-stack type safety across React, Next.js & NestJS" },
        { name: "JavaScript", level: "Primary", context: "Modern ES6+, Node.js runtimes & browser APIs" },
        { name: "Java", level: "Advanced", context: "Spring Boot 3 REST APIs & enterprise backend services" },
        { name: "Python", level: "Advanced", context: "FastAPI services, RAG retrieval & cryptographic algorithms" },
      ],
    },
    {
      title: "Frontend Engineering",
      categoryKey: "frontend",
      description: "User interfaces engineered for accessibility, high performance, and visual polish.",
      skills: [
        { name: "React", level: "Primary", context: "Component architecture, reactive state & hooks" },
        { name: "Next.js", level: "Primary", context: "App Router, SSR, SSG & Backend-for-Frontend (BFF)" },
        { name: "Angular", level: "Proficient", context: "Enterprise dashboard workflows & modular architecture" },
        { name: "Tailwind CSS", level: "Primary", context: "Token-based styling, responsive layouts & animations" },
      ],
    },
    {
      title: "Backend & Distributed Systems",
      categoryKey: "backend",
      description: "High-throughput APIs, asynchronous messaging, and distributed microservices.",
      skills: [
        { name: "Node.js", level: "Primary", context: "Event-driven runtime for microservices & gateways" },
        { name: "NestJS", level: "Primary", context: "Modular architecture, dependency injection & REST APIs" },
        { name: "Spring Boot", level: "Advanced", context: "Enterprise REST APIs, data persistence & services" },
        { name: "FastAPI", level: "Advanced", context: "High-performance asynchronous Python API endpoints" },
        { name: "REST APIs", level: "Primary", context: "Contract-driven REST endpoints & webhook integrations" },
        { name: "Microservices", level: "Advanced", context: "Distributed service decomposition & API gateways" },
        { name: "RabbitMQ", level: "Proficient", context: "Asynchronous task queues & event decoupling" },
        { name: "Redis", level: "Advanced", context: "In-memory caching, rate limiting & session state" },
      ],
    },
    {
      title: "Cloud & DevOps",
      categoryKey: "cloud",
      description: "Automated container orchestration, declarative GitOps, and cloud infrastructure.",
      skills: [
        { name: "Google Kubernetes Engine (GKE)", level: "Primary", context: "Cluster orchestration, deployments & ingress" },
        { name: "Kubernetes", level: "Primary", context: "Pods, services, configmaps, secrets & scaling" },
        { name: "Docker", level: "Primary", context: "Multi-stage container builds & lightweight images" },
        { name: "ArgoCD", level: "Advanced", context: "Declarative GitOps synchronization & rollbacks" },
        { name: "GitOps / CI/CD", level: "Primary", context: "Automated test-build-deploy pipelines" },
        { name: "Cloud Build", level: "Advanced", context: "Automated container builds in Google Cloud" },
        { name: "GCP IAM & Secret Manager", level: "Advanced", context: "Least-privilege permissions & secret lifecycle" },
        { name: "AWS EC2", level: "Proficient", context: "Cloud instance deployment & hosting" },
      ],
    },
    {
      title: "Data & Applied AI",
      categoryKey: "data_ai",
      description: "Relational, document, and vector databases paired with LLM retrieval pipelines.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", context: "Relational schemas, indexing & transactional ACID data" },
        { name: "MongoDB", level: "Advanced", context: "Document collections & flexible document persistence" },
        { name: "Qdrant Vector DB", level: "Advanced", context: "Vector embeddings indexing & similarity search" },
        { name: "RAG (Retrieval-Augmented)", level: "Advanced", context: "Context assembly for LLM question answering" },
        { name: "Gemini LLM", level: "Advanced", context: "Generative AI conversational reasoning & grounding" },
        { name: "LangChain", level: "Proficient", context: "Chaining prompts, document loaders & retrievers" },
      ],
    },
    {
      title: "Security & Access Control",
      categoryKey: "security",
      description: "Zero-trust identity verification, perimeter defense, and session protection.",
      skills: [
        { name: "RBAC (Role-Based Access)", level: "Primary", context: "Fine-grained permissions & authorization boundaries" },
        { name: "JWT Validation", level: "Primary", context: "Stateless cryptographically signed tokens" },
        { name: "OIDC Federation", level: "Advanced", context: "Google Cloud Identity Platform & federated auth" },
        { name: "HTTP-Only Cookies", level: "Primary", context: "Server-side session defense eliminating XSS theft" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "ai-knowledge-platform",
      number: "01",
      title: "Generative AI Knowledge Engine (RAG)",
      tagline: "Context-grounded conversational search powered by vector similarity and LLM reasoning",
      category: "Applied AI",
      year: "2025",
      role: "Backend & AI Engineering",
      summary: "A production conversational AI service built with FastAPI, Qdrant vector database, and Gemini LLM. Ingests knowledge bases, computes dense vector embeddings, and retrieves verified context to deliver hallucination-free answers with precise citations.",
      narrative: {
        context: "Users needed real-time, context-aware answers across extensive documentation without manual keyword searching or fragmented answers.",
        approach: "Engineered an asynchronous FastAPI retrieval pipeline integrating Qdrant for vector similarity search, assembling verified context dynamically into Gemini LLM prompts with strict grounding boundaries.",
        highlight: "Delivered fast, grounded responses with explicit citation references while eliminating hallucinations through strict prompt guardrails.",
      },
      technologies: ["FastAPI", "Python", "Qdrant Vector DB", "Gemini LLM", "LangChain"],
      visualStyle: "emerald",
    },
    {
      id: "cloud-gitops-infrastructure",
      number: "02",
      title: "Cloud Infrastructure & GitOps Delivery",
      tagline: "Automated, declarative application delivery on Google Kubernetes Engine",
      category: "Cloud & Infrastructure",
      year: "2025",
      role: "Cloud & DevOps Engineering",
      summary: "Designed and deployed containerized cloud infrastructure on Google Kubernetes Engine (GKE). Introduced GitOps continuous delivery with ArgoCD, migrating workloads to multi-stage Docker containers with automated Cloud Build synchronization.",
      narrative: {
        context: "Distributed backend services required unified scaling, zero configuration drift, and reliable continuous deployment across environments.",
        approach: "Established Git repository as the single source of truth for cluster manifests, connected Google Cloud Build triggers, and configured automated ArgoCD controllers for continuous reconciliation.",
        highlight: "Achieved automated zero-downtime rolling updates, instant rollbacks, and eliminated configuration drift across all deployments.",
      },
      technologies: ["Google Kubernetes Engine", "Docker", "ArgoCD", "GitOps", "Cloud Build", "GCP IAM"],
      visualStyle: "cyan",
    },
    {
      id: "secure-dataroom",
      number: "03",
      title: "Enterprise Secure Dataroom & RBAC Platform",
      tagline: "Protected document access with multi-stage legal and identity verification",
      category: "Security & Auth",
      year: "2024",
      role: "Full Stack & Security Engineering",
      summary: "An access-controlled document repository for sensitive files, integrating invitation verification, automated legal NDA check gates, and role-based access control (RBAC) backed by audit trails and time-limited signed streaming.",
      narrative: {
        context: "High-value business diligence records required strict compliance gates before any file could be accessed or viewed.",
        approach: "Engineered sequential authorization middleware: stakeholder invite verification, signed NDA status gate, and document-level role permissions backed by immutable audit logs.",
        highlight: "Prevented unauthorized document extraction while providing a seamless, compliant interface for prospective stakeholders.",
      },
      technologies: ["Node.js", "NestJS", "PostgreSQL", "RBAC", "Signed URLs", "OIDC"],
      visualStyle: "indigo",
    },
    {
      id: "internal-operations-erp",
      number: "04",
      title: "Internal Operations ERP Platform",
      tagline: "Modular enterprise management dashboard centralizing IT operations",
      category: "Full Stack Web",
      year: "2025",
      role: "Full Stack Development",
      summary: "An internal ERP platform built with Angular and Spring Boot to simplify IT operations, centralize company resources, and provide unified management dashboards for administrative workflows.",
      narrative: {
        context: "Internal operational tooling was dispersed across disconnected scripts and manual spreadsheets.",
        approach: "Constructed an Angular single-page frontend backed by modular Spring Boot services and PostgreSQL, organizing operations into structured role-based modules.",
        highlight: "Unified IT workflows into a single interface, significantly streamlining operational management.",
      },
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "REST APIs", "TypeScript"],
      visualStyle: "teal",
    },
  ] as ProjectItem[],

  experience: [
    {
      role: "Full Stack Developer | Cloud & DevOps",
      company: "N51 Invest PTE LTD",
      location: "Singapore (Remote)",
      period: "Dec 2024 – Present",
      summary: "Orchestrating cloud infrastructure deployments, application security modernization, and full-stack feature delivery.",
      highlights: [
        "Set up production infrastructure on Google Kubernetes Engine (GKE), moved backend workloads to Docker, and introduced GitOps-based CI/CD with ArgoCD.",
        "Built a RAG-based chat platform with FastAPI, Qdrant, and Gemini that lets customers ask questions about plans and services with grounded citations.",
        "Built a multi-layer access-control system for a secure Dataroom handling sensitive documents, combining NDA checks, invite verification, and RBAC.",
        "Built an internal ERP with Angular and Spring Boot to simplify IT operations and bring company resources into one place.",
        "Engineered microservices on GKE; troubleshoot production issues across Kubernetes deployments, CI/CD, ingress, managed certificates, GCP IAM, and database connectivity.",
        "Modernized authentication with Next.js BFF and server-side HTTP-only cookies, auditing RBAC boundaries across microservices and API gateways.",
        "Worked with client teams across several countries on onboarding flows, KYC steps, and API and webhook integrations.",
      ],
      technologies: ["Google Cloud (GKE)", "Kubernetes", "Docker", "ArgoCD", "FastAPI", "Qdrant", "Gemini", "Next.js", "NestJS", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
    },
    {
      role: "Full Stack Developer",
      company: "Laabhum Social",
      location: "Chennai, Tamil Nadu",
      period: "May 2024 – Nov 2024",
      summary: "Engineered core user preference modules and represented the technology team at Tamil Nadu's premier startup summit.",
      highlights: [
        "Worked on Profile and Settings modules, handling user preferences and data management.",
        "Led Laabhum's stall at CODISSIA (Tamil Nadu Startup Thiruvizha 2024): set up the booth, ran product demos, and engaged entrepreneurs and stakeholders.",
      ],
      technologies: ["React", "JavaScript", "REST APIs", "Data Management"],
    },
    {
      role: "Full Stack Developer",
      company: "Gamepay",
      location: "Singapore (Remote)",
      period: "Jun 2023 – Apr 2024",
      summary: "Engineered web features and diagnosed cross-stack issues in an agile distributed engineering environment.",
      highlights: [
        "Built features and fixed bugs across the stack using the team's existing frameworks; helped troubleshoot issues in a structured development process.",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Full Stack Development"],
    },
  ] as ExperienceItem[],
};
