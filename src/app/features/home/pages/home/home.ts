import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  readonly selectedProject = signal('Vault Keeper');
  readonly selectedSkill = signal<string | null>(null);

  constructor() {
    afterNextRender(() => this.enableRevealAnimations());
  }

  selectProject(name: string): void { this.selectedProject.set(name); }
  selectSkill(skill: string): void { this.selectedSkill.update(value => value === skill ? null : skill); }

  private enableRevealAnimations(): void {
    const root = this.elementRef.nativeElement;
    // const elements = root.querySelectorAll<HTMLElement>('.panel');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .14 });
    // elements.forEach(element => observer.observe(element));
    // root.querySelectorAll<HTMLElement>('.project').forEach(project => project.addEventListener('click', () => {
    //   const name = project.querySelector('h3')?.textContent?.trim().split(' ')[0] ?? '';
    //   this.selectProject(name);
    //   root.querySelectorAll('.project').forEach(item => item.classList.remove('project--active'));
    //   project.classList.add('project--active');
    // }));
    // root.querySelectorAll<HTMLElement>('.skills article').forEach(skill => skill.addEventListener('click', () => {
    //   const name = skill.querySelector('span')?.textContent?.trim() ?? '';
    //   this.selectSkill(name);
    //   root.querySelectorAll('.skills article').forEach(item => item.classList.toggle('skill--active', item === skill));
    // }));
  }
  readonly projects = [
    { name: 'Vault Keeper', kind: 'Projet principal', description: 'Gestionnaire de collections gaming, séries, films et plus encore.', tags: ['Angular', '.NET', 'SQL Server'] },
    { name: 'CardNexus', kind: 'Projet personnel', description: 'Marketplace de cartes à collectionner.', tags: ['Angular', 'Firebase', 'Stripe'] },
    { name: 'TaskFlow', kind: 'Projet personnel', description: 'Application de gestion de tâches collaborative.', tags: ['Angular', 'Tailwind CSS', 'PWA'] },
  ];
  readonly skills = ['Angular', 'TypeScript', '.NET', 'Tailwind CSS', 'Git', 'Docker', 'PostgreSQL', 'Figma', 'Playwright', 'Linux', 'VS Code', 'GitHub'];
  readonly interests = [['🎮', 'Gaming', 'Enthusiast'], ['▣', 'TCG', 'Collector'], ['♫', 'Metalhead', ''], ['✈', 'Traveler', ''], ['✎', 'Art & Design', '']];
}
