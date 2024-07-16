import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from 'app/models/user.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost/backMGM/public/api/v1/users';

    constructor(private http: HttpClient){}
  // obtener todos los conductores
    public getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.apiUrl);
    }
    
  //obtener un conductor especifico 
    public getUserById(id: number): Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }
  // crear un conductor
    public createUser(User: User): Observable<User>{
        return this.http.post<User>(this.apiUrl, User);
    }
 // acutualizar un conductor
    public updateUser(id: number, User: User): Observable<User>{
        return this.http.put<User>(`${this.apiUrl}/${id}`, User);
    }
// acutualizar un conductor
    public deleteUser(id: number): Observable<User>{
        return this.http.delete<User>(`${this.apiUrl}/${id}`);
    }
}
