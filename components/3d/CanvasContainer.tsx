"use client";

import { useEffect, useState, Suspense } from "react";

interface CanvasContainerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function CanvasContainer({ children, fallback }: CanvasContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {fallback || <div className="w-8 h-8 rounded-full border-2 border-brand-blue/30 border-t-brand-blue animate-spin" />}
      </div>
    );
  }

  return <Suspense fallback={fallback || null}>{children}</Suspense>;
}
