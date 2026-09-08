import { Routes } from '@angular/router';

import { PageLayoutComponent } from './core/layout/page-layout/page-layout'
import { Home } from './features/home/pages/home/home';
import { NovaTest } from './pages/nova-test';

export const routes: Routes = [
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: '',
                component: Home
            },
            {
              path: 'nova-test',
              component: NovaTest
            }
        ]
    }
];
