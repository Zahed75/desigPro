import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { BrandsComponent } from './components/brands/brands.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgetPassComponent,
  },
  {
    path: 'otp-verify',
    component: OtpVerificationComponent,
  },
  {
    path: 'sign-in',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'brand',
    component: BrandsComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [

    ],
  },
];

