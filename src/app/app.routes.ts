import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { langGuard } from './lang.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'es/first',  // Default language redirect
    pathMatch: 'full',
  },
  {
    path: 'en/first',
    component: FirstComponent,
    canActivate: [langGuard],
  },
  {
    path: 'en/second',
    component: SecondComponent,
    canActivate: [langGuard],
  },
  {
    path: 'es/first',
    component: FirstComponent,
    canActivate: [langGuard],
  },
  {
    path: 'es/second',
    component: SecondComponent,
    canActivate: [langGuard],
  },
  {
    path: '**',
    redirectTo: 'es/first',  // Default language for invalid routes
  },
];
