"use client";

import { useState, useEffect, useRef } from "react";

export function useMousePosition() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
    normX: 0,
    normY: 0,
  });

  const mousePosRef = useRef({ x: 0, y: 0, normX: 0, normY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX;
      const y = e.clientY;
      const normX = (x / innerWidth) * 2 - 1;
      const normY = -(y / innerHeight) * 2 + 1;

      const pos = { x, y, normX, normY };
      mousePosRef.current = pos;
      setMousePos(pos);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const { innerWidth, innerHeight } = window;
      const x = touch.clientX;
      const y = touch.clientY;
      const normX = (x / innerWidth) * 2 - 1;
      const normY = -(y / innerHeight) * 2 + 1;

      const pos = { x, y, normX, normY };
      mousePosRef.current = pos;
      setMousePos(pos);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return { mousePos, mousePosRef };
}
