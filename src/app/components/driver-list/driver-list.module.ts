import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverListComponent } from './driver-list.component';

@NgModule({
  declarations: [
    DriverListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DriverListComponent
  ]
})
export class DriverListModule { }
