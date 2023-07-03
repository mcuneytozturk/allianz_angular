import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/User';
import { UserService } from 'src/app/services/user.service';
import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  title: string = 'Users';
  users: User[] = [];
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
  
  searchText: string = '';
  filteredData: User[] = [];

  constructor(private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.userService.getUsers().subscribe((users) => (this.filteredData = users)); 
  }
  filterData() {
    if (this.searchText === '') {      
      this.userService.getUsers().subscribe((users) => (this.filteredData = users));
    } else {
      this.filteredData = this.users.filter((user) => {
        return user.userId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.filterData();
  }
}
