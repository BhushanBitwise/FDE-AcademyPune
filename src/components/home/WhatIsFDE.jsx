import { useState } from 'react';
import { Briefcase, Code2, Cpu, Rocket, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function WhatIsFDE() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "consulting",
      title: "Business Consulting",
      subtitle: "Discovery, Scoping & Boundary Setting",
      icon: Briefcase,
      color: "bg-[#E2F1FF] text-[#1E3A8A]",
      accentBorder: "border-[#1E3A8A]",
      badge: "01 // DISCOVERY",
      description: "Sitting alongside corporate executives, operations leaders, and end-users to uncover high-friction bottlenecks. Translating qualitative business pain into formal mathematical and engineering constraints while explicitly scoping what will NOT be built.",
      coreSkills: [
        "Executive stakeholder interviewing",
        "Economic ROI and token cost modeling",
        "Defining technical acceptance criteria",
        "Navigating enterprise risk and compliance (DPDP, GDPR)"
      ],
      fdeRole: "The FDE acts as an empathetic consultant who asks the uncomfortable operational questions before any architecture is committed."
    },
    {
      id: "software",
      title: "Software Engineering",
      subtitle: "High-Performance Distributed Backends",
      icon: Code2,
      color: "bg-[#FEF3EB] text-[#7C2D12]",
      accentBorder: "border-[#7C2D12]",
      badge: "02 // BACKEND",
      description: "Writing maintainable, asynchronous, typed production backends using Python, FastAPI, and robust data schemas. Ensuring resilience under high concurrency, low latency, and zero memory leaks.",
      coreSkills: [
        "Async Python (asyncio) & typing",
        "FastAPI microservices & streaming responses",
        "PostgreSQL & relational data modeling",
        "REST & Model Context Protocol (MCP) servers"
      ],
      fdeRole: "The FDE engineers clean software boundaries that allow probabilistic AI outputs to integrate safely with deterministic enterprise core systems."
    },
    {
      id: "ai",
      title: "AI Engineering",
      subtitle: "Foundation Models, RAG & Agentic Workflows",
      icon: Cpu,
      color: "bg-[#E9F8E5] text-[#1E4D2B]",
      accentBorder: "border-[#1E4D2B]",
      badge: "03 // AI CORE",
      description: "Going far beyond naive prompt engineering. Architecting advanced retrieval systems, hierarchical vector indexing, multi-agent cyclic state machines with LangGraph, and domain-adapted SLM fine-tuning.",
      coreSkills: [
        "Hierarchical RAG & cross-encoder re-ranking",
        "Cyclic agent orchestration (LangGraph, CrewAI)",
        "Deterministic guardrails & hallucination suppression",
        "Continuous evaluation suites (RAGAS, DeepEval)"
      ],
      fdeRole: "The FDE masters the probabilistic nature of LLMs, designing self-healing loops so autonomous systems never hallucinate in production."
    },
    {
      id: "deployment",
      title: "Production Deployment",
      subtitle: "Cloud Infrastructure, Telemetry & Hardening",
      icon: Rocket,
      color: "bg-[#F3E8FF] text-[#581C87]",
      accentBorder: "border-[#581C87]",
      badge: "04 // CLOUD",
      description: "Shipping and maintaining systems directly within the client's private cloud VPCs (AWS, GCP, Azure) or hybrid environments. Configuring IAM roles, automated CI/CD pipelines, and real-time observability.",
      coreSkills: [
        "Docker containerization & Kubernetes manifests",
        "Private cloud VPCs & secrets management",
        "Distributed tracing with OpenTelemetry & Helicone",
        "Automated failovers & continuous latency alerts"
      ],
      fdeRole: "The FDE owns the deployment through Day 2 operations, monitoring real user adoption and telemetry to capture the next iteration."
    }
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F3] border border-[#E9E9E2] text-xs font-mono font-semibold text-[#70736D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#171A18]" />
            CORE DEFINITION & COMPETENCY MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            What Is Forward Deployed Engineering?
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            The role that bridges the gap between executive strategy and technical execution. An FDE owns the full lifecycle: from sitting with client stakeholders to deploying live code on customer infrastructure.
          </p>
        </div>

        {/* Interactive 4-Pillar Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Clickable Pillar Cards */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#171A18] text-white border-[#171A18] shadow-lg scale-[1.01]'
                      : 'bg-[#F7F7F3] hover:bg-[#FFFFFF] text-[#171918] border-[#E9E9E2] hover:border-[#70736D]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#C9F04A] text-[#171918]' : pillar.color
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono tracking-widest block uppercase font-bold ${
                        isSelected ? 'text-[#C9F04A]' : 'text-[#70736D]'
                      }`}>
                        {pillar.badge}
                      </span>
                      <h4 className="text-sm sm:text-base font-display font-bold leading-tight">
                        {pillar.title}
                      </h4>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${
                        isSelected ? 'text-[#A0A5A2]' : 'text-[#70736D]'
                      }`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-[#C9F04A] translate-x-1' : 'text-[#70736D] group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}

            {/* Bottom Synthesis Callout */}
            <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] text-xs text-[#70736D] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C9F04A] shrink-0" />
              <span>
                <strong>The FDE Synthesis:</strong> An engineer who can talk to the CEO in the boardroom at 10 AM, and write async Python with zero regressions at 2 PM.
              </span>
            </div>
          </div>

          {/* Right: Active Pillar Deep-Dive Pane */}
          <div className="lg:col-span-7 bg-[#F7F7F3] rounded-3xl border border-[#E9E9E2] p-6 sm:p-8 shadow-sm">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#E9E9E2]">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${current.color}`}>
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#70736D] uppercase">
                    Pillar Analysis
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#171918]">
                    {current.title}
                  </h3>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E9E9E2] text-xs font-mono font-bold text-[#171918]">
                {current.badge}
              </span>
            </div>

            <p className="mt-5 text-sm sm:text-base text-[#171918] leading-relaxed">
              {current.description}
            </p>

            {/* Core Competencies List */}
            <div className="mt-6">
              <h5 className="text-xs font-mono uppercase tracking-wider text-[#70736D] font-bold mb-3">
                Core Competencies Taught in Academy Pods:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.coreSkills.map((skill, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2] text-xs font-medium text-[#171918] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#171A18] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FDE Mindset Quote Box */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FFFFFF] border-l-4 border-l-[#171A18] border border-[#E9E9E2]">
              <p className="text-xs font-mono text-[#70736D] uppercase tracking-wider font-semibold">
                Practitioner Insight:
              </p>
              <p className="text-xs text-[#171918] italic mt-1 leading-relaxed">
                "{current.fdeRole}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
