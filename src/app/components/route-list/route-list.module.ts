import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteListComponent } from './route-list.component';

@NgModule({
  declarations: [
    RouteListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouteListComponent
  ]
})
export class RouteListModule { }
