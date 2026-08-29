"use client";

import { useEffect, useRef } from "react";

export default function DynamicSiteBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse position lerping for buttery smooth spotlight movement
  useEffect(() => {
    let mouseX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let mouseY = typeof window !== "undefined" ? window.innerHeight / 3 : 0;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateSpotlight = () => {
      // Smooth lerp toward mouse
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 450}px, ${currentY - 450}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#030508]"
      aria-hidden="true"
    >
      {/* 1. Analog Film Grain / Noise Overlay via SVG Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay z-30 pointer-events-none">
        <filter id="studio-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#studio-grain)" />
      </svg>

      {/* 2. Interactive Cursor Ambient Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[900px] h-[900px] rounded-full z-10 opacity-70 transition-opacity duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(124, 58, 237, 0.07) 45%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* 3. Deep Ethereal Aurora Meshes (Floating Fluid Motion) */}
      <div className="absolute inset-0 z-0">
        {/* Top Right Royal Aurora */}
        <div
          className="absolute -top-[15%] -right-[10%] w-[65vw] h-[65vw] rounded-full blur-[140px] opacity-45 animate-aurora-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(29, 78, 216, 0.22) 0%, rgba(79, 70, 229, 0.12) 50%, transparent 75%)",
          }}
        />

        {/* Center Left Deep Violet Mesh */}
        <div
          className="absolute top-[35%] -left-[15%] w-[55vw] h-[55vw] rounded-full blur-[160px] opacity-35 animate-aurora-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(30, 58, 138, 0.09) 60%, transparent 80%)",
          }}
        />

        {/* Bottom Right Cyan Sapphire Pool */}
        <div
          className="absolute -bottom-[20%] right-[10%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-40 animate-aurora-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(37, 99, 235, 0.08) 55%, transparent 80%)",
          }}
        />
      </div>

      {/* 4. Architectural Vector Grid Lines */}
      <div className="absolute inset-0 z-20 opacity-50 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
            maskImage:
              "radial-gradient(ellipse 85% 85% at 50% 40%, #000 35%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 50% 40%, #000 35%, transparent 95%)",
          }}
        />
      </div>

      {/* 5. Architectural Crosshairs (+) at key grid intersections */}
      <div className="absolute inset-0 z-22 opacity-30 pointer-events-none hidden md:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle 2px at 0 0, rgba(255, 255, 255, 0.35) 100%, transparent 0)
            `,
            backgroundSize: "120px 120px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, #000 20%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, #000 20%, transparent 90%)",
          }}
        />
      </div>

      {/* 6. Linear Accent Light Beam (Top Spotlight Vignette) */}
      <div
        className="absolute top-0 inset-x-0 h-[600px] z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 350px at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
        }}
      />

      {/* 7. Subtle Edge Vignette for Cinematic Depth */}
      <div
        className="absolute inset-0 z-25 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 160px rgba(3, 5, 8, 0.85)",
        }}
      />
    </div>
  );
}
