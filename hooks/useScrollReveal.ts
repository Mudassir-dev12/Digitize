"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealOptions {
  triggerRef?: React.RefObject<HTMLElement>;
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  scrub?: boolean | number;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const {
      y = 40,
      duration = 1,
      stagger = 0.1,
      delay = 0,
      start = "top 85%",
      scale = 1,
    } = options;

    const targets = el.querySelectorAll(".reveal-item");
    const animElements = targets.length > 0 ? targets : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        animElements,
        {
          opacity: 0,
          y: y,
          scale: scale < 1 ? scale : 1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: options.triggerRef ? options.triggerRef.current : el,
            start: start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
}
