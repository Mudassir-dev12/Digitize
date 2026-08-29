"use client";

import { useEffect, useRef, useState } from "react";
import { soundManager } from "@/lib/sound";
import { Users, Headphones, Globe2, ShieldCheck, Sparkles, Check, Cpu, Layers, Terminal, Code2, Database, Server } from "lucide-react";

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

  // Team Engineering Specialties (No pictures)
  const teamSpecialties = [
    { label: "Cloud", icon: Cpu },
    { label: "WebGL", icon: Layers },
    { label: "AI/ML", icon: Sparkles },
    { label: "DevOps", icon: Terminal },
    { label: "Security", icon: ShieldCheck },
    { label: "FullStack", icon: Code2 },
    { label: "Database", icon: Database },
    { label: "Scale", icon: Server },
  ];

  // Client Avatars
  const clientAvatars = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  ];

  const timelineYears = ["1998", "2006", "2010", "2014", "2018", "2022", "2026"];

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              METRICS & GLOBAL SCALE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-white">FOOTPRINT</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm mt-4 md:mt-0">
            Proven software architecture, global enterprise reach, and uninterrupted mission-critical support.
          </p>
        </div>

        {/* Master Bento Grid Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= COLUMN 1: LEFT (Years of Experience & Project Completion) ================= */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Card 1: Years of Experience with Timeline Scale */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="relative flex-1 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              {/* Background Geometric Watermark Grid */}
              <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="white" strokeWidth="2" />
                  <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Timeline Scale Ruler (Right Edge) */}
              <div className="absolute top-6 right-6 bottom-6 flex flex-col justify-between items-end font-mono text-[10px] text-zinc-500/80 pointer-events-none select-none">
                {timelineYears.map((year, i) => (
                  <div key={year} className="flex items-center gap-1.5">
                    <span className={i === timelineYears.length - 1 ? "text-[#38BDF8] font-bold" : ""}>{year}</span>
                    <span className={`h-[1px] ${i === timelineYears.length - 1 ? "w-4 bg-[#38BDF8]" : "w-2 bg-zinc-700"}`} />
                  </div>
                ))}
              </div>

              <div className="relative z-10 pt-16">
                <div className="text-5xl sm:text-6xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                  <CountUpNumber target={25} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white mt-2 uppercase tracking-wide">
                  Years of experience
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Pioneering enterprise software & distributed cloud nodes.
                </p>
              </div>
            </div>

            {/* Card 2: Project Completion with Geometric Mesh Overlay */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden group min-h-[160px] flex flex-col justify-end"
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
                  <CountUpNumber target={6000} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white mt-1 uppercase tracking-wide">
                  Project Completion
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  High-velocity web apps, APIs & WebGL flagships.
                </p>
              </div>
            </div>

          </div>

          {/* ================= COLUMN 2: CENTER (Global Presence, Connected Core Node & 99%/24-7 Split) ================= */}
          <div className="md:col-span-4 flex flex-col gap-6 relative">
            
            {/* Card 3: Global Presence with Interactive Vector Dotted World Map */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group min-h-[260px]"
            >
              <div className="flex items-center justify-between z-10 relative">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Global presence
                </h3>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE NODES
                </span>
              </div>

              {/* Dotted Stylized World Map Graphic */}
              <div className="relative my-4 h-36 w-full flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 500 250" fill="none">
                  {/* Subtle Map Continents Dotted Grid */}
                  <g fill="rgba(255,255,255,0.25)">
                    {/* North America */}
                    <circle cx="100" cy="70" r="3" /><circle cx="120" cy="70" r="3" /><circle cx="140" cy="70" r="3" />
                    <circle cx="90" cy="90" r="3" /><circle cx="110" cy="90" r="3" /><circle cx="130" cy="90" r="3" />
                    <circle cx="150" cy="90" r="3" /><circle cx="100" cy="110" r="3" /><circle cx="120" cy="110" r="3" />
                    
                    {/* Europe */}
                    <circle cx="260" cy="70" r="3" /><circle cx="280" cy="70" r="3" /><circle cx="300" cy="70" r="3" />
                    <circle cx="250" cy="90" r="3" /><circle cx="270" cy="90" r="3" /><circle cx="290" cy="90" r="3" />

                    {/* Asia */}
                    <circle cx="350" cy="80" r="3" /><circle cx="370" cy="80" r="3" /><circle cx="390" cy="80" r="3" />
                    <circle cx="410" cy="80" r="3" /><circle cx="360" cy="100" r="3" /><circle cx="380" cy="100" r="3" />
                    <circle cx="400" cy="100" r="3" /><circle cx="420" cy="100" r="3" />
                    
                    {/* South America & Middle East */}
                    <circle cx="150" cy="160" r="3" /><circle cx="165" cy="180" r="3" /><circle cx="310" cy="120" r="3" />
                    <circle cx="325" cy="135" r="3" />
                  </g>

                  {/* Highlighted Cyan Active Nodes */}
                  <g fill="#38BDF8">
                    <circle cx="110" cy="90" r="5" className="animate-pulse" />
                    <circle cx="270" cy="90" r="5" className="animate-pulse" />
                    <circle cx="380" cy="100" r="5" className="animate-pulse" />
                    <circle cx="325" cy="135" r="5" className="animate-pulse" />
                  </g>

                  {/* Connecting Arc Lines */}
                  <path d="M110,90 Q 190,40 270,90" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M270,90 Q 325,50 380,100" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 z-10 relative">
                <span>US • UK • UAE • JP • PK</span>
                <span className="text-[#38BDF8]">5 Continents</span>
              </div>
            </div>

            {/* Card 4: Bottom Split Card (99% Satisfaction & 24/7 Support) */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Left Sub-Card: 99% Satisfaction */}
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="p-5 sm:p-6 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#38BDF8] transition-colors">
                    <CountUpNumber target={99} suffix="%" isVisible={isVisible} />
                  </div>
                  <div className="text-xs font-extrabold text-white mt-1 uppercase tracking-wider">
                    Customer Satisfaction
                  </div>
                </div>
              </div>

              {/* Right Sub-Card: 24/7 Customer Support */}
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="p-5 sm:p-6 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#5799EE]/10 border border-[#5799EE]/30 text-[#5799EE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#5799EE] transition-colors">
                    24/7
                  </div>
                  <div className="text-xs font-extrabold text-white mt-1 uppercase tracking-wider">
                    Customer Support
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================= COLUMN 3: RIGHT (Happy Clients & Team of Professionals) ================= */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Card 5: Happy Clients with Overlapping Avatars & Badge */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex items-center justify-between group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                  <CountUpNumber target={750} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-sm font-extrabold text-white mt-1 uppercase tracking-wide">
                  Happy Clients
                </div>
              </div>

              {/* Overlapping Client Avatars */}
              <div className="flex items-center">
                {clientAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-[#030508] overflow-hidden -ml-3 first:ml-0 shadow-lg"
                  >
                    <img src={src} alt="Client avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-[#38BDF8] text-slate-950 font-black text-xs flex items-center justify-center -ml-3 border-2 border-[#030508] shadow-lg">
                  ✓
                </div>
              </div>
            </div>

            {/* Card 6: Team of Professionals with Avatar Grid & Tech Layout */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="relative flex-1 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              {/* Background Square Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                  <CountUpNumber target={450} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white mt-1 uppercase tracking-wide">
                  Team of professionals
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Engineers, architects & WebGL specialists worldwide.
                </p>
              </div>

              {/* Team Engineering Specialty Domain Matrix (No headshot pictures) */}
              <div className="relative z-10 mt-6 grid grid-cols-4 gap-2">
                {teamSpecialties.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 transition-all duration-300 flex flex-col items-center justify-center text-center group/node"
                    >
                      <Icon className="w-4 h-4 text-zinc-400 group-hover/node:text-[#38BDF8] transition-colors mb-1" />
                      <span className="text-[9px] font-mono text-zinc-300 tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
