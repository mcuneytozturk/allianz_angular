import { Component } from '@angular/core';
import { Category } from 'src/app/data/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  newCategory: Category = {
    categoryId: 0,
    name: '',
    creationDate: new Date().toISOString().slice(0, 10)
  };

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.newCategory.categoryId = categories.length + 1;
    });
  }

  addNewCategory(): void {
    this.newCategory.creationDate = new Date().toISOString().slice(0, 10);
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = {
      categoryId: 0,
      name: '',
      creationDate: new Date().toISOString().slice(0, 10)
    };
  }
}
