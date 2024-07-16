import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html'
})
export class DriverFormComponent implements OnInit {
  public driverForm: FormGroup;
  public isSubmitting = false;

  constructor(private fb: FormBuilder,private router: Router, private driverService: DriverService) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.driverForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      ssn: [''],
      dob: [''],
      address: [''],
      city: [''],
      zip: [''],
      phone: [''],
      license: [''],
      active: [false]
    });
  }

  public onSubmit(): void {
    if (this.driverForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const driverData: Driver = this.driverForm.value;

    if (driverData.id) {
      this.driverService.updateDriver(driverData.id, driverData).subscribe({
        next: (response) => {
         // console.log('Driver updated:', response);
          this.isSubmitting = false;
          this.router.navigate(['/driver']);
        },
        error: (error) => {
          console.error('Failed to update driver', error);
          this.isSubmitting = false;
        }
      });
    } else {
      this.driverService.createDriver(driverData).subscribe({
        next: (response) => {
          console.log('Driver created:', response);
          this.isSubmitting = false;
          this.router.navigate(['/driver']);
        },
        error: (error) => {
          console.error('Failed to create driver', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}
