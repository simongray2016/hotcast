import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage.constant';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get user() {
    return this._localStorageService.getValue<any>(LOCAL_STORAGE_KEY.user);
  }

  constructor(private _localStorageService: LocalStorageService) {}

  login() {
    this._localStorageService.setValue(
      LOCAL_STORAGE_KEY.user,
      JSON.stringify({ username: 'Daniel', avatar: '', newUser: true })
    );
  }

  isNewUser(): boolean {
    return this.user.newUser ?? false;
  }
}
