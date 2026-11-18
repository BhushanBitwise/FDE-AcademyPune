import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ChevronLeft } from 'lucide-react';

export default function LegalPage({ type = 'privacy' }) {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#70736D] hover:text-[#171918] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-8 sm:p-12 shadow-sm space-y-8">
          
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold bg-[#F7F7F3] px-3 py-1 rounded-full border border-[#E9E9E2]">
              LEGAL & GOVERNANCE
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#171918] mt-3">
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
            </h1>
            <p className="text-xs font-mono text-[#70736D] mt-1">
              Effective Date: November 2026 • FDE Academy Pune
            </p>
          </div>

          {isPrivacy ? (
            <div className="space-y-6 text-sm text-[#70736D] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  1. Information We Collect
                </h2>
                <p>
                  FDE Academy ("we", "our", or "the Academy") collects personal information including full name, email address, telephone/WhatsApp contact details, professional engineering experience, and technical repository links when you apply for cohorts, request a syllabus, or schedule an admissions consultation.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  2. Use of Information
                </h2>
                <p>
                  Your information is utilized solely for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Evaluating technical prerequisites and cohort eligibility.</li>
                  <li>Delivering syllabus materials, assessment tests, and consultation scheduling.</li>
                  <li>Admissions communication via voice calls, WhatsApp, and email.</li>
                  <li>Facilitating verified hiring network connections upon student consent.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  3. Data Protection & Non-Disclosure
                </h2>
                <p>
                  We do not sell, rent, or trade applicant personal data to third-party marketing brokers. All evaluation code and candidate interview artifacts are stored securely in compliance with the Digital Personal Data Protection Act (DPDP) and industry security best practices.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  4. Contact & Inquiries
                </h2>
                <p>
                  For any privacy-related requests or data deletion queries, please contact our admissions office in Pune at <a href="mailto:admissions@fde.academy" className="underline font-mono text-[#171918]">admissions@fde.academy</a> or by calling <a href="tel:+918087601850" className="underline font-mono text-[#171918]">+91 80876 01850</a>.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-sm text-[#70736D] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  1. Admissions & Enrollment Agreement
                </h2>
                <p>
                  Admission into FDE Academy programs is selective and contingent upon passing technical assessments and practitioner interviews. Enrolled students agree to uphold high standards of academic integrity, collaborative pod participation, and timely submission of sprint milestones.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  2. Intellectual Property of Student Capstones
                </h2>
                <p>
                  Students retain 100% intellectual property ownership of the original code, models, and architectures developed during their capstone projects, unless developed under a specific sponsored enterprise brief where alternative terms were signed prior to commencement.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  3. Transparent Career Support Policy
                </h2>
                <p>
                  FDE Academy provides rigorous interview clinics, portfolio packaging, and introductions to hiring partners. FDE Academy does not offer unconditional placement guarantees or make unverified salary promises. Final hiring decisions rest entirely with prospective employers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-display font-bold text-[#171918]">
                  4. Governing Law & Jurisdiction
                </h2>
                <p>
                  These terms are governed by the laws of India. Any disputes arising in connection with academic programs or academy services shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
                </p>
              </section>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
