import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, MessageSquare, MapPin, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171A18] text-[#FFFFFF] pt-16 pb-12 border-t border-[#2A2E2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2A2E2C]">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9F04A] text-[#171918] flex items-center justify-center font-mono font-bold text-sm tracking-tighter">
                FDE
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  FDE <span className="text-[#C9F04A] font-semibold">ACADEMY</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A0A5A2] mt-0.5">
                  Pune Flagship • Singapore • Dubai
                </span>
              </div>
            </div>

            <p className="text-[#A0A5A2] text-sm leading-relaxed max-w-sm">
              Building the Next Generation of Forward Deployed Engineers. We train ambitious engineers to bridge business consulting, systems architecture, and production AI deployments.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs uppercase font-mono tracking-wider text-[#C9F04A] font-medium">
                Admissions & Consultation Direct Line
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <a href="tel:+918087601850" className="text-white hover:text-[#C9F04A] transition-colors flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#C9F04A]" />
                  +91 80876 01850
                </a>
                <a href="tel:+918080152238" className="text-white hover:text-[#C9F04A] transition-colors flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#C9F04A]" />
                  +91 80801 52238
                </a>
                <a href="tel:+919850941120" className="text-white hover:text-[#C9F04A] transition-colors flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#C9F04A]" />
                  +91 98509 41120
                </a>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/918080152238?text=Hello%20FDE%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Forward%20Deployed%20Engineering%20and%20Applied%20AI%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242A25] border border-[#374039] text-[#C9F04A] text-xs font-semibold uppercase tracking-wider hover:bg-[#C9F04A] hover:text-[#171918] transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Admissions Desk (+91 80801 52238)
              </a>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-semibold mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A0A5A2]">
              <li>
                <Link to="/programs/forward-deployed-engineering" className="hover:text-white transition-colors">
                  Forward Deployed Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs/applied-ai-engineering" className="hover:text-white transition-colors">
                  Applied AI Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs/agentic-ai-systems" className="hover:text-white transition-colors">
                  Agentic AI & Multi-Agent Pods
                </Link>
              </li>
              <li>
                <Link to="/programs/enterprise-rag-knowledge-systems" className="hover:text-white transition-colors">
                  Enterprise RAG & Knowledge Systems
                </Link>
              </li>
              <li>
                <Link to="/programs/ai-solutions-architecture" className="hover:text-white transition-colors">
                  AI Solutions Architecture
                </Link>
              </li>
              <li>
                <Link to="/programs/ai-driven-software-development" className="hover:text-white transition-colors">
                  AI-Driven Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A0A5A2]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Academy
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  32-Week Curriculum
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Career Pathways & Support
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Practitioner Leadership
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Pune Campus & Regional Hubs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Hubs & Accreditations Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-semibold mb-4">
              Locations & Verification
            </h4>
            <div className="space-y-4 text-sm text-[#A0A5A2]">
              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9F04A]" />
                  Pune, India (Flagship)
                </p>
                <p className="text-xs mt-0.5 text-[#858A87]">
                  Primary Campus, Executive Studios & FDE Research Labs
                </p>
              </div>
              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9F04A]" />
                  Singapore & Dubai
                </p>
                <p className="text-xs mt-0.5 text-[#858A87]">
                  Regional Markets & International Enterprise Liaison Corridors
                </p>
              </div>
              <div className="pt-2 border-t border-[#2A2E2C]">
                <p className="text-xs text-[#858A87] flex items-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C9F04A] shrink-0 mt-0.5" />
                  <span>
                    Practitioner-verified curriculum. Verified hiring-grade capstone defense model.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#858A87]">
          <div>
            © {currentYear} FDE Academy. All rights reserved. Forward Deployed Engineering Academy.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Admissions Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
