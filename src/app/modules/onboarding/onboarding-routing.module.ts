import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'podcasts',
    component: PodcastsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
