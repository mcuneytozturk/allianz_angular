import { Component } from '@angular/core';
import { User } from 'src/app/data/User';
import { USERS } from 'src/app/data/users';
import { faUserPen, faTrash, faCheck, faTimes, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = USERS;
  title: string = "Users";
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
}
