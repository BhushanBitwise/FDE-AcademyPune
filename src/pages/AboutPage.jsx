import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenApply }) {
  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            ABOUT FDE ACADEMY PUNE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight leading-[1.08]">
            Building What Comes Next in Enterprise AI.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            FDE Academy was founded to solve the biggest bottleneck in artificial intelligence: the massive divide between experimental AI models and battle-tested production deployments in real enterprises.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="rounded-3xl overflow-hidden border border-[#E9E9E2] aspect-[21/9] relative shadow-lg mb-20 bg-[#E9E9E2]">
          <img
            src="/images/fde-lobby-reception.webp"
            alt="FDE Academy Pune Flagship Campus & AI Research Labs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                FLAGSHIP CAMPUS & PRODUCTION GPU LABS // PUNE, INDIA
              </span>
              <h2 className="text-xl sm:text-3xl font-display font-bold mt-1">
                Where Systems Engineering Meets Enterprise Reality.
              </h2>
            </div>
          </div>
        </div>

        {/* The Thesis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
              THE GENESIS OF FDE ACADEMY
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#171918] tracking-tight">
              Why Traditional Computer Science Education is Failing AI.
            </h2>
            <p className="text-sm text-[#70736D] leading-relaxed">
              Traditional computer science degrees teach algorithms in abstract vacuums. Online AI bootcamps teach students how to call an OpenAI API from a Jupyter notebook.
            </p>
            <p className="text-sm text-[#70736D] leading-relaxed">
              Neither prepares an engineer for what happens inside an enterprise: dealing with messy legacy databases, strict InfoSec policies, hallucination risks, sub-second latency budgets, and stakeholders who do not know what problem they actually need solved.
            </p>
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border-l-4 border-l-[#171A18] border border-[#E9E9E2]">
              <p className="text-xs italic text-[#171918] leading-relaxed">
                "A Forward Deployed Engineer doesn't ask for a PRD. They sit with the customer, write the PRD, architect the system, build the prototype, and deploy it to the cloud."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-xl font-display font-bold text-[#171918]">
              Our Guiding Principles
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-center text-[#171918] shrink-0 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171918]">
                    100% Practitioner-Led Instruction
                  </h4>
                  <p className="text-xs text-[#70736D] mt-0.5 leading-relaxed">
                    Every mentor and instructor actively writes production code and architects live enterprise systems. We do not employ career lecturers who have never shipped to cloud infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-center text-[#171918] shrink-0 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171918]">
                    Dual-Track Competency (50/50)
                  </h4>
                  <p className="text-xs text-[#70736D] mt-0.5 leading-relaxed">
                    High code alone is insufficient. We dedicate equal rigor to executive client communication, discovery scoping, boundary setting, and architecture defense.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-center text-[#171918] shrink-0 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171918]">
                    Verifiable Production Capstones
                  </h4>
                  <p className="text-xs text-[#70736D] mt-0.5 leading-relaxed">
                    Graduation requires defending a real cloud-deployed system with automated latency alerts, passing RAGAS evaluation scores, and zero critical vulnerabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9E9E2] flex items-center justify-between">
              <span className="text-xs font-mono text-[#70736D]">
                Pune Flagship • Pune, Maharashtra, India
              </span>
              <button
                onClick={onOpenApply}
                className="px-4 py-2 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase transition-colors"
              >
                Apply for Next Cohort
              </button>
            </div>
          </div>
        </div>

        {/* Why Pune Section */}
        <div className="bg-[#171A18] text-white rounded-3xl p-8 sm:p-12 border border-[#2D332F] mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              THE PUNE ADVANTAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold mt-1">
              Why Pune is the Epicenter of Indian AI Systems Engineering.
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A5A2] mt-2 leading-relaxed">
              Pune combines an illustrious academic foundation with India's most intensive enterprise software, automotive engineering, and fintech corridors (Kalyani Nagar, Hinjawadi, Magarpatta).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#222724] border border-[#2F3631]">
              <span className="text-2xl font-display font-extrabold text-[#C9F04A] block mb-1">
                400+
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                Enterprise Tech Firms
              </h4>
              <p className="text-xs text-[#A0A5A2] leading-relaxed">
                Direct access to high-growth engineering teams seeking Forward Deployed and GenAI talent.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#222724] border border-[#2F3631]">
              <span className="text-2xl font-display font-extrabold text-[#C9F04A] block mb-1">
                Direct
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                SG & Dubai Corridors
              </h4>
              <p className="text-xs text-[#A0A5A2] leading-relaxed">
                Active liaison with international enterprise clients and software markets in Singapore and Dubai.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#222724] border border-[#2F3631]">
              <span className="text-2xl font-display font-extrabold text-[#C9F04A] block mb-1">
                Dedicated
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                GPU Pod Compute
              </h4>
              <p className="text-xs text-[#A0A5A2] leading-relaxed">
                Dedicated cloud and on-premises GPU infrastructure for fine-tuning SLMs and running benchmark evaluations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Explore All 6 Academic Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
