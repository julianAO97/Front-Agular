import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverDetailComponent } from './driver-detail.component';

@NgModule({
  declarations: [
    DriverDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DriverDetailComponent
  ]
})
export class DriverDetailModule { }
