import { HttpClient } from '@angular/common/http';
import { appsettings as ENV } from '../setting/appsetting';
import { inject, Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/authResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'Auth';

  login(credenciales: Auth): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      credenciales
    );
  }

  guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
