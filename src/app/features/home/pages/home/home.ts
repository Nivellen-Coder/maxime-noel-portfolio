import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';

import { AnimationService } from '../../../../core/animation/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly animation = inject(AnimationService);
  private readonly destroyRef = inject(DestroyRef);

  readonly selectedProject = signal('Vault Keeper');
  readonly selectedSkill = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      this.initializeAnimations();
    });
  }

  selectProject(name: string): void {
    this.selectedProject.set(name);
  }

  selectSkill(skill: string): void {
    this.selectedSkill.update((value) =>
      value === skill ? null : skill,
    );
  }

  private initializeAnimations(): void {
  const root = this.elementRef.nativeElement;

  this.animation.initialize();

  this.animateHero(root);
  this.animatePanels(root);
  this.animateProjects(root);
  this.animateSkills(root);
  this.animateJourney(root);
}

  /**
   * Hero entrance animation.
   */
  private animateHero(root: HTMLElement): void {
  const hero = root.querySelector<HTMLElement>('.hero');

  if (!hero) {
    return;
  }

  const content = hero.querySelectorAll<HTMLElement>(
    '.hero__content > *',
  );

  const motto = hero.querySelector<HTMLElement>('.hero__motto');
  const image = hero.querySelector<HTMLElement>('.hero__image');

  this.animation.entrance(content, {
    y: 22,
    duration: 0.8,
    stagger: 0.09,
  });

  if (motto) {
    this.animation.entrance([motto], {
      y: 12,
      duration: 0.9,
    });
  }

  if (!image) {
    return;
  }

  this.animation.parallax(image, {
    y: 24,
    start: 'top top',
    end: 'bottom top',
  });

  this.animation.heroParallax(
    hero,
    [
      {
        element: image,
        intensity: 8,
      },
    ],
    this.destroyRef,
  );

  this.animation.heroSpotlight(
    hero,
    this.destroyRef,
  );
}

  /**
   * Main panels reveal.
   */
  private animatePanels(root: HTMLElement): void {
    const panels = root.querySelectorAll<HTMLElement>(
      '.panel:not(.hero)',
    );

    panels.forEach((panel, index) => {
      this.animation.reveal(panel, {
        y: 24,
        duration: 0.75,
        delay: Math.min(index * 0.03, 0.18),
      });
    });
  }

  /**
   * Featured projects staggered reveal.
   */
  private animateProjects(root: HTMLElement): void {
  const projects = root.querySelectorAll<HTMLElement>(
    '.projects__grid .project',
  );

  this.animation.staggerReveal(projects, {
    y: 20,
    duration: 0.7,
    stagger: 0.1,
    start: 'top 86%',
  });

  projects.forEach((project) => {
    this.animation.projectTilt(
      project,
      this.destroyRef,
    );
  });
}

  /**
   * Skills staggered reveal.
   */
  private animateSkills(root: HTMLElement): void {
    const skills = root.querySelectorAll<HTMLElement>(
      '.skills__grid article',
    );

    this.animation.staggerReveal(skills, {
      y: 16,
      duration: 0.6,
      stagger: 0.06,
      start: 'top 88%',
    });
  }

  /**
   * Journey entries reveal.
   */
  private animateJourney(root: HTMLElement): void {
    const entries = root.querySelectorAll<HTMLElement>(
      '.journey li',
    );

    this.animation.staggerReveal(entries, {
      y: 16,
      duration: 0.65,
      stagger: 0.1,
      start: 'top 86%',
    });
  }

  readonly projects = [
    {
      name: 'Vault Keeper',
      kind: 'Projet principal',
      description:
        'Gestionnaire de collections gaming, séries, films et plus encore.',
      tags: ['Angular', '.NET', 'SQL Server'],
    },
    {
      name: 'CardNexus',
      kind: 'Projet personnel',
      description:
        'Marketplace de cartes à collectionner.',
      tags: ['Angular', 'Firebase', 'Stripe'],
    },
    {
      name: 'TaskFlow',
      kind: 'Projet personnel',
      description:
        'Application de gestion de tâches collaborative.',
      tags: ['Angular', 'Tailwind CSS', 'PWA'],
    },
  ];

  readonly skills = [
    'Angular',
    'TypeScript',
    '.NET',
    'Tailwind CSS',
    'Git',
    'Docker',
    'PostgreSQL',
    'Figma',
    'Playwright',
    'Linux',
    'VS Code',
    'GitHub',
  ];

  readonly interests = [
    ['🎮', 'Gaming', 'Enthusiast'],
    ['▣', 'TCG', 'Collector'],
    ['♫', 'Metalhead', ''],
    ['✈', 'Traveler', ''],
    ['✎', 'Art & Design', ''],
  ];
}
