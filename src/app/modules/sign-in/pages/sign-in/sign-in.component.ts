import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this._authService.login();
    this.goToMainApp();
  }

  goToMainApp() {
    this._router.navigate(
      [this._authService.isNewUser() ? 'onboarding' : 'home'],
      { replaceUrl: true }
    );
  }
}
