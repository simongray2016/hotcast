import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('src/app/modules/intro/intro.module').then((m) => m.IntroModule),
    data: { animation: 'IntroPage' },
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('src/app/modules/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
    data: { animation: 'SignInPage' },
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('src/app/modules/onboarding/onboarding.module').then(
        (m) => m.OnboardingModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    data: { animation: 'HomePage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
