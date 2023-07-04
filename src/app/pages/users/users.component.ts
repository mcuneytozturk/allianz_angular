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
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['i'] !== undefined) {
      this.pageIndex = parseInt(queryParams['i']);
    }
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.userService
      .getUsers()
      .subscribe((users) => (this.filteredData = users));
  }

  deleteUser(userId: number | undefined): void {
    if (userId !== undefined) {
      this.userService.deleteUser(userId);
    } else {
      throw new Error('Kullanıcıya ait bir userId değeri bulunmuyor.');
    }
  }

  filterData() {
    if (this.searchText === '') {
      this.userService
        .getUsers()
        .subscribe((users) => (this.filteredData = users));
    } else {
      this.filteredData = this.users.filter((user) => {
        return user.userId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.router.navigate(['/users'], {
      queryParams: { userId: this.searchText },
    });
    this.filterData();
  }

  pageIndex: number = 0;
  pageSize: number = 10;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = false;

  handlePrevBtn() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.isNextDisabled = false;
      this.pageIndex === 0
        ? this.router.navigate(['users'])
        : this.router.navigate(['users'], {
            queryParams: { i: this.pageIndex },
          });
    } else {
      this.isPrevDisabled = true;
      alert('Last Page!!');
    }
  }

  handleNextBtn() {
    const remainingPages = this.users.length % this.pageSize;
    let totalPage: number = Math.floor(this.users.length / this.pageSize);

    if (remainingPages > 0) {
      totalPage++;
    }
    if (this.pageIndex + 1 < totalPage) {
      this.pageIndex++;
      this.isPrevDisabled = false;
      this.router.navigate(['users'], {
        queryParams: { i: this.pageIndex },
      });
    } else {
      alert('Last Page!!');
      this.isNextDisabled = true;
    }
  }
}
