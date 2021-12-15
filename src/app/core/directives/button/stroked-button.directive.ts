import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { Color } from 'src/app/models/button.model';

@Directive({
  selector: '[stroked-button]',
})
export class StrokedButtonDirective {
  @HostBinding('class') get classes(): string {
    return this.getButtonClasses();
  }

  @Input('color') color: Color = 'white';

  constructor(private _ele: ElementRef) {}

  getButtonClasses(): string {
    let classes = `rounded-lg border border-gray-500 p-3 text-main-black font-bold bg-white`;

    return classes;
  }
}
