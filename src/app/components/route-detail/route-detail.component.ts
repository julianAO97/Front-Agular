import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Route } from 'app/models/route.model';
import { RouteService } from 'app/services/route.service';


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html'
})
export class RouteDetailComponent implements OnInit {
  @Input() routeId: number;
  route: Route;

  constructor(private routeService: RouteService, private router: Router) {}

  public ngOnInit(): void {
    this.loadRoute();
  }

  public loadRoute(): void {
    console.log(this.routeId)
    this.routeService.getRouteById(this.routeId).subscribe({
      next: (data: Route) => {
        this.route = data;
      },
      error: (error) => {
        console.error('Error fetching route details', error);
      }
    });
  }

  public editRoute(id: number): void {
    this.router.navigate(['routes/edit/', id]);
  }

 public deleteRoute(id: number): void {
    this.routeService.deleteRoute(id).subscribe({
      next: () => {
        console.log('route eliminado exitosamente.');
        this.route = null;
      },
      error: (error) => {
        console.error('Error deleting route', error);
      }
    });
  }
}
