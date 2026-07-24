import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly checkgoEmbedUrl =
    'http://51.77.194.41:4201/embed?key=emb_77da1b78538c91ee32cffadbdfb38441';

  readonly checkgoEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.checkgoEmbedUrl
  );

  projects = [
    {
      name: 'CheckGO',
      description:
        'App de KYC/KYB para Orvyan com onboarding seguro: prova de vida, reconhecimento facial com IA e validação documental contra fraudes.',
      link: this.checkgoEmbedUrl,
      stack: 'Go · Angular · AWS Rekognition · Biometria',
      featured: true
    },
    {
      name: 'Tokeygo',
      description:
        'Plataforma de tokenização e crowdfunding para Multplus. Smart contracts em Solidity com transparência e rastreabilidade de fundos.',
      link: '#',
      stack: 'Solidity · Web3 · Angular · Blockchain',
      featured: false
    },
    {
      name: 'ImpDoc',
      description:
        'Sistema aduaneiro de importação (Comex) com controle de documentação, integração aduaneira e rastreabilidade de cargas em alto volume.',
      link: '#',
      stack: 'Go · Angular · AWS · Comex',
      featured: false
    },
    {
      name: 'Portal Editora',
      description:
        'Evolução e manutenção da plataforma web de publicações, quadrinhos e produções editoriais brasileiras.',
      link: 'https://www.portaleditora.com/',
      stack: 'Next.js · Node · Supabase',
      featured: false
    }
  ];
}
