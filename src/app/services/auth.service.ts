import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(email: string, password: string): Observable<any> {
    if(email === 'admin' && password === 'admin'){
      const user = { email: email, role: 'ROLE_USER' };
      return of({ user: user, token: '1234'});
    }

    return of({ error: 'Credenciales incorrectas' });
  }
}
