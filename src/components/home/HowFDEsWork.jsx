import { operatingCycle } from '../../data/generalData';
import { Compass, Target, Cpu, Code2, Cloud, RotateCcw, ArrowRight } from 'lucide-react';

export default function HowFDEsWork() {
  const stepIcons = [Compass, Target, Cpu, Code2, Cloud, RotateCcw];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            OPERATING CYCLE // 6 STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            How Forward Deployed Engineers Work.
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            The FDE engagement loop is continuous. Unlike traditional handoffs that end when code is merged, step six surfaces the next high-value enterprise problem.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-[#E9E9E2] -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {operatingCycle.map((item, idx) => {
              const Icon = stepIcons[idx];
              const isLast = idx === operatingCycle.length - 1;

              return (
                <div
                  key={item.step}
                  className="group bg-[#F7F7F3] hover:bg-[#FFFFFF] p-5 sm:p-6 rounded-3xl border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#70736D] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E9E9E2]">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] group-hover:bg-[#C9F04A] border border-[#E9E9E2] flex items-center justify-center text-[#171918] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-sm font-display font-bold text-[#171918] leading-tight mb-1">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-semibold block mb-3">
                      {item.subtitle}
                    </span>

                    <p className="text-xs text-[#70736D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E9E9E2] flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#70736D] uppercase">
                      {isLast ? "Loop Restarts" : "Next Phase"}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-[#171918] ${isLast ? 'rotate-180 text-[#C9F04A]' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
