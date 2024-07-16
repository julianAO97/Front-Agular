import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html'
})
export class DriverListComponent implements OnInit {
  public drivers: Driver[] = [];
  public loading: boolean = false;

  constructor(private driverService: DriverService, private router: Router) {}

  public ngOnInit(): void {
    this.loadDrivers();
  }

  public loadDrivers(): void {
    this.loading = true;
    this.driverService.getDrivers().subscribe({
      next: (data: Driver[]) => {
        //console.log('Drivers fetched:', data);
        this.drivers = data;
       // console.log('Drivers assigned:', this.drivers);
        this.loading = false;
      },
      error: (error) => {
       // console.error('Error fetching drivers', error);
        this.loading = false;
      }
    });
  }

  public confirmDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      this.deleteDriver(id);
    }
  }

  public deleteDriver(id: number): void {
    this.driverService.deleteDriver(id).subscribe({
      next: () => {
        this.drivers = this.drivers.filter(driver => driver.id !== id);
      },
      error: (error) => {
        console.error('Error deleting driver', error);
      }
    });
  }

  public selectDriver(id: number): void {
    this.router.navigate(['drivers/detail', id]);
  }

  public createNewDriver(): void {
    this.router.navigate(['/drivers/new']);
  }
}
