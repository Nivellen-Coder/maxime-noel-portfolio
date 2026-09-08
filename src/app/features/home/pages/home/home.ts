import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly projects = [
    { name: 'Vault Keeper', kind: 'Projet principal', description: 'Gestionnaire de collections gaming, séries, films et plus encore.', tags: ['Angular', '.NET', 'SQL Server'] },
    { name: 'CardNexus', kind: 'Projet personnel', description: 'Marketplace de cartes à collectionner.', tags: ['Angular', 'Firebase', 'Stripe'] },
    { name: 'TaskFlow', kind: 'Projet personnel', description: 'Application de gestion de tâches collaborative.', tags: ['Angular', 'Tailwind CSS', 'PWA'] },
  ];
  readonly skills = ['Angular', 'TypeScript', '.NET', 'Tailwind CSS', 'Git', 'Docker', 'PostgreSQL', 'Figma', 'Playwright', 'Linux', 'VS Code', 'GitHub'];
  readonly interests = [['🎮', 'Gaming', 'Enthusiast'], ['▣', 'TCG', 'Collector'], ['♫', 'Metalhead', ''], ['✈', 'Traveler', ''], ['✎', 'Art & Design', '']];
}
