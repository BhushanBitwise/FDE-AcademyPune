import { caseStudies } from '../../data/caseStudiesData';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function CaseStudiesShowcase() {
  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              EDUCATIONAL CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Real Enterprise Scenarios.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              We analyze and reverse-engineer architectural patterns inspired by leading enterprise platforms. These scenarios form the basis of our sprint pods and capstone defenses.
            </p>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-[#70736D] bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E9E9E2] inline-block">
              *Educational architectural benchmarks
            </span>
          </div>
        </div>

        {/* 6 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#171918] bg-[#C9F04A] px-2.5 py-0.5 rounded-md">
                    {cs.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#70736D]">
                    {cs.inspiredBy}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-[#171918] leading-tight">
                  {cs.title}
                </h3>

                {/* Challenge */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block mb-1">
                    Enterprise Challenge:
                  </span>
                  <p className="text-xs text-[#70736D] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-1">
                    Applied AI Solution:
                  </span>
                  <p className="text-xs text-[#171918] leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* Architecture Bullets */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block mb-1.5">
                    Architecture Stack:
                  </span>
                  <ul className="space-y-1">
                    {cs.architecture.map((item, aIdx) => (
                      <li key={aIdx} className="text-[11px] font-mono text-[#70736D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#171A18] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expected Outcome */}
              <div className="mt-5 pt-4 border-t border-[#E9E9E2] bg-[#FAFAF8] -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-4 sm:p-5 rounded-b-3xl">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-0.5">
                  Expected Business Metric:
                </span>
                <p className="text-xs font-semibold text-[#171918]">
                  {cs.expectedOutcome}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
