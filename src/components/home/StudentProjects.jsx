import { Code, Terminal, ExternalLink, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StudentProjects() {
  const capstones = [
    {
      title: "DocuGraph: Multi-Modal Financial Intelligence Engine",
      studentType: "Cohort 2025 Graduate Pod",
      tags: ["LangGraph", "Qdrant", "AWS Bedrock", "FastAPI"],
      summary: "Autonomous parsing of 100+ page quarterly earnings calls and balance sheets. Outputs interactive comparative risk matrices and generates automated audit memos.",
      benchmark: "98.2% factual verification on synthetic fraud audit test suite."
    },
    {
      title: "OmniTriage: Autonomous IT Incident Remediation Agent",
      studentType: "Enterprise Pod Project",
      tags: ["CrewAI", "MCP", "Docker", "Tree-sitter"],
      summary: "Listens to Datadog alerts, correlates stack traces across 12 microservices, synthesizes potential root causes, and proposes automated patch pull requests.",
      benchmark: "Reduced MTTR from 58 minutes to 4.5 minutes in staging simulations."
    },
    {
      title: "SovereignRAG: Air-Gapped Knowledge System for Healthcare",
      studentType: "Capstone Defense Winner",
      tags: ["vLLM", "Llama 3 8B", "PostgreSQL", "pgvector"],
      summary: "Zero-cloud, completely local LLM inference and hybrid vector retrieval designed for strict patient data privacy compliance.",
      benchmark: "Sub-second token streaming on single NVIDIA A10G instance."
    }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              STUDENT CAPSTONES & DEFENSES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Production-Grade Capstones.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Before graduation, every engineer must defend a comprehensive end-to-end production capstone in front of an expert panel of senior engineering practitioners.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#70736D] bg-[#F7F7F3] px-3 py-1.5 rounded-full border border-[#E9E9E2]">
              Live Code & Telemetry Required
            </span>
          </div>
        </div>

        {/* 3 Capstone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capstones.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#F7F7F3] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#70736D] bg-[#FFFFFF] px-2.5 py-0.5 rounded border border-[#E9E9E2]">
                    {cap.studentType}
                  </span>
                  <Award className="w-4 h-4 text-[#171918]" />
                </div>

                <h3 className="text-lg font-display font-bold text-[#171918] leading-tight">
                  {cap.title}
                </h3>

                <p className="text-xs text-[#70736D] leading-relaxed">
                  {cap.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] text-[#171918] border border-[#E9E9E2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9E9E2]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-1">
                  Defense Benchmark:
                </span>
                <p className="text-xs text-[#171918] font-semibold">
                  {cap.benchmark}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
