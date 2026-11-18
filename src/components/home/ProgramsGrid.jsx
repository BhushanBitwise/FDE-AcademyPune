import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Award, CheckCircle, Sparkles } from 'lucide-react';
import { programs } from '../../data/programsData';

export default function ProgramsGrid({ onOpenApply }) {
  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E9E9E2] text-xs font-mono font-semibold text-[#70736D] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#171918]" />
              ACADEMIC OFFERINGS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Programs Built for Production.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Designed from real customer deployment friction. Master the dual tracks of systems engineering and consulting discovery in high-tempo sprint pods.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#70736D] bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E9E9E2]">
              Pune Campus • Hybrid • Cohort 2026
            </span>
          </div>
        </div>

        {/* ISDM-Inspired Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((prog, idx) => {
            const isConfirmed = prog.status.includes("Confirmed");
            const isFeatured = idx === 0; // Flagship card

            return (
              <div
                key={prog.id}
                className={`group relative bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`relative overflow-hidden bg-[#E9E9E2] ${
                  isFeatured ? 'aspect-[16/10] sm:aspect-[2/1] lg:aspect-[21/9] min-h-[190px] sm:min-h-0' : 'aspect-[16/10] min-h-[180px]'
                }`}>
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {prog.number}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border ${
                      isConfirmed 
                        ? 'bg-[#C9F04A] text-[#171918] border-[#C9F04A]' 
                        : 'bg-white/80 text-[#171918] border-white'
                    }`}>
                      {prog.status}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                      {prog.category}
                    </span>
                    <h3 className={`font-display font-extrabold tracking-tight mt-1 ${
                      isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}>
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Meta info pills */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#70736D]">
                      <span className="flex items-center gap-1.5 bg-[#F7F7F3] px-2.5 py-1 rounded-lg border border-[#E9E9E2]">
                        <Clock className="w-3.5 h-3.5 text-[#171918]" />
                        {prog.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#F7F7F3] px-2.5 py-1 rounded-lg border border-[#E9E9E2]">
                        <Award className="w-3.5 h-3.5 text-[#171918]" />
                        {prog.level}
                      </span>
                    </div>

                    <p className="text-sm text-[#70736D] leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Key Topics List */}
                    <div>
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#171918] font-bold mb-2">
                        Core Learning Modules:
                      </h5>
                      <ul className="space-y-1.5">
                        {prog.keyTopics.slice(0, isFeatured ? 5 : 3).map((topic, tIdx) => (
                          <li key={tIdx} className="text-xs text-[#70736D] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#171A18] shrink-0" />
                            <span className="line-clamp-1">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[#E9E9E2] flex items-center justify-between">
                    <Link
                      to={`/programs/${prog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#171918] hover:text-[#70736D] transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Explore Syllabus & Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={onOpenApply}
                      className="px-3 py-1.5 rounded-full bg-[#171A18] text-[#FFFFFF] hover:bg-[#C9F04A] hover:text-[#171918] text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
