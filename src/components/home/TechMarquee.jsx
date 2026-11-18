import { Terminal, Cpu, Database, Cloud, Network, Code, Server, Shield, Layers } from 'lucide-react';

export default function TechMarquee() {
  const technologies = [
    { name: "Python", category: "Core Systems", icon: Code },
    { name: "OpenAI", category: "Foundation Models", icon: Cpu },
    { name: "Anthropic Claude", category: "Foundation Models", icon: Cpu },
    { name: "LangChain", category: "Framework", icon: Network },
    { name: "LangGraph", category: "Cyclic State Machines", icon: Layers },
    { name: "CrewAI", category: "Multi-Agent Teams", icon: Network },
    { name: "Model Context Protocol (MCP)", category: "Protocol", icon: Terminal },
    { name: "Pinecone", category: "Vector Database", icon: Database },
    { name: "Qdrant", category: "Vector Database", icon: Database },
    { name: "PostgreSQL & pgvector", category: "Relational + Vector", icon: Database },
    { name: "AWS Cloud", category: "Infrastructure", icon: Cloud },
    { name: "Google Cloud", category: "Infrastructure", icon: Cloud },
    { name: "Docker & Kubernetes", category: "Containers", icon: Server },
    { name: "FastAPI", category: "Inference Backends", icon: Code },
    { name: "LangSmith", category: "Eval & Tracing", icon: Shield },
  ];

  return (
    <section className="py-10 bg-[#FFFFFF] border-y border-[#E9E9E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#171A18]" />
            <span className="font-mono uppercase tracking-widest text-[#70736D] font-bold text-[11px]">
              Technology & Tooling Ecosystem
            </span>
          </div>
          <p className="text-[11px] font-mono text-[#70736D]">
            Technologies & protocols integrated throughout curriculum and practical labs
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {/* Double array for seamless infinite scroll */}
          {[...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#F7F7F3] border border-[#E9E9E2] hover:border-[#171918] transition-colors shrink-0 group cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#171918] group-hover:bg-[#C9F04A] transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-display font-bold text-[#171918] tracking-tight">
                    {tech.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#70736D] bg-[#FFFFFF] px-2 py-0.5 rounded-full border border-[#E9E9E2]">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
