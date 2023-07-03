import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/data/Category';
import { CATEGORİES } from 'src/app/data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORİES)
    return categories;
  }
}
