import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {authGuard} from './guard/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        component: AuthComponent,
      },
      {
        path: 'layout',
        component: LayoutComponent,
        children: [
          {
            path:'dashboard',
            component:DashboardComponent
          },
          
          {
            path: '**',
            redirectTo: 'sign-in',
          },
        ],
      },

];
