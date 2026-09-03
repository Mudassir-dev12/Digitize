"use client";

import { useState } from "react";
import { soundManager } from "@/lib/sound";
import {
  ShoppingBag,
  Factory,
  Truck,
  Stethoscope,
  Rocket,
  Landmark,
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  tags: string[];
  accentColor: string;
  gradient: string;
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "fmcg-retail",
    title: "FMCG & Retail",
    category: "RETAIL & E-COMMERCE",
    description:
      "ERPs, asset management, and QR-linked packaging used in national retail chains.",
    icon: ShoppingBag,
    tags: ["ERP Systems", "Asset Management", "QR Packaging", "POS Integration"],
    accentColor: "#38BDF8",
    gradient: "from-[#38BDF8]/20 via-[#38BDF8]/5 to-transparent",
  },
  {
    id: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    category: "INDUSTRIAL AUTOMATION",
    description:
      "From raw material tracking to production and warehousing, we automate it all.",
    icon: Factory,
    tags: ["Raw Material Tracking", "Production Pipeline", "Warehouse Ops", "IoT Sensors"],
    accentColor: "#10B981",
    gradient: "from-[#10B981]/20 via-[#10B981]/5 to-transparent",
  },
  {
    id: "logistics-distribution",
    title: "Logistics & Distribution",
    category: "SUPPLY CHAIN & FLEET",
    description:
      "Smart supply chain solutions, multi-warehouse systems, and delivery tracking tools.",
    icon: Truck,
    tags: ["Supply Chain", "Multi-Warehouse", "Live GPS Tracking", "Fleet Telemetry"],
    accentColor: "#5799EE",
    gradient: "from-[#5799EE]/20 via-[#5799EE]/5 to-transparent",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    category: "CLINICAL & COMPLIANCE",
    description:
      "Custom solutions for inventory, medical asset tagging, and regulatory compliance reporting.",
    icon: Stethoscope,
    tags: ["Medical Asset Tagging", "Inventory Sync", "Compliance Audit", "Telemetry Portals"],
    accentColor: "#A855F7",
    gradient: "from-[#A855F7]/20 via-[#A855F7]/5 to-transparent",
  },
  {
    id: "tech-startups-saas",
    title: "Tech Startups & SaaS",
    category: "SCALABLE PLATFORMS",
    description:
      "From MVP builds to launch — Digitize is a full-cycle dev and growth partner.",
    icon: Rocket,
    tags: ["MVP Acceleration", "Scalable SaaS Code", "Growth Tech Stack", "Cloud Architecture"],
    accentColor: "#F59E0B",
    gradient: "from-[#F59E0B]/20 via-[#F59E0B]/5 to-transparent",
  },
  {
    id: "government-enterprise",
    title: "Government & Enterprise",
    category: "HIGH-SECURITY SYSTEMS",
    description:
      "High-security, scalable, fully managed custom platforms for sensitive operations.",
    icon: Landmark,
    tags: ["High-Security Auth", "Role Access Control", "Audit Logs", "Sensitive Workflows"],
    accentColor: "#3B82F6",
    gradient: "from-[#3B82F6]/20 via-[#3B82F6]/5 to-transparent",
  },
];

export default function IndustriesWeEmpower() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="industries-we-empower"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#030508] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambient Glow Halos */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-brand-blue/10 rounded-full blur-[180px]" />
      <div className="pointer-events-none absolute top-10 right-10 w-[450px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-4">
            Industries{" "}
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-white">
              we Empower
            </span>
          </h2>

          {/* Underline Cyan Glow Accent */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-indigo-500 rounded-full mb-6 shadow-[0_0_16px_#38BDF8]" />

          <p className="text-xs sm:text-base font-mono text-zinc-400 max-w-2xl leading-relaxed">
            Deep domain experience delivering tailored enterprise platforms, automation systems, and high-velocity digital products across key global industries.
          </p>
        </div>

        {/* 6 Industries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.map((industry) => {
            const Icon = industry.icon;
            const isHovered = activeId === industry.id;

            return (
              <div
                key={industry.id}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setActiveId(industry.id);
                }}
                onMouseLeave={() => setActiveId(null)}
                className="group relative rounded-lg glass-card border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between p-7 sm:p-8 min-h-[300px]"
              >
                {/* Interactive Dynamic Ambient Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Corner Decorative Circuit SVG Mesh */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity duration-500">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                    <circle cx="80" cy="20" r="16" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="36" x2="80" y2="80" stroke="white" strokeWidth="1" />
                    <line x1="36" y1="20" x2="64" y2="20" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                {/* Top Row: Icon Badge & Category */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  {/* Glowing Icon Badge Container */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-white shadow-lg"
                    style={{
                      boxShadow: `0 0 15px ${industry.accentColor}33`,
                    }}
                  >
                    <Icon className="w-7 h-7 animate-auto-bounce" style={{ color: industry.accentColor }} />
                  </div>

                  <span className="px-3 py-1 bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-wider rounded-full">
                    {industry.category}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-[#38BDF8] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom Tags & Explore Link */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-4">
                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {industry.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-zinc-400 rounded-md flex items-center gap-1 group-hover:border-white/20 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore Capability CTA Link */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-[#38BDF8] transition-colors pt-1">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Explore Industry Solutions</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#38BDF8]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
