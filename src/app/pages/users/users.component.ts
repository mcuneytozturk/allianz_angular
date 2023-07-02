import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { USERS } from 'src/app/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = USERS;
  title: string = "Users";

  constructor(){
  }

  ngOnInıt(): void {  }
}
