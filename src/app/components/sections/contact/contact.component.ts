import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MainSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
