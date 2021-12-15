import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage.constant';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userSignIn: any;

  get user() {
    return this._userSignIn;
  }

  constructor(private _localStorageService: LocalStorageService) {
    this._userSignIn = this._localStorageService.getValue(
      LOCAL_STORAGE_KEY.user
    );
  }
}
