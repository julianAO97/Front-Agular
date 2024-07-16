import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteFormComponent } from './route-form.component';



@NgModule({
  declarations: [
    RouteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouteFormComponent
  ]
})
export class RouteFormModule { }
