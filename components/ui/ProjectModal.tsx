"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "./MagneticButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (!project) return;

    const overlay = overlayRef.current;
    const modal = modalRef.current;
    if (!overlay || !modal) return;

    // Pause Lenis background page scroll and lock body
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tl.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    ).fromTo(
      modal,
      { y: 60, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
      "-=0.2"
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const handleClose = () => {
    const overlay = overlayRef.current;
    const modal = modalRef.current;
    if (!overlay || !modal) {
      lenis?.start();
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        lenis?.start();
        onClose();
      },
    });

    tl.to(modal, { y: 30, opacity: 0, scale: 0.98, duration: 0.25, ease: "power2.in" })
      .to(overlay, { opacity: 0, duration: 0.2, ease: "power2.in" }, "-=0.15");
  };

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      data-lenis-prevent
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
    >
      <div
        ref={modalRef}
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0e0e14] border border-white/15 rounded-lg shadow-[0_25px_80px_rgba(0,0,0,0.8)] text-white p-6 sm:p-8 md:p-10 scrollbar-thin"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-20 w-10 h-10 glass-panel border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#38BDF8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-mono font-medium tracking-wider bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
            {project.category}
          </span>
          <span className="px-3 py-1 text-xs font-mono text-zinc-400 bg-white/5 border border-white/10">
            CLIENT: {project.client}
          </span>
          <span className="px-3 py-1 text-xs font-mono text-zinc-400 bg-white/5 border border-white/10">
            RELEASE: {project.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 uppercase">
          {project.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 mb-6 font-light leading-relaxed">
          {project.tagline}
        </p>

        {/* Hero Visual Mockup — Crystal-Sharp Original Resolution */}
        <div className="relative w-full overflow-hidden mb-8 border border-white/10 bg-black/50 flex flex-col items-center justify-center p-3 sm:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[520px] object-contain select-none"
          />

          <div className="w-full mt-4 flex flex-wrap gap-2 z-10 justify-start">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono bg-black/80 text-zinc-200 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#2563EB] font-mono">
                {m.value}
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider mt-1 uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Overview & Architecture Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-mono text-[#38BDF8] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> System Overview
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-[#38BDF8] uppercase tracking-widest mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Engineering Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-[#38BDF8] mt-1.5 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-zinc-400">
            Engineered with strict SLA & zero-downtime standard.
          </p>
          <div className="flex items-center gap-3">
            <MagneticButton
              variant="secondary"
              onClick={handleClose}
              className="text-xs px-5 py-2.5 rounded-none"
            >
              Close Spec
            </MagneticButton>
            <MagneticButton
              variant="primary"
              href="#contact"
              onClick={handleClose}
              className="text-xs px-5 py-2.5 rounded-none"
            >
              Build Similar Platform <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
