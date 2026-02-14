import { inject, Injectable } from '@angular/core';
import { appsettings as ENV } from '../setting/appsetting';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../interfaces/loan/loan';
import { LoanDetail } from '../interfaces/loan/LoanDetail';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'Prestamos';

 getAll() {
    return this.http.get<LoanDetail[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<LoanDetail>(`${this.apiUrl}/${id}`);
  }

  create(payload: Loan) {
    return this.http.post<LoanDetail>(this.apiUrl, payload);
  }

  update(id: number, payload: Partial<Loan>) {
    return this.http.put<LoanDetail>(`${this.apiUrl}/${id}`, payload);
  }

  registrarDevolucion(id: number, fechaRealDevolucion: string) {
    return this.http.post<void>(`${this.apiUrl}/${id}/devolver`,{ fechaDevolucion: fechaRealDevolucion } );
  }

  anular(id: number, observacion?: string) {
    return this.http.post<void>(`${this.apiUrl}/${id}/anular`, observacion ?? null);
  }
}
