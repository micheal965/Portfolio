import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection$: Observable<string>;
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {
    this.activeSection$ = this.scrollService.activeSection$;
  }
  scrollTo(sectionId: string, event: Event) {
    console.log(sectionId);
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
