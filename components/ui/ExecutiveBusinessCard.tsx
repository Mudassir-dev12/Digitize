"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, QrCode, ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";
import DigitizeLogo from "./DigitizeLogo";
import { STUDIO_INFO } from "@/lib/data";

export default function ExecutiveBusinessCard() {
  const [viewMode, setViewMode] = useState<"card" | "dark">("card");

  return (
    <div className="w-full flex flex-col items-center">
      {/* View Mode Toggle Controls */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-6 backdrop-blur-md">
        <button
          onClick={() => setViewMode("card")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
            viewMode === "card"
              ? "bg-[#1B449C] text-white font-bold shadow-[0_0_15px_rgba(27,68,156,0.6)]"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Official Business Card
        </button>
        <button
          onClick={() => setViewMode("dark")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
            viewMode === "dark"
              ? "bg-[#1B449C] text-white font-bold shadow-[0_0_15px_rgba(27,68,156,0.6)]"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Cyber Dark Edition
        </button>
      </div>

      {/* Interactive Business Card */}
      <TiltCard className="w-full max-w-3xl aspect-[1.75/1] min-h-[340px] sm:min-h-[380px] rounded-lg overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 relative group">
        {viewMode === "card" ? (
          /* Official Print Business Card Aesthetic (Exact replica of user's image) */
          <div className="w-full h-full bg-[#FAFAFC] text-slate-900 p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden select-none border border-slate-200">
            {/* Background Watermark Logo Emblem */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.07] pointer-events-none">
              <DigitizeLogo variant="icon" size="xl" className="w-full h-full" />
            </div>

            {/* Geometric Royal Blue Folding Ribbons (Exact angles from image 2) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 800 450"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Main Blue Chevron Band Left to Right */}
              <path
                d="M -10 130 L 260 130 L 400 270 L 260 460 L -10 460 Z"
                fill="#1B449C"
              />
              <path
                d="M -10 155 L 245 155 L 375 285 L 245 460 L -10 460 Z"
                fill="#FAFAFC"
              />
              {/* Outer Diagonal Accent Band */}
              <path
                d="M 240 0 L 370 0 L 490 460 L 360 460 Z"
                fill="#1B449C"
                opacity="0.95"
              />
              <path
                d="M 760 -10 L 820 -10 L 820 460 L 740 460 Z"
                fill="#1B449C"
                opacity="0.9"
              />
            </svg>

            {/* Content Overlay */}
            <div className="relative z-10 grid grid-cols-12 h-full gap-4">
              {/* Left Column: Founder & CEO Header */}
              <div className="col-span-12 sm:col-span-5 flex flex-col justify-between">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B449C]"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {STUDIO_INFO.founder}
                  </h2>
                  <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-900 uppercase mt-1">
                    {STUDIO_INFO.founderTitle}
                  </p>
                  <div className="flex items-center gap-1 mt-2 w-28">
                    <div className="h-[2px] bg-[#1B449C] flex-1" />
                    <div className="w-1.5 h-1.5 bg-[#1B449C] rounded-full" />
                  </div>
                </div>

                {/* Bottom Left: Authentic QR Code */}
                <div className="mt-4 sm:mt-0 p-1.5 bg-white rounded-xl border border-[#1B449C]/40 shadow-md inline-block w-24 h-24 relative">
                  <div className="w-full h-full bg-slate-950 p-1 rounded-lg flex flex-col items-center justify-center text-white">
                    <QrCode className="w-12 h-12 text-white" />
                    <span className="text-[6px] font-mono text-slate-300 mt-0.5 uppercase tracking-wider font-bold">
                      VERIFIED DISPATCH
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Contact Info List */}
              <div className="col-span-12 sm:col-span-7 flex flex-col justify-center gap-3 pl-0 sm:pl-4">
                {/* Phone */}
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1B449C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-[#1B449C] pl-2.5">
                    <span className="text-xs sm:text-sm font-black text-slate-900 font-sans tracking-wide block">
                      {STUDIO_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1B449C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-[#1B449C] pl-2.5">
                    <span className="text-xs sm:text-sm font-black text-slate-900 font-sans tracking-wide truncate block max-w-[210px] sm:max-w-none">
                      {STUDIO_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a
                  href={STUDIO_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1B449C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-[#1B449C] pl-2.5">
                    <span className="text-xs sm:text-sm font-black text-slate-900 font-sans tracking-wide block">
                      {STUDIO_INFO.website}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1B449C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="border-l-2 border-[#1B449C] pl-2.5">
                    <span className="text-xs sm:text-xs font-bold text-slate-900 font-sans leading-tight block">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Cyber Dark Edition - Inspired by CEO Showcase Banner */
          <div className="w-full h-full bg-gradient-to-br from-[#06102b] via-[#091538] to-[#040817] text-white p-4 sm:p-6 lg:p-8 relative flex flex-col justify-between border border-blue-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Radial glow behind image */}
            <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-radial from-[#1e4cd8]/50 via-[#1636a0]/25 to-transparent rounded-full blur-[70px]" />
            <div className="pointer-events-none absolute top-0 right-0 w-[240px] h-[240px] bg-[#2563eb]/10 rounded-full blur-[80px]" />

            <div className="relative z-10 grid grid-cols-12 h-full gap-4 items-center">
              {/* Left Column: Cutout CEO Photo */}
              <div className="col-span-5 sm:col-span-4 h-full relative flex items-end justify-center">
                <div className="relative w-full h-[85%] sm:h-[95%] flex items-end justify-center">
                  <Image
                    src="/ceo.png"
                    alt="Madni Silat - Founder and CEO digitize"
                    width={935}
                    height={1024}
                    className="max-h-full w-auto object-contain object-bottom drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
                  />
                </div>
              </div>

              {/* Right Column: Information & Quote */}
              <div className="col-span-7 sm:col-span-8 flex flex-col justify-between h-full py-1 sm:py-2 pl-2 sm:pl-4">
                <div>
                  <div className="w-10 h-1 bg-[#2563eb] rounded-full mb-2 sm:mb-3 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wide leading-tight">
                    {STUDIO_INFO.founder}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#38bdf8] tracking-wide mt-0.5 sm:mt-1">
                    Founder and CEO digitize
                  </p>

                  <p className="hidden sm:block text-[11px] lg:text-xs text-slate-300 font-light mt-3 leading-relaxed max-w-md line-clamp-3">
                    It&apos;s about creating meaningful impact. Over the past 7 years, I&apos;ve worked with founders, corporations, and industries to build systems that go beyond expectations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-2 pt-2 border-t border-white/10">
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2a6b] hover:bg-[#123687] border border-[#2563eb]/50 text-white text-[11px] sm:text-xs font-mono transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] w-fit"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0">
                      <Mail className="w-2.5 h-2.5" />
                    </span>
                    <span className="truncate max-w-[140px] sm:max-w-none">{STUDIO_INFO.email}</span>
                  </a>

                  <p className="text-[8px] sm:text-[9px] font-bold italic tracking-widest text-[#38bdf8]/60 uppercase text-right leading-tight hidden xs:block">
                    WE DON&apos;T BUILD PROJECTS.
                    <br />
                    WE BUILD PLATFORMS THAT POWER THE FUTURE
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </TiltCard>
    </div>
  );
}
