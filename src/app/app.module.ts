import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {
  FullscreenOverlayContainer,
  OverlayContainer,
  OverlayModule,
} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { IconsService } from './core/services/icons.service';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SplashScreenComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    OverlayModule,
    PortalModule,
  ],
  providers: [
    IconsService,
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
