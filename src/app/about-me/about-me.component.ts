import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoundService } from '../services/sound.service';

type ProfileTab = 'sobre' | 'stack' | 'projetos' | 'design';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  icons: { src: string; alt: string }[];
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  private readonly soundService = inject(SoundService);

  activeTab: ProfileTab = 'sobre';
  openShardId: string | null = null;

  experiences: Experience[] = [
    {
      id: 'orvyan',
      role: 'Desenvolvedor Sênior · Blockchain, IA & Sistemas Aduaneiros',
      company: 'Orvyan / Multplus',
      period: '01/2024 – Atual',
      icons: [
        { src: 'assets/img/go.svg', alt: 'Go' },
        { src: 'assets/img/angular.svg', alt: 'Angular' },
        { src: 'assets/img/solidity.svg', alt: 'Solidity' },
        { src: 'assets/img/amazonwebservices.svg', alt: 'AWS' }
      ],
      description:
        'Soluções de alta complexidade em blockchain, IA e Comex. CheckGO (Orvyan): KYC/KYB com biometria e validação documental. Tokeygo (Multplus): tokenização e crowdfunding com smart contracts. ImpDoc: sistema aduaneiro de importação. Stack: Go, Angular, Solidity, Web3, AWS Rekognition.'
    },
    {
      id: 'portal',
      role: 'Desenvolvedor Full Stack',
      company: 'Portal Editora',
      period: 'Atual',
      icons: [
        { src: 'assets/img/nextjs.svg', alt: 'Next.js' },
        { src: 'assets/img/nodejs.svg', alt: 'Node.js' },
        { src: 'assets/img/supabase.svg', alt: 'Supabase' }
      ],
      description:
        'Colaboração técnica no Portal Editora (portaleditora.com), com manutenção e evolução de soluções web em Next.js, Node e Supabase para publicações, quadrinhos e produções editoriais brasileiras.'
    },
    {
      id: 'multfacil',
      role: 'Desenvolvedor Full Stack Sênior',
      company: 'MultFacil',
      period: '10/2022 – 11/2023',
      icons: [
        { src: 'assets/img/angular.svg', alt: 'Angular' },
        { src: 'assets/img/laravel.svg', alt: 'Laravel' },
        { src: 'assets/img/mariadb.svg', alt: 'MariaDB' },
        { src: 'assets/img/docker.svg', alt: 'Docker' }
      ],
      description:
        'Liderança técnica em módulos de gestão escolar e CRM. Integração com Google Maps para roteamento logístico, Docker e MariaDB na AWS. Stack: Angular, Laravel, MariaDB, Docker, AWS.'
    },
    {
      id: 'sety',
      role: 'Desenvolvedor Full Stack',
      company: 'Sety Segurança e Tec',
      period: '12/2021 – 08/2022',
      icons: [
        { src: 'assets/img/laravel.svg', alt: 'Laravel' },
        { src: 'assets/img/bootstrap.svg', alt: 'Bootstrap' },
        { src: 'assets/img/mariadb.svg', alt: 'MariaDB' }
      ],
      description:
        'Automação do fluxo de registro de documentos e sistema de fidelidade/gamificação. Sustentação de sistemas legados. Stack: PHP (Laravel), Blade, Materialize CSS, MariaDB.'
    },
    {
      id: 'ctap',
      role: 'Desenvolvedor .NET / Angular',
      company: 'C-TAP',
      period: '11/2020 – 11/2021',
      icons: [
        { src: 'assets/img/dotnet.svg', alt: '.NET' },
        { src: 'assets/img/angular.svg', alt: 'Angular' },
        { src: 'assets/img/serverfault.svg', alt: 'SQL Server' }
      ],
      description:
        'Sistema paperless para Saúde Ocupacional, com geração dinâmica de laudos em PDF (PPRA, ASO, PCMSO) e interfaces administrativas. Stack: .NET (C#), Angular, SQL Server, AWS.'
    },
    {
      id: 'soft',
      role: 'Analista de Sistemas',
      company: 'Softwillians',
      period: '05/2019 – 11/2019',
      icons: [
        { src: 'assets/img/dotnet.svg', alt: 'ASP.NET' },
        { src: 'assets/img/serverfault.svg', alt: 'SQL Server' }
      ],
      description:
        'Suporte a chamados de alta complexidade (incluindo SAP) com SLA de 24h, otimização de procedures no SQL Server e manutenção de sistemas legados. Stack: ASP.NET, C#, SQL Server.'
    }
  ];

  setTab(tab: ProfileTab) {
    this.activeTab = tab;
    this.soundService.playSoundClick();
  }

  toggleShard(id: string) {
    this.openShardId = this.openShardId === id ? null : id;
    this.soundService.playSoundCard();
  }

  isOpen(id: string) {
    return this.openShardId === id;
  }
}
