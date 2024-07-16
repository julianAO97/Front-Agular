import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/backMGM/public/api/v1/login';  // Ajusta esta URL según tu configuración
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials)
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.token = response.token;
            localStorage.setItem('token', this.token);
          }
        }),
        catchError((error) => {
          return throwError(error); // Manejo personalizado de errores si es necesario
        })
      );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  // Configuración del encabezado Authorization con el token JWT
  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  // Ejemplo de solicitud protegida que usa el token JWT
  getProtectedData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected-route`, { headers: this.getHeaders() })
      .pipe(
        catchError((error) => {
          return throwError(error); // Manejo personalizado de errores si es necesario
        })
      );
  }
}
