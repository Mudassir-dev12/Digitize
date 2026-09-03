"use client";

import { soundManager } from "@/lib/sound";
import { ArrowUpRight } from "lucide-react";

interface CollaborationItem {
  id: string;
  title: string;
  description: string;
}

const COLLABORATION_ITEMS: CollaborationItem[] = [
  {
    id: "affiliate-partners",
    title: "AFFILIATE PARTNERS",
    description: "Join our affiliate program to promote our best-in-class products.",
  },
  {
    id: "white-label-solutions",
    title: "WHITE LABEL SOLUTIONS",
    description: "Leverage our technology stack and customize your brand layouts.",
  },
  {
    id: "reseller-alliances",
    title: "IMPLEMENTATION & RESELLER ALLIANCES",
    description: "Become a trusted reseller partner with full technical support.",
  },
  {
    id: "joint-ventures",
    title: "INVESTMENT & JOINT VENTURES",
    description: "Join strategic partnerships that accelerate growth.",
  },
];

export default function CollaborationOpportunities() {
  return (
    <section
      id="collaboration"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#040714] overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 4 Partnership Items */}
          <div className="lg:col-span-6 flex flex-col gap-7 sm:gap-9">
            {COLLABORATION_ITEMS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative flex items-start gap-4 sm:gap-5 pl-4 sm:pl-5 border-l-4 border-[#38BDF8] hover:border-white transition-all duration-300 cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white uppercase tracking-wide group-hover:text-[#38BDF8] transition-colors duration-300 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-[#38BDF8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-zinc-400 mt-1 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Top-Aligned Kinetic Headline with Hand-Drawn Arrow & Star */}
          <div className="lg:col-span-6 flex flex-col justify-start relative pt-4 lg:pt-0 max-w-full">
            {/* Decorative Curved Arrow and Blue Star SVG */}
            <div className="absolute -top-12 right-2 sm:right-6 w-24 h-16 pointer-events-none select-none">
              <svg width="90" height="70" viewBox="0 0 100 80" fill="none">
                {/* Curved Arrow Path */}
                <path
                  d="M15,60 C35,15 70,10 75,30 C78,42 65,48 60,35"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Arrow Head */}
                <path d="M58,35 L66,32 L64,42 Z" fill="#38BDF8" />
                {/* Blue Star at top right */}
                <path
                  d="M85,12 L87,18 L94,18 L89,22 L91,28 L85,24 L79,28 L81,22 L76,18 L83,18 Z"
                  fill="#38BDF8"
                  className="animate-auto-bounce"
                />
              </svg>
            </div>

            {/* Kinetic Title Text - Aligned to Right Top */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#38BDF8] uppercase leading-[1.05] drop-shadow-[0_0_35px_rgba(56,189,248,0.25)] break-normal">
              COLLABORATION
              <span className="block text-white">OPPORTUNITIES</span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
