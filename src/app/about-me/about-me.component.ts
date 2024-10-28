import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  constructor(private renderer: Renderer2, private soudnService: SoundService
  ){}


  playSound(){
    this.soudnService.playSoundCard();
  }

}
