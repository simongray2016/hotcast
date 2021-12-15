import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { Color } from 'src/app/models/button.model';

@Directive({
  selector: '[button]',
})
export class ButtonDirective {
  @HostBinding('class') get classes(): string {
    return this.getButtonClasses();
  }

  @Input('color') color: Color = 'main-black';

  constructor(private _ele: ElementRef) {}

  getButtonClasses(): string {
    let classes = `rounded-lg p-3 font-bold text-${this.color}`;

    return classes;
  }
}
