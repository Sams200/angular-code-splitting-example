import { Routes } from '@angular/router';
import {App} from './app';
import {hasRoleGuard} from './auth/has-role.guard';
import {Role} from './auth/role';
import {Unauthorized} from './unauthorized/unauthorized';
import {Home} from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home
  },

  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then(c => c.Admin),
    canActivate: [hasRoleGuard],
    data: {
      roles: [Role.ADMIN]
    }
  },

  {
    path: 'unauthorized',
    component: Unauthorized
  }
];
