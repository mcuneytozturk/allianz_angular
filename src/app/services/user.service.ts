import { Injectable } from '@angular/core';
import { USERS } from 'src/app/users';
import { User } from 'src/app/User';
import {Observable, of} from 'rxjs';

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
