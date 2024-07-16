import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html'
})
export class DriverDetailComponent implements OnInit {
  @Input() driverId: number;
  driver: Driver;

  constructor(private driverService: DriverService, private router: Router) {}

  public ngOnInit(): void {
    this.loadDriver();
  }

  public loadDriver(): void {
    this.driverService.getDriverById(this.driverId).subscribe({
      next: (data: Driver) => {
        this.driver = data;
      },
      error: (error) => {
        console.error('Error fetching driver details', error);
      }
    });
  }

  public editDriver(id: number): void {
    this.router.navigate(['drivers/edit/', id]);
  }

 public deleteDriver(id: number): void {
    this.driverService.deleteDriver(id).subscribe({
      next: () => {
        console.log('Conductor eliminado exitosamente.');
        this.driver = null;
      },
      error: (error) => {
        console.error('Error deleting driver', error);
      }
    });
  }
}
