import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteService } from 'app/services/route.service';
import { DriverService } from 'app/services/driver.service';
import { VehicleService } from 'app/services/vehicle.service';
import { Route } from 'app/models/route.model';
import { Driver } from 'app/models/driver.model';
import { Vehicle } from 'app/models/vehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route-form.component.html',
  // styleUrls: ['./route.component.css']
})
export class RouteFormComponent implements OnInit {
  routeForm: FormGroup;
  public isSubmitting = false;
  drivers: Driver[] = [];
  vehicles: Vehicle[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private routeService: RouteService
  ) {
    this.routeForm = this.fb.group({
      name: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
      description: ['', [Validators.required]],
      driver_id: ['', [Validators.required]],
      vehicle_id: ['', [Validators.required]],
      active: [false]
    });
  }

  ngOnInit(): void {
    this.getDrivers();
    this.getVehicles();
  }

  getDrivers(): void {
    this.driverService.getDrivers().subscribe((data: Driver[]) => {
      this.drivers = data;
    });
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });
  }

  public onSubmit(): void {
    if (this.routeForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const routeData: Route = this.routeForm.value;

    if (routeData.id) {
      this.routeService.updateRoute(routeData.id, routeData).subscribe({
        next: (response) => {
          //console.log('route updated:', response);
          this.isSubmitting = false;
          this.router.navigate(['/route']);
        },
        error: (error) => {
          console.error('Failed to update route', error);
          this.isSubmitting = false;

        }
      });
    } else {
      this.routeService.createRoute(routeData).subscribe({
        next: (response) => {
          console.log('route created:', response);
          this.isSubmitting = false;
          this.router.navigate(['/route']);
        },
        error: (error) => {
          console.error('Failed to create route', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}
