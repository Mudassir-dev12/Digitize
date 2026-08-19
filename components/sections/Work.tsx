"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, Project } from "@/lib/data";
import ProjectModal from "@/components/ui/ProjectModal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, LayoutGrid, SlidersHorizontal, Cpu, ArrowRight } from "lucide-react";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"horizontal" | "grid">("horizontal");
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    gsap.registerPlugin(ScrollTrigger);

    // Only apply horizontal scroll on desktop and when viewMode is horizontal
    if (viewMode !== "horizontal" || window.innerWidth < 1024) {
      return () => {
        window.removeEventListener("resize", checkDesktop);
      };
    }

    const track = trackRef.current;
    const trigger = triggerRef.current;
    if (!track || !trigger) {
      return () => {
        window.removeEventListener("resize", checkDesktop);
      };
    }

    const totalScroll = track.scrollWidth - window.innerWidth + 200;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, trigger);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkDesktop);
    };
  }, [viewMode]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full bg-[#070709] border-t border-white/[0.08]"
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto pt-28 px-6 sm:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-blue">
              FEATURED PRODUCTIONS // 03
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            Engineered Flagships
          </h2>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setViewMode("horizontal")}
            className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
              viewMode === "horizontal"
                ? "bg-brand-blue text-black font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>PINNED STREAM</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
              viewMode === "grid" || !isDesktop
                ? "bg-brand-blue text-black font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>GRID MATRIX</span>
          </button>
        </div>
      </div>

      {/* Horizontal Pinned Container (Desktop Default) */}
      {viewMode === "horizontal" ? (
        <div ref={triggerRef} className="hidden lg:block w-full h-screen overflow-hidden relative">
          <div
            ref={trackRef}
            className="flex items-center gap-10 h-full pl-12 pr-32 select-none"
            style={{ width: "max-content" }}
          >
            {/* Intro Card */}
            <div className="w-[380px] h-[540px] rounded-3xl glass-card p-10 flex flex-col justify-between shrink-0 border border-white/10">
              <div>
                <span className="font-mono text-xs text-brand-blue uppercase tracking-widest block mb-4">
                  PORTFOLIO ARCHIVE
                </span>
                <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
                  Mission-Critical Digital Products.
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Every case study represents a high-throughput, bespoke implementation designed to handle high concurrency, cryptographic security, and flawless UX.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span>SCROLL HORIZONTALLY TO EXPLORE</span>
                <ArrowRight className="w-4 h-4 ml-1 text-brand-blue animate-bounce-x" />
              </div>
            </div>

            {/* Project Showcase Cards */}
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative w-[520px] h-[540px] rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-brand-blue/60 transition-all duration-500 cursor-pointer shrink-0 flex flex-col justify-between p-8"
                data-cursor="view"
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                    sizes="520px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/70 to-transparent" />
                </div>

                {/* Top Meta */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-blue border border-brand-blue/30">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    // 0{idx + 1}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-extrabold text-white mb-2 group-hover:text-brand-blue transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light mb-6 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metrics Badge Strip */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 mb-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <span className="block font-mono text-sm font-bold text-white">
                          {m.value}
                        </span>
                        <span className="block font-mono text-[9px] text-zinc-400 uppercase tracking-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Grid Mode (Mobile & Alternative Desktop View) */}
      <div className={`max-w-7xl mx-auto px-6 sm:px-12 pb-28 ${viewMode === "horizontal" ? "lg:hidden" : "block"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[480px] rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-brand-blue/60 transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 sm:p-8"
              data-cursor="view"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/70 to-transparent" />
              </div>

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-blue border border-brand-blue/30">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  // 0{idx + 1}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-brand-blue transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </h3>
                <p className="text-zinc-300 text-xs font-light mb-4 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <span className="block font-mono text-xs font-bold text-white">
                        {m.value}
                      </span>
                      <span className="block font-mono text-[8px] text-zinc-400 uppercase tracking-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
