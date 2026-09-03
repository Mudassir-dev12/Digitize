"use client";

import { useState } from "react";
import {
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import DigitizeLogo from "@/components/ui/DigitizeLogo";
import { soundManager } from "@/lib/sound";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    soundManager.playClick();
    setNewsletterSubmitted(true);
  };

  return (
    <footer className="relative w-full bg-[#07070a] text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/10 select-none overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#38BDF8]/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Studio Logo, Tagline, Contact Info & Social Icons */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="mb-6">
                <DigitizeLogo variant="full" size="md" theme="dark" />
              </div>

              {/* Tagline */}
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
                Because if your workplace software can't handle all the current disruptions, neither will your workplace.
              </p>

              {/* Contact Metadata with Blue Labels */}
              <div className="space-y-2 mb-8 text-xs sm:text-sm">
                <p>
                  <span className="text-[#38BDF8] font-bold">Email:</span>{" "}
                  <a href="mailto:info@digitizepk.com" className="text-zinc-300 hover:text-white transition-colors">
                    info@digitizepk.com
                  </a>
                </p>
                <p>
                  <span className="text-[#38BDF8] font-bold">Phone:</span>{" "}
                  <a href="tel:+923366532777" className="text-zinc-300 hover:text-white transition-colors">
                    +92 336 6532777
                  </a>
                </p>
                <p>
                  <span className="text-[#38BDF8] font-bold">Address:</span>{" "}
                  <span className="text-zinc-300">FB Area Block 3 Karimabad</span>
                </p>
              </div>

              {/* Round Dark Social Media Icon Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/923366532777"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-[#38BDF8] text-zinc-300 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-[#38BDF8] text-zinc-300 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-[#38BDF8] text-zinc-300 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-[#38BDF8] text-zinc-300 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-[#38BDF8] text-zinc-300 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: RESOURCES */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              RESOURCES
            </h4>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Why DIGITIZE?
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#testimonials");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Customer Stories
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#work");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Blog & Case Studies
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#process");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Guides & Webinars
            </a>
          </div>

          {/* Column 3: COMPANY */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              COMPANY
            </h4>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#team");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#team");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Our Team
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#services");
              }}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Services
            </a>
          </div>

          {/* Column 4: NEWSLETTER */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest block mb-2 font-bold">
                NEWSLETTER
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Subscribe to Newsletter
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
                Stay updated with our latest news and enterprise solutions.
              </p>

              {newsletterSubmitted ? (
                <div className="p-4 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-xs font-mono text-emerald-400">
                  ✓ Subscribed! You will receive our latest updates.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="relative flex items-center w-full max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-6 py-3.5 rounded-full bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] pr-14 shadow-lg"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 w-10 h-10 rounded-full bg-[#181FA1] hover:bg-[#38BDF8] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Back to Top Quick Action */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => {
                  soundManager.playClick();
                  scrollTo("#hero");
                }}
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#38BDF8] transition-colors"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-light">
          <p>© 2026 DIGITIZE. All rights reserved.</p>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">Support</a>
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#hero" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
