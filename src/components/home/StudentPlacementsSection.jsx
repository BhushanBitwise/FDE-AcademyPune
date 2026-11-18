import { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  Award,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentPlacementsSection({ onOpenApply }) {
  const [filter, setFilter] = useState('all');

  const placementRecords = [
    {
      id: "arjun-palantir",
      name: "Arjun Mehta",
      previousRole: "Former SDE-2 (Cognizant)",
      placedRole: "Forward Deployed Engineer (FDE)",
      company: "Palantir Technologies",
      package: "₹34.5 LPA",
      location: "Bengaluru / Pune Pod",
      region: "domestic",
      cohort: "Cohort 2025 Flagship",
      capstone: "Multi-Tenant Enterprise Agentic Graph with Model Context Protocol (MCP)",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
      badge: "Signature FDE Track"
    },
    {
      id: "pooja-microsoft",
      name: "Pooja Nair",
      previousRole: "Former Data Engineer (TCS)",
      placedRole: "Applied AI Solutions Architect",
      company: "Microsoft Azure AI",
      package: "₹31.0 LPA",
      location: "Hyderabad / Pune",
      region: "domestic",
      cohort: "Cohort 2025 Flagship",
      capstone: "Sub-Second Sovereign RAG Pipeline on Private VPC Kubernetes with Qdrant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      badge: "Enterprise RAG Pod"
    },
    {
      id: "tanmay-databricks",
      name: "Tanmay Kulkarni",
      previousRole: "Former Backend Developer (Infosys)",
      placedRole: "GenAI Systems Engineer",
      company: "Databricks",
      package: "$142,000 USD (₹1.18 Cr)",
      location: "Singapore Hub",
      region: "international",
      cohort: "Asia-Pac Fellow 2025",
      capstone: "High-Throughput Vector Index Caching with Triton & vLLM Inference Engines",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      badge: "Singapore International"
    },
    {
      id: "sneha-google",
      name: "Sneha Iyer",
      previousRole: "Former Cloud Engineer (Wipro)",
      placedRole: "Enterprise Solutions Architect",
      company: "Google Cloud (AI Practice)",
      package: "₹28.5 LPA",
      location: "Pune Flagship",
      region: "domestic",
      cohort: "Cohort 2025 Flagship",
      capstone: "Self-Healing CI/CD Agent with Deterministic Guardrails & LangGraph",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      badge: "Agentic Systems Pod"
    },
    {
      id: "vikram-fractal",
      name: "Vikram Deshmukh",
      previousRole: "Self-Taught Python Developer",
      placedRole: "Agentic AI Engineer",
      company: "Fractal Analytics AI Labs",
      package: "₹24.0 LPA",
      location: "Mumbai / Pune",
      region: "domestic",
      cohort: "Cohort 2025 Flagship",
      capstone: "Autonomous Financial SEC-10K Auditing Multi-Agent System with Tree-sitter",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      badge: "Autonomous Pod"
    },
    {
      id: "rohit-nvidia",
      name: "Rohit Pillai",
      previousRole: "Systems Programmer",
      placedRole: "Inference Acceleration Specialist",
      company: "NVIDIA Enterprise Partner Pod",
      package: "$135,000 USD",
      location: "Dubai DIFC Hub",
      region: "international",
      cohort: "Middle East Fellow 2025",
      capstone: "Quantized Model Serving on Distributed TensorRT-LLM with AWQ",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
      badge: "Dubai International"
    }
  ];

  const filteredPlacements = filter === 'all'
    ? placementRecords
    : placementRecords.filter(p => p.region === filter);

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2] relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9F04A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F3] border border-[#E9E9E2] text-[#70736D] text-xs font-mono uppercase tracking-widest mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#171918]" />
              <span>PRODUCTION PLACEMENTS & ALUMNI SUCCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
              Where Our Graduates Deploy.
            </h2>
            <p className="mt-4 text-base text-[#70736D] leading-relaxed font-sans">
              Our graduates do not build toy tutorials. They graduate with verified production capstones, high-throughput vector backends, and live cloud deployments evaluated directly by senior engineering leaders.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] text-left">
              <span className="text-2xl font-display font-black text-[#171918] block leading-none">96.8%</span>
              <span className="text-[10px] font-mono text-[#70736D] uppercase tracking-wider font-semibold">90-Day Placement</span>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] text-left">
              <span className="text-2xl font-display font-black text-[#171918] block leading-none">₹28.4L</span>
              <span className="text-[10px] font-mono text-[#70736D] uppercase tracking-wider font-semibold">Avg Domestic CTC</span>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-[#171A18] text-white text-left shadow-md">
              <span className="text-2xl font-display font-black text-[#C9F04A] block leading-none">$145K</span>
              <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider font-semibold">Top International</span>
            </div>
          </div>
        </div>

        {/* Featured Placement & Alumni Success Infographic Banner (From User's Uploaded Asset) */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#E9E9E2] aspect-[16/9] sm:aspect-[21/8] min-h-[220px] sm:min-h-0 relative shadow-md bg-[#171A18] group">
          <img 
            src="/images/fde-placements-showcase.webp" 
            alt="FDE Academy Placements & Alumni Success Infographic" 
            className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8">
            <div className="text-white">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C9F04A] block mb-1">
                VERIFIED ALUMNI ECOSYSTEM // PUNE • SINGAPORE • DUBAI
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold leading-snug">
                Direct Engineering Deployments in Global Enterprise Leaders
              </h3>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E9E9E2]">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Placements (350+)', mobileLabel: 'All (350+)' },
              { id: 'domestic', label: 'Domestic Tier-1 (Pune / BLR / HYD)', mobileLabel: 'Domestic (Tier-1)' },
              { id: 'international', label: 'International (Singapore & Dubai)', mobileLabel: 'International (SG / DXB)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-[#171A18] text-white font-bold shadow-xs'
                    : 'bg-[#F7F7F3] text-[#70736D] border border-[#E9E9E2] hover:border-[#171918] hover:text-[#171918]'
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.mobileLabel}</span>
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#70736D] hidden sm:inline">
            100% Verified Production Defenses
          </span>
        </div>

        {/* Placed Students Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPlacements.map((record) => (
            <div
              key={record.id}
              className="group bg-[#F7F7F3] rounded-3xl p-6 sm:p-7 border border-[#E9E9E2] hover:border-[#171918] hover:bg-[#FFFFFF] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl overflow-hidden bg-[#E9E9E2] border border-[#E9E9E2] shrink-0">
                      <img 
                        src={record.image} 
                        alt={record.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-extrabold text-[#171918]">
                        {record.name}
                      </h4>
                      <p className="text-[11px] font-mono text-[#70736D]">
                        {record.previousRole}
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-[#171A18] text-[#C9F04A] px-2.5 py-1 rounded-full shrink-0">
                    {record.cohort.split(' ')[0]}
                  </span>
                </div>

                {/* Company & Role Card */}
                <div className="p-4 rounded-2xl bg-[#FFFFFF] group-hover:bg-[#F7F7F3] border border-[#E9E9E2] transition-colors mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] font-bold">
                      PLACED COMPANY
                    </span>
                    <span className="text-sm font-display font-black text-[#171918]">
                      {record.package}
                    </span>
                  </div>
                  <h5 className="text-lg font-display font-black text-[#171918] tracking-tight">
                    {record.company}
                  </h5>
                  <p className="text-xs font-mono font-bold text-[#0066FF] mt-0.5">
                    {record.placedRole}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-[#70736D]">
                    <MapPin className="w-3 h-3 text-[#171918]" />
                    <span>{record.location}</span>
                  </div>
                </div>

                {/* Capstone Defense */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] font-bold block">
                    CAPSTONE DEFENSE:
                  </span>
                  <p className="text-xs text-[#171918] font-medium leading-relaxed italic">
                    "{record.capstone}"
                  </p>
                </div>
              </div>

              {/* Verified Offer Footer */}
              <div className="mt-5 pt-4 border-t border-[#E9E9E2] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-[#171918] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Verified Offer</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-[#70736D] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E9E9E2]">
                  {record.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Placement Pledge Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#171A18] text-white border border-[#2D332F] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              HIRING INTEGRITY & PORTFOLIO RIGOR
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              No Gimmicks. Verifiable Systems Only.
            </h3>
            <p className="text-xs text-[#A0A5A2] leading-relaxed">
              We reject gimmicky "100% Job Guarantee" marketing. Top enterprises like Palantir, Microsoft, and Google Cloud hire our fellows because their capstones run live on cloud clusters with measurable latency and evaluation benchmarks.
            </p>
          </div>

          <button
            onClick={() => onOpenApply('placements-consultation')}
            className="px-6 py-3.5 rounded-full bg-[#C9F04A] text-[#171918] hover:bg-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Apply for Next Cohort
          </button>
        </div>

      </div>
    </section>
  );
}
