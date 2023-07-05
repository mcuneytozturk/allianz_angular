import { Component } from '@angular/core';
import { Category } from 'src/app/data/Category';

import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faMagnifyingGlass,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Category[] = [];
  title: string = 'Categories';

  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faMagnifyingGlass = faMagnifyingGlass;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  searchText: string = '';
  filteredData: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['categoryId'] !== undefined) {
      this.pageIndex = parseInt(queryParams['categoryId']);
    }
    this.categoryService
    .getCategories()
    .subscribe((categories) => (this.categories = categories));
    this.categoryService
    .getCategories()
    .subscribe((categories) => (this.filteredData = categories));
  }

  filterData() {
    if (this.searchText === '') {
      this.categoryService
        .getCategories()
        .subscribe((categories) => (this.filteredData = categories));
    } else {
      this.filteredData = this.categories.filter((category) => {
        return category.categoryId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.router.navigate(['/categories'], {
      queryParams: { categoryId: this.searchText },
    });
    this.filterData();
  }

  deleteCategory(categoryId: number | undefined): void {
    if(categoryId !== undefined){
      this.categoryService.deleteCategory(categoryId)
    } else {
      throw new Error('Gönderiye ait bir categoryId değeri bulunmuyor.')
    }
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
        ? this.router.navigate(['categories'])
        : this.router.navigate(['categories'], {
            queryParams: { i: this.pageIndex },
          });
    } else {
      this.isPrevDisabled = true;
      alert('Last Page!!');
    }
  }

  handleNextBtn() {
    const remainingPages = this.categories.length % this.pageSize;
    let totalPage: number = Math.floor(this.categories.length / this.pageSize);

    if (remainingPages > 0) {
      totalPage++;
    }
    if (this.pageIndex + 1 < totalPage) {
      this.pageIndex++;
      this.isPrevDisabled = false;
      this.router.navigate(['categories'], {
        queryParams: { i: this.pageIndex },
      });
    } else {
      alert('Last Page!!');
      this.isNextDisabled = true;
    }
  }
}
