import { useState } from 'react';
import { Link } from 'react-router-dom';
import { curriculumPhases } from '../../data/curriculumData';
import { ArrowRight, Code, Briefcase, CheckCircle2, Calendar, FileText, ChevronRight } from 'lucide-react';

export default function CurriculumPreview({ onOpenApply }) {
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const [activeTrack, setActiveTrack] = useState('technical'); // 'technical' | 'consulting'

  const currentPhase = curriculumPhases[activePhaseIdx];

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              32-WEEK MASTER SYLLABUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Two Parallel Tracks. Four Connected Phases.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Every phase runs two tracks simultaneously: the Technical Track (high-code systems engineering) and the Consulting Track (client discovery, boundary setting, and executive defense).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/curriculum"
              className="px-5 py-2.5 rounded-full bg-[#171A18] text-[#FFFFFF] hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Full 32-Week Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {curriculumPhases.map((phase, idx) => {
            const isActive = activePhaseIdx === idx;
            return (
              <button
                key={phase.phase}
                onClick={() => setActivePhaseIdx(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#171918] shadow-md ring-2 ring-[#171918]'
                    : 'bg-[#F7F7F3] hover:bg-[#FFFFFF] border-[#E9E9E2]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9F04A]" />
                )}
                <span className="text-[10px] font-mono uppercase font-bold text-[#70736D] block">
                  {phase.weeks}
                </span>
                <span className="text-xs font-mono font-extrabold text-[#171918] block mt-0.5">
                  {phase.phase}
                </span>
                <h4 className="text-sm font-display font-bold text-[#171918] mt-1 leading-tight line-clamp-1">
                  {phase.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Main Active Phase Box */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] shadow-sm p-6 sm:p-8">
          
          {/* Phase Summary Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#E9E9E2] gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-[#171A18] text-[#C9F04A] px-3 py-1 rounded-full">
                  {currentPhase.phase} • {currentPhase.weeks}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-[#171918]">
                  {currentPhase.title}
                </h3>
              </div>
              <p className="text-xs text-[#70736D] mt-1.5 font-mono">
                {currentPhase.tagline}
              </p>
            </div>

            {/* Track Switcher Buttons */}
            <div className="inline-flex p-1 bg-[#F7F7F3] rounded-full border border-[#E9E9E2] self-start lg:self-auto">
              <button
                onClick={() => setActiveTrack('technical')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeTrack === 'technical'
                    ? 'bg-[#171A18] text-white shadow-sm'
                    : 'text-[#70736D] hover:text-[#171918]'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Technical Track</span>
              </button>
              <button
                onClick={() => setActiveTrack('consulting')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeTrack === 'consulting'
                    ? 'bg-[#171A18] text-white shadow-sm'
                    : 'text-[#70736D] hover:text-[#171918]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Consulting Track</span>
              </button>
            </div>
          </div>

          {/* Module Content Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {(activeTrack === 'technical' ? currentPhase.technicalTrack : currentPhase.consultingTrack).map((item, mIdx) => (
              <div
                key={mIdx}
                className="p-5 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#70736D] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E9E9E2]">
                    {item.week}
                  </span>
                  <h4 className="text-base font-display font-bold text-[#171918] mt-2 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#70736D] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Deliverable Box */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#FAFAF8] border border-[#E9E9E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C9F04A] flex items-center justify-center text-[#171918] shrink-0 font-bold text-xs">
                ✓
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block">
                  Phase Exit Milestone Deliverable
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#171918]">
                  {currentPhase.milestone}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenApply}
              className="px-4 py-2 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Request Full Syllabus PDF
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
