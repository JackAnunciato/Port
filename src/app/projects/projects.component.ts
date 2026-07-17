import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'CheckGO',
      description:
        'App de KYC/KYB para Orvyan com onboarding seguro: prova de vida, reconhecimento facial com IA e validação documental contra fraudes.',
      link: '#',
      stack: 'Go · Angular · AWS Rekognition · Biometria'
    },
    {
      name: 'Tokeygo',
      description:
        'Plataforma de tokenização e crowdfunding para Multplus. Smart contracts em Solidity com transparência e rastreabilidade de fundos.',
      link: '#',
      stack: 'Solidity · Web3 · Angular · Blockchain'
    },
    {
      name: 'ImpDoc',
      description:
        'Sistema aduaneiro de importação (Comex) com controle de documentação, integração aduaneira e rastreabilidade de cargas em alto volume.',
      link: '#',
      stack: 'Go · Angular · AWS · Comex'
    },
    {
      name: 'Portal Editora',
      description:
        'Evolução e manutenção da plataforma web de publicações, quadrinhos e produções editoriais brasileiras.',
      link: 'https://www.portaleditora.com/',
      stack: 'Next.js · Node · Supabase'
    }
  ];
}
