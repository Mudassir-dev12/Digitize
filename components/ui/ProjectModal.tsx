"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { X, ExternalLink, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data";
import MagneticButton from "./MagneticButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const overlay = overlayRef.current;
    const modal = modalRef.current;
    if (!overlay || !modal) return;

    // Prevent body scroll when modal is open
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
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const handleClose = () => {
    const overlay = overlayRef.current;
    const modal = modalRef.current;
    if (!overlay || !modal) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
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
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e14] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] text-white p-6 sm:p-8 md:p-10 scrollbar-thin"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-blue/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-white/5 border border-white/10">
            CLIENT: {project.client}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-white/5 border border-white/10">
            RELEASE: {project.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          {project.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 mb-6 font-light leading-relaxed">
          {project.tagline}
        </p>

        {/* Hero Visual Mockup */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 border border-white/10 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10"
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
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet font-mono">
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
            <h3 className="text-sm font-mono text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> System Overview
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-brand-violet uppercase tracking-widest mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Engineering Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-1.5 shrink-0" />
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
              className="text-xs px-5 py-2.5"
            >
              Close Spec
            </MagneticButton>
            <MagneticButton
              variant="primary"
              href="#contact"
              onClick={handleClose}
              className="text-xs px-5 py-2.5"
            >
              Build Similar Platform <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
