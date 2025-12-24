import { HttpClient } from '@angular/common/http';
import { appsettings as ENV } from '../setting/appsetting';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = ENV.apiUrl + 'User';

  getAll(){
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }  

  create(user: User){
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  update(user: Partial<User>){
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  delete(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
