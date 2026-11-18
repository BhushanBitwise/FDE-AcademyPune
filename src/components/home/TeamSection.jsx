import { teamMembers, mentors } from '../../data/teamData';
import { ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              FACULTY & PRACTITIONER LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Taught by Active Builders.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Our faculty members are active Forward Deployed Engineers and Solutions Architects with battle-tested experience in enterprise production environments across Pune, Singapore, and Dubai.
            </p>
          </div>

          <div className="text-xs font-mono text-[#70736D] bg-[#F7F7F3] p-3 rounded-2xl border border-[#E9E9E2] max-w-xs">
            <p className="flex items-center gap-1.5 font-bold text-[#171918]">
              <ShieldCheck className="w-4 h-4 text-[#C9F04A]" />
              Practitioner Standard:
            </p>
            <p className="text-[11px] mt-0.5">
              100% of instructors actively build and ship production software alongside teaching.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-[#F7F7F3] rounded-3xl overflow-hidden border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Portrait Image */}
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E9E2] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover group-hover:scale-103 transition-all duration-500 ${
                    member.isMonochrome ? 'grayscale contrast-105 group-hover:grayscale-0' : ''
                  }`}
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {member.statusNote}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="text-base font-display font-extrabold text-[#171918] group-hover:text-[#171A18]">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-[#70736D] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#171918] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E9E9E2] inline-block mt-2">
                    {member.specialty}
                  </p>
                  <p className="text-xs text-[#70736D] mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E9E9E2] flex items-center justify-between text-[11px] font-mono text-[#70736D]">
                  <span>FDE Academy Faculty</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171918]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Advisory Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#171A18] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              INDUSTRY MENTORSHIP & ADVISORY PANEL
            </span>
            <h3 className="text-xl font-display font-bold">
              Weekly Code Reviews from Staff Engineers
            </h3>
            <p className="text-xs text-[#A0A5A2] leading-relaxed">
              In addition to core faculty, cohorts engage with visiting engineering directors and principal architects from high-growth software firms in Pune, Bengaluru, Singapore, and Dubai.
            </p>
          </div>

          <Link
            to="/team"
            className="px-5 py-3 rounded-full bg-[#252C28] border border-[#3C4E41] text-[#C9F04A] hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View Faculty Network</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
