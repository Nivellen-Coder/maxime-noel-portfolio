import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-spotlight-card',
  standalone: true,
  templateUrl: './spotlight-card.html',
  styleUrl: './spotlight-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotlightCardComponent {

  private readonly element = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const rect = this.element.nativeElement.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.element.nativeElement.style.setProperty('--x', `${x}px`);
    this.element.nativeElement.style.setProperty('--y', `${y}px`);
  }

}
