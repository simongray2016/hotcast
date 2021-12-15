import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage.constant';
import {
  FadeInRightOnEnterAnimation,
  FadeOutLeftOnLeaveAnimation,
} from 'src/app/core/animations/fade-animations';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [FadeInRightOnEnterAnimation, FadeOutLeftOnLeaveAnimation],
})
export class IntroComponent implements OnInit {
  customOptions: OwlOptions = {
    items: 1,
    center: true,
    autoWidth: true,
    mouseDrag: false,
    touchDrag: false,
  };

  lastSlide = false;

  constructor(
    private _localStorage: LocalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.notShowIntroInNextTime();
  }

  notShowIntroInNextTime() {
    this._localStorage.setValue(LOCAL_STORAGE_KEY.showedIntro, 'true');
  }

  onChangeSlides(data: SlidesOutputData) {
    this.lastSlide =
      (!!data.slides?.length && data.slides[0].id === 'owl-slide-1') ?? false;
  }

  goToApp() {
    this._router.navigate(['sign-in'], { replaceUrl: true });
  }
}
