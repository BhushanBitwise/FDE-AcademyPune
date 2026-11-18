import { ArrowUpRight, Sparkles, Terminal, Shield, ArrowRight, Layers, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection({ onOpenApply }) {
  const floatingCards = [
    {
      num: "01",
      category: "CORE DISCIPLINE",
      title: "Forward Deployed Engineering",
      color: "bg-[#2A3B4C]",
      badgeColor: "bg-[#E2F1FF] text-[#1E3A8A]",
      image: "/images/fde-main-lecture-space.webp",
      link: "/programs/forward-deployed-engineering"
    },
    {
      num: "02",
      category: "AUTONOMOUS PODS",
      title: "Agentic AI Systems",
      color: "bg-[#324536]",
      badgeColor: "bg-[#E9F8E5] text-[#1E4D2B]",
      image: "/images/fde-collaborative-learning.webp",
      link: "/programs/agentic-ai-systems"
    },
    {
      num: "03",
      category: "KNOWLEDGE ENGINES",
      title: "Enterprise RAG",
      color: "bg-[#4A3D31]",
      badgeColor: "bg-[#FEF3EB] text-[#7C2D12]",
      image: "/images/fde-lobby-reception.webp",
      link: "/programs/enterprise-rag-knowledge-systems"
    },
    {
      num: "04",
      category: "PRODUCTION DEPLOY",
      title: "Applied AI Solutions",
      color: "bg-[#382E47]",
      badgeColor: "bg-[#F3E8FF] text-[#581C87]",
      image: "/images/fde-ai-systems-class.webp",
      link: "/programs/applied-ai-engineering"
    }
  ];

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#F7F7F3]">
      
      {/* Background Soft Ambient Blobs (HORMN-inspired) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#EBECE5]/60 to-transparent rounded-[100px] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-[#C9F04A]/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E2E4DC]/80 rounded-full blur-xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9E9E2] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C9F04A] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#171918]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#171918] font-semibold">
              Admissions Open • 2026 Cohort
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/70 border border-[#E9E9E2] text-[#70736D] text-xs font-mono">
            <span>Pune Flagship</span>
            <span className="opacity-40">•</span>
            <span>Singapore Hub</span>
            <span className="opacity-40">•</span>
            <span>Dubai Hub</span>
          </div>
        </div>

        {/* Hero Central Editorial Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-extrabold text-[#171918] tracking-tight leading-[1.1] sm:leading-[1.08]">
            Engineering Intelligence. <br className="hidden sm:inline" />
            <span className="text-[#70736D] font-medium">Building What Comes Next.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg lg:text-xl text-[#70736D] max-w-2xl mx-auto font-sans leading-relaxed px-2">
            Go beyond AI experimentation. Learn to design, build, and deploy intelligent systems that solve real-world enterprise business problems.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/programs"
              className="px-6 py-3.5 rounded-full bg-[#171A18] text-[#FFFFFF] hover:bg-[#C9F04A] hover:text-[#171918] font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={onOpenApply}
              className="px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#171918] border border-[#E9E9E2] hover:border-[#171918] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs"
            >
              Talk to Our Team
            </button>
          </div>

          {/* Small Supporting Labels */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#70736D]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9F04A]" />
              Forward Deployed Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171918]" />
              Applied AI
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9F04A]" />
              Agentic Systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171918]" />
              Production Engineering
            </span>
          </div>
        </div>

        {/* HORMN-INSPIRED TABLET / CARD COMPOSITION */}
        <div className="relative mt-8 sm:mt-12 max-w-6xl mx-auto">
          
          {/* Main Angled Tablet Container */}
          <div className="relative bg-[#FFFFFF] rounded-[22px] sm:rounded-[36px] lg:rounded-[44px] border-[3px] sm:border-[8px] lg:border-[12px] border-[#E9E9E2] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500">
            
            {/* Tablet Hardware Top Camera & Sensor */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#171A18]/20" />
            </div>

            {/* Inner Tablet Display Area */}
            <div className="pt-5 sm:pt-10 px-3 sm:px-6 lg:px-8 pb-5 sm:pb-8 bg-gradient-to-b from-[#FAFAF8] to-[#FFFFFF]">
              
              {/* Tablet Header Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E9E9E2] gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-[#70736D] font-medium tracking-tight truncate">
                    fde-console <span className="hidden sm:inline">// cluster:pune-01</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[9px] sm:text-[11px] font-mono text-[#171918] bg-[#C9F04A] px-2 sm:px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                    32-WEEK IMMERSIVE
                  </span>
                </div>
              </div>

              {/* Tablet Mid Visual: Feature Banner with Hero Lab Photo */}
              <div className="mt-4 sm:mt-6 relative rounded-2xl overflow-hidden aspect-[16/11] sm:aspect-[16/8] lg:aspect-[21/8] min-h-[240px] sm:min-h-[260px] lg:min-h-0 shadow-inner group">
                <img
                  src="/images/fde-main-lecture-space.webp"
                  alt="FDE Academy Pune AI Engineering Main Lecture Space"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A18]/95 via-[#171A18]/60 to-black/20 flex flex-col justify-end p-4 sm:p-7">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                    <span className="px-2.5 py-0.5 rounded bg-[#C9F04A] text-[#171918] text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 shadow-xs">
                      Pune Flagship Studio
                    </span>
                    <span className="text-white/80 text-[10px] sm:text-xs font-mono">
                      // Forward Deployed Pods
                    </span>
                  </div>
                  <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight leading-snug sm:leading-tight max-w-3xl">
                    The intersection of business consulting, AI engineering, and live cloud deployment.
                  </h3>
                </div>
              </div>

              {/* Tablet Bottom: Floating Program Cards Grid */}
              <div className="mt-5 sm:mt-8">
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#70736D] font-semibold">
                    Specialized Engineering Tracks
                  </span>
                  <Link to="/programs" className="text-xs font-semibold text-[#171918] hover:text-[#70736D] flex items-center gap-1">
                    <span>All Offerings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {floatingCards.map((card) => (
                    <Link
                      key={card.num}
                      to={card.link}
                      className="group relative bg-[#F7F7F3] hover:bg-[#FFFFFF] rounded-2xl p-3.5 sm:p-4 border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                        <span className="text-xs font-mono font-bold text-[#70736D]">
                          {card.num}
                        </span>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFFFFF] group-hover:bg-[#C9F04A] border border-[#E9E9E2] flex items-center justify-center transition-colors">
                          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#171918]" />
                        </div>
                      </div>

                      {/* Card Thumbnail */}
                      <div className="aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden mb-2.5 sm:mb-3 bg-[#E9E9E2]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Metadata */}
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider mb-1 ${card.badgeColor}`}>
                          {card.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-display font-bold text-[#171918] group-hover:text-[#171A18] leading-tight">
                          {card.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* Floating Metric Badge on Desktop (HORMN aesthetic) */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 bg-[#FFFFFF] rounded-2xl border border-[#E9E9E2] p-4 shadow-xl items-center gap-4 z-30">
            <div className="w-11 h-11 rounded-xl bg-[#C9F04A] flex items-center justify-center font-bold text-[#171918]">
              32
            </div>
            <div>
              <p className="text-xs font-display font-bold text-[#171918]">
                32-Week Dual-Track Curriculum
              </p>
              <p className="text-[11px] font-mono text-[#70736D]">
                50% Technical Systems • 50% Consulting Scoping
              </p>
            </div>
          </div>

          {/* Secondary Floating Metric Badge on Right */}
          <div className="hidden lg:flex absolute -top-6 -right-6 bg-[#171A18] text-white rounded-2xl border border-[#2D332F] p-4 shadow-xl items-center gap-3 z-30">
            <div className="w-9 h-9 rounded-full bg-[#242A25] flex items-center justify-center text-[#C9F04A]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-display font-bold text-white">
                Hiring-Grade Capstone Defense
              </p>
              <p className="text-[11px] font-mono text-[#C9F04A]">
                Evaluated by Active Practitioners
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
