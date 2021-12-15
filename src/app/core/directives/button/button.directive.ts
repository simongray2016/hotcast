import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Color } from 'src/app/models/button.model';

@Directive({
  selector: '[button]',
  providers: [MatRipple],
})
export class ButtonDirective {
  @HostBinding('class') get classes(): string {
    return this.getButtonClasses();
  }

  @HostListener('mousedown', ['$event']) onmousedown() {
    this._matRipple.launch({ centered: true });
  }

  @Input('color') color: Color = 'main-black';

  constructor(private _matRipple: MatRipple) {}

  getButtonClasses(): string {
    let classes = `relative overflow-hidden rounded-lg p-3 font-bold text-${this.color}`;

    return classes;
  }
}
