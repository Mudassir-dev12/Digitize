"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Check, Copy, Sparkles, ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";
import { soundManager } from "@/lib/sound";

export default function CeoShowcase() {
  const [copied, setCopied] = useState(false);

  const email = STUDIO_INFO.email || "Infodigitizepk@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    soundManager.playClick();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="leadership"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#030611] overflow-hidden"
    >
      {/* Anchor for Navbar #team and #leadership links */}
      <div id="team" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Background Ambience & Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Subtle section label */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-blue-400 font-semibold">
            Executive Leadership & Vision
          </span>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        </div>

        {/* Master Showcase Banner Card (Exact Replica of Reference Design) */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-[#06102b] via-[#091538] to-[#040817] shadow-[0_20px_70px_rgba(4,10,35,0.85)] transition-all duration-500 group">
          
          {/* Intense Radial Glow Behind CEO Image */}
          <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-[#1e4cd8]/45 via-[#1636a0]/25 to-transparent rounded-full blur-[90px]" />
          
          {/* Corner Light Accents */}
          <div className="pointer-events-none absolute top-0 right-0 w-[350px] h-[350px] bg-[#2563eb]/10 rounded-full blur-[110px]" />

          {/* Outer Card Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px] items-stretch">
            
            {/* Left Column: Cutout CEO Photo with Ambient Lighting */}
            <div className="lg:col-span-5 relative flex items-end justify-center pt-8 sm:pt-12 px-6 sm:px-10 overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-full">
              {/* Vibrant backlight behind silhouette */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[380px] h-[340px] bg-gradient-to-t from-[#1d4ed8]/40 via-[#2563eb]/20 to-transparent rounded-t-full blur-2xl pointer-events-none" />

              {/* CEO High-Resolution Cutout Photo */}
              <div className="relative w-[300px] sm:w-[360px] lg:w-[410px] aspect-[935/1024] flex items-end">
                <Image
                  src="/ceo.png"
                  alt="Madni Silat - Founder and CEO digitize"
                  width={935}
                  height={1024}
                  priority
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Subtle Gradient Fade to seamless card border */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#06102b] to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Statement, Details, and Call-to-Action */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-14 lg:pl-4">
              
              {/* Top Accent & Profile Header */}
              <div>
                {/* Horizontal Blue Accent Bar */}
                <div className="w-12 sm:w-14 h-1.5 bg-[#2563eb] rounded-full mb-6 sm:mb-8 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />

                {/* Name */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide font-sans leading-none drop-shadow-md">
                  Madni Silat
                </h2>

                {/* Title */}
                <p className="text-base sm:text-lg font-bold text-[#38bdf8] tracking-wide mt-2 sm:mt-3 mb-6 sm:mb-8">
                  Founder and CEO digitize
                </p>

                {/* Narrative Bio / Vision Statement */}
                <div className="space-y-4 max-w-xl text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  <p>
                    It&apos;s about creating meaningful impact. Over the past 7 years, I&apos;ve worked with founders, corporations, and industries to build systems that go beyond expectations.
                  </p>
                  <p>
                    Today, we&apos;re not just a service provider — we build platforms that scale globally.
                  </p>
                </div>
              </div>

              {/* Bottom Row: Direct Email Button & Tagline */}
              <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-4">
                
                {/* Email Pill Button (with Copy Action + Tooltip) */}
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${email}`}
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="group/btn inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#0d2a6b]/85 hover:bg-[#123687] border border-[#2563eb]/60 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] hover:border-[#38bdf8]"
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0 group-hover/btn:scale-110 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.8)]">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-slate-100 group-hover/btn:text-white transition-colors">
                      {email}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-300 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2.5 sm:p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all duration-300 relative"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold shadow-lg">
                        COPIED
                      </span>
                    )}
                  </button>
                </div>

                {/* Right Bottom Tagline */}
                <div className="sm:text-right max-w-[280px]">
                  <p className="text-[11px] sm:text-xs font-bold italic tracking-widest text-[#38bdf8]/60 uppercase leading-snug">
                    WE DON&apos;T BUILD PROJECTS.
                    <br />
                    WE BUILD PLATFORMS THAT
                    <br />
                    POWER THE FUTURE
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
