import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage.constant';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _localStorage: LocalStorageService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const showedIntro = this._localStorage.getValue(
      LOCAL_STORAGE_KEY.showedIntro
    );
    if (!showedIntro) {
      this._router.navigate(['intro']);
      return false;
    }
    return true;
  }
}
