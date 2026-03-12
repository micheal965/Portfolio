import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  activeSection$ = new BehaviorSubject<string>('');

  private observer!: IntersectionObserver;

  init(sections: string[]) {
    const options = { root: null, rootMargin: '0px', threshold: 0.6 };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection$.next(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) this.observer.observe(section);
    });
  }

scrollTo(sectionId: string, offset: number = 90) {
  const section = document.getElementById(sectionId);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

  disconnect() {
    if (this.observer) this.observer.disconnect();
  }
}
