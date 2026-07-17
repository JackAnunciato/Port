import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private readonly platformId = inject(PLATFORM_ID);

  playSoundCard(duration: number = 2000) {
    this.play('./assets/sound/open-card.mp3', duration);
  }

  playSoundChange(duration: number = 2000) {
    this.play('./assets/sound/change-page.mp3', duration);
  }

  playSoundClick(duration: number = 2000) {
    this.play('./assets/sound/click.mp3', duration);
  }

  private play(src: string, duration: number) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const audio = new Audio(src);
    audio.currentTime = 0;
    void audio.play().catch(() => undefined);

    setTimeout(() => {
      audio.pause();
    }, duration);
  }
}
