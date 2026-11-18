import { useState } from 'react';
import { teamMembers } from '../../data/teamData';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight, 
  Layers, 
  MapPin, 
  ExternalLink, 
  FileText, 
  Grid3X3,
  Columns
} from 'lucide-react';
import { Link } from 'react-router-dom';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function FacultyMentorsShowcase() {
  const [activeView, setActiveView] = useState('bento'); // 'bento' | 'editorial'
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [featuredIndex, setFeaturedIndex] = useState(0); // Aditya Kulkarni (Studio Director) default
  const [hoveredMember, setHoveredMember] = useState(null);

  const activeFeatured = teamMembers[featuredIndex] || teamMembers[0];

  return (
    <section className="py-24 bg-[#0D0F12] text-white border-y border-[#1E232B] relative overflow-hidden">
      
      {/* Subtle Blueprint & Grain Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header & View Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>FACULTY PRACTITIONERS & FELLOWS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              Faculty & Creative Mentors.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl font-sans">
              Engineers teaching engineers. 100% of instructors are active Forward Deployed Engineers, systems researchers, and systems architects shipping enterprise AI in Pune, Singapore, and Dubai.
            </p>
          </div>

          {/* Interactive Layout Switcher (Directly letting user toggle the 2 screenshot layouts) */}
          <div className="flex items-center gap-2 self-start lg:self-end bg-[#161A20] p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveView('bento')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeView === 'bento'
                  ? 'bg-[#0066FF] text-white shadow-lg font-bold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Bento Grid View</span>
            </button>
            <button
              onClick={() => setActiveView('editorial')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeView === 'editorial'
                  ? 'bg-[#0066FF] text-white shadow-lg font-bold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Editorial Strip View</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: BENTO GRID VIEW (Matched to Left Screenshot)           */}
        {/* ------------------------------------------------------------- */}
        {activeView === 'bento' && (
          <div className="bg-[#12151B] border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500">
            
            {/* Bento Canvas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
              
              {/* Tile 0: Aditya Kulkarni (Portrait 1) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[0])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[0].image} 
                  alt={teamMembers[0].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[0].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[0].name}</p>
                </div>
              </div>

              {/* Tile 1: Dr. Elena Vance (Portrait 2) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[1])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[1].image} 
                  alt={teamMembers[1].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[1].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[1].name}</p>
                </div>
              </div>

              {/* Tile 2: Marcus Chen (Portrait 3) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[2])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[2].image} 
                  alt={teamMembers[2].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[2].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[2].name}</p>
                </div>
              </div>

              {/* Tile 3: Signature Solid Blue Square Accent (Exact match to left screenshot top-blue block) */}
              <div className="rounded-2xl bg-[#0066FF] p-5 flex flex-col justify-between col-span-1 row-span-1 shadow-[0_0_40px_rgba(0,102,255,0.3)] border border-blue-400/30">
                <div className="flex items-center justify-between text-white/90">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">FDE LABS</span>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-display font-black text-white">01</span>
                  <p className="text-[11px] font-mono text-white/90 uppercase tracking-wider font-semibold mt-1">
                    PRODUCTION FACULTY
                  </p>
                </div>
              </div>

              {/* Tile 4: Stylized Diagonal Geometric Crosshair Block (Exact match to left screenshot cross 'X') */}
              <div className="rounded-2xl bg-[#14181F] border border-white/10 p-5 flex items-center justify-center col-span-1 row-span-1 relative overflow-hidden group">
                {/* Diagonal Crossing Lines */}
                <svg className="w-24 h-24 text-[#0066FF]/60 stroke-current group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
                  <line x1="15" y1="15" x2="85" y2="85" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="85" y1="15" x2="15" y2="85" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="#0066FF" />
                </svg>
                <div className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                  SYS // PUNE
                </div>
              </div>

              {/* Tile 5: Sarah Al-Mansoori (Portrait 4) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[3])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[3].image} 
                  alt={teamMembers[3].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[3].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[3].name}</p>
                </div>
              </div>

              {/* Tile 6: Devin Thorne (Portrait 5) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[4])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[4].image} 
                  alt={teamMembers[4].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[4].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[4].name}</p>
                </div>
              </div>

              {/* Tile 7: Bella Elizabeth (Portrait 6) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[5])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[5].image} 
                  alt={teamMembers[5].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[5].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[5].name}</p>
                </div>
              </div>

              {/* Tile 8: Central 'Our Team' Block (Exact match to screenshot center title card) */}
              <div className="rounded-2xl bg-[#14181F] border border-white/15 p-4 sm:p-6 lg:p-8 flex flex-col justify-between col-span-2 row-span-1 relative overflow-hidden group hover:border-[#0066FF]/60 transition-colors">
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] font-bold">
                    PRACTITIONER CORE
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white mt-0.5 sm:mt-1">
                    Our Team
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-white/70 leading-snug sm:leading-relaxed font-sans relative z-10 line-clamp-2">
                  "A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music. Built by engineers who deploy daily."
                </p>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#0066FF]/10 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Tile 9: Karthik Raman (Portrait 7) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[6])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[6].image} 
                  alt={teamMembers[6].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[6].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[6].name}</p>
                </div>
              </div>

              {/* Tile 10: Anya Sharma (Portrait 8) */}
              <div 
                onClick={() => setSelectedMember(teamMembers[7])}
                className="group relative rounded-2xl overflow-hidden bg-[#1A1F26] border border-white/10 cursor-pointer col-span-1 row-span-1 transition-all hover:border-[#0066FF] hover:scale-[1.02]"
              >
                <img 
                  src={teamMembers[7].image} 
                  alt={teamMembers[7].name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF]">{teamMembers[7].statusNote}</span>
                  <p className="text-xs font-bold text-white leading-tight">{teamMembers[7].name}</p>
                </div>
              </div>

            </div>

            {/* Bottom Bar: Numbered Index 02 (as in screenshot) & Action */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white/80">
                  02
                </span>
                <span className="text-xs font-mono text-white/50">
                  Click any portrait to inspect faculty dossier & research track record
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/40">
                  Showing 8 Master Practitioners
                </span>
                <Link
                  to="/team"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Full Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 2: EDITORIAL FILMSTRIP VIEW (Matched to Right Screenshot) */}
        {/* ------------------------------------------------------------- */}
        {activeView === 'editorial' && (
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 bg-[#FFFFFF] text-[#171918]">
            
            {/* Top Light Canvas with 'Our team' Header */}
            <div className="p-8 sm:p-12 pb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
                  CREATIVE MENTORS & SYSTEMS FELLOWS
                </span>
                <span className="text-xs font-mono text-[#70736D] bg-[#F7F7F3] px-3 py-1 rounded-full border border-[#E9E9E2]">
                  Click portrait to shift vertical inspector
                </span>
              </div>
              <h3 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
                Our team
              </h3>
            </div>

            {/* Middle Filmstrip with Signature Vertical Offset Card */}
            <div className="relative overflow-x-auto pb-4 px-8 sm:px-12 scrollbar-none">
              <div className="flex items-end gap-3 min-w-[900px] relative">
                {teamMembers.map((member, idx) => {
                  const isSelected = idx === featuredIndex;
                  return (
                    <div 
                      key={member.id}
                      onClick={() => {
                        setFeaturedIndex(idx);
                        setSelectedMember(member);
                      }}
                      className={`relative shrink-0 cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? 'w-48 sm:w-56' 
                          : 'w-36 sm:w-44 opacity-75 hover:opacity-100 hover:scale-[1.02]'
                      }`}
                    >
                      {/* Portrait Box */}
                      <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#E9E9E2] border border-[#E9E9E2] relative">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover grayscale contrast-110" 
                        />
                        <div className="absolute top-2 right-2">
                          <span className="text-[8px] font-mono uppercase tracking-wider bg-black/70 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                            {member.location.split(',')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Signature Vertical Card Overlay (Direct match to BELLA ELIZABETH in right screenshot) */}
                      {isSelected && (
                        <div className="absolute -top-10 right-0 w-28 sm:w-32 bg-[#171A20] text-white rounded-t-xl rounded-bl-xl p-3 border border-white/20 shadow-2xl flex flex-col justify-between h-[210px] z-20 animate-in fade-in zoom-in-95 duration-200">
                          <div>
                            <span className="text-[9px] font-mono text-[#0066FF] font-bold block uppercase tracking-wider">
                              FACULTY // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </span>
                          </div>

                          {/* Vertical Rotated Typography */}
                          <div className="flex items-center justify-center my-auto">
                            <span 
                              className="font-display font-black text-sm uppercase tracking-wider text-white whitespace-nowrap block"
                              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                            >
                              {member.name}
                            </span>
                          </div>

                          <div className="border-t border-white/10 pt-1 text-center">
                            <span className="text-[9px] font-mono text-white/70 block uppercase tracking-wider">
                              {member.role.split('&')[0].trim()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Dark Foundation with Atmospheric Quote (Exact match to screenshot bottom dark banner) */}
            <div className="bg-[#171A20] text-white p-8 sm:p-12 border-t border-[#262B33]">
              <div className="max-w-4xl">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  "A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                  <div className="flex items-center gap-3">
                    <span className="text-[#0066FF] font-bold">SELECTED PRACTITIONER:</span>
                    <span className="text-white font-semibold">{activeFeatured.name} — {activeFeatured.role}</span>
                  </div>
                  <button
                    onClick={() => setSelectedMember(activeFeatured)}
                    className="text-[#0066FF] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>View Production Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE DOSSIER DRAWER (When a user clicks any member)     */}
        {/* ------------------------------------------------------------- */}
        {selectedMember && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#14181F] border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#1E232B] border-2 border-[#0066FF] shrink-0">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover grayscale contrast-110" 
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#0066FF] bg-[#0066FF]/10 px-2.5 py-0.5 rounded border border-[#0066FF]/20">
                    {selectedMember.statusNote}
                  </span>
                  <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-white/60" />
                    {selectedMember.location}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {selectedMember.name}
                </h4>
                <p className="text-xs font-mono text-white/70">
                  {selectedMember.role} • <span className="text-white/50">{selectedMember.credentials}</span>
                </p>
                <p className="text-xs text-white/80 max-w-3xl pt-1">
                  {selectedMember.bio}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 self-end lg:self-center">
              <a
                href={`https://${selectedMember.github}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://${selectedMember.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <Link
                to="/team"
                className="px-4 py-2.5 rounded-xl bg-[#0066FF] text-white hover:bg-blue-600 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-1.5"
              >
                <span>Read Full Papers</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
