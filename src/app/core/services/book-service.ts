import { HttpClient } from '@angular/common/http';
import { appsettings as ENV } from '../setting/appsetting';
import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'User';

  getAll(){
    return this.http.get<Book[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }  

  create(book: Book){
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  update(book: Partial<Book>){
    return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }

  delete(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
