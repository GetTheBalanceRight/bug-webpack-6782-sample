import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from '../app/root';

export const ROUTES: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [ ]
  }
];
