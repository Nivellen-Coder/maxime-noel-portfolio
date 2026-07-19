import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.primary]': 'variant() === "primary"',
    '[class.secondary]': 'variant() === "secondary"',
    '[class.ghost]': 'variant() === "ghost"',
  }
})
export class Button {

  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');

}
