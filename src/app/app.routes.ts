import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: async () => (await import('@pages/home/home.routes')).ROUTES,
    canLoad: [],
  },
  {
    path: 'history',
    loadChildren: async () => (await import('@pages/history/history.routes')).ROUTES,
    canLoad: [],
  },
  {
    path: '**',
    loadComponent: async () => (await import('@pages/screens/not-found/not-found.page')).NotFoundPage,
  },
];
