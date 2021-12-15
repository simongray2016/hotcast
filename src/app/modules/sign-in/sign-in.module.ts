import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { ButtonModule } from 'src/app/core/directives/button/button.module';

import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, ButtonModule],
})
export class SignInModule {}
