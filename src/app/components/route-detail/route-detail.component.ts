import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from 'app/models/route.model';
import { RouteService } from 'app/services/route.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html'
})
export class RouteDetailComponent implements OnInit {
  route: Route;

  constructor(
    private routeService: RouteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // El '+' convierte el string a número
      this.loadRoute(id);
    });
  }

  public loadRoute(id: number): void {
    this.routeService.getRouteById(id).subscribe({
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
        console.log('Route eliminado exitosamente.');
        this.route = null;
      },
      error: (error) => {
        console.error('Error deleting route', error);
      }
    });
  }
}
