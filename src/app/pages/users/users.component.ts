import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/User';
import { UserService } from 'src/app/services/user.service';
import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faCircleInfo,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


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
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  
  searchText: string = '';
  filteredData: User[] = [];

  constructor(private userService: UserService, private router: Router ){}

  deleteUser(userId: number | undefined): void {
    if (userId !== undefined) {
      this.userService.deleteUser(userId);
    } else {
      throw new Error('Kullanıcıya ait bir userId değeri bulunmuyor.');
    }
  }
  
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
    this.router.navigate(['/users'], { queryParams: { userId: this.searchText } });
    this.filterData();
  }

  handlePrevBtn() {

  }
  handleNextBtn() {

  }
}
