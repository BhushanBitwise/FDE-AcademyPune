import { useState, useEffect } from 'react';
import { locations } from '../../data/generalData';
import { MapPin, Phone, ArrowUpRight, Globe, ShieldCheck, Clock, Server, Building, Sparkles, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

// Helper to compute local time for timezone
function useLocationClocks() {
  const [times, setTimes] = useState({
    pune: '',
    singapore: '',
    dubai: ''
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes({
        pune: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
        singapore: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
        dubai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return times;
}

export default function LocationsSection({ onOpenApply }) {
  const clocks = useLocationClocks();
  const [activeTab, setActiveTab] = useState(0); // 0: Pune, 1: Singapore, 2: Dubai
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const selectedLoc = locations[activeTab] || locations[0];

  const getTimeForCity = (city) => {
    if (city === "Pune") return clocks.pune;
    if (city === "Singapore") return clocks.singapore;
    if (city === "Dubai") return clocks.dubai;
    return '';
  };

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E9E9E2] text-[#70736D] text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#171A18]" />
              <span>GLOBAL FOOTPRINT & PRODUCTION LABS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Pune Flagship. Singapore & Dubai Hubs.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed font-sans">
              Designed from the ground up for high-intensity systems engineering. Operating from our 14,000 sq.ft. GPU-equipped studios in Pune, with regional enterprise liaison hubs in Singapore (MBFC) and Dubai (DIFC).
            </p>
          </div>

          {/* Live Studio Clocks Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FFFFFF] p-2 rounded-2xl border border-[#E9E9E2] shadow-xs">
            <div className="px-3 py-1.5 rounded-xl bg-[#F7F7F3] text-xs font-mono flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#171918]" />
              <span className="text-[#70736D]">PUNE:</span>
              <span className="font-bold text-[#171918]">{clocks.pune || '12:00:00'} IST</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#F7F7F3] text-xs font-mono flex items-center gap-1.5">
              <span className="text-[#70736D]">SGP:</span>
              <span className="font-bold text-[#171918]">{clocks.singapore || '14:30:00'} SGT</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#F7F7F3] text-xs font-mono flex items-center gap-1.5">
              <span className="text-[#70736D]">DXB:</span>
              <span className="font-bold text-[#171918]">{clocks.dubai || '10:30:00'} GST</span>
            </div>
          </div>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {locations.map((loc, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={loc.city}
                onClick={() => {
                  setActiveTab(idx);
                  setActiveGalleryIndex(0);
                }}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#171A18] text-white border-[#171A18] shadow-md font-bold'
                    : 'bg-[#FFFFFF] text-[#70736D] border-[#E9E9E2] hover:border-[#171918] hover:text-[#171918]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#C9F04A]' : 'bg-[#70736D]'}`} />
                <span className="font-display text-sm font-bold capitalize">{loc.city} Campus & Hub</span>
                <span className="opacity-60 text-[10px]">({loc.status.split('&')[0].trim()})</span>
              </button>
            );
          })}
        </div>

        {/* Featured Campus Stage */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] overflow-hidden shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left 7 Columns: Architectural Showcase with Wall Branding Badge */}
            <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-[#171A18]">
              <img
                src={selectedLoc.image}
                alt={`${selectedLoc.city} Campus Interior`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

              {/* Realistic Physical Wall Branding / Studio Plaque (As requested by user) */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                <div className="bg-black/80 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/20 shadow-2xl max-w-[85%] sm:max-w-none">
                  <span className="text-[9px] sm:text-[10px] font-mono font-black text-[#C9F04A] uppercase tracking-widest block truncate">
                    {selectedLoc.wallBranding}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5 text-white/80 text-[10px] sm:text-[11px] font-mono">
                    <Navigation className="w-3 h-3 text-white/60 shrink-0" />
                    <span>{selectedLoc.buildingCode}</span>
                    <span className="text-white/40 hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{selectedLoc.coordinates}</span>
                  </div>
                </div>

                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/30 shrink-0">
                  {selectedLoc.status}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C9F04A] block mb-1">
                  {selectedLoc.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  {selectedLoc.city}, {selectedLoc.country}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-xl font-sans line-clamp-2">
                  {selectedLoc.description}
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Studio Specs & Direct Facility Attributes */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E9E9E2]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] font-bold block">
                      CAMPUS CLOCK
                    </span>
                    <span className="text-base font-mono font-bold text-[#171918]">
                      {getTimeForCity(selectedLoc.city)} ({selectedLoc.city === "Pune" ? "IST" : selectedLoc.city === "Singapore" ? "SGT" : "GST"})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] font-bold block">
                      BUILDING
                    </span>
                    <span className="text-xs font-mono font-bold text-[#171918]">
                      {selectedLoc.buildingCode}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#171918] font-bold flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-[#171918]" />
                    <span>Studio Equipment & Production Facilities:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedLoc.facilitySpecs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#70736D] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#171918] mt-1.5 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block">
                    Campus Address & Corridor:
                  </span>
                  <p className="text-xs font-medium text-[#171918]">
                    {selectedLoc.addressSummary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E9E2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block">
                    Admissions & Visitation:
                  </span>
                  <p className="text-xs font-mono font-bold text-[#171918]">
                    {selectedLoc.contacts[0]}
                  </p>
                </div>

                <Link
                  to="/locations"
                  className="px-5 py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Tour All Spaces</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Sub-Gallery: Actual Interior Working Spaces of the Selected Campus */}
          {selectedLoc.gallery && selectedLoc.gallery.length > 0 && (
            <div className="p-6 sm:p-8 bg-[#F7F7F3] border-t border-[#E9E9E2]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
                  {selectedLoc.city.toUpperCase()} INTERNAL SPACES & LAB GALLERY
                </span>
                <span className="text-[11px] font-mono text-[#70736D]">
                  Hardware Labs • Collaborative Pods • Steerco Suites
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {selectedLoc.gallery.map((item, gIdx) => (
                  <div
                    key={gIdx}
                    className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E9E9E2] hover:border-[#171918] transition-all shadow-xs flex flex-col justify-between"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#E9E9E2] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-black/70 text-white px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="text-xs font-display font-bold text-[#171918]">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-[#70736D] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Verification Footer Note */}
        <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9E9E2] flex items-center justify-between gap-4 text-xs font-mono text-[#70736D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#171918]" />
            <span>Operating Model: Pune is the core in-person studio & hardware GPU laboratory. Singapore and Dubai host our regional client advisory and sovereign AI engagements.</span>
          </div>
          <button
            onClick={onOpenApply}
            className="text-[#171918] font-bold hover:underline shrink-0 hidden sm:inline"
          >
            Request Campus Tour →
          </button>
        </div>

      </div>
    </section>
  );
}
