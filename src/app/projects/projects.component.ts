import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfólio Angular',
      description: 'Um site portfólio construído com Angular 18.2 para exibir habilidades e projetos.',
      link: 'https://github.com/seu-github/portfolio-angular'
    },
    {
      name: 'Sistema de Gestão com Laravel',
      description: 'Um sistema de gerenciamento de tarefas e usuários, desenvolvido com Laravel e MySQL.',
      link: 'https://github.com/seu-github/sistema-gestao-laravel'
    }
  ];
}
