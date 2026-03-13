import { Component, computed, signal } from '@angular/core';
import { ScrollTriggerDirective } from '../../../directives/scroll-trigger.directive';
interface Skill {
  name: string;
  category:
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'Concepts'
    | 'Tools & Technologies'
    | 'Soft Skills';
  icon: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollTriggerDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  Math = Math;
  categories = [
    'All Skills',
    'Frontend',
    'Backend',
    'Database',
    'Concepts',
    'Tools & Technologies',
    'Soft Skills',
  ];
  activeTab = signal('All Skills');

  skillsData = signal<Skill[]>([
    // Frontend
    {
      name: 'HTML5',
      category: 'Frontend',
      icon: './assets/icons/Frontend/html.png',
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      icon: './assets/icons/Frontend/css.png',
    },
    {
      name: 'Bootstrap',
      category: 'Frontend',
      icon: './assets/icons/Frontend/bootstrap.png',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: './assets/icons/Frontend/tailwindcss.png',
    },
    {
      name: 'Responsive Design',
      category: 'Frontend',
      icon: './assets/icons/Frontend/responsive-design.png',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: './assets/icons/Frontend/javascript.png',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: './assets/icons/Frontend/typescript.png',
    },
    {
      name: 'Angular',
      category: 'Frontend',
      icon: './assets/icons/Frontend/angular.png',
    },
    {
      name: 'REST API Integration',
      category: 'Frontend',
      icon: './assets/icons/Frontend/api.png',
    },

    // Backend
    {
      name: 'C#',
      category: 'Backend',
      icon: './assets/icons/Backend/csharp.png',
    },
    {
      name: 'ASP.NET',
      category: 'Backend',
      icon: './assets/icons/Backend/aspnet-core.png',
    },
    {
      name: 'Web API',
      category: 'Backend',
      icon: './assets/icons/Backend/web-api.png',
    },
    {
      name: 'Authentication (JWT)',
      category: 'Backend',
      icon: './assets/icons/Backend/jwt.png',
    },
    {
      name: 'Authorization',
      category: 'Backend',
      icon: './assets/icons/Backend/authorization.png',
    },
    {
      name: 'Unit Testing',
      category: 'Backend',
      icon: './assets/icons/Backend/unit-testing.png',
    },

    // Database
    {
      name: 'SQL Server',
      category: 'Database',
      icon: './assets/icons/Database/sql-server.png',
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: './assets/icons/Database/mysql.png',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: './assets/icons/Database/mongo-db.png',
    },

    // Tools
    {
      name: 'Git',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/git.png',
    },
    {
      name: 'GitHub',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/github.png',
    },
    {
      name: 'Docker',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/docker.png',
    },
    {
      name: 'Postman',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/postman.png',
    },
    {
      name: 'Visual Studio',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/visual-studio.png',
    },
    {
      name: 'VS Code',
      category: 'Tools & Technologies',
      icon: './assets/icons/Tools/visual-studio-code.png',
    },

    // Concepts
    {
      name: 'Object-Oriented Programming',
      category: 'Concepts',
      icon: './assets/icons/Concepts/oop.png',
    },
    {
      name: 'Data Structures',
      category: 'Concepts',
      icon: './assets/icons/Concepts/ds.png',
    },
    {
      name: 'Algorithms',
      category: 'Concepts',
      icon: './assets/icons/Concepts/alg.png',
    },
    {
      name: 'Design Patterns',
      category: 'Concepts',
      icon: './assets/icons/Concepts/dp.png',
    },
    {
      name: 'Clean Architecture',
      category: 'Concepts',
      icon: './assets/icons/Concepts/ca.png',
    },

    // Soft Skills
    {
      name: 'Communication',
      category: 'Soft Skills',
      icon: './assets/icons/SoftSkills/cm.png',
    },
    {
      name: 'Teamwork',
      category: 'Soft Skills',
      icon: './assets/icons/SoftSkills/tw.png',
    },
    {
      name: 'Problem Solving',
      category: 'Soft Skills',
      icon: './assets/icons/SoftSkills/ps.png',
    },
    {
      name: 'Time Management',
      category: 'Soft Skills',
      icon: './assets/icons/SoftSkills/tm.png',
    },
  ]);
  filteredSkills = computed(() => {
    const tab = this.activeTab();
    if (tab === 'All Skills') return this.skillsData().slice(0, 12);
    return this.skillsData().filter(
      (s) => s.category === tab || tab.includes(s.category),
    );
  });
  setTab(category: string) {
    this.activeTab.set(category);
  }
}
