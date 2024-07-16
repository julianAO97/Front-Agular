import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../models/driver.model';
import { DriverService } from 'app/services/driver.service';


@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html'
})
export class DriverDetailComponent implements OnInit {
  @Input() driverId: number;
  driver: Driver;

  constructor(private driverService: DriverService, private router: Router,private activatedRoute: ActivatedRoute) {}



  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
    this.loadDriver(id);
  });
  }

  public loadDriver(id: number): void {
    this.driverService.getDriverById(id).subscribe({
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
