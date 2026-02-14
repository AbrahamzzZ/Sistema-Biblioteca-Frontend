import { HttpClient } from '@angular/common/http';
import { appsettings as ENV } from '../setting/appsetting';
import { inject, Injectable } from '@angular/core';
import { CreateUserRequest, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'Usuarios';

  getAll(){
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }  

  create(user: CreateUserRequest) {
    return this.http.post<User>(this.apiUrl, user);
  }

  update(id: number, user: CreateUserRequest) {
    return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: number){
    return this.http.patch<void>(`${this.apiUrl}/${id}/desactivar`, {});
  }
}
