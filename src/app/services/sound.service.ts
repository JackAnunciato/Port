import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {

  constructor() {

  }

  playSoundCard(duration: number = 2000) {
    const audio = new Audio();
    audio.src = './../assets/sound/open-card.mp3'; 
    audio.load();
    audio.currentTime = 0; 
    audio.play();

    setTimeout(() => {
      audio.pause();
    }, duration);
  }

  playSoundChange(duration: number = 2000) {
    const audio = new Audio();
    audio.src = './../assets/sound/change-page.mp3'; 
    audio.load();
    audio.currentTime = 0; 
    audio.play();

    setTimeout(() => {
      audio.pause();
    }, duration);
  }
  
  playSoundClick(duration: number = 2000) {
    const audio = new Audio();
    audio.src = './../assets/sound/click.mp3'; 
    audio.load();
    audio.currentTime = 0; 
    audio.play();

    setTimeout(() => {
      audio.pause();
    }, duration);
  }
}
