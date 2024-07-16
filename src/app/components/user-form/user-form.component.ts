import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitting = false;

  constructor(private fb: FormBuilder,private router: Router, private userService: UserService) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.userForm = this.fb.group({     
     name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
     
    });
  }

  public onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const userData: User = this.userForm.value;

    if (userData.id) {
      this.userService.updateUser(userData.id, userData).subscribe({
        next: (response) => {
        //  console.log('user updated:', response);
          this.isSubmitting = false;
          this.router.navigate(['/user']);
        },
        error: (error) => {
          console.error('Failed to update user', error);
          this.isSubmitting = false;
        }
      });
    } else {
      this.userService.createUser(userData).subscribe({
        next: (response) => {
          console.log('user created:', response);
          this.isSubmitting = false;
          this.router.navigate(['/user']);
        },
        error: (error) => {
          console.error('Failed to create user', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}
