import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation
} from '@angular/core';

import { LucideAngularModule,
         Eye,
         EyeOff
        } from 'lucide-angular';

import {
  RouterOutlet
} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LucideAngularModule,
  ],
  templateUrl: './app.html',
  styleUrl: '../styles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
