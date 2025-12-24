import { inject, Injectable } from '@angular/core';
import { appsettings as ENV } from '../setting/appsetting';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../interfaces/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'User';

  getAll(){
    return this.http.get<Loan[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<Loan>(`${this.apiUrl}/${id}`);
  }  

  create(loan: Loan){
    return this.http.post<Loan>(`${this.apiUrl}`, loan);
  }

  update(loan: Partial<Loan>){
    return this.http.put<Loan>(`${this.apiUrl}/${loan.id}`, loan);
  }

  delete(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
