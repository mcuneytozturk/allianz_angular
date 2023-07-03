import { Component } from '@angular/core';
import { Category } from 'src/app/data/Category';
import { CATEGORİES } from 'src/app/data/categories';

import { faUserPen, faTrash, faCheck, faTimes, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = CATEGORİES;
  title: string = 'Categories';
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
  searchText: string = '';
  filteredData: Category[] = CATEGORİES;

  filterData() {
    if (this.searchText === '') {
      this.filteredData = this.categories;
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
