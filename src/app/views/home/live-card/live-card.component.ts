import { Component, Input, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';

@Component({
  selector: 'app-live-card',
  templateUrl: './live-card.component.html',
  styleUrls: ['./live-card.component.css']
})
export class LiveCardComponent implements OnInit {

  @Input()
  live: Live;

  constructor() { }

  ngOnInit(): void {
  }

}
