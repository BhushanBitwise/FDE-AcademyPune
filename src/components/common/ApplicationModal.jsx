import { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { programs } from '../../data/programsData';

export default function ApplicationModal({ isOpen, onClose, preselectedProgram = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: preselectedProgram || 'forward-deployed-engineering',
    location: 'Pune',
    experienceYears: '1-3 years',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.consent) {
      newErrors.consent = 'Consent is required to proceed';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedProgObj = programs.find(p => p.slug === formData.program);
    const progTitle = selectedProgObj ? selectedProgObj.title : formData.program;

    // Create structured message for WhatsApp handoff
    const text = `*New Application / Enquiry — FDE Academy Pune*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${progTitle}
Location: ${formData.location}
Experience: ${formData.experienceYears}
Note: ${formData.message || 'Interested in syllabus and admissions process.'}`;

    const waUrl = `https://wa.me/918080152238?text=${encodeURIComponent(text)}`;
    setGeneratedWhatsAppUrl(waUrl);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-[#70736D] hover:text-[#171918] hover:bg-[#F7F7F3] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3 py-1 rounded-full border border-[#E9E9E2]">
                Admissions Desk • Pune, India
              </span>
              <h2 id="modal-title" className="text-2xl font-display font-extrabold text-[#171918] tracking-tight mt-3">
                Apply for Next Cohort
              </h2>
              <p className="text-xs text-[#70736D] mt-1 leading-relaxed">
                Connect with our admissions committee. We review candidate experience, provide the detailed syllabus, and schedule your technical consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#171918] bg-[#F7F7F3] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#171A18] transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-[#E9E9E2]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                    Work / Personal Email *
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#171918] bg-[#F7F7F3] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#171A18] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#E9E9E2]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#171918] bg-[#F7F7F3] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#171A18] transition-all ${
                      errors.phone ? 'border-red-500' : 'border-[#E9E9E2]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                    Program of Interest
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E9E9E2] text-sm text-[#171918] bg-[#F7F7F3] focus:outline-none focus:ring-2 focus:ring-[#171A18]"
                  >
                    {programs.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                    Current Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E9E9E2] text-sm text-[#171918] bg-[#F7F7F3] focus:outline-none focus:ring-2 focus:ring-[#171A18]"
                  >
                    <option value="Pune">Pune (India Flagship)</option>
                    <option value="Bengaluru / Mumbai / Delhi">Other India Metro</option>
                    <option value="Singapore">Singapore (APAC)</option>
                    <option value="Dubai">Dubai (UAE / GCC)</option>
                    <option value="International">International Remote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                  Background / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us briefly about your current engineering stack or learning goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E9E9E2] text-sm text-[#171918] bg-[#F7F7F3] focus:outline-none focus:ring-2 focus:ring-[#171A18]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-[#171A18] focus:ring-[#171A18] accent-[#171A18]"
                />
                <label htmlFor="consent" className="text-xs text-[#70736D] leading-tight">
                  I agree to receive admissions updates, syllabus documentation, and consultation details from FDE Academy.
                </label>
              </div>
              {errors.consent && (
                <p className="text-[11px] text-red-500">{errors.consent}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-[#171A18] text-[#FFFFFF] hover:bg-[#C9F04A] hover:text-[#171918] font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Continue Application & Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-[#C9F04A]/30 text-[#171918] mx-auto flex items-center justify-center border border-[#C9F04A]">
              <CheckCircle className="w-8 h-8 text-[#171918]" />
            </div>

            <div>
              <h3 className="text-xl font-display font-extrabold text-[#171918]">
                Application Details Verified
              </h3>
              <p className="text-xs text-[#70736D] mt-1 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. To guarantee immediate review, connect directly with our admissions officer on WhatsApp or wait for our email response.
              </p>
            </div>

            <div className="bg-[#F7F7F3] p-4 rounded-2xl border border-[#E9E9E2] text-left text-xs space-y-1.5 font-mono">
              <p><span className="text-[#70736D]">Program:</span> {formData.program}</p>
              <p><span className="text-[#70736D]">Phone:</span> {formData.phone}</p>
              <p><span className="text-[#70736D]">Location:</span> {formData.location}</p>
              <p><span className="text-[#70736D]">Direct Helpline:</span> +91 80876 01850 / +91 80801 52238</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={generatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Admissions Chat Now</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#70736D] hover:text-[#171918] transition-colors"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
