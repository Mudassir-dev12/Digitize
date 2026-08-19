"use client";

import { useAudioFx } from "@/hooks/useAudioFx";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundController() {
  const { isMuted, toggleMute, playHover } = useAudioFx();

  return (
    <button
      onClick={toggleMute}
      onMouseEnter={() => playHover()}
      aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono tracking-wider text-zinc-400 hover:text-white hover:border-brand-blue/50 transition-all duration-200 group shadow-lg"
    >
      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
      ) : (
        <div className="flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5 text-brand-blue" />
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
            <span className="w-0.5 h-3 bg-brand-blue rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-2 bg-brand-blue rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}
      <span className="hidden sm:inline text-[10px] uppercase font-semibold">
        {isMuted ? "AUDIO OFF" : "AUDIO ON"}
      </span>
    </button>
  );
}
