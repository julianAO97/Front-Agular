import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Vehicle } from 'app/models/vehicle.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private apiUrl = 'http://localhost/backMGM/public/api/v1/vehicles';

    constructor(private http: HttpClient){}
  // obtener todos los vehiculos
    public getVehicles(): Observable<Vehicle[]>{
        return this.http.get<Vehicle[]>(this.apiUrl);
    }
    
  //obtener un vehiculo especifico 
    public getVehicleById(id: number): Observable<Vehicle>{
        return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
    }
  // crear un vehiculo
    public createVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.http.post<Vehicle>(this.apiUrl, vehicle);
    }
 // acutualizar un vehiculo
    public updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle>{
        return this.http.put<Vehicle>(`${this.apiUrl}/${id}`, vehicle);
    }
// acutualizar un vehiculo
    public deleteVehicle(id: number): Observable<Vehicle>{
        return this.http.delete<Vehicle>(`${this.apiUrl}/${id}`);
    }
}