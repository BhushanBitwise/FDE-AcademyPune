import { useState } from 'react';
import { curriculumPhases } from '../data/curriculumData';
import { Code, Briefcase, CheckCircle2, Award, ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';

export default function CurriculumPage({ onOpenApply }) {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            32-WEEK IMMERSIVE BLUEPRINT
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            The Complete FDE Curriculum.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            A dual-track pedagogical architecture balancing 50% high-code systems engineering with 50% client discovery, requirement framing, and executive defense.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenApply}
              className="px-6 py-3 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Detailed 32-Week Syllabus (PDF)</span>
            </button>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {curriculumPhases.map((phase, idx) => {
            const isSelected = selectedPhase === idx;
            return (
              <button
                key={phase.phase}
                onClick={() => setSelectedPhase(idx)}
                className={`p-5 rounded-3xl border text-left transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#171918] shadow-md ring-2 ring-[#171918]'
                    : 'bg-[#F7F7F3] hover:bg-[#FFFFFF] border-[#E9E9E2]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C9F04A]" />
                )}
                <span className="text-xs font-mono font-bold text-[#70736D]">
                  {phase.weeks}
                </span>
                <span className="text-sm font-mono font-extrabold text-[#171918] block mt-0.5">
                  {phase.phase}
                </span>
                <h3 className="text-base font-display font-bold text-[#171918] mt-1 leading-tight">
                  {phase.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Phase Deep-Dive View */}
        {(() => {
          const current = curriculumPhases[selectedPhase];
          return (
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 sm:p-10 shadow-sm space-y-10 mb-16">
              
              {/* Phase Banner */}
              <div className="pb-6 border-b border-[#E9E9E2] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold bg-[#171A18] text-[#C9F04A] px-3 py-1 rounded-full">
                      {current.phase} // {current.weeks}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#171918]">
                      {current.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#70736D] mt-2 font-mono">
                    {current.tagline}
                  </p>
                </div>

                <div className="text-xs font-mono bg-[#F7F7F3] px-3 py-1.5 rounded-lg border border-[#E9E9E2] text-[#70736D]">
                  Exit Criteria: Milestone Defense Required
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#70736D] leading-relaxed max-w-3xl">
                {current.summary}
              </p>

              {/* Side-by-Side Dual Tracks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Technical Track Column */}
                <div className="bg-[#F7F7F3] rounded-2xl border border-[#E9E9E2] p-6 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E9E9E2]">
                    <div className="w-8 h-8 rounded-lg bg-[#171A18] text-[#C9F04A] flex items-center justify-center">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-extrabold text-[#171918]">
                        Technical Track (Systems & Code)
                      </h4>
                      <span className="text-[10px] font-mono uppercase text-[#70736D]">
                        50% of Sprint Hours
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {current.technicalTrack.map((item, tIdx) => (
                      <div key={tIdx} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2]">
                        <span className="text-[10px] font-mono font-bold uppercase text-[#70736D] bg-[#F7F7F3] px-2 py-0.5 rounded">
                          {item.week}
                        </span>
                        <h5 className="text-sm font-display font-bold text-[#171918] mt-1.5 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#70736D] leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consulting Track Column */}
                <div className="bg-[#F7F7F3] rounded-2xl border border-[#E9E9E2] p-6 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E9E9E2]">
                    <div className="w-8 h-8 rounded-lg bg-[#171A18] text-[#C9F04A] flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-extrabold text-[#171918]">
                        Consulting Track (Discovery & Strategy)
                      </h4>
                      <span className="text-[10px] font-mono uppercase text-[#70736D]">
                        50% of Sprint Hours
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {current.consultingTrack.map((item, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E9E9E2]">
                        <span className="text-[10px] font-mono font-bold uppercase text-[#70736D] bg-[#F7F7F3] px-2 py-0.5 rounded">
                          {item.week}
                        </span>
                        <h5 className="text-sm font-display font-bold text-[#171918] mt-1.5 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#70736D] leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Milestone Deliverable Box */}
              <div className="p-6 rounded-2xl bg-[#171A18] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                    PHASE {selectedPhase + 1} EXIT MILESTONE DELIVERABLE
                  </span>
                  <p className="text-sm font-display font-bold">
                    {current.milestone}
                  </p>
                </div>

                <button
                  onClick={onOpenApply}
                  className="px-5 py-2.5 rounded-full bg-[#C9F04A] text-[#171918] hover:bg-[#b8dd3f] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  Apply for this Cohort
                </button>
              </div>

            </div>
          );
        })()}

      </div>
    </div>
  );
}
