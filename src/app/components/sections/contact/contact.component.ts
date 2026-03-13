import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollTriggerDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
