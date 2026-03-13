import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollTriggerDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
