import { careerPathways, placementSupport } from '../data/generalData';
import { ArrowUpRight, ShieldCheck, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import HiringPartnersMarquee from '../components/home/HiringPartnersMarquee';
import StudentPlacementsSection from '../components/home/StudentPlacementsSection';

export default function CareersPage({ onOpenApply }) {
  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            CAREER PATHWAYS & ALIGNMENT
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            High-Impact AI Roles.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            Prepare for senior engineering roles that sit at the strategic core of enterprise AI adoption across India, Southeast Asia, and the Middle East.
          </p>
        </div>

        {/* Ethical Standards Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-center text-[#171918] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#171A18]" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-[#171918]">
                Our Ethical Career Support Pledge
              </h3>
              <p className="text-xs text-[#70736D] mt-1 leading-relaxed max-w-2xl">
                We provide intensive technical preparation, hiring-grade portfolio reviews, and curated introductions to hiring engineering leaders. In keeping with institutional integrity, we reject gimmicky "guaranteed job" marketing. Your code and capstone defense speak for themselves.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Schedule Career Consultation
          </button>
        </div>
      </div>

      {/* Full-bleed Industry Hiring Partners Marquee */}
      <div className="mb-20">
        <HiringPartnersMarquee />
      </div>

      {/* Verified Student Placements & Capstone Defenses */}
      <div className="mb-20">
        <StudentPlacementsSection onOpenApply={onOpenApply} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Detailed Career Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {careerPathways.map((path, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171918] bg-[#C9F04A] px-3 py-1 rounded-full">
                    {path.tier}
                  </span>
                  <span className="text-xs font-mono text-[#70736D]">
                    {path.demand}
                  </span>
                </div>

                <h2 className="text-2xl font-display font-extrabold text-[#171918]">
                  {path.title}
                </h2>

                <p className="text-sm text-[#70736D] leading-relaxed">
                  {path.roleOverview}
                </p>

                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-1">
                    Required Competency Stack:
                  </span>
                  <p className="text-xs font-mono text-[#70736D]">
                    {path.skills}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9E9E2] flex items-center justify-between">
                <span className="text-xs font-mono text-[#70736D]">
                  FDE Academy Aligned
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

        {/* Placement & Portfolio Support Pillars */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 sm:p-12 shadow-sm mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
              SIX PILLARS OF CAREER ACCELERATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#171918] mt-1">
              How We Help You Transition.
            </h3>
            <p className="text-xs sm:text-sm text-[#70736D] mt-2 leading-relaxed">
              Every graduate leaves FDE Academy with public, verifiable engineering assets that pass scrutiny by senior staff engineers and hiring directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementSupport.map((sup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2] flex items-center justify-center font-mono text-xs font-bold text-[#171918]">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-display font-bold text-[#171918]">
                  {sup.title}
                </h4>
                <p className="text-xs text-[#70736D] leading-relaxed">
                  {sup.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
