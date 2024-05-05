import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first-page/first-page.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'first-component', component: FirstComponent}
]