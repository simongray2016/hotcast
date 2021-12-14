import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage.constant';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  customOptions: OwlOptions = {
    items: 1,
    center: true,
    autoWidth: true,
  };

  constructor(private _localStorage: LocalStorageService) {}

  ngOnInit(): void {
    // this._localStorage.setValue(LOCAL_STORAGE_KEY.showedIntro, 'true');
  }
}
