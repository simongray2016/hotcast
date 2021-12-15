import { Component, OnInit } from '@angular/core';
import { IconsService } from './core/services/icons.service';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';
import { firstValueFrom, tap, timer } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MediaService } from './core/services/media.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './core/animations/page-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  constructor(
    private _iconsService: IconsService,
    private _overlay: Overlay,
    private _mediaService: MediaService,
    private _snackbar: MatSnackBar
  ) {}

  async ngOnInit() {
    await this.showSplashScreen();
    this.openSnackBarRequestFullScreen();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  showSplashScreen(): Promise<any> {
    const overlayRef = this._overlay.create();
    const splashScreenPortal = new ComponentPortal(SplashScreenComponent);
    overlayRef.attach(splashScreenPortal);
    const onClose = timer(3000).pipe(tap(() => overlayRef.detach()));
    return firstValueFrom(onClose);
  }

  openSnackBarRequestFullScreen() {
    const snackbarRef = this._snackbar.open(
      'Open full screen to the good experience',
      'Open',
      {
        panelClass: 'fullscreen-snackbar',
        duration: 3000,
        verticalPosition: 'top',
      }
    );

    snackbarRef
      .onAction()
      .pipe(tap(() => this._mediaService.requestFullScreen()))
      .subscribe();
  }
}
