import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleListComponent } from './vehicle-list.component';

@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VehicleListComponent
  ]
})
export class VehicleListModule { }
