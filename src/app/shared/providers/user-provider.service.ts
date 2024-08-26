import { Injectable, signal } from '@angular/core';
import { User } from '@data/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {
  list = signal<User[]>([]);
  listFiltered = signal<User[]>([]);

  setList(users: User[]){
    this.list.set(users);
    this.listFiltered.set(users);
  }
}
