import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Route } from 'app/models/route.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    private apiUrl = 'http://localhost/backMGM/public/api/v1/routes';

    constructor(private http: HttpClient){}
  // obtener todos los rutaes
    public getRoutes(): Observable<Route[]>{
        return this.http.get<Route[]>(this.apiUrl);
    }
    
  //obtener un ruta especifico 
    public getRouteById(id: number): Observable<Route>{
        return this.http.get<Route>(`${this.apiUrl}/${id}`);
    }
  // crear un ruta
    public createRoute(route: Route): Observable<Route>{
        return this.http.post<Route>(this.apiUrl, route);
    }
 // acutualizar un ruta
    public updateRoute(id: number, route: Route): Observable<Route>{
        return this.http.put<Route>(`${this.apiUrl}/${id}`, route);
    }
// acutualizar un ruta
    public deleteRoute(id: number): Observable<Route>{
        return this.http.delete<Route>(`${this.apiUrl}/${id}`);
    }
}
