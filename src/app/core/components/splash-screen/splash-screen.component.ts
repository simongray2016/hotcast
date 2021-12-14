import { Component, HostBinding, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { FadeOutOnLeaveAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations: [FadeOutOnLeaveAnimation],
})
export class SplashScreenComponent implements OnInit {
  @HostBinding('@FadeOutOnLeave')

  fadeUp = false;

  constructor() {}

  ngOnInit(): void {
    timer(1100).subscribe(() => (this.fadeUp = true));
  }
}
