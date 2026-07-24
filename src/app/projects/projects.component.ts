import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SoundService } from '../services/sound.service';

interface Project {
  name: string;
  description: string;
  stack: string;
  company: string;
  embedUrl?: string;
  externalUrl?: string;
}

interface ProjectGroup {
  company: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly soundService = inject(SoundService);

  @ViewChild('demoPanel') demoPanel?: ElementRef<HTMLElement>;

  readonly checkgoEmbedUrl =
    'http://51.77.194.41:4201/embed?key=emb_77da1b78538c91ee32cffadbdfb38441';

  activeDemo: {
    name: string;
    company: string;
    description: string;
    url: SafeResourceUrl;
  } | null = null;

  readonly groups: ProjectGroup[] = [
    {
      company: 'Orvyan',
      projects: [
        {
          name: 'CheckGO',
          description:
            'App de KYC/KYB com onboarding seguro: prova de vida, reconhecimento facial com IA e validação documental contra fraudes.',
          stack: 'Go · Angular · AWS Rekognition · Biometria',
          company: 'Orvyan',
          embedUrl: this.checkgoEmbedUrl
        }
      ]
    },
    {
      company: 'Multplus',
      projects: [
        {
          name: 'Tokeygo',
          description:
            'Plataforma de tokenização e crowdfunding. Smart contracts em Solidity com transparência e rastreabilidade de fundos.',
          stack: 'Solidity · Web3 · Angular · Blockchain',
          company: 'Multplus'
        },
        {
          name: 'ImpDoc',
          description:
            'Sistema aduaneiro de importação (Comex) com controle de documentação, integração aduaneira e rastreabilidade de cargas.',
          stack: 'Go · Angular · AWS · Comex',
          company: 'Multplus'
        }
      ]
    },
    {
      company: 'Portal Editora',
      projects: [
        {
          name: 'Portal Editora',
          description:
            'Evolução e manutenção da plataforma web de publicações, quadrinhos e produções editoriais brasileiras.',
          stack: 'Next.js · Node · Supabase',
          company: 'Portal Editora',
          externalUrl: 'https://www.portaleditora.com/'
        }
      ]
    }
  ];

  openDemo(project: Project) {
    if (!project.embedUrl) {
      return;
    }

    this.activeDemo = {
      name: project.name,
      company: project.company,
      description: project.description,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(project.embedUrl)
    };

    this.soundService.playSoundClick();

    queueMicrotask(() => {
      this.demoPanel?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  closeDemo() {
    this.activeDemo = null;
    this.soundService.playSoundClick();
  }
}
