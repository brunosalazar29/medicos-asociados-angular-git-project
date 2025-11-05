import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private apiUrl = 'http://localhost:3000/medicos'; // tu endpoint base del backend NestJS

  constructor(private http: HttpClient) {}

  registrarMedico(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
}
