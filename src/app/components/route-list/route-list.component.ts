import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Route } from 'app/models/route.model';
import { RouteService } from 'app/services/route.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html'
})
export class RouteListComponent implements OnInit {
  routes: Route[] = [];
  loading: boolean = false;

  constructor(private routeService: RouteService, private router: Router) {}

  public ngOnInit(): void {
    this.loadroutes();
  }

  public loadroutes(): void {
    this.loading = true;
    this.routeService.getRoutes().subscribe({
      next: (data: Route[]) => {
        
        this.routes = data;        
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching routes', error);
        this.loading = false;
      }
    });
  }

  public confirmDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      this.deleteRoute(id);
    }
  }

  public deleteRoute(id: number): void {
    this.routeService.deleteRoute(id).subscribe({
      next: () => {
        this.routes = this.routes.filter(route => route.id !== id);
      },
      error: (error) => {
        console.error('Error deleting route', error);
      }
    });
  }

  public selectRoute(id: number): void {
    
    //this.router.navigate(['routes/detail/:id', id]);
    this.router.navigate(['routes/detail/', id]);
  }

  public createNewRoute(): void {
    this.router.navigate(['/routes/new']);
  }
}
