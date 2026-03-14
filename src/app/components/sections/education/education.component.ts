import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
import { MainSectionComponent } from '../main-section/main-section.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollTriggerDirective, MainSectionComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  coursework = [
    'Introduction to Computers',
    'Data Structures',
    'Algorithms',
    'Artificial Intelligence',
    'Object-Oriented Programming',
    'Software Engineering',
    'Systems Analysis & Design',
    'Software Quality Assurance and Testing',
    'Database Management Systems',
    'Clean Architecture & SOLID Principles',
  ];
}
