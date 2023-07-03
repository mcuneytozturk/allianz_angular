import { Component } from '@angular/core';
import { Category } from 'src/app/data/Category';
import { categories } from 'src/app/data/categories';

import { faUserPen, faTrash, faCheck, faTimes, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = categories;
  title: string = 'Categories';
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
}
