"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import HeroScene from "@/components/3d/HeroScene";
import CanvasContainer from "@/components/3d/CanvasContainer";
import MagneticButton from "@/components/ui/MagneticButton";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { ArrowDown, Sparkles, Terminal, ShieldCheck } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      titleRef.current?.children || [],
      { y: 60, opacity: 0, rotateX: 25 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        actionsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center justify-center pt-4 sm:pt-8 pb-12 px-4 sm:px-6 md:px-12 overflow-hidden noise-bg"
    >
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <CanvasContainer>
          <HeroScene />
        </CanvasContainer>
      </div>

      {/* Radial Glow Lighting Effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-violet/10 rounded-full blur-[120px]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Kinetic Hero Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] sm:leading-[1.05] mb-6 max-w-5xl"
          style={{ perspective: 1000 }}
        >
          <span className="block overflow-hidden">
            <span>WE ENGINEER</span>
          </span>
          <span className="block overflow-hidden">
            <span className="text-gradient-accent">DIGITAL FLAGSHIPS</span>
          </span>
          <span className="block overflow-hidden text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-300 font-extrabold">
            <span>& HIGH-IMPACT SOFTWARE.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-10"
        >
          We architect resilient cloud backends, ultra-fluid design systems, and interactive 3D WebGL experiences. Zero shortcuts, zero templates — pure software craftsmanship.
        </p>

        {/* Action Buttons */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center"
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollTo("#work")}
            className="w-full sm:w-auto px-8 py-4 text-sm uppercase font-mono tracking-wider"
          >
            <span>Explore Flagships</span>
            <ArrowDown className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            variant="glass"
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-8 py-4 text-sm uppercase font-mono tracking-wider"
          >
            <span>Schedule Architecture Call</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
