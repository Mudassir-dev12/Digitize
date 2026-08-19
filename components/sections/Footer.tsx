"use client";

import { useState, useEffect } from "react";
import { WORLD_CLOCKS, STUDIO_INFO } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Twitter, Globe, ArrowRight, Shield } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const [times, setTimes] = useState<Record<string, string>>({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      WORLD_CLOCKS.forEach((clock) => {
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: clock.tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          });
          newTimes[clock.code] = formatter.format(new Date());
        } catch {
          newTimes[clock.code] = "--:--:--";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <footer className="relative w-full bg-[#050507] border-t border-white/10 pt-20 pb-12 px-6 sm:px-12 select-none overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top World Clocks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/10 mb-16">
          {WORLD_CLOCKS.map((clock) => (
            <div key={clock.code} className="flex flex-col items-center sm:items-start p-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                  {clock.city} ({clock.offset})
                </span>
              </div>
              <span className="font-mono text-base sm:text-lg font-bold text-white tracking-widest">
                {times[clock.code] || "12:00:00"}
              </span>
            </div>
          ))}
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Studio Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center font-mono font-black text-black text-sm shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  D
                </div>
                <span className="font-black text-xl tracking-wider text-white">
                  {STUDIO_INFO.name}
                </span>
              </div>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm mb-6">
                Engineering digital flagships, distributed cloud systems, and high-performance WebGL applications for forward-thinking enterprises.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II & ISO-27001 Compliant Architectures</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest mb-2">
              STUDIO DIRECTORY
            </span>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#work");
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Selected Flagships
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#services");
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Engineering Pillars
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Philosophy & Manifesto
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#process");
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Engineering Protocol
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#team");
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Principal Team
            </a>
          </div>

          {/* Dispatch Newsletter */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-brand-violet uppercase tracking-widest block mb-2">
                SYSTEMS DISPATCH
              </span>
              <p className="text-zinc-400 text-xs font-light mb-4">
                Quarterly technical essays on Rust WebAssembly, distributed systems, and WebGL shader architecture.
              </p>

              {newsletterSubmitted ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                  ✓ Transmitted. You will receive our next quarterly dispatch.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-brand-blue"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-4 py-2.5 rounded-xl bg-brand-blue text-black font-mono font-bold text-xs hover:bg-brand-blue/90 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Socials & Back to Top */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              <MagneticButton
                variant="glass"
                onClick={() => scrollTo("#hero")}
                className="text-xs px-3.5 py-2 font-mono flex items-center gap-1.5"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} DIGITIZE STUDIO. ALL ARCHITECTURAL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>SAN FRANCISCO • LONDON • TOKYO</span>
            <span className="text-zinc-400">|</span>
            <span className="text-brand-blue">60 FPS PERFORMANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
