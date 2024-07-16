import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteDetailComponent } from './route-detail.component';

@NgModule({
  declarations: [
    RouteDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouteDetailComponent
  ]
})
export class RouteDetailModule { }
