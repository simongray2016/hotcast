import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getValue<T>(key: string): T | null {
    return <T | null>JSON.parse(localStorage.getItem(key) ?? 'null');
  }

  setValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
