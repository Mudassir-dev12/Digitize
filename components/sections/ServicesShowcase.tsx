"use client";

import { useRef, useState } from "react";
import { soundManager } from "@/lib/sound";
import {
  BrainCircuit,
  Cpu,
  Layers,
  ShieldCheck,
  Code2,
  Terminal,
  Server,
  Sparkles,
  Zap,
  ArrowUpRight,
  Database,
  Cloud,
  Lock,
  Boxes,
} from "lucide-react";

interface TechItem {
  name: string;
  symbol: string;
  bg: string;
  textColor: string;
  border: string;
}

interface ServiceCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: any;
  iconColor: string;
  badgeBg: string;
  techs: TechItem[];
  colSpan: string;
}

const SERVICES: ServiceCardData[] = [
  {
    id: "ai-ml",
    title: "AI/ML Transformation & Neural Architecture",
    subtitle: "Drive intelligent business innovation with custom LLM pipelines, autonomous agents, and real-time vision models.",
    description: "Drive intelligent business innovation with custom LLM pipelines, autonomous agents, and real-time vision models.",
    category: "ARTIFICIAL INTELLIGENCE",
    icon: BrainCircuit,
    iconColor: "text-[#38BDF8]",
    badgeBg: "bg-[#38BDF8]/10 border-[#38BDF8]/30",
    colSpan: "md:col-span-6",
    techs: [
      { name: "PyTorch", symbol: "🔥", bg: "bg-orange-950/40", textColor: "text-orange-400", border: "border-orange-500/30" },
      { name: "Python", symbol: "🐍", bg: "bg-blue-950/40", textColor: "text-blue-400", border: "border-blue-500/30" },
      { name: "TensorFlow", symbol: "⚡", bg: "bg-amber-950/40", textColor: "text-amber-400", border: "border-amber-500/30" },
      { name: "OpenAI", symbol: "🤖", bg: "bg-cyan-950/40", textColor: "text-cyan-400", border: "border-cyan-500/30" },
      { name: "LangChain", symbol: "🔗", bg: "bg-emerald-950/40", textColor: "text-emerald-400", border: "border-emerald-500/30" },
    ],
  },
  {
    id: "cloud-native",
    title: "Cloud Native & High-Scale Systems",
    subtitle: "Architect fault-tolerant Kubernetes clusters, serverless backends, and low-latency global APIs.",
    description: "Architect fault-tolerant Kubernetes clusters, serverless backends, and low-latency global APIs.",
    category: "CLOUD INFRASTRUCTURE",
    icon: Server,
    iconColor: "text-[#5799EE]",
    badgeBg: "bg-[#5799EE]/10 border-[#5799EE]/30",
    colSpan: "md:col-span-6",
    techs: [
      { name: "AWS", symbol: "☁️", bg: "bg-amber-950/40", textColor: "text-amber-400", border: "border-amber-500/30" },
      { name: "Docker", symbol: "🐳", bg: "bg-sky-950/40", textColor: "text-sky-400", border: "border-sky-500/30" },
      { name: "Kubernetes", symbol: "☸️", bg: "bg-blue-950/40", textColor: "text-blue-400", border: "border-blue-500/30" },
      { name: "Go", symbol: "🐹", bg: "bg-cyan-950/40", textColor: "text-cyan-400", border: "border-cyan-500/30" },
      { name: "PostgreSQL", symbol: "🐘", bg: "bg-indigo-950/40", textColor: "text-indigo-400", border: "border-indigo-500/30" },
    ],
  },
  {
    id: "webgl-apps",
    title: "Full-Stack Web & 3D Digital Flagships",
    subtitle: "Engineer high-performance Next.js web applications, interactive WebGL experiences, and ultra-fluid design systems.",
    description: "Engineer high-performance Next.js web applications, interactive WebGL experiences, and ultra-fluid design systems.",
    category: "WEB ARCHITECTURE & 3D",
    icon: Layers,
    iconColor: "text-[#38BDF8]",
    badgeBg: "bg-[#38BDF8]/10 border-[#38BDF8]/30",
    colSpan: "md:col-span-12",
    techs: [
      { name: "React 19", symbol: "⚛️", bg: "bg-cyan-950/40", textColor: "text-cyan-400", border: "border-cyan-500/30" },
      { name: "Next.js 15", symbol: "▲", bg: "bg-zinc-900", textColor: "text-white", border: "border-white/20" },
      { name: "TypeScript", symbol: "TS", bg: "bg-blue-950/40", textColor: "text-blue-400", border: "border-blue-500/30" },
      { name: "Three.js", symbol: "🌐", bg: "bg-purple-950/40", textColor: "text-purple-400", border: "border-purple-500/30" },
      { name: "Tailwind CSS", symbol: "🎨", bg: "bg-teal-950/40", textColor: "text-teal-400", border: "border-teal-500/30" },
      { name: "Node.js", symbol: "🟢", bg: "bg-emerald-950/40", textColor: "text-emerald-400", border: "border-emerald-500/30" },
    ],
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#030508] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Ambient Halos */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/10 rounded-full blur-[170px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[400px] bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              SERVICES THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-white">EMPOWER YOU</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm mt-4 md:mt-0">
            Gain access to high-impact engineering services that drive exponential growth and fuel software success.
          </p>
        </div>

        {/* Bento Grid Services Layout (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isHovered = activeCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setActiveCard(service.id);
                }}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-500 flex flex-col justify-between group ${service.colSpan}`}
              >
                {/* Background Specular Highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top Section: Icon & Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${service.badgeBg} ${service.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-[#38BDF8]/20 group-hover:border-[#38BDF8]/40 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-light text-zinc-300 leading-relaxed mb-8 max-w-2xl">
                    {service.subtitle}
                  </p>
                </div>

                {/* Bottom Section: Technology App Badges Row (Matches reference image app icons!) */}
                <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap items-center gap-3">
                    {service.techs.map((tech) => (
                      <div
                        key={tech.name}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl ${tech.bg} border ${tech.border} shadow-lg hover:scale-105 transition-all duration-300 group/tech`}
                      >
                        <span className="text-base select-none">{tech.symbol}</span>
                        <span className={`text-xs font-mono font-bold ${tech.textColor}`}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
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
