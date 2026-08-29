"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface PartnerItem {
  name: string;
  role: string;
  badge: string;
  logoText: string;
  image: string;
  metric: string;
  tags: string[];
}

interface PartnerTier {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  partners: PartnerItem[];
}

const PARTNER_TIERS: PartnerTier[] = [
  {
    id: "cloud-infra",
    category: "CLOUD & EDGE INFRASTRUCTURE",
    badge: "SUB-10MS LATENCY",
    title: "Global Distributed Networks",
    description:
      "We partner with tier-1 cloud providers to deploy multi-region failover, edge routing, and automated Kubernetes clusters that sustain millions of concurrent requests.",
    metric: "99.999%",
    metricLabel: "Uptime Guarantee SLA",
    partners: [
      {
        name: "AWS Cloud",
        role: "Primary Compute & S3 Storage",
        badge: "ADVANCED TIER",
        logoText: "AWS",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        metric: "Multi-Region Cluster",
        tags: ["EC2", "S3", "Lambda"],
      },
      {
        name: "Vercel Enterprise",
        role: "Global Edge Network & SSR",
        badge: "PREMIUM ALLIANCE",
        logoText: "VERCEL",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        metric: "Edge Middleware",
        tags: ["Next.js 15", "Turbo", "SSR"],
      },
      {
        name: "Cloudflare Edge",
        role: "DDoS Mitigation & Workers",
        badge: "ENTERPRISE EDGE",
        logoText: "CLOUDFLARE",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        metric: "Sub-5ms Cache",
        tags: ["CDN", "WAF", "Workers"],
      },
      {
        name: "Google Cloud",
        role: "BigQuery Data Pipelines",
        badge: "CERTIFIED STACK",
        logoText: "GCP",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        metric: "Real-Time Telemetry",
        tags: ["BigQuery", "Pub/Sub", "K8s"],
      },
    ],
  },
  {
    id: "fintech-commerce",
    category: "GLOBAL FINTECH & COMMERCE",
    badge: "PCI-DSS LEVEL 1",
    title: "High-Volume Transaction Engines",
    description:
      "Integrating institutional-grade payment gateways, multi-currency checkout drawers, recurring subscription engines, and automated fraud prevention pipelines.",
    metric: "$500M+",
    metricLabel: "Annual GMV Processed",
    partners: [
      {
        name: "Shopify Plus",
        role: "Headless E-Commerce Engines",
        badge: "OFFICIAL PARTNER",
        logoText: "SHOPIFY",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        metric: "Headless Storefront",
        tags: ["Storefront API", "Liquid", "Cart"],
      },
      {
        name: "Stripe Global",
        role: "Institutional Payment API",
        badge: "VERIFIED INTEGRATION",
        logoText: "STRIPE",
        image:
          "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
        metric: "PCI Level 1",
        tags: ["Connect", "Billing", "Radar"],
      },
      {
        name: "Daraz Marketplace",
        role: "Regional Store Scaling & Logistics",
        badge: "PREFERRED ARCHITECT",
        logoText: "DARAZ",
        image: "/projects/media_1787931400183.png",
        metric: "Storefront SEO",
        tags: ["Seller Center", "Inventory", "Ads"],
      },
      {
        name: "PayPal Enterprise",
        role: "Cross-Border Settlement",
        badge: "TIER-1 GATEWAY",
        logoText: "PAYPAL",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        metric: "Global Settlement",
        tags: ["Checkout", "Vault", "Webhooks"],
      },
    ],
  },
  {
    id: "ai-data-systems",
    category: "AI ENGINE & DATA ARCHITECTURE",
    badge: "REAL-TIME TELEMETRY",
    title: "Intelligent Compute Pipelines",
    description:
      "Leveraging high-performance vector databases, GPU-accelerated AI models, and real-time WebSockets to deliver automated predictive intelligence at scale.",
    metric: "< 15ms",
    metricLabel: "Vector Retrieval Time",
    partners: [
      {
        name: "OpenAI Systems",
        role: "Custom LLM & Embeddings API",
        badge: "AI INTEGRATOR",
        logoText: "OPENAI",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        metric: "GPT-4o Embeddings",
        tags: ["LLM", "Embeddings", "Agents"],
      },
      {
        name: "NVIDIA AI",
        role: "WebGL Shader & GPU Accelerators",
        badge: "COMPUTE PARTNER",
        logoText: "NVIDIA",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        metric: "60FPS Shaders",
        tags: ["CUDA", "Three.js", "WebGL"],
      },
      {
        name: "PostgreSQL & Redis",
        role: "Distributed Cache & Persistence",
        badge: "HA DATABASE",
        logoText: "POSTGRES",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        metric: "P99 Sub-10ms",
        tags: ["PostgreSQL", "Redis", "Prisma"],
      },
      {
        name: "Supabase Realtime",
        role: "Edge Telemetry & Auth",
        badge: "STACK ARCHITECT",
        logoText: "SUPABASE",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        metric: "Realtime Sockets",
        tags: ["Auth", "Storage", "WebSockets"],
      },
    ],
  },
];

const GLOBAL_STATS = [
  {
    value: "150+",
    label: "Global Alliances",
    sub: "Enterprise API integrations",
    icon: Globe,
  },
  {
    value: "99.999%",
    label: "High Availability",
    sub: "Multi-region failover",
    icon: ShieldCheck,
  },
  {
    value: "50+",
    label: "Countries Reached",
    sub: "Global edge CDN routing",
    icon: Zap,
  },
  {
    value: "24/7",
    label: "Direct Dispatch",
    sub: "Principal engineer SLA",
    icon: TrendingUp,
  },
];

export default function Partnerships() {
  const [activeTier, setActiveTier] = useState<string>("cloud-infra");
  const { scrollTo } = useSmoothScroll();

  const selectedTier =
    PARTNER_TIERS.find((t) => t.id === activeTier) || PARTNER_TIERS[0];

  return (
    <section
      id="partnerships"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#060913] subtle-grid overflow-hidden border-t border-white/[0.08]"
    >
      {/* Ambient Cyber Neon Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[170px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[170px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              GLOBAL ECOSYSTEM // 04
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              Powering Global Growth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-400 to-white">
                Through Partnerships
              </span>
            </h2>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg font-light leading-relaxed">
            We engineer resilient software ecosystems backed by strategic alliances with industry-defining cloud infrastructure, global payment processors, and AI platforms.
          </p>
        </div>

        {/* Global Key Stat Badges Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {GLOBAL_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    // 0{idx + 1}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-bold text-zinc-200 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="block text-[11px] font-mono text-zinc-400 mt-1 font-light">
                    {stat.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tiered Showcase Tab Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-12 max-w-2xl mx-auto backdrop-blur-md">
          {PARTNER_TIERS.map((tier) => {
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`flex-1 py-2.5 px-4 rounded-full text-xs font-mono tracking-wider transition-all duration-300 select-none text-center ${
                  isActive
                    ? "bg-brand-blue text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {tier.id === "cloud-infra"
                  ? "CLOUD INFRA"
                  : tier.id === "fintech-commerce"
                  ? "FINTECH & COMMERCE"
                  : "AI & DATA"}
              </button>
            );
          })}
        </div>

        {/* Selected Partnership Tier Header */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-brand-blue/30 bg-[#0a0d1d]/90 shadow-[0_25px_70px_rgba(0,0,0,0.9)] mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-brand-blue uppercase tracking-widest font-bold">
                  {selectedTier.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                  {selectedTier.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {selectedTier.title}
              </h3>
            </div>

            {/* Metric Highlight Box */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="block font-mono text-2xl sm:text-3xl font-black text-brand-blue">
                  {selectedTier.metric}
                </span>
                <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  {selectedTier.metricLabel}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-blue">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl font-light">
            {selectedTier.description}
          </p>
        </div>

        {/* High-Resolution Visual Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {selectedTier.partners.map((partner, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 overflow-hidden bg-[#080b18] hover:border-brand-blue/60 transition-all duration-500 flex flex-col justify-between h-[380px] shadow-xl"
            >
              {/* High-Definition Background Image Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover object-center opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={90}
                />
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-[#060913]/30" />
              </div>

              {/* Card Top Pill & Status */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-blue border border-brand-blue/30 font-bold">
                  {partner.badge}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
              </div>

              {/* Card Bottom Meta */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-brand-blue uppercase tracking-widest block mb-1 font-bold">
                  {partner.metric}
                </span>
                <h4 className="text-xl font-extrabold text-white mb-1.5 group-hover:text-brand-blue transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs text-zinc-300 font-light mb-4 line-clamp-2">
                  {partner.role}
                </p>

                {/* Tech Tags Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {partner.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[9px] font-mono text-zinc-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider">
                    INTEGRATED STACK
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand-blue group-hover:text-black transition-all flex items-center justify-center text-white">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Partner Alliance Infinite Marquee Ticker */}
        <div className="rounded-2xl bg-black/60 border border-white/10 p-6 backdrop-blur-md mb-16 select-none overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              TRUSTED ENTERPRISE TECH STACK & ALLIANCES
            </span>
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest hidden sm:inline">
              // VERIFIED IN PRODUCTION
            </span>
          </div>

          <div className="flex overflow-hidden py-2">
            <div className="animate-marquee flex items-center gap-6 sm:gap-10 whitespace-nowrap">
              {[
                "AWS CLOUD",
                "VERCEL ENTERPRISE",
                "SHOPIFY PLUS",
                "STRIPE GLOBAL",
                "OPENAI SYSTEMS",
                "CLOUDFLARE EDGE",
                "NVIDIA AI",
                "POSTGRESQL",
                "SUPABASE",
                "DARAZ ENTERPRISE",
                "GOOGLE CLOUD",
                "REDIS ENTERPRISE",
              ].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-brand-blue/60 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-indigo/15 to-transparent border border-brand-blue/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest block mb-2 font-bold">
              JOIN OUR GLOBAL NETWORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Accelerate Your Enterprise Architecture?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light mt-1 max-w-xl">
              Connect directly with our Principal Systems Architects to deploy high-throughput, fault-tolerant infrastructure built for global scale.
            </p>
          </div>

          <MagneticButton
            variant="primary"
            onClick={() => scrollTo("#contact")}
            className="shrink-0 px-7 py-3.5 text-xs font-mono uppercase tracking-wider"
          >
            <span>Partner With Digitize</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
