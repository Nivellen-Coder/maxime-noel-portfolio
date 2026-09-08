import {
  DestroyRef,
  Injectable,
  NgZone,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private lenis: Lenis | null = null;
  private initialized = false;

  private readonly prefersReducedMotion =
    isPlatformBrowser(this.platformId) &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroy();
    });
  }

  /**
   * Initializes the global animation system.
   *
   * Safe to call multiple times.
   */
  initialize(): void {
    if (
      this.initialized ||
      !isPlatformBrowser(this.platformId) ||
      this.prefersReducedMotion
    ) {
      return;
    }

    this.initialized = true;

    this.zone.runOutsideAngular(() => {
      this.initializeLenis();
    });
  }

  /**
   * Reveals an element when it enters the viewport.
   */
  reveal(
    element: HTMLElement,
    options: {
      y?: number;
      duration?: number;
      delay?: number;
      start?: string;
    } = {},
  ): void {
    if (!this.canAnimate()) {
      element.classList.add('is-visible');
      return;
    }

    const {
      y = 24,
      duration = 0.8,
      delay = 0,
      start = 'top 88%',
    } = options;

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
      },
    );
  }

  /**
   * Reveals multiple elements with a staggered entrance.
   */
  staggerReveal(
    elements: HTMLElement[] | NodeListOf<HTMLElement>,
    options: {
      y?: number;
      duration?: number;
      stagger?: number;
      start?: string;
    } = {},
  ): void {
    const items = Array.from(elements);

    if (!items.length) {
      return;
    }

    if (!this.canAnimate()) {
      items.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    const {
      y = 28,
      duration = 0.75,
      stagger = 0.08,
      start = 'top 88%',
    } = options;

    gsap.fromTo(
      items,
      {
        autoAlpha: 0,
        y,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: items[0],
          start,
          once: true,
        },
      },
    );
  }

  /**
   * Adds a subtle vertical parallax effect.
   */
  parallax(
    element: HTMLElement,
    options: {
      y?: number;
      start?: string;
      end?: string;
    } = {},
  ): void {
    if (!this.canAnimate()) {
      return;
    }

    const {
      y = 40,
      start = 'top bottom',
      end = 'bottom top',
    } = options;

    gsap.to(element, {
      y,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
    });
  }

  /**
   * Creates a small entrance animation for elements already visible
   * when the page loads.
   */
  entrance(
    elements: HTMLElement[] | NodeListOf<HTMLElement>,
    options: {
      y?: number;
      duration?: number;
      stagger?: number;
    } = {},
  ): gsap.core.Timeline | null {
    const items = Array.from(elements);

    if (!items.length) {
      return null;
    }

    if (!this.canAnimate()) {
      items.forEach((element) => {
        gsap.set(element, {
          clearProps: 'all',
        });
      });

      return null;
    }

    const {
      y = 20,
      duration = 0.8,
      stagger = 0.1,
    } = options;

    return gsap.timeline().fromTo(
      items,
      {
        autoAlpha: 0,
        y,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
      },
    );
  }

  heroParallax(
  container: HTMLElement,
  layers: Array<{
    element: HTMLElement;
    intensity: number;
  }>,
  destroyRef: DestroyRef,
): void {
  if (!this.canAnimate()) {
    return;
  }

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frameId: number | null = null;

  const update = (): void => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    layers.forEach(({ element, intensity }) => {
      element.style.transform =
        `translate3d(${currentX * intensity}px, ${currentY * intensity}px, 0)`;
    });

    frameId = requestAnimationFrame(update);
  };

  const handlePointerMove = (event: PointerEvent): void => {
    const rect = container.getBoundingClientRect();

    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  const handlePointerLeave = (): void => {
    targetX = 0;
    targetY = 0;
  };

  container.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  });

  container.addEventListener('pointerleave', handlePointerLeave, {
    passive: true,
  });

  frameId = requestAnimationFrame(update);

  destroyRef.onDestroy(() => {
    container.removeEventListener('pointermove', handlePointerMove);
    container.removeEventListener('pointerleave', handlePointerLeave);

    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }

    layers.forEach(({ element }) => {
      element.style.transform = '';
    });
  });
}

heroSpotlight(
  container: HTMLElement,
  destroyRef: DestroyRef,
): void {
  if (!this.canAnimate()) {
    return;
  }

  const handlePointerMove = (event: PointerEvent): void => {
    const rect = container.getBoundingClientRect();

    container.style.setProperty(
      '--hero-mouse-x',
      `${event.clientX - rect.left}px`,
    );

    container.style.setProperty(
      '--hero-mouse-y',
      `${event.clientY - rect.top}px`,
    );
  };

  const handlePointerLeave = (): void => {
    container.style.removeProperty('--hero-mouse-x');
    container.style.removeProperty('--hero-mouse-y');
  };

  container.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  });

  container.addEventListener('pointerleave', handlePointerLeave, {
    passive: true,
  });

  destroyRef.onDestroy(() => {
    container.removeEventListener('pointermove', handlePointerMove);
    container.removeEventListener('pointerleave', handlePointerLeave);

    container.style.removeProperty('--hero-mouse-x');
    container.style.removeProperty('--hero-mouse-y');
  });
}

projectTilt(
  card: HTMLElement,
  destroyRef: DestroyRef,
): void {
  if (
    !this.canAnimate() ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  ) {
    return;
  }

  const rotateX = gsap.quickTo(card, 'rotationX', {
    duration: 0.35,
    ease: 'power3.out',
  });

  const rotateY = gsap.quickTo(card, 'rotationY', {
    duration: 0.35,
    ease: 'power3.out',
  });

  const moveY = gsap.quickTo(card, 'y', {
    duration: 0.35,
    ease: 'power3.out',
  });

  const handlePointerMove = (event: PointerEvent): void => {
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateYValue = (x - 0.5) * 6;
    const rotateXValue = (0.5 - y) * 6;

    card.style.setProperty(
      '--card-mouse-x',
      `${event.clientX - rect.left}px`,
    );

    card.style.setProperty(
      '--card-mouse-y',
      `${event.clientY - rect.top}px`,
    );

    rotateX(rotateXValue);
    rotateY(rotateYValue);
    moveY(-4);
  };

  const handlePointerLeave = (): void => {
    rotateX(0);
    rotateY(0);
    moveY(0);

    card.style.removeProperty('--card-mouse-x');
    card.style.removeProperty('--card-mouse-y');
  };

  card.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  });

  card.addEventListener('pointerleave', handlePointerLeave, {
    passive: true,
  });

  destroyRef.onDestroy(() => {
    card.removeEventListener('pointermove', handlePointerMove);
    card.removeEventListener('pointerleave', handlePointerLeave);

    gsap.killTweensOf(card);

    card.style.transform = '';
    card.style.removeProperty('--card-mouse-x');
    card.style.removeProperty('--card-mouse-y');
  });
}

  /**
   * Refreshes ScrollTrigger measurements.
   */
  refresh(): void {
    if (!this.canAnimate()) {
      return;
    }

    ScrollTrigger.refresh();
  }

  /**
   * Indicates whether animations can safely run.
   */
  private canAnimate(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      !this.prefersReducedMotion
    );
  }

  /**
   * Initializes Lenis and synchronizes it with GSAP.
   */
  private initializeLenis(): void {
    this.lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(this.handleTicker);

    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Keeps Lenis and GSAP on the same animation clock.
   */
  private readonly handleTicker = (time: number): void => {
    this.lenis?.raf(time * 1000);
  };

  /**
   * Cleans up the animation system.
   */
  private destroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    gsap.ticker.remove(this.handleTicker);

    this.lenis?.destroy();
    this.lenis = null;

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

    this.initialized = false;
  }
}
