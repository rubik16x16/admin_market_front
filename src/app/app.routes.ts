import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }
];
