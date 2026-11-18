import { admissionSteps, eligibilityCriteria } from '../../data/generalData';
import { ArrowRight, CheckCircle2, ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function AdmissionProcess({ onOpenApply }) {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E9E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            SELECTION & CRITERIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            Rigorous, Merit-Based Admissions.
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            We evaluate candidates on technical potential, problem-solving tenacity, and communication clarity rather than pedigree alone.
          </p>
        </div>

        {/* 5-Step Admission Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {admissionSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-3xl bg-[#F7F7F3] border border-[#E9E9E2] flex flex-col justify-between hover:border-[#171918] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold bg-[#171A18] text-[#C9F04A] px-2.5 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#70736D]">
                    Stage 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-display font-bold text-[#171918] mb-2 leading-tight">
                  {step.name}
                </h4>
                <p className="text-xs text-[#70736D] leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E9E9E2] text-[10px] font-mono text-[#70736D]">
                {idx === 4 ? "Cohort Allotment" : "Pass Criteria Required"}
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Criteria Block */}
        <div className="bg-[#171A18] text-white rounded-3xl p-8 sm:p-12 border border-[#2D332F]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-bold">
              PREREQUISITES & ELIGIBILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold mt-1">
              What We Expect from Candidates
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A5A2] mt-2 leading-relaxed">
              FDE Academy is an intensive engineering studio, not an introductory programming bootcamp. You must be comfortable with core development tools before joining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityCriteria.map((item, cIdx) => (
              <div key={cIdx} className="p-5 rounded-2xl bg-[#222724] border border-[#2F3631] space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9F04A] shrink-0" />
                  <h4 className="text-sm font-display font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#A0A5A2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2F3631] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#A0A5A2]">
              Unsure if your background matches? Request a preliminary portfolio review.
            </p>
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-full bg-[#C9F04A] text-[#171918] hover:bg-[#b8dd3f] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              Verify Eligibility with Admissions
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
