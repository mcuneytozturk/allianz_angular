import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];
  title: string = "Users";

  constructor(private userService: UserService){
  }

  ngOnInıt(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users))
  }
}
