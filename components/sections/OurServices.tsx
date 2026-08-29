"use client";

import { useState, useRef } from "react";
import { soundManager } from "@/lib/sound";
import {
  Code2,
  Smartphone,
  Globe,
  Sparkles,
  ShoppingBag,
  Store,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  accentColor: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    category: "ENTERPRISE ENGINEERING",
    description:
      "Bespoke backend architectures, microservices, and distributed software systems engineered for high throughput and zero downtime.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    icon: Code2,
    features: ["Distributed Systems", "Cloud Backends", "API Architecture", "Database Optimization"],
    accentColor: "#38BDF8",
    },
  {
    id: "app-development",
    title: "App Development",
    category: "MOBILE PLATFORMS",
    description:
      "Native iOS & Android mobile applications featuring butter-smooth 60fps animations, offline sync, and enterprise security.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    icon: Smartphone,
    features: ["iOS & Android", "React Native / Flutter", "Biometric Auth", "Push Notifications"],
    accentColor: "#5799EE",
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "WEB ARCHITECTURE & 3D",
    description:
      "High-impact Next.js web flagships, interactive Three.js WebGL experiences, and ultra-fluid responsive frontends.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    icon: Globe,
    features: ["Next.js 15 & React 19", "Three.js & WebGL", "SEO & Speed 100/100", "Tailwind Design Systems"],
    accentColor: "#38BDF8",
  },
  {
    id: "brand-zero-to-hero",
    title: "Brand Zero to Hero",
    category: "BRAND ELEVATION",
    description:
      "Complete brand transformation from scratch — brand strategy, visual identity design, pitch decks, and digital positioning.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80",
    icon: Sparkles,
    features: ["Visual Identity", "Design Systems", "Brand Positioning", "Marketing Collateral"],
    accentColor: "#A855F7",
  },
  {
    id: "daraz-store-management",
    title: "Daraz Store Management",
    category: "MARKETPLACE GROWTH",
    description:
      "End-to-end Daraz seller store management, listing optimization, campaign execution, inventory tracking, and ROI scaling.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    icon: ShoppingBag,
    features: ["Store Setup & Deco", "SEO Product Listings", "Campaign Ads Optimization", "Order & Inventory Sync"],
    accentColor: "#F97316",
  },
  {
    id: "shopify-store-management",
    title: "Shopify Store Management",
    category: "E-COMMERCE SCALING",
    description:
      "High-converting Shopify storefront customization, app integrations, CRO optimization, and automated fulfillment workflows.",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67414d59a8?w=800&auto=format&fit=crop&q=80",
    icon: Store,
    features: ["Custom Shopify Themes", "Conversion Rate (CRO)", "App & Payment Gateways", "Automated Workflows"],
    accentColor: "#10B981",
  },
];

export default function OurServices() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="our-services"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#030508] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambient Glow Halos */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-blue/10 rounded-full blur-[170px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[400px] bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              CAPABILITIES & SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#5799EE] to-white">SERVICES</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm mt-4 md:mt-0">
            End-to-end digital engineering, bespoke software development, brand elevation, and e-commerce store management.
          </p>
        </div>

        {/* 6 Services Cards Grid (Matching Exact Requested List) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = service.icon;
            const isHovered = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setActiveId(service.id);
                }}
                onMouseLeave={() => setActiveId(null)}
                className="group relative rounded-3xl glass-card border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Image Preview Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/30 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Floating Corner Icon Badge */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags List */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-[#38BDF8] transition-colors pt-2">
                      <span>Explore Capability</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
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
