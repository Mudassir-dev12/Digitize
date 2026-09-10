"use client";

import { useState } from "react";
import { soundManager } from "@/lib/sound";
import {
  Eye,
  Store,
  Sparkles,
  Globe2,
  Compass,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Terminal,
} from "lucide-react";

interface VisionPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  quote: string;
  heroImage: string;
  cardImage: string;
  icon: any;
  metricValue: string;
  metricLabel: string;
  accentColor: string;
  gradient: string;
  features: string[];
  techStack: string[];
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80";

const VISION_PILLARS: VisionPillar[] = [
  {
    id: "corner-to-screen",
    number: "01",
    title: "Street Corner to Screen",
    tagline: "Equal Digital Power for Small Businesses",
    category: "LOCAL-TO-GLOBAL BRANDING",
    description:
      "To be the bridge that takes local dreams from the street corner to the screen — building a trusted network of digitally empowered local brands with the exact same digital power as big global corporations.",
    quote: "A world where every small business has the same digital power as the big brands.",
    heroImage: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&auto=format&fit=crop&q=80",
    icon: Store,
    metricValue: "99%",
    metricLabel: "Digital Presence Guarantee",
    accentColor: "#38BDF8",
    gradient: "from-[#38BDF8]/25 via-[#38BDF8]/5 to-transparent",
    features: [
      "Custom Storefront Web Apps",
      "Mobile-First Responsive Ordering",
      "Local SEO & Google Maps Sync",
      "Instant WhatsApp & Call Ordering",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "WhatsApp API"],
  },
  {
    id: "ecosystem-transformation",
    number: "02",
    title: "Bridging Traditional & Future Commerce",
    tagline: "Zero-Fluff E-Commerce Ecosystem",
    category: "DIGITAL TRANSFORMATION ENGINE",
    description:
      "Building an ecosystem where cutting-edge software and automated e-commerce bridge the gap between traditional retail hustle and the digital future — turning neighborhood stores into recognized online leaders.",
    quote: "Turning every neighborhood shop into a recognized, high-converting digital brand.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    icon: Sparkles,
    metricValue: "99.99%",
    metricLabel: "Seamless Brand Scaling",
    accentColor: "#A855F7",
    gradient: "from-[#A855F7]/25 via-[#A855F7]/5 to-transparent",
    features: [
      "Daraz & Shopify Full Automation",
      "Bespoke Visual Brand Identity",
      "Automated Inventory & POS Sync",
      "Sub-Second Page Load Performance",
    ],
    techStack: ["Shopify Liquid", "React 19", "Node.js", "PostgreSQL"],
  },
  {
    id: "digital-equity",
    number: "03",
    title: "Long-Term Digital Equity",
    tagline: "Scalable Growth Without Limits",
    category: "SMART BUSINESS SUSTAINABILITY",
    description:
      "To be the go-to technology partner for small and medium businesses transitioning into the digital marketplace, driving measurable revenue growth, customer retention, and long-term digital equity.",
    quote: "Empowering local retailers to start from zero and scale without limits.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    icon: Globe2,
    metricValue: "3.5x",
    metricLabel: "Average Revenue Expansion",
    accentColor: "#10B981",
    gradient: "from-[#10B981]/25 via-[#10B981]/5 to-transparent",
    features: [
      "Zero Technical Debt Architecture",
      "Automated Customer Loyalty Systems",
      "Data-Driven Growth Analytics",
      "24/7 Dedicated Technical Support",
    ],
    techStack: ["Vercel", "AWS Cloud", "GraphQL", "Python Analytics"],
  },
];

export default function Vision() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedPillarModal, setSelectedPillarModal] = useState<VisionPillar | null>(null);

  const activePillar = VISION_PILLARS[activeTab];

  return (
    <section
      id="vision"
      className="relative w-full py-24 sm:py-36 px-4 sm:px-8 md:px-12 bg-[#030508] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Continuous Ambient Glow Wave */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full blur-[200px] transition-all duration-1000 animate-pulse"
        style={{
          backgroundColor: `${activePillar.accentColor}15`,
        }}
      />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[160px]" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          {/* Cyberpunk Header Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-[#38BDF8]/40 mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.25)] animate-bounce-slow">
            <Eye className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase font-bold">
              DIGITIZE // OUR VISION FOR LOCAL BRANDS
            </span>
          </div>

          {/* Highlighted Vision Heading */}
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.05]">
              OUR{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-[#A855F7] drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                VISION
              </span>
            </h2>
            {/* Glowing Neon Underline */}
            <div className="w-full h-1.5 mt-3 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-[#A855F7] shadow-[0_0_20px_#38BDF8]" />
          </div>

          {/* Core Vision Statement Box */}
          <div className="relative p-6 sm:p-8 rounded-2xl glass-card border border-white/15 bg-white/[0.02] backdrop-blur-xl max-w-3xl shadow-2xl mt-2">
            <p className="text-sm sm:text-base md:text-lg font-mono text-zinc-200 leading-relaxed font-light">
              "To become the leading force behind the digital transformation of local businesses — turning every neighborhood store into a recognized online brand, and building an ecosystem where technology bridges the gap between traditional commerce and the digital future."
            </p>
          </div>

          {/* Interactive Vision Tab Selector */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {VISION_PILLARS.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#38BDF8] text-black shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Animated Vision Showcase Box */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 mb-16 p-6 sm:p-10 md:p-12 transition-all duration-700 shadow-[0_30px_90px_rgba(0,0,0,0.8)] group">
          {/* Animated Background Unsplash Image */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <img
              key={activePillar.id}
              src={activePillar.heroImage}
              alt={activePillar.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover filter brightness-[0.35] scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-[#030508]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent" />
          </div>

          {/* Top Status Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6 mb-8">
            <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest font-bold">
              ZERO TO UPGRADE // {activePillar.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              LOCAL STORE TRANSFORMATION
            </span>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.06] border border-white/15 text-[#38BDF8] font-mono text-xs font-bold">
                <Compass className="w-4 h-4" />
                <span>{activePillar.tagline}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {activePillar.title}
              </h3>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 border-l-4 border-l-[#38BDF8]">
                <p className="text-xs sm:text-sm font-mono text-zinc-200 italic">
                  "{activePillar.quote}"
                </p>
              </div>

              <p className="text-sm font-light text-zinc-300 leading-relaxed max-w-xl">
                {activePillar.description}
              </p>

              {/* Feature Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activePillar.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-200 backdrop-blur-md"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: activePillar.accentColor }}
                    />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedPillarModal(activePillar);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-6 py-3 rounded-xl bg-[#38BDF8] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover:bg-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                >
                  <span>Explore Transformation Blueprint</span>
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Telemetry Card */}
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-white/15 bg-black/70 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-zinc-400">DIGITIZE IMPACT</span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: activePillar.accentColor }}
                  >
                    UPGRADE PARADIGM
                  </span>
                </div>

                <div className="py-2">
                  <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight mb-1">
                    {activePillar.metricValue}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {activePillar.metricLabel}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                    <span>Offline to Online Readiness</span>
                    <span className="text-white">100% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: "100%",
                        backgroundColor: activePillar.accentColor,
                        boxShadow: `0 0 10px ${activePillar.accentColor}`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  Transformation Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activePillar.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VISION_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab(idx);
                }}
                onMouseEnter={() => {
                  soundManager.playHover();
                }}
                className={`group relative rounded-2xl glass-card border transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#38BDF8] shadow-[0_10px_40px_rgba(56,189,248,0.25)] scale-[1.02]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} transition-opacity duration-500 pointer-events-none ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                />

                {/* Top Image Preview */}
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  <img
                    src={pillar.cardImage}
                    alt={pillar.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/40 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 uppercase tracking-wider rounded-full font-bold">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#38BDF8]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h4 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed mb-6">
                      {pillar.quote}
                    </p>
                  </div>

                  {/* Bottom Metric */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-white font-mono group-hover:text-[#38BDF8] transition-colors">
                        {pillar.metricValue}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {pillar.metricLabel}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-[#38BDF8] group-hover:border-[#38BDF8] transition-all">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Blueprint Detail Modal */}
      {selectedPillarModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#090e1a] border border-white/20 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase">{selectedPillarModal.title}</h3>
                  <p className="text-xs font-mono text-zinc-400">{selectedPillarModal.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPillarModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-light text-zinc-300 leading-relaxed">
                {selectedPillarModal.description}
              </p>
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block font-bold">
                  Key Transformation Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPillarModal.features.map((f, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPillarModal(null)}
                className="px-6 py-2.5 rounded-xl bg-[#38BDF8] text-black font-mono text-xs font-bold uppercase tracking-wider"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
