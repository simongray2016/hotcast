import { Component } from '@angular/core';
import { IconsService } from './core/services/icons.service';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';
import { timer } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _iconsService: IconsService, private _overlay: Overlay) {
    this.showSplashScreen();
  }

  showSplashScreen() {
    const overlayRef = this._overlay.create();
    const splashScreenPortal = new ComponentPortal(SplashScreenComponent);
    overlayRef.attach(splashScreenPortal);
    timer(3000).subscribe(() => overlayRef.detach());
  }
}
