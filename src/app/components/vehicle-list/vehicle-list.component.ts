import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Vehicle } from 'app/models/vehicle.model';
import { VehicleService } from 'app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  loading: boolean = false;

  constructor(private vehicleService: VehicleService, private router: Router) {}

  public ngOnInit(): void {
    this.loadVehicles();
  }

  public loadVehicles(): void {
    this.loading = true;
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => {
        
        this.vehicles = data;
        console.log(this.vehicles);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Vehicles', error);
        this.loading = false;
      }
    });
  }

  public confirmDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      this.deleteVehicle(id);
    }
  }

  public deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: () => {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
      },
      error: (error) => {
        console.error('Error deleting vehicle', error);
      }
    });
  }

  public selectVehicle(id: number): void {
    this.router.navigate(['vehicles/detail', id]);
  }

  public createNewVehicle(): void {
    this.router.navigate(['/vehicles/new']);
  }
}
