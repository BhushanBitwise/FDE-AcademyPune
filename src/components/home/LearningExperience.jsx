import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearningExperience() {
  const moments = [
    {
      title: "Interactive Systems Architecture Clinics",
      caption: "Whiteboard discussions breaking down cyclic state graphs and failure recovery protocols.",
      image: "/images/fde-ai-systems-class.webp",
      tag: "ARCHITECTURE POD",
      span: "lg:col-span-7"
    },
    {
      title: "Collaborative Agile Sprint Pods",
      caption: "Peer-to-peer pairing assembling Model Context Protocol (MCP) servers and autonomous workflows.",
      image: "/images/fde-collaborative-learning.webp",
      tag: "AGILE LABS",
      span: "lg:col-span-5"
    },
    {
      title: "Main Lecture & Defense Auditorium",
      caption: "Executive theater for masterclasses, systems architecture teardowns, and capstone defenses.",
      image: "/images/fde-main-lecture-space.webp",
      tag: "EXECUTIVE AUDITORIUM",
      span: "lg:col-span-4"
    },
    {
      title: "Pune Flagship Studio & Lobby",
      caption: "Purpose-built 14,000 sq.ft. facility with high-density GPU nodes and executive conference suites.",
      image: "/images/fde-lobby-reception.webp",
      tag: "PUNE FLAGSHIP",
      span: "lg:col-span-4"
    },
    {
      title: "Singapore Regional Innovation Hub",
      caption: "Direct enterprise connectivity to Southeast Asia financial institutions and VC networks.",
      image: "/images/fde-singapore-office.webp",
      tag: "SINGAPORE HUB",
      span: "lg:col-span-4"
    }
  ];

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
              LIFE AT FDE ACADEMY
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              An Immersive Studio Environment.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed">
              Step inside our Pune studios and digital pods. An environment engineered for intensive problem solving, high-tempo peer collaboration, and direct practitioner mentorship.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#171918] bg-[#C9F04A] px-3 py-1.5 rounded-full font-bold">
              Kalyani Nagar / Tech Hub • Pune
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {moments.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E9E9E2] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-end min-h-[320px] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Tag Top-Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {item.tag}
                </span>
              </div>

              {/* Caption Bottom */}
              <div className="relative z-10 p-6 text-white space-y-1">
                <h4 className="text-lg sm:text-xl font-display font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-[#D5DAD7] leading-relaxed max-w-lg">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
