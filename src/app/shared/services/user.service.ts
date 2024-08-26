import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '@data/models/user.model';
import { tap } from 'rxjs';
import { UserProviderService } from '@shared/providers/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.API_URL;
  http = inject(HttpClient);
  private userProvider = inject(UserProviderService)

  loadUsers() {
    return this.http.get<User[]>(this.apiUrl + "/users").pipe(tap(response => {
      this.userProvider.setList(response);
    }));
  }

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl + "/users", user).pipe(tap(response => {
      this.userProvider.list.update(state => [...state, response])
    }));
  }

  deleteUser(username: String) {
    return this.http.delete(this.apiUrl + "/users/"+username).pipe(tap(response => {
      const users = this.userProvider.list().filter(user => user.username !== username);
      this.userProvider.list.set(users);
    }));
  }
}
