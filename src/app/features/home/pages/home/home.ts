import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private carouselTimer?: ReturnType<typeof setInterval>;
  readonly activeSlide = signal(0);
  readonly selectedProject = signal('Vault Keeper');
  readonly selectedSkill = signal<string | null>(null);
  readonly projects = [
    { name: 'Vault Keeper', kind: 'Projet principal', description: 'Gestionnaire de collections gaming, series, films et plus encore.', tags: ['Angular', '.NET', 'SQL Server'] },
    { name: 'CardNexus', kind: 'Projet personnel', description: 'Marketplace de cartes a collectionner.', tags: ['Angular', 'Firebase', 'Stripe'] },
    { name: 'TaskFlow', kind: 'Projet personnel', description: 'Application de gestion de taches collaborative.', tags: ['Angular', 'Tailwind CSS', 'PWA'] },
  ];
  readonly skills = ['Angular', 'TypeScript', '.NET', 'Tailwind CSS', 'Git', 'Docker', 'PostgreSQL', 'Figma', 'Playwright', 'Linux', 'VS Code', 'GitHub'];
  readonly interests = [['Game', 'Gaming', 'Enthusiast'], ['TCG', 'TCG', 'Collector'], ['Music', 'Metalhead', ''], ['Travel', 'Traveler', ''], ['Art', 'Art & Design', '']];

  constructor() { afterNextRender(() => { this.enableInteractions(); this.startCarousel(); }); }

  nextSlide(): void { this.activeSlide.update(slide => (slide + 1) % 2); this.restartCarousel(); }
  previousSlide(): void { this.activeSlide.update(slide => (slide + 1) % 2); this.restartCarousel(); }
  selectSlide(slide: number): void { this.activeSlide.set(slide); this.restartCarousel(); }
  ngOnDestroy(): void { this.stopCarousel(); }

  private startCarousel(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.carouselTimer = setInterval(() => this.activeSlide.update(slide => (slide + 1) % 2), 7000);
  }

  private stopCarousel(): void { if (this.carouselTimer) clearInterval(this.carouselTimer); }
  private restartCarousel(): void { this.stopCarousel(); this.startCarousel(); }

  private enableInteractions(): void {
    const root = this.elementRef.nativeElement as HTMLElement;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .14 });
    root.querySelectorAll<HTMLElement>('.panel').forEach(element => observer.observe(element));
    root.querySelectorAll<HTMLElement>('.project').forEach((project, index) => project.addEventListener('click', () => {
      this.selectedProject.set(this.projects[index].name);
      root.querySelectorAll('.project').forEach(item => item.classList.remove('project--active'));
      project.classList.add('project--active');
    }));
    root.querySelectorAll<HTMLElement>('.skills article').forEach((skill, index) => skill.addEventListener('click', () => {
      this.selectedSkill.set(this.skills[index]);
      root.querySelectorAll('.skills article').forEach(item => item.classList.toggle('skill--active', item === skill));
    }));
  }
}
