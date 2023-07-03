import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent,
    ButtonComponent
  ]
})
export class PagesModule { }
