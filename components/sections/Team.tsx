"use client";

import Image from "next/image";
import { TEAM } from "@/lib/data";
import { Github, Linkedin, Shield, Code, Sparkles } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function Team() {
  return (
    <section
      id="team"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#08080a] subtle-grid overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              Principal Engineers
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            No junior offshore handoffs. Your project is architected, written, and deployed directly by battle-tested engineering leaders.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM.map((member) => (
            <TiltCard
              key={member.id}
              className="p-6 flex flex-col justify-between group border border-white/10 hover:border-brand-violet/50 transition-all duration-300"
            >
              <div>
                {/* Avatar Portrait with Cyber Border */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-brand-blue/50 transition-colors">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Live Status Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-400">
                    {member.status}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-brand-violet uppercase tracking-wider mb-2">
                  {member.role}
                </p>

                {/* Specialty */}
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  {member.specialty}
                </p>
              </div>

              {/* Experience & Socials */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">
                  {member.experience}
                </span>

                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-brand-blue hover:bg-brand-blue/20 transition-all duration-300"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-brand-blue hover:bg-brand-blue/20 transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
