import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
