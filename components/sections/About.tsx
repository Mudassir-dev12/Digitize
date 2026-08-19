"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { METRICS } from "@/lib/data";
import { Code2, Compass, ShieldAlert, Cpu, Sparkles, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Metrics reveal
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metricsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Feature cards reveal
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#0a0a0c] subtle-grid overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-brand-blue" />
          <span className="font-mono text-xs uppercase tracking-widest text-brand-blue">
            STUDIO PHILOSOPHY // 01
          </span>
        </div>

        {/* Big Kinetic Manifesto Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <h2
              ref={textRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              We reject generic templates. We build bespoke digital architecture with mathematical precision, deep systems thinking, and uncompromising design standards.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between border-l border-white/10 pl-6 sm:pl-8">
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
              Our studio is comprised solely of senior distributed systems engineers, creative WebGL technologists, and UI/UX architects. Every line of code is human-crafted, benchmarked for sub-millisecond execution, and built to scale to millions of users.
            </p>

            <MagneticButton
              variant="outline"
              onClick={() => scrollTo("#process")}
              className="self-start text-xs font-mono tracking-wider py-2.5 px-5"
            >
              <span>Our Engineering Protocol</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

        {/* Live Studio Metrics Grid */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl group-hover:bg-brand-blue/15 transition-colors" />
              <div className="relative z-10 flex flex-col">
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
                  {m.value}
                </span>
                <span className="text-sm font-semibold text-zinc-200 mb-1">
                  {m.label}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {m.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Studio Pillars */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="p-8 rounded-2xl glass-card border-white/[0.08] hover:border-brand-blue/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Type-Safe Architecture
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We engineer with end-to-end type safety, deterministic state machines, and microservices topologies that eliminate regression bugs before they hit staging.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border-white/[0.08] hover:border-brand-violet/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Sensory WebGL & Motion
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Custom GLSL fragment shaders, physics-based UI micro-interactions, and 60fps WebGL viewports that elevate digital products into unforgettable sensory experiences.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Zero-Downtime Resilience
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Automated multi-region failover, immutable container orchestration, and P99 latency SLAs that ensure your platform thrives under massive concurrent surges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
