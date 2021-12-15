import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonDirective } from './flat-button.directive';
import { StrokedButtonDirective } from './stroked-button.directive';
import { ButtonDirective } from './button.directive';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [FlatButtonDirective, StrokedButtonDirective, ButtonDirective],
  imports: [CommonModule, MatRippleModule],
  exports: [FlatButtonDirective, StrokedButtonDirective, ButtonDirective],
})
export class ButtonModule {}
