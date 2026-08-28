"use client";

import { useEffect, useRef, useState } from "react";
import { soundManager } from "@/lib/sound";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sub: string;
}

const STATS: StatItem[] = [
  {
    id: "experience",
    target: 7,
    suffix: "+",
    label: "Years of Experience",
    sub: "Digital Architecture",
  },
  {
    id: "clients",
    target: 2,
    suffix: "K+",
    label: "Clients Worldwide",
    sub: "Global Impact",
  },
  {
    id: "ventures",
    target: 3,
    suffix: "+",
    label: "SaaS Ventures",
    sub: "Proprietary Products",
  },
  {
    id: "partners",
    target: 5,
    suffix: "+",
    label: "Global Partners",
    sub: "Tech Alliances",
  },
];

function CountUpNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
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

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 px-6 sm:px-12 bg-[#060913] subtle-grid border-y border-white/10 overflow-hidden select-none"
    >
      {/* Ambient Lighting Halo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1B449C]/15 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              onMouseEnter={() => soundManager.playHover()}
              className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#38BDF8]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Counter Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                <CountUpNumber target={stat.target} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Labels */}
              <h3 className="text-base sm:text-lg font-extrabold text-white mt-3 tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
