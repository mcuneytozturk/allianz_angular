import { Component } from '@angular/core';
import { Category } from 'src/app/data/Category';

import { faUserPen, faTrash, faCheck, faTimes, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = [];
  title: string = 'Categories';
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
  searchText: string = '';
  filteredData: Category[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
    this.categoryService.getCategories().subscribe((categories) => (this.filteredData = categories));
  }
  filterData() {
    if (this.searchText === '') {
      this.categoryService.getCategories().subscribe((categories) => (this.filteredData = categories));
    } else {
      this.filteredData = this.categories.filter((category) => {
        return category.categoryId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.filterData();
  }
}
