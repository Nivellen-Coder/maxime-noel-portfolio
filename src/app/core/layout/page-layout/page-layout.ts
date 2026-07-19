import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-page-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent,
        FooterComponent
    ],
    templateUrl: './page-layout.component.html',
    styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {}
