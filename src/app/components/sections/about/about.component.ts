import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
import { MainSectionComponent } from "../main-section/main-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, ScrollTriggerDirective, MainSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  services = [
    {
      title: 'Frontend Development',
      description:
        'Building responsive and dynamic user interfaces using Angular and modern web technologies',
      icon: 'frontend',
    },
    {
      title: 'Backend Development',
      description:
        'Developing scalable APIs and backend systems using ASP.NET Core and SQL Server',
      icon: 'backend',
    },
    {
      title: 'AI Features',
      description:
        'Integrating AI-powered features to enhance user experience and automate tasks',
      icon: 'ai',
    },
    {
      title: 'Clean Architecture',
      description:
        'Designing maintainable and scalable systems using clean architecture principles',
      icon: 'architecture',
    },
  ];
  stats = [
    {
      value: '10',
      label: 'Projects Completed',
      display: 0,
    },
    {
      value: '3',
      label: 'Years in Tech',
      display: 0,
    },
    {
      value: '50',
      label: 'Repositories',
      display: 0,
    },
    {
      value: '15',
      label: 'Certifications Earned',
      display: 0,
    },
  ];

  @ViewChild('statsSection') statsSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.animateStats();
        else this.resetStats();
      },
      { threshold: 0.5 },
    );

    observer.observe(this.statsSection.nativeElement);
  }

  animateStats() {
    this.stats.forEach((stat) => {
      let start = 0;
      const end = Number(stat.value);
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start++;
        stat.display = start;
        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  }
  resetStats() {
    this.stats.forEach((stat) => (stat.display = 0));
  }
}
