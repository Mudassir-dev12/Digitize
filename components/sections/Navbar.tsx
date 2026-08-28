"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import DigitizeLogo from "@/components/ui/DigitizeLogo";
import { SERVICES } from "@/lib/data";
import { soundManager } from "@/lib/sound";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Dropdowns
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const { scrollTo } = useSmoothScroll();

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] transition-all duration-500 w-full animate-in fade-in slide-in-from-top-4 duration-500 ${
          isScrolled
            ? "bg-[#060913]/65 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-white border-b border-slate-200/90 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* 1. Left: Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group hover:scale-[1.02] transition-transform duration-300"
            onMouseEnter={() => soundManager.playHover()}
          >
            <DigitizeLogo variant="full" size="sm" src={isScrolled ? "/2.png" : "/1.png"} theme={isScrolled ? "dark" : "light"} />
          </a>

          {/* 2. Center: Navigation Links with Dynamic Scrolled Glass Transition */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-extrabold">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className={`relative py-1 transition-colors duration-300 group ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : "text-slate-900 hover:text-[#181FA1]"
              }`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <span>Home</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 rounded-full group-hover:w-full ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white"
                    : "bg-gradient-to-r from-[#181FA1] to-[#2563EB]"
                }`}
              />
            </a>

            {/* Services with Smooth Hover Dropdown Menu */}
            <div
              ref={servicesRef}
              className="relative py-2"
              onMouseEnter={() => {
                soundManager.playHover();
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleNavClick(e, "#services")}
                className={`flex items-center gap-1.5 py-1 font-extrabold transition-colors duration-300 focus:outline-none ${
                  isScrolled
                    ? servicesDropdownOpen
                      ? "text-[#38BDF8]"
                      : "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    : servicesDropdownOpen
                    ? "text-[#181FA1]"
                    : "text-slate-900 hover:text-[#181FA1]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesDropdownOpen
                      ? "rotate-180 text-[#38BDF8]"
                      : isScrolled
                      ? "text-zinc-300"
                      : "text-slate-500"
                  }`}
                />
              </button>

              {/* Glassmorphic / White Services Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 rounded-2xl shadow-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200 select-none ${
                    isScrolled
                      ? "bg-[#0c1327]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                      : "bg-white border border-slate-200/90 shadow-2xl"
                  }`}
                >
                  {/* All Services */}
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 mb-1 ${
                      isScrolled
                        ? "text-white hover:text-[#38BDF8] hover:bg-[#1B449C]/40 border-b border-white/10"
                        : "text-slate-900 hover:text-[#181FA1] hover:bg-slate-100 border-b border-slate-100"
                    }`}
                  >
                    All Services
                  </a>

                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href="#services"
                      onClick={(e) => handleNavClick(e, "#services")}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isScrolled
                          ? "text-zinc-200 hover:text-white hover:bg-[#1B449C]/35"
                          : "text-slate-700 hover:text-[#181FA1] hover:bg-slate-50"
                      }`}
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#team"
              onClick={(e) => handleNavClick(e, "#team")}
              className={`relative py-1 transition-colors duration-300 group ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : "text-slate-900 hover:text-[#181FA1]"
              }`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <span>Team</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 rounded-full group-hover:w-full ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white"
                    : "bg-gradient-to-r from-[#181FA1] to-[#2563EB]"
                }`}
              />
            </a>

            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className={`relative py-1 transition-colors duration-300 group ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : "text-slate-900 hover:text-[#181FA1]"
              }`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <span>Projects</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 rounded-full group-hover:w-full ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white"
                    : "bg-gradient-to-r from-[#181FA1] to-[#2563EB]"
                }`}
              />
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className={`relative py-1 transition-colors duration-300 group ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : "text-slate-900 hover:text-[#181FA1]"
              }`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <span>Blog</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 rounded-full group-hover:w-full ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white"
                    : "bg-gradient-to-r from-[#181FA1] to-[#2563EB]"
                }`}
              />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`relative py-1 transition-colors duration-300 group ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : "text-slate-900 hover:text-[#181FA1]"
              }`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <span>Contact</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2.5px] transition-all duration-300 rounded-full group-hover:w-full ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-white"
                    : "bg-gradient-to-r from-[#181FA1] to-[#2563EB]"
                }`}
              />
            </a>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? "text-white hover:text-[#38BDF8] hover:bg-white/10"
                  : "text-slate-900 hover:text-[#181FA1] hover:bg-slate-100"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between px-6 pt-24 pb-8 animate-in fade-in duration-200 ${
            isScrolled
              ? "bg-[#060913]/98 backdrop-blur-2xl border-b border-white/10 text-white"
              : "bg-white/98 backdrop-blur-2xl border-b border-slate-200 text-slate-900"
          }`}
        >
          <div className="flex flex-col gap-5">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className={`text-xl font-extrabold pb-3 border-b ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className={`text-xl font-extrabold pb-3 border-b flex items-center justify-between ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-5 h-5 ${isScrolled ? "text-zinc-400" : "text-slate-400"}`} />
            </a>
            <a
              href="#team"
              onClick={(e) => handleNavClick(e, "#team")}
              className={`text-xl font-extrabold pb-3 border-b ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              Team
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className={`text-xl font-extrabold pb-3 border-b ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className={`text-xl font-extrabold pb-3 border-b ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`text-xl font-extrabold pb-3 border-b ${
                isScrolled ? "border-white/10 hover:text-[#38BDF8]" : "border-slate-100 hover:text-[#181FA1]"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
