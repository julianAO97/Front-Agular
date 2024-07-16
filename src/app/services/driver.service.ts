import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Driver} from '../models/driver.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DriverService {
    private apiUrl = 'http://localhost/backMGM/public/api/v1/drivers';

    constructor(private http: HttpClient){}
  // obtener todos los conductores
    public getDrivers(): Observable<Driver[]>{
        return this.http.get<Driver[]>(this.apiUrl);
    }
    
  //obtener un conductor especifico 
    public getDriverById(id: number): Observable<Driver>{
        return this.http.get<Driver>(`${this.apiUrl}/${id}`);
    }
  // crear un conductor
    public createDriver(driver: Driver): Observable<Driver>{
        return this.http.post<Driver>(this.apiUrl, driver);
    }
 // acutualizar un conductor
    public updateDriver(id: number, driver: Driver): Observable<Driver>{
        return this.http.put<Driver>(`${this.apiUrl}/${id}`, driver);
    }
// acutualizar un conductor
    public deleteDriver(id: number): Observable<Driver>{
        return this.http.delete<Driver>(`${this.apiUrl}/${id}`);
    }
}
