import { Component } from '@angular/core';
import { User } from 'src/app/data/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  newUser: User = {
    userId: 0,
    userName: '',
    email: '',
    creation_date: new Date().toISOString().slice(0, 10),
    isActive: true,
  };

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.newUser.userId = users.length + 1;
    });
  }

  addNewUser(): void {
    this.newUser.creation_date = new Date().toISOString().slice(0, 10);
    this.userService.addUser(this.newUser);
    this.newUser = {
      userId: 0,
      userName: '',
      email: '',
      creation_date: new Date().toISOString().slice(0, 10),
      isActive: true,
    };
  }
  
}
