"use client";

import { useState } from "react";
import { soundManager } from "@/lib/sound";
import {
  Target,
  ShoppingBag,
  CheckCircle2,
  ArrowUpRight,
  Award,
  Zap,
  Heart,
  Briefcase,
} from "lucide-react";

interface MissionVector {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  icon: any;
  kpiValue: string;
  kpiLabel: string;
  bulletPoints: string[];
  accentColor: string;
  gradient: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80";

const MISSION_VECTORS: MissionVector[] = [
  {
    id: "offline-to-online",
    title: "Offline Hustle to Online Success",
    category: "ASPIRATIONAL & EMPOWERMENT",
    tagline: "One Store, One Brand, One Upgrade",
    description:
      "We believe every local shopkeeper deserves a digital future. Our mission is to turn offline hustle into online success — giving small store owners the tools, technology, and confidence to compete with global brands.",
    heroImage: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&auto=format&fit=crop&q=80",
    icon: Heart,
    kpiValue: "Zero to 1",
    kpiLabel: "Seamless Transition",
    bulletPoints: [
      "Empowering Local Shopkeepers & Merchants",
      "Turning Street Corner Hustle into Online Brands",
      "Step-by-Step Guidance & Zero Technical Overhead",
    ],
    accentColor: "#EC4899",
    gradient: "from-[#EC4899]/25 via-[#EC4899]/5 to-transparent",
  },
  {
    id: "concise-punchy",
    title: "Zero to Full Digital Brand",
    category: "RAPID DIGITAL UPGRADE",
    tagline: "Complete Storefront Transformation",
    description:
      "We take local stores online — from zero to a full digital brand. Custom web presence, instant mobile ordering, automated payment setup, and social commerce integration delivered in record time.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    icon: Zap,
    kpiValue: "99%",
    kpiLabel: "Custom Storefront Code",
    bulletPoints: [
      "Instant WhatsApp & Online Order Systems",
      "High-Converting Web & Mobile Interfaces",
      "Sub-Second Page Load Speed",
    ],
    accentColor: "#38BDF8",
    gradient: "from-[#38BDF8]/25 via-[#38BDF8]/5 to-transparent",
  },
  {
    id: "e-commerce-infrastructure",
    title: "End-to-End E-Commerce & Growth",
    category: "DARAZ & SHOPIFY MANAGEMENT",
    tagline: "Marketplace Scaling Engine",
    description:
      "Delivering complete digital transformation solutions — e-commerce infrastructure, Daraz & Shopify store management, visual brand identity, and growth systems that convert local retail into scalable online powerhouses.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
    icon: ShoppingBag,
    kpiValue: "3x+",
    kpiLabel: "Order & Sales Growth",
    bulletPoints: [
      "Daraz Seller Store Decoration & Product SEO",
      "Custom Shopify Theme & Payment Setup",
      "Automated Inventory & Delivery Sync",
    ],
    accentColor: "#F97316",
    gradient: "from-[#F97316]/25 via-[#F97316]/5 to-transparent",
  },
  {
    id: "trusted-partner",
    title: "Go-To Tech Partner for SMBs",
    category: "LONG-TERM DIGITAL EQUITY",
    tagline: "Uncompromising Execution & Support",
    description:
      "To be the go-to technology partner for small and medium businesses transitioning into the digital marketplace, driving measurable revenue growth, customer retention, and long-term digital equity.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    icon: Briefcase,
    kpiValue: "24/7",
    kpiLabel: "Dedicated Partner Support",
    bulletPoints: [
      "Transparent Milestone Delivery & Sprints",
      "Real-Time Analytics & Growth Dashboards",
      "Guaranteed Post-Launch Maintenance",
    ],
    accentColor: "#10B981",
    gradient: "from-[#10B981]/25 via-[#10B981]/5 to-transparent",
  },
];

export default function Mission() {
  const [activeVectorIndex, setActiveVectorIndex] = useState<number>(0);

  const activeVector = MISSION_VECTORS[activeVectorIndex];

  return (
    <section
      id="mission"
      className="relative w-full py-24 sm:py-36 px-4 sm:px-8 md:px-12 bg-[#030508] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Continuous Ambient Glow Pulse */}
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[900px] h-[500px] rounded-full blur-[190px] transition-all duration-1000 animate-pulse"
        style={{
          backgroundColor: `${activeVector.accentColor}15`,
        }}
      />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-indigo-500/40 mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.25)] animate-bounce-slow">
            <Target className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase font-bold">
              DIGITIZE // OUR MISSION & COMMITMENT
            </span>
          </div>

          {/* Highlighted Mission Heading */}
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.05]">
              OUR{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-[#38BDF8] to-emerald-400 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
                MISSION
              </span>
            </h2>
            {/* Glowing Neon Underline */}
            <div className="w-full h-1.5 mt-3 rounded-full bg-gradient-to-r from-indigo-400 via-[#38BDF8] to-emerald-400 shadow-[0_0_20px_#6366F1]" />
          </div>

          {/* Core Mission Statement Box */}
          <div className="relative p-6 sm:p-8 rounded-2xl glass-card border border-white/15 bg-white/[0.02] backdrop-blur-xl max-w-3xl shadow-2xl mt-2">
            <p className="text-sm sm:text-base md:text-lg font-mono text-zinc-200 leading-relaxed font-light">
              "To empower local businesses and small store owners to transition from offline to online seamlessly — giving them the tools, technology, and digital presence needed to compete, grow, and thrive in the digital economy, starting from zero and scaling without limits."
            </p>
          </div>

          {/* Mission Vector Pill Selector */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {MISSION_VECTORS.map((vec, idx) => {
              const isActive = activeVectorIndex === idx;
              return (
                <button
                  key={vec.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveVectorIndex(idx);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{vec.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Split Animated Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Hero Unsplash Showcase Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden glass-card border border-white/15 p-8 sm:p-10 flex flex-col justify-between group min-h-[460px] shadow-2xl transition-all duration-700">
            {/* Background Unsplash Image */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
              <img
                key={activeVector.id}
                src={activeVector.heroImage}
                alt={activeVector.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover filter brightness-[0.35] scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/75 to-transparent" />
            </div>

            {/* Top Category Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-4 py-1.5 bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 uppercase tracking-wider rounded-full font-bold">
                {activeVector.category}
              </span>
              <div className="w-11 h-11 rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-indigo-400 shadow-lg">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-6 pt-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>{activeVector.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {activeVector.title}
              </h3>

              <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed max-w-xl">
                {activeVector.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2 border-t border-white/15">
                {activeVector.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-200">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: activeVector.accentColor }}
                    />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interactive Bento Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MISSION_VECTORS.map((vec, idx) => {
              const Icon = vec.icon;
              const isSelected = activeVectorIndex === idx;

              return (
                <div
                  key={vec.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveVectorIndex(idx);
                  }}
                  onMouseEnter={() => {
                    soundManager.playHover();
                  }}
                  className={`group relative rounded-2xl glass-card border transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between p-6 ${
                    isSelected
                      ? "border-indigo-400 shadow-[0_10px_40px_rgba(99,102,241,0.3)] scale-[1.02]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Image Header */}
                  <div className="relative h-28 w-full -mt-6 -mx-6 mb-5 overflow-hidden w-[calc(100%+3rem)] bg-black">
                    <img
                      src={vec.cardImage}
                      alt={vec.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/60 to-transparent" />

                    <div className="absolute top-3 left-4 z-10">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-mono text-zinc-200 uppercase tracking-wider rounded-md font-bold">
                        {vec.category.split("&")[0]}
                      </span>
                    </div>

                    <div className="absolute top-3 right-4 z-10 w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                        {vec.title}
                      </h4>
                      <p className="text-xs font-light text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                        {vec.description}
                      </p>
                    </div>

                    {/* KPI */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-black text-white font-mono group-hover:text-indigo-400 transition-colors">
                          {vec.kpiValue}
                        </div>
                        <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                          {vec.kpiLabel}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
