import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonDirective } from './flat-button.directive';
import { StrokedButtonDirective } from './stroked-button.directive';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [FlatButtonDirective, StrokedButtonDirective, ButtonDirective],
  imports: [CommonModule],
  exports: [FlatButtonDirective, StrokedButtonDirective, ButtonDirective],
})
export class ButtonModule {}
