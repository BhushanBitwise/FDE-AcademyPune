import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, CheckCircle2, ArrowRight, AlertCircle, Clock } from 'lucide-react';
import { programs } from '../data/programsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'forward-deployed-engineering',
    location: 'Pune',
    experienceYears: '1-3 years',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

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

    const progObj = programs.find(p => p.slug === formData.program);
    const progTitle = progObj ? progObj.title : formData.program;

    const text = `*New Application & Admissions Enquiry — FDE Academy Pune*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${progTitle}
Location: ${formData.location}
Experience: ${formData.experienceYears}
Message: ${formData.message || 'Requesting syllabus and admissions evaluation.'}`;

    const url = `https://wa.me/918080152238?text=${encodeURIComponent(text)}`;
    setWaLink(url);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#F7F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E9E9E2] inline-block mb-3">
            ADMISSIONS & CONSULTATION DESK
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#171918] tracking-tight">
            Connect with FDE Academy.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#70736D] leading-relaxed max-w-2xl mx-auto">
            Speak directly with our admissions committee and practitioner mentors. We are available via phone, WhatsApp, and in-person at our Pune campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Contact Info & Phone Lines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone numbers card */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 sm:p-8 shadow-xs space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
                OFFICIAL ADMISSIONS HELPLINES
              </span>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] block">
                      Primary Helpline
                    </span>
                    <a href="tel:+918087601850" className="text-base font-mono font-bold text-[#171918] hover:text-[#70736D] transition-colors flex items-center gap-2 mt-0.5">
                      <Phone className="w-4 h-4 text-[#171A18]" />
                      +91 80876 01850
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-[#171918] bg-[#C9F04A] px-2.5 py-0.5 rounded font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] block">
                      Admissions Officer
                    </span>
                    <a href="tel:+918080152238" className="text-base font-mono font-bold text-[#171918] hover:text-[#70736D] transition-colors flex items-center gap-2 mt-0.5">
                      <Phone className="w-4 h-4 text-[#171A18]" />
                      +91 80801 52238
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-[#70736D]">
                    VOICE & WA
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#E9E9E2] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736D] block">
                      Academic Director Desk
                    </span>
                    <a href="tel:+919850941120" className="text-base font-mono font-bold text-[#171918] hover:text-[#70736D] transition-colors flex items-center gap-2 mt-0.5">
                      <Phone className="w-4 h-4 text-[#171A18]" />
                      +91 98509 41120
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-[#70736D]">
                    DIRECT
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Pill */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918080152238?text=Hello%20FDE%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Forward%20Deployed%20Engineering%20and%20Applied%20AI%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 80801 52238)</span>
                </a>
              </div>
            </div>

            {/* Campus Address Card */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 sm:p-8 shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#70736D] font-bold">
                FLAGSHIP CAMPUS & LAB
              </span>
              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-5 h-5 text-[#171A18] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#171918]">
                    FDE Academy Pune
                  </h4>
                  <p className="text-xs text-[#70736D] mt-0.5 leading-relaxed">
                    Technology Corridor (Kalyani Nagar / Magarpatta), Pune, Maharashtra, India.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#70736D] pt-2">
                <Clock className="w-3.5 h-3.5 text-[#171918]" />
                <span>Admissions Hours: Monday – Saturday, 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

          </div>

          {/* Right: Functional Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#E9E9E2] p-6 sm:p-10 shadow-sm">
            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#70736D] font-semibold bg-[#F7F7F3] px-3 py-1 rounded-full border border-[#E9E9E2]">
                    Official Application Form
                  </span>
                  <h2 className="text-2xl font-display font-extrabold text-[#171918] tracking-tight mt-3">
                    Submit Application / Consultation Request
                  </h2>
                  <p className="text-xs text-[#70736D] mt-1 leading-relaxed">
                    Fill out your background details below. Our admissions desk will review your profile and initiate your consultation process.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Joshi"
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="vikram@example.com"
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
                        Your Location
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E9E9E2] text-sm text-[#171918] bg-[#F7F7F3] focus:outline-none focus:ring-2 focus:ring-[#171A18]"
                      >
                        <option value="Pune">Pune (India Flagship)</option>
                        <option value="Mumbai / Bengaluru / Delhi">Other India Metro</option>
                        <option value="Singapore">Singapore (APAC)</option>
                        <option value="Dubai">Dubai (UAE / GCC)</option>
                        <option value="International">International Remote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#171918] font-medium mb-1">
                      Engineering Background & Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your programming experience (Python, SQL, APIs) and what you want to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E9E9E2] text-sm text-[#171918] bg-[#F7F7F3] focus:outline-none focus:ring-2 focus:ring-[#171A18]"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="page-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#171A18] focus:ring-[#171A18] accent-[#171A18]"
                    />
                    <label htmlFor="page-consent" className="text-xs text-[#70736D] leading-tight">
                      I agree to receive communications, syllabus documentation, and admissions updates from FDE Academy.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-[11px] text-red-500">{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#171A18] text-white hover:bg-[#C9F04A] hover:text-[#171918] font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Submit Application & Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C9F04A]/30 text-[#171918] mx-auto flex items-center justify-center border border-[#C9F04A]">
                  <CheckCircle2 className="w-10 h-10 text-[#171918]" />
                </div>

                <div>
                  <h3 className="text-2xl font-display font-extrabold text-[#171918]">
                    Application Recorded
                  </h3>
                  <p className="text-xs text-[#70736D] mt-2 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your profile has been assigned to our admissions committee. Connect directly on WhatsApp for instant confirmation.
                  </p>
                </div>

                <div className="bg-[#F7F7F3] p-4 rounded-2xl border border-[#E9E9E2] text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                  <p><span className="text-[#70736D]">Program:</span> {formData.program}</p>
                  <p><span className="text-[#70736D]">Applicant:</span> {formData.fullName}</p>
                  <p><span className="text-[#70736D]">Phone:</span> {formData.phone}</p>
                  <p><span className="text-[#70736D]">Pune Helpline:</span> +91 80876 01850 / +91 80801 52238</p>
                </div>

                <div className="flex flex-col gap-3 max-w-md mx-auto">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Complete Submission on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#70736D] hover:text-[#171918] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
