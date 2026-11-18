import { useState } from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programsData';
import { Clock, Award, ArrowUpRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';

export default function ProgramsPage({ onOpenApply }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'confirmed' | 'proposed'

  const filteredPrograms = programs.filter(p => {
    if (filter === 'confirmed') return p.status.includes('Confirmed');
    if (filter === 'proposed') return p.status.includes('Proposed');
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            ACADEMIC CATALOG // 2026 COHORT
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            Engineered for Production.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] max-w-2xl mx-auto leading-relaxed">
            Choose between our 32-week flagship Forward Deployed Engineering immersive or specialized technical pods in Agentic AI and Enterprise RAG.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex p-1 bg-[#FFFFFF] rounded-full border border-[#E9E9E2] shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                filter === 'all'
                  ? 'bg-[#171A18] text-[#C9F04A]'
                  : 'text-[#70736D] hover:text-[#171918]'
              }`}
            >
              All 6 Programs
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                filter === 'confirmed'
                  ? 'bg-[#171A18] text-[#C9F04A]'
                  : 'text-[#70736D] hover:text-[#171918]'
              }`}
            >
              Confirmed Offerings (4)
            </button>
            <button
              onClick={() => setFilter('proposed')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                filter === 'proposed'
                  ? 'bg-[#171A18] text-[#C9F04A]'
                  : 'text-[#70736D] hover:text-[#171918]'
              }`}
            >
              Proposed / Upcoming (2)
            </button>
          </div>
        </div>

        {/* Programs List */}
        <div className="space-y-8 mb-20">
          {filteredPrograms.map((prog, idx) => {
            const isConfirmed = prog.status.includes('Confirmed');

            return (
              <div
                key={prog.id}
                className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Image Thumbnail */}
                  <div className="lg:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden bg-[#E9E9E2] relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                        {prog.number}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Details */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isConfirmed ? 'bg-[#C9F04A] text-[#171918]' : 'bg-[#F7F7F3] text-[#70736D] border border-[#E9E9E2]'
                      }`}>
                        {prog.status}
                      </span>
                      <span className="text-xs font-mono text-[#70736D]">
                        {prog.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-display font-extrabold text-[#171918] tracking-tight">
                      {prog.title}
                    </h2>

                    <p className="text-xs text-[#70736D] leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#70736D]">
                      <span className="bg-[#F7F7F3] px-2.5 py-1 rounded-lg border border-[#E9E9E2]">
                        ⏱ {prog.duration}
                      </span>
                      <span className="bg-[#F7F7F3] px-2.5 py-1 rounded-lg border border-[#E9E9E2]">
                        📍 {prog.format}
                      </span>
                      <span className="bg-[#F7F7F3] px-2.5 py-1 rounded-lg border border-[#E9E9E2]">
                        ⚡ {prog.level}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:pl-6 lg:border-l lg:border-[#E9E9E2] space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918] font-bold block mb-1">
                        Target Roles:
                      </span>
                      <ul className="space-y-1">
                        {prog.targetRoles.map((r, rIdx) => (
                          <li key={rIdx} className="text-xs font-mono text-[#70736D] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#171A18]" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Link
                        to={`/programs/${prog.slug}`}
                        className="w-full py-2.5 rounded-full bg-[#F7F7F3] text-[#171918] hover:bg-[#FFFFFF] border border-[#E9E9E2] hover:border-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>View Syllabus & Specs</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={onOpenApply}
                        className="w-full py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-all"
                      >
                        Apply for this Program
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Program Comparison Table */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 sm:p-10 shadow-sm overflow-x-auto">
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-[#171918]">
              Academic Programs Comparison Matrix
            </h3>
            <p className="text-xs text-[#70736D] mt-1 font-mono">
              Compare durations, focus areas, and capstone requirements across all offerings.
            </p>
          </div>

          <table className="w-full text-left text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-[#E9E9E2] font-mono uppercase text-[#70736D] pb-3">
                <th className="py-3 px-2">Program</th>
                <th className="py-3 px-2">Duration</th>
                <th className="py-3 px-2">Focus Ratio</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Capstone Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E9E2]/60">
              {programs.map((p) => (
                <tr key={p.id} className="hover:bg-[#F7F7F3]/60 transition-colors">
                  <td className="py-3 px-2 font-bold text-[#171918]">
                    <Link to={`/programs/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </td>
                  <td className="py-3 px-2 font-mono text-[#70736D]">{p.duration}</td>
                  <td className="py-3 px-2 font-mono text-[#70736D]">
                    {p.id === 'fde-core' ? '50% Tech / 50% Consulting' : '85% Tech / 15% Consulting'}
                  </td>
                  <td className="py-3 px-2">
                    <span className="bg-[#C9F04A]/30 text-[#171918] px-2 py-0.5 rounded font-mono text-[10px] font-bold">
                      {p.status.split(' ')[0]}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-[#70736D]">
                    {p.highlights[0] || 'Live System Defense'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
