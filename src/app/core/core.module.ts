import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { SharedModule } from '../shared/shared.module'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule, MatToolbarModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
