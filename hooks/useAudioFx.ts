"use client";

import { useState, useEffect, useCallback } from "react";
import { soundManager } from "@/lib/sound";

export function useAudioFx() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(soundManager.getMuted());
  }, []);

  const toggleMute = useCallback(() => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  }, []);

  const playHover = useCallback(() => {
    soundManager.playHover();
  }, []);

  const playClick = useCallback(() => {
    soundManager.playClick();
  }, []);

  const playSuccess = useCallback(() => {
    soundManager.playSuccess();
  }, []);

  return {
    isMuted,
    toggleMute,
    playHover,
    playClick,
    playSuccess,
  };
}
