import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { from, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  requestFullScreen() {
    from(this._document.body.requestFullscreen()).pipe(retry(2));
  }
}
