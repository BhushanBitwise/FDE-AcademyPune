import { ArrowRight, CheckCircle2, TrendingUp, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FutureOfEngineering() {
  const shifts = [
    {
      oldWay: "Siloed Software Engineers",
      newWay: "Forward Deployed Engineers",
      detail: "Building from rigid Jira specs vs. embedding directly with frontline operators to discover and solve high-value operational bottlenecks."
    },
    {
      oldWay: "Jupyter Notebook Experiments",
      newWay: "Production Cloud Microservices",
      detail: "Toy demos that fail on edge cases vs. containerized FastAPI backends with continuous benchmarking, SLM fine-tuning, and deterministic guardrails."
    },
    {
      oldWay: "Single-Prompt Chatbots",
      newWay: "Autonomous Agent Clusters",
      detail: "Unreliable conversational wrappers vs. multi-agent state machines communicating via Model Context Protocol (MCP) with human-in-the-loop oversight."
    }
  ];

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial Typography) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E9E9E2] text-xs font-mono font-semibold text-[#70736D]">
              <Sparkles className="w-3.5 h-3.5 text-[#171918]" />
              THE PARADIGM SHIFT
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight leading-[1.12]">
              AI Is Moving Beyond <br />
              <span className="text-[#70736D] font-medium">Toy Experiments.</span>
            </h2>

            <p className="text-base text-[#70736D] leading-relaxed">
              In 2023, enterprises tested basic LLM prototypes. Today, enterprise leaders demand production-grade reliability, strict data compliance, deterministic guardrails, and measurable economic ROI.
            </p>

            <div className="space-y-4 pt-2">
              {shifts.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9E9E2] space-y-1.5 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono">
                    <span className="text-[#70736D] line-through">{item.oldWay}</span>
                    <span className="text-[#171918] font-bold bg-[#C9F04A] px-2 py-0.5 rounded">
                      {item.newWay}
                    </span>
                  </div>
                  <p className="text-xs text-[#70736D] leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#171918] hover:text-[#70736D] transition-colors"
              >
                <span>Read Our Educational Thesis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Photography & Architecture Card) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden border border-[#E9E9E2] shadow-xl bg-[#FFFFFF] p-3">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/fde-ai-systems-class.webp"
                    alt="FDE Academy Pune AI Systems Studio"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A18]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                        PRACTITIONER LABS // PUNE
                      </span>
                      <p className="text-sm font-display font-semibold mt-0.5">
                        Engineers working on multi-agent orchestrations and production benchmarks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-3 gap-3 text-center border-t border-[#E9E9E2] mt-3 bg-[#FAFAF8] rounded-xl">
                  <div>
                    <span className="block font-display font-extrabold text-lg sm:text-xl text-[#171918]">
                      32 Wks
                    </span>
                    <span className="text-[10px] font-mono text-[#70736D] uppercase">
                      Immersive Track
                    </span>
                  </div>
                  <div className="border-x border-[#E9E9E2]">
                    <span className="block font-display font-extrabold text-lg sm:text-xl text-[#171918]">
                      50 / 50
                    </span>
                    <span className="text-[10px] font-mono text-[#70736D] uppercase">
                      Tech & Consulting
                    </span>
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-lg sm:text-xl text-[#171918]">
                      1 Defense
                    </span>
                    <span className="text-[10px] font-mono text-[#70736D] uppercase">
                      Live Capstone
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Overlay Floating Note */}
              <div className="absolute -bottom-5 -right-5 hidden sm:block bg-[#171A18] text-white p-4 rounded-2xl border border-[#2D332F] shadow-xl max-w-xs">
                <p className="text-xs font-mono text-[#C9F04A] font-bold mb-1">
                  // THE FDE DIFFERENCE
                </p>
                <p className="text-[11px] text-[#D5DAD7] leading-relaxed">
                  "Traditional engineers wait for tickets. FDEs find the revenue leak, design the system, and deploy it."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
