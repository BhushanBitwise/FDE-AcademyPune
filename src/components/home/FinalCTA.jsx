import { ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA({ onOpenApply }) {
  return (
    <section className="py-24 bg-[#171A18] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#C9F04A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#252C28] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242A25] border border-[#374039] text-xs font-mono font-semibold text-[#C9F04A] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          PUNE FLAGSHIP ADMISSIONS OPEN
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
          Your Next Chapter in AI Engineering Starts Here.
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-[#A0A5A2] max-w-2xl mx-auto font-sans leading-relaxed">
          Build the skills. Solve real problems. Engineer what comes next.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApply}
            className="px-8 py-4 rounded-full bg-[#C9F04A] text-[#171918] hover:bg-[#b8dd3f] font-display font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg group"
          >
            <span>Apply Now for Next Cohort</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/918080152238?text=Hello%20FDE%20Academy%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20an%20admissions%20advisor."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#252C28] border border-[#374039] text-white hover:bg-[#2F3631] font-display font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#C9F04A]" />
            <span>Talk to Our Team on WhatsApp</span>
          </a>
        </div>

        {/* Small Trust Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-[#2A2E2C] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-xl font-display font-bold text-white">
              32 Weeks
            </span>
            <span className="text-[11px] font-mono text-[#858A87] uppercase">
              Immersive Depth
            </span>
          </div>
          <div>
            <span className="block text-xl font-display font-bold text-white">
              Pune, India
            </span>
            <span className="text-[11px] font-mono text-[#858A87] uppercase">
              Flagship Lab
            </span>
          </div>
          <div>
            <span className="block text-xl font-display font-bold text-white">
              1-on-1
            </span>
            <span className="text-[11px] font-mono text-[#858A87] uppercase">
              Practitioner Mentors
            </span>
          </div>
          <div>
            <span className="block text-xl font-display font-bold text-white">
              Live Cloud
            </span>
            <span className="text-[11px] font-mono text-[#858A87] uppercase">
              Production Capstone
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
