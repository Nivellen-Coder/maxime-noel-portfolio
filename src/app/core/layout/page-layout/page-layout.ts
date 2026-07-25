import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-page-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        Navbar,
        Footer
    ],
    templateUrl: './page-layout.html',
    styleUrl: './page-layout.scss'
})
export class PageLayoutComponent {}
