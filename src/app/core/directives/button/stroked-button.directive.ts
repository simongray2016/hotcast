import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Color } from 'src/app/models/button.model';

@Directive({
  selector: '[stroked-button]',
  providers: [MatRipple],
})
export class StrokedButtonDirective {
  @HostBinding('class') get classes(): string {
    return this.getButtonClasses();
  }

  @HostListener('mousedown', ['$event']) onmousedown() {
    this._matRipple.launch({ centered: true });
  }

  @Input('color') color: Color = 'white';

  constructor(private _matRipple: MatRipple) {}

  getButtonClasses(): string {
    let classes = `relative overflow-hidden rounded-lg border border-gray-500 p-3 text-main-black font-bold bg-white`;

    return classes;
  }
}
