"use client";

import { PARTNERS } from "@/lib/data";

export default function Marquee() {
  const extendedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full py-12 bg-[#08080a] border-y border-white/[0.08] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
          TRUSTED BY HIGH-GROWTH VENTURES & SYSTEM TEAMS
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-brand-blue/80 hidden sm:inline">
          [ DEPLOYED IN PRODUCTION ]
        </span>
      </div>

      {/* Primary Marquee Ribbon */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {extendedPartners.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/40 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="w-2 h-2 rounded-full bg-brand-blue/60 group-hover:bg-brand-blue group-hover:scale-125 transition-all" />
              <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 uppercase tracking-wider">
                {item.tier}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Reverse Marquee Ribbon */}
      <div className="flex overflow-hidden py-2 mt-2">
        <div className="animate-marquee-reverse flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {extendedPartners.map((item, idx) => (
            <div
              key={`rev-${item.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-brand-violet/40 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {item.name}
              </span>
              <span className="text-[8px] font-mono text-zinc-400">///</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
