import { careerPathways, placementSupport } from '../../data/generalData';
import { ArrowUpRight, CheckCircle2, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareerPathways({ onOpenApply }) {
  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            CAREER TRAJECTORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            High-Impact Engineering Pathways.
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            Forward Deployed Engineering is one of the fastest-growing and highest-leverage specializations in global technology. Prepare for roles that shape the future of enterprise software.
          </p>
        </div>

        {/* 4 Career Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {careerPathways.map((path, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171918] bg-[#C9F04A] px-3 py-1 rounded-full">
                    {path.tier}
                  </span>
                  <span className="text-xs font-mono text-[#70736D]">
                    {path.demand}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#171918] mb-2">
                  {path.title}
                </h3>

                <p className="text-xs text-[#70736D] leading-relaxed mb-4">
                  {path.roleOverview}
                </p>

                <div className="p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-1">
                    Key Technical Competencies:
                  </span>
                  <p className="text-xs font-mono text-[#70736D]">
                    {path.skills}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9E9E2] flex items-center justify-between">
                <span className="text-xs font-mono text-[#70736D]">
                  Curriculum Track Aligned
                </span>
                <button
                  onClick={onOpenApply}
                  className="text-xs font-mono font-bold uppercase text-[#171918] hover:text-[#70736D] flex items-center gap-1"
                >
                  Apply for this track <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Career Support Services Grid */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
              PORTFOLIO & CAREER INFRASTRUCTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#171918] mt-1">
              Hiring-Grade Preparation.
            </h3>
            <p className="text-xs sm:text-sm text-[#70736D] mt-2 leading-relaxed">
              We distinguish ethical, rigorous career guidance from empty placement promises. Every graduate is equipped with a verified codebase, architectural defense artifacts, and direct industry network introductions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementSupport.map((sup, sIdx) => (
              <div key={sIdx} className="p-5 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2] flex items-center justify-center text-[#171918] font-mono text-xs font-bold">
                  0{sIdx + 1}
                </div>
                <h4 className="text-sm font-display font-bold text-[#171918]">
                  {sup.title}
                </h4>
                <p className="text-xs text-[#70736D] leading-relaxed">
                  {sup.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E9E9E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#70736D]">
              <ShieldCheck className="w-4 h-4 text-[#171918]" />
              <span>Transparent Admissions & Hiring Network Standards</span>
            </div>

            <Link
              to="/careers"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#171918] hover:text-[#70736D] flex items-center gap-1.5"
            >
              <span>Explore Career Support Deep-Dive</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
