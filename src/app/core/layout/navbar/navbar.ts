import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements AfterViewInit {
  private readonly elementRef =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    this.initializeScrollState();
    this.initializeActiveSection();
  }

  private initializeScrollState(): void {
    const root = this.elementRef.nativeElement;

    const navbar = root.querySelector('.navbar') as HTMLElement | null;

    if (!navbar) {
      return;
    }

    const update = (): void => {
      navbar.classList.toggle(
        'navbar--scrolled',
        window.scrollY > 24,
      );
    };

    window.addEventListener('scroll', update, {
      passive: true,
    });

    update();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', update);
    });
  }

  private initializeActiveSection(): void {
    const root = this.elementRef.nativeElement;

    const links = Array.from(
      root.querySelectorAll('nav a[href^="#"]'),
    ) as HTMLAnchorElement[];

    const sections = links
      .map((link) => {
        const id = link
          .getAttribute('href')
          ?.slice(1);

        return id
          ? document.getElementById(id)
          : null;
      })
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        const section = visible[0]
          ?.target as HTMLElement | undefined;

        if (!section) {
          return;
        }

        links.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') ===
              `#${section.id}`,
          );
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}
