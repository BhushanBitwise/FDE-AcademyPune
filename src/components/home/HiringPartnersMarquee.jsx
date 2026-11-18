import { ShieldCheck, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HiringPartnersMarquee() {
  const hiringPartners = [
    {
      name: "Google Cloud",
      category: "Hyperscale AI",
      brandColor: "#4285F4",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 170 32" fill="none">
          <path d="M16 16c0-.6-.05-1.2-.15-1.7H8v3.4h4.5a3.8 3.8 0 01-1.6 2.5v2.1h2.7c1.6-1.5 2.5-3.6 2.5-6.3z" fill="#4285F4" />
          <path d="M8 24.2c2.2 0 4.1-.7 5.5-2l-2.7-2.1c-.8.5-1.7.8-2.8.8-2.1 0-4-1.4-4.6-3.4H.6v2.1A8.2 8.2 0 008 24.2z" fill="#34A853" />
          <path d="M3.4 17.5a4.9 4.9 0 010-3V12.4H.6a8.2 8.2 0 000 7.2l2.8-2.1z" fill="#FBBC05" />
          <path d="M8 11.2c1.2 0 2.3.4 3.2 1.3l2.4-2.4C12.1 8.7 10.2 8 8 8A8.2 8.2 0 00.6 12.4l2.8 2.1C4 12.6 5.9 11.2 8 11.2z" fill="#EA4335" />
          <text x="24" y="21" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="#1F2937">
            Google <tspan fill="#4285F4">Cloud</tspan>
          </text>
        </svg>
      )
    },
    {
      name: "Microsoft",
      category: "Azure AI",
      brandColor: "#00A4EF",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 140 32" fill="none">
          <rect x="2" y="9" width="6.5" height="6.5" fill="#F25022" />
          <rect x="10.5" y="9" width="6.5" height="6.5" fill="#7FBA00" />
          <rect x="2" y="17.5" width="6.5" height="6.5" fill="#00A4EF" />
          <rect x="10.5" y="17.5" width="6.5" height="6.5" fill="#FFB900" />
          <text x="23" y="21" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="#1F2937">
            Microsoft
          </text>
        </svg>
      )
    },
    {
      name: "Palantir",
      category: "Forward Deployed AI",
      brandColor: "#111827",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 145 32" fill="none">
          <circle cx="13" cy="16" r="9" stroke="#111827" strokeWidth="2.2" />
          <line x1="13" y1="9" x2="13" y2="23" stroke="#111827" strokeWidth="2.2" />
          <circle cx="13" cy="16" r="3" fill="#111827" />
          <text x="29" y="21" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="#111827" letterSpacing="1.5">
            PALANTIR
          </text>
        </svg>
      )
    },
    {
      name: "Amazon AWS",
      category: "Bedrock & Cloud",
      brandColor: "#FF9900",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 120 32" fill="none">
          <text x="2" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="900" fill="#232F3E">
            aws
          </text>
          <path d="M2 24c11 4 25 4 34 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
          <polygon points="38,24 33,22 35,26" fill="#FF9900" />
        </svg>
      )
    },
    {
      name: "NVIDIA",
      category: "GPU Compute",
      brandColor: "#76B900",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="none">
          <path d="M4 11c2.5-2 6.5-2 9.5 0v9.5c-3-2-7-2-9.5 0V11z" fill="#76B900" />
          <path d="M8 13.5c1.5-.8 3.5-.8 5 0v4.8c-1.5-.8-3.5-.8-5 0v-4.8z" fill="#FFFFFF" />
          <text x="20" y="21" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" fill="#111827" letterSpacing="0.8">
            NVIDIA
          </text>
        </svg>
      )
    },
    {
      name: "Databricks",
      category: "Mosaic AI",
      brandColor: "#FF3621",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 150 32" fill="none">
          <polygon points="10,9 18,13 10,17 2,13" fill="#FF3621" opacity="0.6" />
          <polygon points="10,14 18,18 10,22 2,18" fill="#FF3621" />
          <text x="24" y="21" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="#111827">
            databricks
          </text>
        </svg>
      )
    },
    {
      name: "Snowflake",
      category: "Cortex AI",
      brandColor: "#29B5E8",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 140 32" fill="none">
          <circle cx="10" cy="16" r="2.5" fill="#29B5E8" />
          <line x1="10" y1="7" x2="10" y2="25" stroke="#29B5E8" strokeWidth="2" />
          <line x1="2" y1="16" x2="18" y2="16" stroke="#29B5E8" strokeWidth="2" />
          <line x1="4" y1="10" x2="16" y2="22" stroke="#29B5E8" strokeWidth="1.6" />
          <line x1="4" y1="22" x2="16" y2="10" stroke="#29B5E8" strokeWidth="1.6" />
          <text x="24" y="21" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="#111827">
            snowflake
          </text>
        </svg>
      )
    },
    {
      name: "Stripe",
      category: "Autonomous Systems",
      brandColor: "#635BFF",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 110 32" fill="none">
          <text x="2" y="22" fontFamily="Inter, sans-serif" fontSize="21" fontWeight="800" fill="#635BFF" letterSpacing="-0.3">
            stripe
          </text>
        </svg>
      )
    },
    {
      name: "OpenAI",
      category: "Foundation Models",
      brandColor: "#10A37F",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="none">
          <circle cx="11" cy="16" r="7.5" stroke="#10A37F" strokeWidth="2" />
          <path d="M11 9c2 2.5 3 5 3 7s-1 4.5-3 7" stroke="#10A37F" strokeWidth="1.6" />
          <text x="25" y="21" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#111827">
            OpenAI
          </text>
        </svg>
      )
    },
    {
      name: "QuantumBlack",
      category: "McKinsey AI",
      brandColor: "#051C2C",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 170 32" fill="none">
          <circle cx="10" cy="16" r="7" fill="#051C2C" />
          <circle cx="10" cy="16" r="3.5" fill="#FFFFFF" />
          <text x="23" y="21" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#051C2C">
            QuantumBlack
          </text>
        </svg>
      )
    },
    {
      name: "Accenture AI",
      category: "Global Integration",
      brandColor: "#A100FF",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 145 32" fill="none">
          <text x="2" y="21" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#111827">
            accenture
          </text>
          <path d="M72 10l4.5-3.5-4.5-3.5" stroke="#A100FF" strokeWidth="2.2" fill="none" />
        </svg>
      )
    },
    {
      name: "Fractal AI",
      category: "Enterprise AI",
      brandColor: "#FF4D00",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 120 32" fill="none">
          <rect x="2" y="9" width="5" height="14" fill="#FF4D00" />
          <rect x="10" y="13" width="5" height="10" fill="#FF4D00" opacity="0.7" />
          <text x="21" y="21" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="800" fill="#111827">
            fractal
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-14 bg-[#FFFFFF] border-y border-[#E9E9E2] relative overflow-hidden">
      
      {/* Sleek Minimalist Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#10A37F] animate-pulse shrink-0" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
              HIRING PARTNERS & ENTERPRISE DEPLOYMENTS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-[#70736D]">
            <span>350+ Placements</span>
            <span className="opacity-40">•</span>
            <span>Pune, Singapore & Dubai</span>
            <span className="opacity-40">•</span>
            <Link to="/careers" className="text-[#171918] font-bold hover:underline inline-flex items-center gap-1 shrink-0">
              <span>View Placements</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* The Single Continuous Seamless Auto-Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        
        {/* Left & Right Smooth Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        {/* 22-Second Infinite Smooth Gliding Marquee */}
        <div className="animate-marquee-glide flex items-center gap-4 group">
          {/* Duplicate list to achieve mathematically seamless continuous 0% to -50% loop */}
          {[...hiringPartners, ...hiringPartners].map((partner, pIdx) => (
            <div
              key={pIdx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F7F7F3] hover:bg-[#FFFFFF] border border-[#E9E9E2] hover:border-[#171918] transition-all duration-300 shadow-xs hover:shadow-lg shrink-0 cursor-pointer group/card"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover/card:scale-105">
                {partner.logo}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] bg-[#FFFFFF] group-hover/card:bg-[#F7F7F3] px-2 py-0.5 rounded-full border border-[#E9E9E2]">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
