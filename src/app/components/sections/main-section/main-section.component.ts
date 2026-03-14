import { Component, Input } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ScrollTriggerDirective, NgClass],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {
  @Input({ required: true }) title: string = '';
  shouldAnimate: boolean = true;

  ngOnInit() {
    if (this.title === 'Projects') this.shouldAnimate = false;
  }
}
