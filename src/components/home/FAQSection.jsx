import { useState } from 'react';
import { faqs } from '../../data/faqData';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E9E9E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#171918] tracking-tight">
            Clear, Transparent Answers.
          </h2>
          <p className="mt-4 text-base text-[#70736D] leading-relaxed">
            Everything you need to know about the Forward Deployed Engineering curriculum, cohort structure, prerequisites, and admissions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E9E9E2] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-bold text-[#171918]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-[#E9E9E2] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#171A18] text-[#C9F04A]' : 'bg-[#F7F7F3] text-[#171918]'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#70736D] leading-relaxed border-t border-[#E9E9E2]/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFFFFF] border border-[#E9E9E2] text-center space-y-2">
          <p className="text-sm font-display font-bold text-[#171918]">
            Still have questions about your specific background?
          </p>
          <p className="text-xs text-[#70736D]">
            Call our Pune admissions helpline at <a href="tel:+918087601850" className="font-mono text-[#171918] font-bold underline">+91 80876 01850</a> or message our advisors directly on <a href="https://wa.me/918080152238" target="_blank" rel="noopener noreferrer" className="font-mono text-[#171918] font-bold underline">WhatsApp (+91 80801 52238)</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
