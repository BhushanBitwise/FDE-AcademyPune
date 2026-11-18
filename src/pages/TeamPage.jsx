import { useState } from 'react';
import { teamMembers, mentors } from '../data/teamData';
import { ShieldCheck, ArrowRight, UserCheck, Sparkles, MapPin, FileText, ExternalLink } from 'lucide-react';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamPage({ onOpenApply }) {
  const [filterLocation, setFilterLocation] = useState('all');

  const filteredMembers = filterLocation === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.location.toLowerCase().includes(filterLocation.toLowerCase()));

  return (
    <div className="pt-28 pb-24 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            PRACTITIONER FACULTY & FELLOWS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            Engineers Teaching Engineers.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            Our team consists of practicing Forward Deployed Engineers, systems architects, and technical fellows who bring live production architectures directly into the studio.
          </p>
        </div>

        {/* Practitioner Standards Callout */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-center text-[#171918] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#171A18]" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-[#171918]">
                Active Production Practitioners Only
              </h3>
              <p className="text-xs text-[#70736D] mt-1 leading-relaxed max-w-2xl">
                We believe you cannot teach modern agentic architectures, MCP tool-calling, or enterprise RAG without having deployed and maintained them in high-concurrency environments. Every instructor spends significant time shipping live systems.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenApply('faculty-mentorship')}
            className="px-5 py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Apply to Study With Faculty
          </button>
        </div>

        {/* Location Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#E9E9E2]">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Faculty (8)' },
              { id: 'pune', label: 'Pune Flagship (5)' },
              { id: 'singapore', label: 'Singapore Hub (2)' },
              { id: 'dubai', label: 'Dubai DIFC Hub (1)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterLocation(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  filterLocation === tab.id
                    ? 'bg-[#171A18] text-white font-bold shadow-xs'
                    : 'bg-[#FFFFFF] text-[#70736D] border border-[#E9E9E2] hover:border-[#171918] hover:text-[#171918]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#70736D]">
            Showing verified practitioner profiles
          </span>
        </div>

        {/* Faculty Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E9E2] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {member.statusNote}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {member.location.split(',')[0]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-display font-extrabold text-[#171918]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#0066FF] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#70736D] mt-1">
                    {member.credentials}
                  </p>
                  
                  <div className="mt-3">
                    <span className="text-[10px] font-mono text-[#171918] bg-[#F7F7F3] px-2.5 py-1 rounded border border-[#E9E9E2] inline-block font-semibold">
                      {member.specialty}
                    </span>
                  </div>

                  <p className="text-xs text-[#70736D] mt-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {member.papers && (
                    <div className="mt-3 pt-3 border-t border-[#E9E9E2] flex items-start gap-1.5 text-[11px] font-mono text-[#70736D]">
                      <FileText className="w-3 h-3 text-[#171918] shrink-0 mt-0.5" />
                      <span className="line-clamp-1 italic">{member.papers}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E9E9E2] flex items-center justify-between text-[11px] font-mono text-[#70736D]">
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://${member.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="font-bold text-[#171918]">Active Builder</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Mentorship Network Box */}
        <div className="bg-[#171A18] text-white rounded-3xl p-8 sm:p-12 border border-[#2D332F] shadow-xl">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              INDUSTRY MENTORS & GUEST REVIEWERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold mt-1">
              Visiting Engineering Leaders
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A5A2] mt-2 leading-relaxed">
              In addition to our core teaching staff, cohorts receive weekly feedback from senior engineers and engineering directors based in Pune, Bengaluru, Singapore, and Dubai.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#222724] border border-[#2F3631] text-xs text-[#A0A5A2] leading-relaxed">
            {mentors[0].description}
          </div>
        </div>

      </div>
    </div>
  );
}
