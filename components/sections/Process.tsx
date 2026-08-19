"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/data";
import { Check, Clock, GitBranch } from "lucide-react";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const ctx = gsap.context(() => {
      // Animate vertical progress line
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Stagger animate each step item
      const stepItems = section.querySelectorAll(".process-item");
      stepItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#09090c] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-blue">
              SYSTEM ROADMAP // 04
            </span>
            <div className="w-8 h-px bg-brand-blue" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
            Engineering Protocol
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light">
            Our structured 6-phase agile delivery framework guarantees zero regressions, predictable sprint velocity, and rock-solid code quality.
          </p>
        </div>

        {/* Timeline Track with Connecting Path */}
        <div className="relative pl-6 sm:pl-12 border-l border-white/10">
          {/* Active Glowing Scroll Line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-brand-blue via-brand-violet to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          />

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="process-item relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Step Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-[#09090c] border-2 border-brand-blue/60 group-hover:border-brand-blue flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] hover:border-brand-blue/40 transition-all duration-300">
                  {/* Top Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-brand-blue px-2.5 py-1 rounded bg-brand-blue/10 border border-brand-blue/20">
                        {step.step}
                      </span>
                      <span className="font-mono text-xs text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {step.duration}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-zinc-400">
                      STEP // 0{idx + 1} OF 06
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-brand-violet mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-brand-blue" /> KEY DELIVERABLES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-zinc-300"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
