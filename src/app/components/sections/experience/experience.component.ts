import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
import { MainSectionComponent } from "../main-section/main-section.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollTriggerDirective, MainSectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
