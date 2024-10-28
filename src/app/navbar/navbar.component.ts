import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule para navegação
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Importar RouterModule para os links do router
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Correção: usar styleUrls (plural)
})
export class NavbarComponent {


  constructor(private soundService: SoundService){}

  change(){
    this.soundService.playSoundChange()    
  }

}
