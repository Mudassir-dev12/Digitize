"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import ContactParticles from "@/components/3d/ContactParticles";
import CanvasContainer from "@/components/3d/CanvasContainer";
import MagneticButton from "@/components/ui/MagneticButton";
import { useAudioFx } from "@/hooks/useAudioFx";
import { STUDIO_INFO } from "@/lib/data";
import ExecutiveBusinessCard from "@/components/ui/ExecutiveBusinessCard";
import { Send, CheckCircle2, Sparkles, Mail, MessageSquare, DollarSign, Calendar, Phone, MapPin, UserCheck, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Full-Stack Architecture"]);
  const [budgetTier, setBudgetTier] = useState<string>("$25k - $50k");
  const [timeline, setTimeline] = useState<string>("4 - 8 Weeks");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { playClick, playSuccess } = useAudioFx();

  const servicesList = [
    "Full-Stack Architecture",
    "UI/UX & Design Systems",
    "Cloud & Kubernetes DevOps",
    "Creative Tech & WebGL",
    "Mobile & Native Apps",
    "Technical Code Audit",
  ];

  const budgetList = ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];
  const timelineList = ["1 - 4 Weeks", "4 - 8 Weeks", "2 - 4 Months", "Ongoing Partnership"];

  const toggleService = (svc: string) => {
    playClick();
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();

      // Trigger Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#1d4ed8", "#3b82f6", "#60a5fa"],
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#060913] noise-bg overflow-hidden"
    >
      {/* Interactive 3D Particle WebGL Layer */}
      <CanvasContainer>
        <ContactParticles />
      </CanvasContainer>

      {/* Radial Gradient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              DIRECT DISPATCH // 07
            </span>
            <div className="w-8 h-px bg-blue-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
            Initiate Architecture Sprint
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light">
            Connect directly with executive leadership or transmit your project specification below.
          </p>
        </div>

        {/* Executive Business Card Interactive Component */}
        <div className="mb-14">
          <ExecutiveBusinessCard />
        </div>

        {/* Contact Container */}
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl glass-card border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
          {isSubmitted ? (
            <div className="text-center py-16 flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Sprint Brief Dispatched
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-md font-light mb-8">
                Thank you, {formData.name}. Our Principal Systems Architect is reviewing your requirements and will reach out via <span className="text-brand-blue font-mono">{formData.email}</span> shortly.
              </p>
              <MagneticButton
                variant="secondary"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono uppercase tracking-wider"
              >
                Submit Another Specification
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Select Disciplines */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 01 // SELECT REQUIRED CAPABILITIES
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {servicesList.map((svc) => {
                    const active = selectedServices.includes(svc);
                    return (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => toggleService(svc)}
                        className={`px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-200 ${
                          active
                            ? "bg-brand-blue text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                            : "bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-white/25 hover:bg-white/[0.08]"
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> 02 // ESTIMATED BUDGET TIER
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetList.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => {
                          playClick();
                          setBudgetTier(b);
                        }}
                        className={`p-3 rounded-xl text-xs font-mono transition-all duration-200 text-center ${
                          budgetTier === b
                            ? "bg-brand-violet text-white font-bold border-brand-violet shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                            : "bg-white/[0.03] text-zinc-400 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> 03 // TARGET LAUNCH TIMELINE
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelineList.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          playClick();
                          setTimeline(t);
                        }}
                        className={`p-3 rounded-xl text-xs font-mono transition-all duration-200 text-center ${
                          timeline === t
                            ? "bg-brand-blue text-black font-bold border-brand-blue shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                            : "bg-white/[0.03] text-zinc-400 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Info Fields */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> 04 // CONTACT DETAILS & SPECS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Company / Organization Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Describe your platform requirements, technical stack or architecture goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                  🔒 Encrypted submission. 24-hour SLA architecture response guaranteed.
                </span>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "DISPATCH BRIEF"}</span>
                  <Send className="w-4 h-4" />
                </MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
