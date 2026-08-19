"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag" | "text">("default");
  const [isTouch, setIsTouch] = useState<boolean>(true);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const setX = gsap.quickSetter(dot, "x", "px");
    const setY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setX(mouse.x);
      setY(mouse.y);
    };

    // Smooth ticker for the outer ring lag
    const ticker = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      setRingX(pos.x);
      setRingY(pos.y);
    };

    // Global listener for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .interactive");
      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorAttr === "view") {
        setCursorState("view");
        setCursorText("VIEW");
      } else if (cursorAttr === "drag") {
        setCursorState("drag");
        setCursorText("DRAG");
      } else if (cursorAttr === "explore") {
        setCursorState("view");
        setCursorText("EXPLORE");
      } else if (interactive) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full w-2 h-2 bg-brand-blue mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: cursorState === "view" || cursorState === "drag" ? 0 : 1,
        }}
      />

      {/* Kinetic Fluid Outer Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-widest transition-[width,height,background-color,border-color] duration-300 ${
          cursorState === "hover"
            ? "w-12 h-12 bg-white/10 border border-brand-blue/60 backdrop-blur-[1px]"
            : cursorState === "view"
            ? "w-20 h-20 bg-brand-blue/90 text-black border-none shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            : cursorState === "drag"
            ? "w-20 h-20 bg-brand-violet/90 text-white border-none shadow-[0_0_25px_rgba(139,92,246,0.6)]"
            : "w-8 h-8 bg-transparent border border-white/25"
        }`}
      >
        {cursorText && (
          <span className="animate-fade-in font-black tracking-widest">{cursorText}</span>
        )}
      </div>
    </>
  );
}
