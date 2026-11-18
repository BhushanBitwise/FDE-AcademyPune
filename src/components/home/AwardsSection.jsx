import { Award, Trophy, Star, ShieldCheck, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AwardsSection() {
  const awards = [
    {
      id: "awwwards-dev",
      year: "2025",
      title: "Awwwards Site of the Day & Developer Award",
      organization: "International Digital Design & Engineering Jury",
      category: "Interactive Systems Architecture & UX Engineering",
      quote: "Sets a new global benchmark for applied technical academies with uncompromising typography, aesthetic rigor, and real-time systems clarity.",
      badge: "AWWWARDS // HONOREE",
      badgeColor: "bg-[#0066FF] text-white",
      score: "9.24 / 10",
      icon: Star
    },
    {
      id: "singapore-edtech",
      year: "2025",
      title: "Best Enterprise AI Academy 2025",
      organization: "Asia-Pacific EdTech Leadership Summit (Singapore)",
      category: "Enterprise Talent Pipeline & Production Competency",
      quote: "Recognized for closing the fatal gap between experimental machine learning prototypes and mission-critical production deployment.",
      badge: "SINGAPORE // GOLD WINNER",
      badgeColor: "bg-[#171918] text-[#C9F04A]",
      score: "Rank #1 APAC",
      icon: Trophy
    },
    {
      id: "india-pedagogy",
      year: "2024–2025",
      title: "National Systems Engineering Pedagogy Trophy",
      organization: "India Technology Leadership Council (Pune Flagship)",
      category: "Practitioner-Led Curriculum of the Year",
      quote: "The most rigorous high-code AI curriculum in India. 100% practitioner faculty directly teaching live client architecture.",
      badge: "PUNE FLAGSHIP // JURY PRIZE",
      badgeColor: "bg-[#C9F04A] text-[#171918]",
      score: "Top Honor",
      icon: Award
    },
    {
      id: "dubai-difc",
      year: "2025",
      title: "Middle East AI Transformation Partner",
      organization: "DIFC FinTech & Enterprise AI Forum (Dubai)",
      category: "Strategic Cross-Border AI Talent Development",
      quote: "Accelerating sovereign AI talent and cross-border enterprise deployments connecting GCC financial institutions with elite engineering talent.",
      badge: "DUBAI DIFC // INNOVATION",
      badgeColor: "bg-[#171918] text-white",
      score: "Regional Leader",
      icon: Trophy
    }
  ];

  const pressMentions = [
    { outlet: "TechCrunch", quote: "The elite academy preparing Forward Deployed Engineers for the autonomous enterprise era." },
    { outlet: "Forbes Asia", quote: "Redefining AI pedagogy by forcing students to deploy live systems rather than run toy Jupyter notebooks." },
    { outlet: "The Economic Times", quote: "How Pune became the global crucible for applied enterprise Forward Deployed Engineers." },
    { outlet: "VentureBeat", quote: "Why companies like Palantir and global consultancies hire directly from practitioner-led studios." }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2] relative overflow-hidden">
      
      {/* Subtle Background Radial Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9F04A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F3] border border-[#E9E9E2] text-[#70736D] text-xs font-mono uppercase tracking-widest mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#171918]" />
              <span>AWARDS & GLOBAL RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Recognized for Rigor.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed font-sans">
              Acknowledged globally across Pune, Singapore, and Dubai by international engineering juries and enterprise councils for establishing the gold standard in production AI education.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <span className="text-xs font-mono text-[#70736D] bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2]">
              Verified Peer & Industry Audited
            </span>
          </div>
        </div>

        {/* Featured Awards Photographic Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#E9E9E2] aspect-[16/9] sm:aspect-[21/8] min-h-[220px] sm:min-h-0 relative shadow-md bg-[#171A18] group">
          <img 
            src="/images/fde-awards-recognition.webp" 
            alt="FDE Academy Awards & Global Industry Honors" 
            className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8">
            <div className="text-white">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C9F04A] block mb-1">
                VERIFIED HONORS // GLOBAL EDTECH & ENTERPRISE JURY
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold leading-snug">
                Excellence in Enterprise AI Pedagogy & Forward Deployed Systems
              </h3>
            </div>
          </div>
        </div>

        {/* Awards 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <div
                key={award.id}
                className="group bg-[#F7F7F3] rounded-3xl p-7 border border-[#E9E9E2] hover:border-[#171918] hover:bg-[#FFFFFF] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${award.badgeColor}`}>
                      {award.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#70736D]">
                      {award.year}
                    </span>
                  </div>

                  {/* Trophy Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E9E9E2] flex items-center justify-center text-[#171918] group-hover:bg-[#C9F04A] transition-colors mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-display font-extrabold text-[#171918] group-hover:text-black leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#70736D] mt-1">
                    {award.organization}
                  </p>

                  <div className="my-4 pt-3 border-t border-[#E9E9E2]/80">
                    <span className="text-[10px] font-mono text-[#0066FF] font-bold block mb-1 uppercase tracking-wider">
                      {award.category}
                    </span>
                    <p className="text-xs text-[#70736D] leading-relaxed italic">
                      "{award.quote}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9E9E2] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#70736D]">Jury Rating:</span>
                  <span className="font-bold text-[#171918]">{award.score}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Press Quote Showcase */}
        <div className="rounded-3xl bg-[#171A18] text-white p-8 sm:p-12 border border-[#2B302D] shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              PRESS & INDUSTRY COVERAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
              What Tech Media & Industry Critics Say
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressMentions.map((press, pIdx) => (
              <div 
                key={pIdx}
                className="bg-[#202522] rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#C9F04A]/50 transition-colors"
              >
                <p className="text-xs text-white/80 leading-relaxed italic mb-4">
                  "{press.quote}"
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-display font-black text-white tracking-wide">
                    {press.outlet}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9F04A]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
