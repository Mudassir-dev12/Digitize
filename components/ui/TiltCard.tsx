"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useAudioFx } from "@/hooks/useAudioFx";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  onClick?: () => void;
  dataCursor?: string;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  glareOpacity = 0.15,
  onClick,
  dataCursor,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const { playHover, playClick } = useAudioFx();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.25,
      ease: "power2.out",
      transformPerspective: 1000,
    });

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: glareOpacity,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });

    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => playHover()}
      onClick={() => {
        if (onClick) {
          playClick();
          onClick();
        }
      }}
      data-cursor={dataCursor}
      className={cn(
        "relative rounded-2xl overflow-hidden glass-card transition-shadow duration-300 transform-gpu cursor-pointer",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Dynamic Specular Light Glare */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
