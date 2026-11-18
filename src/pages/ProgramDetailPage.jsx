import { useParams, Link, Navigate } from 'react-router-dom';
import { programs } from '../data/programsData';
import { Clock, Award, CheckCircle2, ArrowRight, ShieldCheck, FileText, ChevronLeft, Sparkles, MessageSquare } from 'lucide-react';

export default function ProgramDetailPage({ onOpenApply }) {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const isConfirmed = program.status.includes('Confirmed');

  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Link */}
        <div className="mb-6">
          <Link
            to="/programs"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#70736D] hover:text-[#171918] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 sm:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#171A18] text-[#C9F04A] px-3 py-1 rounded-full">
                  PROGRAM {program.number}
                </span>
                <span className="text-xs font-mono text-[#70736D] bg-[#F7F7F3] px-3 py-1 rounded-full border border-[#E9E9E2]">
                  {program.category}
                </span>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                  isConfirmed ? 'bg-[#C9F04A] text-[#171918]' : 'bg-[#E9E9E2] text-[#70736D]'
                }`}>
                  {program.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
                {program.title}
              </h1>

              <p className="text-base sm:text-lg text-[#70736D] font-sans leading-relaxed">
                {program.tagline}
              </p>

              {/* Meta metrics */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#171918]">
                <div className="p-3 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[#70736D] block text-[10px] uppercase">Duration</span>
                  <span className="font-bold">{program.duration}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[#70736D] block text-[10px] uppercase">Format</span>
                  <span className="font-bold">{program.format}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2]">
                  <span className="text-[#70736D] block text-[10px] uppercase">Difficulty Level</span>
                  <span className="font-bold">{program.level}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Apply for this Program
                </button>
                <a
                  href={`https://wa.me/918080152238?text=Hello%20FDE%20Academy%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(program.title)}%20syllabus.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#FFFFFF] text-[#171918] border border-[#E9E9E2] hover:border-[#171918] font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Syllabus Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-[#E9E9E2] border border-[#E9E9E2] shadow-md">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* Content Split: Overview, Modules & Capstone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Box */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 shadow-sm">
              <h2 className="text-xl font-display font-bold text-[#171918] mb-4">
                Program Description & Scope
              </h2>
              <p className="text-sm text-[#70736D] leading-relaxed mb-6">
                {program.description}
              </p>

              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#171918] mb-3">
                Core Architectural Curriculum:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.keyTopics.map((topic, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-start gap-2 text-xs font-medium text-[#171918]">
                    <CheckCircle2 className="w-4 h-4 text-[#171A18] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights & Differentiators */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 shadow-sm">
              <h2 className="text-xl font-display font-bold text-[#171918] mb-4">
                Program Highlights & Methodology
              </h2>
              <ul className="space-y-3">
                {program.highlights.map((h, idx) => (
                  <li key={idx} className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E9E9E2] text-xs text-[#171918] flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C9F04A] text-[#171918] flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcome */}
            <div className="bg-[#171A18] text-white rounded-3xl p-8 border border-[#2D332F]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
                GRADUATION BENCHMARK
              </span>
              <h3 className="text-xl font-display font-bold mt-1 mb-2">
                Verified Career Outcome
              </h3>
              <p className="text-sm text-[#A0A5A2] leading-relaxed">
                {program.outcomes}
              </p>
            </div>

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Target Roles Card */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#70736D] font-bold mb-3">
                Target Roles & Career Outcomes
              </h4>
              <ul className="space-y-2">
                {program.targetRoles.map((role, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-[#F7F7F3] border border-[#E9E9E2] text-xs font-bold text-[#171918] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9F04A]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions Assistance Card */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 shadow-sm space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#70736D] font-bold">
                Admissions Desk Helpline
              </h4>
              <p className="text-xs text-[#70736D]">
                Speak directly with a practitioner about cohort dates, fees, and prerequisite checks.
              </p>

              <div className="space-y-1.5 text-xs font-mono">
                <a href="tel:+918087601850" className="block text-[#171918] font-bold hover:underline">
                  📞 +91 80876 01850
                </a>
                <a href="tel:+918080152238" className="block text-[#171918] font-bold hover:underline">
                  📞 +91 80801 52238
                </a>
              </div>

              <button
                onClick={onOpenApply}
                className="w-full py-2.5 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                Start Application
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
