import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getValue(key: string) {
    return localStorage.getItem(key);
  }

  setValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
