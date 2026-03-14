import { Component, Input } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ScrollTriggerDirective],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {
  @Input({ required: true }) title: string = '';
}
