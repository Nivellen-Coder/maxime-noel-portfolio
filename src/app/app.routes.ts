import { Routes } from '@angular/router';

import { PageLayoutComponent } from './core/layout/page-layout/page-layout'
import { HomeComponent } from './features/home/pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];
