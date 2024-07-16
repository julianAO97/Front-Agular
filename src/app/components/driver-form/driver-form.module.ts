import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverFormComponent } from './driver-form.component';

@NgModule({
  declarations: [
    DriverFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DriverFormComponent
  ]
})
export class DriverFormModule { }
