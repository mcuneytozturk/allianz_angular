import { Injectable } from '@angular/core';
import { Category } from 'src/app/data/Category';
import { CATEGORİES } from 'src/app/data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[]{
    return CATEGORİES;
  }
}
