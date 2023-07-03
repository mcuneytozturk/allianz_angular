import { Injectable } from '@angular/core';
import { User } from '../data/User';
import { USERS } from 'src/app/data/users';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }
}
