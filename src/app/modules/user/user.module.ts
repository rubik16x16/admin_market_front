import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { routes } from './routes';

@NgModule({
  imports: [
    FlexLayoutModule,
		RouterModule.forChild(routes),
    MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		MatCardModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    IndexComponent
  ],
  providers: [],
})

export class UserModule { }
