import { Injectable } from '@angular/core';
import { Turno } from '../models/turno.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private baseUrl = "http://localhost:8080/turno";

  constructor(private http: HttpClient) { }

  getTurnos(): Observable<Turno[]> {
    return this.http.get<Turno[]>(this.baseUrl);
  }

  postTurno(turno: Turno): Observable<Turno> {
    const url = `${this.baseUrl}/register`;
    console.log(turno);

    return this.http.post<Turno>(url, turno);
  }

  deleteTurno(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete(url);
  }

  editarTurno(turno: Turno): Observable<Turno> {
    const url = `${this.baseUrl}/${turno.id}`;

    return this.http.put<Turno>(url, turno);
  }
}
