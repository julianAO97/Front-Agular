import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleDetailComponent } from './vehicle-detail.component';

@NgModule({
  declarations: [
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VehicleDetailComponent
  ]
})
export class VehicleDetailModule { }
