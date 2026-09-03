"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useAudioFx } from "@/hooks/useAudioFx";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "outline";
  strength?: number;
  dataCursor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  strength = 0.35,
  dataCursor,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const { playHover, playClick } = useAudioFx();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = btnRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: x * (strength * 0.5),
        y: y * (strength * 0.5),
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const el = btnRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-brand-blue to-brand-indigo text-black font-semibold hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] border border-brand-blue/30";
      case "secondary":
        return "bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md hover:border-white/30";
      case "glass":
        return "bg-[#090e1a]/80 backdrop-blur-xl hover:bg-white/[0.08] text-white border border-white/10 hover:border-brand-blue/40 shadow-lg";
      case "outline":
        return "bg-transparent border border-white/20 hover:border-brand-blue text-white hover:text-brand-blue";
      default:
        return "bg-white text-black";
    }
  };

  const commonProps = {
    className: cn(
      "relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 select-none overflow-hidden group",
      getVariantStyles(),
      className
    ),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: () => !disabled && playHover(),
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;
      playClick();
      onClick?.(e);
    },
    "data-cursor": dataCursor,
  };

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...commonProps}
      >
        <span ref={textRef} className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      {...commonProps}
    >
      <span ref={textRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
