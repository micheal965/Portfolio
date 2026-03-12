import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EducationComponent } from './components/sections/education/education.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.init([
      'hero',
      'about',
      'education',
      'experience',
      'skills',
      'projects',
      'contact',
    ]);
  }

  ngOnDestroy() {
    this.scrollService.disconnect();
  }
}
