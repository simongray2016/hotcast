import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { IntroComponent } from './intro.component';


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    CarouselModule
  ]
})
export class IntroModule { }
