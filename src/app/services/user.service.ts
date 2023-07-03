import { Injectable } from '@angular/core';
import { User } from '../data/User';
import { USERS } from 'src/app/data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
