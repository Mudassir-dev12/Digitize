"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useAudioFx } from "@/hooks/useAudioFx";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { playClick, playHover } = useAudioFx();
  const touchStartX = useRef<number | null>(null);

  const nextTestimonial = () => {
    playClick();
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    playClick();
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextTestimonial();
    else if (diff < -50) prevTestimonial();

    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-16 bg-[#09090c] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
            Client Voices
          </h2>
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-mono text-zinc-300 ml-2">
              4.9/5.0 Client Satisfaction Score
            </span>
          </div>
        </div>

        {/* Swipeable Testimonial Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative p-8 sm:p-12 md:p-16 rounded-lg glass-card border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          <Quote className="w-12 h-12 text-brand-blue/30 mb-8" />

          {/* Quote Text */}
          <p className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-100 leading-relaxed mb-10">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Bottom Client Meta & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
            {/* Author Details */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/40">
                <Image
                  src={current.avatar}
                  alt={current.clientName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {current.clientName}
                </h4>
                <p className="text-xs font-mono text-zinc-400">
                  {current.clientRole} •{" "}
                  <span className="text-brand-blue">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Metric Badge & Navigation Arrows */}
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-xs font-mono text-brand-violet">
                {current.metric}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  onMouseEnter={() => playHover()}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-blue/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  onMouseEnter={() => playHover()}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-blue/50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                playClick();
                setActiveIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-8 bg-brand-blue"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
