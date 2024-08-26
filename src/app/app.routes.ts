import { Routes } from '@angular/router';
import { INTERNAL_PATHS } from './data/constants/constants';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { dashabordRoutes } from '@modules/dashboard/dashboard.routes';
import { LoginComponent } from '@modules/auth/login/login.component';

export const routes: Routes = [
  {
    path: INTERNAL_PATHS.PATH_DEFAULT,
    component: DashboardComponent,
    children: dashabordRoutes,
  },
  {
    path: INTERNAL_PATHS.PATH_LOGIN,
    component: LoginComponent,
  }
];
