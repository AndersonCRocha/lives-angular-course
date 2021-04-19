import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { LiveService } from 'src/app/service/live.service'
import { SharedModule } from 'src/app/shared/shared.module'
import { HomeComponent } from './home.component'
import { HomeRouting } from './home.routes'
import { LiveCardComponent } from './live-card/live-card.component'
import { LiveListComponent } from './live-list/live-list.component'

@NgModule({
  declarations: [HomeComponent, LiveListComponent, LiveCardComponent],
  imports: [SharedModule, MatTabsModule, MatCardModule, HomeRouting],
  providers: [LiveService],
})
export class HomeModule {}
