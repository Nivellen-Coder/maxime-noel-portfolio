import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  readonly menuOpen = signal(false);
  readonly isDark = signal(true);

  toggleNavigation(): void { this.menuOpen.update(open => !open); }
  closeNavigation(): void { this.menuOpen.set(false); }
  toggleTheme(): void {
    this.isDark.update(dark => !dark);
    this.document.documentElement.classList.toggle('light-theme', !this.isDark());
  }
}
