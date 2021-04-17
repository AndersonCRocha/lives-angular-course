import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { forkJoin } from 'rxjs'
import Live from 'src/app/shared/domain/model/live.model'
import { LiveService } from 'src/app/service/live.service'

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css'],
})
export class LiveListComponent implements OnInit {
  private exampleVideoUrl =
    'https://www.youtube.com/embed/9_FBCMlqTmM?list=PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q'
  public previousLives: Live[]
  public nextLives: Live[]

  constructor(
    private liveService: LiveService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getLives()
  }

  private getLives(): void {
    forkJoin([
      this.liveService.getLivesFakeApi(),
      this.liveService.getLivesFakeApi(),
    ]).subscribe(([previous, next]) => {
      this.previousLives = previous.contents.map((live: Live) => ({
        ...live,
        urlSafe: this.sanitizer.bypassSecurityTrustResourceUrl(
          this.exampleVideoUrl
        ),
      }))

      this.nextLives = next.contents.map((live: Live) => ({
        ...live,
        urlSafe: this.sanitizer.bypassSecurityTrustResourceUrl(
          this.exampleVideoUrl
        ),
        // TODO: urlSafe: this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      }))
    })
  }
}
