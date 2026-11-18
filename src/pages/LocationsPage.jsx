import { useState, useEffect } from 'react';
import { locations } from '../data/generalData';
import { MapPin, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Clock, Server, Navigation, Sparkles, Building2 } from 'lucide-react';

function usePageClocks() {
  const [times, setTimes] = useState({ pune: '', singapore: '', dubai: '' });

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

export default function LocationsPage({ onOpenApply }) {
  const clocks = usePageClocks();

  const getTimeForCity = (city) => {
    if (city === "Pune") return `${clocks.pune || '12:00:00'} IST`;
    if (city === "Singapore") return `${clocks.singapore || '14:30:00'} SGT`;
    if (city === "Dubai") return `${clocks.dubai || '10:30:00'} GST`;
    return '';
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            FLAGSHIP CAMPUS & REGIONAL HUBS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            Our Global Ecosystem.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            Operating from our 14,000 sq.ft. high-throughput AI engineering studios in Pune, with regional client advisory and enterprise liaison suites in Singapore (Marina Bay) and Dubai (DIFC).
          </p>
        </div>

        {/* Global Live Synchronization Bar */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171A18] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-[#2A2E2C]">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              GLOBAL STUDIO SYNCHRONIZATION
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Live Operations Across Three Timezones
            </h3>
            <p className="text-xs text-white/70 max-w-xl">
              Cohorts engage in simulated cross-border deployments mirroring global enterprise teams across IST, SGT, and GST corridors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 bg-[#242926] p-2.5 rounded-2xl border border-white/10 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-[#171A18] text-xs font-mono border border-white/5">
              <span className="text-white/50 block text-[9px] uppercase tracking-wider">PUNE (HQ)</span>
              <span className="font-bold text-[#C9F04A]">{clocks.pune || '12:00:00'} IST</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#171A18] text-xs font-mono border border-white/5">
              <span className="text-white/50 block text-[9px] uppercase tracking-wider">SINGAPORE</span>
              <span className="font-bold text-white">{clocks.singapore || '14:30:00'} SGT</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#171A18] text-xs font-mono border border-white/5">
              <span className="text-white/50 block text-[9px] uppercase tracking-wider">DUBAI</span>
              <span className="font-bold text-white">{clocks.dubai || '10:30:00'} GST</span>
            </div>
          </div>
        </div>

        {/* Detailed 3 Location Campus Cards */}
        <div className="space-y-16 mb-20">
          {locations.map((loc) => {
            const isFlagship = loc.city === "Pune";
            return (
              <div
                key={loc.city}
                className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E9E9E2] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Main Hero Header for Location */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#171A18]">
                    <img
                      src={loc.image}
                      alt={`${loc.city} Campus Interior`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />
                    
                    {/* Realistic Architectural Wall Branding */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                      <div className="bg-black/80 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-white/20 shadow-xl max-w-[85%] sm:max-w-none">
                        <span className="text-[9px] sm:text-[10px] font-mono font-black text-[#C9F04A] uppercase tracking-widest block truncate">
                          {loc.wallBranding}
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5 text-white/80 text-[10px] sm:text-[11px] font-mono">
                          <Navigation className="w-3 h-3 text-white/60 shrink-0" />
                          <span>{loc.buildingCode}</span>
                          <span className="text-white/40 hidden sm:inline">•</span>
                          <span className="hidden sm:inline">{loc.coordinates}</span>
                        </div>
                      </div>

                      <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shrink-0 ${
                        isFlagship ? 'bg-[#C9F04A] text-[#171918]' : 'bg-white/90 text-[#171918]'
                      }`}>
                        {loc.status}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C9F04A] block mb-1">
                        {loc.tag}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                        {loc.city}, {loc.country}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-xl font-sans">
                        {loc.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Facility Attributes */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#E9E9E2]">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] font-bold block">
                            LOCAL TIMEZONE
                          </span>
                          <span className="text-sm font-mono font-bold text-[#171918]">
                            {getTimeForCity(loc.city)}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] font-bold block">
                            BUILDING CODE
                          </span>
                          <span className="text-xs font-mono font-bold text-[#171918]">
                            {loc.buildingCode}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#171918] font-bold flex items-center gap-2">
                          <Server className="w-3.5 h-3.5 text-[#171918]" />
                          <span>Infrastructure & Lab Provisions:</span>
                        </h4>
                        <ul className="space-y-2">
                          {loc.facilitySpecs.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#70736D] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#171918] mt-1.5 shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2]">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block mb-1">
                          Campus Location:
                        </span>
                        <p className="text-xs font-medium text-[#171918]">
                          {loc.addressSummary}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E9E9E2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold block">
                          Direct Admissions Contacts:
                        </span>
                        <div className="space-y-0.5 mt-0.5">
                          {loc.contacts.map((c, cIdx) => (
                            <p key={cIdx} className="text-xs font-mono font-bold text-[#171918]">
                              {c}
                            </p>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenApply(loc.city.toLowerCase())}
                        className="px-5 py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
                      >
                        Visit This Campus
                      </button>
                    </div>

                  </div>
                </div>

                {/* Sub-Gallery for this Location */}
                {loc.gallery && loc.gallery.length > 0 && (
                  <div className="p-6 sm:p-8 bg-[#F7F7F3] border-t border-[#E9E9E2]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
                        {loc.city.toUpperCase()} INTERNAL SPACES & LAB GALLERY
                      </span>
                      <span className="text-[11px] font-mono text-[#70736D]">
                        High-Resolution Architectural & Working Views
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {loc.gallery.map((item, gIdx) => (
                        <div
                          key={gIdx}
                          className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E9E9E2] hover:border-[#171918] transition-all shadow-xs flex flex-col justify-between"
                        >
                          <div className="aspect-[16/10] overflow-hidden bg-[#E9E9E2] relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-black/75 text-white px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
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
            );
          })}
        </div>

        {/* Admissions Direct Assistance CTA */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold block mb-2">
            IN-PERSON CAMPUS TOURS & CONSULTATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#171918] tracking-tight">
            Schedule an Architectural Walkthrough in Pune
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#70736D] max-w-xl mx-auto leading-relaxed">
            Experience our GPU pods, sit in on a live capstone defense, and discuss your career trajectory with an active Forward Deployed Engineer.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApply('campus-tour')}
              className="px-6 py-3.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              Book In-Person Studio Tour
            </button>
            <a
              href="https://wa.me/918087601850?text=Hello%20FDE%20Academy%20Admissions,%20I%20would%20like%20to%20schedule%20a%20campus%20walkthrough."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#F7F7F3] border border-[#E9E9E2] text-[#171918] hover:border-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              WhatsApp Admissions Desk
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
