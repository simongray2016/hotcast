import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ButtonModule } from 'src/app/core/directives/button/button.module';

import { CategoriesComponent } from './pages/categories/categories.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';

@NgModule({
  declarations: [CategoriesComponent, PodcastsComponent],
  imports: [CommonModule, OnboardingRoutingModule, ButtonModule],
})
export class OnboardingModule {}
