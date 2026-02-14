import { HttpClient } from '@angular/common/http';
import { appsettings as ENV } from '../setting/appsetting';
import { inject, Injectable } from '@angular/core';
import { Books } from '../interfaces/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'Libros';

  getAll() {
    return this.http.get<Books[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Books>(`${this.apiUrl}/${id}`);
  }

  create(book: Partial<Books>) {
    return this.http.post<Books>(this.apiUrl, book);
  }

  update(id: number, book: Partial<Books>) {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book);
  }

  activar(id: number) {
    return this.http.patch<void>(`${this.apiUrl}/${id}/activar`, {});
  }

  desactivar(id: number) {
    return this.http.patch<void>(`${this.apiUrl}/${id}/desactivar`, {});
  }
}
