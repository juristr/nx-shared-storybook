import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GreeterComponent]
})
export class SharedUiGreeterModule {}
