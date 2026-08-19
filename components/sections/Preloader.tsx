"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE ENGINE...");
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statuses = [
      "INITIALIZING WEBGL 2.0 PIPELINE...",
      "ALLOCATING SHADER BUFFERS...",
      "HYDRATING COMPONENT STATE...",
      "SYSTEMS NOMINAL • READY",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current > 100) current = 100;
      setProgress(current);

      if (current < 30) setStatusText(statuses[0]);
      else if (current < 65) setStatusText(statuses[1]);
      else if (current < 95) setStatusText(statuses[2]);
      else setStatusText(statuses[3]);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          const container = containerRef.current;
          if (container) {
            const tl = gsap.timeline({
              onComplete: () => {
                onComplete();
              },
            });

            tl.to(textRef.current, {
              y: -30,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            })
              .to(
                container,
                {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                  duration: 0.8,
                  ease: "power4.inOut",
                },
                "-=0.1"
              );
          } else {
            onComplete();
          }
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-[#070709] flex flex-col items-center justify-center p-6 select-none"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div ref={textRef} className="w-full max-w-md flex flex-col items-start">
        {/* Studio Branding */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-4 h-4 rounded-sm bg-brand-blue animate-pulse shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            DIGITIZE ARCHITECTURE // SYSTEM LOAD
          </span>
        </div>

        {/* Big Counter */}
        <div className="flex items-baseline justify-between w-full mb-3">
          <span className="font-mono text-6xl sm:text-7xl font-extrabold text-white tracking-tighter">
            {progress < 10 ? `0${progress}` : progress}
            <span className="text-brand-blue text-3xl font-light">%</span>
          </span>
          <span className="font-mono text-xs text-brand-blue/80 tracking-widest uppercase">
            [ 60 FPS COMPILED ]
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Line */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
          <span>{statusText}</span>
          <span className="text-zinc-400">LOC: GLOBAL</span>
        </div>
      </div>
    </div>
  );
}
