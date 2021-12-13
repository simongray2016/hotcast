import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable()
export class IconsService {
  readonly icons: Array<{ name: string; url: string }> = [
    {
      name: 'home',
      url: 'assets/logo.svg',
    },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.icons.forEach((icon) =>
      iconRegistry.addSvgIcon(
        icon.name,
        sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      )
    );
  }
}
