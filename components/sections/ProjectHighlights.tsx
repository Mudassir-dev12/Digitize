"use client";

import { useState } from "react";
import { soundManager } from "@/lib/sound";
import {
  Building2,
  Wheat,
  Crown,
  ShoppingBag,
  HeartPulse,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface ProjectHighlightItem {
  id: string;
  client: string;
  subtitle: string;
  icon: any;
  description: string;
  productImage: string;
  category: string;
  accentColor: string;
}

const PROJECT_HIGHLIGHTS: ProjectHighlightItem[] = [
  {
    id: "lakhani-rice-mill",
    client: "Lakhani Rice Mill",
    subtitle: "GLOBAL RICE EXPORT & MILLS",
    icon: Wheat,
    description: "Architected end-to-end global supply chain tracking, automated export billing engine, and B2B distributor portal.",
    productImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80",
    category: "AgriTech & Supply Chain",
    accentColor: "#38BDF8",
  },
  {
    id: "ewaan-developers",
    client: "Ewaan Developers",
    subtitle: "GLOBAL AGENCY & REAL ESTATE",
    icon: Building2,
    description: "We provided digital marketing & enterprise engineering services for Ewaan Developers, focusing on global online reach.",
    productImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    category: "Real Estate & 3D WebGL",
    accentColor: "#5799EE",
  },
  {
    id: "croydon-dubai",
    client: "Croydon Luxury",
    subtitle: "DUBAI LUXURY APARTMENT",
    icon: Crown,
    description: "Crafted luxury concierge portal, resident mobile app, and automated multi-currency property booking infrastructure.",
    productImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
    category: "Hospitality & Mobile App",
    accentColor: "#A855F7",
  },
  {
    id: "apex-fmcg",
    client: "Apex Global FMCG",
    subtitle: "FMCG DISTRIBUTOR NETWORK",
    icon: ShoppingBag,
    description: "Built high-throughput inventory management API, retail order dispatch system, and POS syncing engine.",
    productImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    category: "Supply Chain & Retail POS",
    accentColor: "#F97316",
  },
  {
    id: "nova-healthcare",
    client: "Nova Health System",
    subtitle: "DIGITAL DIAGNOSTICS PLATFORM",
    icon: HeartPulse,
    description: "HIPAA-compliant telemedicine engine, real-time patient queue management, and lab analytics suite.",
    productImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    category: "HealthTech & Telemed",
    accentColor: "#10B981",
  },
  {
    id: "solaris-saas",
    client: "Solaris Cloud AI",
    subtitle: "ENTERPRISE SAAS SUITE",
    icon: Cpu,
    description: "Designed AI workflow automation dashboard, high-velocity analytics widgets, and stripe billing integration.",
    productImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    category: "Cloud SaaS & AI Systems",
    accentColor: "#38BDF8",
  },
];

export default function ProjectHighlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Duplicate items array to make marquee seamless infinite loop
  const marqueeItems = [...PROJECT_HIGHLIGHTS, ...PROJECT_HIGHLIGHTS];

  return (
    <section
      id="project-highlights"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#04060e] overflow-hidden border-t border-white/10"
    >
      {/* Background Specular Glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10 mb-12 sm:mb-16">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Project Highlights{" "}
            <span className="font-light italic text-[#38BDF8]">
              & Enterprise Impact
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl mt-3 leading-relaxed">
            From concept to commerce, DIGITIZE helps startups and enterprises turn ideas into scalable ventures.
          </p>
        </div>
      </div>

      {/* Interactive Infinite Marquee Container (Right to Left Animation) */}
      <div className="relative w-full overflow-hidden py-4 group">
        <div
          className={`flex gap-6 w-max animate-marquee ${
            hoveredId ? "[animation-play-state:paused]" : ""
          }`}
        >
          {marqueeItems.map((item, index) => {
            const isHovered = hoveredId === `${item.id}-${index}`;
            const Icon = item.icon;

            return (
              <div
                key={`${item.id}-${index}`}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setHoveredId(`${item.id}-${index}`);
                }}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-lg glass-card transition-all duration-500 cursor-pointer overflow-hidden select-none shrink-0 ${
                  isHovered
                    ? "w-[540px] sm:w-[600px] bg-[#0a1224]/95 border-2 border-[#38BDF8] shadow-[0_0_45px_rgba(56,189,248,0.4)] scale-[1.02]"
                    : "w-[260px] sm:w-[280px] bg-[#070b16]/90 border border-white/10 hover:border-[#38BDF8]/50"
                }`}
              >
                {isHovered ? (
                  /* Expanded Active Card View - Displays Product Image & Details */
                  <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 h-[250px] relative z-10">
                    {/* Left Column: Details & Brand Logo */}
                    <div className="flex-1 flex flex-col justify-between h-full pr-2">
                      <div>
                        {/* Logo & Category Tag */}
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-lg"
                            style={{ boxShadow: `0 0 14px ${item.accentColor}44` }}
                          >
                            <Icon className="w-5 h-5 animate-auto-bounce" style={{ color: item.accentColor }} />
                          </div>
                          <div>
                            <span
                              className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider block w-max"
                              style={{ backgroundColor: `${item.accentColor}20`, color: item.accentColor }}
                            >
                              {item.category}
                            </span>
                            <h3 className="text-lg font-black text-white tracking-tight leading-snug">
                              {item.client}
                            </h3>
                          </div>
                        </div>

                        {/* Description Text */}
                        <p className="text-xs text-zinc-300 leading-relaxed font-light mt-2 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Explore Link */}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#38BDF8] mt-2">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 text-[#38BDF8] animate-auto-float" />
                      </div>
                    </div>

                    {/* Right Column: High-Resolution Product Image Preview Container */}
                    <div className="w-full sm:w-[200px] h-[160px] rounded-lg bg-slate-950 border border-white/20 shrink-0 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={item.productImage}
                        alt={`${item.client} Product Showcase`}
                        className="w-full h-full object-cover rounded filter brightness-95 hover:brightness-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>
                  </div>
                ) : (
                  /* Collapsed Default Card View - Dark Glassmorphism Theme */
                  <div className="p-6 flex flex-col justify-between h-[250px] relative z-10">
                    {/* Brand Logo Container */}
                    <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#38BDF8] mb-4">
                      <Icon className="w-7 h-7 animate-auto-bounce" style={{ color: item.accentColor }} />
                    </div>

                    {/* Title & Subtitle Tag */}
                    <div>
                      <h3 className="text-lg font-black text-white tracking-tight mb-1 group-hover:text-[#38BDF8] transition-colors">
                        {item.client}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
