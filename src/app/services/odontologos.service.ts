import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odontologo } from '../models/odontologo.model';


@Injectable({
  providedIn: 'root'
})
export class OdontologosService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOdontologos(): Observable<Odontologo[]> {
    const url = `${this.baseUrl}/odontologos`;
    return this.http.get<Odontologo[]>(url);
  }

  crearOdontologo(odontologo: Odontologo): Observable<any> {
    const url = `${this.baseUrl}/odontologos/register`;
    return this.http.post<any>(url, odontologo);
  }

  editarOdontologo(odontologo: Odontologo): Observable<any> {
    const url = `${this.baseUrl}/odontologos/${odontologo.matricula}`;
    return this.http.put<any>(url, odontologo);
  }

  eliminarOdontologo(matricula: string): Observable<void> {
    const url = `${this.baseUrl}/odontologos/${matricula}`;
    return this.http.delete<void>(url);
  }

}
