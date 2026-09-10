// Web Audio API procedural sound synthesizer (Disabled globally as requested)

class SoundManager {
  private isMuted: boolean = true;

  public toggleMute(): boolean {
    this.isMuted = true;
    return true;
  }

  public getMuted(): boolean {
    return true;
  }

  public playHover() {
    // Sound disabled
    return;
  }

  public playClick() {
    // Sound disabled
    return;
  }

  public playSuccess() {
    // Sound disabled
    return;
  }
}

export const soundManager = new SoundManager();
