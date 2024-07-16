import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleFormComponent } from './vehicle-form.component';


@NgModule({
  declarations: [
    VehicleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VehicleFormComponent
  ]
})
export class VehicleFormModule { }
