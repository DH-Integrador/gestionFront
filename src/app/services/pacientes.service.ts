import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

=======
>>>>>>> 14e578891308c94bff49f107195cfd982f51b363

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    const url = `${this.baseUrl}/pacientes`;
    return this.http.get<Paciente[]>(url);
  }

  crearPaciente(Paciente: Paciente): Observable<any> {
    const url = `${this.baseUrl}/pacientes/register`;
    return this.http.post<any>(url, Paciente);
  }

  editarPaciente(Paciente: Paciente): Observable<any> {
    const url = `${this.baseUrl}/pacientes/${Paciente.dni}`;
    return this.http.put<any>(url, Paciente);
  }
  
  eliminarPaciente(dni: string): Observable<void> {
    const url = `${this.baseUrl}/pacientes/${dni}`;
    return this.http.delete<void>(url);
  }

=======

  constructor() { }
>>>>>>> 14e578891308c94bff49f107195cfd982f51b363
}
