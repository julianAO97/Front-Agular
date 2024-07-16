import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'app/models/vehicle.model';
import { VehicleService } from 'app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicleId: number;
  vehicle: Vehicle;

  constructor(private vehicleService: VehicleService, private router: Router,private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // El '+' convierte el string a número
    this.loadVehicle(id);
  });
  }

  public loadVehicle(id: number): void {
    this.vehicleService.getVehicleById(id).subscribe({
      next: (data: Vehicle) => {
        this.vehicle = data;
      },
      error: (error) => {
        console.error('Error fetching Vehicle details', error);
      }
    });
  }

  public editVehicle(id: number): void {
    this.router.navigate(['vehicles/edit/', id]);
  }

 public deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: () => {
        console.log('Conductor eliminado exitosamente.');
        this.vehicle = null;
      },
      error: (error) => {
        console.error('Error deleting driver', error);
      }
    });
  }
}
