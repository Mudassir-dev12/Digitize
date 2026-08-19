"use client";

import { useState } from "react";
import { SERVICES, Service } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";
import { Layers, Palette, Cpu, Sparkles, Smartphone, ShieldCheck, ArrowRight, Check, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="services"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#08080a] noise-bg overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-blue">
                ENGINEERING PILLARS // 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              Capabilities & Architecture
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            We provide end-to-end software execution from architectural discovery and custom GLSL rendering to enterprise cloud deployments.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SERVICES.map((service) => {
            const isSelected = activeService?.id === service.id;

            return (
              <TiltCard
                key={service.id}
                onClick={() => setActiveService(isSelected ? null : service)}
                className={`p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border transition-all duration-300 ${
                  isSelected
                    ? "border-brand-blue ring-1 ring-brand-blue/40 bg-white/[0.06]"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
                dataCursor="view"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-brand-blue font-bold px-2.5 py-1 rounded bg-brand-blue/10 border border-brand-blue/20">
                      // {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:text-brand-blue transition-colors">
                      {iconMap[service.icon] || <Layers className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-blue pt-4 border-t border-white/[0.06]">
                    <span>{isSelected ? "COLLAPSE SPEC" : "INSPECT SPEC"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? "rotate-180 text-brand-blue" : "text-zinc-500"
                      }`}
                    />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Selected Service Detailed Drawer */}
        {activeService && (
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-brand-blue/40 bg-[#0e0e14]/95 shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-fade-in mb-16">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs text-brand-blue uppercase tracking-widest block mb-2">
                  FULL SPECIFICATION // {activeService.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeService.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              <div className="lg:w-1/3 flex flex-col justify-center">
                <MagneticButton
                  variant="primary"
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-3.5 text-xs font-mono uppercase tracking-wider"
                >
                  <span>Request Proposal For This Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>

            {/* Deliverables Matrix */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                INCLUDED CORE DELIVERABLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-zinc-200"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
