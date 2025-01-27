import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',  // Default language redirect
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: '**',
    redirectTo: 'first',  // Default language for invalid routes
  },
];
