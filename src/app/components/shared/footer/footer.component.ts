import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from '../../../services/scroll.service';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollTriggerDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  activeSection$: Observable<string>;

  constructor(private scrollService: ScrollService) {
    this.activeSection$ = this.scrollService.activeSection$;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
  }
}
