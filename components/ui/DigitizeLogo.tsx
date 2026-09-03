"use client";

import React from "react";

interface DigitizeLogoProps {
  variant?: "full" | "compact" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  theme?: "dark" | "light" | "auto";
  src?: string;
}

export default function DigitizeLogo({
  variant = "compact",
  size = "md",
  className = "",
  theme = "auto",
  src,
}: DigitizeLogoProps) {
  // Height mapping for logo
  const logoHeights = {
    sm: "h-9 sm:h-10 md:h-11",
    md: "h-11 sm:h-12 md:h-14",
    lg: "h-16 sm:h-20",
    xl: "h-24 sm:h-28",
  };

  // Square size mapping for icon variant
  const iconSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  // Determine logo image asset: custom src -> or default 1.png for light, 2.png for dark
  const logoSrc = src || (theme === "light" ? "/1.png" : "/2.png");

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {variant === "icon" ? (
        <div className={`relative ${iconSizes[size]} shrink-0 group-hover:scale-105 transition-transform duration-300`}>
          <img
            src={logoSrc}
            alt="DIGITIZE Logo Icon"
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className={`relative ${logoHeights[size]} shrink-0 group-hover:scale-105 transition-transform duration-500 flex items-center`}>
          <img
            src={logoSrc}
            alt="DIGITIZE. - Work Local Result Global"
            className="h-full w-auto object-contain max-h-full transition-all duration-500 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
          />
        </div>
      )}
    </div>
  );
}
