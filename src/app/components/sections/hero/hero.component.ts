import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Observable } from 'rxjs';
import { ScrollService } from '../../../services/scroll.service';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedJsModule,ScrollTriggerDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  typingStrings: string[] = [
    'Full Stack ( .NET &amp; Angular )',
    'Software Engineer',
  ];
  activeSection$: Observable<string>;

  constructor(private scrollService: ScrollService) {
    this.activeSection$ = this.scrollService.activeSection$;
  }
  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
  }
}
