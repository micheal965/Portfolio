import { Component, computed, signal } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollTriggerDirective, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'HTML&CSS'];
  selectedCategory = signal('All');

  projects = [
    {
      title: 'Smart Donation System',
      status: 'In Progress',
      type: 'Full Stack',
      description:
        'The official platform for Smart Donation Management System — a web application that connects donors with charitable organizations, enabling users to submit, manage, and track donations efficiently while supporting NGOs in receiving and organizing contributions.',
      techStack: [
        'ASP.NET API',
        'Entity Framework Core',
        'Hangfire',
        'SQL Server',
        'Angular',
        'Tailwind CSS',
      ],
      image: './assets/projects/sdms.png',
      sourceCode: 'https://github.com/micheal965/SmartDonationManagementSystem',
      liveDemo: 'https://smart-donation-management-system.vercel.app/',
    },
    {
      title: 'Mowathaqa (StreetKing)',
      status: 'Completed',
      type: 'Full Stack',
      description:
        'The official website for Mowathaqa — a logistics platform integrated with Saudi Arabian government services that helps companies verify, document, and manage transportation shipments efficiently.',
      techStack: [
        'ASP.NET MVC',
        'Entity Framework Core',
        'SQL Server',
        'WebHooks',
        'Payment Gateway Integration (Moyasar)',
        'Bootstrap',
      ],
      image: './assets/projects/mowathaqa.png',
      sourceCode: null,
      liveDemo: 'https://mowathaqa.com/',
    },
    {
      title: 'Youth Innovation System',
      status: 'Completed',
      type: 'Backend',
      description:
        'The official platform for Youth Innovation System — a web application that connects innovators with investors, allowing users to post innovative ideas and enabling investors to discover and invest in promising projects efficiently.',
      techStack: [
        'ASP.NET API',
        'Entity Framework Core',
        'SQL Server',
        'SignalR',
        'Redis',
      ],
      image: './assets/projects/yis.png',
      sourceCode: 'https://github.com/micheal965/Youth-Innovation-System',
      liveDemo: null,
    },
    {
      title: 'Talabat API',
      status: 'Completed',
      type: 'Backend',
      description:
        'A robust E-commerce API — providing endpoints for product management, user authentication, orders, and payments, enabling developers to build scalable online stores efficiently.',
      techStack: [
        'ASP.NET API',
        'Entity Framework Core',
        'SQL Server',
        'Redis',
        'Payment Gateway Integration (Stripe)',
      ],
      image: './assets/projects/talabat.png',
      sourceCode: 'https://github.com/micheal965/ASP.NET-API-E-Commerce',
      liveDemo: null,
    },
    {
      title: 'Megamart',
      status: 'Completed',
      type: 'Frontend',
      description:
        'The frontend for the E-commerce platform — a responsive web application that allows users to browse products, manage their cart, place orders, and interact seamlessly with the backend API.',
      techStack: ['Angular', 'HTML', 'CSS', 'Bootstrap'],
      image: './assets/projects/megamart.png',
      sourceCode: 'https://github.com/micheal965/E-Commerce-Application',
      liveDemo: 'https://e-commerce-dusky-five-97.vercel.app',
    },
    {
      title: 'TradeX',
      status: 'Completed',
      type: 'HTML&CSS',
      description:
        'TradeX — a responsive multi‑section business and marketing landing page template showcasing services, portfolio, team, and contact information with a clean and modern design.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Carousel'],
      image: './assets/projects/tradex.png',
      sourceCode: 'https://github.com/micheal965/TradeX',
      liveDemo: 'https://micheal965.github.io/TradeX/',
    },
    {
      title: 'Admin Dashboard',
      status: 'Completed',
      type: 'HTML&CSS',
      description:
        'Admin Dashboard — a responsive web interface for managing users and data, featuring a sidebar menu, theme toggle (light/dark), search, and user table with action controls.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: './assets/projects/ad-dashboard.png',
      sourceCode: 'https://github.com/micheal965/Admin-Dashboard',
      liveDemo: 'https://micheal965.github.io/Admin-Dashboard/',
    },
    {
      title: 'Pawn-s-Play Template',
      status: 'Completed',
      type: 'HTML&CSS',
      description:
        'Pawn’s Play Template — a responsive landing page template for a entertainment brand, featuring modern design elements, hero section, services, and call‑to‑action areas.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      image: './assets/projects/paws.png',
      sourceCode: 'https://github.com/micheal965/Pawn-s-Play-Template',
      liveDemo: 'https://micheal965.github.io/Pawn-s-Play-Template/',
    },
    {
      title: 'AXIT Template',
      status: 'Completed',
      type: 'HTML&CSS',
      description:
        'AXIT Template — a responsive, modern landing page template designed for tech and business websites, featuring a clean layout, hero section, services, and call‑to‑action components.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      image: './assets/projects/axit.png',
      sourceCode: 'https://github.com/micheal965/AXIT-TEMPLATE',
      liveDemo: 'https://micheal965.github.io/AXIT-TEMPLATE/',
    },
    {
      title: 'Bondi Template',
      status: 'Completed',
      type: 'HTML&CSS',
      description:
        'Bondi Template — a responsive landing page template with a clean and modern design, ideal for showcasing services, features, and call‑to‑action sections for businesses or personal brands.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      image: './assets/projects/bondi.png',
      sourceCode: 'https://github.com/micheal965/Bondi_Template',
      liveDemo: 'https://micheal965.github.io/Bondi_Template',
    },
  ];

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') return this.projects;
    return this.projects.filter(
      (p) => p.type === category || p.techStack.includes(category),
    );
  });

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }
}
