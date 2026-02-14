import { inject, Injectable } from '@angular/core';
import { appsettings as ENV } from '../setting/appsetting';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../interfaces/loan/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'Prestamos';

  create(payload: Loan) {
    return this.http.post(this.apiUrl, payload);
  }
}
