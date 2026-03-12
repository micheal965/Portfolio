import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollTriggerDirective],
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
