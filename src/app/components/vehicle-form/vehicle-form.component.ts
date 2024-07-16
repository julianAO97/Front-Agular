import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from 'app/models/vehicle.model';
import { VehicleService } from 'app/services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html'
})
export class VehicleFormComponent implements OnInit {
  public vehicleForm: FormGroup;
  public isSubmitting = false;

  constructor(private fb: FormBuilder,private router: Router, private vehicleService: VehicleService) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.vehicleForm = this.fb.group({     
      plate: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      description: ['', [Validators.required]],
      year: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      active: [false]
    });
  }

  public onSubmit(): void {
    if (this.vehicleForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const vehicleData: Vehicle = this.vehicleForm.value;

    if (vehicleData.id) {
      this.vehicleService.updateVehicle(vehicleData.id, vehicleData).subscribe({
        next: (response) => {
         // console.log('vehicle updated:', response);
          this.isSubmitting = false;
          this.router.navigate(['/vehicle']);
        },
        error: (error) => {
          console.error('Failed to update vehicle', error);
          this.isSubmitting = false;
        }
      });
    } else {
      this.vehicleService.createVehicle(vehicleData).subscribe({
        next: (response) => {
          console.log('vehicle created:', response);
          this.isSubmitting = false;
          this.router.navigate(['/vehicle']);
        },
        error: (error) => {
          console.error('Failed to create vehicle', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}
