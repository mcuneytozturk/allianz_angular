import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Category } from 'src/app/data/Category';
import { CATEGORİES } from 'src/app/data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = CATEGORİES;
  private categoriesSubject: Subject<Category[]> = new Subject<Category[]>();

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories)
  }

  addCategory(newCategory: Category): void {
    this.categories.push(newCategory);
    this.categoriesSubject.next(this.categories)
  }

  getCategoriesSubject(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  deleteCategory(id:number): void {
    const index = this.categories.findIndex(category => category.categoryId === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }
}
