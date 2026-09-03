"use client";

import { useEffect, useRef, useState } from "react";
import { soundManager } from "@/lib/sound";
import { Users, Headphones } from "lucide-react";

// Count Up Animation Component
function CountUpNumber({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="inline-flex items-baseline">
      <span>{count}</span>
      <span className="text-[#38BDF8] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function BentoStatsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Client Avatars
  const clientAvatars = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  ];

  const timelineYears = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#030508] border-y border-white/10 overflow-hidden select-none"
    >
      {/* Background Lighting Halos */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-blue/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-white">FOOTPRINT</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm mt-4 md:mt-0">
            Proven software architecture, client success, and uninterrupted mission-critical support.
          </p>
        </div>

        {/* Master Bento Grid Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: 7+ Years of Experience */}
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="md:col-span-6 relative p-6 sm:p-8 rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group min-h-[220px]"
          >
            {/* Background Geometric Watermark Grid */}
            <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
              <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="white" strokeWidth="2" />
                <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Timeline Scale Ruler */}
            <div className="absolute top-6 right-6 bottom-6 flex flex-col justify-between items-end font-mono text-[10px] text-zinc-500/80 pointer-events-none select-none">
              {timelineYears.map((year, i) => (
                <div key={year} className="flex items-center gap-1.5">
                  <span className={i === timelineYears.length - 1 ? "text-[#38BDF8] font-bold" : ""}>{year}</span>
                  <span className={`h-[1px] ${i === timelineYears.length - 1 ? "w-4 bg-[#38BDF8]" : "w-2 bg-zinc-700"}`} />
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-10">
              <div className="text-5xl sm:text-6xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                <CountUpNumber target={7} suffix="+" isVisible={isVisible} />
              </div>
              <div className="text-base sm:text-lg font-extrabold text-white mt-2 uppercase tracking-wide">
                Years of experience
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1 max-w-xs">
                Pioneering enterprise software & high-performance modern web solutions.
              </p>
            </div>
          </div>

          {/* Card 2: 150+ Happy Clients */}
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="md:col-span-6 relative p-6 sm:p-8 rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 group min-h-[220px]"
          >
            <div className="relative z-10">
              <div className="text-5xl sm:text-6xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                <CountUpNumber target={150} suffix="+" isVisible={isVisible} />
              </div>
              <div className="text-base sm:text-lg font-extrabold text-white mt-2 uppercase tracking-wide">
                Happy Clients
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1 max-w-xs">
                Trusted by startups, scale-ups, and global enterprise leaders.
              </p>
            </div>

            {/* Overlapping Client Avatars */}
            <div className="flex items-center self-start sm:self-center">
              {clientAvatars.map((src, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-[#030508] overflow-hidden -ml-3 first:ml-0 shadow-lg"
                >
                  <img src={src} alt="Client avatar" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#38BDF8] text-slate-950 font-black text-sm flex items-center justify-center -ml-3 border-2 border-[#030508] shadow-lg">
                ✓
              </div>
            </div>
          </div>

          {/* Card 3: 100+ Project Completion */}
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden group flex flex-col justify-between min-h-[200px]"
          >
            {/* Triangular / Hex Grid Background Mesh */}
            <div className="absolute right-0 bottom-0 w-48 h-32 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none">
                <path d="M0,120 L40,60 L80,120 L120,60 L160,120 L200,60" stroke="#38BDF8" strokeWidth="1" />
                <path d="M40,60 L80,0 L120,60 L160,0 L200,60" stroke="#38BDF8" strokeWidth="1" />
                <path d="M0,60 L40,0 L80,60" stroke="#38BDF8" strokeWidth="1" />
                <path d="M0,120 L200,120" stroke="#38BDF8" strokeWidth="1" />
                <path d="M0,60 L200,60" stroke="#38BDF8" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                <CountUpNumber target={100} suffix="+" isVisible={isVisible} />
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white mt-2 uppercase tracking-wide">
                Project Completion
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                High-velocity web apps, mobile apps, APIs & digital flagships.
              </p>
            </div>
          </div>

          {/* Card 4: 99% Customer Satisfaction */}
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between group min-h-[200px]"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] flex items-center justify-center mb-4">
              <Users className="w-5 h-5 animate-auto-bounce" />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#38BDF8] transition-colors">
                <CountUpNumber target={99} suffix="%" isVisible={isVisible} />
              </div>
              <div className="text-sm font-extrabold text-white mt-1 uppercase tracking-wider">
                Customer Satisfaction
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Committed to exceptional delivery and long-term client success.
              </p>
            </div>
          </div>

          {/* Card 5: 24/7 Customer Support */}
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between group min-h-[200px]"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#5799EE]/10 border border-[#5799EE]/30 text-[#5799EE] flex items-center justify-center mb-4">
              <Headphones className="w-5 h-5 animate-auto-wiggle" />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#5799EE] transition-colors">
                24/7
              </div>
              <div className="text-sm font-extrabold text-white mt-1 uppercase tracking-wider">
                Customer Support
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Round-the-clock technical guidance and maintenance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
