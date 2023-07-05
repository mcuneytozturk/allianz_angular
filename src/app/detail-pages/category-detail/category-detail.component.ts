import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/data/Category';
import { Post } from 'src/app/data/Post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {
  category?: Category;
  categories: Category[] = [];
  posts: Post[] = [];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private postService: PostService){}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    let categoryId = parseInt(params['id']);
    this.categoryService.getCategory(categoryId).subscribe(category => this.category = category)
    this.postService.getPostsByCategory(categoryId).subscribe(posts => this.posts = posts)
  }

}
