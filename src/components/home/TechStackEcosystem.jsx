import { Cpu, Network, Database, Server, Cloud, ShieldCheck } from 'lucide-react';

export default function TechStackEcosystem() {
  const categories = [
    {
      name: "AI & Foundation Models",
      icon: Cpu,
      items: ["OpenAI (GPT-4o, o1)", "Anthropic Claude 3.5", "Google Gemini 1.5", "Meta Llama 3", "vLLM / Ollama"],
      note: "Model selection, API streaming, context caching, and SLM fine-tuning."
    },
    {
      name: "Agentic Frameworks & MCP",
      icon: Network,
      items: ["LangGraph", "CrewAI", "Agno", "Semantic Kernel", "Model Context Protocol (MCP)"],
      note: "Multi-agent coordination, cyclic state graphs, and secure tool calling protocols."
    },
    {
      name: "Vector Databases & Search",
      icon: Database,
      items: ["Pinecone", "Qdrant", "Weaviate", "PostgreSQL (pgvector)", "Milvus"],
      note: "Hybrid sparse-dense retrieval, HNSW indexing, and multi-tenant RBAC namespace isolation."
    },
    {
      name: "Backend & Systems",
      icon: Server,
      items: ["Python 3.12+", "FastAPI", "Asyncio", "Pydantic v2", "Node.js / TypeScript"],
      note: "High-throughput asynchronous APIs, typing contracts, and structured JSON parsing."
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      items: ["Docker", "Kubernetes", "AWS (Bedrock, ECS, S3)", "Google Cloud Run", "Terraform"],
      note: "Enterprise VPC deployments, GPU cluster provisioning, and automated CI/CD pipelines."
    },
    {
      name: "Evaluation & Governance",
      icon: ShieldCheck,
      items: ["LangSmith", "RAGAS", "DeepEval", "Amazon Bedrock Guardrails", "Helicone"],
      note: "Continuous evaluation benchmarks, hallucination detection, and token cost telemetry."
    }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            Production Technology Stack.
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            The tools, protocols, and infrastructure required to build enterprise-grade intelligent systems. Taught as integrated production environments, not isolated tutorials.
          </p>
        </div>

        {/* 6 Category Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F7F3] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2] flex items-center justify-center text-[#171918]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-[#171918]">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-[#FFFFFF] text-[#171918] border border-[#E9E9E2]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#70736D] leading-relaxed pt-3 border-t border-[#E9E9E2]">
                  {cat.note}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
