import { Injectable } from '@angular/core';
import { User } from '../data/User';
import { USERS } from 'src/app/data/users';
import { Observable,Subject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USERS
  private usersSubject: Subject<User[]> = new Subject<User[]>();

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
    this.usersSubject.next(this.users);
  }

  getUsersSubject(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }
  
  deleteUser(userId: number): void {
    const index = this.users.findIndex(user => user.userId === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
