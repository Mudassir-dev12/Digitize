"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "@/components/ui/MagneticButton";
import { STUDIO_INFO } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Philosophy", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-8 flex justify-center ${
          isScrolled ? "py-3 sm:py-4" : ""
        }`}
      >
        <nav
          className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-[#0c0c10]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              : "bg-black/30 backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Logo Branding */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center p-1 shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-105 transition-transform">
              <span className="font-mono font-black text-xs text-black">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wider text-white group-hover:text-brand-blue transition-colors">
                DIGITIZE
              </span>
              <span className="text-[9px] font-mono text-zinc-400 tracking-widest uppercase hidden sm:inline">
                STUDIO // 2024
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Live Status & Magnetic CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{STUDIO_INFO.status}</span>
            </div>

            <MagneticButton
              variant="primary"
              onClick={() => scrollTo("#contact")}
              className="text-xs px-4 py-2 font-mono uppercase tracking-wider"
            >
              <span>Initiate Sprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8 py-20 animate-fade-in">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">
              NAVIGATION DIRECTORY
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold tracking-tight text-white hover:text-brand-blue flex items-center justify-between border-b border-white/10 pb-4 transition-colors"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-6">
              <MagneticButton
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("#contact");
                }}
                className="w-full py-4 text-sm font-mono uppercase tracking-widest"
              >
                Start A Project <ArrowUpRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
