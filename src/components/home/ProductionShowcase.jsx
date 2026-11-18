import { useState } from 'react';
import { Terminal, Shield, ArrowUpRight, Play, ExternalLink, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function ProductionShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: "rag-engine",
      title: "Enterprise Multi-Tenant RAG Knowledge Engine",
      category: "KNOWLEDGE PLATFORM",
      tagline: "Sub-500ms retrieval across 5M+ technical docs with strict RBAC namespace isolation.",
      image: "/images/fde-main-lecture-space.webp",
      metrics: [
        { label: "P99 Latency", val: "380ms" },
        { label: "Faithfulness Score", val: "97.4%" },
        { label: "Cross-Tenant Leakage", val: "0.00%" }
      ],
      features: [
        "Hierarchical chunking with parent-document context reconstruction",
        "Hybrid dense + BM25 sparse lexical search with reciprocal rank fusion",
        "NeMo Guardrails for automated PII masking and prompt injection defense"
      ],
      stack: ["FastAPI", "Qdrant", "Cohere Re-Rank", "LangSmith", "Docker"]
    },
    {
      id: "agentic-research",
      title: "Autonomous Financial Research & Dossier Agent",
      category: "AGENTIC WORKFLOW",
      tagline: "Multi-agent graph executing deep web queries, SEC 10-K parsing, and investment memos.",
      image: "/images/fde-collaborative-learning.webp",
      metrics: [
        { label: "Avg Research Time", val: "4.2 min" },
        { label: "Citation Accuracy", val: "99.1%" },
        { label: "Tokens / Dossier", val: "~42k" }
      ],
      features: [
        "LangGraph cyclic state graph with self-reflection and search reformulation",
        "Model Context Protocol (MCP) tool integration with SEC EDGAR and Serper API",
        "Human-in-the-loop review checkpoint prior to final document publishing"
      ],
      stack: ["LangGraph", "Claude 3.5 Sonnet", "MCP", "FastAPI", "Helicone"]
    },
    {
      id: "support-copilot",
      title: "Tier-1 Autonomous DevOps & Codebase Copilot",
      category: "DEVELOPER TOOLING",
      tagline: "Parses customer error logs, traces GitHub repository ASTs, and drafts verified PR fixes.",
      image: "/images/fde-ai-systems-class.webp",
      metrics: [
        { label: "Ticket Resolution", val: "46%" },
        { label: "Mean Time to Resolve", val: "7 min" },
        { label: "PR Acceptance Rate", val: "88%" }
      ],
      features: [
        "AST-based code navigation with Tree-sitter for multi-language context",
        "Automated Dockerized test harness running pytest before submitting PRs",
        "Webhook triggers connected to GitHub, GitLab, and Jira"
      ],
      stack: ["Python 3.12", "Tree-sitter", "GitHub API", "OpenAI o1", "AWS ECS"]
    }
  ];

  const current = projects[activeTab];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              PRODUCTION DEPLOYMENTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Systems Built in FDE Labs.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Every student architects, stress-tests, and deploys production-grade AI systems with verified evaluation telemetry, guardrails, and real cloud endpoints.
            </p>
          </div>

          {/* Project Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeTab === idx
                    ? 'bg-[#171A18] text-[#C9F04A] shadow-sm'
                    : 'bg-[#F7F7F3] text-[#70736D] hover:text-[#171918] border border-[#E9E9E2]'
                }`}
              >
                Project 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Showcase Display */}
        <div className="bg-[#F7F7F3] rounded-3xl border border-[#E9E9E2] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Project Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E9E9E2]">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#171918] mt-3">
                  {current.title}
                </h3>
                <p className="text-sm text-[#70736D] mt-2 leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9E9E2]">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <span className="block text-xl font-display font-extrabold text-[#171918]">
                      {m.val}
                    </span>
                    <span className="text-[10px] font-mono text-[#70736D] uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architectural Features */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#171918] font-bold mb-2">
                  System Architecture Highlights:
                </h5>
                <ul className="space-y-2">
                  {current.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-[#70736D] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#171A18] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.stack.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono bg-[#FFFFFF] text-[#171918] px-2.5 py-1 rounded-lg border border-[#E9E9E2]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Project Photographic Snapshot */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E9E9E2] shadow-md group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                      VERIFIED REPOSITORY
                    </span>
                    <p className="text-xs font-mono mt-0.5">
                      Includes end-to-end evaluation benchmark logs & telemetry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
