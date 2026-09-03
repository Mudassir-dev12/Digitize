"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe, QrCode } from "lucide-react";
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
          /* Cyber Dark Glassmorphic Card Edition */
          <div className="w-full h-full bg-gradient-to-br from-[#0b1329] via-[#0d1838] to-[#070b18] text-white p-6 sm:p-10 relative flex flex-col justify-between border border-[#1B449C]/40 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <DigitizeLogo variant="full" size="md" theme="dark" />
              <div className="px-3 py-1 rounded-full bg-[#1B449C]/20 border border-[#1B449C]/40 text-[10px] font-mono text-blue-400">
                EXECUTIVE PASS
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">
                  EXECUTIVE LEADERSHIP
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {STUDIO_INFO.founder}
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                  {STUDIO_INFO.founderTitle}
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs text-zinc-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{STUDIO_INFO.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span className="truncate">{STUDIO_INFO.email}</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{STUDIO_INFO.address}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DIGITIZE DIRECT ARCHITECTURE DISPATCH
              </span>
              <span>KARACHI, PAKISTAN</span>
            </div>
          </div>
        )}
      </TiltCard>
    </div>
  );
}
