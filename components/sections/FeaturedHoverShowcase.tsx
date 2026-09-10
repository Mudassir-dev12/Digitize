"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { PROJECTS } from "@/lib/data";
import { soundManager } from "@/lib/sound";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "@/components/ui/ProjectModal";

export default function FeaturedHoverShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Synchronize display index on hover
  useEffect(() => {
    if (activeProjectIndex !== null) {
      setDisplayIndex(activeProjectIndex);
    }
  }, [activeProjectIndex]);

  // Track mouse movement inside container
  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  // Hardware-accelerated GSAP ticker with horizontal velocity rotation tilt for desktop
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (pos.current.x === 0 && pos.current.y === 0) {
      pos.current.x = window.innerWidth / 2;
      pos.current.y = window.innerHeight / 2;
      mouse.current.x = pos.current.x;
      mouse.current.y = pos.current.y;
    }

    const setX = gsap.quickSetter(card, "x", "px");
    const setY = gsap.quickSetter(card, "y", "px");
    const setRotation = gsap.quickSetter(card, "rotation", "deg");

    const ticker = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.12, gsap.ticker.deltaRatio());
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      pos.current.x += dx * dt;
      pos.current.y += dy * dt;

      const rotation = Math.max(-8, Math.min(8, dx * 0.12));

      setX(pos.current.x);
      setY(pos.current.y);
      setRotation(rotation);
    };

    gsap.ticker.add(ticker);
    return () => {
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <section
        id="work"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveProjectIndex(null)}
        className="relative w-full py-16 sm:py-28 px-4 sm:px-8 md:px-16 bg-[#060913] subtle-grid overflow-hidden border-b border-white/10 select-none"
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#1B449C]/10 rounded-full blur-[160px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div
            onMouseEnter={() => setActiveProjectIndex(null)}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white">PROJECTS</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm mt-3 md:mt-0">
              Explore flagship web applications & e-commerce platforms engineered by Digitize.
            </p>
          </div>

          {/* 1. DESKTOP VIEW ONLY (hidden md:flex) - Interactive Hover Typography List */}
          <div className="hidden md:flex flex-col">
            {PROJECTS.map((project, idx) => {
              const isHovered = activeProjectIndex === idx;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setActiveProjectIndex(idx);
                  }}
                  onMouseLeave={() => {
                    setActiveProjectIndex(null);
                  }}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedProject(project);
                  }}
                  className="group relative flex items-center justify-between py-8 sm:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 ease-out"
                >
                  {/* Row Hover Background Highlight */}
                  <div
                    className={`absolute inset-x-0 inset-y-0 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Left: Large Typography Project Name */}
                  <div className="relative z-10 flex items-center gap-6 transform group-hover:translate-x-6 sm:group-hover:translate-x-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-[#38BDF8] transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-zinc-600"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Right: Year, Category & Arrow Action */}
                  <div className="relative z-10 flex items-center gap-6 sm:gap-12">
                    <div className="hidden md:flex flex-col items-end text-right">
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-300">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-[#38BDF8] transition-colors duration-300 mt-1">
                        {project.client}
                      </span>
                    </div>

                    <span className="text-sm font-mono text-zinc-400 group-hover:text-white transition-colors duration-300">
                      {project.year}
                    </span>

                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-black flex items-center justify-center text-zinc-400 transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2. MOBILE VIEW ONLY (block md:hidden) - Sharp 1:1 Canvas Mobile Showcase Cards */}
          <div className="block md:hidden space-y-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedProject(project);
                }}
                className="group relative rounded-none glass-card border border-white/15 overflow-hidden bg-black/80 shadow-2xl flex flex-col justify-between"
              >
                {/* 1:1 Square Aspect Ratio Full Cover Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 uppercase tracking-wider rounded-none font-bold">
                      0{idx + 1}
                    </span>
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider rounded-none font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Top Right Year Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300 rounded-none">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#38BDF8] mb-2">
                      {project.client}
                    </p>
                    <p className="text-xs font-light text-zinc-300 leading-relaxed mb-4 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Mobile Metrics Chips */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {project.metrics[0] && (
                        <div className="px-2.5 py-1 rounded-none bg-white/[0.04] border border-white/10 text-[10px] font-mono text-emerald-400 font-bold">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </div>
                      )}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#38BDF8] text-black flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 1:1 Square Canvas Desktop GSAP Preview Follower Card (Sharp rounded-none border) */}
        <div
          ref={cardRef}
          className={`fixed top-0 left-0 pointer-events-none z-50 hidden md:block -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-out ${
            activeProjectIndex !== null
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Sharp Zero Border Radius 1:1 Square Box */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 aspect-square rounded-none border border-white/30 overflow-hidden bg-black shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
            <img
              src={PROJECTS[displayIndex].image}
              alt={PROJECTS[displayIndex].title}
              className="w-full h-full object-cover filter brightness-95 transform scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center text-white font-black text-[10px] sm:text-xs tracking-widest uppercase hover:scale-110 transition-transform">
                VIEW
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-mono font-bold tracking-wider truncate mr-2">
                {PROJECTS[displayIndex].title}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-none bg-black/80 text-[#38BDF8] border border-white/10 shrink-0">
                {PROJECTS[displayIndex].year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
